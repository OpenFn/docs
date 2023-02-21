"use strict";(self.webpackChunk_openfn_docs=self.webpackChunk_openfn_docs||[]).push([[60595],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>k});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var i=r.createContext({}),c=function(e){var t=r.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},u=function(e){var t=c(e.components);return r.createElement(i.Provider,{value:t},e.children)},s="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,i=e.parentName,u=p(e,["components","mdxType","originalType","parentName"]),s=c(n),m=a,k=s["".concat(i,".").concat(m)]||s[m]||d[m]||o;return n?r.createElement(k,l(l({ref:t},u),{},{components:n})):r.createElement(k,l({ref:t},u))}));function k(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,l=new Array(o);l[0]=m;var p={};for(var i in t)hasOwnProperty.call(t,i)&&(p[i]=t[i]);p.originalType=e,p[s]="string"==typeof e?e:a,l[1]=p;for(var c=2;c<o;c++)l[c]=n[c];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},60131:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>i,contentTitle:()=>l,default:()=>d,frontMatter:()=>o,metadata:()=>p,toc:()=>c});var r=n(87462),a=(n(67294),n(3905));const o={title:"resourcemap@0.2.2",id:"resourcemap-docs",keywords:["adaptor","resourcemap"]},l=void 0,p={unversionedId:"packages/resourcemap-docs",id:"packages/resourcemap-docs",title:"resourcemap@0.2.2",description:"Functions",source:"@site/adaptors/packages/resourcemap-docs.md",sourceDirName:"packages",slug:"/packages/resourcemap-docs",permalink:"/fr/adaptors/packages/resourcemap-docs",draft:!1,tags:[],version:"current",frontMatter:{title:"resourcemap@0.2.2",id:"resourcemap-docs",keywords:["adaptor","resourcemap"]},sidebar:"adaptors",previous:{title:"rapidpro developer readme",permalink:"/fr/adaptors/packages/rapidpro-readme"},next:{title:"Config for resourcemap",permalink:"/fr/adaptors/packages/resourcemap-configuration-schema"}},i={},c=[{value:"Functions",id:"functions",level:2},{value:"execute(operations) \u21d2 <code>Operation</code>",id:"executeoperations--operation",level:2},{value:"submitSite(eventData) \u21d2 <code>Operation</code>",id:"submitsiteeventdata--operation",level:2}],u={toc:c},s="wrapper";function d(e){let{components:t,...n}=e;return(0,a.kt)(s,(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"functions"},"Functions"),(0,a.kt)("dl",null,(0,a.kt)("dt",null,(0,a.kt)("a",{href:"#execute"},"execute(operations)")," \u21d2 ",(0,a.kt)("code",null,"Operation")),(0,a.kt)("dd",null,(0,a.kt)("p",null,"Execute a sequence of operations. Wraps ",(0,a.kt)("code",null,"@openfn/language-common/execute"),", and prepends initial state for resourcemap.")),(0,a.kt)("dt",null,(0,a.kt)("a",{href:"#submitSite"},"submitSite(eventData)")," \u21d2 ",(0,a.kt)("code",null,"Operation")),(0,a.kt)("dd",null,(0,a.kt)("p",null,"Create an event"))),(0,a.kt)("a",{name:"execute"}),(0,a.kt)("h2",{id:"executeoperations--operation"},"execute(operations) \u21d2 ",(0,a.kt)("code",null,"Operation")),(0,a.kt)("p",null,"Execute a sequence of operations.\nWraps ",(0,a.kt)("inlineCode",{parentName:"p"},"@openfn/language-common/execute"),", and prepends initial state for resourcemap."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Kind"),": global function  "),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Param"),(0,a.kt)("th",{parentName:"tr",align:null},"Type"),(0,a.kt)("th",{parentName:"tr",align:null},"Description"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"operations"),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("code",null,"Operations")),(0,a.kt)("td",{parentName:"tr",align:null},"Operations to be performed.")))),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Example"),"  "),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"execute(\n  create('foo'),\n  delete('bar')\n)(state)\n")),(0,a.kt)("a",{name:"submitSite"}),(0,a.kt)("h2",{id:"submitsiteeventdata--operation"},"submitSite(eventData) \u21d2 ",(0,a.kt)("code",null,"Operation")),(0,a.kt)("p",null,"Create an event"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Kind"),": global function  "),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Param"),(0,a.kt)("th",{parentName:"tr",align:null},"Type"),(0,a.kt)("th",{parentName:"tr",align:null},"Description"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"eventData"),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("code",null,"object")),(0,a.kt)("td",{parentName:"tr",align:null},"Payload data for the event")))),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Example"),"  "),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"execute(\n  event(eventData)\n)(state)\n")))}d.isMDXComponent=!0}}]);