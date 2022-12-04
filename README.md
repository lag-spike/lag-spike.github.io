<h2 align="center">
  <p align="center">个人博客</p>
</h2>

<p align="center">
<a href="https://lag-spike.github.io/">🖥 Online Preview</a>
<a href="https://lag-spike.github.io/"><img src="./src/data/showcase/blog.png" alt="Docusaurus"></a>
</p>

## 1. Introduction

<pre align="center">
基于<a href="https://docusaurus.io/">🦖Docusaurus</a>构建的个人博客
</pre>

## 2. Install

```sh
git clone https://github.com/lag-spike/lag-spike.github.io

cd lag-spike.github.io

yarn
```

### 2.1. Build

```sh
yarn build
```

### 2.2. Run

```sh
yarn start
```

## 3. Deploy

### 3.1. config

```sh
const config = {
  title: ' LS Blog',
  tagline: 'Personal blog page',
  url: 'https://lag-spike.github.io',
  baseUrl: '/',
  favicon: 'img/favicon.ico',
  organizationName: 'lag-spike',      # user.name
  projectName: 'lag-spike.github.io', # ware_house_name
  deploymentBranch: 'gh-pages',
  onBrokenLinks: 'throw',
  trailingSlash: false,
  ...,
}
```
### 3.2. deploy

```sh
GIT_USER=(organizationName) USE_SSH=true yarn deploy
```

```sh
# 注意此处按需求修改, 是否需要覆盖推送 --force
# node_modules\@docusaurus\core\lib\commands\deploy.js

# if (shellExecLog(`git push --force origin ${deploymentBranch}`).code !== 0) 
if (shellExecLog(`git push origin ${deploymentBranch}`).code !== 0) 
{
    throw new Error('Running "git push" command failed. Does the GitHub user account you are using have push access to the repository?');
}
```

## 4. License

[MIT licensed](https://github.com/lag-spike/lag-spike.github.io/blob/main/LICENSE).
