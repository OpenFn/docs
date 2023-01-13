"use strict";(self.webpackChunk_openfn_docs=self.webpackChunk_openfn_docs||[]).push([[17753],{3905:(e,t,n)=>{n.d(t,{Zo:()=>i,kt:()=>k});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),c=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},i=function(e){var t=c(e.components);return r.createElement(s.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,i=p(e,["components","mdxType","originalType","parentName"]),u=c(n),m=a,k=u["".concat(s,".").concat(m)]||u[m]||d[m]||o;return n?r.createElement(k,l(l({ref:t},i),{},{components:n})):r.createElement(k,l({ref:t},i))}));function k(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,l=new Array(o);l[0]=m;var p={};for(var s in t)hasOwnProperty.call(t,s)&&(p[s]=t[s]);p.originalType=e,p[u]="string"==typeof e?e:a,l[1]=p;for(var c=2;c<o;c++)l[c]=n[c];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},44575:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>u,frontMatter:()=>o,metadata:()=>p,toc:()=>c});var r=n(87462),a=(n(67294),n(3905));const o={title:"surveycto@1.1.0",id:"surveycto-docs",keywords:["adaptor","surveycto"]},l=void 0,p={unversionedId:"packages/surveycto-docs",id:"packages/surveycto-docs",title:"surveycto@1.1.0",description:"Functions",source:"@site/adaptors/packages/surveycto-docs.md",sourceDirName:"packages",slug:"/packages/surveycto-docs",permalink:"/fr/adaptors/packages/surveycto-docs",draft:!1,tags:[],version:"current",frontMatter:{title:"surveycto@1.1.0",id:"surveycto-docs",keywords:["adaptor","surveycto"]},sidebar:"adaptors",previous:{title:"SurveyCTO",permalink:"/fr/adaptors/surveycto"},next:{title:"surveycto changelog",permalink:"/fr/adaptors/packages/surveycto-changelog"}},s={},c=[{value:"Functions",id:"functions",level:2},{value:"execute(operations) \u21d2 <code>Operation</code>",id:"executeoperations--operation",level:2},{value:"fetchSubmissions(params) \u21d2 <code>Operation</code>",id:"fetchsubmissionsparams--operation",level:2}],i={toc:c};function u(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},i,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"functions"},"Functions"),(0,a.kt)("dl",null,(0,a.kt)("dt",null,(0,a.kt)("a",{href:"#execute"},"execute(operations)")," \u21d2 ",(0,a.kt)("code",null,"Operation")),(0,a.kt)("dd",null,(0,a.kt)("p",null,"Execute a sequence of operations. Wraps ",(0,a.kt)("code",null,"@openfn/language-common/execute"),", and prepends initial state for http.")),(0,a.kt)("dt",null,(0,a.kt)("a",{href:"#fetchSubmissions"},"fetchSubmissions(params)")," \u21d2 ",(0,a.kt)("code",null,"Operation")),(0,a.kt)("dd",null,(0,a.kt)("p",null,"Make a GET request and POST it somewhere else"))),(0,a.kt)("a",{name:"execute"}),(0,a.kt)("h2",{id:"executeoperations--operation"},"execute(operations) \u21d2 ",(0,a.kt)("code",null,"Operation")),(0,a.kt)("p",null,"Execute a sequence of operations.\nWraps ",(0,a.kt)("inlineCode",{parentName:"p"},"@openfn/language-common/execute"),", and prepends initial state for http."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Kind"),": global function  "),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Param"),(0,a.kt)("th",{parentName:"tr",align:null},"Type"),(0,a.kt)("th",{parentName:"tr",align:null},"Description"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"operations"),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("code",null,"Operations")),(0,a.kt)("td",{parentName:"tr",align:null},"Operations to be performed.")))),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Example"),"  "),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"execute(\n  create('foo'),\n  delete('bar')\n)(state)\n")),(0,a.kt)("a",{name:"fetchSubmissions"}),(0,a.kt)("h2",{id:"fetchsubmissionsparams--operation"},"fetchSubmissions(params) \u21d2 ",(0,a.kt)("code",null,"Operation")),(0,a.kt)("p",null,"Make a GET request and POST it somewhere else"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Kind"),": global function  "),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Param"),(0,a.kt)("th",{parentName:"tr",align:null},"Type"),(0,a.kt)("th",{parentName:"tr",align:null},"Description"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"params"),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("code",null,"object")),(0,a.kt)("td",{parentName:"tr",align:null},"data to make the fetch")))),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Example"),"  "),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"execute(\n  fetch(params)\n)(state)\n")))}u.isMDXComponent=!0}}]);