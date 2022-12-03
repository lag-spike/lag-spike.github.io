---
id: tcp_ip-2_1
title: 协议分析--Wireshark & TCP的双端数据包分析
date: 2021-11-16
authors: 鲸语
tags: [协议, tcp/ip, 协议分析, TCP]
---

使用 Wireshark 对TCP协议的客户端和服务端数据的抓取分析

## (一) 目标&方法
为了可以更深入,更直观的**理解TCP通信**原理,**理解TCP数据段格式**，本文对 -- 字符"A"通过**TCP协议**传输的**数据包**进行**分析**

>==**TCP数据段格式**==
> 
>  
> ![TCP数据段格式](https://img-blog.csdnimg.cn/04e0c0b27f104cf8bbb05f2cf01c120b.PNG?x-oss-process=image/watermark,type_ZHJvaWRzYW5zZmFsbGJhY2s,shadow_50,text_Q1NETiBA5pyq6Ze7wrflubvop4k=,size_20,color_FFFFFF,t_70,g_se,x_16#pic_center)
## (二) 平台
- Linux - 实现TCP通信
- Wireshark - 实时捕获TCP传入和传出数据包
	>- 安装包
	> [官方 - win64-3.4.9.exe](https://1.na.dl.wireshark.org/win64/Wireshark-win64-3.4.9.exe)
	> [官方 - macOS Intel 64-bit.dmg](https://1.na.dl.wireshark.org/osx/Wireshark%203.4.9%20Intel%2064.dmg)
	> [官方 - Source Code](https://1.na.dl.wireshark.org/src/wireshark-3.4.9.tar.xz)
	>-  文章 ( 请自行评测! )
	> [ubuntu下安装-link1](https://blog.csdn.net/magiclyj/article/details/77231707)
	> [ubuntu下安装-link2](https://linux.cn/article-11987-1.html)
	
## (三) 步骤
### 一. 实现TCP通信( TCP源码 - 文末附 )
传输的数据为 **单字符 "A"**

> ==注意== 
> 1. TCP_Client.c 源码中服务器 IP 的更换
> 2. 注意双端要在**同一网段**内通信

### 二. 获取
#### 1. 选择(网卡)通道
> 一般情况下是 客户端与那个IP通信 用到那个网卡,选择哪个即可
> 但是如果你是==本地回环数据==的话,数据不走网卡,所以选择虚拟网卡

**<1>  方式一  开启软件默认弹出  双击选择**  

![选择通道](https://img-blog.csdnimg.cn/9e3d3d8ab249434ebc101acd86de71e6.PNG?x-oss-process=image/watermark,type_ZHJvaWRzYW5zZmFsbGJhY2s,shadow_50,text_Q1NETiBA5pyq6Ze7wrflubvop4k=,size_20,color_FFFFFF,t_70,g_se,x_16#pic_center)

**<2>  方式二   菜单栏-捕获-选项**
![菜单栏](https://img-blog.csdnimg.cn/4c059bbc3dd7407cb2dd5d27e3c7a74a.png?x-oss-process=image/watermark,type_ZHJvaWRzYW5zZmFsbGJhY2s,shadow_50,text_Q1NETiBA5pyq6Ze7wrflubvop4k=,size_20,color_FFFFFF,t_70,g_se,x_16#pic_center)
![选择虚拟网卡](https://img-blog.csdnimg.cn/ff0bf3ba02974797898f4a31d7cc7690.PNG?x-oss-process=image/watermark,type_ZHJvaWRzYW5zZmFsbGJhY2s,shadow_50,text_Q1NETiBA5pyq6Ze7wrflubvop4k=,size_20,color_FFFFFF,t_70,g_se,x_16#pic_center)

#### 2. 过滤 + 抓取
**(1) 过滤引用指令**
```c
tcp.port == 8080    //记得回车
//这里的端口号是我的
//你需要自行更改成和你的程序内一致
```
![过滤](https://img-blog.csdnimg.cn/372ebfe0af964917b338cce099271c1e.PNG#pic_center)

**(2) 设置好过滤后开启抓取按钮**
> 本程序实现的效果是
> 
> - tcp Client 发送字符 " A " 给 Server
> - tcp Server 接收到后将 " A " 返回 Client 
>  
>  对应数据包共有 11 包
>  
>  - 3包"握手" + 4包数据 + 4包"挥手"

![开始抓取数据包](https://img-blog.csdnimg.cn/005fd49290ea499b9be5ee8bd7d347a0.PNG#pic_center)
**(3) 运行程序 -- 先运行服务端,在运行客户端 -- 成功接收数据后**
**(4) 点击结束按钮,开始分析**
![结束抓取](https://img-blog.csdnimg.cn/1e35eae58e7d4c3199fb905cbba76748.PNG#pic_center)

### 三. 分析
#### 1. 简要信息 
![全部数据包](https://img-blog.csdnimg.cn/00701c192d724ce9a59ab3f98b36757c.PNG?x-oss-process=image/watermark,type_ZHJvaWRzYW5zZmFsbGJhY2s,shadow_50,text_Q1NETiBA5pyq6Ze7wrflubvop4k=,size_20,color_FFFFFF,t_70,g_se,x_16#pic_center)

: -------------------------------- **( 详细请双击打开抓取的数据包自行解读 )**--------------------------------

> 软件显示的数据栏非常的直观的标明了各种关键数据

![在这里插入图片描述](https://img-blog.csdnimg.cn/88f823dce8a245cca04fc9a5f9fedb6d.png#pic_center)

>
> | 名称        | 含义       |
> | ----------- | ---------- |
> | No.         | 数据包编号 |
> | Times       | 时间       |
> | Source      | 源IP       |
> | Destination | 目标IP     |
> | Protocol    | 协议       |
> | Length      | 包长       |
> | Info        | 其他信息   |

**==Info== 的关键信息**

**首部信息**
> 源端口号(前) -> 目标端口号(后)
> Seq -- 序列号  表示发送数据的位置,每发一字节数据 +1
> Win -- 窗口大小
> 
**首部 -- 控制位( Control Flag )**
> ACK -- ==1 应答有效, 表示已接收
> SYN -- ==1 希望建立连接
> PSH -- ==1 希望立刻传数据,==0 希望先缓存
> FIN -- ==1 希望断开连接

**首部 -- 选项( Options )**
>WS -- Window Scale
>SACK_PERM -- SACK Permitted

**数据信息**
> Len -- 数据长度
> MSS -- 可发送最大长度

#### 2. 拆解

> 由于本人是实现的==本地回环==,所以
> 60770表示Client
> 8080表示Server

##### <1>三次"握手"
**目的** : 建立连接 -- 关键点已标注
![三次握手](https://img-blog.csdnimg.cn/a8368876cc304853bbc39837877477a4.PNG#pic_center)

> ​		==从此开始==
> No. 53-55
> 
> 53. Client 向 Server 发出请求连接 -- SYN
> 
> 54. Server  回应 Client -- ACK,确认收到
>     并且,发出连接请求 -- SYN
> 
> 55. Client 向 Server 回复 -- ACK,确认收到


##### <2>传输数据
**目的** : 传输数据 -- 关键点已标注
![传输数据](https://img-blog.csdnimg.cn/ae647d48f1bd4354b9cd064e8a24b50c.PNG#pic_center)
> No. 56-57
>
> 56. Client 向 Server 发送数据 -- PSH
>     及,重复一次 No.  54 的请求已收到(No. 55)
>
> > Len == 1    因为发送一个字节数据
> 57. Server 向 Client 回应 -- ACK,确认收到


> No. 58-59
>
> 58. Server 向 Client 发送数据 -- PSH
>     及,重复一次 No. 56 的请求已收到(No. 57)
> > Len == 1    因为发送一个字节数据
> 59. Client 向 Server 回应 -- ACK,确认收到

##### <3>四次"挥手"
**目的** : 断开连接 -- 关键点已标注
![四次挥手](https://img-blog.csdnimg.cn/ea2464cd48074032888ccb081a4485a8.PNG#pic_center)

> No. 60-63
>
> 60. Client 向 Server 发出断开连接请求 -- FIN
>     及,重复一次 No. 58 的请求已收到(No. 59)
>
> 61. Server 向 Client 回应 -- ACK,确认收到
>
> 62. Server 向 Client 发出断开连接请求 -- FIN
>     及,重复一次 No. 60 的请求已收到(No. 61)
>
> 63. Client 向 Server回应 -- ACK,确认收到
>
>
>     
>     ==到此结束==
#### 3. ACK  & Seq 变化
> ( 开始握手第一包 ACK == 0 , Seq == 0 )--Client
> 
> ( 开始握手第二包  ACK == 1 , Seq == 0 )--Serve
 
> 一旦 -  回应上一包数据 -  确认接收后
> 
> > 下一包数据的 Seq = 当前ACK
> > 下一包数据的 ACK+1
## (四) 结语
愿大家前程可奔,岁月可忆!
## -------------TCP源码
### tcp_client.c
```c
#include <stdio.h>
#include <unistd.h>
#include <string.h>
#include <stdlib.h>

#include <arpa/inet.h>
#include <sys/socket.h>
#include <netinet/in.h>

/** 
 * @berief: 主函数,建立tcp_client.c
 * @param:   argc    第几个参数
 * @param:   *arrgv[]    参数
 * @rote:   参数可以使用也可以不使用
 * @return: 0
 */
int main(int argc, char *argv[])
{
    // while (1)
    // {    
        unsigned short port = 8080;  //端口号
        char *server_ip = "192.168.20.61";  //服务器ip
        char send_buf[512] = "A";
        char recv_buf[512] = "";
        int sockfd = 0;  //套接字文件标识符
        int err_log = 0;  //错误返回
        struct sockaddr_in server_addr;  //tcp通信中服务器地址结构体

        if(argc > 1)
        {
            server_ip = argv[1];
        }

        if (argc > 2)
        {
            port = atoi(argv[2]);  //char --> int
        }

        //初始化服务器地址
        bzero(&server_addr,sizeof(server_addr));  //将地址的数据长清零
        server_addr.sin_family = AF_INET;  //tcp udp
        server_addr.sin_port = htons(port);  
        /*
            htons(unsigned short k)
            无符号短整型数值 --> 网络字节序
            大端模式--高字节存放在内存的低地址处
            --port == 0x1234
            ----内存中       addr    addr+1  
                            0x12    0x34
            ----网络字节序  0x34    0x12
        */
        inet_pton(AF_INET, server_ip, &server_addr.sin_addr); //将地址的点分十进制转换为2进制

        //创建通信端点--套接字
        sockfd = socket(AF_INET,SOCK_STREAM,0);
        if(sockfd < 0)
        {
            perror("socket");
            exit(-1);
        }

        //链接服务器
        err_log = connect(sockfd,(struct sockaddr*)&server_addr,sizeof(server_addr));
        if(err_log != 0)
        {
            perror("connect");
            close(sockfd);
            exit(-1);
        }

        //通信
        send(sockfd, send_buf, strlen(send_buf), 0);   // 向服务器发送信息
        recv(sockfd, recv_buf, sizeof(recv_buf), 0);   // 接收服务器发回的信息
        printf("%s\n", recv_buf);
        
        //结束通信,关闭套接字文件标识
        close(sockfd);

        // sleep(5);
    // }
	return 0;
}
```
### tcp_server.c
```c
#include <stdio.h>
#include <stdlib.h>
#include <string.h>
#include <unistd.h>

#include <sys/socket.h>
#include <netinet/in.h>
#include <arpa/inet.h>

/** 
 * @berief: 主函数,建立tcp_server.c
 * @param:   argc    第几个参数
 * @param:   *arrgv[]    参数
 * @rote:   参数可以使用也可以不使用
 * @return: 0
 */
int main(int argc, char *argv[])
{
    char recv_buf[2048] = "";  //接收缓存区
    int sockfd = 0;  //通信使用的套接字文件标识符
    int connfd = 0;
    int err_log = 0;
    struct sockaddr_in my_addr;
    unsigned short port = 80000;  //监听端口号

    //可以修改端口号
	if(argc > 1)
	{
		port = atoi(argv[1]);
	}
    printf("TCP Server Started at port %d\n",port);

    //创建通信中套接字文件标识符
    sockfd = socket(AF_INET,SOCK_STREAM,0);
    if(sockfd < 0)
	{
		perror("socket");
		exit(-1);
	}

    //初始化服务器地址
    bzero(&my_addr, sizeof(my_addr));  //地址清零  
    my_addr.sin_family = AF_INET;  //选择TCP/UDP模式
	my_addr.sin_port   = htons(port);
    /*
        htons(unsigned short k)
        无符号短整型数值 --> 网络字节序
        大端模式--高字节存放在内存的低地址处
        --port == 0x1234
        ----内存中       addr    addr+1  
                        0x12    0x34
        ----网络字节序  0x34    0x12
    */
	my_addr.sin_addr.s_addr = htonl(INADDR_ANY);  //将地址的32位无符号长整形转换为网络字节序

    //套接字与端口和地址的绑定
    printf("Binding server to port %d\n", port);
	err_log = bind(sockfd, (struct sockaddr*)&my_addr, sizeof(my_addr));
    /** 
     * bind()
     * 对套接字-地址-端口绑定
    */
	if( err_log != 0)
	{
		perror("binding");
		close(sockfd);		
		exit(-1);
	}
    err_log = listen(sockfd, 10);  //套接字是否来连接
    /** 
     * 参数一   套接字
     * 参数二   请求队列中可以放入的最大链接数
    */
	if(err_log != 0)
	{
		perror("listen");
		close(sockfd);		
		exit(-1);
	}	

    printf("Waiting client...\n");

    while (1)
    {
        size_t recv_len = 0;
        struct sockaddr_in client_addr;  //保存客户端地址
        char client_ip[INET_ADDRSTRLEN] = "";  //保存客户端ip地址
        socklen_t cliaddr_len = sizeof(client_addr);  //初始化--必须

        //获取已建立的链接
        connfd = accept(sockfd,(struct sockaddr*)&client_addr,&cliaddr_len);  //获得已建立的链接
        if(connfd < 0)
        {
            perror("accept");
            continue;
        }

        inet_ntop(AF_INET,&client_addr.sin_addr,client_ip,INET_ADDRSTRLEN);
        printf("client ip = %s\n",client_ip);

        //接收
        while ((recv_len = recv(connfd,recv_buf,sizeof(recv_buf),0)) > 0)
        {
            send(connfd,recv_buf,recv_len,0);
        }

        close(connfd);  //关闭已连接的套接字
        printf("client closed!\n");        
    }

    close(sockfd);
    return 0;
}
```

