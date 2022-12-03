---
id: iic-1_1
title: IIC--单字节读写逻辑波形
date: 2021-11-12
authors: 鲸语
tags: [协议, arm, i2c, 波形]
---

借助逻辑分析仪, 分析I2C读写单字节0x35的逻辑波形

## 硬件&平台
- EEROM-(AT24C02)
- STM32F103ZET6
- Kingst-LA1010逻辑分析仪
## 图一(写数据)&分析
![IIC写数据逻辑](https://img-blog.csdnimg.cn/aef3aa95d8f845f8957ddfa271fdbaca.PNG?x-oss-process=image/watermark,type_ZHJvaWRzYW5zZmFsbGJhY2s,shadow_50,text_Q1NETiBA5pyq6Ze7wrflubvop4k=,size_20,color_FFFFFF,t_70,g_se,x_16#pic_center)
### 写 0x35 逻辑波形分段分析
	这是主机给地址为0xA0的从机写数据 0x35 到地址0x02的一段波形
  - 整体可分为三段波形--时钟**低电平数据有效**-----29bit
    - 第一段:1位开始信号(下降沿)+7位从机地址+1位写命令(0)+1位低电平应答ACK-----10bit
![IIC写数据第一段](https://img-blog.csdnimg.cn/a38399c8a2b74907a955d4b883874e97.png?x-oss-process=image/watermark,type_ZHJvaWRzYW5zZmFsbGJhY2s,shadow_50,text_Q1NETiBA5pyq6Ze7wrflubvop4k=,size_20,color_FFFFFF,t_70,g_se,x_16#pic_center)
    - 第二段:8位从机数据地址+1位低电平应答-----9bit
![IIC写数据第二段](https://img-blog.csdnimg.cn/f49c98f6697e4909a79e99103fcf198e.png?x-oss-process=image/watermark,type_ZHJvaWRzYW5zZmFsbGJhY2s,shadow_50,text_Q1NETiBA5pyq6Ze7wrflubvop4k=,size_20,color_FFFFFF,t_70,g_se,x_16#pic_center)
    - 第三段:8位实际数据+1位低电平应答+1位结束信号(上升沿)-----10bit
![IIC写数据第三段](https://img-blog.csdnimg.cn/ef5c4b64434c4326ae7066167713098e.png?x-oss-process=image/watermark,type_ZHJvaWRzYW5zZmFsbGJhY2s,shadow_50,text_Q1NETiBA5pyq6Ze7wrflubvop4k=,size_19,color_FFFFFF,t_70,g_se,x_16#pic_center)
> 有时会产生从机接受完此帧数据不想接收下一帧数据,则向主机回应一个**NACK-非应答信号**,为**高电平**.下一刻主机发送停止信号

### 波特率
  - 该波形波特率为
    - 所有数据的位数 / 时间 = 29bit / 290us = 100,000bit/s

## 图二(读数据)&分析

![IIC读数据逻辑](https://img-blog.csdnimg.cn/1bfd7bfd9b7845e1a6eff9c55002fad4.PNG?x-oss-process=image/watermark,type_ZHJvaWRzYW5zZmFsbGJhY2s,shadow_50,text_Q1NETiBA5pyq6Ze7wrflubvop4k=,size_20,color_FFFFFF,t_70,g_se,x_16#pic_center)

### 读 0x35 逻辑波形分段分析

	这是主机读地址为0xA0的从机,数据 为0x35 ,数据地址为0x02的一段波形
  - 整体可分为四段波形--时钟**低电平数据有效**-----39bit
    - 第一段:1位开始信号(下降沿)+7位从机地址+1位写命令(0)+1位低电平应答ACK-----10bit
![IIC读数据第一段](https://img-blog.csdnimg.cn/3a841b179a0d400699b8e9f407341382.png?x-oss-process=image/watermark,type_ZHJvaWRzYW5zZmFsbGJhY2s,shadow_50,text_Q1NETiBA5pyq6Ze7wrflubvop4k=,size_11,color_FFFFFF,t_70,g_se,x_16#pic_center)
    - 第二段:8位从机数据地址+1位低电平应答-----9bit
![IIC读数据第二段](https://img-blog.csdnimg.cn/3d4547b854544faa8edcd3c3385addd4.png?x-oss-process=image/watermark,type_ZHJvaWRzYW5zZmFsbGJhY2s,shadow_50,text_Q1NETiBA5pyq6Ze7wrflubvop4k=,size_11,color_FFFFFF,t_70,g_se,x_16#pic_center)
    - 第三段:1位起始信号(下降沿)+7位从机地址+1位读命令(1)+1位低电平应答ACK-----10bit
![IIC读数据第三段](https://img-blog.csdnimg.cn/07ed80f431f74d089733917ef1a1e28b.png?x-oss-process=image/watermark,type_ZHJvaWRzYW5zZmFsbGJhY2s,shadow_50,text_Q1NETiBA5pyq6Ze7wrflubvop4k=,size_12,color_FFFFFF,t_70,g_se,x_16#pic_center)
    - 第四段:8位数据+1位非应答信号+1位停止信号(上升沿)-----10bit
![IIC读数据第四段](https://img-blog.csdnimg.cn/6d43738f53cf460ebf2483f4fbe7cbfb.png?x-oss-process=image/watermark,type_ZHJvaWRzYW5zZmFsbGJhY2s,shadow_50,text_Q1NETiBA5pyq6Ze7wrflubvop4k=,size_11,color_FFFFFF,t_70,g_se,x_16#pic_center)
### 波特率
  - 该波形波特率为
    - 所有数据的位数 / 时间 = 39bit / 395us = 98,734bit/s

