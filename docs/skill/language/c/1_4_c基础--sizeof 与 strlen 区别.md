---
id: c-1_4
title: c基础--sizeof与strlen区别
date: 2021-11-24
authors: 鲸语
tags: [开发语言, c, c基础, sizeof, strlen, 混淆]
---

**使用不当可能造成内存溢出**

1. `sizeof()`  是关键字     ` strlen()` 是 函数

2. `sizeof()`  求字节长度  `strlen() ` 求实际长度

   ```c
   int a = 1;
   sizeof(a) == 4;
   strlen(a) == 1;
   ```

   

3. `sizeof()`  求分配长度  `strlen() ` 求实际使用长度

   ```c
   char a[30] = "abcd";
   sizeof(a) = 30;
   strlen(a) = 4;
   ```

   

4. `sizeof()`  长度以 `'\0'` 结束 

   ```c
   int len3 = sizeof("abc");
   len3 == 4;
   
   int len4 = strlen("abc");
   len4 == 3;
   ```

5. `sizeof()` 编译时计算    `strlen()` 运行时计算
