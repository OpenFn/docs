"use strict";(self.webpackChunk_openfn_docs=self.webpackChunk_openfn_docs||[]).push([[78823],{3905:(e,t,a)=>{a.d(t,{Zo:()=>u,kt:()=>m});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function c(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var p=n.createContext({}),i=function(e){var t=n.useContext(p),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},u=function(e){var t=i(e.components);return n.createElement(p.Provider,{value:t},e.children)},d="mdxType",s={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},k=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,l=e.originalType,p=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),d=i(a),k=r,m=d["".concat(p,".").concat(k)]||d[k]||s[k]||l;return a?n.createElement(m,o(o({ref:t},u),{},{components:a})):n.createElement(m,o({ref:t},u))}));function m(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=a.length,o=new Array(l);o[0]=k;var c={};for(var p in t)hasOwnProperty.call(t,p)&&(c[p]=t[p]);c.originalType=e,c[d]="string"==typeof e?e:r,o[1]=c;for(var i=2;i<l;i++)o[i]=a[i];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}k.displayName="MDXCreateElement"},82019:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>p,contentTitle:()=>o,default:()=>s,frontMatter:()=>l,metadata:()=>c,toc:()=>i});var n=a(87462),r=(a(67294),a(3905));const l={title:"beyonic@0.1.6",id:"beyonic-docs",keywords:["adaptor","beyonic"]},o=void 0,c={unversionedId:"packages/beyonic-docs",id:"packages/beyonic-docs",title:"beyonic@0.1.6",description:"Functions",source:"@site/adaptors/packages/beyonic-docs.md",sourceDirName:"packages",slug:"/packages/beyonic-docs",permalink:"/adaptors/packages/beyonic-docs",draft:!1,tags:[],version:"current",frontMatter:{title:"beyonic@0.1.6",id:"beyonic-docs",keywords:["adaptor","beyonic"]},sidebar:"adaptors",previous:{title:"asana Config",permalink:"/adaptors/packages/asana-configuration-schema"},next:{title:"Pay CHW",permalink:"/adaptors/library/jobs/auto/Pay-CHW-2021-04-23"}},p={},i=[{value:"Functions",id:"functions",level:2},{value:"execute(operations) \u21d2 <code>Operation</code>",id:"executeoperations--operation",level:2},{value:"createPayment(data) \u21d2 <code>Operation</code>",id:"createpaymentdata--operation",level:2},{value:"createContact(data) \u21d2 <code>Operation</code>",id:"createcontactdata--operation",level:2},{value:"createCollectionRequest(data) \u21d2 <code>Operation</code>",id:"createcollectionrequestdata--operation",level:2}],u={toc:i},d="wrapper";function s(e){let{components:t,...a}=e;return(0,r.kt)(d,(0,n.Z)({},u,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"functions"},"Functions"),(0,r.kt)("dl",null,(0,r.kt)("dt",null,(0,r.kt)("a",{href:"#execute"},"execute(operations)")," \u21d2 ",(0,r.kt)("code",null,"Operation")),(0,r.kt)("dd",null,(0,r.kt)("p",null,"Execute a sequence of operations. Wraps ",(0,r.kt)("code",null,"language-common/execute"),", and prepends initial state for beyonic.")),(0,r.kt)("dt",null,(0,r.kt)("a",{href:"#createPayment"},"createPayment(data)")," \u21d2 ",(0,r.kt)("code",null,"Operation")),(0,r.kt)("dd",null,(0,r.kt)("p",null,"Create a payment")),(0,r.kt)("dt",null,(0,r.kt)("a",{href:"#createContact"},"createContact(data)")," \u21d2 ",(0,r.kt)("code",null,"Operation")),(0,r.kt)("dd",null,(0,r.kt)("p",null,"Create a contact")),(0,r.kt)("dt",null,(0,r.kt)("a",{href:"#createCollectionRequest"},"createCollectionRequest(data)")," \u21d2 ",(0,r.kt)("code",null,"Operation")),(0,r.kt)("dd",null,(0,r.kt)("p",null,"Create a collection request"))),(0,r.kt)("a",{name:"execute"}),(0,r.kt)("h2",{id:"executeoperations--operation"},"execute(operations) \u21d2 ",(0,r.kt)("code",null,"Operation")),(0,r.kt)("p",null,"Execute a sequence of operations.\nWraps ",(0,r.kt)("inlineCode",{parentName:"p"},"language-common/execute"),", and prepends initial state for beyonic."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Kind"),": global function  "),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Param"),(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"operations"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("code",null,"Operations")),(0,r.kt)("td",{parentName:"tr",align:null},"Operations to be performed.")))),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Example"),"  "),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"execute(\n  create('foo'),\n  delete('bar')\n)(state)\n")),(0,r.kt)("a",{name:"createPayment"}),(0,r.kt)("h2",{id:"createpaymentdata--operation"},"createPayment(data) \u21d2 ",(0,r.kt)("code",null,"Operation")),(0,r.kt)("p",null,"Create a payment"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Kind"),": global function  "),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Param"),(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"data"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("code",null,"object")),(0,r.kt)("td",{parentName:"tr",align:null},"Payload data for the payment")))),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Example"),"  "),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"execute(\n  createPayment(data)\n)(state)\n")),(0,r.kt)("a",{name:"createContact"}),(0,r.kt)("h2",{id:"createcontactdata--operation"},"createContact(data) \u21d2 ",(0,r.kt)("code",null,"Operation")),(0,r.kt)("p",null,"Create a contact"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Kind"),": global function  "),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Param"),(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"data"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("code",null,"object")),(0,r.kt)("td",{parentName:"tr",align:null},"Payload data for the contact")))),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Example"),"  "),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"execute(\n  createContact(data)\n)(state)\n")),(0,r.kt)("a",{name:"createCollectionRequest"}),(0,r.kt)("h2",{id:"createcollectionrequestdata--operation"},"createCollectionRequest(data) \u21d2 ",(0,r.kt)("code",null,"Operation")),(0,r.kt)("p",null,"Create a collection request"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Kind"),": global function  "),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Param"),(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"data"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("code",null,"object")),(0,r.kt)("td",{parentName:"tr",align:null},"Payload data for the collection request")))),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Example"),"  "),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"execute(\n  createCollectionRequest(data)\n)(state)\n")))}s.isMDXComponent=!0}}]);