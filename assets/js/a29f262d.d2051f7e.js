"use strict";(self.webpackChunkblog=self.webpackChunkblog||[]).push([[9410],{3794:function(e,t){t.tT=t.PS=t.$G=void 0,t.$G={favorite:{label:"\u559c\u7231",description:"\u6211\u559c\u6b22!",color:"#e9669e"},opensource:{label:"\u5f00\u6e90",description:"\u5f00\u6e90!",color:"#39ca30"},blog:{label:"Blog",description:"\u535a\u5ba2!",color:"#dfd545"},web:{label:"\u524d\u7aef",description:"\u6f02\u4eae\u7684\u7f51\u7ad9!",color:"#a44fb7"},arm:{label:"\u5d4c\u5165\u5f0f",description:"\u5d4c\u5165\u5f0f\u7684\u9879\u76ee!",color:"#a44fb7"}};var r=[{title:"blog",description:"\u57fa\u4e8eDocusaurus v2 \u9759\u6001\u7f51\u7ad9\u751f\u6210\u5668\u5b9e\u73b0\u4e2a\u4eba\u535a\u5ba2",preview:"/img/website/blog.png",website:"https://lag-spike.github.io",source:"https://github.com/lag-spike/lag-spike.github.io",tags:["opensource","favorite","blog","web"]},{title:"star-clock",description:"\u516b\u5366\u661f\u7a7a\u949f",preview:"/img/website/clock.png",website:"https://star-clock.app/",source:"https://github.com/lag-spike/star-clock",tags:["opensource","favorite","web"]}];t.PS=Object.keys(t.$G),t.tT=r},9353:function(e,t,r){r.r(t),r.d(t,{default:function(){return M},prepareUserState:function(){return X}});var a=r(7294),n=r(4513),o=r(6010),s=r(3366),c={svgIcon:"svgIcon_R3jO",small:"small_SUAn",medium:"medium_GxVq",large:"large_TyPU",primary:"primary_V8Cc",secondary:"secondary_WyIo",success:"success_lY5U",error:"error_eHdq",warning:"warning_IB04",inherit:"inherit_2ln5"},i=r(5944),l=["svgClass","colorAttr","children","color","size","viewBox"];function u(e){var t=e.svgClass,r=e.colorAttr,a=e.children,n=e.color,u=void 0===n?"inherit":n,d=e.size,h=void 0===d?"medium":d,m=e.viewBox,g=void 0===m?"0 0 24 24":m,f=(0,s.Z)(e,l);return(0,i.tZ)("svg",Object.assign({viewBox:g,color:r,"aria-hidden":!0,className:(0,o.Z)(c.svgIcon,c[u],c[h],t)},f,{children:a}))}function d(e){return(0,i.tZ)(u,Object.assign({},e,{children:(0,i.tZ)("path",{d:"M12,21.35L10.55,20.03C5.4,15.36 2,12.27 2,8.5C2,5.41 4.42,3 7.5,3C9.24,3 10.91,3.81 12,5.08C13.09,3.81 14.76,3 16.5,3C19.58,3 22,5.41 22,8.5C22,12.27 18.6,15.36 13.45,20.03L12,21.35Z"})}))}var h="tags";function m(e){return new URLSearchParams(e).getAll(h)}var g="operator";function f(e){var t;return null!=(t=new URLSearchParams(e).get(g))?t:"OR"}var v=r(8637),p=r(3699),b={showcaseCard:"showcaseCard_MkqL",showcaseCardImage:"showcaseCardImage_WoVb",showcaseCardHeader:"showcaseCardHeader_Mceh",showcaseCardTitle:"showcaseCardTitle_J7aP",svgIconFavorite:"svgIconFavorite_Xc7Y",showcaseCardSrcBtn:"showcaseCardSrcBtn_nptx",showcaseCardBody:"showcaseCardBody_R1Nj",cardFooter:"cardFooter_ODAT",tag:"tag_P8ik",textLabel:"textLabel_MjoO",colorLabel:"colorLabel_gM4S"},w=r(3935),Z=r(6441),_="tooltip_LqSg",C="tooltipArrow_bmQN";function N(e){var t=e.children,r=e.id,n=e.anchorEl,o=e.text,s=e.delay,c=(0,a.useState)(!1),l=c[0],u=c[1],d=(0,a.useState)(null),h=d[0],m=d[1],g=(0,a.useState)(null),f=g[0],v=g[1],p=(0,a.useState)(null),b=p[0],N=p[1],B=(0,a.useState)(null),S=B[0],y=B[1],L=(0,Z.D)(h,f,{modifiers:[{name:"arrow",options:{element:b}},{name:"offset",options:{offset:[0,8]}}]}),E=L.styles,T=L.attributes,k=(0,a.useRef)(null),I=r+"_tooltip";return(0,a.useEffect)((function(){y(n?"string"==typeof n?document.querySelector(n):n:document.body)}),[S,n]),(0,a.useEffect)((function(){var e=["mouseenter","focus"],t=["mouseleave","blur"],r=function(){""!==o&&(null==h||h.removeAttribute("title"),k.current=window.setTimeout((function(){u(!0)}),s||400))},a=function(){clearInterval(k.current),u(!1)};return h&&(e.forEach((function(e){h.addEventListener(e,r)})),t.forEach((function(e){h.addEventListener(e,a)}))),function(){h&&(e.forEach((function(e){h.removeEventListener(e,r)})),t.forEach((function(e){h.removeEventListener(e,a)})))}}),[h,o,s]),(0,i.BX)(i.HY,{children:[a.cloneElement(t,{ref:m,"aria-describedby":l?I:void 0}),S?w.createPortal(l&&(0,i.BX)("div",Object.assign({id:I,role:"tooltip",ref:v,className:_,style:E.popper},T.popper,{children:[o,(0,i.tZ)("span",{ref:N,className:C,style:E.arrow})]})),S):S]})}var B=r(3794);var S=a.forwardRef((function(e,t){var r=e.label,a=e.color,n=e.description;return(0,i.BX)("li",{ref:t,className:b.tag,title:n,children:[(0,i.tZ)("span",{className:b.textLabel,children:r.toLowerCase()}),(0,i.tZ)("span",{className:b.colorLabel,style:{backgroundColor:a}})]})}));function y(e){var t,r,a=e.tags.map((function(e){return Object.assign({tag:e},B.$G[e])})),n=(t=function(e){return B.PS.indexOf(e.tag)},(r=[].concat(a)).sort((function(e,r){return t(e)>t(r)?1:t(r)>t(e)?-1:0})),r);return(0,i.tZ)(i.HY,{children:n.map((function(e,t){var r="showcase_card_tag_"+e.tag;return(0,i.tZ)(N,{text:e.description,anchorEl:"#__docusaurus",id:r,children:(0,i.tZ)(S,Object.assign({},e),t)},t)}))})}var L=(0,a.memo)((function(e){var t=e.user;return(0,i.BX)("li",{className:(0,o.Z)("card shadow--md",b.showcaseCard),children:[(0,i.tZ)("div",{className:(0,o.Z)("card__image",b.showcaseCardImage),children:(0,i.tZ)(v.Z,{img:t.preview,alt:t.title})}),(0,i.BX)("div",{className:"card__body",children:[(0,i.BX)("div",{className:(0,o.Z)(b.showcaseCardHeader),children:[(0,i.tZ)("h4",{className:b.showcaseCardTitle,children:(0,i.tZ)(p.Z,{href:t.website,className:b.showcaseCardLink,children:t.title})}),t.tags.includes("favorite")&&(0,i.tZ)(d,{svgClass:b.svgIconFavorite,size:"small"}),t.source&&(0,i.tZ)(p.Z,{href:t.source,className:(0,o.Z)("button button--secondary button--sm",b.showcaseCardSrcBtn),children:"\u6e90\u7801"})]}),(0,i.tZ)("p",{className:b.showcaseCardBody,children:t.description})]}),(0,i.tZ)("ul",{className:(0,o.Z)("card__footer",b.cardFooter),children:(0,i.tZ)(y,{tags:t.tags})})]},t.title)})),E=r(6136),T=r(6775),k="showcaseList_mWrw",I="searchContainer_a2sm",x="showcaseFavoriteHeader_A4FS",O="\u9879\u76ee\u5c55\u793a",P="\u4ee5\u4e0b\u9879\u76ee\u5747\u7531\u672c\u4eba\u5f00\u53d1\uff0c\u5747\u53ef\u81ea\u7531\u4f7f\u7528\uff0c\u90e8\u5206\u5f00\u6e90\u3002";function X(){var e;if(E.Z.canUseDOM)return{scrollTopPosition:window.scrollY,focusedElementId:null==(e=document.activeElement)?void 0:e.id}}var j="name";function H(e){return new URLSearchParams(e).get(j)}function R(){var e=(0,T.TH)(),t=(0,a.useState)("OR"),r=t[0],n=t[1],o=(0,a.useState)([]),s=o[0],c=o[1],i=(0,a.useState)(null),l=i[0],u=i[1];return(0,a.useEffect)((function(){var t,r,a,o,s;c(m(e.search)),n(f(e.search)),u(H(e.search)),t=e.state,o=(a=null!=t?t:{scrollTopPosition:0,focusedElementId:void 0}).scrollTopPosition,s=a.focusedElementId,null==(r=document.getElementById(s))||r.focus(),window.scrollTo({top:o})}),[e]),(0,a.useMemo)((function(){return function(e,t,r,a){return a&&(e=e.filter((function(e){return e.title.toLowerCase().includes(a.toLowerCase())}))),0===t.length?e:e.filter((function(e){return 0!==e.tags.length&&("AND"===r?t.every((function(t){return e.tags.includes(t)})):t.some((function(t){return e.tags.includes(t)})))}))}(B.tT,s,r,l)}),[s,r,l])}function A(){return(0,i.BX)("section",{className:"margin-top--lg margin-bottom--lg text--center",children:[(0,i.tZ)("h1",{children:O}),(0,i.tZ)("p",{children:P}),(0,i.tZ)("a",{className:"button button--primary",href:"https://github.com/lag-spike",target:"_blank",rel:"noreferrer",children:"\u524d\u5f80 Github \u514b\u9686\u9879\u76ee"})]})}function U(){var e=(0,T.k6)(),t=(0,T.TH)(),r=(0,a.useState)(null),n=r[0],o=r[1];return(0,a.useEffect)((function(){o(H(t.search))}),[t]),(0,i.tZ)("div",{className:I,children:(0,i.tZ)("input",{id:"searchbar",placeholder:"\u641c\u7d22\u9879\u76ee",value:null!=n?n:void 0,onInput:function(r){o(r.currentTarget.value);var a=new URLSearchParams(t.search);a.delete(j),r.currentTarget.value&&a.set(j,r.currentTarget.value),e.push(Object.assign({},t,{search:a.toString(),state:X()})),setTimeout((function(){var e;null==(e=document.getElementById("searchbar"))||e.focus()}),0)}})})}function F(){var e=R();return 0===e.length?(0,i.tZ)("section",{className:"margin-top--lg margin-bottom--xl",children:(0,i.BX)("div",{className:"container padding-vert--md text--center",children:[(0,i.tZ)("h2",{children:"No result"}),(0,i.tZ)(U,{})]})}):(0,i.tZ)("section",{className:"margin-top--lg margin-bottom--xl",children:e.length===B.tT.length?(0,i.tZ)(i.HY,{children:(0,i.BX)("div",{className:"container margin-top--lg",children:[(0,i.BX)("div",{className:(0,o.Z)("margin-bottom--md",x),children:[(0,i.tZ)("h2",{children:"\u6240\u6709\u9879\u76ee"}),(0,i.tZ)(U,{})]}),(0,i.tZ)("ul",{className:k,children:B.tT.map((function(e){return(0,i.tZ)(L,{user:e},e.title)}))})]})}):(0,i.BX)("div",{className:"container",children:[(0,i.BX)("div",{className:(0,o.Z)("margin-bottom--md",x),children:[(0,i.tZ)("h2",{children:"\u6240\u6709\u9879\u76ee"}),(0,i.tZ)(U,{})]}),(0,i.tZ)("ul",{className:k,children:e.map((function(e){return(0,i.tZ)(L,{user:e},e.title)}))})]})})}var M=function(){return(0,i.tZ)(n.Z,{title:O,description:P,children:(0,i.BX)("main",{className:"margin-vert--lg",children:[(0,i.tZ)(A,{}),(0,i.tZ)(F,{})]})})}}}]);