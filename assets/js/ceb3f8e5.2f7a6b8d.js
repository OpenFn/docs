"use strict";(self.webpackChunk_openfn_docs=self.webpackChunk_openfn_docs||[]).push([[1177],{3905:(e,n,t)=>{t.d(n,{Zo:()=>l,kt:()=>g});var r=t(67294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var c=r.createContext({}),p=function(e){var n=r.useContext(c),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},l=function(e){var n=p(e.components);return r.createElement(c.Provider,{value:n},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},f=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),u=p(t),f=a,g=u["".concat(c,".").concat(f)]||u[f]||m[f]||o;return t?r.createElement(g,i(i({ref:n},l),{},{components:t})):r.createElement(g,i({ref:n},l))}));function g(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var o=t.length,i=new Array(o);i[0]=f;var s={};for(var c in n)hasOwnProperty.call(n,c)&&(s[c]=n[c]);s.originalType=e,s[u]="string"==typeof e?e:a,i[1]=s;for(var p=2;p<o;p++)i[p]=t[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,t)}f.displayName="MDXCreateElement"},39325:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>i,default:()=>m,frontMatter:()=>o,metadata:()=>s,toc:()=>p});var r=t(87462),a=(t(67294),t(3905));const o={title:"Config for msgraph",id:"msgraph-configuration-schema",keywords:["adaptor","configuration-schema","msgraph"]},i=void 0,s={unversionedId:"packages/msgraph-configuration-schema",id:"packages/msgraph-configuration-schema",title:"Config for msgraph",description:"Jobs that use the msgraph adaptor may require authentication. A",source:"@site/adaptors/packages/msgraph-configuration-schema.md",sourceDirName:"packages",slug:"/packages/msgraph-configuration-schema",permalink:"/adaptors/packages/msgraph-configuration-schema",draft:!1,tags:[],version:"current",frontMatter:{title:"Config for msgraph",id:"msgraph-configuration-schema",keywords:["adaptor","configuration-schema","msgraph"]},sidebar:"adaptors",previous:{title:"msgraph@0.0.0",permalink:"/adaptors/packages/msgraph-docs"},next:{title:"msgraph changelog",permalink:"/adaptors/packages/msgraph-changelog"}},c={},p=[{value:"Sample Configuration",id:"sample-configuration",level:2},{value:"Full Schema",id:"full-schema",level:2}],l={toc:p},u="wrapper";function m(e){let{components:n,...t}=e;return(0,a.kt)(u,(0,r.Z)({},l,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Jobs that use the ",(0,a.kt)("inlineCode",{parentName:"p"},"msgraph"),' adaptor may require authentication. A\n"credential" for the ',(0,a.kt)("inlineCode",{parentName:"p"},"msgraph")," adaptor will follow the schema below. When\nusing the CLI, you can set up your own ",(0,a.kt)("inlineCode",{parentName:"p"},"state.configuration")," by using the\nsample below."),(0,a.kt)("h2",{id:"sample-configuration"},"Sample Configuration"),(0,a.kt)("p",null,"  Paste this into the ",(0,a.kt)("inlineCode",{parentName:"p"},"configuration")," key of your ",(0,a.kt)("inlineCode",{parentName:"p"},"state.json")," file and\nmodify the values to run jobs locally."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "apiVersion": "v1.0",\n  "accessToken": "eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsIng1dCI6IjlGWERwYmZNRlQyU3ZRdVhoODQ2WVR3RUlCdyIsI"\n}\n')),(0,a.kt)("h2",{id:"full-schema"},"Full Schema"),(0,a.kt)("p",null,"  The full configuration schema describes each attribute of the credential and\nnotes those that are required."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "$schema": "http://json-schema.org/draft-07/schema#",\n  "properties": {\n      "apiVersion": {\n          "title": "API Version",\n          "anyOf": [\n              {\n                  "type": "string"\n              },\n              {\n                  "type": "null"\n              }\n          ],\n          "placeholder": "v1.0",\n          "description": "Microsoft Graph api version",\n          "minLength": 1,\n          "examples": [\n              "v1.0",\n              "beta"\n          ]\n      },\n      "accessToken": {\n          "title": "Access Token",\n          "type": "string",\n          "description": "Your Microsoft Graph access token",\n          "writeOnly": true,\n          "minLength": 1,\n          "examples": [\n              "eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsIng1dCI6IjlGWERwYmZNRlQyU3ZRdVhoODQ2WVR3RUlCdyIsI"\n          ]\n      }\n  },\n  "type": "object",\n  "additionalProperties": true,\n  "required": [\n      "accessToken"\n  ]\n}\n')))}m.isMDXComponent=!0}}]);