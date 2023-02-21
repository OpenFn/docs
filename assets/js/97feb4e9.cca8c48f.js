"use strict";(self.webpackChunk_openfn_docs=self.webpackChunk_openfn_docs||[]).push([[17388],{3905:(e,n,t)=>{t.d(n,{Zo:()=>l,kt:()=>f});var a=t(67294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function c(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var p=a.createContext({}),s=function(e){var n=a.useContext(p),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},l=function(e){var n=s(e.components);return a.createElement(p.Provider,{value:n},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},g=a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,o=e.originalType,p=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),u=s(t),g=r,f=u["".concat(p,".").concat(g)]||u[g]||m[g]||o;return t?a.createElement(f,i(i({ref:n},l),{},{components:t})):a.createElement(f,i({ref:n},l))}));function f(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var o=t.length,i=new Array(o);i[0]=g;var c={};for(var p in n)hasOwnProperty.call(n,p)&&(c[p]=n[p]);c.originalType=e,c[u]="string"==typeof e?e:r,i[1]=c;for(var s=2;s<o;s++)i[s]=t[s];return a.createElement.apply(null,i)}return a.createElement.apply(null,t)}g.displayName="MDXCreateElement"},87294:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>p,contentTitle:()=>i,default:()=>m,frontMatter:()=>o,metadata:()=>c,toc:()=>s});var a=t(87462),r=(t(67294),t(3905));const o={title:"Config for magpi",id:"magpi-configuration-schema",keywords:["adaptor","configuration-schema","magpi"]},i=void 0,c={unversionedId:"packages/magpi-configuration-schema",id:"packages/magpi-configuration-schema",title:"Config for magpi",description:"Jobs that use the magpi adaptor may require authentication. A",source:"@site/adaptors/packages/magpi-configuration-schema.md",sourceDirName:"packages",slug:"/packages/magpi-configuration-schema",permalink:"/adaptors/packages/magpi-configuration-schema",draft:!1,tags:[],version:"current",frontMatter:{title:"Config for magpi",id:"magpi-configuration-schema",keywords:["adaptor","configuration-schema","magpi"]},sidebar:"adaptors",previous:{title:"magpi@1.0.3",permalink:"/adaptors/packages/magpi-docs"},next:{title:"magpi changelog",permalink:"/adaptors/packages/magpi-changelog"}},p={},s=[{value:"Sample Configuration",id:"sample-configuration",level:2},{value:"Full Schema",id:"full-schema",level:2}],l={toc:s},u="wrapper";function m(e){let{components:n,...t}=e;return(0,r.kt)(u,(0,a.Z)({},l,t,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"Jobs that use the ",(0,r.kt)("inlineCode",{parentName:"p"},"magpi"),' adaptor may require authentication. A\n"credential" for the ',(0,r.kt)("inlineCode",{parentName:"p"},"magpi")," adaptor will follow the schema below. When\nusing the CLI, you can set up your own ",(0,r.kt)("inlineCode",{parentName:"p"},"state.configuration")," by using the\nsample below."),(0,r.kt)("h2",{id:"sample-configuration"},"Sample Configuration"),(0,r.kt)("p",null,"  Paste this into the ",(0,r.kt)("inlineCode",{parentName:"p"},"configuration")," key of your ",(0,r.kt)("inlineCode",{parentName:"p"},"state.json")," file and\nmodify the values to run jobs locally."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "username": "test@openfn.org",\n  "accessToken": "somEThINGkeyish"\n}\n')),(0,r.kt)("h2",{id:"full-schema"},"Full Schema"),(0,r.kt)("p",null,"  The full configuration schema describes each attribute of the credential and\nnotes those that are required."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "$schema": "http://json-schema.org/draft-07/schema#",\n  "properties": {\n      "username": {\n          "title": "username",\n          "type": "string",\n          "description": "Magpi username",\n          "minLength": 1,\n          "examples": [\n              "test@openfn.org"\n          ]\n      },\n      "accessToken": {\n          "title": "Access Token",\n          "type": "string",\n          "description": "Magpi access token",\n          "writeOnly": true,\n          "minLength": 1,\n          "examples": [\n              "somEThINGkeyish"\n          ]\n      }\n  },\n  "type": "object",\n  "additionalProperties": true,\n  "required": [\n      "username",\n      "accessToken"\n  ]\n}\n')))}m.isMDXComponent=!0}}]);