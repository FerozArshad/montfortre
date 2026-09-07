# Finish real renames after Cursor unlocks the folders.
# 1) Close tabs/terminals under ghl-react or GHL_Montfort_lovable (or quit Cursor).
# 2) Open a NEW PowerShell outside this workspace and run:
#      powershell -ExecutionPolicy Bypass -File d:\montfortre\rename-folders.ps1

$ErrorActionPreference = "Stop"
Set-Location C:\

function Remove-Junction($path) {
  if (-not (Test-Path -LiteralPath $path)) { return }
  $item = Get-Item -LiteralPath $path -Force
  if ($item.Attributes -band [IO.FileAttributes]::ReparsePoint) {
    cmd /c "rmdir `"$path`""
    Write-Host "Removed junction: $path"
  }
}

# Temporary junctions (so new names work before real rename)
Remove-Junction "d:\montfortre\montfortre-ghl-studio"
Remove-Junction "d:\montfortre\montfortre-loveable"

if ((Test-Path "d:\montfortre\reference") -and -not (Test-Path "d:\montfortre\montfortre-com")) {
  Rename-Item -LiteralPath "d:\montfortre\reference" -NewName "montfortre-com"
  Write-Host "OK: reference -> montfortre-com"
}

$map = [ordered]@{
  "d:\montfortre\ghl-react"            = "montfortre-ghl-studio"
  "d:\montfortre\GHL_Montfort_lovable" = "montfortre-loveable"
}

foreach ($src in $map.Keys) {
  $name = $map[$src]
  $dst = Join-Path "d:\montfortre" $name
  if (-not (Test-Path -LiteralPath $src)) {
    if (Test-Path -LiteralPath $dst) { Write-Host "SKIP: already $dst"; continue }
    Write-Host "MISSING: $src"; continue
  }
  if (Test-Path -LiteralPath $dst) { Write-Host "BLOCKED: $dst exists"; continue }
  try {
    Rename-Item -LiteralPath $src -NewName $name
    Write-Host "OK: $src -> $dst"
  } catch {
    Write-Host "FAIL: $src — $($_.Exception.Message)"
    Write-Host "Close Cursor completely and re-run this script."
  }
}

Write-Host "`nResult:"
Get-ChildItem "d:\montfortre" -Name
