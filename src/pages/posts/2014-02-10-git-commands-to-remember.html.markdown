---
layout: ../../layouts/BlogLayout.astro
title: "Git commands to remember "
date: 2014-02-10
description: 'test test'
tags: ["programming processes"]
published: true
lang: "en"
---

Even if I use git everyday, I don't always remember the exact commands to do some git actions. This is few notes I like to have close when I need them.


## Saving work in progress in a specific branch ##
When you need to make a quick change on another branch, you don't need to commit anything on your current branch, use 'stash':

``` bash
git stash
git stash list # list all stash
git stash apply # apply last stash work
git stash drop #remove it
```

## When merging conflicts happen, use your local or remote version of the code ##
In case of conflicts, you sometimes  know which version of the file is the correct one, you don't need to go into the code and solve manually the conflicts, you can do directly something like this:

``` bash
git checkout --ours index.html
git checkout --theirs _layouts/default.html
```


You should note that these options are only in Git versions 1.6.1 and up. If you have an older version and don’t feel like upgrading, there’s ways to get around this. To emulate --theirs:

``` bash
git reset -- _layouts/default.html
git checkout MERGE_HEAD -- _layouts/default.html
```


And for --ours:

``` bash
git reset -- index.html
git checkout ORIG_HEAD -- index.html
```


Of course, once you’ve got the conflicts worked out, git add whatever changes need to be added in, and git commit away.
## Customise your git log by adding the branch graphs ##
I usually use this log trick to see my git logs. I find it clearer.  First put this in your git config file  ~/.gitconfig:

``` bash
[alias]
lg1 = log --graph --abbrev-commit --decorate --date=relative --format=format:'%C(bold blue)%h%C(reset) - %C(bold green)(%ar)%C(reset) %C(white)%s%C(reset) %C(dim white)- %an%C(reset)%C(bold yellow)%d%C(reset)' --all

lg2 = log --graph --abbrev-commit --decorate --format=format:'%C(bold blue)%h%C(reset) - %C(bold cyan)%aD%C(reset) %C(bold green)(%ar)%C(reset)%C(bold yellow)%d%C(reset)%n'' %C(white)%s%C(reset) %C(dim white)- %an%C(reset)' --all

lg = !"git lg1"

```


you will see clearer the different branches when logging using git lg1 or git lg2.
## Commit and add only certain changes of a file ##
Sometimes, in the case of a really big file for example, we modify it on different points for different features or bugs. If you only want to git add few modifications use:

``` bash
git add -p file

```


You will then be asked to choose which modifications of he file to add.
## changing a commit message from an old commit ##
This works only if you haven't pushed to the remote repository. Let say we want to change the third last commit we did:

``` bash
git rebase -i HEAD~3
```


change the word 'pick' by  'edit'  and save.  then:

``` bash
git commit --amend
```


you can now change the commit message.

and finally:

``` bash
git rebase --continue
```


that's it. If you want to change a commit message of the most recent (unpushed) commit, you can simply use:

``` bash
git commit --amend -m 'new message'
```

## pass all change on a branch to another branch ##
I usually do that on master branch when I finished a feature that is on 'featureX' branch. Be sure that master branch hasn't changed since you started working on your branch featureX

``` bash
git checkout featureX
git merge -s ours master
git checkout master
git merge featureX
```


all changes will be passed to master this way.