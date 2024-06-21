"use strict";(self.webpackChunk_openfn_docs=self.webpackChunk_openfn_docs||[]).push([[97543],{15680:(e,a,t)=>{t.d(a,{xA:()=>s,yg:()=>u});var r=t(96540);function n(e,a,t){return a in e?Object.defineProperty(e,a,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[a]=t,e}function o(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);a&&(r=r.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,r)}return t}function c(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?o(Object(t),!0).forEach((function(a){n(e,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))}))}return e}function l(e,a){if(null==e)return{};var t,r,n=function(e,a){if(null==e)return{};var t,r,n={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],a.indexOf(t)>=0||(n[t]=e[t]);return n}(e,a);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],a.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(n[t]=e[t])}return n}var p=r.createContext({}),d=function(e){var a=r.useContext(p),t=a;return e&&(t="function"==typeof e?e(a):c(c({},a),e)),t},s=function(e){var a=d(e.components);return r.createElement(p.Provider,{value:a},e.children)},m="mdxType",y={inlineCode:"code",wrapper:function(e){var a=e.children;return r.createElement(r.Fragment,{},a)}},g=r.forwardRef((function(e,a){var t=e.components,n=e.mdxType,o=e.originalType,p=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),m=d(t),g=n,u=m["".concat(p,".").concat(g)]||m[g]||y[g]||o;return t?r.createElement(u,c(c({ref:a},s),{},{components:t})):r.createElement(u,c({ref:a},s))}));function u(e,a){var t=arguments,n=a&&a.mdxType;if("string"==typeof e||n){var o=t.length,c=new Array(o);c[0]=g;var l={};for(var p in a)hasOwnProperty.call(a,p)&&(l[p]=a[p]);l.originalType=e,l[m]="string"==typeof e?e:n,c[1]=l;for(var d=2;d<o;d++)c[d]=t[d];return r.createElement.apply(null,c)}return r.createElement.apply(null,t)}g.displayName="MDXCreateElement"},63827:(e,a,t)=>{t.r(a),t.d(a,{assets:()=>p,contentTitle:()=>c,default:()=>y,frontMatter:()=>o,metadata:()=>l,toc:()=>d});var r=t(58168),n=(t(96540),t(15680));const o={title:"khanacademy@0.5.0",id:"khanacademy-docs",keywords:["adaptor","khanacademy"]},c=void 0,l={unversionedId:"packages/khanacademy-docs",id:"packages/khanacademy-docs",title:"khanacademy@0.5.0",description:"The following functions are exported from the common adaptor:",source:"@site/adaptors/packages/khanacademy-docs.md",sourceDirName:"packages",slug:"/packages/khanacademy-docs",permalink:"/adaptors/packages/khanacademy-docs",draft:!1,tags:[],version:"current",frontMatter:{title:"khanacademy@0.5.0",id:"khanacademy-docs",keywords:["adaptor","khanacademy"]},sidebar:"adaptors",previous:{title:"http developer readme",permalink:"/adaptors/packages/http-readme"},next:{title:"Config for khanacademy",permalink:"/adaptors/packages/khanacademy-configuration-schema"}},p={},d=[{value:"fetch",id:"fetch",level:2}],s={toc:d},m="wrapper";function y(e){let{components:a,...t}=e;return(0,n.yg)(m,(0,r.A)({},s,t,{components:a,mdxType:"MDXLayout"}),(0,n.yg)("p",null,"The following functions are exported from the common adaptor:"),(0,n.yg)("dl",null,(0,n.yg)("dt",null,(0,n.yg)("a",{href:"/adaptors/packages/common-docs#alterstate"},"alterState()")),(0,n.yg)("dt",null,(0,n.yg)("a",{href:"/adaptors/packages/common-docs#datapath"},"dataPath()")),(0,n.yg)("dt",null,(0,n.yg)("a",{href:"/adaptors/packages/common-docs#datavalue"},"dataValue()")),(0,n.yg)("dt",null,(0,n.yg)("a",{href:"/adaptors/packages/common-docs#field"},"field()")),(0,n.yg)("dt",null,(0,n.yg)("a",{href:"/adaptors/packages/common-docs#fields"},"fields()")),(0,n.yg)("dt",null,(0,n.yg)("a",{href:"/adaptors/packages/common-docs#fn"},"fn()")),(0,n.yg)("dt",null,(0,n.yg)("a",{href:"/adaptors/packages/common-docs#fnif"},"fnIf()")),(0,n.yg)("dt",null,(0,n.yg)("a",{href:"/adaptors/packages/common-docs#lastreferencevalue"},"lastReferenceValue()")),(0,n.yg)("dt",null,(0,n.yg)("a",{href:"/adaptors/packages/common-docs#merge"},"merge()")),(0,n.yg)("dt",null,(0,n.yg)("a",{href:"/adaptors/packages/common-docs#sourcevalue"},"sourceValue()"))),(0,n.yg)("h2",{id:"fetch"},"fetch"),(0,n.yg)("p",null,"fetch(params) \u21d2 ",(0,n.yg)("code",null,"Operation")),(0,n.yg)("p",null,"Fetch data from the Khan Academy API"),(0,n.yg)("table",null,(0,n.yg)("thead",{parentName:"table"},(0,n.yg)("tr",{parentName:"thead"},(0,n.yg)("th",{parentName:"tr",align:null},"Param"),(0,n.yg)("th",{parentName:"tr",align:null},"Type"),(0,n.yg)("th",{parentName:"tr",align:null},"Description"))),(0,n.yg)("tbody",{parentName:"table"},(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:null},"params"),(0,n.yg)("td",{parentName:"tr",align:null},(0,n.yg)("code",null,"object")),(0,n.yg)("td",{parentName:"tr",align:null},"data to make the query")))),(0,n.yg)("p",null,(0,n.yg)("strong",{parentName:"p"},"Example"),"  "),(0,n.yg)("pre",null,(0,n.yg)("code",{parentName:"pre",className:"language-js"},"execute(\n  fetch(params)\n)(state)\n")),(0,n.yg)("hr",null))}y.isMDXComponent=!0}}]);