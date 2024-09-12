"use strict";(self.webpackChunk_openfn_docs=self.webpackChunk_openfn_docs||[]).push([[84190],{45509:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>i,default:()=>m,frontMatter:()=>o,metadata:()=>s,toc:()=>p});var r=t(58168),a=(t(96540),t(15680));const o={title:"Config for openlmis",id:"openlmis-configuration-schema",keywords:["adaptor","configuration-schema","openlmis"]},i=void 0,s={unversionedId:"packages/openlmis-configuration-schema",id:"packages/openlmis-configuration-schema",title:"Config for openlmis",description:"Jobs that use the openlmis adaptor may require authentication. A",source:"@site/adaptors/packages/openlmis-configuration-schema.md",sourceDirName:"packages",slug:"/packages/openlmis-configuration-schema",permalink:"/adaptors/packages/openlmis-configuration-schema",draft:!1,tags:[],version:"current",frontMatter:{title:"Config for openlmis",id:"openlmis-configuration-schema",keywords:["adaptor","configuration-schema","openlmis"]},sidebar:"adaptors",previous:{title:"openlmis@1.0.3",permalink:"/adaptors/packages/openlmis-docs"},next:{title:"openlmis changelog",permalink:"/adaptors/packages/openlmis-changelog"}},l={},p=[{value:"Sample Configuration",id:"sample-configuration",level:2},{value:"Full Schema",id:"full-schema",level:2}],c={toc:p},u="wrapper";function m(e){let{components:n,...t}=e;return(0,a.yg)(u,(0,r.A)({},c,t,{components:n,mdxType:"MDXLayout"}),(0,a.yg)("p",null,"Jobs that use the ",(0,a.yg)("inlineCode",{parentName:"p"},"openlmis"),' adaptor may require authentication. A\n"credential" for the ',(0,a.yg)("inlineCode",{parentName:"p"},"openlmis")," adaptor will follow the schema below. When\nusing the CLI, you can set up your own ",(0,a.yg)("inlineCode",{parentName:"p"},"state.configuration")," by using the\nsample below."),(0,a.yg)("h2",{id:"sample-configuration"},"Sample Configuration"),(0,a.yg)("p",null,"  Paste this into the ",(0,a.yg)("inlineCode",{parentName:"p"},"configuration")," key of your ",(0,a.yg)("inlineCode",{parentName:"p"},"state.json")," file and\nmodify the values to run jobs locally."),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-json"},'{\n  "password": "@some(!)Str0ngp4ss0w0rd",\n  "username": "administrator",\n  "baseUrl": "https://test.openlmis.org"\n}\n')),(0,a.yg)("h2",{id:"full-schema"},"Full Schema"),(0,a.yg)("p",null,"  The full configuration schema describes each attribute of the credential and\nnotes those that are required."),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-json"},'{\n  "$schema": "http://json-schema.org/draft-07/schema#",\n  "properties": {\n      "baseUrl": {\n          "title": "Base URL",\n          "anyOf": [\n              {\n                  "type": "string"\n              },\n              {\n                  "type": "null"\n              }\n          ],\n          "description": "The base URL (https://test.openlmis.org)",\n          "format": "uri",\n          "minLength": 1,\n          "examples": [\n              "https://test.openlmis.org"\n          ]\n      },\n      "username": {\n          "title": "Username",\n          "type": "string",\n          "description": "Username",\n          "examples": [\n              "administrator"\n          ]\n      },\n      "password": {\n          "title": "Password",\n          "type": "string",\n          "description": "Password",\n          "writeOnly": true,\n          "examples": [\n              "@some(!)Str0ngp4ss0w0rd"\n          ]\n      },\n      "access_token": {\n          "title": "Access Token",\n          "type": "string",\n          "description": "Your OpenLMIS API access token",\n          "writeOnly": true,\n          "minLength": 1,\n          "examples": [\n              "4739f6c9-3b81-4176-98a1-bf001c8416ea"\n          ]\n      },\n      "clientId": {\n          "title": "Client ID",\n          "type": "string",\n          "description": "Your user based client id",\n          "writeOnly": true,\n          "minLength": 1,\n          "default": "user-client"\n      },\n      "clientSecret": {\n          "title": "Client Secret Token",\n          "type": "string",\n          "description": "Your user based client secret",\n          "writeOnly": true,\n          "minLength": 1,\n          "default": "changeme"\n      }\n  },\n  "type": "object",\n  "additionalProperties": true,\n  "required": [\n      "password",\n      "username",\n      "baseUrl",\n      "clientId",\n      "clientSecret"\n  ]\n}\n')))}m.isMDXComponent=!0},15680:(e,n,t)=>{t.d(n,{xA:()=>c,yg:()=>d});var r=t(96540);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var l=r.createContext({}),p=function(e){var n=r.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},c=function(e){var n=p(e.components);return r.createElement(l.Provider,{value:n},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},g=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),u=p(t),g=a,d=u["".concat(l,".").concat(g)]||u[g]||m[g]||o;return t?r.createElement(d,i(i({ref:n},c),{},{components:t})):r.createElement(d,i({ref:n},c))}));function d(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var o=t.length,i=new Array(o);i[0]=g;var s={};for(var l in n)hasOwnProperty.call(n,l)&&(s[l]=n[l]);s.originalType=e,s[u]="string"==typeof e?e:a,i[1]=s;for(var p=2;p<o;p++)i[p]=t[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,t)}g.displayName="MDXCreateElement"}}]);