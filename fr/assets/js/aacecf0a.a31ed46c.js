"use strict";(self.webpackChunk_openfn_docs=self.webpackChunk_openfn_docs||[]).push([[58193],{3905:(e,t,a)=>{a.d(t,{Zo:()=>i,kt:()=>k});var r=a(67294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function p(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},o=Object.keys(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var s=r.createContext({}),c=function(e){var t=r.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):p(p({},t),e)),a},i=function(e){var t=c(e.components);return r.createElement(s.Provider,{value:t},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,o=e.originalType,s=e.parentName,i=l(e,["components","mdxType","originalType","parentName"]),d=c(a),m=n,k=d["".concat(s,".").concat(m)]||d[m]||u[m]||o;return a?r.createElement(k,p(p({ref:t},i),{},{components:a})):r.createElement(k,p({ref:t},i))}));function k(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=a.length,p=new Array(o);p[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[d]="string"==typeof e?e:n,p[1]=l;for(var c=2;c<o;c++)p[c]=a[c];return r.createElement.apply(null,p)}return r.createElement.apply(null,a)}m.displayName="MDXCreateElement"},35383:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>p,default:()=>d,frontMatter:()=>o,metadata:()=>l,toc:()=>c});var r=a(87462),n=(a(67294),a(3905));const o={title:"facebook@0.2.0",id:"facebook-docs",keywords:["adaptor","facebook","postMessage"]},p=void 0,l={unversionedId:"packages/facebook-docs",id:"packages/facebook-docs",title:"facebook@0.2.0",description:"Adaptor",source:"@site/adaptors/packages/facebook-docs.md",sourceDirName:"packages",slug:"/packages/facebook-docs",permalink:"/fr/adaptors/packages/facebook-docs",draft:!1,tags:[],version:"current",frontMatter:{title:"facebook@0.2.0",id:"facebook-docs",keywords:["adaptor","facebook","postMessage"]},sidebar:"adaptors",previous:{title:"dynamics developer readme",permalink:"/fr/adaptors/packages/dynamics-readme"},next:{title:"facebook changelog",permalink:"/fr/adaptors/packages/facebook-changelog"}},s={},c=[{value:"Adaptor",id:"adaptor",level:2},{value:"Adaptor.execute(operations) \u21d2 <code>Operation</code>",id:"adaptorexecuteoperations--operation",level:3},{value:"Adaptor.postMessage(params) \u21d2 <code>Operation</code>",id:"adaptorpostmessageparams--operation",level:3}],i={toc:c};function d(e){let{components:t,...a}=e;return(0,n.kt)("wrapper",(0,r.Z)({},i,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("a",{name:"module_Adaptor"}),(0,n.kt)("h2",{id:"adaptor"},"Adaptor"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"#module_Adaptor"},"Adaptor"),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"#module_Adaptor.execute"},".execute(operations)")," \u21d2 ",(0,n.kt)("code",null,"Operation")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"#module_Adaptor.postMessage"},".postMessage(params)")," \u21d2 ",(0,n.kt)("code",null,"Operation"))))),(0,n.kt)("a",{name:"module_Adaptor.execute"}),(0,n.kt)("h3",{id:"adaptorexecuteoperations--operation"},"Adaptor.execute(operations) \u21d2 ",(0,n.kt)("code",null,"Operation")),(0,n.kt)("p",null,"Execute a sequence of operations.\nWraps ",(0,n.kt)("inlineCode",{parentName:"p"},"@openfn/language-common/execute"),", and prepends initial state for http."),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Kind"),": static method of ",(0,n.kt)("a",{parentName:"p",href:"#module_Adaptor"},(0,n.kt)("code",null,"Adaptor")),"  "),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"Param"),(0,n.kt)("th",{parentName:"tr",align:null},"Type"),(0,n.kt)("th",{parentName:"tr",align:null},"Description"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"operations"),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("code",null,"Operations")),(0,n.kt)("td",{parentName:"tr",align:null},"Operations to be performed.")))),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Example"),"  "),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-js"},"execute(\n  create('foo'),\n  delete('bar')\n)(state)\n")),(0,n.kt)("a",{name:"module_Adaptor.postMessage"}),(0,n.kt)("h3",{id:"adaptorpostmessageparams--operation"},"Adaptor.postMessage(params) \u21d2 ",(0,n.kt)("code",null,"Operation")),(0,n.kt)("p",null,"Post a message"),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Kind"),": static method of ",(0,n.kt)("a",{parentName:"p",href:"#module_Adaptor"},(0,n.kt)("code",null,"Adaptor")),(0,n.kt)("br",{parentName:"p"}),"\n",(0,n.kt)("strong",{parentName:"p"},"Access"),": public  "),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"Param"),(0,n.kt)("th",{parentName:"tr",align:null},"Type"),(0,n.kt)("th",{parentName:"tr",align:null},"Description"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"params"),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("code",null,"object")),(0,n.kt)("td",{parentName:"tr",align:null},"data to make the fetch")))),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Example"),"  "),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-js"},'postMessage({\n "recipient": {\n    "id": "your-psid"\n  },\n  "message": {\n    "text": "your-message"\n  }\n})\n')))}d.isMDXComponent=!0}}]);