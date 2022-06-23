"use strict";(self.webpackChunkstreamx_website=self.webpackChunkstreamx_website||[]).push([[922],{3905:(e,t,n)=>{n.d(t,{Zo:()=>k,kt:()=>d});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var o=r.createContext({}),p=function(e){var t=r.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},k=function(e){var t=p(e.components);return r.createElement(o.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,o=e.parentName,k=s(e,["components","mdxType","originalType","parentName"]),u=p(n),d=a,m=u["".concat(o,".").concat(d)]||u[d]||c[d]||l;return n?r.createElement(m,i(i({ref:t},k),{},{components:n})):r.createElement(m,i({ref:t},k))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,i=new Array(l);i[0]=u;var s={};for(var o in t)hasOwnProperty.call(t,o)&&(s[o]=t[o]);s.originalType=e,s.mdxType="string"==typeof e?e:a,i[1]=s;for(var p=2;p<l;p++)i[p]=n[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},5:(e,t,n)=>{n.r(t),n.d(t,{contentTitle:()=>i,default:()=>k,frontMatter:()=>l,metadata:()=>s,toc:()=>o});var r=n(7462),a=(n(7294),n(3905));const l={id:"k8s-dev",title:"Flink K8s \u96c6\u6210\u652f\u6301",sidebar_position:1},i=void 0,s={unversionedId:"flink-k8s/k8s-dev",id:"flink-k8s/k8s-dev",title:"Flink K8s \u96c6\u6210\u652f\u6301",description:"StreamX Flink Kubernetes \u57fa\u4e8e Flink Native Kubernetes \u5b9e\u73b0\uff0c\u652f\u6301\u4ee5\u4e0b Flink \u8fd0\u884c\u6a21\u5f0f\uff1a",source:"@site/docs/flink-k8s/1-deployment.md",sourceDirName:"flink-k8s",slug:"/flink-k8s/k8s-dev",permalink:"/docs/flink-k8s/k8s-dev",editUrl:"https://github.com/streamxhub/streamx-website/edit/dev/docs/flink-k8s/1-deployment.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{id:"k8s-dev",title:"Flink K8s \u96c6\u6210\u652f\u6301",sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"\u9ad8\u7ea7\u6269\u5c55",permalink:"/docs/advanced/"},next:{title:"K8s PVC \u8d44\u6e90\u4f7f\u7528",permalink:"/docs/flink-k8s/k8s-pvc-integration"}},o=[{value:"\u989d\u5916\u73af\u5883\u8981\u6c42",id:"\u989d\u5916\u73af\u5883\u8981\u6c42",children:[],level:2},{value:"\u96c6\u6210\u51c6\u5907",id:"\u96c6\u6210\u51c6\u5907",children:[{value:"Kubernetes \u8fde\u63a5\u914d\u7f6e",id:"kubernetes-\u8fde\u63a5\u914d\u7f6e",children:[],level:3},{value:"Kubernetes RBAC \u914d\u7f6e",id:"kubernetes-rbac-\u914d\u7f6e",children:[],level:3},{value:"Docker \u8fdc\u7a0b\u5bb9\u5668\u670d\u52a1\u914d\u7f6e",id:"docker-\u8fdc\u7a0b\u5bb9\u5668\u670d\u52a1\u914d\u7f6e",children:[],level:3}],level:2},{value:"\u4efb\u52a1\u63d0\u4ea4",id:"\u4efb\u52a1\u63d0\u4ea4",children:[{value:"Application \u4efb\u52a1\u53d1\u5e03",id:"application-\u4efb\u52a1\u53d1\u5e03",children:[],level:3},{value:"Session \u4efb\u52a1\u53d1\u5e03",id:"session-\u4efb\u52a1\u53d1\u5e03",children:[],level:3}],level:2},{value:"\u76f8\u5173\u53c2\u6570\u914d\u7f6e",id:"\u76f8\u5173\u53c2\u6570\u914d\u7f6e",children:[],level:2}],p={toc:o};function k(e){let{components:t,...l}=e;return(0,a.kt)("wrapper",(0,r.Z)({},p,l,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"StreamX Flink Kubernetes \u57fa\u4e8e ",(0,a.kt)("a",{parentName:"p",href:"https://ci.apache.org/projects/flink/flink-docs-stable/docs/deployment/resource-providers/native_kubernetes/"},"Flink Native Kubernetes")," \u5b9e\u73b0\uff0c\u652f\u6301\u4ee5\u4e0b Flink \u8fd0\u884c\u6a21\u5f0f\uff1a"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Native-Kubernetes Application"),(0,a.kt)("li",{parentName:"ul"},"Native-Kubernetes Session")),(0,a.kt)("p",null,"\u5355\u4e2a StreamX \u5b9e\u4f8b\u5f53\u524d\u53ea\u652f\u6301\u5355\u4e2a Kubernetes \u96c6\u7fa4\uff0c\u5982\u679c\u60a8\u6709\u591a Kubernetes \u652f\u6301\u7684\u8bc9\u6c42\uff0c\u6b22\u8fce\u63d0\u4ea4\u76f8\u5173\u7684 ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/streamxhub/streamx/issues"},"Fearure Request Issue")," : )"),(0,a.kt)("br",null),(0,a.kt)("h2",{id:"\u989d\u5916\u73af\u5883\u8981\u6c42"},"\u989d\u5916\u73af\u5883\u8981\u6c42"),(0,a.kt)("p",null,"StreamX Flink-K8s \u9700\u8981\u5177\u5907\u4ee5\u4e0b\u989d\u5916\u7684\u8fd0\u884c\u73af\u5883\uff1a"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Kubernetes"),(0,a.kt)("li",{parentName:"ul"},"Maven\uff08StreamX \u8fd0\u884c\u8282\u70b9\u5177\u5907\uff09"),(0,a.kt)("li",{parentName:"ul"},"Docker\uff08StreamX \u8fd0\u884c\u8282\u70b9\u662f\u5177\u5907\uff09")),(0,a.kt)("p",null,"StreamX \u5b9e\u4f8b\u5e76\u4e0d\u9700\u8981\u5f3a\u5236\u90e8\u7f72\u5728 Kubernetes \u6240\u5728\u8282\u70b9\u4e0a\uff0c\u53ef\u4ee5\u90e8\u7f72\u5728 Kubernetes \u96c6\u7fa4\u5916\u90e8\u8282\u70b9\uff0c\u4f46\u662f\u9700\u8981\u8be5 StreamX \u90e8\u7f72\u8282\u70b9\u4e0e Kubernetes \u96c6\u7fa4",(0,a.kt)("strong",{parentName:"p"},"\u4fdd\u6301\u7f51\u7edc\u901a\u4fe1\u7545\u901a"),"\u3002"),(0,a.kt)("br",null),(0,a.kt)("h2",{id:"\u96c6\u6210\u51c6\u5907"},"\u96c6\u6210\u51c6\u5907"),(0,a.kt)("h3",{id:"kubernetes-\u8fde\u63a5\u914d\u7f6e"},"Kubernetes \u8fde\u63a5\u914d\u7f6e"),(0,a.kt)("p",null,"StreamX \u76f4\u63a5\u4f7f\u7528\u7cfb\u7edf ",(0,a.kt)("inlineCode",{parentName:"p"},"\uff5e/.kube/config ")," \u4f5c\u4e3a Kubernetes \u96c6\u7fa4\u7684\u8fde\u63a5\u51ed\u8bc1\uff0c\u6700\u4e3a\u7b80\u5355\u7684\u65b9\u5f0f\u662f\u76f4\u63a5\u62f7\u8d1d Kubernetes \u8282\u70b9\u7684 ",(0,a.kt)("inlineCode",{parentName:"p"},".kube/config")," \u5230 StreamX \u8282\u70b9\u7528\u6237\u76ee\u5f55\uff0c\u5404\u4e91\u670d\u52a1\u5546 Kubernetes \u670d\u52a1\u4e5f\u90fd\u63d0\u4f9b\u4e86\u76f8\u5173\u914d\u7f6e\u7684\u5feb\u901f\u4e0b\u8f7d\u3002\u5f53\u7136\u4e3a\u4e86\u6743\u9650\u7ea6\u675f\uff0c\u4e5f\u53ef\u4ee5\u81ea\u884c\u751f\u6210\u5bf9\u5e94 k8s \u81ea\u5b9a\u4e49\u8d26\u6237\u7684 config\u3002"),(0,a.kt)("p",null,"\u5b8c\u6210\u540e\uff0c\u53ef\u4ee5\u901a\u8fc7 StreamX \u6240\u5728\u673a\u5668\u7684 kubectl \u5feb\u901f\u68c0\u67e5\u76ee\u6807 Kubernetes \u96c6\u7fa4\u7684\u8fde\u901a\u6027\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"kubectl cluster-info\n")),(0,a.kt)("h3",{id:"kubernetes-rbac-\u914d\u7f6e"},"Kubernetes RBAC \u914d\u7f6e"),(0,a.kt)("p",null,"\u540c\u6837\u7684\uff0c\u9700\u8981\u51c6\u5907 Flink \u6240\u4f7f\u7528 K8s Namespace \u7684 RBAC \u8d44\u6e90\uff0c\u8bf7\u53c2\u8003 Flink-Docs\uff1a",(0,a.kt)("a",{parentName:"p",href:"https://ci.apache.org/projects/flink/flink-docs-stable/docs/deployment/resource-providers/native_kubernetes/#rbac"},"https://ci.apache.org/projects/flink/flink-docs-stable/docs/deployment/resource-providers/native_kubernetes/#rbac")),(0,a.kt)("p",null,"\u5047\u8bbe\u4f7f\u7528 Flink Namespace \u4e3a ",(0,a.kt)("inlineCode",{parentName:"p"},"flink-dev"),"\uff0c\u4e0d\u660e\u786e\u6307\u5b9a K8s \u8d26\u6237\uff0c\u53ef\u4ee5\u5982\u4e0b\u521b\u5efa\u7b80\u5355 clusterrolebinding \u8d44\u6e90\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"kubectl create clusterrolebinding flink-role-binding-default --clusterrole=edit --serviceaccount=flink-dev:default\n")),(0,a.kt)("h3",{id:"docker-\u8fdc\u7a0b\u5bb9\u5668\u670d\u52a1\u914d\u7f6e"},"Docker \u8fdc\u7a0b\u5bb9\u5668\u670d\u52a1\u914d\u7f6e"),(0,a.kt)("p",null,"\u5728 StreamX Setting \u9875\u9762\uff0c\u914d\u7f6e\u76ee\u6807 Kubernetes \u96c6\u7fa4\u6240\u4f7f\u7528\u7684 Docker \u5bb9\u5668\u670d\u52a1\u7684\u8fde\u63a5\u4fe1\u606f\u3002"),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"docker register setting",src:n(7708).Z})),(0,a.kt)("p",null,"\u5728\u8fdc\u7a0b Docker \u5bb9\u5668\u670d\u52a1\u521b\u5efa\u4e00\u4e2a\u540d\u4e3a ",(0,a.kt)("inlineCode",{parentName:"p"},"streamx")," \u7684 Namespace \uff0c\u4e3a StreamX \u81ea\u52a8\u6784\u5efa\u7684 Flink image \u63a8\u9001\u7a7a\u95f4\uff0c\u8bf7\u786e\u4fdd\u4f7f\u7528\u7684 Docker Register User \u5177\u6709\u8be5  Namespace \u7684 ",(0,a.kt)("inlineCode",{parentName:"p"},"pull"),"/",(0,a.kt)("inlineCode",{parentName:"p"},"push")," \u6743\u9650\u3002"),(0,a.kt)("p",null,"\u53ef\u4ee5\u5728 StreamX \u6240\u5728\u8282\u70b9\u901a\u8fc7 docker command \u7b80\u5355\u6d4b\u8bd5\u6743\u9650\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"# verify access\ndocker login --username=<your_username> <your_register_addr>\n# verify push permission\ndocker pull busybox\ndocker tag busybox <your_register_addr>/streamx/busybox\ndocker push <your_register_addr>/streamx/busybox\n# verify pull permission\ndocker pull <your_register_addr>/streamx/busybox\n")),(0,a.kt)("br",null),(0,a.kt)("h2",{id:"\u4efb\u52a1\u63d0\u4ea4"},"\u4efb\u52a1\u63d0\u4ea4"),(0,a.kt)("h3",{id:"application-\u4efb\u52a1\u53d1\u5e03"},"Application \u4efb\u52a1\u53d1\u5e03"),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"k8s application submit",src:n(829).Z})),(0,a.kt)("p",null,"\u5176\u4e2d\u9700\u8981\u8bf4\u660e\u7684\u53c2\u6570\u5982\u4e0b\uff1a"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Flink Base Docker Image"),"\uff1a \u57fa\u7840 Flink Docker \u955c\u50cf\u7684 Tag\uff0c\u53ef\u4ee5\u76f4\u63a5\u4ece ",(0,a.kt)("a",{parentName:"li",href:"https://hub.docker.com/_/flink"},"DockerHub - offical/flink")," \u83b7\u53d6\uff0c\u4e5f\u652f\u6301\u7528\u6237\u79c1\u6709\u7684\u5e95\u5c42\u955c\u50cf\uff0c\u6b64\u65f6\u5728 setting \u8bbe\u7f6e Docker Register Account \u9700\u8981\u5177\u5907\u8be5\u79c1\u6709\u955c\u50cf \t",(0,a.kt)("inlineCode",{parentName:"li"},"pull")," \u6743\u9650\u3002"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Rest-Service Exposed Type"),"\uff1a\u5bf9\u5e94 Flink \u539f\u751f ",(0,a.kt)("a",{parentName:"li",href:"https://ci.apache.org/projects/flink/flink-docs-stable/docs/deployment/config/#kubernetes"},"kubernetes.rest-service.exposed.type")," \u914d\u7f6e\uff0c\u5404\u4e2a\u5019\u9009\u503c\u8bf4\u660e\uff1a",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"ClusterIP"),"\uff1a\u9700\u8981 StreamX \u53ef\u76f4\u63a5\u8bbf\u95ee K8s \u5185\u90e8\u7f51\u7edc\uff1b"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"LoadBalancer"),"\uff1a\u9700\u8981 K8s \u63d0\u524d\u521b\u5efa LoadBalancer \u8d44\u6e90\uff0c\u4e14 Flink Namespace \u5177\u5907\u81ea\u52a8\u7ed1\u5b9a\u6743\u9650\uff0c\u540c\u65f6 StreamX \u53ef\u4ee5\u8bbf\u95ee\u8be5 LoadBalancer \u7f51\u5173\uff1b"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"NodePort"),"\uff1a\u9700\u8981 StreamX \u53ef\u4ee5\u76f4\u63a5\u8fde\u901a\u6240\u6709 K8s \u8282\u70b9\uff1b"))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Kubernetes Pod Template"),"\uff1a Flink \u81ea\u5b9a\u4e49 pod-template \u914d\u7f6e\u3002")),(0,a.kt)("p",null,"\u4efb\u52a1\u542f\u52a8\u540e\uff0c\u652f\u6301\u5728\u8be5\u4efb\u52a1\u7684 Detail \u9875\u76f4\u63a5\u8bbf\u95ee\u5bf9\u5e94\u7684 Flink Web UI \u9875\u9762\uff1a"),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"k8s app detail",src:n(4150).Z})),(0,a.kt)("h3",{id:"session-\u4efb\u52a1\u53d1\u5e03"},"Session \u4efb\u52a1\u53d1\u5e03"),(0,a.kt)("p",null,"Flink-Native-Kubernetes Session \u4efb\u52a1 K8s \u989d\u5916\u7684\u914d\u7f6e\uff08pod-template \u7b49\uff09\u5b8c\u5168\u7531\u63d0\u524d\u90e8\u7f72\u7684 Flink-Session \u96c6\u7fa4\u51b3\u5b9a\uff0c\u8bf7\u76f4\u63a5\u53c2\u8003 Flink-Doc\uff1a",(0,a.kt)("a",{parentName:"p",href:"https://ci.apache.org/projects/flink/flink-docs-stable/docs/deployment/resource-providers/native_kubernetes"},"https://ci.apache.org/projects/flink/flink-docs-stable/docs/deployment/resource-providers/native_kubernetes")),(0,a.kt)("br",null),(0,a.kt)("h2",{id:"\u76f8\u5173\u53c2\u6570\u914d\u7f6e"},"\u76f8\u5173\u53c2\u6570\u914d\u7f6e"),(0,a.kt)("p",null,"StreamX \u5728 ",(0,a.kt)("inlineCode",{parentName:"p"},"applicaton.yml"),"  Flink-K8s \u76f8\u5173\u53c2\u6570\u5982\u4e0b\uff0c\u9ed8\u8ba4\u60c5\u51b5\u4e0b\u4e0d\u9700\u8981\u989d\u5916\u8c03\u6574\u9ed8\u8ba4\u503c\u3002"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"\u914d\u7f6e\u9879"),(0,a.kt)("th",{parentName:"tr",align:null},"\u63cf\u8ff0"),(0,a.kt)("th",{parentName:"tr",align:null},"\u9ed8\u8ba4\u503c"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"streamx.docker.register.image-namespace"),(0,a.kt)("td",{parentName:"tr",align:null},"\u8fdc\u7a0b docker \u5bb9\u5668\u670d\u52a1\u4ed3\u5e93\u547d\u540d\u7a7a\u95f4\uff0c\u6784\u5efa\u7684 flink-job \u955c\u50cf\u4f1a\u63a8\u9001\u5230\u8be5\u547d\u540d\u7a7a\u95f4\u3002"),(0,a.kt)("td",{parentName:"tr",align:null},"steramx")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"streamx.flink-k8s.tracking.polling-task-timeout-sec.job-status"),(0,a.kt)("td",{parentName:"tr",align:null},"\u6bcf\u7ec4 flink \u72b6\u6001\u8ffd\u8e2a\u4efb\u52a1\u7684\u8fd0\u884c\u8d85\u65f6\u79d2\u6570"),(0,a.kt)("td",{parentName:"tr",align:null},"120")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"streamx.flink-k8s.tracking.polling-task-timeout-sec.cluster-metric"),(0,a.kt)("td",{parentName:"tr",align:null},"\u6bcf\u7ec4 flink \u6307\u6807\u8ffd\u8e2a\u4efb\u52a1\u7684\u8fd0\u884c\u8d85\u65f6\u79d2\u6570"),(0,a.kt)("td",{parentName:"tr",align:null},"120")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"streamx.flink-k8s.tracking.polling-interval-sec.job-status"),(0,a.kt)("td",{parentName:"tr",align:null},"flink \u72b6\u6001\u8ffd\u8e2a\u4efb\u52a1\u8fd0\u884c\u95f4\u9694\u79d2\u6570\uff0c\u4e3a\u4e86\u7ef4\u6301\u51c6\u786e\u6027\uff0c\u8bf7\u8bbe\u7f6e\u5728 5s \u4ee5\u4e0b\uff0c\u6700\u4f73\u8bbe\u7f6e\u5728 2-3s"),(0,a.kt)("td",{parentName:"tr",align:null},"5")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"streamx.flink-k8s.tracking.polling-interval-sec.cluster-metric"),(0,a.kt)("td",{parentName:"tr",align:null},"flink \u6307\u6807\u8ffd\u8e2a\u4efb\u52a1\u8fd0\u884c\u95f4\u9694\u79d2\u6570"),(0,a.kt)("td",{parentName:"tr",align:null},"10")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"streamx.flink-k8s.tracking.silent-state-keep-sec"),(0,a.kt)("td",{parentName:"tr",align:null},"silent \u8ffd\u8e2a\u5bb9\u9519\u65f6\u95f4\u79d2\u6570"),(0,a.kt)("td",{parentName:"tr",align:null},"60")))))}k.isMDXComponent=!0},7708:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/docker_register_setting-55ff0f03235a1708b428b016d8ccc8a2.png"},4150:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/k8s_app_detail-5ee71eb0d0e20f2c6e3009e98b3d63db.png"},829:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/k8s_application_submit-7d2a3d17220cc3048b6d5b22184f9afc.png"}}]);