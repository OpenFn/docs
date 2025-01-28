"use strict";(self.webpackChunk_openfn_docs=self.webpackChunk_openfn_docs||[]).push([[30556],{73664:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>i,default:()=>g,frontMatter:()=>o,metadata:()=>s,toc:()=>c});var a=t(58168),r=(t(96540),t(15680));const o={title:"Config for wigal-sms",id:"wigal-sms-configuration-schema",keywords:["adaptor","configuration-schema","wigal-sms"]},i=void 0,s={unversionedId:"packages/wigal-sms-configuration-schema",id:"packages/wigal-sms-configuration-schema",title:"Config for wigal-sms",description:"Jobs that use the wigal-sms adaptor may require authentication. A",source:"@site/adaptors/packages/wigal-sms-configuration-schema.md",sourceDirName:"packages",slug:"/packages/wigal-sms-configuration-schema",permalink:"/adaptors/packages/wigal-sms-configuration-schema",draft:!1,tags:[],version:"current",frontMatter:{title:"Config for wigal-sms",id:"wigal-sms-configuration-schema",keywords:["adaptor","configuration-schema","wigal-sms"]},sidebar:"adaptors",previous:{title:"wigal-sms@0.1.0",permalink:"/adaptors/packages/wigal-sms-docs"},next:{title:"wigal-sms changelog",permalink:"/adaptors/packages/wigal-sms-changelog"}},l={},c=[{value:"Sample Configuration",id:"sample-configuration",level:2},{value:"Full Schema",id:"full-schema",level:2}],p={toc:c},u="wrapper";function g(e){let{components:n,...t}=e;return(0,r.yg)(u,(0,a.A)({},p,t,{components:n,mdxType:"MDXLayout"}),(0,r.yg)("p",null,"Jobs that use the ",(0,r.yg)("inlineCode",{parentName:"p"},"wigal-sms"),' adaptor may require authentication. A\n"credential" for the ',(0,r.yg)("inlineCode",{parentName:"p"},"wigal-sms")," adaptor will follow the schema below. When\nusing the CLI, you can set up your own ",(0,r.yg)("inlineCode",{parentName:"p"},"state.configuration")," by using the\nsample below."),(0,r.yg)("h2",{id:"sample-configuration"},"Sample Configuration"),(0,r.yg)("p",null,"  Paste this into the ",(0,r.yg)("inlineCode",{parentName:"p"},"configuration")," key of your ",(0,r.yg)("inlineCode",{parentName:"p"},"state.json")," file and\nmodify the values to run jobs locally."),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-json"},'{\n  "apiKey": "@some(!)apikey",\n  "username": "test@openfn.org"\n}\n')),(0,r.yg)("h2",{id:"full-schema"},"Full Schema"),(0,r.yg)("p",null,"  The full configuration schema describes each attribute of the credential and\nnotes those that are required."),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-json"},'{\n  "$schema": "http://json-schema.org/draft-07/schema#",\n  "properties": {\n      "baseUrl": {\n          "title": "Base URL",\n          "anyOf": [\n              {\n                  "type": "string"\n              },\n              {\n                  "type": "null"\n              }\n          ],\n          "description": "The base URL (https://frogapi.wigal.com.gh)",\n          "format": "uri",\n          "minLength": 1,\n          "examples": [\n              "https://frogapi.wigal.com.gh"\n          ]\n      },\n      "username": {\n          "title": "Username",\n          "type": "string",\n          "description": "Username",\n          "examples": [\n              "test@openfn.org"\n          ]\n      },\n      "apiKey": {\n          "title": "API-KEY",\n          "type": "string",\n          "description": "API-KEY",\n          "writeOnly": true,\n          "examples": [\n              "@some(!)apikey"\n          ]\n      }\n  },\n  "type": "object",\n  "additionalProperties": true,\n  "required": [\n      "apiKey",\n      "username"\n  ]\n}\n')))}g.isMDXComponent=!0},15680:(e,n,t)=>{t.d(n,{xA:()=>p,yg:()=>f});var a=t(96540);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var l=a.createContext({}),c=function(e){var n=a.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},p=function(e){var n=c(e.components);return a.createElement(l.Provider,{value:n},e.children)},u="mdxType",g={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},m=a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,o=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),u=c(t),m=r,f=u["".concat(l,".").concat(m)]||u[m]||g[m]||o;return t?a.createElement(f,i(i({ref:n},p),{},{components:t})):a.createElement(f,i({ref:n},p))}));function f(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var o=t.length,i=new Array(o);i[0]=m;var s={};for(var l in n)hasOwnProperty.call(n,l)&&(s[l]=n[l]);s.originalType=e,s[u]="string"==typeof e?e:r,i[1]=s;for(var c=2;c<o;c++)i[c]=t[c];return a.createElement.apply(null,i)}return a.createElement.apply(null,t)}m.displayName="MDXCreateElement"}}]);