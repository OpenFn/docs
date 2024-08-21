"use strict";(self.webpackChunk_openfn_docs=self.webpackChunk_openfn_docs||[]).push([[87118],{67863:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>u,frontMatter:()=>i,metadata:()=>l,toc:()=>p});var n=a(58168),r=(a(96540),a(15680));const i={title:"Failed Payment Notification",sidebar_label:"Failed Payment Notification",id:"Failed-Payment-Notification-2021-04-23",keywords:["library","job","expression","http","alterState"]},o=void 0,l={unversionedId:"library/jobs/auto/Failed-Payment-Notification-2021-04-23",id:"library/jobs/auto/Failed-Payment-Notification-2021-04-23",title:"Failed Payment Notification",description:"This job was provided by an OpenFn.org user via the job library API.",source:"@site/adaptors/library/jobs/auto/Failed-Payment-Notification-2021-04-23.md",sourceDirName:"library/jobs/auto",slug:"/library/jobs/auto/Failed-Payment-Notification-2021-04-23",permalink:"/adaptors/library/jobs/auto/Failed-Payment-Notification-2021-04-23",draft:!1,tags:[],version:"current",frontMatter:{title:"Failed Payment Notification",sidebar_label:"Failed Payment Notification",id:"Failed-Payment-Notification-2021-04-23",keywords:["library","job","expression","http","alterState"]},sidebar:"adaptors",previous:{title:"Request Vitas Sync",permalink:"/adaptors/library/jobs/auto/Request-Vitas-Sync-2021-05-11"},next:{title:"02b/ Initiate Payments",permalink:"/adaptors/library/jobs/auto/02b-Initiate-Payments-2019-11-19"}},s={},p=[{value:"Metadata",id:"metadata",level:2},{value:"Key Functions",id:"key-functions",level:2},{value:"Expression",id:"expression",level:2}],y={toc:p},c="wrapper";function u(e){let{components:t,...a}=e;return(0,r.yg)(c,(0,n.A)({},y,a,{components:t,mdxType:"MDXLayout"}),(0,r.yg)("em",null,"This job was provided by an OpenFn.org user via the job library API."),(0,r.yg)("h2",{id:"metadata"},"Metadata"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},"Name: Failed Payment Notification"),(0,r.yg)("li",{parentName:"ul"},"Adaptor: ",(0,r.yg)("a",{parentName:"li",href:"https://www.github.com/openfn/language-http"},(0,r.yg)("inlineCode",{parentName:"a"},"@openfn/language-http"))),(0,r.yg)("li",{parentName:"ul"},"Adaptor Version: ",(0,r.yg)("a",{parentName:"li",href:"https://www.github.com/openfn/language-http/releases/tag/v3.1.7"},(0,r.yg)("inlineCode",{parentName:"a"},"v3.1.7"))),(0,r.yg)("li",{parentName:"ul"},"Created over 3 years ago"),(0,r.yg)("li",{parentName:"ul"},"Updated over 3 years ago"),(0,r.yg)("li",{parentName:"ul"},"Score: ",(0,r.yg)("b",null,"0")," (an ",(0,r.yg)("a",{parentName:"li",href:"/adaptors/library/#library-scores"},"indicator")," of how useful this job may be)")),(0,r.yg)("h2",{id:"key-functions"},"Key Functions"),(0,r.yg)("p",null,(0,r.yg)("inlineCode",{parentName:"p"},"alterState")),(0,r.yg)("h2",{id:"expression"},"Expression"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-js"},'alterState(state => {\n  console.log("We have notified the administrator to manually initiate payment.");\n  console.log("We have notified the CHW that payment is pending.");\n  return state;\n})\n')))}u.isMDXComponent=!0},15680:(e,t,a)=>{a.d(t,{xA:()=>y,yg:()=>m});var n=a(96540);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var s=n.createContext({}),p=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},y=function(e){var t=p(e.components);return n.createElement(s.Provider,{value:t},e.children)},c="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,y=l(e,["components","mdxType","originalType","parentName"]),c=p(a),d=r,m=c["".concat(s,".").concat(d)]||c[d]||u[d]||i;return a?n.createElement(m,o(o({ref:t},y),{},{components:a})):n.createElement(m,o({ref:t},y))}));function m(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=a.length,o=new Array(i);o[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[c]="string"==typeof e?e:r,o[1]=l;for(var p=2;p<i;p++)o[p]=a[p];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}d.displayName="MDXCreateElement"}}]);