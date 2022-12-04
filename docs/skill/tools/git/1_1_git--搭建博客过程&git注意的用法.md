---
id: tools-1_1
title: git--搭建博客过程&git注意的用法
date: 2022-12-4
authors: 鲸语
tags: [开发工具, git]
---

简单介绍搭建`docusaurus`博客 且 提及一些使用`git`时的注意

<!-- truncate -->

## 1. 背景

-   为**方便双端管理笔记**, 以及**熟悉git基本操作**, 因此使用git去管理现有的博客系统

-   对以下内容进行记录:

    >   1.   博客从搭建到上传的步骤
    >   2.   过程中关于git的相关操作
    >   3.   使用git时我已知的需要注意内容

-   适合人群: **git新人** 或 **想拥有专属博客且希望白嫖的** 或 **Typora的粉丝想在线管理文档**

-   你将会有如下收获:

    >   1.   学会git的基本操作从建仓库到维护
    >   2.   获得一个通过git双端在线管理的markdown博客框架
    >   3.   对git基础使用时一些错误的规避及方案解决

## 2. 开发环境

1.   [博客框架搭建可参考](https://www.docusaurus.cn/docs/installation)

     >   包括 `node.js` `npm` `yarn`

2.   git版本工具及两个git仓库, 一个必须为`github`, 要用到`GitHub Pages`

## 3. 整体步骤

1.   生成博客框架, 且可正常部署在本地 ( 或者[这里](https://www.docusaurus.cn/showcase), 寻找你喜欢的开源模板, 改动即可)

     ```sh
     npx @docusaurus/init@latest init test-blog classic # 下载博客框架
     cd test-blog/
     yarn # 下载依赖
     yarn build # 框架编译, 编译不通过不可提交
     yarn start  # 等待编译通过后, 会自动弹出浏览器打开
     ```

1.   新建`github public`仓库`test-blog`且将博客源码推送

     ```sh
     # 确保此时ssh密钥已添加到对应远程账户中
     git init 
     git config --global user.name "账户名"
     git config --global user.email "账户注册邮箱"
     # 插曲: 初始化后的仓库 .gitignore 可以定制你的推送内容
     git remote add origin-github git@github.com:账户名/test-blog.git # 绑定远程仓库
     git add .	# 添加工作区内容到暂存区
     git commit -m "1.initial commit"
     git push origin-github master # 推送
     ```

1.   使用`GitHub Pages`进行部署博客

     ```sh
     # 配置根目录下文件 docusaurus.config.js , 内容如下
     const config = {
       title: 'test-blog',
       tagline: 'test personal blog',
       url: 'https://账户名.github.io',	
       baseUrl: '/',
       favicon: 'img/favicon.ico',
       organizationName: '账户名',
       projectName: '远程仓库名',				# 仓库名列为  账户名.github.io
       deploymentBranch: '远程部署分支名',
       onBrokenLinks: 'throw',
       trailingSlash: false,
       ...,
     }
     
     # 输入如下命令
     GIT_USER=(organizationName) USE_SSH=true yarn deploy
     # 部署完成后, 倒数第二行log显示部署的网址, 你可以访问测试
     ```

1.   建立`gitee`的备份仓库, 同上述步骤2

1.   在工作空间, 将当前`master`分支与之绑定, 每次提交**部署成功**之后, 进行两处提交

1.   到此整体git环境搭建完毕, 工作逻辑大致如下图   ![git环境的工作逻辑](https://img-blog.csdnimg.cn/f399b6946fbd4910974c4b75823e8de6.png#pic_center)

## 4. git操作补充

### 4.1. 仓库环境配置

1.   当你使用`ssh链接`时, 注意要生成自己的`ssh公钥`, 否则无法推送, 报错权限不够
     ```sh
     # 生成方式
     ssh-keygen -t rsa -C "e-mail"
     
     # 一路回车
     # 也可以输入passphrase, 每次通信时需要重新输入
     # 也可以使用ssh-agent代理省去输入密码
     # 了解该代理, 参考 https://www.zsythink.net/archives/2407
     
     # /home/.ssh 生成 id_rsa 和 id_rsa.pub
     cat ~/home/.ssh/id_rsa.pub  # 此时ssh公钥已获取
     # 将密钥内容添加到github, 可参考 https://www.jianshu.com/p/5cd341bddae6
     ```
     
     >   [了解ssh代理：ssh-agent](https://www.zsythink.net/archives/2407)  [ssh agent详解](https://www.thisfaner.com/p/ssh-agent/)
2.   本地分支就好与远程分支名字一样, 便于管理
3.   修改本地仓库关联的远程仓库信息, 直接进入`**/.git/config/` 修改

### 4.2. 内容删除

1.   注意删除工作空间内容时

     >   -   使用 `git rm`, `git commit` , `git push `
     >
     >   -   使用 `rm` , `git add -A`, `git commit` , `git push `

2.   远程内容不想要了

     >   1.   删除所有内容`rm *`
     >   2.   提交全部文件`git add -A` `git commit -m "deleted all files"`
     >   3.   提交时使用`git push -u --force origin master` 强制推送且覆盖分支

### 4.3. 分支管理

1.   当你出现需要临时切换分支工作时, 若当前分支已近有部分修改, **不要直接切换, 未经过版本管理的内容, 不会跟随转变**, 若你还不想提交`commit`, 可以使用`git stash`

     ```sh
     # 修改快照
     git stash save "" # 此时工作空间内容会复位
     
     # 恢复快照1
     git stash list
     git stash apply stash@{0}
     # 恢复快照2
     git stash pop
     ```

2.   拉取远程分支

     ```c
     //查看远程分支
     git branch -r
     //创建本地分支并关联
     git checkout -b 本地分支 origin/远程分支
     //已有本地分支创建关联
     git branch --set-upstream-to origin/远程分支 本地分支
     //拉取
     git pull origin 本地分支
     ```

### 4.4. 撤销修改

>   -   `git status`查看当前暂存区状态 
>
>   -   使用`git reflog` 查看所有的提交

1.   内容存在工作区, `git checkout -- xxx` 撤销工作区的改动

     >   `--` 操作 表示之后没有更多操作
     >
     >   >   比如: **碰巧有一个分支与文件名重名**，仍然可以恢复该文件，而不是切换到同名的分支

2.   已经`git add .` 或者 `git add XXX/xxx.x`, 执行回滚`git reset --hrad 5438578` 或 `git reset XXX/xxx.x`

     >   暴力回滚 `git reset --hrad HEAD ` 或 `git reset --hrad 5438578` 

3.   想要撤销中间的某次提交, `git revert 6545689`, 其他内容不变

4.   `git push --force origin master` - 强制覆盖远程, 或`git push origin master`

### 4.5. 推送

1.   当你想每次将一个工作空间, 上传到两个仓库中时, 又不想每次`push` 两次, 你可以

     ```sh
     git remote add origin-all 仓库1链接
     git remote set-url origin-all --push --add 仓库1链接
     git remote set-url origin-all --push --add 仓库2链接
     git push origin-all master # 一次推送到两个仓库
     ```
     

## 5. 总结

​		git使用没有捷径, 只有多记多练

​		附其他链接:  [git指令大全](https://gitee.com/all-about-git)  [git模拟练习](https://oschina.gitee.io/learn-git-branching/)
