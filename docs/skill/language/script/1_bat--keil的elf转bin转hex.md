---
id: script-1_1
title: bat--keil的elf转bin转hex
date: 2022-02-27 
authors: 鲸语
tags: [开发语言, script, bat, keil]
---

一个 windows 下的 bat 批处理脚本...

:::caution注意
- 工程中没有 `.elf` 文件用 `.axf` 代替
- `arm-none-eabi-objcopy.exe` 工具需要用到对应版本
- `srec_cat.exe` 工具超连接 [下载](https://sourceforge.net/projects/srecord/files/latest/download) [帮助文档](https://www.keil.com/support/docs/275.htm)
:::

>[成品请下载](https://download.csdn.net/download/weixin_44113601/83749278)


```bat
@REM @File Name: firmware_tool.bat
@REM @Version : 1.0.0
@REM @Author : tanjie
@REM @Creat Date : 2022.02.22
@REM @Brief : 
@REM     hex 生成 bin 
@REM     bin 复制备份到指定目录
@REM     转换bin到偏移地址后的hex

@echo off
set NAME=USR-LG206-L-H20-DZ_V1

@REM 使用elf文件转bin文件
cd /d %~dp0
..\..\tools\toolchain\bin\arm-none-eabi-objcopy.exe  -O binary ..\Objects\project.elf  ..\Objects\project.bin 

@REM 创建目标所在文件夹 Firmware
@REM cd /d %~dp0
if exist ..\..\Firmware (
    ::文件夹已存在
	echo Folder already exists
) else (
	md ..\..\Firmware
)

@REM copy bin文件到目录下
:: >nul省略成功信息
@REM cd /d %~dp0
copy ..\Objects\project.bin ..\..\Firmware\%NAME%.bin >nul


@REM bin转hex
::help url https://www.keil.com/support/docs/275.htm
@REM cd /d %~dp0
.\srecord-1.63-win32\srec_cat.exe ..\Objects\project.bin -Binary -offset 0x08000000 -o ..\..\Firmware\%NAME%.hex -Intel


@REM 在keil 魔法棒USER里填写
@REM ::			.\HEXBIN.bat $K !L @L $L
@REM ::			$K KEIL安装目录 !L .axf文件的位置 @L .axf文件的文件名 $L.axf文件的目录
@REM set exe_location=%1ARM\ARMCC\bin\fromelf.exe
@REM %exe_location% --i32combined --output="..\..\Firmware\project.hex" "..\Objects\project.elf"


@REM 补充bin文件FF至0x00000fff地址

```
