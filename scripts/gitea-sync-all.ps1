# Gitea PROJECT SYNC — all montfortre folders
# Safe to re-run. Does not modify origin URLs. Does not force-push.

$ErrorActionPreference = 'Continue'
$env:GITEA_URL   = [Environment]::GetEnvironmentVariable('GITEA_URL','User')
$env:GITEA_USER  = [Environment]::GetEnvironmentVariable('GITEA_USER','User')
$env:GITEA_PEER  = [Environment]::GetEnvironmentVariable('GITEA_PEER','User')
$env:GITEA_TOKEN = [Environment]::GetEnvironmentVariable('GITEA_TOKEN','User')
$headers = @{ Authorization = "token $($env:GITEA_TOKEN)"; 'Content-Type' = 'application/json' }

$PATHSPEC = @(
  '.', ':(exclude).git', ':(exclude).fullgit', ':(exclude)node_modules',
  ':(exclude).next', ':(exclude)dist', ':(exclude)build', ':(exclude).venv',
  ':(exclude)venv', ':(exclude)__pycache__', ':(exclude)target', ':(exclude)vendor',
  ':(exclude)*.log'
)

$ROBO_EXCLUDES = 'node_modules .next dist build .venv venv __pycache__ target vendor .git .fullgit'

function Test-GiteaWritable($root) {
  try {
    if (-not (Test-Path $root)) { New-Item -ItemType Directory -Path $root -Force | Out-Null }
    $t = Join-Path $root ("_writetest_" + [guid]::NewGuid().ToString('N'))
    Set-Content -Path $t -Value 'ok' -ErrorAction Stop
    Remove-Item $t -Force
    return $true
  } catch { return $false }
}

function Get-MirrorRoot {
  $envRoot = [Environment]::GetEnvironmentVariable('MIRROR_ROOT','User')
  if ($envRoot -and (Test-GiteaWritable $envRoot)) { return @{ Path = $envRoot; Why = 'MIRROR_ROOT env' } }
  if ((Test-Path 'Z:\') -and (Test-GiteaWritable 'Z:\projects')) { return @{ Path = 'Z:\projects'; Why = 'Z: writable' } }
  if ((Test-Path 'X:\') -and (Test-GiteaWritable 'X:\projects')) { return @{ Path = 'X:\projects'; Why = 'X: writable' } }
  return $null
}

function Ensure-NodeModulesGitignore($proj) {
  $gi = Join-Path $proj '.gitignore'
  $text = if (Test-Path $gi) { Get-Content $gi -Raw } else { '' }
  $changed = $false
  if ($text -notmatch '(?m)^\s*node_modules/?\s*$' -and $text -notmatch '(?m)\*\*/node_modules') {
    if ($text.Length -gt 0 -and -not $text.EndsWith("`n")) { $text += "`n" }
    $text += "node_modules/`n"
    $changed = $true
  }
  if ($text -notmatch '(?m)^\s*\.fullgit/?\s*$') {
    if ($text.Length -gt 0 -and -not $text.EndsWith("`n")) { $text += "`n" }
    $text += ".fullgit/`n"
    $changed = $true
  }
  if ($changed) { Set-Content $gi $text -Encoding utf8 -NoNewline; Write-Host "  updated .gitignore" }
}

function Resolve-Owner($X) {
  try {
    $r = Invoke-WebRequest -Uri "$($env:GITEA_URL)/api/v1/repos/$($env:GITEA_PEER)/$X" -Headers $headers -UseBasicParsing
    if ($r.StatusCode -eq 200) { return @{ OWNER = $env:GITEA_PEER; Case = '2a peer owns' } }
  } catch {}
  try {
    $r = Invoke-WebRequest -Uri "$($env:GITEA_URL)/api/v1/repos/$($env:GITEA_USER)/$X" -Headers $headers -UseBasicParsing
    if ($r.StatusCode -eq 200) { return @{ OWNER = $env:GITEA_USER; Case = '2b user owns' } }
  } catch {}
  return @{ OWNER = $env:GITEA_USER; Case = '2c create under user' }
}

function Ensure-GiteaRepo($name) {
  try {
    $r = Invoke-WebRequest -Uri "$($env:GITEA_URL)/api/v1/repos/$($env:GITEA_USER)/$name" -Headers $headers -UseBasicParsing
    if ($r.StatusCode -eq 200) { return 'exists' }
  } catch {}
  $body = @{ name = $name; private = $true; auto_init = $false } | ConvertTo-Json
  try {
    Invoke-RestMethod -Uri "$($env:GITEA_URL)/api/v1/user/repos" -Headers $headers -Method Post -Body $body | Out-Null
    return 'created'
  } catch { return "error: $($_.Exception.Message)" }
}

function Grant-Peer($repoName, $perm, $owner) {
  if ($owner -ne $env:GITEA_USER) { return 'skipped (peer owns)' }
  try {
    $body = @{ permission = $perm } | ConvertTo-Json
    $uri = "$($env:GITEA_URL)/api/v1/repos/$($env:GITEA_USER)/$repoName/collaborators/$($env:GITEA_PEER)"
    $r = Invoke-WebRequest -Uri $uri -Headers $headers -Method Put -Body $body -UseBasicParsing
    return "granted $perm ($($r.StatusCode))"
  } catch { return "skip: $($_.Exception.Message)" }
}

function Sync-Project($proj, [switch]$SkipOriginPush) {
  $X = Split-Path $proj -Leaf
  Write-Host "`n========================================"
  Write-Host "Directory: $X -> repos: $X and ${X}-full"
  Write-Host "========================================"
  Set-Location $proj

  $report = [ordered]@{ X = $X; Code = @{}; Replica = @{}; Mirror = @{}; Access = @{} }

  if (-not (Test-Path .git)) {
    git init -b main 2>$null
    if ($LASTEXITCODE -ne 0) { git init; git checkout -b main 2>$null }
    Write-Host "  git init (new repo)"
  }

  Ensure-NodeModulesGitignore $proj

  $ns = Resolve-Owner $X
  $OWNER = $ns.OWNER
  $report.Code.Owner = "$OWNER ($($ns.Case))"

  $codeStatus = Ensure-GiteaRepo $X
  $fullStatus = Ensure-GiteaRepo "${X}-full"
  Write-Host "  Gitea $X : $codeStatus | ${X}-full : $fullStatus"

  $giteaUrl = "$($env:GITEA_URL)/$OWNER/$X.git"
  $fullUrl  = "$($env:GITEA_URL)/$($env:GITEA_USER)/${X}-full.git"

  if (git remote | Select-String -Quiet '^gitea$') { git remote set-url gitea $giteaUrl }
  else { git remote add gitea $giteaUrl }

  $br = git branch --show-current
  if (-not $br) { git checkout -b main 2>$null; $br = 'main' }
  $report.Code.Branch = $br
  $report.Code.Uncommitted = (@(git status --porcelain)).Count

  $hasCommits = git rev-parse HEAD 2>$null
  if ($hasCommits) {
    git fetch gitea 2>&1 | Out-Null
    $remoteBranch = git rev-parse "gitea/$br" 2>$null
    if ($remoteBranch) {
      $lr = git rev-list --left-right --count "HEAD...gitea/$br"
      $parts = $lr -split '\s+'
      $report.Code.GiteaAhead = "$($parts[0]) local / $($parts[1]) remote"
      if ([int]$parts[1] -gt 0) {
        Write-Host "  CONFLICT gitea/$br remote ahead - skip push"
        $report.Code.Push = 'skipped (remote ahead)'
      } else {
        git push gitea --all 2>&1 | Out-String | Write-Host
        git push gitea --tags 2>&1 | Out-Null
        $report.Code.Push = 'pushed'
      }
    } else {
      git push -u gitea $br 2>&1 | Out-String | Write-Host
      git push gitea --tags 2>&1 | Out-Null
      $report.Code.Push = 'pushed (new branch)'
    }
  } else {
    $report.Code.Push = 'skipped (no commits - user must commit first)'
    Write-Host "  Code repo has no commits - push skipped (per safety rules)"
  }

  if (-not $SkipOriginPush -and (git remote | Select-String -Quiet '^origin$') -and $hasCommits) {
    git fetch origin 2>&1 | Out-Null
    $obr = git rev-parse "origin/$br" 2>$null
    if ($obr) {
      $olr = git rev-list --left-right --count "HEAD...origin/$br"
      $op = $olr -split '\s+'
      if ([int]$op[1] -gt 0) {
        $report.Code.OriginPush = 'skipped (origin ahead)'
      } else {
        git push origin $br 2>&1 | Out-Null
        $report.Code.OriginPush = 'pushed'
      }
    } else {
      git push -u origin $br 2>&1 | Out-Null
      $report.Code.OriginPush = 'pushed (new)'
    }
  } else {
    $report.Code.OriginPush = 'n/a or skipped'
  }

  # REPLICA
  if (-not (Test-Path .fullgit)) {
    git --git-dir=.fullgit --work-tree=. init -b main 2>$null
    if ($LASTEXITCODE -ne 0) { git --git-dir=.fullgit --work-tree=. init; git --git-dir=.fullgit --work-tree=. checkout -b main 2>$null }
    git --git-dir=.fullgit --work-tree=. config core.longpaths true
  }
  $rbr = git --git-dir=.fullgit --work-tree=. branch --show-current
  if (-not $rbr) { $rbr = 'main' }

  if (git --git-dir=.fullgit --work-tree=. remote | Select-String -Quiet '^gitea$') {
    git --git-dir=.fullgit --work-tree=. remote set-url gitea $fullUrl
  } else {
    git --git-dir=.fullgit --work-tree=. remote add gitea $fullUrl
  }

  git --git-dir=.fullgit --work-tree=. fetch gitea 2>&1 | Out-Null
  $rRemote = git --git-dir=.fullgit --work-tree=. rev-parse "gitea/$rbr" 2>$null
  if ($rRemote) {
    $rr = git --git-dir=.fullgit --work-tree=. rev-list --left-right --count "HEAD...gitea/$rbr"
    $rp = $rr -split '\s+'
    if ([int]$rp[1] -gt 0) {
      $report.Replica.Push = 'STOPPED (server ahead)'
    } else {
      & git --git-dir=.fullgit --work-tree=. add -A -f -- @PATHSPEC
      $iso = (Get-Date).ToString('yyyy-MM-dd')
      git --git-dir=.fullgit --work-tree=. commit -m "full snapshot $iso" 2>&1 | Out-Null
      if ($LASTEXITCODE -eq 0) {
        git --git-dir=.fullgit --work-tree=. push -u gitea $rbr 2>&1 | Out-Null
        $report.Replica.Push = 'pushed'
      } else {
        $report.Replica.Push = 'already current'
      }
    }
  } else {
    & git --git-dir=.fullgit --work-tree=. add -A -f -- @PATHSPEC
    $iso = (Get-Date).ToString('yyyy-MM-dd')
    git --git-dir=.fullgit --work-tree=. commit -m "full snapshot $iso" 2>&1 | Out-Null
    git --git-dir=.fullgit --work-tree=. push -u gitea $rbr 2>&1 | Out-Null
    $report.Replica.Push = 'pushed (initial)'
  }

  $rc = (git --git-dir=.fullgit --work-tree=. ls-files | Measure-Object).Count
  $cc = if ($hasCommits) { (git ls-files | Measure-Object).Count } else { 0 }
  $report.Replica.Count = $rc
  $report.Code.Count = $cc
  $report.Replica.Pathspec = ($PATHSPEC -join ' ')
  $report.Replica.Branch = $rbr

  # VERIFY .env
  $envFiles = Get-ChildItem -Force -Filter '.env*' -Recurse -ErrorAction SilentlyContinue |
    Where-Object { $_.FullName -notmatch 'node_modules|\.git|\.fullgit' }
  $missing = @()
  foreach ($f in $envFiles) {
    $rel = $f.FullName.Substring($proj.Length + 1).Replace('\', '/')
    if (-not (git --git-dir=.fullgit --work-tree=. ls-files --error-unmatch $rel 2>$null)) { $missing += $rel }
  }
  $report.Replica.EnvMissing = $missing

  # SYNC.md
  $docsDir = Join-Path $proj 'docs'
  New-Item -ItemType Directory -Force -Path $docsDir | Out-Null
  $mirrorNote = 'Z:\projects\' + $X
  @"
# Sync (Gitea) - $X

**Warning:** ``${X}-full`` holds secrets. Never add a GitHub remote to ``.fullgit``.

## Start of session
``````
git pull gitea $br
``````

## Push code
``````
git push gitea
$(if (-not $SkipOriginPush -and (git remote | Select-String -Quiet '^origin$')) { 'git push origin' })
``````

## Push replica (owner only)
``````
git --git-dir=.fullgit --work-tree=. add -A -f -- $($PATHSPEC -join ' ')
git --git-dir=.fullgit --work-tree=. commit -m "<msg>"
git --git-dir=.fullgit --work-tree=. push
``````

## Refresh file mirror
``````
robocopy "$proj" "$mirrorNote" /MIR /R:1 /W:1 /MT:16 /XD $ROBO_EXCLUDES /XF *.log *.tmp
``````

Mirror is one-way (local -> server). Server-only edits are deleted on next /MIR.
"@ | Set-Content (Join-Path $docsDir 'SYNC.md') -Encoding utf8

  # ACCESS
  $report.Access.Code = (Grant-Peer $X 'write' $OWNER)
  $report.Access.Full = (Grant-Peer "${X}-full" 'read' $OWNER)

  # MIRROR
  $mr = Get-MirrorRoot
  if (-not $mr) {
    $report.Mirror = 'skipped (no writable target)'
  } else {
    $dest = Join-Path $mr.Path $X
    $hasFile = (Get-ChildItem $proj -File -ErrorAction SilentlyContinue | Measure-Object).Count -gt 0
    if (-not $hasFile) {
      $report.Mirror = 'skipped (empty source)'
    } else {
      New-Item -ItemType Directory -Force -Path $dest | Out-Null
      $xd = $ROBO_EXCLUDES.Split(' ')
      & robocopy $proj $dest /MIR /R:1 /W:1 /MT:16 /NFL /NDL /NJH /NJS /NP /XD @xd /XF *.log *.tmp
      $report.Mirror = "$($mr.Path)\$X exit=$LASTEXITCODE ($($mr.Why))"
    }
  }

  return $report
}

# Preflight
if (-not $env:GITEA_URL -or -not $env:GITEA_USER -or -not $env:GITEA_PEER -or -not $env:GITEA_TOKEN) {
  throw 'Missing GITEA_URL, GITEA_USER, GITEA_PEER, or GITEA_TOKEN'
}
try {
  $v = Invoke-WebRequest -Uri "$($env:GITEA_URL)/api/v1/version" -Headers $headers -UseBasicParsing
  $u = Invoke-WebRequest -Uri "$($env:GITEA_URL)/api/v1/user" -Headers $headers -UseBasicParsing
  Write-Host "Gitea OK: version $($v.StatusCode) user $($u.StatusCode)"
} catch { throw "Gitea preflight failed: $_" }

$projects = @(
  @{ Path = 'd:\montfortre'; SkipOrigin = $true },
  @{ Path = 'd:\montfortre\montfortre-ghl-studio'; SkipOrigin = $false },
  @{ Path = 'd:\montfortre\montfortre-loveable'; SkipOrigin = $false },
  @{ Path = 'd:\montfortre\montfortre-com'; SkipOrigin = $true }
)

$results = @()
foreach ($p in $projects) {
  $results += Sync-Project $p.Path -SkipOriginPush:$p.SkipOrigin
}

$results | ConvertTo-Json -Depth 5
