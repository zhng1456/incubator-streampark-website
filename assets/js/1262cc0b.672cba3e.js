"use strict";(self.webpackChunkapache_streampark_website=self.webpackChunkapache_streampark_website||[]).push([[5433],{3905:(t,e,a)=>{a.d(e,{Zo:()=>k,kt:()=>f});var n=a(7294);function r(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function l(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,n)}return a}function d(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?l(Object(a),!0).forEach((function(e){r(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function p(t,e){if(null==t)return{};var a,n,r=function(t,e){if(null==t)return{};var a,n,r={},l=Object.keys(t);for(n=0;n<l.length;n++)a=l[n],e.indexOf(a)>=0||(r[a]=t[a]);return r}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(n=0;n<l.length;n++)a=l[n],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(r[a]=t[a])}return r}var i=n.createContext({}),m=function(t){var e=n.useContext(i),a=e;return t&&(a="function"==typeof t?t(e):d(d({},e),t)),a},k=function(t){var e=m(t.components);return n.createElement(i.Provider,{value:e},t.children)},o={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},N=n.forwardRef((function(t,e){var a=t.components,r=t.mdxType,l=t.originalType,i=t.parentName,k=p(t,["components","mdxType","originalType","parentName"]),N=m(a),f=r,g=N["".concat(i,".").concat(f)]||N[f]||o[f]||l;return a?n.createElement(g,d(d({ref:e},k),{},{components:a})):n.createElement(g,d({ref:e},k))}));function f(t,e){var a=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var l=a.length,d=new Array(l);d[0]=N;var p={};for(var i in e)hasOwnProperty.call(e,i)&&(p[i]=e[i]);p.originalType=t,p.mdxType="string"==typeof t?t:r,d[1]=p;for(var m=2;m<l;m++)d[m]=a[m];return n.createElement.apply(null,d)}return n.createElement.apply(null,a)}N.displayName="MDXCreateElement"},8604:(t,e,a)=>{a.r(e),a.d(e,{assets:()=>i,contentTitle:()=>d,default:()=>o,frontMatter:()=>l,metadata:()=>p,toc:()=>m});var n=a(7462),r=(a(7294),a(3905));const l={id:"8-data-gen",title:"DataGen",sidebar_position:8},d=void 0,p={unversionedId:"flinksql/connector/8-data-gen",id:"flinksql/connector/8-data-gen",title:"DataGen",description:"\u4ecb\u7ecd",source:"@site/docs/flinksql/connector/8-data-gen.md",sourceDirName:"flinksql/connector",slug:"/flinksql/connector/8-data-gen",permalink:"/docs/flinksql/connector/8-data-gen",draft:!1,editUrl:"https://github.com/apache/incubator-streampark-website/edit/dev/docs/flinksql/connector/8-data-gen.md",tags:[],version:"current",sidebarPosition:8,frontMatter:{id:"8-data-gen",title:"DataGen",sidebar_position:8},sidebar:"tutorialSidebar",previous:{title:"Hbase",permalink:"/docs/flinksql/connector/7-hbase"},next:{title:"Print",permalink:"/docs/flinksql/connector/9-print"}},i={},m=[{value:"\u4ecb\u7ecd",id:"\u4ecb\u7ecd",level:2},{value:"\u4f7f\u7528",id:"\u4f7f\u7528",level:2},{value:"\u6570\u636e\u7c7b\u578b",id:"\u6570\u636e\u7c7b\u578b",level:2},{value:"\u8fde\u63a5\u5668\u9009\u9879",id:"\u8fde\u63a5\u5668\u9009\u9879",level:2}],k={toc:m};function o(t){let{components:e,...a}=t;return(0,r.kt)("wrapper",(0,n.Z)({},k,a,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"\u4ecb\u7ecd"},"\u4ecb\u7ecd"),(0,r.kt)("p",null,"\u652f\u6301\uff1a"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Scan Source: Bounded "),(0,r.kt)("li",{parentName:"ul"},"Scan Source: UnBounded")),(0,r.kt)("p",null,"DataGen\u8fde\u63a5\u5668\u5141\u8bb8\u901a\u57fa\u5185\u5b58\u7684\u6570\u636e\u751f\u6210\u6765\u521b\u5efa\u8868\uff0c\u8fd9\u5bf9\u4e8e\u672c\u5730\u67e5\u8be2\uff0c\u800c\u4e0d\u662f\u5916\u90e8\u7cfb\u7edf\u67e5\u8be2\u6765\u8bf4\u662f\u975e\u5e38\u6709\u7528\u7684\uff0c\u6bd4\u5982kafka\u3002\u8868\u53ef\u4ee5\u5305\u542b",(0,r.kt)("inlineCode",{parentName:"p"},"Computed Column syntax"),"\u5b57\u6bb5\u8ba1\u7b97\u8bed\u6cd5\uff0c\u4ee5\u652f\u6301\u66f4\u7075\u6d3b\u7684\u6570\u636e\u751f\u6210\u3002"),(0,r.kt)("p",null,"DataGen\u662f\u5185\u5efa\u8fde\u63a5\u5668\uff0c\u65e0\u9700\u6dfb\u52a0\u989d\u5916\u4f9d\u8d56\u3002"),(0,r.kt)("h2",{id:"\u4f7f\u7528"},"\u4f7f\u7528"),(0,r.kt)("p",null,"\u9ed8\u8ba4\u60c5\u51b5\u4e0b\uff0cDataGen\u8868\u5c06\u521b\u5efa\u65e0\u9650\u6570\u91cf\u7684\u6570\u636e\u884c\uff0c\u5e76\u4e14\u6bcf\u4e2a\u5b57\u6bb5\u90fd\u662f\u968f\u673a\u503c\u3002\u5bf9\u4e8e\u53ef\u53d8\u5927\u5c0f\u7684\u7c7b\u578b\uff0c\u6bd4\u5982",(0,r.kt)("strong",{parentName:"p"},"char/varchar/string/array/map/multiset"),"\uff0c\u53ef\u4ee5\u6307\u5b9a\u4ed6\u4eec\u7684\u957f\u5ea6\u3002\u53e6\u5916\u4e5f\u53ef\u4ee5\u901a\u8fc7\u6307\u5b9a\u603b\u884c\u6570\uff0c\u6765\u521b\u5efa\u4e00\u4e2a\u6709\u754c\u8868\u3002"),(0,r.kt)("p",null,"flink\u4e5f\u63d0\u4f9b\u4e86\u5e8f\u5217\u5316\u751f\u6210\u5668\uff0c\u7528\u6237\u53ef\u4ee5\u6307\u5b9a\u5e8f\u5217\u7684\u5f00\u59cb\u548c\u7ed3\u675f\u4e4b\u3002\u5982\u679c\u8868\u7684\u67d0\u4e2a\u5b57\u6bb5\u4e3a\u5e8f\u5217\u7c7b\u578b\uff0c\u5219\u8868\u5c06\u4f1a\u6210\u4e3a\u6709\u754c\u8868\uff0c\u5f53\u7b2c\u4e00\u4e2a\u5b57\u6bb5\u503c\u751f\u6210\u5230\u4ed6\u5bf9\u5e94\u7684\u7ed3\u675f\u503c\u65f6\u6570\u636e\u751f\u6210\u7ed3\u675f\u3002"),(0,r.kt)("p",null,"\u65f6\u95f4\u7c7b\u578b\u901a\u5e38\u4e3a\u672c\u5730\u673a\u5668\u7684\u5f53\u524d\u7cfb\u7edf\u65f6\u95f4\u3002"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sql"},"CREATE TABLE Orders (\n    order_number BIGINT,\n    price        DECIMAL(32,2),\n    buyer        ROW<first_name STRING, last_name STRING>,\n    order_time   TIMESTAMP(3)\n) WITH (\n  'connector' = 'datagen'\n)\n")),(0,r.kt)("p",null,"\u901a\u5e38\u60c5\u51b5\u4e0b\uff0c\u6570\u636e\u751f\u6210\u8fde\u63a5\u5668\u548c",(0,r.kt)("inlineCode",{parentName:"p"},"LINK"),"\u5b50\u53e5\u4e00\u8d77\u4f7f\u7528\u6765\u6a21\u62df\u7269\u7406\u8868\u3002"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sql"},"CREATE TABLE Orders (\n    order_number BIGINT,\n    price        DECIMAL(32,2),\n    buyer        ROW<first_name STRING, last_name STRING>,\n    order_time   TIMESTAMP(3)\n) WITH (...)\n\n-- \u521b\u5efa\u4e00\u4e2a\u6a21\u62df\u8868\nCREATE TEMPORARY TABLE GenOrders\nWITH (\n    'connector' = 'datagen',\n    'number-of-rows' = '10'\n)\nLIKE Orders (EXCLUDING ALL)\n")),(0,r.kt)("h2",{id:"\u6570\u636e\u7c7b\u578b"},"\u6570\u636e\u7c7b\u578b"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"\u7c7b\u578b"),(0,r.kt)("th",{parentName:"tr",align:"left"},"\u652f\u6301\u7684\u751f\u6210\u5668"),(0,r.kt)("th",{parentName:"tr",align:"left"},"\u5907\u6ce8"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"BOOLEAN"),(0,r.kt)("td",{parentName:"tr",align:"left"},"random"),(0,r.kt)("td",{parentName:"tr",align:"left"})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"CHAR"),(0,r.kt)("td",{parentName:"tr",align:"left"},"random / sequence"),(0,r.kt)("td",{parentName:"tr",align:"left"})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"VARCHAR"),(0,r.kt)("td",{parentName:"tr",align:"left"},"random / sequence"),(0,r.kt)("td",{parentName:"tr",align:"left"})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"STRING"),(0,r.kt)("td",{parentName:"tr",align:"left"},"random / sequence"),(0,r.kt)("td",{parentName:"tr",align:"left"})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"DECIMAL"),(0,r.kt)("td",{parentName:"tr",align:"left"},"random / sequence"),(0,r.kt)("td",{parentName:"tr",align:"left"})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"TINYINT"),(0,r.kt)("td",{parentName:"tr",align:"left"},"random / sequence"),(0,r.kt)("td",{parentName:"tr",align:"left"})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"SMALLINT"),(0,r.kt)("td",{parentName:"tr",align:"left"},"random / sequence"),(0,r.kt)("td",{parentName:"tr",align:"left"})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"INT"),(0,r.kt)("td",{parentName:"tr",align:"left"},"random / sequence"),(0,r.kt)("td",{parentName:"tr",align:"left"})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"BIGINT"),(0,r.kt)("td",{parentName:"tr",align:"left"},"random / sequence"),(0,r.kt)("td",{parentName:"tr",align:"left"})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"FLOAT"),(0,r.kt)("td",{parentName:"tr",align:"left"},"random / sequence"),(0,r.kt)("td",{parentName:"tr",align:"left"})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"DOUBLE"),(0,r.kt)("td",{parentName:"tr",align:"left"},"random / sequence"),(0,r.kt)("td",{parentName:"tr",align:"left"})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"DATE"),(0,r.kt)("td",{parentName:"tr",align:"left"},"random"),(0,r.kt)("td",{parentName:"tr",align:"left"},"\u901a\u5e38\u4e3a\u672c\u5730\u673a\u5668\u7684\u65e5\u671f\u3002")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"TIME"),(0,r.kt)("td",{parentName:"tr",align:"left"},"random"),(0,r.kt)("td",{parentName:"tr",align:"left"},"\u901a\u5e38\u4e3a\u672c\u5730\u673a\u5668\u7684\u65f6\u95f4\u3002")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"TIMESTAMP"),(0,r.kt)("td",{parentName:"tr",align:"left"},"random"),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("strong",{parentName:"td"},"flink-1.13.x"),"\uff1a\u901a\u5e38\u4e3a\u672c\u5730\u673a\u5668\u7684\u65f6\u95f4\u6233\u3002",(0,r.kt)("br",null),(0,r.kt)("strong",{parentName:"td"},"flink-1.5.x"),"\uff1a\u89e3\u6790\u4e3a\u672c\u5730\u673a\u5668\u65f6\u95f4\u6233\u8fc7\u53bb\u4e00\u6bb5\u65f6\u95f4\u7684\u65f6\u95f4\u6233\uff0c\u6700\u5927\u53ef\u4ee5\u8fc7\u53bb\u7684\u65f6\u95f4\u53ef\u4ee5\u901a\u8fc7 ",(0,r.kt)("inlineCode",{parentName:"td"},"max-past")," \u9009\u9879\u914d\u7f6e\u3002")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"TIMESTAMP_LTZ"),(0,r.kt)("td",{parentName:"tr",align:"left"},"random"),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("strong",{parentName:"td"},"flink-1.13.x"),"\uff1a\u901a\u5e38\u4e3a\u672c\u5730\u673a\u5668\u7684\u65f6\u95f4\u6233\u3002",(0,r.kt)("br",null),(0,r.kt)("strong",{parentName:"td"},"flink-1.5.x"),"\uff1a\u89e3\u6790\u4e3a\u672c\u5730\u673a\u5668\u65f6\u95f4\u6233\u8fc7\u53bb\u4e00\u6bb5\u65f6\u95f4\u7684\u65f6\u95f4\u6233\uff0c\u6700\u5927\u53ef\u4ee5\u8fc7\u53bb\u7684\u65f6\u95f4\u53ef\u4ee5\u901a\u8fc7 ",(0,r.kt)("inlineCode",{parentName:"td"},"max-past")," \u9009\u9879\u914d\u7f6e\u3002")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"INTERVAL YEAR TO MONTH"),(0,r.kt)("td",{parentName:"tr",align:"left"},"random"),(0,r.kt)("td",{parentName:"tr",align:"left"})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"INTERVAL DAY TO MONTH"),(0,r.kt)("td",{parentName:"tr",align:"left"},"random"),(0,r.kt)("td",{parentName:"tr",align:"left"})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"ROW"),(0,r.kt)("td",{parentName:"tr",align:"left"},"random"),(0,r.kt)("td",{parentName:"tr",align:"left"},"\u901a\u8fc7\u968f\u673a\u5b50\u5c5e\u6027\u503c\u751f\u6210\u4e00\u4e2arow\u7c7b\u578b\u5b57\u6bb5\u503c\u3002")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"ARRAY"),(0,r.kt)("td",{parentName:"tr",align:"left"},"random"),(0,r.kt)("td",{parentName:"tr",align:"left"},"\u901a\u8fc7\u968f\u673a",(0,r.kt)("inlineCode",{parentName:"td"},"entry"),"\u751f\u6210\u4e00\u4e2a\u6570\u7ec4\u3002")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"MAP"),(0,r.kt)("td",{parentName:"tr",align:"left"},"random"),(0,r.kt)("td",{parentName:"tr",align:"left"},"\u901a\u8fc7\u968f\u673a",(0,r.kt)("inlineCode",{parentName:"td"},"entry"),"\u751f\u6210\u4e00\u4e2a",(0,r.kt)("inlineCode",{parentName:"td"},"map"),"\u8868\u3002")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"MULTISET"),(0,r.kt)("td",{parentName:"tr",align:"left"},"random"),(0,r.kt)("td",{parentName:"tr",align:"left"},"\u901a\u8fc7\u968f\u673a",(0,r.kt)("inlineCode",{parentName:"td"},"entry"),"\u751f\u6210\u4e00\u4e2a",(0,r.kt)("inlineCode",{parentName:"td"},"multiset"),"\u3002")))),(0,r.kt)("h2",{id:"\u8fde\u63a5\u5668\u9009\u9879"},"\u8fde\u63a5\u5668\u9009\u9879"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Option"),(0,r.kt)("th",{parentName:"tr",align:"left"},"\u662f\u5426\u5fc5\u987b"),(0,r.kt)("th",{parentName:"tr",align:"left"},"\u9ed8\u8ba4\u503c"),(0,r.kt)("th",{parentName:"tr",align:"left"},"\u7c7b\u578b"),(0,r.kt)("th",{parentName:"tr",align:"left"},"\u63cf\u8ff0"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"connector"),(0,r.kt)("td",{parentName:"tr",align:"left"},"\u5fc5\u987b"),(0,r.kt)("td",{parentName:"tr",align:"left"},"(none)"),(0,r.kt)("td",{parentName:"tr",align:"left"},"String"),(0,r.kt)("td",{parentName:"tr",align:"left"},"\u6307\u5b9a\u4f7f\u7528\u90a3\u4e2a\u8fde\u63a5\u5668\uff0c\u8fd9\u513f\u5e94\u8be5\u662f\uff1a",(0,r.kt)("strong",{parentName:"td"},"datagen"),"\u3002")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"rows-per-second"),(0,r.kt)("td",{parentName:"tr",align:"left"},"\u53ef\u9009"),(0,r.kt)("td",{parentName:"tr",align:"left"},"10000"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Long"),(0,r.kt)("td",{parentName:"tr",align:"left"},"\u6307\u5b9a\u6bcf\u79d2\u751f\u6210\u7684\u884c\u6570\u4ee5\u63a7\u5236\u53d1\u5c04\u9891\u7387\u3002")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"number-of-rows"),(0,r.kt)("td",{parentName:"tr",align:"left"},"\u53ef\u9009"),(0,r.kt)("td",{parentName:"tr",align:"left"},"(none)"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Long"),(0,r.kt)("td",{parentName:"tr",align:"left"},"\u53d1\u5c04\u7684\u6570\u636e\u603b\u884c\u6570\u3002\u9ed8\u8ba4\u60c5\u51b5\u4e0b\uff0c\u8868\u662f\u65e0\u754c\u7684\u3002")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"fields.#.kind"),(0,r.kt)("td",{parentName:"tr",align:"left"},"\u53ef\u9009"),(0,r.kt)("td",{parentName:"tr",align:"left"},"random"),(0,r.kt)("td",{parentName:"tr",align:"left"},"String"),(0,r.kt)("td",{parentName:"tr",align:"left"},"\u8be5",(0,r.kt)("strong",{parentName:"td"},"#"),"\u5b57\u6bb5\u7684\u751f\u6210\u5668\uff0c\u53ef\u4ee5\u662f",(0,r.kt)("strong",{parentName:"td"},"sequence"),"\u6216",(0,r.kt)("strong",{parentName:"td"},"random"),"\u3002")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"fields.#.min"),(0,r.kt)("td",{parentName:"tr",align:"left"},"\u53ef\u9009"),(0,r.kt)("td",{parentName:"tr",align:"left"},"(\u8be5\u7c7b\u578b\u6700\u5c0f\u503c)"),(0,r.kt)("td",{parentName:"tr",align:"left"},"(Type of field)"),(0,r.kt)("td",{parentName:"tr",align:"left"},"\u968f\u673a\u751f\u6210\u5668\u7684\u6700\u5c0f\u503c\uff0c\u6307\u9488\u5bf9\u4e8e\u6570\u5b57\u7c7b\u578b\u3002")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"fields.#.max"),(0,r.kt)("td",{parentName:"tr",align:"left"},"\u53ef\u9009"),(0,r.kt)("td",{parentName:"tr",align:"left"},"(\u8be5\u7c7b\u578b\u6700\u5927\u503c)"),(0,r.kt)("td",{parentName:"tr",align:"left"},"(Type of field)"),(0,r.kt)("td",{parentName:"tr",align:"left"},"\u968f\u673a\u751f\u6210\u5668\u7684\u6700\u5927\u503c\uff0c\u53ea\u9488\u5bf9\u4e8e\u6570\u5b57\u7c7b\u578b\u3002")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("strong",{parentName:"td"},"\u4ece flink-1.15.x\uff1a\u5f00\u59cb\u652f\u6301"),(0,r.kt)("br",null),"fields.#.max-past"),(0,r.kt)("td",{parentName:"tr",align:"left"},"\u53ef\u9009"),(0,r.kt)("td",{parentName:"tr",align:"left"},"0"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Duration"),(0,r.kt)("td",{parentName:"tr",align:"left"},"\u65f6\u95f4\u6233\u968f\u673a\u751f\u6210\u5668\u53ef\u4ee5\u8fc7\u53bb\u7684\u6700\u5927\u65f6\u95f4\uff0c\u53ea\u7528\u4e8e ",(0,r.kt)("strong",{parentName:"td"},"timestamp")," \u7c7b\u578b\u3002")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"fields.#.length"),(0,r.kt)("td",{parentName:"tr",align:"left"},"\u53ef\u9009"),(0,r.kt)("td",{parentName:"tr",align:"left"},"100"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Integer"),(0,r.kt)("td",{parentName:"tr",align:"left"},"\u751f\u6210 ",(0,r.kt)("strong",{parentName:"td"},"char/varchar/string/array/map/multiset")," \u53ef\u53d8\u957f\u5ea6\u7c7b\u578b\u7684\u5927\u5c0f\u6216\u957f\u5ea6\u3002")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"fields.#.start"),(0,r.kt)("td",{parentName:"tr",align:"left"},"\u53ef\u9009"),(0,r.kt)("td",{parentName:"tr",align:"left"},"(none)"),(0,r.kt)("td",{parentName:"tr",align:"left"},"(Type of field)"),(0,r.kt)("td",{parentName:"tr",align:"left"},"\u5e8f\u5217\u751f\u6210\u5668\u7684\u5f00\u59cb\u503c\u3002")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"fields.#.end"),(0,r.kt)("td",{parentName:"tr",align:"left"},"\u53ef\u9009"),(0,r.kt)("td",{parentName:"tr",align:"left"},"(none)"),(0,r.kt)("td",{parentName:"tr",align:"left"},"(Type of field)"),(0,r.kt)("td",{parentName:"tr",align:"left"},"\u5e8f\u5217\u751f\u6210\u5668\u7684\u7ed3\u675f\u503c\u3002")))),(0,r.kt)("p",null,"\u6ce8\uff1a\u4e0a\u9762\u9009\u9879\u4e2d\u7684 ",(0,r.kt)("strong",{parentName:"p"},"#")," \uff0c\u5728\u5b9e\u9645\u4f7f\u7528\u65f6\uff0c\u8981\u66ff\u6362\u4e3a\u521b\u5efa\u7684\u8868\u7684\u67d0\u4e2a\u5b57\u6bb5\u540d\u79f0\uff0c\u8868\u793a\u5bf9\u8fd9\u4e2a\u5b57\u6bb5\u8bbe\u7f6e\u5c5e\u6027\u3002"))}o.isMDXComponent=!0}}]);