"use strict";(self.webpackChunk_openfn_docs=self.webpackChunk_openfn_docs||[]).push([[8697],{3905:(e,t,r)=>{r.d(t,{Zo:()=>i,kt:()=>m});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var p=n.createContext({}),c=function(e){var t=n.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):s(s({},t),e)),r},i=function(e){var t=c(e.components);return n.createElement(p.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},g=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,p=e.parentName,i=l(e,["components","mdxType","originalType","parentName"]),u=c(r),g=a,m=u["".concat(p,".").concat(g)]||u[g]||d[g]||o;return r?n.createElement(m,s(s({ref:t},i),{},{components:r})):n.createElement(m,s({ref:t},i))}));function m(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,s=new Array(o);s[0]=g;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l[u]="string"==typeof e?e:a,s[1]=l;for(var c=2;c<o;c++)s[c]=r[c];return n.createElement.apply(null,s)}return n.createElement.apply(null,r)}g.displayName="MDXCreateElement"},51845:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>p,contentTitle:()=>s,default:()=>d,frontMatter:()=>o,metadata:()=>l,toc:()=>c});var n=r(87462),a=(r(67294),r(3905));const o={title:"googlesheets@2.2.2",id:"googlesheets-docs",keywords:["adaptor","googlesheets","appendValues"]},s=void 0,l={unversionedId:"packages/googlesheets-docs",id:"packages/googlesheets-docs",title:"googlesheets@2.2.2",description:"appendValues",source:"@site/adaptors/packages/googlesheets-docs.md",sourceDirName:"packages",slug:"/packages/googlesheets-docs",permalink:"/adaptors/packages/googlesheets-docs",draft:!1,tags:[],version:"current",frontMatter:{title:"googlesheets@2.2.2",id:"googlesheets-docs",keywords:["adaptor","googlesheets","appendValues"]},sidebar:"adaptors",previous:{title:"Google Forms/Google Sheets",permalink:"/adaptors/googlesheets"},next:{title:"Config for googlesheets",permalink:"/adaptors/packages/googlesheets-configuration-schema"}},p={},c=[{value:"appendValues",id:"appendvalues",level:2}],i={toc:c},u="wrapper";function d(e){let{components:t,...r}=e;return(0,a.kt)(u,(0,n.Z)({},i,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"appendvalues"},"appendValues"),(0,a.kt)("p",null,"appendValues(params) \u21d2 ",(0,a.kt)("code",null,"Operation"),"\nAdd an array of rows to the spreadsheet.\n",(0,a.kt)("a",{parentName:"p",href:"https://developers.google.com/sheets/api/samples/writing#append_values"},"https://developers.google.com/sheets/api/samples/writing#append_values")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Kind"),": global function",(0,a.kt)("br",{parentName:"p"}),"\n",(0,a.kt)("strong",{parentName:"p"},"Access"),": public  "),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Param"),(0,a.kt)("th",{parentName:"tr",align:null},"Type"),(0,a.kt)("th",{parentName:"tr",align:null},"Description"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"params"),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("code",null,"Object")),(0,a.kt)("td",{parentName:"tr",align:null},"Data object to add to the spreadsheet.")))),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Example"),"  "),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"appendValues({\n  spreadsheetId: '1O-a4_RgPF_p8W3I6b5M9wobA3-CBW8hLClZfUik5sos',\n  range: 'Sheet1!A1:E1',\n  values: [\n    ['From expression', '$15', '2', '3/15/2016'],\n    ['Really now!', '$100', '1', '3/20/2016'],\n  ],\n})\n")),(0,a.kt)("hr",null))}d.isMDXComponent=!0}}]);