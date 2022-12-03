---
id: mqtt-1_1
title: 解决--NetworkConnect成功但 MQTTConnect失败
date: 2021-12-19
authors: 鲸语
tags: [协议, mqtt, 解决, RT-Thread]
---

关于 RT-Thread 平台下, MQTT使用的 NetworkConnect 成功但 MQTTConnect 失败...


## 问题平台
- RT-Thread
- STM32H7

## 错误
```c
tcp_write: arg == NULL (programmer violates API)Assertion: 429 
in ..\..\rt-thread\components\net\lwip-2.1.0\src\core\tcp_out.c, 
thread manage_m(0) assertion failed at function:sys_arch_assert, line number:634
```
## 错误做法

>  `MQTTClientInit()` 中的两块内存申请的位置是在 `NetworkConnect()` 之前

## 解决

> 内存申请的位置应该在 `NetworkConnect()` 之后  `MQTTClientInit()` 之前

