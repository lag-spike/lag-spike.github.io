---
id: 6_2
title: 6_2_UDP协议
date: 2021-11-16
authors: 鲸语
tags: [读书笔记, 网络, 图解TCP_IP, UDP]
---

> 第六章 第二部分

## 前言

> 特别写在前面
>
> 本文仅用学习记录及分享,不做他用.
>
> 如有不妥,请告知

## 一. 特点&目的

> 按照制作程序的那些用户行事

> 特点:
>
> 不提供复杂的控制机制,简单 & 高效
>
> 面向无连接的通信服务,可随时发送数据
>
> 收到数据后,按照原样发送回网络上
>
> 无法进行流量控制等避免网络拥堵的行为
>
> 传输过程中无论是丢包,不负责重发
>
> 没有纠错功能

> 用途:
>
> 包含量较少的通信 -- `DNS`,`SNMP`...
>
> 音视频等多媒体通信 -- 即时通信
>
> 限定于 LAN 等特定的网络应用通信
>
> 广播通信,多播通信

## 二. 首部格式

### 1. UDP数据报格式

![UDP数据报格式](https://img-blog.csdnimg.cn/cb3763cd9b3346ac82446a4cd8cd0410.PNG?x-oss-process=image/watermark,type_ZHJvaWRzYW5zZmFsbGJhY2s,shadow_50,text_Q1NETiBA5pyq6Ze7wrflubvop4k=,size_20,color_FFFFFF,t_70,g_se,x_16#pic_center)


| 名词                      | 长度  | 解释                                                 |
| ------------------------- | ----- | ---------------------------------------------------- |
| 源端口-Source Port        | 16bit | 可选项-发送端端口       ==0 可用于不需要返回的通信中 |
| 目标端口-Destination Port | 16bit | 接收端端口                                           |
| 包长度-Length             | 8bit  | UDP首部 + 数据  总长度                               |
| 校验和-Checksum           | -     | 为了提供**可靠**的**UDP首部** 和 **数据**            |

### 2. 校验和

> 为了提供**可靠的**UDP**首部**和**数据**

#### (1) 计算校验和

**UDP首部校验和计算三部分：UDP首部 + UDP数据 + UDP伪首部**

> 伪首部
>
>![UDP伪首部](https://img-blog.csdnimg.cn/b79f095e88634e55a8b1b9a162c9cdc2.PNG?x-oss-process=image/watermark,type_ZHJvaWRzYW5zZmFsbGJhY2s,shadow_50,text_Q1NETiBA5pyq6Ze7wrflubvop4k=,size_20,color_FFFFFF,t_70,g_se,x_16#pic_center)

> 参考
>
> [(1条消息) IP首部校验和计算及1的补码_cradmin的专栏-CSDN博客](https://blog.csdn.net/cradmin/article/details/3092559)
>
> [(1条消息) tcp/udp校验和以及伪首部介绍_nice_wen的博客-CSDN博客_tcp 伪首部](https://blog.csdn.net/nice_wen/article/details/77926730)
>
> [TCP头校验和计算算法详解 - RodYang - 博客园 (cnblogs.com)](https://www.cnblogs.com/RodYang/p/3265515.html)

#### (2) 校验和加入"伪首部"目的 & 原因

> TCP/IP 进行通信的应用需要5大要素
>
> | 源 IP 地址 | 目标 IP 地址 | 协议号\ | 源端口号 | 目标端口 |
> | ---------- | ------------ | ------- | -------- | -------- |

> 但是**UDP**只包含了
>
> | 源 IP 地址 | 目标 IP 地址 |
> | ---------- | ------------ |
>
> 余下三项都包含在 **IP** 首部中

> 因此引入"伪首部" 可以避免因 **IP首部**中的三项要素出错而导致的不良后果

> IPv6 中IP首部没有校验和
>
> TCP/UDP 通过 **伪首部** 即可在 **IP首部** 不可靠的同时,进行可靠传输
## 结语
~ ~ ~
