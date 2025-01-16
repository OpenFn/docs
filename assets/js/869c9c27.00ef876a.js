"use strict";(self.webpackChunk_openfn_docs=self.webpackChunk_openfn_docs||[]).push([[72700],{3362:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>s,contentTitle:()=>i,default:()=>u,frontMatter:()=>a,metadata:()=>l,toc:()=>c});var r=t(58168),o=(t(96540),t(15680));const a={title:"Config for mogli",id:"mogli-configuration-schema",keywords:["adaptor","configuration-schema","mogli"]},i=void 0,l={unversionedId:"packages/mogli-configuration-schema",id:"packages/mogli-configuration-schema",title:"Config for mogli",description:"Jobs that use the mogli adaptor may require authentication. A",source:"@site/adaptors/packages/mogli-configuration-schema.md",sourceDirName:"packages",slug:"/packages/mogli-configuration-schema",permalink:"/adaptors/packages/mogli-configuration-schema",draft:!1,tags:[],version:"current",frontMatter:{title:"Config for mogli",id:"mogli-configuration-schema",keywords:["adaptor","configuration-schema","mogli"]},sidebar:"adaptors",previous:{title:"mogli@0.5.10",permalink:"/adaptors/packages/mogli-docs"},next:{title:"mogli changelog",permalink:"/adaptors/packages/mogli-changelog"}},s={},c=[{value:"Sample Configuration",id:"sample-configuration",level:2},{value:"Full Schema",id:"full-schema",level:2}],p={toc:c},g="wrapper";function u(e){let{components:n,...t}=e;return(0,o.yg)(g,(0,r.A)({},p,t,{components:n,mdxType:"MDXLayout"}),(0,o.yg)("p",null,"Jobs that use the ",(0,o.yg)("inlineCode",{parentName:"p"},"mogli"),' adaptor may require authentication. A\n"credential" for the ',(0,o.yg)("inlineCode",{parentName:"p"},"mogli")," adaptor will follow the schema below. When\nusing the CLI, you can set up your own ",(0,o.yg)("inlineCode",{parentName:"p"},"state.configuration")," by using the\nsample below."),(0,o.yg)("h2",{id:"sample-configuration"},"Sample Configuration"),(0,o.yg)("p",null,"  Paste this into the ",(0,o.yg)("inlineCode",{parentName:"p"},"configuration")," key of your ",(0,o.yg)("inlineCode",{parentName:"p"},"state.json")," file and\nmodify the values to run jobs locally."),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre",className:"language-json"},'{\n  "loginUrl": " https://www.orange-or-airtel-or-vodafone.com/api/",\n  "username": "admin",\n  "password": "@secret(!)Pass",\n  "securityToken": "dGF5bG9yOnNlY3JldA==",\n  "secret": "someotherThiNGfSECret"\n}\n')),(0,o.yg)("h2",{id:"full-schema"},"Full Schema"),(0,o.yg)("p",null,"  The full configuration schema describes each attribute of the credential and\nnotes those that are required."),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre",className:"language-json"},'{\n  "$schema": "http://json-schema.org/draft-07/schema#",\n  "properties": {\n      "loginUrl": {\n          "title": "Login URL",\n          "type": "string",\n          "description": "Mogli instance login URL",\n          "format": "uri",\n          "minLength": 1,\n          "examples": [\n              " https://www.orange-or-airtel-or-vodafone.com/api/"\n          ]\n      },\n      "username": {\n          "title": "Username",\n          "type": "string",\n          "description": "Mogli instance username",\n          "minLength": 1,\n          "examples": [\n              "admin"\n          ]\n      },\n      "password": {\n          "title": "Password",\n          "type": "string",\n          "description": "Mogli instance password",\n          "writeOnly": true,\n          "minLength": 1,\n          "examples": [\n              "@secret(!)Pass"\n          ]\n      },\n      "securityToken": {\n          "title": "Security Token",\n          "type": "string",\n          "description": "Mogli instance security token",\n          "writeOnly": true,\n          "minLength": 1,\n          "examples": [\n              "dGF5bG9yOnNlY3JldA=="\n          ]\n      },\n      "secret": {\n          "title": "Secret",\n          "type": "string",\n          "description": "Mogli instance secret",\n          "writeOnly": true,\n          "minLength": 1,\n          "examples": [\n              "someotherThiNGfSECret"\n          ]\n      }\n  },\n  "type": "object",\n  "additionalProperties": true,\n  "required": [\n      "loginUrl",\n      "username",\n      "password",\n      "securityToken",\n      "secret"\n  ]\n}\n')))}u.isMDXComponent=!0},15680:(e,n,t)=>{t.d(n,{xA:()=>p,yg:()=>d});var r=t(96540);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var s=r.createContext({}),c=function(e){var n=r.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},p=function(e){var n=c(e.components);return r.createElement(s.Provider,{value:n},e.children)},g="mdxType",u={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},m=r.forwardRef((function(e,n){var t=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),g=c(t),m=o,d=g["".concat(s,".").concat(m)]||g[m]||u[m]||a;return t?r.createElement(d,i(i({ref:n},p),{},{components:t})):r.createElement(d,i({ref:n},p))}));function d(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var a=t.length,i=new Array(a);i[0]=m;var l={};for(var s in n)hasOwnProperty.call(n,s)&&(l[s]=n[s]);l.originalType=e,l[g]="string"==typeof e?e:o,i[1]=l;for(var c=2;c<a;c++)i[c]=t[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,t)}m.displayName="MDXCreateElement"}}]);