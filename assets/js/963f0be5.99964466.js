"use strict";(self.webpackChunkblog=self.webpackChunkblog||[]).push([[3378],{4137:function(t,e,n){n.d(e,{Zo:function(){return u},kt:function(){return b}});var a=n(7294);function r(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function o(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,a)}return n}function l(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?o(Object(n),!0).forEach((function(e){r(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function p(t,e){if(null==t)return{};var n,a,r=function(t,e){if(null==t)return{};var n,a,r={},o=Object.keys(t);for(a=0;a<o.length;a++)n=o[a],e.indexOf(n)>=0||(r[n]=t[n]);return r}(t,e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);for(a=0;a<o.length;a++)n=o[a],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(r[n]=t[n])}return r}var k=a.createContext({}),c=function(t){var e=a.useContext(k),n=e;return t&&(n="function"==typeof t?t(e):l(l({},e),t)),n},u=function(t){var e=c(t.components);return a.createElement(k.Provider,{value:e},t.children)},i={inlineCode:"code",wrapper:function(t){var e=t.children;return a.createElement(a.Fragment,{},e)}},m=a.forwardRef((function(t,e){var n=t.components,r=t.mdxType,o=t.originalType,k=t.parentName,u=p(t,["components","mdxType","originalType","parentName"]),m=c(n),b=r,s=m["".concat(k,".").concat(b)]||m[b]||i[b]||o;return n?a.createElement(s,l(l({ref:e},u),{},{components:n})):a.createElement(s,l({ref:e},u))}));function b(t,e){var n=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var o=n.length,l=new Array(o);l[0]=m;var p={};for(var k in e)hasOwnProperty.call(e,k)&&(p[k]=e[k]);p.originalType=t,p.mdxType="string"==typeof t?t:r,l[1]=p;for(var c=2;c<o;c++)l[c]=n[c];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},5889:function(t,e,n){n.r(e),n.d(e,{assets:function(){return u},contentTitle:function(){return k},default:function(){return b},frontMatter:function(){return p},metadata:function(){return c},toc:function(){return i}});var a=n(7462),r=n(3366),o=(n(7294),n(4137)),l=["components"],p={id:62,title:"6_2_UDP\u534f\u8bae",date:new Date("2021-11-16T00:00:00.000Z"),authors:"\u9cb8\u8bed",tags:["\u8bfb\u4e66\u7b14\u8bb0","\u7f51\u7edc","\u56fe\u89e3TCP_IP","UDP"]},k=void 0,c={unversionedId:"book/network/\u56fe\u89e3TCP_IP/62",id:"book/network/\u56fe\u89e3TCP_IP/62",title:"6_2_UDP\u534f\u8bae",description:"\u7b2c\u516d\u7ae0 \u7b2c\u4e8c\u90e8\u5206",source:"@site/docs\\book\\network\\\u56fe\u89e3TCP_IP\\6_2_UDP\u534f\u8bae.md",sourceDirName:"book/network/\u56fe\u89e3TCP_IP",slug:"/book/network/\u56fe\u89e3TCP_IP/62",permalink:"/docs/book/network/\u56fe\u89e3TCP_IP/62",draft:!1,tags:[{label:"\u8bfb\u4e66\u7b14\u8bb0",permalink:"/docs/tags/\u8bfb\u4e66\u7b14\u8bb0"},{label:"\u7f51\u7edc",permalink:"/docs/tags/\u7f51\u7edc"},{label:"\u56fe\u89e3TCP_IP",permalink:"/docs/tags/\u56fe\u89e3tcp-ip"},{label:"UDP",permalink:"/docs/tags/udp"}],version:"current",frontMatter:{id:"62",title:"6_2_UDP\u534f\u8bae",date:"2021-11-16T00:00:00.000Z",authors:"\u9cb8\u8bed",tags:["\u8bfb\u4e66\u7b14\u8bb0","\u7f51\u7edc","\u56fe\u89e3TCP_IP","UDP"]},sidebar:"book",previous:{title:"6_1_\u4f20\u8f93\u5c42\u534f\u8bae\u57fa\u7840\u7406\u8bba",permalink:"/docs/book/network/\u56fe\u89e3TCP_IP/61"},next:{title:"6_3_tcp\u534f\u8bae",permalink:"/docs/book/network/\u56fe\u89e3TCP_IP/63"}},u={},i=[{value:"\u524d\u8a00",id:"\u524d\u8a00",level:2},{value:"\u4e00. \u7279\u70b9&amp;\u76ee\u7684",id:"\u4e00-\u7279\u70b9\u76ee\u7684",level:2},{value:"\u4e8c. \u9996\u90e8\u683c\u5f0f",id:"\u4e8c-\u9996\u90e8\u683c\u5f0f",level:2},{value:"1. UDP\u6570\u636e\u62a5\u683c\u5f0f",id:"1-udp\u6570\u636e\u62a5\u683c\u5f0f",level:3},{value:"2. \u6821\u9a8c\u548c",id:"2-\u6821\u9a8c\u548c",level:3},{value:"(1) \u8ba1\u7b97\u6821\u9a8c\u548c",id:"1-\u8ba1\u7b97\u6821\u9a8c\u548c",level:4},{value:"(2) \u6821\u9a8c\u548c\u52a0\u5165&quot;\u4f2a\u9996\u90e8&quot;\u76ee\u7684 &amp; \u539f\u56e0",id:"2-\u6821\u9a8c\u548c\u52a0\u5165\u4f2a\u9996\u90e8\u76ee\u7684--\u539f\u56e0",level:4}],m={toc:i};function b(t){var e=t.components,n=(0,r.Z)(t,l);return(0,o.kt)("wrapper",(0,a.Z)({},m,n,{components:e,mdxType:"MDXLayout"}),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"\u7b2c\u516d\u7ae0 \u7b2c\u4e8c\u90e8\u5206")),(0,o.kt)("h2",{id:"\u524d\u8a00"},"\u524d\u8a00"),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"\u7279\u522b\u5199\u5728\u524d\u9762"),(0,o.kt)("p",{parentName:"blockquote"},"\u672c\u6587\u4ec5\u7528\u5b66\u4e60\u8bb0\u5f55\u53ca\u5206\u4eab,\u4e0d\u505a\u4ed6\u7528."),(0,o.kt)("p",{parentName:"blockquote"},"\u5982\u6709\u4e0d\u59a5,\u8bf7\u544a\u77e5")),(0,o.kt)("h2",{id:"\u4e00-\u7279\u70b9\u76ee\u7684"},"\u4e00. \u7279\u70b9&\u76ee\u7684"),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"\u6309\u7167\u5236\u4f5c\u7a0b\u5e8f\u7684\u90a3\u4e9b\u7528\u6237\u884c\u4e8b")),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"\u7279\u70b9:"),(0,o.kt)("p",{parentName:"blockquote"},"\u4e0d\u63d0\u4f9b\u590d\u6742\u7684\u63a7\u5236\u673a\u5236,\u7b80\u5355 & \u9ad8\u6548"),(0,o.kt)("p",{parentName:"blockquote"},"\u9762\u5411\u65e0\u8fde\u63a5\u7684\u901a\u4fe1\u670d\u52a1,\u53ef\u968f\u65f6\u53d1\u9001\u6570\u636e"),(0,o.kt)("p",{parentName:"blockquote"},"\u6536\u5230\u6570\u636e\u540e,\u6309\u7167\u539f\u6837\u53d1\u9001\u56de\u7f51\u7edc\u4e0a"),(0,o.kt)("p",{parentName:"blockquote"},"\u65e0\u6cd5\u8fdb\u884c\u6d41\u91cf\u63a7\u5236\u7b49\u907f\u514d\u7f51\u7edc\u62e5\u5835\u7684\u884c\u4e3a"),(0,o.kt)("p",{parentName:"blockquote"},"\u4f20\u8f93\u8fc7\u7a0b\u4e2d\u65e0\u8bba\u662f\u4e22\u5305,\u4e0d\u8d1f\u8d23\u91cd\u53d1"),(0,o.kt)("p",{parentName:"blockquote"},"\u6ca1\u6709\u7ea0\u9519\u529f\u80fd")),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"\u7528\u9014:"),(0,o.kt)("p",{parentName:"blockquote"},"\u5305\u542b\u91cf\u8f83\u5c11\u7684\u901a\u4fe1 -- ",(0,o.kt)("inlineCode",{parentName:"p"},"DNS"),",",(0,o.kt)("inlineCode",{parentName:"p"},"SNMP"),"..."),(0,o.kt)("p",{parentName:"blockquote"},"\u97f3\u89c6\u9891\u7b49\u591a\u5a92\u4f53\u901a\u4fe1 -- \u5373\u65f6\u901a\u4fe1"),(0,o.kt)("p",{parentName:"blockquote"},"\u9650\u5b9a\u4e8e LAN \u7b49\u7279\u5b9a\u7684\u7f51\u7edc\u5e94\u7528\u901a\u4fe1"),(0,o.kt)("p",{parentName:"blockquote"},"\u5e7f\u64ad\u901a\u4fe1,\u591a\u64ad\u901a\u4fe1")),(0,o.kt)("h2",{id:"\u4e8c-\u9996\u90e8\u683c\u5f0f"},"\u4e8c. \u9996\u90e8\u683c\u5f0f"),(0,o.kt)("h3",{id:"1-udp\u6570\u636e\u62a5\u683c\u5f0f"},"1. UDP\u6570\u636e\u62a5\u683c\u5f0f"),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://img-blog.csdnimg.cn/cb3763cd9b3346ac82446a4cd8cd0410.PNG?x-oss-process=image/watermark,type_ZHJvaWRzYW5zZmFsbGJhY2s,shadow_50,text_Q1NETiBA5pyq6Ze7wrflubvop4k=,size_20,color_FFFFFF,t_70,g_se,x_16#pic_center",alt:"UDP\u6570\u636e\u62a5\u683c\u5f0f"})),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"\u540d\u8bcd"),(0,o.kt)("th",{parentName:"tr",align:null},"\u957f\u5ea6"),(0,o.kt)("th",{parentName:"tr",align:null},"\u89e3\u91ca"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"\u6e90\u7aef\u53e3-Source Port"),(0,o.kt)("td",{parentName:"tr",align:null},"16bit"),(0,o.kt)("td",{parentName:"tr",align:null},"\u53ef\u9009\u9879-\u53d1\u9001\u7aef\u7aef\u53e3       ==0 \u53ef\u7528\u4e8e\u4e0d\u9700\u8981\u8fd4\u56de\u7684\u901a\u4fe1\u4e2d")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"\u76ee\u6807\u7aef\u53e3-Destination Port"),(0,o.kt)("td",{parentName:"tr",align:null},"16bit"),(0,o.kt)("td",{parentName:"tr",align:null},"\u63a5\u6536\u7aef\u7aef\u53e3")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"\u5305\u957f\u5ea6-Length"),(0,o.kt)("td",{parentName:"tr",align:null},"8bit"),(0,o.kt)("td",{parentName:"tr",align:null},"UDP\u9996\u90e8 + \u6570\u636e  \u603b\u957f\u5ea6")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"\u6821\u9a8c\u548c-Checksum"),(0,o.kt)("td",{parentName:"tr",align:null},"-"),(0,o.kt)("td",{parentName:"tr",align:null},"\u4e3a\u4e86\u63d0\u4f9b",(0,o.kt)("strong",{parentName:"td"},"\u53ef\u9760"),"\u7684",(0,o.kt)("strong",{parentName:"td"},"UDP\u9996\u90e8")," \u548c ",(0,o.kt)("strong",{parentName:"td"},"\u6570\u636e"))))),(0,o.kt)("h3",{id:"2-\u6821\u9a8c\u548c"},"2. \u6821\u9a8c\u548c"),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"\u4e3a\u4e86\u63d0\u4f9b",(0,o.kt)("strong",{parentName:"p"},"\u53ef\u9760\u7684"),"UDP",(0,o.kt)("strong",{parentName:"p"},"\u9996\u90e8"),"\u548c",(0,o.kt)("strong",{parentName:"p"},"\u6570\u636e"))),(0,o.kt)("h4",{id:"1-\u8ba1\u7b97\u6821\u9a8c\u548c"},"(1) \u8ba1\u7b97\u6821\u9a8c\u548c"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"UDP\u9996\u90e8\u6821\u9a8c\u548c\u8ba1\u7b97\u4e09\u90e8\u5206\uff1aUDP\u9996\u90e8 + UDP\u6570\u636e + UDP\u4f2a\u9996\u90e8")),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"\u4f2a\u9996\u90e8"),(0,o.kt)("p",{parentName:"blockquote"},(0,o.kt)("img",{parentName:"p",src:"https://img-blog.csdnimg.cn/b79f095e88634e55a8b1b9a162c9cdc2.PNG?x-oss-process=image/watermark,type_ZHJvaWRzYW5zZmFsbGJhY2s,shadow_50,text_Q1NETiBA5pyq6Ze7wrflubvop4k=,size_20,color_FFFFFF,t_70,g_se,x_16#pic_center",alt:"UDP\u4f2a\u9996\u90e8"}))),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"\u53c2\u8003"),(0,o.kt)("p",{parentName:"blockquote"},(0,o.kt)("a",{parentName:"p",href:"https://blog.csdn.net/cradmin/article/details/3092559"},"(1\u6761\u6d88\u606f) IP\u9996\u90e8\u6821\u9a8c\u548c\u8ba1\u7b97\u53ca1\u7684\u8865\u7801_cradmin\u7684\u4e13\u680f-CSDN\u535a\u5ba2")),(0,o.kt)("p",{parentName:"blockquote"},(0,o.kt)("a",{parentName:"p",href:"https://blog.csdn.net/nice_wen/article/details/77926730"},"(1\u6761\u6d88\u606f) tcp/udp\u6821\u9a8c\u548c\u4ee5\u53ca\u4f2a\u9996\u90e8\u4ecb\u7ecd_nice_wen\u7684\u535a\u5ba2-CSDN\u535a\u5ba2_tcp \u4f2a\u9996\u90e8")),(0,o.kt)("p",{parentName:"blockquote"},(0,o.kt)("a",{parentName:"p",href:"https://www.cnblogs.com/RodYang/p/3265515.html"},"TCP\u5934\u6821\u9a8c\u548c\u8ba1\u7b97\u7b97\u6cd5\u8be6\u89e3 - RodYang - \u535a\u5ba2\u56ed (cnblogs.com)"))),(0,o.kt)("h4",{id:"2-\u6821\u9a8c\u548c\u52a0\u5165\u4f2a\u9996\u90e8\u76ee\u7684--\u539f\u56e0"},'(2) \u6821\u9a8c\u548c\u52a0\u5165"\u4f2a\u9996\u90e8"\u76ee\u7684 & \u539f\u56e0'),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"TCP/IP \u8fdb\u884c\u901a\u4fe1\u7684\u5e94\u7528\u9700\u89815\u5927\u8981\u7d20"),(0,o.kt)("table",{parentName:"blockquote"},(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"\u6e90 IP \u5730\u5740"),(0,o.kt)("th",{parentName:"tr",align:null},"\u76ee\u6807 IP \u5730\u5740"),(0,o.kt)("th",{parentName:"tr",align:null},"\u534f\u8bae\u53f7\\ "),(0,o.kt)("th",{parentName:"tr",align:null},"\u6e90\u7aef\u53e3\u53f7"),(0,o.kt)("th",{parentName:"tr",align:null},"\u76ee\u6807\u7aef\u53e3"))))),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"\u4f46\u662f",(0,o.kt)("strong",{parentName:"p"},"UDP"),"\u53ea\u5305\u542b\u4e86"),(0,o.kt)("table",{parentName:"blockquote"},(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"\u6e90 IP \u5730\u5740"),(0,o.kt)("th",{parentName:"tr",align:null},"\u76ee\u6807 IP \u5730\u5740")))),(0,o.kt)("p",{parentName:"blockquote"},"\u4f59\u4e0b\u4e09\u9879\u90fd\u5305\u542b\u5728 ",(0,o.kt)("strong",{parentName:"p"},"IP")," \u9996\u90e8\u4e2d")),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},'\u56e0\u6b64\u5f15\u5165"\u4f2a\u9996\u90e8" \u53ef\u4ee5\u907f\u514d\u56e0 ',(0,o.kt)("strong",{parentName:"p"},"IP\u9996\u90e8"),"\u4e2d\u7684\u4e09\u9879\u8981\u7d20\u51fa\u9519\u800c\u5bfc\u81f4\u7684\u4e0d\u826f\u540e\u679c")),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"IPv6 \u4e2dIP\u9996\u90e8\u6ca1\u6709\u6821\u9a8c\u548c"),(0,o.kt)("p",{parentName:"blockquote"},"TCP/UDP \u901a\u8fc7 ",(0,o.kt)("strong",{parentName:"p"},"\u4f2a\u9996\u90e8")," \u5373\u53ef\u5728 ",(0,o.kt)("strong",{parentName:"p"},"IP\u9996\u90e8")," \u4e0d\u53ef\u9760\u7684\u540c\u65f6,\u8fdb\u884c\u53ef\u9760\u4f20\u8f93"),(0,o.kt)("h2",{parentName:"blockquote",id:"\u7ed3\u8bed"},"\u7ed3\u8bed"),(0,o.kt)("p",{parentName:"blockquote"},"~ ~ ~")))}b.isMDXComponent=!0}}]);