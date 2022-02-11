# GIT

## After installation

```bash
git config --global user.email "useraccount@example.com"
git config --global user.name  "username"
```

## First steps

```bash
git init
git add .
git commit -m "comments about this commit"

# github
git remote add origin https://github.com/UserAccount/example.git
git push -u origin master

# For use main instead master
git branch -M main
git push -u origin main

# Just this too
git push
```

## Basics

```
Working directory
│
└─ (+ git add) ─> Staging area
                  │
                  └─ (+ git commit) ─> Repository
```

```bash
git init        # Create .git folder
git add <file>  # Add to Staging area
git status      # File states
git commit      # Create a code checkpoint
git push        # Publish changes in remote or central repository
git pull
git clone
```

## In depth

```bash
git add . # All the files and folders with files
```

```bash
git commit                # With access to Vim editor
git commit -m "comments"  # Without access to Vim editor

git log                   # Show created commits
git checkout -- <file>    # Revert changes
git diff <file>           # Differences between file changes
```

```bash
project-root/
│
└─ .gitignore:  folder          # To ignore
                file.extension  # To ignore
```

```bash
git branch <name>   # Create a new version
git branch          # Show versions
git checkout <file> # Change version
git checkout -- .   # Return to old version
```

```bash
git clone <github-link>         # Clone a repository
git remote                      # Show origin
git remote -v                   # Show urls
git remote set-url origin <url> # Change url from origin

git reset <file>                # Remove a file from commit

git config --list       # Show configuration
git config <keyword>    # Show user.mail, user.name, etc
```

```bash
git commit --amend  # Edit comment from commit
git push -f         # Update comment in repository
```

```bash
git tag -a v1.0.0 -m "comments"     # Release tags
git push --tags                     # Update tags in repository
```
