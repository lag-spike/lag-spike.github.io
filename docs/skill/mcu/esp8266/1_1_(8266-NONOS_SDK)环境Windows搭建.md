---
id: esp8266-1_1
title: (8266-NONOS_SDK)环境Windows搭建
date: 2022-03-27
authors: 鲸语
tags: [单片机, esp8266, NONOS_SDK, 环境搭建, Windows]
---

关于 Windows 搭建 ESP8266-NONOS_SDK 开发环境记录

 ## 准备内容
 - [Eclipse IDE for C/C++ Developers](https://www.eclipse.org/downloads/packages/release/kepler/sr2/eclipse-ide-cc-developers)
 	> 注意: Eclipse 运行需要Java环境
 - [Cygwin](https://download.csdn.net/download/weixin_44113601/85042844)
 - [ESP8266-NONOS-SDK](https://gitee.com/ixviii/esp8266-nonos-sdk)
## 步骤
### 1. 安装并可运行 `Eclipse IDE for C/C++ Developers`
### 2. 配置 `cygwin` 环境变量
![环境变量配置结果](https://img-blog.csdnimg.cn/56dc3bf8f1204764b6b829bae8976ea4.png)
### 3. 进入 `Eclipse IDE for C/C++ Developers` 导入工程
- 导入方式 :  ==File => Import==
>![步1](https://img-blog.csdnimg.cn/fa3128eb68f941b5a54efa00d3dc23dd.png?x-oss-process=image/watermark,type_d3F5LXplbmhlaQ,shadow_50,text_Q1NETiBA6Z2S6JOd54Gw57Sr,size_20,color_FFFFFF,t_70,g_se,x_16)	![步2](https://img-blog.csdnimg.cn/b26b2e8f870a4dabafdcabc303bdb4a4.png?x-oss-process=image/watermark,type_d3F5LXplbmhlaQ,shadow_50,text_Q1NETiBA6Z2S6JOd54Gw57Sr,size_20,color_FFFFFF,t_70,g_se,x_16)
### 4. 进入配置工程属性
![进入属性方式](https://img-blog.csdnimg.cn/9a7863d7193343ab923751e66279862d.png)
### 5. 设置属性参数	 
>![在这里插入图片描述](https://img-blog.csdnimg.cn/788ad220f01f4b2da27d80d5e74f41c8.png?x-oss-process=image/watermark,type_d3F5LXplbmhlaQ,shadow_50,text_Q1NETiBA6Z2S6JOd54Gw57Sr,size_20,color_FFFFFF,t_70,g_se,x_16)
	>`Build command`  命令参数的两种模式(**FOTA**-云端升级)
	> **Non-FOTA** 
	> ```make
	> make COMPILE=gcc BOOT=new APP=0 SPI_SPEED=40 SPI_MODE=DOUT SPI_SIZE_MAP=2
	> ```
	> **FOTA** 
	> ```make
	> make COMPILE=gcc BOOT=new APP=1 SPI_SPEED=40 SPI_MODE=DIO SPI_SIZE_MAP=2
	> ```
	> 
	>`Build location` 处可以默认不修改
	>


### 6. 编译工程
- **Clean Project**
- **Build Project**


	> ==右键点击工程==
	> 	![在这里插入图片描述](https://img-blog.csdnimg.cn/308b5e1a93b84f5e86604c7ca593c95e.png?x-oss-process=image/watermark,type_d3F5LXplbmhlaQ,shadow_50,text_Q1NETiBA6Z2S6JOd54Gw57Sr,size_20,color_FFFFFF,t_70,g_se,x_16)
### 7. 观察结果

-	当 `Console` 窗口显示此内容, 表示编译通过
![在这里插入图片描述](https://img-blog.csdnimg.cn/1695239b0c45455798203da13a3afcaf.png?x-oss-process=image/watermark,type_d3F5LXplbmhlaQ,shadow_50,text_Q1NETiBA6Z2S6JOd54Gw57Sr,size_20,color_FFFFFF,t_70,g_se,x_16)
