"use strict";(self.webpackChunkapache_streampark_website=self.webpackChunkapache_streampark_website||[]).push([[5887],{3905:(t,e,a)=>{a.d(e,{Zo:()=>m,kt:()=>N});var n=a(7294);function r(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function l(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,n)}return a}function i(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?l(Object(a),!0).forEach((function(e){r(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function p(t,e){if(null==t)return{};var a,n,r=function(t,e){if(null==t)return{};var a,n,r={},l=Object.keys(t);for(n=0;n<l.length;n++)a=l[n],e.indexOf(a)>=0||(r[a]=t[a]);return r}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(n=0;n<l.length;n++)a=l[n],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(r[a]=t[a])}return r}var k=n.createContext({}),s=function(t){var e=n.useContext(k),a=e;return t&&(a="function"==typeof t?t(e):i(i({},e),t)),a},m=function(t){var e=s(t.components);return n.createElement(k.Provider,{value:e},t.children)},d={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},o=n.forwardRef((function(t,e){var a=t.components,r=t.mdxType,l=t.originalType,k=t.parentName,m=p(t,["components","mdxType","originalType","parentName"]),o=s(a),N=r,g=o["".concat(k,".").concat(N)]||o[N]||d[N]||l;return a?n.createElement(g,i(i({ref:e},m),{},{components:a})):n.createElement(g,i({ref:e},m))}));function N(t,e){var a=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var l=a.length,i=new Array(l);i[0]=o;var p={};for(var k in e)hasOwnProperty.call(e,k)&&(p[k]=e[k]);p.originalType=t,p.mdxType="string"==typeof t?t:r,i[1]=p;for(var s=2;s<l;s++)i[s]=a[s];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}o.displayName="MDXCreateElement"},6604:(t,e,a)=>{a.r(e),a.d(e,{assets:()=>k,contentTitle:()=>i,default:()=>d,frontMatter:()=>l,metadata:()=>p,toc:()=>s});var n=a(7462),r=(a(7294),a(3905));const l={id:"5-elasticsearch",title:"Elasticsearch",sidebar_position:5},i=void 0,p={unversionedId:"flinksql/connector/5-elasticsearch",id:"flinksql/connector/5-elasticsearch",title:"Elasticsearch",description:"\u4ecb\u7ecd",source:"@site/docs/flinksql/connector/5-elasticsearch.md",sourceDirName:"flinksql/connector",slug:"/flinksql/connector/5-elasticsearch",permalink:"/docs/flinksql/connector/5-elasticsearch",draft:!1,editUrl:"https://github.com/apache/incubator-streampark-website/edit/dev/docs/flinksql/connector/5-elasticsearch.md",tags:[],version:"current",sidebarPosition:5,frontMatter:{id:"5-elasticsearch",title:"Elasticsearch",sidebar_position:5},sidebar:"tutorialSidebar",previous:{title:"JDBC",permalink:"/docs/flinksql/connector/4-jdbc"},next:{title:"FileSystem",permalink:"/docs/flinksql/connector/6-file-system"}},k={},s=[{value:"\u4ecb\u7ecd",id:"\u4ecb\u7ecd",level:2},{value:"\u4f9d\u8d56",id:"\u4f9d\u8d56",level:2},{value:"\u521b\u5efa Elasticsearch \u8868",id:"\u521b\u5efa-elasticsearch-\u8868",level:2},{value:"\u8fde\u63a5\u5668\u53c2\u6570",id:"\u8fde\u63a5\u5668\u53c2\u6570",level:2},{value:"\u7279\u6027",id:"\u7279\u6027",level:2},{value:"Key \u5904\u7406",id:"key-\u5904\u7406",level:3},{value:"\u52a8\u6001\u7d22\u5f15",id:"\u52a8\u6001\u7d22\u5f15",level:3},{value:"\u6570\u636e\u7c7b\u578b\u6620\u5c04",id:"\u6570\u636e\u7c7b\u578b\u6620\u5c04",level:2}],m={toc:s};function d(t){let{components:e,...a}=t;return(0,r.kt)("wrapper",(0,n.Z)({},m,a,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"\u4ecb\u7ecd"},"\u4ecb\u7ecd"),(0,r.kt)("p",null,"\u652f\u6301\uff1a"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Sink: Batch "),(0,r.kt)("li",{parentName:"ul"},"Sink: Streaming Append & Upsert Mode")),(0,r.kt)("p",null,"Elasticsearch \u8fde\u63a5\u5668\u5141\u8bb8\u5c06\u6570\u636e\u5199\u5165\u5230 Elasticsearch \u5f15\u64ce\u7684\u7d22\u5f15\u4e2d\u3002"),(0,r.kt)("p",null,"\u8fde\u63a5\u5668\u53ef\u4ee5\u5de5\u4f5c\u5728 upsert \u6a21\u5f0f\u4e0b\uff0c\u4f7f\u7528 DDL \u4e2d\u5b9a\u4e49\u7684\u4e3b\u952e\u4e0e\u5916\u90e8\u7cfb\u7edf\u4ea4\u6362 ",(0,r.kt)("strong",{parentName:"p"},"UPDATE/DELETE")," \u6d88\u606f\u3002"),(0,r.kt)("p",null,"\u5982\u679c DDL \u4e2d\u6ca1\u6709\u5b9a\u4e49\u4e3b\u952e\uff0c\u5219\u8fde\u63a5\u5668\u53ea\u80fd\u5de5\u4f5c\u5728 append \u6a21\u5f0f\uff0c\u53ea\u80fd\u4e0e\u5916\u90e8\u7cfb\u7edf\u4ea4\u6362 ",(0,r.kt)("strong",{parentName:"p"},"INSERT")," \u6d88\u606f\u3002"),(0,r.kt)("h2",{id:"\u4f9d\u8d56"},"\u4f9d\u8d56"),(0,r.kt)("p",null,"\u4e3a\u4e86\u4f7f\u7528Elasticsearch\u8fde\u63a5\u5668\uff0c\u4ee5\u4e0b\u4f9d\u8d56\u9879\u5bf9\u4e8e\u4f7f\u7528\u81ea\u52a8\u5316\u6784\u5efa\u5de5\u5177(\u5982Maven\u6216SBT)\u7684\u9879\u76ee\u548c\u5e26\u6709SQL JAR\u5305\u7684SQL Client\u90fd\u662f\u5fc5\u9700\u7684\u3002"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"6.x"),"\t"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-xml"},"<dependency>\n  <groupId>org.apache.flink</groupId>\n  <artifactId>flink-connector-elasticsearch6_2.11</artifactId>\n  <version>1.13.0</version>\n</dependency>   \n")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"7.x and later versions")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-xml"},"<dependency>\n  <groupId>org.apache.flink</groupId>\n  <artifactId>flink-connector-elasticsearch7_2.11</artifactId>\n  <version>1.13.0</version>\n</dependency>\n")),(0,r.kt)("p",null,"\u6ce8\u610f\u81ea\u5df1\u4f7f\u7528\u7684 flink \u548c scala \u7248\u672c\u3002"),(0,r.kt)("h2",{id:"\u521b\u5efa-elasticsearch-\u8868"},"\u521b\u5efa Elasticsearch \u8868"),(0,r.kt)("p",null,"\u4ee5\u4e0b\u793a\u4f8b\u5c55\u793a\u5982\u4f55\u521b\u5efa Elasticsearch sink \u8868\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sql"},"CREATE TABLE myUserTable (\n    user_id STRING,\n    user_name STRING\n    uv BIGINT,\n    pv BIGINT,\n    PRIMARY KEY (user_id) NOT ENFORCED\n) WITH (\n    'connector' = 'elasticsearch-7',\n    'hosts' = 'http://localhost:9200',\n    'index' = 'users'\n);\n")),(0,r.kt)("h2",{id:"\u8fde\u63a5\u5668\u53c2\u6570"},"\u8fde\u63a5\u5668\u53c2\u6570"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"\u53c2\u6570"),(0,r.kt)("th",{parentName:"tr",align:"left"},"\u662f\u5426\u5fc5\u9009"),(0,r.kt)("th",{parentName:"tr",align:"left"},"\u4ece flink-1.15.x \u5f00\u59cb\u652f\u6301",(0,r.kt)("br",null),"\u662f\u5426\u53ef\u4f20\u9012"),(0,r.kt)("th",{parentName:"tr",align:"left"},"\u9ed8\u8ba4\u503c"),(0,r.kt)("th",{parentName:"tr",align:"left"},"\u6570\u636e\u7c7b\u578b"),(0,r.kt)("th",{parentName:"tr",align:"left"},"\u63cf\u8ff0"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"connector"),(0,r.kt)("td",{parentName:"tr",align:"left"},"\u5fc5\u9009"),(0,r.kt)("td",{parentName:"tr",align:"left"},"\u5426"),(0,r.kt)("td",{parentName:"tr",align:"left"},"(none)"),(0,r.kt)("td",{parentName:"tr",align:"left"},"String"),(0,r.kt)("td",{parentName:"tr",align:"left"},"\u6307\u5b9a\u8981\u4f7f\u7528\u7684\u8fde\u63a5\u5668\uff0c\u6709\u6548\u503c\u4e3a\uff1a",(0,r.kt)("br",null),(0,r.kt)("strong",{parentName:"td"},"elasticsearch-6"),"\uff1a\u8fde\u63a5\u5230 Elasticsearch 6.x \u7684\u96c6\u7fa4\u3002",(0,r.kt)("br",null),(0,r.kt)("strong",{parentName:"td"},"elasticsearch-7"),"\uff1a\u8fde\u63a5\u5230 Elasticsearch 7.x \u53ca\u66f4\u9ad8\u7248\u672c\u7684\u96c6\u7fa4\u3002")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"hosts"),(0,r.kt)("td",{parentName:"tr",align:"left"},"\u5fc5\u9009"),(0,r.kt)("td",{parentName:"tr",align:"left"},"\u662f"),(0,r.kt)("td",{parentName:"tr",align:"left"},"(none)"),(0,r.kt)("td",{parentName:"tr",align:"left"},"String"),(0,r.kt)("td",{parentName:"tr",align:"left"},"\u8981\u8fde\u63a5\u5230\u7684\u4e00\u53f0\u6216\u591a\u53f0 Elasticsearch \u4e3b\u673a\uff0c\u4f8b\u5982 ",(0,r.kt)("strong",{parentName:"td"},"http://host_name:9092;http://host_name:9093"),"\u3002")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"index"),(0,r.kt)("td",{parentName:"tr",align:"left"},"\u5fc5\u9009"),(0,r.kt)("td",{parentName:"tr",align:"left"},"\u662f"),(0,r.kt)("td",{parentName:"tr",align:"left"},"(none)"),(0,r.kt)("td",{parentName:"tr",align:"left"},"String"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Elasticsearch \u4e2d\u6bcf\u6761\u8bb0\u5f55\u7684\u7d22\u5f15\u3002\u53ef\u4ee5\u662f\u4e00\u4e2a\u9759\u6001\u7d22\u5f15\uff08\u4f8b\u5982 ",(0,r.kt)("strong",{parentName:"td"},"myIndex"),"\uff09\u6216\u4e00\u4e2a\u52a8\u6001\u7d22\u5f15\uff08\u4f8b\u5982 ",(0,r.kt)("strong",{parentName:"td"},"index-{log_ts","|","yyyy-MM-dd}"),"\uff09\u3002 \u66f4\u591a\u8be6\u7ec6\u4fe1\u606f\uff0c\u8bf7\u53c2\u89c1\u4e0b\u9762\u7684\u52a8\u6001\u7d22\u5f15\u90e8\u5206\u3002")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"document-type"),(0,r.kt)("td",{parentName:"tr",align:"left"},"6.x \u7248\u672c\u4e2d\u5fc5\u9009"),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("strong",{parentName:"td"},"6.x"),"\uff1a\u662f"),(0,r.kt)("td",{parentName:"tr",align:"left"},"(none)"),(0,r.kt)("td",{parentName:"tr",align:"left"},"String"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Elasticsearch \u6587\u6863\u7c7b\u578b\u3002\u5728 elasticsearch-7 \u4e2d\u4e0d\u518d\u9700\u8981\u3002")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"document-id.key-delimiter"),(0,r.kt)("td",{parentName:"tr",align:"left"},"\u53ef\u9009"),(0,r.kt)("td",{parentName:"tr",align:"left"},"\u662f"),(0,r.kt)("td",{parentName:"tr",align:"left"},"_"),(0,r.kt)("td",{parentName:"tr",align:"left"},"String"),(0,r.kt)("td",{parentName:"tr",align:"left"},"\u590d\u5408\u952e\u7684\u5206\u9694\u7b26\uff08\u9ed8\u8ba4\u4e3a",(0,r.kt)("strong",{parentName:"td"},"_"),"\uff09\uff0c\u4f8b\u5982\uff0c\u6307\u5b9a\u4e3a",(0,r.kt)("strong",{parentName:"td"},"$"),"\u5c06\u5bfc\u81f4\u6587\u6863 ID \u4e3a",(0,r.kt)("strong",{parentName:"td"},"KEY1$KEY2$KEY3"),"\u3002")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"username"),(0,r.kt)("td",{parentName:"tr",align:"left"},"\u53ef\u9009"),(0,r.kt)("td",{parentName:"tr",align:"left"},"\u662f"),(0,r.kt)("td",{parentName:"tr",align:"left"},"(none)"),(0,r.kt)("td",{parentName:"tr",align:"left"},"String"),(0,r.kt)("td",{parentName:"tr",align:"left"},"\u7528\u4e8e\u8fde\u63a5 Elasticsearch \u5b9e\u4f8b\u7684\u7528\u6237\u540d\u3002\u8bf7\u6ce8\u610f\uff0cElasticsearch \u6ca1\u6709\u9884\u7ed1\u5b9a\u5b89\u5168\u7279\u6027\uff0c\u4f46\u4f60\u53ef\u4ee5\u901a\u8fc7\u5982\u4e0b\u6307\u5357\u542f\u7528\u5b83\u6765\u4fdd\u62a4 Elasticsearch \u96c6\u7fa4\u3002")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"password"),(0,r.kt)("td",{parentName:"tr",align:"left"},"\u53ef\u9009"),(0,r.kt)("td",{parentName:"tr",align:"left"},"\u662f"),(0,r.kt)("td",{parentName:"tr",align:"left"},"(none)"),(0,r.kt)("td",{parentName:"tr",align:"left"},"String"),(0,r.kt)("td",{parentName:"tr",align:"left"},"\u7528\u4e8e\u8fde\u63a5 Elasticsearch \u5b9e\u4f8b\u7684\u5bc6\u7801\u3002\u5982\u679c\u914d\u7f6e\u4e86username\uff0c\u5219\u6b64\u9009\u9879\u4e5f\u5fc5\u987b\u914d\u7f6e\u4e3a\u975e\u7a7a\u5b57\u7b26\u4e32\u3002")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"failure-handler"),(0,r.kt)("td",{parentName:"tr",align:"left"},"\u53ef\u9009"),(0,r.kt)("td",{parentName:"tr",align:"left"},"\u662f"),(0,r.kt)("td",{parentName:"tr",align:"left"},"fail"),(0,r.kt)("td",{parentName:"tr",align:"left"},"String"),(0,r.kt)("td",{parentName:"tr",align:"left"},"\u5bf9 Elasticsearch \u8bf7\u6c42\u5931\u8d25\u60c5\u51b5\u4e0b\u7684\u5931\u8d25\u5904\u7406\u7b56\u7565\u3002\u6709\u6548\u7b56\u7565\u4e3a\uff1a",(0,r.kt)("br",null),(0,r.kt)("strong",{parentName:"td"},"fail"),"\uff1a\u5982\u679c\u8bf7\u6c42\u5931\u8d25\u5e76\u56e0\u6b64\u5bfc\u81f4\u4f5c\u4e1a\u5931\u8d25\uff0c\u5219\u629b\u51fa\u5f02\u5e38\u3002",(0,r.kt)("br",null),(0,r.kt)("strong",{parentName:"td"},"ignore"),"\uff1a\u5ffd\u7565\u5931\u8d25\u5e76\u653e\u5f03\u8bf7\u6c42\u3002",(0,r.kt)("br",null),(0,r.kt)("strong",{parentName:"td"},"retry-rejected"),"\uff1a\u91cd\u65b0\u6dfb\u52a0\u7531\u4e8e\u961f\u5217\u5bb9\u91cf\u9971\u548c\u800c\u5931\u8d25\u7684\u8bf7\u6c42\u3002",(0,r.kt)("br",null),(0,r.kt)("strong",{parentName:"td"},"\u81ea\u5b9a\u4e49\u7c7b\u540d\u79f0"),"\uff1a\u4f7f\u7528 ",(0,r.kt)("inlineCode",{parentName:"td"},"ActionRequestFailureHandler")," \u7684\u5b50\u7c7b\u8fdb\u884c\u5931\u8d25\u5904\u7406\u3002")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"sink.flush-on-checkpoint"),(0,r.kt)("td",{parentName:"tr",align:"left"},"\u53ef\u9009"),(0,r.kt)("td",{parentName:"tr",align:"left"}),(0,r.kt)("td",{parentName:"tr",align:"left"},"true"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Boolean"),(0,r.kt)("td",{parentName:"tr",align:"left"},"\u662f\u5426\u5728 checkpoint \u65f6\u6267\u884c flush\u3002\u7981\u7528\u540e\uff0c\u5728 checkpoint \u65f6 sink \u5c06\u4e0d\u4f1a\u7b49\u5f85\u6240\u6709\u7684 pending \u8bf7\u6c42\u88ab Elasticsearch \u786e\u8ba4\u3002\u56e0\u6b64\uff0csink \u4e0d\u4f1a\u4e3a\u8bf7\u6c42\u7684 ",(0,r.kt)("strong",{parentName:"td"},"at-least-once")," \u4ea4\u4ed8\u63d0\u4f9b\u4efb\u4f55\u6709\u529b\u4fdd\u8bc1\u3002")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"sink.bulk-flush.max-actions"),(0,r.kt)("td",{parentName:"tr",align:"left"},"\u53ef\u9009"),(0,r.kt)("td",{parentName:"tr",align:"left"},"\u662f"),(0,r.kt)("td",{parentName:"tr",align:"left"},"1000"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Integer"),(0,r.kt)("td",{parentName:"tr",align:"left"},"\u6bcf\u4e2a\u6279\u91cf\u8bf7\u6c42\u7684\u6700\u5927\u7f13\u51b2\u64cd\u4f5c\u6570\u3002 \u53ef\u4ee5\u8bbe\u7f6e\u4e3a",(0,r.kt)("strong",{parentName:"td"},"0"),"\u6765\u7981\u7528\u5b83\u3002")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"sink.bulk-flush.max-size"),(0,r.kt)("td",{parentName:"tr",align:"left"},"\u53ef\u9009"),(0,r.kt)("td",{parentName:"tr",align:"left"},"\u662f"),(0,r.kt)("td",{parentName:"tr",align:"left"},"2mb"),(0,r.kt)("td",{parentName:"tr",align:"left"},"MemorySize"),(0,r.kt)("td",{parentName:"tr",align:"left"},"\u6bcf\u4e2a\u6279\u91cf\u8bf7\u6c42\u7684\u7f13\u51b2\u64cd\u4f5c\u5728\u5185\u5b58\u4e2d\u7684\u6700\u5927\u503c\u3002\u5355\u4f4d\u5fc5\u987b\u4e3a ",(0,r.kt)("strong",{parentName:"td"},"MB"),"\u3002 \u53ef\u4ee5\u8bbe\u7f6e\u4e3a",(0,r.kt)("strong",{parentName:"td"},"0"),"\u6765\u7981\u7528\u5b83\u3002")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"sink.bulk-flush.interval"),(0,r.kt)("td",{parentName:"tr",align:"left"},"\u53ef\u9009"),(0,r.kt)("td",{parentName:"tr",align:"left"},"\u662f"),(0,r.kt)("td",{parentName:"tr",align:"left"},"1s"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Duration"),(0,r.kt)("td",{parentName:"tr",align:"left"},"flush \u7f13\u51b2\u64cd\u4f5c\u7684\u95f4\u9694\u3002 \u53ef\u4ee5\u8bbe\u7f6e\u4e3a",(0,r.kt)("strong",{parentName:"td"},"0"),"\u6765\u7981\u7528\u5b83\u3002\u6ce8\u610f\uff0c",(0,r.kt)("strong",{parentName:"td"},"sink.bulk-flush.max-size"),"\u548c",(0,r.kt)("strong",{parentName:"td"},"sink.bulk-flush.max-actions"),"\u90fd\u8bbe\u7f6e\u4e3a",(0,r.kt)("strong",{parentName:"td"},"0"),"\u7684\u8fd9\u79cd flush \u95f4\u9694\u8bbe\u7f6e\u5141\u8bb8\u5bf9\u7f13\u51b2\u64cd\u4f5c\u8fdb\u884c\u5b8c\u5168\u5f02\u6b65\u5904\u7406\u3002")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"sink.bulk-flush.backoff.strategy"),(0,r.kt)("td",{parentName:"tr",align:"left"},"\u53ef\u9009"),(0,r.kt)("td",{parentName:"tr",align:"left"},"\u662f"),(0,r.kt)("td",{parentName:"tr",align:"left"},"DISABLED"),(0,r.kt)("td",{parentName:"tr",align:"left"},"String"),(0,r.kt)("td",{parentName:"tr",align:"left"},"\u6307\u5b9a\u5728\u7531\u4e8e\u4e34\u65f6\u8bf7\u6c42\u9519\u8bef\u5bfc\u81f4\u4efb\u4f55 flush \u64cd\u4f5c\u5931\u8d25\u65f6\u5982\u4f55\u6267\u884c\u91cd\u8bd5\u3002\u6709\u6548\u7b56\u7565\u4e3a\uff1a",(0,r.kt)("br",null),(0,r.kt)("strong",{parentName:"td"},"DISABLED"),"\uff1a\u4e0d\u6267\u884c\u91cd\u8bd5\uff0c\u5373\u7b2c\u4e00\u6b21\u8bf7\u6c42\u9519\u8bef\u540e\u5931\u8d25\u3002",(0,r.kt)("br",null),(0,r.kt)("strong",{parentName:"td"},"CONSTANT"),"\uff1a\u4ee5\u6307\u5b9a\u7684\u91cd\u8bd5\u5ef6\u8fdf\u65f6\u95f4\u95f4\u9694\u6765\u8fdb\u884c\u91cd\u8bd5\u3002",(0,r.kt)("br",null),(0,r.kt)("strong",{parentName:"td"},"EXPONENTIAL"),"\uff1a\u5148\u7b49\u5f85\u56de\u9000\u5ef6\u8fdf\uff0c\u7136\u540e\u5728\u91cd\u8bd5\u4e4b\u95f4\u6307\u6570\u9012\u589e\u5ef6\u8fdf\u65f6\u95f4\u3002")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"sink.bulk-flush.backoff.max-retries"),(0,r.kt)("td",{parentName:"tr",align:"left"},"\u53ef\u9009"),(0,r.kt)("td",{parentName:"tr",align:"left"},"\u662f"),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("strong",{parentName:"td"},"flink-1.13.x"),"\uff1a8",(0,r.kt)("br",null),(0,r.kt)("strong",{parentName:"td"},"flink-1.15.x"),"\uff1a(none)"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Integer"),(0,r.kt)("td",{parentName:"tr",align:"left"},"\u6700\u5927\u56de\u9000\u91cd\u8bd5\u6b21\u6570\u3002")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"sink.bulk-flush.backoff.delay"),(0,r.kt)("td",{parentName:"tr",align:"left"},"\u53ef\u9009"),(0,r.kt)("td",{parentName:"tr",align:"left"},"\u662f"),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("strong",{parentName:"td"},"flink-1.13.x"),"\uff1a50ms",(0,r.kt)("br",null),(0,r.kt)("strong",{parentName:"td"},"flink-1.15.x"),"\uff1a(none)"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Duration"),(0,r.kt)("td",{parentName:"tr",align:"left"},"\u6bcf\u6b21\u56de\u9000\u5c1d\u8bd5\u4e4b\u95f4\u7684\u5ef6\u8fdf\u3002\u5bf9\u4e8e ",(0,r.kt)("strong",{parentName:"td"},"CONSTANT")," \u56de\u9000\u7b56\u7565\uff0c\u8be5\u503c\u662f\u6bcf\u6b21\u91cd\u8bd5\u4e4b\u95f4\u7684\u5ef6\u8fdf\u3002\u5bf9\u4e8e ",(0,r.kt)("strong",{parentName:"td"},"EXPONENTIAL")," \u56de\u9000\u7b56\u7565\uff0c\u8be5\u503c\u662f\u521d\u59cb\u7684\u5ef6\u8fdf\u3002")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("strong",{parentName:"td"},"\u5728 flink-1.15.x \u4e2d\u88ab\u5220\u9664"),(0,r.kt)("br",null),"connection.max-retry-timeout"),(0,r.kt)("td",{parentName:"tr",align:"left"},"\u53ef\u9009"),(0,r.kt)("td",{parentName:"tr",align:"left"},"\u662f"),(0,r.kt)("td",{parentName:"tr",align:"left"},"(none)"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Duration"),(0,r.kt)("td",{parentName:"tr",align:"left"},"\u6700\u5927\u91cd\u8bd5\u8d85\u65f6\u65f6\u95f4\u3002")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"connection.path-prefix"),(0,r.kt)("td",{parentName:"tr",align:"left"},"\u53ef\u9009"),(0,r.kt)("td",{parentName:"tr",align:"left"},"\u662f"),(0,r.kt)("td",{parentName:"tr",align:"left"},"(none)"),(0,r.kt)("td",{parentName:"tr",align:"left"},"String"),(0,r.kt)("td",{parentName:"tr",align:"left"},"\u6dfb\u52a0\u5230\u6bcf\u4e2a REST \u901a\u4fe1\u4e2d\u7684\u524d\u7f00\u5b57\u7b26\u4e32\uff0c\u4f8b\u5982\uff0c**/v")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("strong",{parentName:"td"},"\u4ece Flink-1.15.x \u5f00\u59cb\u652f\u6301"),(0,r.kt)("br",null),"connection.request-timeout"),(0,r.kt)("td",{parentName:"tr",align:"left"},"\u53ef\u9009"),(0,r.kt)("td",{parentName:"tr",align:"left"},"\u662f"),(0,r.kt)("td",{parentName:"tr",align:"left"},"(none)"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Duration"),(0,r.kt)("td",{parentName:"tr",align:"left"},"\u8bf7\u6c42\u8fde\u63a5\u7684\u8d85\u65f6\u65f6\u95f4\uff0c\u5355\u4f4d\uff1a\u6beb\u79d2\uff0c\u6570\u503c\u5fc5\u987b\u5927\u4e8e\u7b49\u4e8e0\u3002\u8bbe\u7f6e\u4e3a",(0,r.kt)("strong",{parentName:"td"},"0"),"\uff0c\u8868\u793a\u8d85\u65f6\u65f6\u95f4\u65e0\u9650\u5927\u3002")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("strong",{parentName:"td"},"\u4ece Flink-1.15.x \u5f00\u59cb\u652f\u6301"),(0,r.kt)("br",null),"connection.timeout"),(0,r.kt)("td",{parentName:"tr",align:"left"},"\u53ef\u9009"),(0,r.kt)("td",{parentName:"tr",align:"left"},"\u662f"),(0,r.kt)("td",{parentName:"tr",align:"left"},"(none)"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Duration"),(0,r.kt)("td",{parentName:"tr",align:"left"},"\u5efa\u7acb\u8fde\u63a5\u4f7f\u7528\u7684\u8d85\u65f6\u65f6\u95f4\uff0c\u5355\u4f4d\uff1a\u6beb\u79d2\uff0c\u6570\u503c\u5fc5\u987b\u5927\u4e8e\u7b49\u4e8e0\u3002\u8bbe\u7f6e\u4e3a",(0,r.kt)("strong",{parentName:"td"},"0"),"\uff0c\u8868\u793a\u8d85\u65f6\u65f6\u95f4\u65e0\u9650\u5927\u3002")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("strong",{parentName:"td"},"\u4ece Flink-1.15.x \u5f00\u59cb\u652f\u6301"),(0,r.kt)("br",null),"socket.timeout"),(0,r.kt)("td",{parentName:"tr",align:"left"},"\u53ef\u9009"),(0,r.kt)("td",{parentName:"tr",align:"left"},"\u662f"),(0,r.kt)("td",{parentName:"tr",align:"left"},"(none)"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Duration"),(0,r.kt)("td",{parentName:"tr",align:"left"},"socket \u7b49\u5f85\u6570\u636e\u7684\u8d85\u65f6\u65f6\u95f4\uff08SO_TIMEOUT\uff09\uff0c\u6362\u53e5\u8bdd\u8bf4\uff0c\u4e24\u4e2a\u8fde\u7eed\u6570\u636e\u5305\u4e4b\u95f4\u4e0d\u6d3b\u8dc3\u7684\u6700\u5927\u65f6\u95f4\uff0c\u6570\u503c\u5fc5\u987b\u5927\u4e8e\u7b49\u4e8e0\u3002\u8bbe\u7f6e\u4e3a",(0,r.kt)("strong",{parentName:"td"},"0"),"\uff0c\u8868\u793a\u8d85\u65f6\u65f6\u95f4\u65e0\u9650\u5927\u3002")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"format"),(0,r.kt)("td",{parentName:"tr",align:"left"},"\u53ef\u9009"),(0,r.kt)("td",{parentName:"tr",align:"left"},"\u5426"),(0,r.kt)("td",{parentName:"tr",align:"left"},"json"),(0,r.kt)("td",{parentName:"tr",align:"left"},"String"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Elasticsearch \u8fde\u63a5\u5668\u652f\u6301\u6307\u5b9a\u683c\u5f0f\u3002\u8be5\u683c\u5f0f\u5fc5\u987b\u751f\u6210\u4e00\u4e2a\u6709\u6548\u7684 json \u6587\u6863\u3002 \u9ed8\u8ba4\u4f7f\u7528\u5185\u7f6e\u7684 ",(0,r.kt)("strong",{parentName:"td"},"json")," \u683c\u5f0f\u3002\u66f4\u591a\u8be6\u7ec6\u4fe1\u606f\uff0c\u8bf7\u53c2\u9605 JSON Format \u9875\u9762\u3002")))),(0,r.kt)("h2",{id:"\u7279\u6027"},"\u7279\u6027"),(0,r.kt)("h3",{id:"key-\u5904\u7406"},"Key \u5904\u7406"),(0,r.kt)("p",null,"Elasticsearch sink \u53ef\u4ee5\u6839\u636e\u662f\u5426\u5b9a\u4e49\u4e86\u4e3b\u952e\u6765\u786e\u5b9a\u662f\u5728 ",(0,r.kt)("inlineCode",{parentName:"p"},"upsert")," \u6a21\u5f0f\u8fd8\u662f ",(0,r.kt)("inlineCode",{parentName:"p"},"append")," \u6a21\u5f0f\u4e0b\u5de5\u4f5c\u3002\n\u5982\u679c\u5b9a\u4e49\u4e86\u4e3b\u952e\uff0cElasticsearch sink \u5c06\u4ee5 ",(0,r.kt)("inlineCode",{parentName:"p"},"upsert")," \u6a21\u5f0f\u5de5\u4f5c\uff0c\u8be5\u6a21\u5f0f\u53ef\u4ee5\u6d88\u8d39\u5305\u542b ",(0,r.kt)("strong",{parentName:"p"},"UPDATE/DELETE")," \u7684\u6d88\u606f\u3002 \u5982\u679c\u672a\u5b9a\u4e49\u4e3b\u952e\uff0cElasticsearch sink \u5c06\u4ee5 ",(0,r.kt)("inlineCode",{parentName:"p"},"append")," \u6a21\u5f0f\u5de5\u4f5c\uff0c\u8be5\u6a21\u5f0f\u53ea\u80fd\u6d88\u8d39\u5305\u542b ",(0,r.kt)("strong",{parentName:"p"},"INSERT")," \u7684\u6d88\u606f\u3002"),(0,r.kt)("p",null,"\u5728 Elasticsearch \u8fde\u63a5\u5668\u4e2d\uff0c\u4e3b\u952e\u7528\u4e8e\u8ba1\u7b97 Elasticsearch \u7684\u6587\u6863 id\uff0c\u6587\u6863 id \u4e3a\u6700\u591a ",(0,r.kt)("strong",{parentName:"p"},"512")," \u5b57\u8282\u4e14\u4e0d\u5305\u542b\u7a7a\u683c\u7684\u5b57\u7b26\u4e32\u3002\nElasticsearch \u8fde\u63a5\u5668\u901a\u8fc7\u4f7f\u7528 ",(0,r.kt)("strong",{parentName:"p"},"document-id.key-delimiter")," \u6307\u5b9a\u7684\u952e\u5206\u9694\u7b26\u6309\u7167 ",(0,r.kt)("inlineCode",{parentName:"p"},"DDL")," \u4e2d\u5b9a\u4e49\u7684\u987a\u5e8f\u8fde\u63a5\u6240\u6709\u4e3b\u952e\u5b57\u6bb5\uff0c\u4e3a\u6bcf\u4e00\u884c\u8bb0\u5f55\u751f\u6210\u4e00\u4e2a\u6587\u6863 ID \u5b57\u7b26\u4e32\u3002\n\u67d0\u4e9b\u7c7b\u578b\u4e0d\u5141\u8bb8\u4f5c\u4e3a\u4e3b\u952e\u5b57\u6bb5\uff0c\u56e0\u4e3a\u5b83\u4eec\u6ca1\u6709\u5bf9\u5e94\u7684\u5b57\u7b26\u4e32\u8868\u793a\u5f62\u5f0f\uff0c\u4f8b\u5982\uff0c",(0,r.kt)("strong",{parentName:"p"},"BYTES"),"\uff0c",(0,r.kt)("strong",{parentName:"p"},"ROW"),"\uff0c",(0,r.kt)("strong",{parentName:"p"},"ARRAY"),"\uff0c",(0,r.kt)("strong",{parentName:"p"},"MAP")," \u7b49\u3002 \u5982\u679c\u672a\u6307\u5b9a\u4e3b\u952e\uff0cElasticsearch \u5c06\u81ea\u52a8\u751f\u6210\u6587\u6863 id\u3002"),(0,r.kt)("p",null,"\u6709\u5173 ",(0,r.kt)("inlineCode",{parentName:"p"},"PRIMARY KEY")," \u8bed\u6cd5\u7684\u66f4\u591a\u8be6\u7ec6\u4fe1\u606f\uff0c\u8bf7\u53c2\u89c1 ",(0,r.kt)("a",{parentName:"p",href:"../syntax/4-create"},"CREATE TABLE DDL"),"\u3002"),(0,r.kt)("h3",{id:"\u52a8\u6001\u7d22\u5f15"},"\u52a8\u6001\u7d22\u5f15"),(0,r.kt)("p",null,"Elasticsearch sink \u540c\u65f6\u652f\u6301\u9759\u6001\u7d22\u5f15\u548c\u52a8\u6001\u7d22\u5f15\u3002"),(0,r.kt)("p",null,"\u5982\u679c\u60f3\u4f7f\u7528\u9759\u6001\u7d22\u5f15\uff0c\u5219 index \u9009\u9879\u503c\u5e94\u4e3a\u7eaf\u5b57\u7b26\u4e32\uff0c\u4f8b\u5982 ",(0,r.kt)("strong",{parentName:"p"},"myusers"),"\uff0c\u6240\u6709\u8bb0\u5f55\u90fd\u5c06\u88ab\u5199\u5165\u5230 ",(0,r.kt)("strong",{parentName:"p"},"myusers")," \u7d22\u5f15\u4e2d\u3002"),(0,r.kt)("p",null,"\u5982\u679c\u60f3\u4f7f\u7528\u52a8\u6001\u7d22\u5f15\uff0c\u4f60\u53ef\u4ee5\u4f7f\u7528 {field_name} \u6765\u5f15\u7528\u8bb0\u5f55\u4e2d\u7684\u5b57\u6bb5\u503c\u6765\u52a8\u6001\u751f\u6210\u76ee\u6807\u7d22\u5f15\u3002\n\u4f60\u4e5f\u53ef\u4ee5\u4f7f\u7528 ",(0,r.kt)("strong",{parentName:"p"},"{field_name|date_format_string}")," \u5c06 ",(0,r.kt)("strong",{parentName:"p"},"TIMESTAMP/DATE/TIME")," \u7c7b\u578b\u7684\u5b57\u6bb5\u503c\u8f6c\u6362\u4e3a ",(0,r.kt)("strong",{parentName:"p"},"date_format_string")," \u6307\u5b9a\u7684\u683c\u5f0f\u3002 "),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"date_format_string")," \u4e0e Java \u7684 ",(0,r.kt)("strong",{parentName:"p"},"DateTimeFormatter")," \u517c\u5bb9\u3002\n\u4f8b\u5982\uff0c\u5982\u679c\u9009\u9879\u503c\u8bbe\u7f6e\u4e3a ",(0,r.kt)("strong",{parentName:"p"},"myusers-{log_ts|yyyy-MM-dd}"),"\uff0c\u5219 ",(0,r.kt)("inlineCode",{parentName:"p"},"log_ts")," \u5b57\u6bb5\u503c\u4e3a ",(0,r.kt)("strong",{parentName:"p"},"2020-03-27 12:25:55")," \u7684\u8bb0\u5f55\u5c06\u88ab\u5199\u5165\u5230 ",(0,r.kt)("strong",{parentName:"p"},"myusers-2020-03-27")," \u7d22\u5f15\u4e2d\u3002"),(0,r.kt)("h2",{id:"\u6570\u636e\u7c7b\u578b\u6620\u5c04"},"\u6570\u636e\u7c7b\u578b\u6620\u5c04"),(0,r.kt)("p",null,"Elasticsearch \u5c06\u6587\u6863\u5b58\u50a8\u5728 JSON \u5b57\u7b26\u4e32\u4e2d\u3002\u56e0\u6b64\u6570\u636e\u7c7b\u578b\u6620\u5c04\u4ecb\u4e8e Flink \u6570\u636e\u7c7b\u578b\u548c JSON \u6570\u636e\u7c7b\u578b\u4e4b\u95f4\u3002\nFlink \u4e3a Elasticsearch \u8fde\u63a5\u5668\u4f7f\u7528\u5185\u7f6e\u7684 ",(0,r.kt)("strong",{parentName:"p"},"json")," \u683c\u5f0f\u3002\u66f4\u591a\u7c7b\u578b\u6620\u5c04\u7684\u8be6\u7ec6\u4fe1\u606f\uff0c\u8bf7\u53c2\u9605 ",(0,r.kt)("a",{parentName:"p",href:"../format/3-json"},"JSON Format")," \u9875\u9762\u3002"))}d.isMDXComponent=!0}}]);