"use strict";(self.webpackChunk_openfn_docs=self.webpackChunk_openfn_docs||[]).push([[52765],{3905:(t,e,a)=>{a.d(e,{Zo:()=>u,kt:()=>k});var n=a(67294);function r(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function l(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,n)}return a}function p(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?l(Object(a),!0).forEach((function(e){r(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function o(t,e){if(null==t)return{};var a,n,r=function(t,e){if(null==t)return{};var a,n,r={},l=Object.keys(t);for(n=0;n<l.length;n++)a=l[n],e.indexOf(a)>=0||(r[a]=t[a]);return r}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(n=0;n<l.length;n++)a=l[n],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(r[a]=t[a])}return r}var c=n.createContext({}),i=function(t){var e=n.useContext(c),a=e;return t&&(a="function"==typeof t?t(e):p(p({},e),t)),a},u=function(t){var e=i(t.components);return n.createElement(c.Provider,{value:e},t.children)},s="mdxType",m={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},d=n.forwardRef((function(t,e){var a=t.components,r=t.mdxType,l=t.originalType,c=t.parentName,u=o(t,["components","mdxType","originalType","parentName"]),s=i(a),d=r,k=s["".concat(c,".").concat(d)]||s[d]||m[d]||l;return a?n.createElement(k,p(p({ref:e},u),{},{components:a})):n.createElement(k,p({ref:e},u))}));function k(t,e){var a=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var l=a.length,p=new Array(l);p[0]=d;var o={};for(var c in e)hasOwnProperty.call(e,c)&&(o[c]=e[c]);o.originalType=t,o[s]="string"==typeof t?t:r,p[1]=o;for(var i=2;i<l;i++)p[i]=a[i];return n.createElement.apply(null,p)}return n.createElement.apply(null,a)}d.displayName="MDXCreateElement"},51839:(t,e,a)=>{a.r(e),a.d(e,{assets:()=>c,contentTitle:()=>p,default:()=>m,frontMatter:()=>l,metadata:()=>o,toc:()=>i});var n=a(87462),r=(a(67294),a(3905));const l={title:"template@1.7.8",id:"template-docs",keywords:["adaptor","template","create","createPatient"]},p=void 0,o={unversionedId:"packages/template-docs",id:"packages/template-docs",title:"template@1.7.8",description:"Functions",source:"@site/adaptors/packages/template-docs.md",sourceDirName:"packages",slug:"/packages/template-docs",permalink:"/adaptors/packages/template-docs",draft:!1,tags:[],version:"current",frontMatter:{title:"template@1.7.8",id:"template-docs",keywords:["adaptor","template","create","createPatient"]},sidebar:"adaptors",previous:{title:"telerivet developer readme",permalink:"/adaptors/packages/telerivet-readme"},next:{title:"Config for template",permalink:"/adaptors/packages/template-configuration-schema"}},c={},i=[{value:"Functions",id:"functions",level:2},{value:"create",id:"create",level:2},{value:"createPatient",id:"createpatient",level:2}],u={toc:i},s="wrapper";function m(t){let{components:e,...a}=t;return(0,r.kt)(s,(0,n.Z)({},u,a,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"functions"},"Functions"),(0,r.kt)("dl",null,(0,r.kt)("dt",null,(0,r.kt)("a",{href:"#create"},"create(path, params, callback)")),(0,r.kt)("dt",null,(0,r.kt)("a",{href:"#createPatient"},"createPatient(params, callback)"))),(0,r.kt)("h2",{id:"create"},"create"),(0,r.kt)("p",null,"create(path, params, callback) \u21d2 ",(0,r.kt)("code",null,"Operation"),"\nCreates a fictional resource in a fictional destination system using a POST request"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Kind"),": global function",(0,r.kt)("br",{parentName:"p"}),"\n",(0,r.kt)("strong",{parentName:"p"},"Access"),": public  "),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Param"),(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"path"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("code",null,"string")),(0,r.kt)("td",{parentName:"tr",align:null},"Path to resource")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"params"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("code",null,"object")),(0,r.kt)("td",{parentName:"tr",align:null},"data to create the new resource")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"callback"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("code",null,"function")),(0,r.kt)("td",{parentName:"tr",align:null},"(Optional) callback function")))),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Example"),"  "),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},'create("/endpoint", {"foo": "bar"})\n')),(0,r.kt)("hr",null),(0,r.kt)("h2",{id:"createpatient"},"createPatient"),(0,r.kt)("p",null,"createPatient(params, callback) \u21d2 ",(0,r.kt)("code",null,"Operation"),"\nCreate a fictional patient in a fictional universe with a fictional REST api"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Kind"),": global function",(0,r.kt)("br",{parentName:"p"}),"\n",(0,r.kt)("strong",{parentName:"p"},"Access"),": public  "),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Param"),(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"params"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("code",null,"object")),(0,r.kt)("td",{parentName:"tr",align:null},"data to create the new resource")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"callback"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("code",null,"function")),(0,r.kt)("td",{parentName:"tr",align:null},"(Optional) callback function")))),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Example"),"  "),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},'createPatient({"foo": "bar"})\n')),(0,r.kt)("hr",null))}m.isMDXComponent=!0}}]);