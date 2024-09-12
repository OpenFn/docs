"use strict";(self.webpackChunk_openfn_docs=self.webpackChunk_openfn_docs||[]).push([[16458],{16937:(a,e,t)=>{t.r(e),t.d(e,{assets:()=>o,contentTitle:()=>p,default:()=>y,frontMatter:()=>r,metadata:()=>g,toc:()=>c});var n=t(58168),l=(t(96540),t(15680));const r={title:"satusehat@2.0.1",id:"satusehat-docs",keywords:["adaptor","satusehat","get","patch","post","put"]},p=void 0,g={unversionedId:"packages/satusehat-docs",id:"packages/satusehat-docs",title:"satusehat@2.0.1",description:"get(path, params, callback)",source:"@site/adaptors/packages/satusehat-docs.md",sourceDirName:"packages",slug:"/packages/satusehat-docs",permalink:"/adaptors/packages/satusehat-docs",draft:!1,tags:[],version:"current",frontMatter:{title:"satusehat@2.0.1",id:"satusehat-docs",keywords:["adaptor","satusehat","get","patch","post","put"]},sidebar:"adaptors",previous:{title:"salesforce developer readme",permalink:"/adaptors/packages/salesforce-readme"},next:{title:"Config for satusehat",permalink:"/adaptors/packages/satusehat-configuration-schema"}},o={},c=[{value:"Functions",id:"functions",level:2},{value:"get",id:"get",level:3},{value:"patch",id:"patch",level:3},{value:"post",id:"post",level:3},{value:"put",id:"put",level:3}],u={toc:c},s="wrapper";function y(a){let{components:e,...t}=a;return(0,l.yg)(s,(0,n.A)({},u,t,{components:e,mdxType:"MDXLayout"}),(0,l.yg)("dl",null,(0,l.yg)("dt",null,(0,l.yg)("a",{href:"#get"},"get(path, params, callback)")),(0,l.yg)("dt",null,(0,l.yg)("a",{href:"#patch"},"patch(path, data, params, [callback])")),(0,l.yg)("dt",null,(0,l.yg)("a",{href:"#post"},"post(path, data, params, [callback])")),(0,l.yg)("dt",null,(0,l.yg)("a",{href:"#put"},"put(path, data, params, [callback])"))),(0,l.yg)("p",null,"This adaptor exports the following from common:"),(0,l.yg)("dl",null,(0,l.yg)("dt",null,(0,l.yg)("a",{href:"/adaptors/packages/common-docs#alterstate"},"alterState()")),(0,l.yg)("dt",null,(0,l.yg)("a",{href:"/adaptors/packages/common-docs#arraytostring"},"arrayToString()")),(0,l.yg)("dt",null,(0,l.yg)("a",{href:"/adaptors/packages/common-docs#combine"},"combine()")),(0,l.yg)("dt",null,(0,l.yg)("a",{href:"/adaptors/packages/common-docs#datapath"},"dataPath()")),(0,l.yg)("dt",null,(0,l.yg)("a",{href:"/adaptors/packages/common-docs#datavalue"},"dataValue()")),(0,l.yg)("dt",null,(0,l.yg)("a",{href:"/adaptors/packages/common-docs#each"},"each()")),(0,l.yg)("dt",null,(0,l.yg)("a",{href:"/adaptors/packages/common-docs#field"},"field()")),(0,l.yg)("dt",null,(0,l.yg)("a",{href:"/adaptors/packages/common-docs#fields"},"fields()")),(0,l.yg)("dt",null,(0,l.yg)("a",{href:"/adaptors/packages/common-docs#fn"},"fn()")),(0,l.yg)("dt",null,(0,l.yg)("a",{href:"/adaptors/packages/common-docs#fnif"},"fnIf()")),(0,l.yg)("dt",null,(0,l.yg)("a",{href:"/adaptors/packages/common-docs#http"},"http")),(0,l.yg)("dt",null,(0,l.yg)("a",{href:"/adaptors/packages/common-docs#lastreferencevalue"},"lastReferenceValue()")),(0,l.yg)("dt",null,(0,l.yg)("a",{href:"/adaptors/packages/common-docs#merge"},"merge()")),(0,l.yg)("dt",null,(0,l.yg)("a",{href:"/adaptors/packages/common-docs#sourcevalue"},"sourceValue()"))),(0,l.yg)("h2",{id:"functions"},"Functions"),(0,l.yg)("h3",{id:"get"},"get"),(0,l.yg)("p",null,(0,l.yg)("code",null,"get(path, params, callback) \u21d2 Operation")),(0,l.yg)("p",null,"Make a GET request to Satusehat"),(0,l.yg)("table",null,(0,l.yg)("thead",{parentName:"table"},(0,l.yg)("tr",{parentName:"thead"},(0,l.yg)("th",{parentName:"tr",align:null},"Param"),(0,l.yg)("th",{parentName:"tr",align:null},"Type"),(0,l.yg)("th",{parentName:"tr",align:null},"Description"))),(0,l.yg)("tbody",{parentName:"table"},(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"path"),(0,l.yg)("td",{parentName:"tr",align:null},(0,l.yg)("code",null,"string")),(0,l.yg)("td",{parentName:"tr",align:null},"Path to resource")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"params"),(0,l.yg)("td",{parentName:"tr",align:null},(0,l.yg)("code",null,"object")),(0,l.yg)("td",{parentName:"tr",align:null},"Optional request params such as name.")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"callback"),(0,l.yg)("td",{parentName:"tr",align:null},(0,l.yg)("code",null,"function")),(0,l.yg)("td",{parentName:"tr",align:null},"An optional callback to handle the response")))),(0,l.yg)("p",null,(0,l.yg)("strong",{parentName:"p"},"Example")),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre",className:"language-js"},'get("Organization", {"name": "somename"})\n')),(0,l.yg)("hr",null),(0,l.yg)("h3",{id:"patch"},"patch"),(0,l.yg)("p",null,(0,l.yg)("code",null,"patch(path, data, params, [callback]) \u21d2 Operation")),(0,l.yg)("p",null,"Make a PATCH request to Satusehat"),(0,l.yg)("table",null,(0,l.yg)("thead",{parentName:"table"},(0,l.yg)("tr",{parentName:"thead"},(0,l.yg)("th",{parentName:"tr",align:null},"Param"),(0,l.yg)("th",{parentName:"tr",align:null},"Type"),(0,l.yg)("th",{parentName:"tr",align:null},"Description"))),(0,l.yg)("tbody",{parentName:"table"},(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"path"),(0,l.yg)("td",{parentName:"tr",align:null},(0,l.yg)("code",null,"string")),(0,l.yg)("td",{parentName:"tr",align:null},"Path to resource and exact item to be partially updated")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"data"),(0,l.yg)("td",{parentName:"tr",align:null},(0,l.yg)("code",null,"Array")),(0,l.yg)("td",{parentName:"tr",align:null},"An array of objects which defines data that will be used to partially update a given instance of resource")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"params"),(0,l.yg)("td",{parentName:"tr",align:null},(0,l.yg)("code",null,"Object")),(0,l.yg)("td",{parentName:"tr",align:null},"Optional request params.")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"[callback]"),(0,l.yg)("td",{parentName:"tr",align:null},(0,l.yg)("code",null,"function")),(0,l.yg)("td",{parentName:"tr",align:null},"Optional callback to handle the response")))),(0,l.yg)("p",null,(0,l.yg)("strong",{parentName:"p"},"Example")),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre",className:"language-js"},'patch(\n  "Organization/123",\n   [{\n"op": "replace", // Operation - `replace` is the only one used to change a specific property or element\n "path": "/language", // Path - The name of property/element of resource to be replaced\n "value": "id" // Value- The value to be replaced\n}]\n\n);\n')),(0,l.yg)("hr",null),(0,l.yg)("h3",{id:"post"},"post"),(0,l.yg)("p",null,(0,l.yg)("code",null,"post(path, data, params, [callback]) \u21d2 Operation")),(0,l.yg)("p",null,"Make a POST request to Satusehat"),(0,l.yg)("table",null,(0,l.yg)("thead",{parentName:"table"},(0,l.yg)("tr",{parentName:"thead"},(0,l.yg)("th",{parentName:"tr",align:null},"Param"),(0,l.yg)("th",{parentName:"tr",align:null},"Type"),(0,l.yg)("th",{parentName:"tr",align:null},"Description"))),(0,l.yg)("tbody",{parentName:"table"},(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"path"),(0,l.yg)("td",{parentName:"tr",align:null},(0,l.yg)("code",null,"string")),(0,l.yg)("td",{parentName:"tr",align:null},"Path to resource")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"data"),(0,l.yg)("td",{parentName:"tr",align:null},(0,l.yg)("code",null,"object")),(0,l.yg)("td",{parentName:"tr",align:null},"Object or JSON which defines data that will be used to create a given instance of resource")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"params"),(0,l.yg)("td",{parentName:"tr",align:null},(0,l.yg)("code",null,"Object")),(0,l.yg)("td",{parentName:"tr",align:null},"Optional request params.")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"[callback]"),(0,l.yg)("td",{parentName:"tr",align:null},(0,l.yg)("code",null,"function")),(0,l.yg)("td",{parentName:"tr",align:null},"Optional callback to handle the response")))),(0,l.yg)("p",null,(0,l.yg)("strong",{parentName:"p"},"Example")),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre",className:"language-js"},'post(\n  "Organization",\n { "resourceType": "Organization", "active": true,\n }\n);\n')),(0,l.yg)("hr",null),(0,l.yg)("h3",{id:"put"},"put"),(0,l.yg)("p",null,(0,l.yg)("code",null,"put(path, data, params, [callback]) \u21d2 Operation")),(0,l.yg)("p",null,"Make a PUT request to Satusehat"),(0,l.yg)("table",null,(0,l.yg)("thead",{parentName:"table"},(0,l.yg)("tr",{parentName:"thead"},(0,l.yg)("th",{parentName:"tr",align:null},"Param"),(0,l.yg)("th",{parentName:"tr",align:null},"Type"),(0,l.yg)("th",{parentName:"tr",align:null},"Description"))),(0,l.yg)("tbody",{parentName:"table"},(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"path"),(0,l.yg)("td",{parentName:"tr",align:null},(0,l.yg)("code",null,"string")),(0,l.yg)("td",{parentName:"tr",align:null},"Path to resource and exact item to be updated")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"data"),(0,l.yg)("td",{parentName:"tr",align:null},(0,l.yg)("code",null,"object")),(0,l.yg)("td",{parentName:"tr",align:null},"Object or JSON which defines data that will be used to update a given instance of resource")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"params"),(0,l.yg)("td",{parentName:"tr",align:null},(0,l.yg)("code",null,"Object")),(0,l.yg)("td",{parentName:"tr",align:null},"Optional request params.")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"[callback]"),(0,l.yg)("td",{parentName:"tr",align:null},(0,l.yg)("code",null,"function")),(0,l.yg)("td",{parentName:"tr",align:null},"Optional callback to handle the response")))),(0,l.yg)("p",null,(0,l.yg)("strong",{parentName:"p"},"Example")),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre",className:"language-js"},'put(\n  "Organization/123",\n { "resourceType": "Organization", "active": false,\n }\n);\n')),(0,l.yg)("hr",null))}y.isMDXComponent=!0},15680:(a,e,t)=>{t.d(e,{xA:()=>u,yg:()=>i});var n=t(96540);function l(a,e,t){return e in a?Object.defineProperty(a,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):a[e]=t,a}function r(a,e){var t=Object.keys(a);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(a);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(a,e).enumerable}))),t.push.apply(t,n)}return t}function p(a){for(var e=1;e<arguments.length;e++){var t=null!=arguments[e]?arguments[e]:{};e%2?r(Object(t),!0).forEach((function(e){l(a,e,t[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(a,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(e){Object.defineProperty(a,e,Object.getOwnPropertyDescriptor(t,e))}))}return a}function g(a,e){if(null==a)return{};var t,n,l=function(a,e){if(null==a)return{};var t,n,l={},r=Object.keys(a);for(n=0;n<r.length;n++)t=r[n],e.indexOf(t)>=0||(l[t]=a[t]);return l}(a,e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(a);for(n=0;n<r.length;n++)t=r[n],e.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(a,t)&&(l[t]=a[t])}return l}var o=n.createContext({}),c=function(a){var e=n.useContext(o),t=e;return a&&(t="function"==typeof a?a(e):p(p({},e),a)),t},u=function(a){var e=c(a.components);return n.createElement(o.Provider,{value:e},a.children)},s="mdxType",y={inlineCode:"code",wrapper:function(a){var e=a.children;return n.createElement(n.Fragment,{},e)}},d=n.forwardRef((function(a,e){var t=a.components,l=a.mdxType,r=a.originalType,o=a.parentName,u=g(a,["components","mdxType","originalType","parentName"]),s=c(t),d=l,i=s["".concat(o,".").concat(d)]||s[d]||y[d]||r;return t?n.createElement(i,p(p({ref:e},u),{},{components:t})):n.createElement(i,p({ref:e},u))}));function i(a,e){var t=arguments,l=e&&e.mdxType;if("string"==typeof a||l){var r=t.length,p=new Array(r);p[0]=d;var g={};for(var o in e)hasOwnProperty.call(e,o)&&(g[o]=e[o]);g.originalType=a,g[s]="string"==typeof a?a:l,p[1]=g;for(var c=2;c<r;c++)p[c]=t[c];return n.createElement.apply(null,p)}return n.createElement.apply(null,t)}d.displayName="MDXCreateElement"}}]);