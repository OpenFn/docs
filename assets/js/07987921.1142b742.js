"use strict";(self.webpackChunk_openfn_docs=self.webpackChunk_openfn_docs||[]).push([[94248],{21723:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>s,contentTitle:()=>i,default:()=>g,frontMatter:()=>o,metadata:()=>c,toc:()=>l});var r=t(58168),a=(t(96540),t(15680));const o={title:"Config for vtiger",id:"vtiger-configuration-schema",keywords:["adaptor","configuration-schema","vtiger"]},i=void 0,c={unversionedId:"packages/vtiger-configuration-schema",id:"packages/vtiger-configuration-schema",title:"Config for vtiger",description:"Jobs that use the vtiger adaptor may require authentication. A",source:"@site/adaptors/packages/vtiger-configuration-schema.md",sourceDirName:"packages",slug:"/packages/vtiger-configuration-schema",permalink:"/adaptors/packages/vtiger-configuration-schema",draft:!1,tags:[],version:"current",frontMatter:{title:"Config for vtiger",id:"vtiger-configuration-schema",keywords:["adaptor","configuration-schema","vtiger"]},sidebar:"adaptors",previous:{title:"vtiger@1.3.2",permalink:"/adaptors/packages/vtiger-docs"},next:{title:"vtiger changelog",permalink:"/adaptors/packages/vtiger-changelog"}},s={},l=[{value:"Sample Configuration",id:"sample-configuration",level:2},{value:"Full Schema",id:"full-schema",level:2}],p={toc:l},u="wrapper";function g(e){let{components:n,...t}=e;return(0,a.yg)(u,(0,r.A)({},p,t,{components:n,mdxType:"MDXLayout"}),(0,a.yg)("p",null,"Jobs that use the ",(0,a.yg)("inlineCode",{parentName:"p"},"vtiger"),' adaptor may require authentication. A\n"credential" for the ',(0,a.yg)("inlineCode",{parentName:"p"},"vtiger")," adaptor will follow the schema below. When\nusing the CLI, you can set up your own ",(0,a.yg)("inlineCode",{parentName:"p"},"state.configuration")," by using the\nsample below."),(0,a.yg)("h2",{id:"sample-configuration"},"Sample Configuration"),(0,a.yg)("p",null,"  Paste this into the ",(0,a.yg)("inlineCode",{parentName:"p"},"configuration")," key of your ",(0,a.yg)("inlineCode",{parentName:"p"},"state.json")," file and\nmodify the values to run jobs locally."),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-json"},'{\n  "hostUrl": "https://openfunction.od2.vtiger.com",\n  "username": "test@openfn.org",\n  "accessToken": "@some()!veryHugeToke"\n}\n')),(0,a.yg)("h2",{id:"full-schema"},"Full Schema"),(0,a.yg)("p",null,"  The full configuration schema describes each attribute of the credential and\nnotes those that are required."),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-json"},'{\n  "$schema": "http://json-schema.org/draft-07/schema#",\n  "properties": {\n      "hostUrl": {\n          "title": "Host URL",\n          "type": "string",\n          "description": "VTiger instance host URL",\n          "format": "uri",\n          "minLength": 1,\n          "examples": [\n              "https://openfunction.od2.vtiger.com"\n          ]\n      },\n      "username": {\n          "title": "Username",\n          "type": "string",\n          "description": "VTiger instance username",\n          "minLength": 1,\n          "examples": [\n              "test@openfn.org"\n          ]\n      },\n      "accessToken": {\n          "title": "Access Token",\n          "type": "string",\n          "description": "VTiger instance access token",\n          "writeOnly": true,\n          "minLength": 1,\n          "examples": [\n              "@some()!veryHugeToke"\n          ]\n      }\n  },\n  "type": "object",\n  "additionalProperties": true,\n  "required": [\n      "hostUrl",\n      "username",\n      "accessToken"\n  ]\n}\n')))}g.isMDXComponent=!0},15680:(e,n,t)=>{t.d(n,{xA:()=>p,yg:()=>f});var r=t(96540);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function c(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var s=r.createContext({}),l=function(e){var n=r.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},p=function(e){var n=l(e.components);return r.createElement(s.Provider,{value:n},e.children)},u="mdxType",g={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},m=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),u=l(t),m=a,f=u["".concat(s,".").concat(m)]||u[m]||g[m]||o;return t?r.createElement(f,i(i({ref:n},p),{},{components:t})):r.createElement(f,i({ref:n},p))}));function f(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var o=t.length,i=new Array(o);i[0]=m;var c={};for(var s in n)hasOwnProperty.call(n,s)&&(c[s]=n[s]);c.originalType=e,c[u]="string"==typeof e?e:a,i[1]=c;for(var l=2;l<o;l++)i[l]=t[l];return r.createElement.apply(null,i)}return r.createElement.apply(null,t)}m.displayName="MDXCreateElement"}}]);