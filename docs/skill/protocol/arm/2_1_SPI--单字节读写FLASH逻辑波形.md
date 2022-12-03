---
id: spi-2_1
title: SPI--单字节读写FLASH逻辑波形
date: 2021-11-12
authors: 鲸语
tags: [协议, arm, spi, 波形]
---

借助逻辑分析仪, 分析spi读写单字节的逻辑波形

## 1. 说明
### 1.1. 硬件平台
- 野火`STM32F103ZET6`指南者
- `Kinggst-LA1010` 逻辑分析仪 -- 软件&说明书  [KingstVIS-L1010逻辑分析仪.zip](https://download.csdn.net/download/weixin_44113601/40799009)
- `W25Q64`的FLASH芯片 -- 手册 [Winbond-W25Q64JV-DTR.pdf](https://www.semiee.com/file/Winbond/Winbond-W25Q64JV-DTR.pdf)
### 1.2. 该数据波形对应-逻辑分析仪通道&单片机引脚:
| 通道   | 引脚  | 名称         |
| ------ | ----- | ------------ |
| 3-黄色 | `PC0` | `NSS-ENABLE` |
| 5-红色 | `PA5` | `CLK`        |
| 7-灰色 | `PA7` | `MOSI`       |
| 6-橙色 | `PA6` | `MISO`       |

### 1.3. `W25Q64`常用指令集

![W25Q64常用指令集**](https://img-blog.csdnimg.cn/1cd9edbb549346c9bff94839d64ef2e6.png?x-oss-process=image/watermark,type_ZHJvaWRzYW5zZmFsbGJhY2s,shadow_50,text_Q1NETiBA5pyq6Ze7wrflubvop4k=,size_20,color_FFFFFF,t_70,g_se,x_16#pic_center)
## 2. 分段分析逻辑波形
### 2.1. 图一(SPI发送数据)

![spi发送数据](https://img-blog.csdnimg.cn/db7dd890a0514e0c978f25ae0e0085fc.png?x-oss-process=image/watermark,type_ZHJvaWRzYW5zZmFsbGJhY2s,shadow_50,text_Q1NETiBA5pyq6Ze7wrflubvop4k=,size_20,color_FFFFFF,t_70,g_se,x_16#pic_center)

	由图分析可知,该SPI配置参数,如下表,原因在表后

| 参数类型     | 数据              |
| ------------ | ----------------- |
| 数据长度     | `8bit`            |
| 数据传输模式 | `MSB`-高位先行    |
| `CPOL`       | 0--低电平为空闲   |
| `CPHA`       | 0--上升沿采样(前) |
| ENABLE       | 低有效            |
| 分频系数     | 256               |
| 主从模式     | 全双工            |

#### 2.1.1. 经大概估算--`72MHz`经256分频(APB2)

> 传输有效位数为80bit
> 有效时间大概为271.9us
> 估算出的传输速率为294.23kbit/s
> 约等于281.25kbit/s

#### 2.1.2. MOSI路径数据波形可分为三大阶段

##### 2.1.2.1. 发送指令阶段
  -  主机发送写指令`0x06` + 读状态从机寄存器指令`0x05` + 发送一段NULL的数据 *(为了等待从机返回的寄存器当前值--这里值只要不是 1 就可以)*
  ![发送指令阶段](https://img-blog.csdnimg.cn/f29bcb262d8e49a1aed19ed6d8f775e8.png?x-oss-process=image/watermark,type_ZHJvaWRzYW5zZmFsbGJhY2s,shadow_50,text_Q1NETiBA5pyq6Ze7wrflubvop4k=,size_20,color_FFFFFF,t_70,g_se,x_16#pic_center)

##### 2.1.2.2. 发送地址阶段
  -  主机发送一个字节的页写入指令`0x02` + 24位从机地址 *(地址的排序是:`A23-A16`, `A15-A8` ,`A7-A0`)*
  ![发送地址阶段](https://img-blog.csdnimg.cn/05630ca6bf2245bf90bb350a20986eb8.png?x-oss-process=image/watermark,type_ZHJvaWRzYW5zZmFsbGJhY2s,shadow_50,text_Q1NETiBA5pyq6Ze7wrflubvop4k=,size_20,color_FFFFFF,t_70,g_se,x_16#pic_center)
##### 2.1.2.3. 发送数据阶段
  -  一字节数据`0x41` + 读状态寄存器指令`0x05` + 一字节空白数据 *(此刻MISO通道在主机发完0x05指令后回复了状态寄存器此刻的值)*
![发送数据阶段](https://img-blog.csdnimg.cn/acdccadd217d45dca8f625915d257f08.png?x-oss-process=image/watermark,type_ZHJvaWRzYW5zZmFsbGJhY2s,shadow_50,text_Q1NETiBA5pyq6Ze7wrflubvop4k=,size_20,color_FFFFFF,t_70,g_se,x_16#pic_center)
#### 2.1.3. 全双工模式

	由于MOSI发送数据同时,MISO数据回复,如图

![写数据全双工](https://img-blog.csdnimg.cn/fffd898b04a54060b8dfb3cadb154eac.png?x-oss-process=image/watermark,type_ZHJvaWRzYW5zZmFsbGJhY2s,shadow_50,text_Q1NETiBA5pyq6Ze7wrflubvop4k=,size_20,color_FFFFFF,t_70,g_se,x_16#pic_center)
### 2.2. 图二(SPI接收数据)

![SPI接收数据](https://img-blog.csdnimg.cn/3c650ffd64614bceacf2e8a6305762e3.png?x-oss-process=image/watermark,type_ZHJvaWRzYW5zZmFsbGJhY2s,shadow_50,text_Q1NETiBA5pyq6Ze7wrflubvop4k=,size_20,color_FFFFFF,t_70,g_se,x_16#pic_center)

	由图可知,该SPI配置参数,如下表,原因在表后

| 参数类型     | 数据              |
| ------------ | ----------------- |
| 数据长度     | `8bit`            |
| 数据传输模式 | `MSB`-高位先行    |
| `CPOL`       | 0--低电平为空闲   |
| `CPHA`       | 0--上升沿采样(前) |
| ENABLE       | 低有效            |
| 分频系数     | 256               |
| 主从模式     | 全双工            |

#### 2.2.1. 经大概估算--`72MHz`经256分频(APB2)

> 传输有效位数为40bit
> 有效时间大概为138.05us
> 估算出的传输速率为289.75kbit/s
> 约等于281.25kbit/s

#### 2.2.2. MOSI路径数据波形可分为

##### 2.2.2.1. 发送地址阶段
  -  主机发送一个字节的读数据指令`0x02` + 24位从机地址 *(地址的排序是:`A23-A16`, `A15-A8` ,`A7-A0`)*
![读数发送地址](https://img-blog.csdnimg.cn/b4c84cc21c5744e68115fe27ee480d47.png?x-oss-process=image/watermark,type_ZHJvaWRzYW5zZmFsbGJhY2s,shadow_50,text_Q1NETiBA5pyq6Ze7wrflubvop4k=,size_20,color_FFFFFF,t_70,g_se,x_16#pic_center)
##### 2.2.2.2. 发送数据阶段
  - 主机发送一字节空白数据0x00等待 *(因为全双工模式,所以从机发送数据,同时主机接收)*
![读数发送数据阶段](https://img-blog.csdnimg.cn/4809945d4c914af587af4b855e899234.png?x-oss-process=image/watermark,type_ZHJvaWRzYW5zZmFsbGJhY2s,shadow_50,text_Q1NETiBA5pyq6Ze7wrflubvop4k=,size_20,color_FFFFFF,t_70,g_se,x_16#pic_center)
#### 2.2.3. 全双工模式

	由于MOSI发送数据同时,MISO接收数据,如图
![读数全双工](https://img-blog.csdnimg.cn/0c46bcbe4b0e4b22a6464b87fe519e79.png?x-oss-process=image/watermark,type_ZHJvaWRzYW5zZmFsbGJhY2s,shadow_50,text_Q1NETiBA5pyq6Ze7wrflubvop4k=,size_20,color_FFFFFF,t_70,g_se,x_16#pic_center)
