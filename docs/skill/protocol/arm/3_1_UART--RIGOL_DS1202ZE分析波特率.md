---
id: uart-3_1
title: UART--RIGOL_DS1202ZE分析波特率
date: 2021-11-14
authors: 鲸语
tags: [协议, arm, uart, 波特率, 波形]
---

借助示波器, 分析uart传输数据时波特率的逻辑波形

## <任务内容>
1.  观察串口发送数据波形(TTL电平标准)
2.  计算每帧数据的波特率,分析波特率误差
## <实现硬件&测量平台>
-   STM32F103VET6
-   RIGOL_DS1202ZE示波器
### - 实现原理
1.  由STM32实现串口的收发数据功能
2.  PC给STM32发送数据"123\\r" 

		十六进制为 < 0x31 0x32 0x33 0x0A >

3.  利用示波器采样STM32的串口接收并循环发出的引脚
4.  得到数据,截图,并分析
## <数据结果>

### - 第一帧数据

![数据结果一](https://img-blog.csdnimg.cn/6794179afabe473fa0f6284834522a06.png?x-oss-process=image/watermark,type_ZHJvaWRzYW5zZmFsbGJhY2s,shadow_50,text_Q1NETiBA5pyq6Ze7wrflubvop4k=,size_20,color_FFFFFF,t_70,g_se,x_16#pic_center)

> 图中数据为0-1000,1100-1 
> 真实数据为0-0011,0001-1 ==> 0x31 
> 第一帧数据传输时间为0.00us-1.04ms

### - 第二帧数据

![数据结果二](https://img-blog.csdnimg.cn/3d82530b59ec42b48e799cd3930e86c5.png?x-oss-process=image/watermark,type_ZHJvaWRzYW5zZmFsbGJhY2s,shadow_50,text_Q1NETiBA5pyq6Ze7wrflubvop4k=,size_19,color_FFFFFF,t_70,g_se,x_16#pic_center)
> 图中数据为0-0100,1100-1 
> 真实数据为0-0011,0010-1 ==> 0x32 
> 第二帧数据传输时间为1.04ms-2.08ms

### - 第三帧数据

![在这里插入图片描述](https://img-blog.csdnimg.cn/c4dc62a0f598473a8fa5a0e9be16757a.png?x-oss-process=image/watermark,type_ZHJvaWRzYW5zZmFsbGJhY2s,shadow_50,text_Q1NETiBA5pyq6Ze7wrflubvop4k=,size_19,color_FFFFFF,t_70,g_se,x_16#pic_center)

	图中数据为0-1100,1100-1
	真实数据为0-0011,0011-1 ==> 0x33
	第三帧数据传输时间为2.08ms-3.12ms

### - 第四帧数据

![数据结果四](https://img-blog.csdnimg.cn/856dd2ee599a49848716d9ea708efadc.png?x-oss-process=image/watermark,type_ZHJvaWRzYW5zZmFsbGJhY2s,shadow_50,text_Q1NETiBA5pyq6Ze7wrflubvop4k=,size_19,color_FFFFFF,t_70,g_se,x_16#pic_center)

	图中数据为0-0101,0000-1
	真实数据为0-0000,1010-1 ==> 0x0A
	第四帧数据传输时间为3.12ms-4.16ms
## <波特率计算>
### - 算法一

1. 四帧数据(40bit)传输的总时间为4.16ms
2. 理论上以9600的波特率传输四帧数据(40bit)需要的时间为1/240s约等于4.17ms
3. 所以波特率误差为(4.17-4.16)/4.17 = 2.40‰
### - 算法二
- 第一帧:\[(1/960s) - 1.04ms\] / (1/960s) = 0.961‰
- 第二帧:\[(1/960s) - 1.04ms\] / (1/960s) = 0.961‰
- 第三帧:\[(1/960s) - 1.04ms\] / (1/960s) = 0.961‰
- 第四帧:\[(1/960s) - 1.04ms\] / (1/960s) = 0.961‰
- 误差稳定在0.961‰
## <结论总结>
1. 为了误差值得测量准确性
	- 可以增加小数点后有效位
	- 多测数据以求平均
2. 串口数据发送遵循的是==低位先行==
	因此读数据时要倒着读.
## <关键程序附录-HAL>
```c
//main.c
void main()
{
	/*
		......
		各模块初始化
		......
	*/
	
	while (1)
	{
		if (usart_1_Rx_dateTypedef.usart_Flag)
		{
			HAL_UART_Transmit(&huart1, (uint8_t *)usart_1_Rx_dateTypedef.Buffer, usart_1_Rx_dateTypedef.usart_Cnt, 0x10);  //发送数据
			for(int i = 0;i<usart_1_Rx_dateTypedef.usart_Cnt;i++)   usart_1_Rx_dateTypedef.Buffer[i] = 0;
			usart_1_Rx_dateTypedef.usart_Cnt = 0;
			usart_1_Rx_dateTypedef.usart_Flag = 0;
		}
	}
}
```
```c
/**
  * @brief 串口中断回调函数
  * @param 调用回调函数
  * @note  串口每次收到数据以后都会关闭中断，如口重复使用，必须再次开启
  * @retval None
  */
void HAL_UART_RxCpltCallback(UART_HandleTypeDef *huart)
{
	if (huart->Instance == USART1)
	{
		usart_1_Rx_dateTypedef.Buffer[usart_1_Rx_dateTypedef.usart_Cnt] =
			usart_1_Rx_dateTypedef.it_Buffer[0]; //保存接收数据
		usart_1_Rx_dateTypedef.usart_Cnt++;		 //计数值加1

		if (0x0D == usart_1_Rx_dateTypedef.it_Buffer[0])
		{										   //ASSIC   换行表示结束
			usart_1_Rx_dateTypedef.usart_Flag = 1; //接收结束标志
		}
		else
		{
			HAL_UART_Receive_IT(&huart1, (uint8_t *)usart_1_Rx_dateTypedef.it_Buffer, 1); //否则使能串一中断
		}
	}
}
```
