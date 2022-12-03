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

## 4. License

[MIT licensed](https://github.com/lag-spike/lag-spike.github.io/blob/main/LICENSE).
