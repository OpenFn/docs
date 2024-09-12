"use strict";(self.webpackChunk_openfn_docs=self.webpackChunk_openfn_docs||[]).push([[43067],{92334:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>s,contentTitle:()=>i,default:()=>h,frontMatter:()=>a,metadata:()=>c,toc:()=>l});var o=t(58168),r=(t(96540),t(15680));const a={title:"Config for zoho",id:"zoho-configuration-schema",keywords:["adaptor","configuration-schema","zoho"]},i=void 0,c={unversionedId:"packages/zoho-configuration-schema",id:"packages/zoho-configuration-schema",title:"Config for zoho",description:"Jobs that use the zoho adaptor may require authentication. A",source:"@site/adaptors/packages/zoho-configuration-schema.md",sourceDirName:"packages",slug:"/packages/zoho-configuration-schema",permalink:"/adaptors/packages/zoho-configuration-schema",draft:!1,tags:[],version:"current",frontMatter:{title:"Config for zoho",id:"zoho-configuration-schema",keywords:["adaptor","configuration-schema","zoho"]},sidebar:"adaptors",previous:{title:"zoho@0.4.2",permalink:"/adaptors/packages/zoho-docs"},next:{title:"zoho changelog",permalink:"/adaptors/packages/zoho-changelog"}},s={},l=[{value:"Sample Configuration",id:"sample-configuration",level:2},{value:"Full Schema",id:"full-schema",level:2}],u={toc:l},p="wrapper";function h(e){let{components:n,...t}=e;return(0,r.yg)(p,(0,o.A)({},u,t,{components:n,mdxType:"MDXLayout"}),(0,r.yg)("p",null,"Jobs that use the ",(0,r.yg)("inlineCode",{parentName:"p"},"zoho"),' adaptor may require authentication. A\n"credential" for the ',(0,r.yg)("inlineCode",{parentName:"p"},"zoho")," adaptor will follow the schema below. When\nusing the CLI, you can set up your own ",(0,r.yg)("inlineCode",{parentName:"p"},"state.configuration")," by using the\nsample below."),(0,r.yg)("h2",{id:"sample-configuration"},"Sample Configuration"),(0,r.yg)("p",null,"  Paste this into the ",(0,r.yg)("inlineCode",{parentName:"p"},"configuration")," key of your ",(0,r.yg)("inlineCode",{parentName:"p"},"state.json")," file and\nmodify the values to run jobs locally."),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-json"},'{\n  "account": "yourzohoaccount",\n  "authToken": "secreauthtoken",\n  "apiVersion": "v2"\n}\n')),(0,r.yg)("h2",{id:"full-schema"},"Full Schema"),(0,r.yg)("p",null,"  The full configuration schema describes each attribute of the credential and\nnotes those that are required."),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-json"},'{\n  "$schema": "http://json-schema.org/draft-07/schema#",\n  "properties": {\n      "account": {\n          "title": "Account",\n          "type": "string",\n          "description": "Your Zoho account",\n          "minLength": 1,\n          "examples": [\n              "yourzohoaccount"\n          ]\n      },\n      "authToken": {\n          "title": "Auth Token",\n          "type": "string",\n          "description": "Your Zoho authentication token",\n          "writeOnly": true,\n          "minLength": 1,\n          "examples": [\n              "secreauthtoken"\n          ]\n      },\n      "apiVersion": {\n          "title": "API Version",\n          "type": "string",\n          "default": "v2",\n          "enum": [\n              "v1",\n              "v2"\n          ],\n          "description": "Zoho API version",\n          "minLength": 1,\n          "examples": [\n              "v2",\n              "v1"\n          ]\n      }\n  },\n  "type": "object",\n  "additionalProperties": true,\n  "required": [\n      "account",\n      "authToken",\n      "apiVersion"\n  ]\n}\n')))}h.isMDXComponent=!0},15680:(e,n,t)=>{t.d(n,{xA:()=>u,yg:()=>g});var o=t(96540);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);n&&(o=o.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,o)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function c(e,n){if(null==e)return{};var t,o,r=function(e,n){if(null==e)return{};var t,o,r={},a=Object.keys(e);for(o=0;o<a.length;o++)t=a[o],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)t=a[o],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var s=o.createContext({}),l=function(e){var n=o.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},u=function(e){var n=l(e.components);return o.createElement(s.Provider,{value:n},e.children)},p="mdxType",h={inlineCode:"code",wrapper:function(e){var n=e.children;return o.createElement(o.Fragment,{},n)}},f=o.forwardRef((function(e,n){var t=e.components,r=e.mdxType,a=e.originalType,s=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),p=l(t),f=r,g=p["".concat(s,".").concat(f)]||p[f]||h[f]||a;return t?o.createElement(g,i(i({ref:n},u),{},{components:t})):o.createElement(g,i({ref:n},u))}));function g(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var a=t.length,i=new Array(a);i[0]=f;var c={};for(var s in n)hasOwnProperty.call(n,s)&&(c[s]=n[s]);c.originalType=e,c[p]="string"==typeof e?e:r,i[1]=c;for(var l=2;l<a;l++)i[l]=t[l];return o.createElement.apply(null,i)}return o.createElement.apply(null,t)}f.displayName="MDXCreateElement"}}]);