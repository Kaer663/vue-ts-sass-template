# 内容回顾

## 一. 问题的处理

### 1.1. 设置上游分支(跟踪分支)

```shell
git fetch
git branch --set-upstream-to=origin/main
```

### 1.2. 合并没有共同 base 分支

```shell
git merge --allow-unrelated-histories
```

### 1.3. Github 的使用

#### 1.3.1. GitHub 的作用

#### 1.3.2. GitHub 查找和下载开源项目

#### 1.3.3. GitHub 创建远程仓库

```shell
# 初始化本地仓库
git init

# 添加远程仓库
git remote add origin xxxx


# 从远程仓库获取内容
git fetch
git branch --set-upstream-to=origin/main
git merge --allow-unrelated-histories

# git push
git config push.default upstream

# 换一种做法
git checkout main
```

### 1.4. Gitlab 的使用

## 二. git tag

```shell
git tag v1.0.0

git tag

git tag -d v1.0.0

# 将本地tag push远程仓库
git push origin v1.0.0
git push origin --tags

# 删除远程的tag
git push origin -d v1.0.0
```

## 三. git 的原理(git 如何保存内容)

```shell
git add .
# .git/objects/00 40

git commit -m "aaa"
# .git/object/eb -> 提交信息/作者/tree
# .git/object/aa
# aaa.js -> 00
# bbb.js -> 40
```

## 四. 分支结构

### 4.1. 本地分支的使用

创建分支

```shell
git branch testing
git checkout testing
# 合并
git checkout -b testing
```

合并分支

```shell
git merge testing
git add .
git commit -m ""
```

查看所有的分支

```shell
git branch

# 删除本地分支
git branch -d testing
```

### 4.2. 远程分支的操作

```shell
# 初始化本地仓库
git init

# 添加远程仓库
git remote add origin xxxx


# 从远程仓库获取内容
git fetch
git branch --set-upstream-to=origin/main
git merge --allow-unrelated-histories

# git push
git config push.default upstream

# 换一种做法
git checkout main
```

推送一个远程分支:

```shell
git push origin develop

# 李四操作
git checkout develop
```

删除远程分支

```shell
git push origin -d develop
```

### 4.3. git flow 工作流

第一图:

- master: 记录主要的版本
- develop: 开发版本
- topic: 新主题

第二图:

- master: 记录主要的版本
  - tag
- hotfix: 热修复
  - merge master
  - merge develop
- develop: 开发分支
- release: 上线的分支
  - merge master
  - merge develop
- feature: 新特性

### 4.4. git rebase

- 改变某一个分支 base, 目的让 log 的历史记录更加的简洁
- 黄金原则: 不要在主分支中使用 rebase

## 五. Git 中常见的命令总结

基础的命令: (必须掌握)

```shell
git clone xxxxxxxx

git add .
git commit -m "xxxx"

git pull ->(git fetch + git merge)
git push
```

进阶的命令:

- main
- develop
- feature

```shell
git checkout develop
# 1.检查服务器是否有origin/develop这个分支
# 2.创建一个本地的develop分支
# 3.让本地的develop分支自动跟踪origin/develop
# 4.切换到develop分支

git add .
git commit -m ""
git pull
git push
```

高级的命令:

```shell
git tag

git checkout -b develop
git push origin develop

git merge develop
git rebase
```

完整的 git push 写法

```shell
# git push 服务命 本地分支:服务分支
git push origin master:main
# 把本地分支master推送到服务器（origin）的分支main
# 或者这样写 git push origin head:main
```

ssh 上传文件

```shell
# linux删除文件夹命令
rm -rf admin
scp -r admin root@10.4.8.68:/fos/var/www/
```

- 提交风格

| Type     | 作用                                                                                   |
| -------- | -------------------------------------------------------------------------------------- |
| feat     | 新增特性 (feature)                                                                     |
| fix      | 修复 Bug(bug fix)                                                                      |
| docs     | 修改文档 (documentation)                                                               |
| style    | 代码格式修改(white-space, formatting, missing semi colons, etc)                        |
| refactor | 代码重构(refactor)                                                                     |
| perf     | 改善性能(A code change that improves performance)                                      |
| test     | 测试(when adding missing tests)                                                        |
| build    | 变更项目构建或外部依赖（例如 scopes: webpack、gulp、npm 等）                           |
| ci       | 更改持续集成软件的配置文件和 package 中的 scripts 命令，例如 scopes: Travis, Circle 等 |
| chore    | 变更构建流程或辅助工具(比如更改测试环境)                                               |
| revert   | 代码回退                                                                               |

- 提交
