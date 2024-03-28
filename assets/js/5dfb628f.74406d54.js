"use strict";(self.webpackChunk_openfn_docs=self.webpackChunk_openfn_docs||[]).push([[50074],{15680:(e,t,n)=>{n.d(t,{xA:()=>d,yg:()=>i});var a=n(96540);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var c=a.createContext({}),p=function(e){var t=a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},d=function(e){var t=p(e.components);return a.createElement(c.Provider,{value:t},e.children)},g="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,c=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),g=p(n),u=r,i=g["".concat(c,".").concat(u)]||g[u]||m[u]||o;return n?a.createElement(i,l(l({ref:t},d),{},{components:n})):a.createElement(i,l({ref:t},d))}));function i(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,l=new Array(o);l[0]=u;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s[g]="string"==typeof e?e:r,l[1]=s;for(var p=2;p<o;p++)l[p]=n[p];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},92324:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>l,default:()=>m,frontMatter:()=>o,metadata:()=>s,toc:()=>p});var a=n(58168),r=(n(96540),n(15680));const o={title:"nexmo@0.4.3",id:"nexmo-docs",keywords:["adaptor","nexmo","sendSMS"]},l=void 0,s={unversionedId:"packages/nexmo-docs",id:"packages/nexmo-docs",title:"nexmo@0.4.3",description:"The following functions are exported from the common adaptor:",source:"@site/adaptors/packages/nexmo-docs.md",sourceDirName:"packages",slug:"/packages/nexmo-docs",permalink:"/adaptors/packages/nexmo-docs",draft:!1,tags:[],version:"current",frontMatter:{title:"nexmo@0.4.3",id:"nexmo-docs",keywords:["adaptor","nexmo","sendSMS"]},sidebar:"adaptors",previous:{title:"mysql developer readme",permalink:"/adaptors/packages/mysql-readme"},next:{title:"Config for nexmo",permalink:"/adaptors/packages/nexmo-configuration-schema"}},c={},p=[{value:"sendSMS",id:"sendsms",level:2}],d={toc:p},g="wrapper";function m(e){let{components:t,...n}=e;return(0,r.yg)(g,(0,a.A)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,r.yg)("p",null,"The following functions are exported from the common adaptor:"),(0,r.yg)("dl",null,(0,r.yg)("dt",null,(0,r.yg)("a",{href:"/adaptors/packages/common-docs#alterstate"},"alterState()")),(0,r.yg)("dt",null,(0,r.yg)("a",{href:"/adaptors/packages/common-docs#datapath"},"dataPath()")),(0,r.yg)("dt",null,(0,r.yg)("a",{href:"/adaptors/packages/common-docs#datavalue"},"dataValue()")),(0,r.yg)("dt",null,(0,r.yg)("a",{href:"/adaptors/packages/common-docs#each"},"each()")),(0,r.yg)("dt",null,(0,r.yg)("a",{href:"/adaptors/packages/common-docs#field"},"field()")),(0,r.yg)("dt",null,(0,r.yg)("a",{href:"/adaptors/packages/common-docs#fields"},"fields()")),(0,r.yg)("dt",null,(0,r.yg)("a",{href:"/adaptors/packages/common-docs#fn"},"fn()")),(0,r.yg)("dt",null,(0,r.yg)("a",{href:"/adaptors/packages/common-docs#lastreferencevalue"},"lastReferenceValue()")),(0,r.yg)("dt",null,(0,r.yg)("a",{href:"/adaptors/packages/common-docs#merge"},"merge()")),(0,r.yg)("dt",null,(0,r.yg)("a",{href:"/adaptors/packages/common-docs#sourcevalue"},"sourceValue()"))),(0,r.yg)("h2",{id:"sendsms"},"sendSMS"),(0,r.yg)("p",null,"sendSMS(from, toNumber, message) \u21d2 ",(0,r.yg)("code",null,"Operation")),(0,r.yg)("p",null,"Sends an SMS message to a specific phone number"),(0,r.yg)("table",null,(0,r.yg)("thead",{parentName:"table"},(0,r.yg)("tr",{parentName:"thead"},(0,r.yg)("th",{parentName:"tr",align:null},"Param"),(0,r.yg)("th",{parentName:"tr",align:null},"Type"),(0,r.yg)("th",{parentName:"tr",align:null},"Description"))),(0,r.yg)("tbody",{parentName:"table"},(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"from"),(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("code",null,"String")),(0,r.yg)("td",{parentName:"tr",align:null},"Name or number the message should be sent from.")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"toNumber"),(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("code",null,"String")),(0,r.yg)("td",{parentName:"tr",align:null},"Destination phone number.")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"message"),(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("code",null,"String")),(0,r.yg)("td",{parentName:"tr",align:null},"Text message")))),(0,r.yg)("p",null,(0,r.yg)("strong",{parentName:"p"},"Example"),"  "),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-js"},'sendSMS("OpenFn", "phoneNumber", "Hello World!")\n')),(0,r.yg)("hr",null))}m.isMDXComponent=!0}}]);