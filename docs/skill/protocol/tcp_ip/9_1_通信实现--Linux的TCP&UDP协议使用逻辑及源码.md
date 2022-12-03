---
id: tcp_ip-9_1
title: 通信实现--Linux的TCP&UDP协议使用逻辑及源码
date: 2021-11-17
authors: 鲸语
tags: [协议, tcp/ip, UDP, TCP, Linux]
---

Linux TCP&UDP协议 实现源码 流程图

## UDP
### 程序流程图
![UDP程序流图](https://img-blog.csdnimg.cn/5ffb4e0af8fa4883985f6107e28ed52a.PNG?x-oss-process=image/watermark,type_ZHJvaWRzYW5zZmFsbGJhY2s,shadow_50,text_Q1NETiBA5pyq6Ze7wrflubvop4k=,size_20,color_FFFFFF,t_70,g_se,x_16#pic_center)

#### 函数及作用

| 函数名     | 功能             |
| ---------- | ---------------- |
| socket()   | 创建套接字       |
| bind()     | 绑定 ip + 套接字 |
| recvfrom() | 接收消息         |
| sendto()   | 发送消息         |


### 源码
#### udp_client.c
```c
#include <stdio.h>
#include <stdlib.h>
#include <string.h>
#include <unistd.h>
#include <sys/socket.h>
#include <netinet/in.h>
#include <arpa/inet.h>

/** 
 * @berief: 主函数,建立udp_client.c
 * @param:   argc    第几个参数
 * @param:   *arrgv[]    参数
 * @rote:   参数可以使用也可以不使用
 * @return: 0
 */
int main(int argc, char *argv[])
{
	int sockfd = 0;
	struct sockaddr_in dest_addr;
	unsigned short port = 8000;
	char *server_ip = "172.20.223.151";
	
	if( argc > 1 )  //第一个参数改ip
	{		
		server_ip = argv[1];
	}	
	
	if( argc > 2 )  //第二个参数改端口
	{
		port = atoi(argv[2]);
	}

	sockfd = socket(AF_INET, SOCK_DGRAM, 0);  //创建套接字 SOCK_DGRAM 数据报套接字类型
	if(sockfd < 0)
	{
		perror("socket error!");
		exit(-1);
	}
	
	bzero(&dest_addr, sizeof(dest_addr));
	dest_addr.sin_family = AF_INET;
	dest_addr.sin_port   = htons(port);
	inet_pton(AF_INET, server_ip, &dest_addr.sin_addr);

	printf("ready send data to UDP server %s:%d!\n", server_ip, port);
	
	while(1)
	{
		char send_buf[512] = "";
		char recv_buf[512] = "";
		
		fgets(send_buf, sizeof(send_buf), stdin);
		send_buf[strlen(send_buf)-1] = '\0';
		
		sendto(sockfd, send_buf, strlen(send_buf), 0, (struct sockaddr*)&dest_addr, sizeof(dest_addr));
		
		recvfrom(sockfd, recv_buf, sizeof(recv_buf), 0, NULL, NULL);  //接收消息
		printf("%s\n", recv_buf);
	}
	
	close(sockfd);
	return 0;
}
```
#### udp_server.c
```c
#include <stdio.h>
#include <stdlib.h>
#include <string.h>
#include <unistd.h>
#include <sys/socket.h>
#include <netinet/in.h>
#include <arpa/inet.h>


/** 
 * @berief: 主函数,建立udp_server.c
 * @param:   argc    第几个参数
 * @param:   *arrgv[]    参数
 * @rote:   参数可以使用也可以不使用
 * @return: 0
 */
int main(int argc, char *argv[])
{
	int sockfd = 0;
	int err_log = 0;
	struct sockaddr_in my_addr;
	unsigned short port = 8000;

	if(argc > 1)
	{
		port = atoi(argv[1]);
	}

	printf("UDP Server Started!\n");
	sockfd = socket(AF_INET, SOCK_DGRAM, 0);
	if(sockfd < 0)
	{
		perror("socket");
		exit(-1);
	}
	
	bzero(&my_addr, sizeof(my_addr));
	my_addr.sin_family = AF_INET;
	my_addr.sin_port   = htons(port);
	my_addr.sin_addr.s_addr = htonl(INADDR_ANY);
	
	printf("Binding server to port %d\n", port);
	
	err_log = bind(sockfd, (struct sockaddr*)&my_addr, sizeof(my_addr));
	if(err_log != 0)
	{
		perror("bind");
		close(sockfd);		
		exit(-1);
	}
	
	printf("waiting data from other client...\n");
	while(1)
	{
		char recv_buf[512] = "";
		char cli_ip[INET_ADDRSTRLEN] = "";
		int recv_len = 0;
		struct sockaddr_in client_addr;
		socklen_t cliaddr_len = sizeof(client_addr);
		
		recv_len = recvfrom(sockfd, recv_buf, sizeof(recv_buf), 0, (struct sockaddr*)&client_addr, &cliaddr_len);
		printf("client ip = %s\n", inet_ntop(AF_INET, &client_addr.sin_addr, cli_ip, INET_ADDRSTRLEN));
		sendto(sockfd, recv_buf, recv_len, 0, (struct sockaddr*)&client_addr, cliaddr_len);
	}
	
	close(sockfd);
	return 0;
}
```

## TCP
### 程序流程图
![tcp程序流程](https://img-blog.csdnimg.cn/774c7fc90e764791a88cb5cb63cc73d5.PNG?x-oss-process=image/watermark,type_ZHJvaWRzYW5zZmFsbGJhY2s,shadow_50,text_Q1NETiBA5pyq6Ze7wrflubvop4k=,size_20,color_FFFFFF,t_70,g_se,x_16#pic_center)

#### 函数及作用


| 函数名   | 功能                                |
| -------- | ----------------------------------- |
| socket() | 创建套接字                          |
| bind()   | 套接字**绑定**端口 + IP             |
| listen() | 监听端口号是否有连接,等待建立       |
| accept() | 调取列表中已建立的连接              |
| write()  | 写                                  |
| read()   | 读                                  |
| close()  | 关闭文件标识符                      |
| accept() | client 的套接字连接 Server 的套接字 |


### 源码
#### tcp_client.c
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
#### tcp_server.c
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
## 结语
~ ~ ~
