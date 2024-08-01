"use strict";(self.webpackChunk_openfn_docs=self.webpackChunk_openfn_docs||[]).push([[62684],{15680:(e,n,a)=>{a.d(n,{xA:()=>p,yg:()=>g});var t=a(96540);function r(e,n,a){return n in e?Object.defineProperty(e,n,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[n]=a,e}function o(e,n){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),a.push.apply(a,t)}return a}function i(e){for(var n=1;n<arguments.length;n++){var a=null!=arguments[n]?arguments[n]:{};n%2?o(Object(a),!0).forEach((function(n){r(e,n,a[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(a,n))}))}return e}function s(e,n){if(null==e)return{};var a,t,r=function(e,n){if(null==e)return{};var a,t,r={},o=Object.keys(e);for(t=0;t<o.length;t++)a=o[t],n.indexOf(a)>=0||(r[a]=e[a]);return r}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(t=0;t<o.length;t++)a=o[t],n.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var c=t.createContext({}),l=function(e){var n=t.useContext(c),a=n;return e&&(a="function"==typeof e?e(n):i(i({},n),e)),a},p=function(e){var n=l(e.components);return t.createElement(c.Provider,{value:n},e.children)},u="mdxType",f={inlineCode:"code",wrapper:function(e){var n=e.children;return t.createElement(t.Fragment,{},n)}},m=t.forwardRef((function(e,n){var a=e.components,r=e.mdxType,o=e.originalType,c=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),u=l(a),m=r,g=u["".concat(c,".").concat(m)]||u[m]||f[m]||o;return a?t.createElement(g,i(i({ref:n},p),{},{components:a})):t.createElement(g,i({ref:n},p))}));function g(e,n){var a=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var o=a.length,i=new Array(o);i[0]=m;var s={};for(var c in n)hasOwnProperty.call(n,c)&&(s[c]=n[c]);s.originalType=e,s[u]="string"==typeof e?e:r,i[1]=s;for(var l=2;l<o;l++)i[l]=a[l];return t.createElement.apply(null,i)}return t.createElement.apply(null,a)}m.displayName="MDXCreateElement"},63018:(e,n,a)=>{a.r(n),a.d(n,{assets:()=>c,contentTitle:()=>i,default:()=>f,frontMatter:()=>o,metadata:()=>s,toc:()=>l});var t=a(58168),r=(a(96540),a(15680));const o={title:"Config for asana",id:"asana-configuration-schema",keywords:["adaptor","configuration-schema","asana"]},i=void 0,s={unversionedId:"packages/asana-configuration-schema",id:"packages/asana-configuration-schema",title:"Config for asana",description:"Jobs that use the asana adaptor may require authentication. A",source:"@site/adaptors/packages/asana-configuration-schema.md",sourceDirName:"packages",slug:"/packages/asana-configuration-schema",permalink:"/adaptors/packages/asana-configuration-schema",draft:!1,tags:[],version:"current",frontMatter:{title:"Config for asana",id:"asana-configuration-schema",keywords:["adaptor","configuration-schema","asana"]},sidebar:"adaptors",previous:{title:"asana@4.0.0",permalink:"/adaptors/packages/asana-docs"},next:{title:"Asana-test",permalink:"/adaptors/library/jobs/auto/Asana-test-2024-07-29"}},c={},l=[{value:"Sample Configuration",id:"sample-configuration",level:2},{value:"Full Schema",id:"full-schema",level:2}],p={toc:l},u="wrapper";function f(e){let{components:n,...a}=e;return(0,r.yg)(u,(0,t.A)({},p,a,{components:n,mdxType:"MDXLayout"}),(0,r.yg)("p",null,"Jobs that use the ",(0,r.yg)("inlineCode",{parentName:"p"},"asana"),' adaptor may require authentication. A\n"credential" for the ',(0,r.yg)("inlineCode",{parentName:"p"},"asana")," adaptor will follow the schema below. When\nusing the CLI, you can set up your own ",(0,r.yg)("inlineCode",{parentName:"p"},"state.configuration")," by using the\nsample below."),(0,r.yg)("h2",{id:"sample-configuration"},"Sample Configuration"),(0,r.yg)("p",null,"  Paste this into the ",(0,r.yg)("inlineCode",{parentName:"p"},"configuration")," key of your ",(0,r.yg)("inlineCode",{parentName:"p"},"state.json")," file and\nmodify the values to run jobs locally."),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-json"},'{\n  "apiVersion": "1.0",\n  "token": "sample-tokenyWSJdXBACMLLWMNGgADFA"\n}\n')),(0,r.yg)("h2",{id:"full-schema"},"Full Schema"),(0,r.yg)("p",null,"  The full configuration schema describes each attribute of the credential and\nnotes those that are required."),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-json"},'{\n  "$schema": "http://json-schema.org/draft-07/schema#",\n  "properties": {\n      "apiVersion": {\n          "title": "API Version",\n          "type": "string",\n          "description": "The API version",\n          "examples": [\n              "1.0"\n          ]\n      },\n      "token": {\n          "title": "Token",\n          "type": "string",\n          "description": "The API token",\n          "examples": [\n              "sample-tokenyWSJdXBACMLLWMNGgADFA"\n          ]\n      }\n  },\n  "type": "object",\n  "additionalProperties": true,\n  "required": [\n      "apiVersion",\n      "token"\n  ]\n}\n')))}f.isMDXComponent=!0}}]);