"use strict";(self.webpackChunkapache_streampark_website=self.webpackChunkapache_streampark_website||[]).push([[9193],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>u});var a=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=a.createContext({}),p=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},d=function(e){var t=p(e.components);return a.createElement(s.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,s=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),m=p(n),u=i,f=m["".concat(s,".").concat(u)]||m[u]||c[u]||o;return n?a.createElement(f,r(r({ref:t},d),{},{components:n})):a.createElement(f,r({ref:t},d))}));function u(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,r=new Array(o);r[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:i,r[1]=l;for(var p=2;p<o;p++)r[p]=n[p];return a.createElement.apply(null,r)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},8949:(e,t,n)=>{n.d(t,{Z:()=>r});var a=n(7294),i=n(6010);const o="tabItem_Ymn6";function r(e){let{children:t,hidden:n,className:r}=e;return a.createElement("div",{role:"tabpanel",className:(0,i.Z)(o,r),hidden:n},t)}},5488:(e,t,n)=>{n.d(t,{Z:()=>u});var a=n(7462),i=n(7294),o=n(6010),r=n(2389),l=n(7392),s=n(7094),p=n(2466);const d="tabList__CuJ",c="tabItem_LNqP";function m(e){var t;const{lazy:n,block:r,defaultValue:m,values:u,groupId:f,className:k}=e,g=i.Children.map(e.children,(e=>{if((0,i.isValidElement)(e)&&"value"in e.props)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})),h=u??g.map((e=>{let{props:{value:t,label:n,attributes:a}}=e;return{value:t,label:n,attributes:a}})),b=(0,l.l)(h,((e,t)=>e.value===t.value));if(b.length>0)throw new Error(`Docusaurus error: Duplicate values "${b.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`);const N=null===m?m:m??(null==(t=g.find((e=>e.props.default)))?void 0:t.props.value)??g[0].props.value;if(null!==N&&!h.some((e=>e.value===N)))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${N}" but none of its children has the corresponding value. Available values are: ${h.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);const{tabGroupChoices:v,setTabGroupChoices:y}=(0,s.U)(),[C,_]=(0,i.useState)(N),w=[],{blockElementScrollPositionUntilNextRender:T}=(0,p.o5)();if(null!=f){const e=v[f];null!=e&&e!==C&&h.some((t=>t.value===e))&&_(e)}const Z=e=>{const t=e.currentTarget,n=w.indexOf(t),a=h[n].value;a!==C&&(T(t),_(a),null!=f&&y(f,String(a)))},E=e=>{var t;let n=null;switch(e.key){case"ArrowRight":{const t=w.indexOf(e.currentTarget)+1;n=w[t]??w[0];break}case"ArrowLeft":{const t=w.indexOf(e.currentTarget)-1;n=w[t]??w[w.length-1];break}}null==(t=n)||t.focus()};return i.createElement("div",{className:(0,o.Z)("tabs-container",d)},i.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.Z)("tabs",{"tabs--block":r},k)},h.map((e=>{let{value:t,label:n,attributes:r}=e;return i.createElement("li",(0,a.Z)({role:"tab",tabIndex:C===t?0:-1,"aria-selected":C===t,key:t,ref:e=>w.push(e),onKeyDown:E,onFocus:Z,onClick:Z},r,{className:(0,o.Z)("tabs__item",c,null==r?void 0:r.className,{"tabs__item--active":C===t})}),n??t)}))),n?(0,i.cloneElement)(g.filter((e=>e.props.value===C))[0],{className:"margin-top--md"}):i.createElement("div",{className:"margin-top--md"},g.map(((e,t)=>(0,i.cloneElement)(e,{key:t,hidden:e.props.value!==C})))))}function u(e){const t=(0,r.Z)();return i.createElement(m,(0,a.Z)({key:String(t)},e))}},44:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>s,default:()=>u,frontMatter:()=>l,metadata:()=>p,toc:()=>c});var a=n(7462),i=(n(7294),n(3905)),o=n(5488),r=n(8949);const l={id:"alert-conf",title:"Alert configuration",sidebar_position:3},s=void 0,p={unversionedId:"development/alert-conf",id:"development/alert-conf",title:"Alert configuration",description:"StreamPark supports a variety of alerts, mainly as follows\uff1a",source:"@site/docs/development/alert-conf.md",sourceDirName:"development",slug:"/development/alert-conf",permalink:"/docs/development/alert-conf",draft:!1,editUrl:"https://github.com/apache/incubator-streampark-website/edit/dev/docs/development/alert-conf.md",tags:[],version:"current",sidebarPosition:3,frontMatter:{id:"alert-conf",title:"Alert configuration",sidebar_position:3},sidebar:"tutorialSidebar",previous:{title:"Project Configuration",permalink:"/docs/development/config"},next:{title:"Apache Kafka Connector",permalink:"/docs/connector/Kafka-Connector"}},d={},c=[{value:"DingTalk",id:"dingtalk",level:3},{value:"Wechat",id:"wechat",level:3},{value:"Lark",id:"lark",level:3},{value:"Alert Test",id:"alert-test",level:2},{value:"Modify alert configuration:",id:"modify-alert-configuration",level:2},{value:"Use alert configuration",id:"use-alert-configuration",level:2},{value:"Delete alert configuration:",id:"delete-alert-configuration",level:2}],m={toc:c};function u(e){let{components:t,...l}=e;return(0,i.kt)("wrapper",(0,a.Z)({},m,l,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"StreamPark")," supports a variety of alerts, mainly as follows\uff1a"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"E-mail"),": Mail notification"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"DingTalk"),": DingTalk Custom Group Robot"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"WeChat"),": Enterprise WeChat Custom Group Robot"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Lark"),": Feishu Custom Group Robot")),(0,i.kt)("p",null,"StreamPark support any combination of alerts"),(0,i.kt)("admonition",{title:"Future plan",type:"info"},(0,i.kt)("ol",{parentName:"admonition"},(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("inlineCode",{parentName:"li"},"SMS notification")," and ",(0,i.kt)("inlineCode",{parentName:"li"},"webhook callback")," notification will be supported in the future\n1Test exception will be fed back to the front-end page\n:::")),(0,i.kt)("h2",{parentName:"admonition",id:"added-alert-configuration"},"Added alert configuration"),(0,i.kt)("p",{parentName:"admonition"},(0,i.kt)("inlineCode",{parentName:"p"},"Click StreamPark")," -> Setting on the left, then click ",(0,i.kt)("inlineCode",{parentName:"p"},"Alert Setting")," to enter the alert configuration.\n",(0,i.kt)("img",{alt:"alert_add_setting.png",src:n(2383).Z,width:"1290",height:"480"})),(0,i.kt)("p",{parentName:"admonition"},"Click ",(0,i.kt)("inlineCode",{parentName:"p"},"Add New")," to add alert configuration:"),(0,i.kt)("p",{parentName:"admonition"},"1.Name alert will be added\n2.Choose ",(0,i.kt)("inlineCode",{parentName:"p"},"AlertType"),", then configure the corresponding configuration item."),(0,i.kt)("p",{parentName:"admonition"},(0,i.kt)("img",{alt:"alert_add_example.png",src:n(4295).Z,width:"1290",height:"1266"})),(0,i.kt)("p",{parentName:"admonition"},"The configuration content of different alert types is as follows:"),(0,i.kt)("h3",{parentName:"admonition",id:"e-mail"},"E-mail"),(0,i.kt)("p",{parentName:"admonition"},"Firstly, choose ",(0,i.kt)("inlineCode",{parentName:"p"},"E-mail")," as the alert type.\nThen, enter ",(0,i.kt)("inlineCode",{parentName:"p"},"Alert Email")," and click ",(0,i.kt)("inlineCode",{parentName:"p"},"Submit"),".\n",(0,i.kt)("img",{alt:"alert_add_dingtalk.png",src:n(8035).Z,width:"1290",height:"553"})),(0,i.kt)("p",{parentName:"admonition"},(0,i.kt)("strong",{parentName:"p"},"Configuration instructions\uff1a")),(0,i.kt)("ol",{parentName:"admonition"},(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("inlineCode",{parentName:"li"},"Alert Email"),"\uff1a",(0,i.kt)("font",{color:"red"},(0,i.kt)("inlineCode",{parentName:"li"},"Required")),", The email address of the email notification. Multiple email\naddresses need to separate by commas \u2019 ,\u2019."))),(0,i.kt)("p",null,"To use the email alarm notification method,please configure system mail sending\ninformation: ",(0,i.kt)("inlineCode",{parentName:"p"},"Setting -> System Setting -> Sender Email Setting"),"\n",(0,i.kt)("img",{alt:"alert_conf_mail_sender.png",src:n(3223).Z,width:"1290",height:"1036"}),"\nAbove is configured using 163 mailboxes.Please fill in the specific email address according to your actual situation.\n:::"),(0,i.kt)("h3",{id:"dingtalk"},"DingTalk"),(0,i.kt)("p",null,"Firstly, choose ",(0,i.kt)("inlineCode",{parentName:"p"},"DingTalk")," as the alert type."),(0,i.kt)("p",null,"Then, Enter robot ",(0,i.kt)("inlineCode",{parentName:"p"},"DingTalk Tokens")," and other configurations, click ",(0,i.kt)("inlineCode",{parentName:"p"},"Submit"),".\n",(0,i.kt)("img",{alt:"alert_add_ding_talk.png",src:n(8317).Z,width:"1290",height:"790"})),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Configuration description\uff1a")),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("inlineCode",{parentName:"li"},"DingTalk Url"),"\uff1a",(0,i.kt)("inlineCode",{parentName:"li"},"optional")," .It is used to expose to a unified forwarding address within the company. By\ndefault, ",(0,i.kt)("inlineCode",{parentName:"li"},"https://oapi.dingtalk.com/robot/send?access_token=")," is used, and then the ",(0,i.kt)("inlineCode",{parentName:"li"},"Token")," and the\ncorresponding ",(0,i.kt)("inlineCode",{parentName:"li"},"Secret")," are assembled for verification and sent."),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("inlineCode",{parentName:"li"},"DingTalk Token"),"\uff1a",(0,i.kt)("font",{color:"red"},(0,i.kt)("inlineCode",{parentName:"li"},"Required")),".It is the default address of the group robot, and intercepts the\ncontent after ",(0,i.kt)("inlineCode",{parentName:"li"},"access_token=.")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("inlineCode",{parentName:"li"},"DingTalk User"),"\uff1a",(0,i.kt)("inlineCode",{parentName:"li"},"optional")," .Use the ",(0,i.kt)("inlineCode",{parentName:"li"},"mobile phone number")," to remind the corresponding users in the group. Multiple\nmobile phone numbers should be separated by commas \u2019 ,\u2019 ."),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("inlineCode",{parentName:"li"},"At All User"),"\uff1a",(0,i.kt)("inlineCode",{parentName:"li"},"optional")," .After it is turned on, the alarm message will be @ everyone in the group."),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("inlineCode",{parentName:"li"},"Secret Enable"),"\uff1a",(0,i.kt)("inlineCode",{parentName:"li"},"optional")," .If ",(0,i.kt)("inlineCode",{parentName:"li"},"encryption signature verification")," is enabled, the ",(0,i.kt)("inlineCode",{parentName:"li"},"Secret Token")," signature\nverification key information needs to be configured.")),(0,i.kt)("admonition",{title:"DingTalk robot application",type:"info"},(0,i.kt)("p",{parentName:"admonition"},"Please refer to ",(0,i.kt)("a",{parentName:"p",href:"https://open.dingtalk.com/document/group/custom-robot-access"},"DingTalk official documentation")," for robot application and configuration")),(0,i.kt)("h3",{id:"wechat"},"Wechat"),(0,i.kt)("p",null,"Firstly, choose ",(0,i.kt)("inlineCode",{parentName:"p"},"Wechat")," as the alert type."),(0,i.kt)("p",null,"Then, Enter robot ",(0,i.kt)("inlineCode",{parentName:"p"},"WeChat token"),", click ",(0,i.kt)("inlineCode",{parentName:"p"},"Submit"),".\n",(0,i.kt)("img",{alt:"alert_add_wecom.png",src:n(4443).Z,width:"1290",height:"609"}),"\n",(0,i.kt)("strong",{parentName:"p"},"Configuration description\uff1a")),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("inlineCode",{parentName:"li"},"WeChat token"),"\uff1a",(0,i.kt)("font",{color:"red"},(0,i.kt)("inlineCode",{parentName:"li"},"required")),".It is the default address of the group robot, and intercepts the content after ",(0,i.kt)("inlineCode",{parentName:"li"},"key="))),(0,i.kt)("admonition",{title:"Wechat robot application",type:"info"},(0,i.kt)("p",{parentName:"admonition"},"Please refer to the ","[WeChat official]"," (",(0,i.kt)("a",{parentName:"p",href:"https://developer.work.weixin.qq.com/document/path/91770"},"https://developer.work.weixin.qq.com/document/path/91770"),") for robot application and configuration")),(0,i.kt)("h3",{id:"lark"},"Lark"),(0,i.kt)("p",null,"Firstly, choose ",(0,i.kt)("inlineCode",{parentName:"p"},"Lark")," as the alert type."),(0,i.kt)("p",null,"Then, Enter robot ",(0,i.kt)("inlineCode",{parentName:"p"},"Lark Tokens")," and other configurations, click ",(0,i.kt)("inlineCode",{parentName:"p"},"Submit"),".\n",(0,i.kt)("img",{alt:"alert_add_lark.png",src:n(6249).Z,width:"1290",height:"717"})),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Configuration description\uff1a")),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("inlineCode",{parentName:"li"},"Lark Token"),"\uff1a",(0,i.kt)("font",{color:"red"},(0,i.kt)("inlineCode",{parentName:"li"},"Required")),".1. It is the default address of the group robot, intercept the content behind ",(0,i.kt)("inlineCode",{parentName:"li"},"/hook/"),"."),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("inlineCode",{parentName:"li"},"At All User"),"\uff1a",(0,i.kt)("inlineCode",{parentName:"li"},"optional")," .2.After it is turned on, the alarm message will be @ everyone in the group."),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("inlineCode",{parentName:"li"},"Secret Enable"),"\uff1a",(0,i.kt)("inlineCode",{parentName:"li"},"optional")," .3.If ",(0,i.kt)("inlineCode",{parentName:"li"},"encryption signature verification")," is enabled, the ",(0,i.kt)("inlineCode",{parentName:"li"},"Secret Token")," signature verification key information needs to be configured.")),(0,i.kt)("admonition",{title:"Lark robot application",type:"info"},(0,i.kt)("p",{parentName:"admonition"},"Please refer to the ",(0,i.kt)("a",{parentName:"p",href:"https://open.feishu.cn/document/uAjLw4CM/ukTMukTMukTM/bot-v3/bot-overview"},"official Lark official")," for robot application and configuration")),(0,i.kt)("h2",{id:"alert-test"},"Alert Test"),(0,i.kt)("p",null,"To ensure that the alert configuration information takes effect, we encourage to perform a message notification test\u2014\u2014click the ",(0,i.kt)("inlineCode",{parentName:"p"},"bell button")," on the right side of the corresponding configuration information\n",(0,i.kt)("img",{alt:"alert_send_test.png",src:n(3359).Z,width:"1290",height:"786"})),(0,i.kt)("p",null,"If the test is sent successfully, the return is as follows:\n",(0,i.kt)("img",{alt:"alert_send_test_success.png",src:n(8827).Z,width:"754",height:"320"})),(0,i.kt)(o.Z,{mdxType:"Tabs"},(0,i.kt)(r.Z,{value:"E-mail",label:"E-mail",default:!0,mdxType:"TabItem"},(0,i.kt)("p",null,(0,i.kt)("img",{alt:"alert_test_email.png",src:n(8179).Z,width:"599",height:"833"}))),(0,i.kt)(r.Z,{value:"Ding Talk",label:"Ding Talk",mdxType:"TabItem"},(0,i.kt)("p",null,(0,i.kt)("img",{alt:"alert_test_ding_talk.png",src:n(2969).Z,width:"430",height:"383"}))),(0,i.kt)(r.Z,{value:"Wechat",label:"Wechat",mdxType:"TabItem"},(0,i.kt)("p",null,(0,i.kt)("img",{alt:"alert_test_wechat.png",src:n(8916).Z,width:"411",height:"366"}))),(0,i.kt)(r.Z,{value:"Lark",label:"Lark",mdxType:"TabItem"},(0,i.kt)("p",null,(0,i.kt)("img",{alt:"alert_test_lark.png",src:n(3110).Z,width:"515",height:"405"})))),(0,i.kt)("h2",{id:"modify-alert-configuration"},"Modify alert configuration:"),(0,i.kt)("p",null,"Click the ",(0,i.kt)("inlineCode",{parentName:"p"},"edit button")," to the right of the corresponding alarm configuration information to modify the corresponding configuration information. click ",(0,i.kt)("inlineCode",{parentName:"p"},"Submit")," to save.\n",(0,i.kt)("img",{alt:"alert_edit.png",src:n(7682).Z,width:"1290",height:"759"})),(0,i.kt)("h2",{id:"use-alert-configuration"},"Use alert configuration"),(0,i.kt)("p",null,"When the ",(0,i.kt)("inlineCode",{parentName:"p"},"application")," task is created and modified, configured alert could be selected in the ",(0,i.kt)("inlineCode",{parentName:"p"},"Fault Alert Template"),"."),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"alert_application_example.png",src:n(7693).Z,width:"918",height:"263"})),(0,i.kt)("h2",{id:"delete-alert-configuration"},"Delete alert configuration:"),(0,i.kt)("p",null,"Click the ",(0,i.kt)("inlineCode",{parentName:"p"},"trash can button")," on the right side of the corresponding alarm configuration information to delete the corresponding configuration information\u3002\n",(0,i.kt)("img",{alt:"alert_conf_delete.png",src:n(6292).Z,width:"1289",height:"533"})),(0,i.kt)("p",null,"This information will be shown after the deletion is successful:\n",(0,i.kt)("img",{alt:"alert_delete_success.png",src:n(7846).Z,width:"608",height:"304"})),(0,i.kt)("admonition",{title:"warn",type:"danger"},(0,i.kt)("p",{parentName:"admonition"},"The alert configuration plans to delete  should be ensured that not used in any application configuration")))}u.isMDXComponent=!0},8317:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/alert_add_ding_talk-928261ef2118cb33e478dc3bfa073a10.png"},8035:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/alert_add_email-81218415887a4187879b1666e89157cc.png"},4295:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/alert_add_example-2a2a14f721f9277551a998908513ebef.png"},6249:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/alert_add_lark-6c2e9ecb23ee881c25fef1f589d9931b.png"},2383:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/alert_add_setting-bf59ab337d44ef1c54c8a042f1fab1b5.png"},4443:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/alert_add_wecom-e9eec0ce66ec2e2c45b6a27edab972b4.png"},7693:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/alert_application_example-c31cb94e6de97e1a980100e28ef1dfb4.png"},6292:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/alert_conf_delete-f14b8a0a61ce23702369b5ce45f2bdc4.png"},3223:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/alert_conf_mail_sender-035882efd905b0e2d6d5f2ae5378b054.png"},7846:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/alert_delete_success-f288635120384dd30095cbe5249dfb17.png"},7682:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/alert_edit-0b8f5b1224d4e4591b55f91a1bc97a7f.png"},3359:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/alert_send_test-379e9ba863857221c391511b200b481e.png"},8827:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/alert_send_test_success-f48366af5c317bcca7d98ff3156a2b17.png"},2969:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/alert_test_ding_talk-00a51843a9faf5a5dc793a12580db8af.png"},8179:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/alert_test_email-1f056ed5d15d78f4cabff362f5c2afc2.png"},3110:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/alert_test_lark-8786b1c7559ecd42b93f95a74662b9af.png"},8916:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/alert_test_wechat-2cc8875b55d42a6ad43b5094c38394ac.png"}}]);