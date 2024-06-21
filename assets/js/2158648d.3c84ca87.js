"use strict";(self.webpackChunk_openfn_docs=self.webpackChunk_openfn_docs||[]).push([[50213],{15680:(e,t,a)=>{a.d(t,{xA:()=>d,yg:()=>y});var r=a(96540);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function c(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},o=Object.keys(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var s=r.createContext({}),p=function(e){var t=r.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},d=function(e){var t=p(e.components);return r.createElement(s.Provider,{value:t},e.children)},i="mdxType",g={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,o=e.originalType,s=e.parentName,d=c(e,["components","mdxType","originalType","parentName"]),i=p(a),u=n,y=i["".concat(s,".").concat(u)]||i[u]||g[u]||o;return a?r.createElement(y,l(l({ref:t},d),{},{components:a})):r.createElement(y,l({ref:t},d))}));function y(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=a.length,l=new Array(o);l[0]=u;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c[i]="string"==typeof e?e:n,l[1]=c;for(var p=2;p<o;p++)l[p]=a[p];return r.createElement.apply(null,l)}return r.createElement.apply(null,a)}u.displayName="MDXCreateElement"},51077:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>g,frontMatter:()=>o,metadata:()=>c,toc:()=>p});var r=a(58168),n=(a(96540),a(15680));const o={title:"telerivet@0.3.0",id:"telerivet-docs",keywords:["adaptor","telerivet"]},l=void 0,c={unversionedId:"packages/telerivet-docs",id:"packages/telerivet-docs",title:"telerivet@0.3.0",description:"The following functions are exported from the common adaptor:",source:"@site/adaptors/packages/telerivet-docs.md",sourceDirName:"packages",slug:"/packages/telerivet-docs",permalink:"/adaptors/packages/telerivet-docs",draft:!1,tags:[],version:"current",frontMatter:{title:"telerivet@0.3.0",id:"telerivet-docs",keywords:["adaptor","telerivet"]},sidebar:"adaptors",previous:{title:"Tableau",permalink:"/adaptors/tableau"},next:{title:"Config for telerivet",permalink:"/adaptors/packages/telerivet-configuration-schema"}},s={},p=[{value:"send",id:"send",level:2}],d={toc:p},i="wrapper";function g(e){let{components:t,...a}=e;return(0,n.yg)(i,(0,r.A)({},d,a,{components:t,mdxType:"MDXLayout"}),(0,n.yg)("p",null,"The following functions are exported from the common adaptor:"),(0,n.yg)("dl",null,(0,n.yg)("dt",null,(0,n.yg)("a",{href:"/adaptors/packages/common-docs#alterstate"},"alterState()")),(0,n.yg)("dt",null,(0,n.yg)("a",{href:"/adaptors/packages/common-docs#datapath"},"dataPath()")),(0,n.yg)("dt",null,(0,n.yg)("a",{href:"/adaptors/packages/common-docs#datavalue"},"dataValue()")),(0,n.yg)("dt",null,(0,n.yg)("a",{href:"/adaptors/packages/common-docs#field"},"field()")),(0,n.yg)("dt",null,(0,n.yg)("a",{href:"/adaptors/packages/common-docs#fields"},"fields()")),(0,n.yg)("dt",null,(0,n.yg)("a",{href:"/adaptors/packages/common-docs#fn"},"fn()")),(0,n.yg)("dt",null,(0,n.yg)("a",{href:"/adaptors/packages/common-docs#fnif"},"fnIf()")),(0,n.yg)("dt",null,(0,n.yg)("a",{href:"/adaptors/packages/common-docs#lastreferencevalue"},"lastReferenceValue()")),(0,n.yg)("dt",null,(0,n.yg)("a",{href:"/adaptors/packages/common-docs#merge"},"merge()")),(0,n.yg)("dt",null,(0,n.yg)("a",{href:"/adaptors/packages/common-docs#sourcevalue"},"sourceValue()"))),(0,n.yg)("h2",{id:"send"},"send"),(0,n.yg)("p",null,"send(sendData) \u21d2 ",(0,n.yg)("code",null,"Operation")),(0,n.yg)("p",null,"Send a message"),(0,n.yg)("table",null,(0,n.yg)("thead",{parentName:"table"},(0,n.yg)("tr",{parentName:"thead"},(0,n.yg)("th",{parentName:"tr",align:null},"Param"),(0,n.yg)("th",{parentName:"tr",align:null},"Type"),(0,n.yg)("th",{parentName:"tr",align:null},"Description"))),(0,n.yg)("tbody",{parentName:"table"},(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:null},"sendData"),(0,n.yg)("td",{parentName:"tr",align:null},(0,n.yg)("code",null,"object")),(0,n.yg)("td",{parentName:"tr",align:null},"Payload data for the message")))),(0,n.yg)("p",null,(0,n.yg)("strong",{parentName:"p"},"Example"),"  "),(0,n.yg)("pre",null,(0,n.yg)("code",{parentName:"pre",className:"language-js"},"execute(\n  send(data)\n)(state)\n")),(0,n.yg)("hr",null))}g.isMDXComponent=!0}}]);