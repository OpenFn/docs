"use strict";(self.webpackChunk_openfn_docs=self.webpackChunk_openfn_docs||[]).push([[52424],{56419:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>p,contentTitle:()=>s,default:()=>m,frontMatter:()=>a,metadata:()=>i,toc:()=>c});var o=t(58168),r=(t(96540),t(15680));const a={title:"Config for openboxes",id:"openboxes-configuration-schema",keywords:["adaptor","configuration-schema","openboxes"]},s=void 0,i={unversionedId:"packages/openboxes-configuration-schema",id:"packages/openboxes-configuration-schema",title:"Config for openboxes",description:"Jobs that use the openboxes adaptor may require authentication. A",source:"@site/adaptors/packages/openboxes-configuration-schema.md",sourceDirName:"packages",slug:"/packages/openboxes-configuration-schema",permalink:"/adaptors/packages/openboxes-configuration-schema",draft:!1,tags:[],version:"current",frontMatter:{title:"Config for openboxes",id:"openboxes-configuration-schema",keywords:["adaptor","configuration-schema","openboxes"]},sidebar:"adaptors",previous:{title:"openboxes@1.0.0",permalink:"/adaptors/packages/openboxes-docs"},next:{title:"openboxes changelog",permalink:"/adaptors/packages/openboxes-changelog"}},p={},c=[{value:"Sample Configuration",id:"sample-configuration",level:2},{value:"Full Schema",id:"full-schema",level:2}],l={toc:c},u="wrapper";function m(e){let{components:n,...t}=e;return(0,r.yg)(u,(0,o.A)({},l,t,{components:n,mdxType:"MDXLayout"}),(0,r.yg)("p",null,"Jobs that use the ",(0,r.yg)("inlineCode",{parentName:"p"},"openboxes"),' adaptor may require authentication. A\n"credential" for the ',(0,r.yg)("inlineCode",{parentName:"p"},"openboxes")," adaptor will follow the schema below. When\nusing the CLI, you can set up your own ",(0,r.yg)("inlineCode",{parentName:"p"},"state.configuration")," by using the\nsample below."),(0,r.yg)("h2",{id:"sample-configuration"},"Sample Configuration"),(0,r.yg)("p",null,"  Paste this into the ",(0,r.yg)("inlineCode",{parentName:"p"},"configuration")," key of your ",(0,r.yg)("inlineCode",{parentName:"p"},"state.json")," file and\nmodify the values to run jobs locally."),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-json"},'{\n  "password": "@some(!)Str0ngp4ss0w0rd",\n  "username": "test@openfn.org",\n  "baseUrl": "https://demo.openboxes.com/openboxes/api"\n}\n')),(0,r.yg)("h2",{id:"full-schema"},"Full Schema"),(0,r.yg)("p",null,"  The full configuration schema describes each attribute of the credential and\nnotes those that are required."),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-json"},'{\n  "$schema": "http://json-schema.org/draft-07/schema#",\n  "properties": {\n      "baseUrl": {\n          "title": "Base URL",\n          "description": "The base URL (http://www.example.com)",\n          "format": "uri",\n          "minLength": 1,\n          "examples": [\n              "https://demo.openboxes.com/openboxes/api"\n          ]\n      },\n      "username": {\n          "title": "Username",\n          "type": "string",\n          "description": "Username",\n          "examples": [\n              "test@openfn.org"\n          ]\n      },\n      "password": {\n          "title": "Password",\n          "type": "string",\n          "description": "Password",\n          "writeOnly": true,\n          "examples": [\n              "@some(!)Str0ngp4ss0w0rd"\n          ]\n      }\n  },\n  "type": "object",\n  "additionalProperties": true,\n  "required": [\n      "password",\n      "username",\n      "baseUrl"\n  ]\n}\n')))}m.isMDXComponent=!0},15680:(e,n,t)=>{t.d(n,{xA:()=>l,yg:()=>g});var o=t(96540);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);n&&(o=o.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,o)}return t}function s(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function i(e,n){if(null==e)return{};var t,o,r=function(e,n){if(null==e)return{};var t,o,r={},a=Object.keys(e);for(o=0;o<a.length;o++)t=a[o],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)t=a[o],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var p=o.createContext({}),c=function(e){var n=o.useContext(p),t=n;return e&&(t="function"==typeof e?e(n):s(s({},n),e)),t},l=function(e){var n=c(e.components);return o.createElement(p.Provider,{value:n},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var n=e.children;return o.createElement(o.Fragment,{},n)}},f=o.forwardRef((function(e,n){var t=e.components,r=e.mdxType,a=e.originalType,p=e.parentName,l=i(e,["components","mdxType","originalType","parentName"]),u=c(t),f=r,g=u["".concat(p,".").concat(f)]||u[f]||m[f]||a;return t?o.createElement(g,s(s({ref:n},l),{},{components:t})):o.createElement(g,s({ref:n},l))}));function g(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var a=t.length,s=new Array(a);s[0]=f;var i={};for(var p in n)hasOwnProperty.call(n,p)&&(i[p]=n[p]);i.originalType=e,i[u]="string"==typeof e?e:r,s[1]=i;for(var c=2;c<a;c++)s[c]=t[c];return o.createElement.apply(null,s)}return o.createElement.apply(null,t)}f.displayName="MDXCreateElement"}}]);