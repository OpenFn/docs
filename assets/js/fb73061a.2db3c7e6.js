"use strict";(self.webpackChunk_openfn_docs=self.webpackChunk_openfn_docs||[]).push([[51341],{89451:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>p,contentTitle:()=>o,default:()=>s,frontMatter:()=>l,metadata:()=>g,toc:()=>i});var n=a(58168),r=(a(96540),a(15680));const l={title:"ghana-bdr@0.1.4",id:"ghana-bdr-docs",keywords:["adaptor","ghana-bdr","get","post","sendBirthNotification"]},o=void 0,g={unversionedId:"packages/ghana-bdr-docs",id:"packages/ghana-bdr-docs",title:"ghana-bdr@0.1.4",description:"get(path, query)",source:"@site/adaptors/packages/ghana-bdr-docs.md",sourceDirName:"packages",slug:"/packages/ghana-bdr-docs",permalink:"/adaptors/packages/ghana-bdr-docs",draft:!1,tags:[],version:"current",frontMatter:{title:"ghana-bdr@0.1.4",id:"ghana-bdr-docs",keywords:["adaptor","ghana-bdr","get","post","sendBirthNotification"]},sidebar:"adaptors",previous:{title:"fhir-ndr-et developer readme",permalink:"/adaptors/packages/fhir-ndr-et-readme"},next:{title:"Config for ghana-bdr",permalink:"/adaptors/packages/ghana-bdr-configuration-schema"}},p={},i=[{value:"Functions",id:"functions",level:2},{value:"get",id:"get",level:3},{value:"post",id:"post",level:3},{value:"sendBirthNotification",id:"sendbirthnotification",level:3},{value:"Interfaces",id:"interfaces",level:2},{value:"HttpState",id:"httpstate",level:3}],y={toc:i},d="wrapper";function s(e){let{components:t,...a}=e;return(0,r.yg)(d,(0,n.A)({},y,a,{components:t,mdxType:"MDXLayout"}),(0,r.yg)("dl",null,(0,r.yg)("dt",null,(0,r.yg)("a",{href:"#get"},"get(path, query)")),(0,r.yg)("dt",null,(0,r.yg)("a",{href:"#post"},"post(path, data)")),(0,r.yg)("dt",null,(0,r.yg)("a",{href:"#sendbirthnotification"},"sendBirthNotification(data)"))),(0,r.yg)("h2",{id:"functions"},"Functions"),(0,r.yg)("h3",{id:"get"},"get"),(0,r.yg)("p",null,(0,r.yg)("code",null,"get(path, query) \u21d2 Operation")),(0,r.yg)("p",null,"Make a GET request"),(0,r.yg)("table",null,(0,r.yg)("thead",{parentName:"table"},(0,r.yg)("tr",{parentName:"thead"},(0,r.yg)("th",{parentName:"tr",align:null},"Param"),(0,r.yg)("th",{parentName:"tr",align:null},"Type"),(0,r.yg)("th",{parentName:"tr",align:null},"Description"))),(0,r.yg)("tbody",{parentName:"table"},(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"path"),(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("code",null,"string")),(0,r.yg)("td",{parentName:"tr",align:null},"Path to resource")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"query"),(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("code",null,"object")),(0,r.yg)("td",{parentName:"tr",align:null},"An object of query parameters to be encoded into the URL.")))),(0,r.yg)("p",null,"This operation writes the following keys to state:"),(0,r.yg)("table",null,(0,r.yg)("thead",{parentName:"table"},(0,r.yg)("tr",{parentName:"thead"},(0,r.yg)("th",{parentName:"tr",align:null},"State Key"),(0,r.yg)("th",{parentName:"tr",align:null},"Description"))),(0,r.yg)("tbody",{parentName:"table"},(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"data"),(0,r.yg)("td",{parentName:"tr",align:null},"the parsed response body")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"response"),(0,r.yg)("td",{parentName:"tr",align:null},"the response from the HTTP server, including headers, statusCode, body, etc")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"references"),(0,r.yg)("td",{parentName:"tr",align:null},"an array of all previous data objects used in the Job")))),(0,r.yg)("p",null,(0,r.yg)("strong",{parentName:"p"},"Example")),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-js"},'get("patient");\n')),(0,r.yg)("hr",null),(0,r.yg)("h3",{id:"post"},"post"),(0,r.yg)("p",null,(0,r.yg)("code",null,"post(path, data) \u21d2 Operation")),(0,r.yg)("p",null,"Make a POST request"),(0,r.yg)("table",null,(0,r.yg)("thead",{parentName:"table"},(0,r.yg)("tr",{parentName:"thead"},(0,r.yg)("th",{parentName:"tr",align:null},"Param"),(0,r.yg)("th",{parentName:"tr",align:null},"Type"),(0,r.yg)("th",{parentName:"tr",align:null},"Description"))),(0,r.yg)("tbody",{parentName:"table"},(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"path"),(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("code",null,"string")),(0,r.yg)("td",{parentName:"tr",align:null},"Path to resource")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"data"),(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("code",null,"object")),(0,r.yg)("td",{parentName:"tr",align:null},"body data to append to the request. JSON will be converted to a string (but a content-type header will not be attached to the request).")))),(0,r.yg)("p",null,"This operation writes the following keys to state:"),(0,r.yg)("table",null,(0,r.yg)("thead",{parentName:"table"},(0,r.yg)("tr",{parentName:"thead"},(0,r.yg)("th",{parentName:"tr",align:null},"State Key"),(0,r.yg)("th",{parentName:"tr",align:null},"Description"))),(0,r.yg)("tbody",{parentName:"table"},(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"data"),(0,r.yg)("td",{parentName:"tr",align:null},"the parsed response body")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"response"),(0,r.yg)("td",{parentName:"tr",align:null},"the response from the HTTP server, including headers, statusCode, body, etc")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"references"),(0,r.yg)("td",{parentName:"tr",align:null},"an array of all previous data objects used in the Job")))),(0,r.yg)("p",null,(0,r.yg)("strong",{parentName:"p"},"Example")),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-js"},'post("patient", { "name":"Bukayo" });\n')),(0,r.yg)("hr",null),(0,r.yg)("h3",{id:"sendbirthnotification"},"sendBirthNotification"),(0,r.yg)("p",null,(0,r.yg)("code",null,"sendBirthNotification(data) \u21d2 Operation")),(0,r.yg)("p",null,"Generate a birth certificate"),(0,r.yg)("table",null,(0,r.yg)("thead",{parentName:"table"},(0,r.yg)("tr",{parentName:"thead"},(0,r.yg)("th",{parentName:"tr",align:null},"Param"),(0,r.yg)("th",{parentName:"tr",align:null},"Type"),(0,r.yg)("th",{parentName:"tr",align:null},"Description"))),(0,r.yg)("tbody",{parentName:"table"},(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"data"),(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("code",null,"object")),(0,r.yg)("td",{parentName:"tr",align:null},"body data to append to the request. JSON will be converted to a string (but a content-type header will not be attached to the request).")))),(0,r.yg)("p",null,"This operation writes the following keys to state:"),(0,r.yg)("table",null,(0,r.yg)("thead",{parentName:"table"},(0,r.yg)("tr",{parentName:"thead"},(0,r.yg)("th",{parentName:"tr",align:null},"State Key"),(0,r.yg)("th",{parentName:"tr",align:null},"Description"))),(0,r.yg)("tbody",{parentName:"table"},(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"data"),(0,r.yg)("td",{parentName:"tr",align:null},"the parsed response body")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"response"),(0,r.yg)("td",{parentName:"tr",align:null},"the response from the HTTP server, including headers, statusCode, body, etc")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"references"),(0,r.yg)("td",{parentName:"tr",align:null},"an array of all previous data objects used in the Job")))),(0,r.yg)("p",null,(0,r.yg)("strong",{parentName:"p"},"Example")),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-js"},"sendBirthNotification({\n  registry_code: 'abc123',\n  child: {},\n  mother: {},\n  father: {},\n})\n")),(0,r.yg)("hr",null),(0,r.yg)("h2",{id:"interfaces"},"Interfaces"),(0,r.yg)("h3",{id:"httpstate"},"HttpState"),(0,r.yg)("p",null,"/**\nState object"),(0,r.yg)("p",null,(0,r.yg)("strong",{parentName:"p"},"Properties")),(0,r.yg)("table",null,(0,r.yg)("thead",{parentName:"table"},(0,r.yg)("tr",{parentName:"thead"},(0,r.yg)("th",{parentName:"tr",align:null},"Name"),(0,r.yg)("th",{parentName:"tr",align:null},"Description"))),(0,r.yg)("tbody",{parentName:"table"},(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"data"),(0,r.yg)("td",{parentName:"tr",align:null},"the parsed response body")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"response"),(0,r.yg)("td",{parentName:"tr",align:null},"the response from the HTTP server, including headers, statusCode, body, etc")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"references"),(0,r.yg)("td",{parentName:"tr",align:null},"an array of all previous data objects used in the Job")))),(0,r.yg)("hr",null))}s.isMDXComponent=!0},15680:(e,t,a)=>{a.d(t,{xA:()=>y,yg:()=>c});var n=a(96540);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function g(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var p=n.createContext({}),i=function(e){var t=n.useContext(p),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},y=function(e){var t=i(e.components);return n.createElement(p.Provider,{value:t},e.children)},d="mdxType",s={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,l=e.originalType,p=e.parentName,y=g(e,["components","mdxType","originalType","parentName"]),d=i(a),u=r,c=d["".concat(p,".").concat(u)]||d[u]||s[u]||l;return a?n.createElement(c,o(o({ref:t},y),{},{components:a})):n.createElement(c,o({ref:t},y))}));function c(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=a.length,o=new Array(l);o[0]=u;var g={};for(var p in t)hasOwnProperty.call(t,p)&&(g[p]=t[p]);g.originalType=e,g[d]="string"==typeof e?e:r,o[1]=g;for(var i=2;i<l;i++)o[i]=a[i];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}u.displayName="MDXCreateElement"}}]);