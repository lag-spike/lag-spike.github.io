---
id: Konfig-1_1
title: 语法--Kconfig基础
date: 2022-01-06
authors: 鲸语
tags: [开发语言, Konfig, 语法, 基础]
---

## 一. 文件开头 `mainmenu`

```shell
#菜单开头
mainmenu "LOG_TEST DEMO Config"
```

## 二. 菜单块 `menu/endmenu`

>   *menu 之后的字符串是菜单名。`menu`和 `endmenu`间有很多 `config`语句*

```shell
menu "Hardware Drivers Config"
    配置块一
    配置块二
endmenu
```

## 三. 配置块  `config` `menuconfig`

>   配置的选项块隐藏
>
>   隐藏:
>
>   ```shell
>   config BSP_USING_GPIO
>       bool
>       default y
>   ```
>
>   显示:
>
>   ```shell
>   config BSP_USING_GPIO
>       bool "Enable GPIO"
>       default y
>   ```

### `config`

```shell
#  配置选项的开始  配置选项名称
config BSP_USING_GPIO 

    #   配置类型定义 -- 5种
    #   bool 布尔类型        default n
    #   tristate 三态类型    表示在内核中的三种状态
    #        用法:
    #            y 不选中
    #            n 选中编译到内核
    #            m 手动添加驱动
    #   string 字符串        default "uart1"
    #   hex 十六进制         用法同下--区别生成的数的进制不一样
    #   int 整形             
    #        使用整形时需要有范围
    #        int "ssss"
    #        range 1 176
    #        default 116
    bool "Enable GPIO"//类型 输入提示
    
    #   反向依赖关系     
    #   select：开启 BSP_USING_GPIO 需要依赖 RT_USING_PIN
    #        RT_USING_PIN 功能会被自动选定；
    select RT_USING_PIN//依赖关系
    
    #   配置选项的默认值
    #   bool的可以是 y/n  
    default y//默认值

    #   config gpio
    #   为帮助信息
    help//帮助信息
    config gpio
#===============================================
    #   配置结束后
    #   rtconfig.h 有如下内容
    #        #define RT_USING_PIN
    #        #define BSP_USING_GPIO
```

### `menuconfig`

```shell
# menuconfig 这个语句和 config 语句很相似
# 它在 config 的基础上要求所有的子选项作为独立的行显示。
menu "Hardware Drivers Config"
    menuconfig BSP_USING_UART
        bool "Enable UART"
        default y
        select RT_USING_SERIAL
        if BSP_USING_UART
            config BSP_USING_UART1
                bool "Enable UART1"
                default y

            config BSP_UART1_RX_USING_DMA
                bool "Enable UART1 RX DMA"
                #   depends on
                #   该配置选项 BSP_UART1_RX_USING_DMA
                #   只有在 BSP_USING_UART1 && RT_SERIAL_USING_DMA 为真时
                #   方可显示
                depends on BSP_USING_UART1 && RT_SERIAL_USING_DMA
                default n
        endif
endmenu
```

## 四. 条件显示 `if` `depends on`

### `if`

>   *当没有选中 "Enable CAN" 选项时( 就是宏  `BSP_USING_CAN` )，下面通过 if 判断的 `Enable CAN1` 选项并不会显示出来*

```shell
menu "Hardware Drivers Config"
    menuconfig BSP_USING_CAN
        bool "Enable CAN"
        default n
        select RT_USING_CAN
        if BSP_USING_CAN
            config BSP_USING_CAN1
                bool "Enable CAN1"
                default n
        endif
endmenu
```

### `depends on`

>    `depends on` 条件满足 内容显示

```shell
# RT_USNING_A 选定或者 RT_USNING_B 不选定的情况下
# 显示 BSP_USING_UART3 的配置菜单选项
# 默认 是否 为选择状态  取决于  default n
config BSP_USING_UART3
    bool "UART3 config"
    depends on RT_USNING_A || !RT_USNING_B
    select RT_USING_SERIAL
    default n
```

## 五. 依赖 `select`

```shell
# 开启 BSP_USING_UART3 需要依赖 RT_USING_SERIAL
# 若 BSP_USING_UART3 开启, 
# RT_USING_SERIAL 功能会被自动选定
config BSP_USING_UART3
    bool "UART3 config"
    select RT_USING_SERIAL
    default n
```

##  六. 单选块 `choice`

```shell
menu "Hardware Drivers Config"
    menuconfig BSP_USING_ONCHIP_RTC
        bool "Enable RTC"
        select RT_USING_RTC
        select RT_USING_LIBC
        default n
        if BSP_USING_ONCHIP_RTC

            #   choice/endchoice 给出选择项
            #   中间可以定义多个配置项供选择
            #   但只能选择一个配置项
            choice

                # prompt
                #     标头提示信息 
                #     bool
                #     prompt "Networking support"
                # 等价的
                #     bool "Networking support"
                prompt "Select clock source"
                udefalt BSP_RTC_USING_LSE

                config BSP_RTC_USING_LSE
                    bool "RTC USING LSE"

                config BSP_RTC_USING_LSI
                    bool "RTC USING LSI"
            endchoice
        endif
endmenu
```

## 七. 界面头部显示 `comment`

```shell
menu "Hardware Drivers Config"
	# 出现在  "Hardware Drivers Config" 界面的第一行
	# 作为提示
    comment "uart2 pin conflict with Ethernet and PWM"
    config BSP_USING_COM2
        bool "Enable COM2"
        select BSP_USING_UART
        select BSP_USING_UART2
        default n
endmenu
```

## 八. 多文件联动 `source`

>   *语句用于读取另一个文件中的 Kconfig 文件*

```shell
source "../libraries/HAL_Drivers/Kconfig"
```

