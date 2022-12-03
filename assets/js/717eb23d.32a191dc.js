"use strict";(self.webpackChunkblog=self.webpackChunkblog||[]).push([[2885],{4137:function(e,t,r){r.d(t,{Zo:function(){return s},kt:function(){return d}});var a=r(7294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},l=Object.keys(e);for(a=0;a<l.length;a++)r=l[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)r=l[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var p=a.createContext({}),u=function(e){var t=a.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},s=function(e){var t=u(e.components);return a.createElement(p.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,l=e.originalType,p=e.parentName,s=o(e,["components","mdxType","originalType","parentName"]),m=u(r),d=n,_=m["".concat(p,".").concat(d)]||m[d]||c[d]||l;return r?a.createElement(_,i(i({ref:t},s),{},{components:r})):a.createElement(_,i({ref:t},s))}));function d(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var l=r.length,i=new Array(l);i[0]=m;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o.mdxType="string"==typeof e?e:n,i[1]=o;for(var u=2;u<l;u++)i[u]=r[u];return a.createElement.apply(null,i)}return a.createElement.apply(null,r)}m.displayName="MDXCreateElement"},5138:function(e,t,r){r.r(t),r.d(t,{assets:function(){return s},contentTitle:function(){return p},default:function(){return d},frontMatter:function(){return o},metadata:function(){return u},toc:function(){return c}});var a=r(7462),n=r(3366),l=(r(7294),r(4137)),i=["components"],o={id:"uart-3_1",title:"UART--RIGOL_DS1202ZE\u5206\u6790\u6ce2\u7279\u7387",date:new Date("2021-11-14T00:00:00.000Z"),authors:"\u9cb8\u8bed",tags:["\u534f\u8bae","arm","uart","\u6ce2\u7279\u7387","\u6ce2\u5f62"]},p=void 0,u={unversionedId:"skill/protocol/arm/uart-3_1",id:"skill/protocol/arm/uart-3_1",title:"UART--RIGOL_DS1202ZE\u5206\u6790\u6ce2\u7279\u7387",description:"\u501f\u52a9\u793a\u6ce2\u5668, \u5206\u6790uart\u4f20\u8f93\u6570\u636e\u65f6\u6ce2\u7279\u7387\u7684\u903b\u8f91\u6ce2\u5f62",source:"@site/docs\\skill\\protocol\\arm\\3_1_UART--RIGOL_DS1202ZE\u5206\u6790\u6ce2\u7279\u7387.md",sourceDirName:"skill/protocol/arm",slug:"/skill/protocol/arm/uart-3_1",permalink:"/docs/skill/protocol/arm/uart-3_1",draft:!1,tags:[{label:"\u534f\u8bae",permalink:"/docs/tags/\u534f\u8bae"},{label:"arm",permalink:"/docs/tags/arm"},{label:"uart",permalink:"/docs/tags/uart"},{label:"\u6ce2\u7279\u7387",permalink:"/docs/tags/\u6ce2\u7279\u7387"},{label:"\u6ce2\u5f62",permalink:"/docs/tags/\u6ce2\u5f62"}],version:"current",frontMatter:{id:"uart-3_1",title:"UART--RIGOL_DS1202ZE\u5206\u6790\u6ce2\u7279\u7387",date:"2021-11-14T00:00:00.000Z",authors:"\u9cb8\u8bed",tags:["\u534f\u8bae","arm","uart","\u6ce2\u7279\u7387","\u6ce2\u5f62"]},sidebar:"skill",previous:{title:"SPI--\u5355\u5b57\u8282\u8bfb\u5199FLASH\u903b\u8f91\u6ce2\u5f62",permalink:"/docs/skill/protocol/arm/spi-2_1"},next:{title:"MQTT",permalink:"/docs/category/mqtt"}},s={},c=[{value:"&lt;\u4efb\u52a1\u5185\u5bb9&gt;",id:"\u4efb\u52a1\u5185\u5bb9",level:2},{value:"&lt;\u5b9e\u73b0\u786c\u4ef6&amp;\u6d4b\u91cf\u5e73\u53f0&gt;",id:"\u5b9e\u73b0\u786c\u4ef6\u6d4b\u91cf\u5e73\u53f0",level:2},{value:"- \u5b9e\u73b0\u539f\u7406",id:"--\u5b9e\u73b0\u539f\u7406",level:3},{value:"&lt;\u6570\u636e\u7ed3\u679c&gt;",id:"\u6570\u636e\u7ed3\u679c",level:2},{value:"- \u7b2c\u4e00\u5e27\u6570\u636e",id:"--\u7b2c\u4e00\u5e27\u6570\u636e",level:3},{value:"- \u7b2c\u4e8c\u5e27\u6570\u636e",id:"--\u7b2c\u4e8c\u5e27\u6570\u636e",level:3},{value:"- \u7b2c\u4e09\u5e27\u6570\u636e",id:"--\u7b2c\u4e09\u5e27\u6570\u636e",level:3},{value:"- \u7b2c\u56db\u5e27\u6570\u636e",id:"--\u7b2c\u56db\u5e27\u6570\u636e",level:3},{value:"&lt;\u6ce2\u7279\u7387\u8ba1\u7b97&gt;",id:"\u6ce2\u7279\u7387\u8ba1\u7b97",level:2},{value:"- \u7b97\u6cd5\u4e00",id:"--\u7b97\u6cd5\u4e00",level:3},{value:"- \u7b97\u6cd5\u4e8c",id:"--\u7b97\u6cd5\u4e8c",level:3},{value:"&lt;\u7ed3\u8bba\u603b\u7ed3&gt;",id:"\u7ed3\u8bba\u603b\u7ed3",level:2},{value:"&lt;\u5173\u952e\u7a0b\u5e8f\u9644\u5f55-HAL&gt;",id:"\u5173\u952e\u7a0b\u5e8f\u9644\u5f55-hal",level:2}],m={toc:c};function d(e){var t=e.components,r=(0,n.Z)(e,i);return(0,l.kt)("wrapper",(0,a.Z)({},m,r,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("p",null,"\u501f\u52a9\u793a\u6ce2\u5668, \u5206\u6790uart\u4f20\u8f93\u6570\u636e\u65f6\u6ce2\u7279\u7387\u7684\u903b\u8f91\u6ce2\u5f62"),(0,l.kt)("h2",{id:"\u4efb\u52a1\u5185\u5bb9"},"<\u4efb\u52a1\u5185\u5bb9>"),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},"\u89c2\u5bdf\u4e32\u53e3\u53d1\u9001\u6570\u636e\u6ce2\u5f62(TTL\u7535\u5e73\u6807\u51c6)"),(0,l.kt)("li",{parentName:"ol"},"\u8ba1\u7b97\u6bcf\u5e27\u6570\u636e\u7684\u6ce2\u7279\u7387,\u5206\u6790\u6ce2\u7279\u7387\u8bef\u5dee")),(0,l.kt)("h2",{id:"\u5b9e\u73b0\u786c\u4ef6\u6d4b\u91cf\u5e73\u53f0"},"<\u5b9e\u73b0\u786c\u4ef6&\u6d4b\u91cf\u5e73\u53f0>"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"STM32F103VET6"),(0,l.kt)("li",{parentName:"ul"},"RIGOL_DS1202ZE\u793a\u6ce2\u5668")),(0,l.kt)("h3",{id:"--\u5b9e\u73b0\u539f\u7406"},"- \u5b9e\u73b0\u539f\u7406"),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"\u7531STM32\u5b9e\u73b0\u4e32\u53e3\u7684\u6536\u53d1\u6570\u636e\u529f\u80fd")),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},'PC\u7ed9STM32\u53d1\u9001\u6570\u636e"123',"\\",'r" '),(0,l.kt)("pre",{parentName:"li"},(0,l.kt)("code",{parentName:"pre"},"\u5341\u516d\u8fdb\u5236\u4e3a < 0x31 0x32 0x33 0x0A >\n"))),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"\u5229\u7528\u793a\u6ce2\u5668\u91c7\u6837STM32\u7684\u4e32\u53e3\u63a5\u6536\u5e76\u5faa\u73af\u53d1\u51fa\u7684\u5f15\u811a")),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"\u5f97\u5230\u6570\u636e,\u622a\u56fe,\u5e76\u5206\u6790"))),(0,l.kt)("h2",{id:"\u6570\u636e\u7ed3\u679c"},"<\u6570\u636e\u7ed3\u679c>"),(0,l.kt)("h3",{id:"--\u7b2c\u4e00\u5e27\u6570\u636e"},"- \u7b2c\u4e00\u5e27\u6570\u636e"),(0,l.kt)("p",null,(0,l.kt)("img",{parentName:"p",src:"https://img-blog.csdnimg.cn/6794179afabe473fa0f6284834522a06.png?x-oss-process=image/watermark,type_ZHJvaWRzYW5zZmFsbGJhY2s,shadow_50,text_Q1NETiBA5pyq6Ze7wrflubvop4k=,size_20,color_FFFFFF,t_70,g_se,x_16#pic_center",alt:"\u6570\u636e\u7ed3\u679c\u4e00"})),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"\u56fe\u4e2d\u6570\u636e\u4e3a0-1000,1100-1\n\u771f\u5b9e\u6570\u636e\u4e3a0-0011,0001-1 ==> 0x31\n\u7b2c\u4e00\u5e27\u6570\u636e\u4f20\u8f93\u65f6\u95f4\u4e3a0.00us-1.04ms")),(0,l.kt)("h3",{id:"--\u7b2c\u4e8c\u5e27\u6570\u636e"},"- \u7b2c\u4e8c\u5e27\u6570\u636e"),(0,l.kt)("p",null,(0,l.kt)("img",{parentName:"p",src:"https://img-blog.csdnimg.cn/3d82530b59ec42b48e799cd3930e86c5.png?x-oss-process=image/watermark,type_ZHJvaWRzYW5zZmFsbGJhY2s,shadow_50,text_Q1NETiBA5pyq6Ze7wrflubvop4k=,size_19,color_FFFFFF,t_70,g_se,x_16#pic_center",alt:"\u6570\u636e\u7ed3\u679c\u4e8c"})),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"\u56fe\u4e2d\u6570\u636e\u4e3a0-0100,1100-1\n\u771f\u5b9e\u6570\u636e\u4e3a0-0011,0010-1 ==> 0x32\n\u7b2c\u4e8c\u5e27\u6570\u636e\u4f20\u8f93\u65f6\u95f4\u4e3a1.04ms-2.08ms")),(0,l.kt)("h3",{id:"--\u7b2c\u4e09\u5e27\u6570\u636e"},"- \u7b2c\u4e09\u5e27\u6570\u636e"),(0,l.kt)("p",null,(0,l.kt)("img",{parentName:"p",src:"https://img-blog.csdnimg.cn/c4dc62a0f598473a8fa5a0e9be16757a.png?x-oss-process=image/watermark,type_ZHJvaWRzYW5zZmFsbGJhY2s,shadow_50,text_Q1NETiBA5pyq6Ze7wrflubvop4k=,size_19,color_FFFFFF,t_70,g_se,x_16#pic_center",alt:"\u5728\u8fd9\u91cc\u63d2\u5165\u56fe\u7247\u63cf\u8ff0"})),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"\u56fe\u4e2d\u6570\u636e\u4e3a0-1100,1100-1\n\u771f\u5b9e\u6570\u636e\u4e3a0-0011,0011-1 ==> 0x33\n\u7b2c\u4e09\u5e27\u6570\u636e\u4f20\u8f93\u65f6\u95f4\u4e3a2.08ms-3.12ms\n")),(0,l.kt)("h3",{id:"--\u7b2c\u56db\u5e27\u6570\u636e"},"- \u7b2c\u56db\u5e27\u6570\u636e"),(0,l.kt)("p",null,(0,l.kt)("img",{parentName:"p",src:"https://img-blog.csdnimg.cn/856dd2ee599a49848716d9ea708efadc.png?x-oss-process=image/watermark,type_ZHJvaWRzYW5zZmFsbGJhY2s,shadow_50,text_Q1NETiBA5pyq6Ze7wrflubvop4k=,size_19,color_FFFFFF,t_70,g_se,x_16#pic_center",alt:"\u6570\u636e\u7ed3\u679c\u56db"})),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"\u56fe\u4e2d\u6570\u636e\u4e3a0-0101,0000-1\n\u771f\u5b9e\u6570\u636e\u4e3a0-0000,1010-1 ==> 0x0A\n\u7b2c\u56db\u5e27\u6570\u636e\u4f20\u8f93\u65f6\u95f4\u4e3a3.12ms-4.16ms\n")),(0,l.kt)("h2",{id:"\u6ce2\u7279\u7387\u8ba1\u7b97"},"<\u6ce2\u7279\u7387\u8ba1\u7b97>"),(0,l.kt)("h3",{id:"--\u7b97\u6cd5\u4e00"},"- \u7b97\u6cd5\u4e00"),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},"\u56db\u5e27\u6570\u636e(40bit)\u4f20\u8f93\u7684\u603b\u65f6\u95f4\u4e3a4.16ms"),(0,l.kt)("li",{parentName:"ol"},"\u7406\u8bba\u4e0a\u4ee59600\u7684\u6ce2\u7279\u7387\u4f20\u8f93\u56db\u5e27\u6570\u636e(40bit)\u9700\u8981\u7684\u65f6\u95f4\u4e3a1/240s\u7ea6\u7b49\u4e8e4.17ms"),(0,l.kt)("li",{parentName:"ol"},"\u6240\u4ee5\u6ce2\u7279\u7387\u8bef\u5dee\u4e3a(4.17-4.16)/4.17 = 2.40\u2030")),(0,l.kt)("h3",{id:"--\u7b97\u6cd5\u4e8c"},"- \u7b97\u6cd5\u4e8c"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\u7b2c\u4e00\u5e27:","[","(1/960s) - 1.04ms","]"," / (1/960s) = 0.961\u2030"),(0,l.kt)("li",{parentName:"ul"},"\u7b2c\u4e8c\u5e27:","[","(1/960s) - 1.04ms","]"," / (1/960s) = 0.961\u2030"),(0,l.kt)("li",{parentName:"ul"},"\u7b2c\u4e09\u5e27:","[","(1/960s) - 1.04ms","]"," / (1/960s) = 0.961\u2030"),(0,l.kt)("li",{parentName:"ul"},"\u7b2c\u56db\u5e27:","[","(1/960s) - 1.04ms","]"," / (1/960s) = 0.961\u2030"),(0,l.kt)("li",{parentName:"ul"},"\u8bef\u5dee\u7a33\u5b9a\u57280.961\u2030")),(0,l.kt)("h2",{id:"\u7ed3\u8bba\u603b\u7ed3"},"<\u7ed3\u8bba\u603b\u7ed3>"),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},"\u4e3a\u4e86\u8bef\u5dee\u503c\u5f97\u6d4b\u91cf\u51c6\u786e\u6027",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"\u53ef\u4ee5\u589e\u52a0\u5c0f\u6570\u70b9\u540e\u6709\u6548\u4f4d"),(0,l.kt)("li",{parentName:"ul"},"\u591a\u6d4b\u6570\u636e\u4ee5\u6c42\u5e73\u5747"))),(0,l.kt)("li",{parentName:"ol"},"\u4e32\u53e3\u6570\u636e\u53d1\u9001\u9075\u5faa\u7684\u662f==\u4f4e\u4f4d\u5148\u884c==\n\u56e0\u6b64\u8bfb\u6570\u636e\u65f6\u8981\u5012\u7740\u8bfb.")),(0,l.kt)("h2",{id:"\u5173\u952e\u7a0b\u5e8f\u9644\u5f55-hal"},"<\u5173\u952e\u7a0b\u5e8f\u9644\u5f55-HAL>"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-c"},"//main.c\nvoid main()\n{\n    /*\n        ......\n        \u5404\u6a21\u5757\u521d\u59cb\u5316\n        ......\n    */\n    \n    while (1)\n    {\n        if (usart_1_Rx_dateTypedef.usart_Flag)\n        {\n            HAL_UART_Transmit(&huart1, (uint8_t *)usart_1_Rx_dateTypedef.Buffer, usart_1_Rx_dateTypedef.usart_Cnt, 0x10);  //\u53d1\u9001\u6570\u636e\n            for(int i = 0;i<usart_1_Rx_dateTypedef.usart_Cnt;i++)   usart_1_Rx_dateTypedef.Buffer[i] = 0;\n            usart_1_Rx_dateTypedef.usart_Cnt = 0;\n            usart_1_Rx_dateTypedef.usart_Flag = 0;\n        }\n    }\n}\n")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-c"},"/**\n  * @brief \u4e32\u53e3\u4e2d\u65ad\u56de\u8c03\u51fd\u6570\n  * @param \u8c03\u7528\u56de\u8c03\u51fd\u6570\n  * @note  \u4e32\u53e3\u6bcf\u6b21\u6536\u5230\u6570\u636e\u4ee5\u540e\u90fd\u4f1a\u5173\u95ed\u4e2d\u65ad\uff0c\u5982\u53e3\u91cd\u590d\u4f7f\u7528\uff0c\u5fc5\u987b\u518d\u6b21\u5f00\u542f\n  * @retval None\n  */\nvoid HAL_UART_RxCpltCallback(UART_HandleTypeDef *huart)\n{\n    if (huart->Instance == USART1)\n    {\n        usart_1_Rx_dateTypedef.Buffer[usart_1_Rx_dateTypedef.usart_Cnt] =\n            usart_1_Rx_dateTypedef.it_Buffer[0]; //\u4fdd\u5b58\u63a5\u6536\u6570\u636e\n        usart_1_Rx_dateTypedef.usart_Cnt++;      //\u8ba1\u6570\u503c\u52a01\n\n        if (0x0D == usart_1_Rx_dateTypedef.it_Buffer[0])\n        {                                          //ASSIC   \u6362\u884c\u8868\u793a\u7ed3\u675f\n            usart_1_Rx_dateTypedef.usart_Flag = 1; //\u63a5\u6536\u7ed3\u675f\u6807\u5fd7\n        }\n        else\n        {\n            HAL_UART_Receive_IT(&huart1, (uint8_t *)usart_1_Rx_dateTypedef.it_Buffer, 1); //\u5426\u5219\u4f7f\u80fd\u4e32\u4e00\u4e2d\u65ad\n        }\n    }\n}\n")))}d.isMDXComponent=!0}}]);