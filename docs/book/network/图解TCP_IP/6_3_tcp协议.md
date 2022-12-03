---
id: 6_3
title: 6_3_tcp协议
date: 2021-11-20
authors: 鲸语
tags: [读书笔记, 网络, 图解TCP_IP, TCP]
---

> 第六章 第三部分

## 前言

> 特别写在前面
>
> 本文仅用学习记录及分享,不做他用.
>
> 如有不妥,请告知

## 一. 特点&目的

> 充分的实现了数据传输时的各种控制功能
>
> - 可以在丢包时进行**重发控制**
> - 可调节次序乱掉的数据包进行**顺序控制**
> - 可以控制通信中流量,防止浪费

## 二. 实现可靠性的手段

> - 校验和
> - 序列号
> - 确认应答
> - 重发控制
> - 连接管理
> - 窗口控制
> - ......

### 1. 序列号(`Seq`) + 确认应答(`ACK`)

> - 序列号 - `Seq` -- (序号)
>   - 字长32位
>   - 指发送数据的位置
>   - 每发送一次数据,累加一次该字节数据
>
> > ==注意==
> >
> > **建立连接**和**断开连接** 发送的 `SYN` 和 `FIN` 数据包
> >
> > 虽不携带数据,但也会使 该字节+1
>
> - 确认应答号 - `ACK`
>   - 字段长32位
>   - 指下一次应该收到的数据的序列号
>   - **发送端**收到的**确认应答号**,表示**此序列号之前**的所有数据已正常接收

```markdown
( 开始握手第一包 ACK == 0 , Seq == 0 )–Client
( 开始握手第二包 ACK == 1 , Seq == 0 )–Serve
> 一旦 - 回应上一包数据 - 确认接收后
> 下一包数据的 Seq = 当前ACK
> 下一包数据的 ACK + 1
```



**两种异常情况**

- 数据包丢失
  - 当数据包丢失后,一段时间后 **发送端** 未收 **接收端** 返回的 `ACK` ,**发送方** 认为数据没有到, **重发控制** 触发
- 确认应答丢失
  - **发送端** 没有收到 **接受端** `ACK` 可能 仅仅 `ACK`丢失,数据正常传输
  - 一段时间后 **重发**
  - 这时,需要 **序列号(`Seq`) + 确认应答(`ACK`)** 判断是否需要丢掉重复数据

### 2. 连接管理

- 请求连接 - `SYN`
- 断开连接 - `FIN`

> TCP 通信 
>
> 三次"握手" , 四次"挥手"
>
> ==正常通信过程  至少  来回  7个数据包  才能完成==

### 3. 以段为单位发数据

`MSS` - 最大消息长度

> 最理想的情况
>
> `MSS` 正好等于 IP 中不会被分片处理的最大长度

在开始通信时,双端都会产生一个`MSS`,会选择一个**较小的值**投入使用

### 4. 重发超时

> 重发超时 -- 重发数据之前的等待时间

> 在每次数据往返时都要进行**往返时间** 和 **偏差** 的计算
>
> 一般超时都以 **0.5秒** 为单位进行控制,所以重发超时都是 **0.5s** 的整数倍
>
> ==最初的数据包还不知道往返时间,故其往返时间设置为 **6s左右**==
>
> 如若 **重发超时** 后再次 **发送** 后,超时会以 **2 , 4 倍** 的 **指函数** 增长
>
> **重发一定次数后** 通信终止

> **重发超时** 会随着发送的数据量 **动态调整**

### 5. 窗口控制 -- 提速

> 以一段数据为单位发送,每段数据应答
>
> - 时间长
> - 性能低

**滑动窗口 + 缓存区**

![滑动窗口](https://img-blog.csdnimg.cn/386377e747184e6aba902d75db208cbf.png?x-oss-process=image/watermark,type_ZHJvaWRzYW5zZmFsbGJhY2s,shadow_50,text_Q1NETiBA5aaC5L2V5YOP6aOO5LiA5qC3,size_20,color_FFFFFF,t_70,g_se,x_16#pic_center)


> 窗口大小 -- 无需等待确认应答,但可以继续发送数据的 **最大值**  ( 图中窗口大小为四段 )
>
> 该机制的实现使用了大量 **缓存区** ,对多端数据 **同时** 进行 **确认应答**

### 6. 窗口控制 + 重发控制

> **应答未返回时**
> 
> 	- 运用了窗口控制后 无需再次发送

![应答未返回](https://img-blog.csdnimg.cn/c6bf21bd1e1549039b368af4fc28ec92.png?x-oss-process=image/watermark,type_ZHJvaWRzYW5zZmFsbGJhY2s,shadow_50,text_Q1NETiBA5aaC5L2V5YOP6aOO5LiA5qC3,size_20,color_FFFFFF,t_70,g_se,x_16#pic_center)
> **报文丢失时**
>  
>  - 发送主机如果 **重复收到3次** 同一个应答信号
>  - 表示该部分数据丢失,重发
>  
>  这种模式被称为 **高速重发控制**

![在这里插入图片描述](https://img-blog.csdnimg.cn/99626ac5f098401eb867701bc3ef649f.png?x-oss-process=image/watermark,type_ZHJvaWRzYW5zZmFsbGJhY2s,shadow_50,text_Q1NETiBA5aaC5L2V5YOP6aOO5LiA5qC3,size_20,color_FFFFFF,t_70,g_se,x_16#pic_center)

### 7. 流控制

> **机制**
> **接收端** 发送窗口大小值给 **发送端**
> **发送端** 根据 **接收端** 自身实际接收能力去 **控制** 发送的数据量

![流控制](https://img-blog.csdnimg.cn/2a435f7e630246eead8c729809ead285.png?x-oss-process=image/watermark,type_ZHJvaWRzYW5zZmFsbGJhY2s,shadow_50,text_Q1NETiBA5aaC5L2V5YOP6aOO5LiA5qC3,size_20,color_FFFFFF,t_70,g_se,x_16#pic_center)
```markdown
如上图
1. 主机B 从 3001号后的缓存区即满 -- 停止接收数据
2. 主机A 重发超时 了,也没有收到应答信号
3. 主机A 发送 窗口探测 ...  ... ...( 随时发一包 探测此时窗口大小 )
4. 直到 主机B 窗口更新 通知给 主机A , 通信再次开始
```

### 8. 拥塞控制

> ==防止网络过度 **拥堵** 而崩溃==
>
> 通信一开始 通过 **慢启动算法** 得出 **慢启动阀值** ,对 **发送端** 进行控制
> 
> 以免造成连续发包 -- (**爆发**) 造成的网络拥堵






## 三. 提高网络利用率的规范

### 1. Nagle 算法

只有 **同时** 满足下列两个条件 ,才能进行 **数据传输**

- 已发的数据都被接收
- 可以发送最大段长度`MSS`的数据

> 虽然可以提高网络的利用率
>
> 但是会造成网络延时
>
> 在 **窗口系统** 或 **机械控制等领域** 使用 tcp 时,会 **关闭该算法**

### 2. 延迟确认应答 -  较优处理机制

> 能够提高网络利用率
>
> 降低计算机处理负荷
> 

> **实现机制**
> 
> - 在没有收到 **`2xMSS`** 的数据为止 ,不做确认应答 - `ACK`
> 		- 一些操作系统会规定
> 		- **无论数据大小 , 两个包即刻应答**
> - 其他情况下 , 最大延迟 **0.5s** 回复确认信号
> 		- 很多操作系统设置为 **0.2s** 左右

### 3. 捎带应答

> ==前提开启 **延迟确认应答** 才能实现==
>
> 减少收发数据量

![捎带应答](https://img-blog.csdnimg.cn/92d0e72c770b4ed08f16ebffaba2d01c.png?x-oss-process=image/watermark,type_ZHJvaWRzYW5zZmFsbGJhY2s,shadow_50,text_Q1NETiBA5aaC5L2V5YOP6aOO5LiA5qC3,size_20,color_FFFFFF,t_70,g_se,x_16#pic_center)
## 四. 首部格式

### 1. TCP数据包格式
![tcp首部](https://img-blog.csdnimg.cn/e7cf66471ee443f189eda86e7a80dcbf.png?x-oss-process=image/watermark,type_ZHJvaWRzYW5zZmFsbGJhY2s,shadow_50,text_Q1NETiBA5aaC5L2V5YOP6aOO5LiA5qC3,size_20,color_FFFFFF,t_70,g_se,x_16#pic_center)
| 名词                                                         | 长度          | 解释                                                         |
| ------------------------------------------------------------ | ------------- | ------------------------------------------------------------ |
| 源端口号 - Source Port                                       | 16bit         | 发送端端口                                                   |
| 目标端口号 - Destination Port                                | 16bit         | 接收端端口                                                   |
| 序列号 - Seq ( 计算机随机数 )                                | 32bit         | 发送数据的位置 , 没成功发送一次 累计+1                       |
| 确认应答号 - ACK                                             | 32bit         | 下次应收到的数据的系列号                                     |
| 数据偏移 - Data Offset                                       | 32bit         | 表示数据部分应该从哪里算起<br />==5 ,表示从源端口号到 **4x5=20** 个字节后都为数据部分 |
| 保留 - Reserved                                              | 32bit         | 用于后期扩展 , 一般为0                                       |
| 控制位 - Control Flag                                        | 8bit          | 见下文==控制位表格==                                         |
| 窗口大小 - Windows Size                                      | 16bit         | 表示从 **确认应答信号** 开始的位置算起 ,能够接收的 **数据大小** ( 8bit )<br /> ==0 表示可以发送窗口探测<br /> 能够接收的 **数据大小** 必须 **1Byte** |
| 校验和 - Checksum                                            | -             | 见后文                                                       |
| 紧急指针 - Urgent Pointer                                    | 16bit         | **控制位 - URG == 1** 有效<br /> **紧急数据** - 从 **数据首位** 到 **紧急指针** 为止<br />同时也用作数据流分段标志 |
| [选项 - Options](https://www.cnblogs.com/lshs/p/6038494.html) | max == 40byte | 用于提高传输性能<br /> 长度和数据偏移有关                    |

### 2. 控制位

![控制位](https://img-blog.csdnimg.cn/2cb8d54b0b2843cda51734c5f4e00bf1.png#pic_center)

| 第几位 | 名称 | 用途                                                         |
| ------ | ---- | ------------------------------------------------------------ |
| No.8   | CWR  | CWR + ECE 用于 IP的 ECN 字段<br /> ==1 **通知** 对方 **拥塞窗口** 已缩小 |
| No.9   | ECE  | IP的 ECN == 1 时<br /> ECE == 1 告知对方网络拥堵             |
| No.10  | URG  | ==1 包中有 **紧急处理** 的数据                               |
| No.11  | ACK  | ==1 确认应答字段有效                                         |
| No.12  | PSH  | ==1 数据立刻上传应用层<br />==0 缓存                         |
| No.13  | RST  | ==1 出现异常,强制断开                                        |
| No.14  | SYN  | ==1 希望建立连接<br /> 并在 **序列号字段** 进行 **序列号** 初始值设定 |
| No.15  | FIN  | ==1 希望断开连接,之后不会再发送数据                          |



### 3. 校验和

> 为了提供 **可靠的** TCP **首部** 和 **数据**

**TCP首部校验和计算三部分：TCP首部 + TCP数据 + TCP伪首部**

>  **TCP伪首部**
>
> ![tcp伪首部](https://img-blog.csdnimg.cn/e9eb08dfdc7d428487822f740c63c2b3.png?x-oss-process=image/watermark,type_ZHJvaWRzYW5zZmFsbGJhY2s,shadow_50,text_Q1NETiBA5aaC5L2V5YOP6aOO5LiA5qC3,size_20,color_FFFFFF,t_70,g_se,x_16#pic_center)


> 参考
>
> [(1条消息) IP首部校验和计算及1的补码_cradmin的专栏-CSDN博客](https://blog.csdn.net/cradmin/article/details/3092559)
>
> [(1条消息) tcp/udp校验和以及伪首部介绍_nice_wen的博客-CSDN博客_tcp 伪首部](https://blog.csdn.net/nice_wen/article/details/77926730)
>
> [TCP头校验和计算算法详解 - RodYang - 博客园 (cnblogs.com)](https://www.cnblogs.com/RodYang/p/3265515.html)

## 结束
~ ~ ~
