# Sync (Gitea) - montfortre

**Warning:** `montfortre-full` holds secrets. Never add a GitHub remote to `.fullgit`.

## Start of session
```
git pull gitea main
```

## Push code
```
git push gitea

```

## Push replica (owner only)
```
git --git-dir=.fullgit --work-tree=. add -A -f -- . :(exclude).git :(exclude).fullgit :(exclude)node_modules :(exclude).next :(exclude)dist :(exclude)build :(exclude).venv :(exclude)venv :(exclude)__pycache__ :(exclude)target :(exclude)vendor :(exclude)*.log
git --git-dir=.fullgit --work-tree=. commit -m "<msg>"
git --git-dir=.fullgit --work-tree=. push
```

## Refresh file mirror
```
robocopy "d:\montfortre" "Z:\projects\montfortre" /MIR /R:1 /W:1 /MT:16 /XD node_modules .next dist build .venv venv __pycache__ target vendor .git .fullgit /XF *.log *.tmp
```

Mirror is one-way (local -> server). Server-only edits are deleted on next /MIR.
