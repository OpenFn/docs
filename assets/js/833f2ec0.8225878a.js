"use strict";(self.webpackChunk_openfn_docs=self.webpackChunk_openfn_docs||[]).push([[84877],{76966:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>i,default:()=>m,frontMatter:()=>a,metadata:()=>c,toc:()=>s});var r=t(58168),o=(t(96540),t(15680));const a={title:"Config for ocl",id:"ocl-configuration-schema",keywords:["adaptor","configuration-schema","ocl"]},i=void 0,c={unversionedId:"packages/ocl-configuration-schema",id:"packages/ocl-configuration-schema",title:"Config for ocl",description:"Jobs that use the ocl adaptor may require authentication. A",source:"@site/adaptors/packages/ocl-configuration-schema.md",sourceDirName:"packages",slug:"/packages/ocl-configuration-schema",permalink:"/adaptors/packages/ocl-configuration-schema",draft:!1,tags:[],version:"current",frontMatter:{title:"Config for ocl",id:"ocl-configuration-schema",keywords:["adaptor","configuration-schema","ocl"]},sidebar:"adaptors",previous:{title:"ocl@1.2.10",permalink:"/adaptors/packages/ocl-docs"},next:{title:"ocl changelog",permalink:"/adaptors/packages/ocl-changelog"}},l={},s=[{value:"Sample Configuration",id:"sample-configuration",level:2},{value:"Full Schema",id:"full-schema",level:2}],p={toc:s},u="wrapper";function m(e){let{components:n,...t}=e;return(0,o.yg)(u,(0,r.A)({},p,t,{components:n,mdxType:"MDXLayout"}),(0,o.yg)("p",null,"Jobs that use the ",(0,o.yg)("inlineCode",{parentName:"p"},"ocl"),' adaptor may require authentication. A\n"credential" for the ',(0,o.yg)("inlineCode",{parentName:"p"},"ocl")," adaptor will follow the schema below. When\nusing the CLI, you can set up your own ",(0,o.yg)("inlineCode",{parentName:"p"},"state.configuration")," by using the\nsample below."),(0,o.yg)("h2",{id:"sample-configuration"},"Sample Configuration"),(0,o.yg)("p",null,"  Paste this into the ",(0,o.yg)("inlineCode",{parentName:"p"},"configuration")," key of your ",(0,o.yg)("inlineCode",{parentName:"p"},"state.json")," file and\nmodify the values to run jobs locally."),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre",className:"language-json"},'{\n  "hostUrl": "https://api.openconceptlab.org/",\n  "username": "usernmame",\n  "password": "supersecretpassword"\n}\n')),(0,o.yg)("h2",{id:"full-schema"},"Full Schema"),(0,o.yg)("p",null,"  The full configuration schema describes each attribute of the credential and\nnotes those that are required."),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre",className:"language-json"},'{\n  "$schema": "http://json-schema.org/draft-07/schema#",\n  "properties": {\n      "hostUrl": {\n          "title": "Host URL",\n          "type": "string",\n          "description": "The OCL API URL",\n          "default": "https://api.openconceptlab.org/",\n          "format": "uri",\n          "minLength": 1,\n          "examples": [\n              "https://api.openconceptlab.org/"\n          ]\n      },\n      "username": {\n          "title": "Username",\n          "type": "string",\n          "description": "The username to log in to OCL",\n          "minLength": 1,\n          "examples": [\n              "usernmame"\n          ]\n      },\n      "password": {\n          "title": "Password",\n          "type": "string",\n          "description": "The password to log in to OCL",\n          "writeOnly": true,\n          "minLength": 1,\n          "examples": [\n              "supersecretpassword"\n          ]\n      }\n  },\n  "type": "object",\n  "additionalProperties": true,\n  "required": [\n      "hostUrl",\n      "username",\n      "password"\n  ]\n}\n')))}m.isMDXComponent=!0},15680:(e,n,t)=>{t.d(n,{xA:()=>p,yg:()=>f});var r=t(96540);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function c(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var l=r.createContext({}),s=function(e){var n=r.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},p=function(e){var n=s(e.components);return r.createElement(l.Provider,{value:n},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},g=r.forwardRef((function(e,n){var t=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),u=s(t),g=o,f=u["".concat(l,".").concat(g)]||u[g]||m[g]||a;return t?r.createElement(f,i(i({ref:n},p),{},{components:t})):r.createElement(f,i({ref:n},p))}));function f(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var a=t.length,i=new Array(a);i[0]=g;var c={};for(var l in n)hasOwnProperty.call(n,l)&&(c[l]=n[l]);c.originalType=e,c[u]="string"==typeof e?e:o,i[1]=c;for(var s=2;s<a;s++)i[s]=t[s];return r.createElement.apply(null,i)}return r.createElement.apply(null,t)}g.displayName="MDXCreateElement"}}]);