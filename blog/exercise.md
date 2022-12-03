---
slug: exercise
title: log module
date: 2021-7-30
authors: 鲸语
tags: [exercise]
---
记录用到的模块/插件等, 便于查找 调用
<!-- truncate -->

## 选择块
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs defaultValue="apple" values={[
    {label: '苹果', value: 'apple'},
    {label: '橙子', value: 'orange'},
    {label: '香蕉', value: 'banana'},
  ]}>
  <TabItem value="apple" label="苹果" default>
    这是个苹果 🍎
  </TabItem>
  <TabItem value="orange" label="橙子">
    这是个橙子 🍊
  </TabItem>
  <TabItem value="banana" label="香蕉">
    这是个香蕉 🍌
  </TabItem>
</Tabs>

## 高亮块
:::notenote-备注
内容
:::

:::tiptip-提示
内容
:::

:::infoinfo-信息
内容
:::

:::cautioncaution-注意
内容
:::

:::dangerdanger危险
内容
:::