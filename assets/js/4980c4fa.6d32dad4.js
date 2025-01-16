"use strict";(self.webpackChunk_openfn_docs=self.webpackChunk_openfn_docs||[]).push([[70612],{9682:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>i,default:()=>m,frontMatter:()=>o,metadata:()=>s,toc:()=>p});var a=t(58168),r=(t(96540),t(15680));const o={title:"Config for hive",id:"hive-configuration-schema",keywords:["adaptor","configuration-schema","hive"]},i=void 0,s={unversionedId:"packages/hive-configuration-schema",id:"packages/hive-configuration-schema",title:"Config for hive",description:"Jobs that use the hive adaptor may require authentication. A",source:"@site/adaptors/packages/hive-configuration-schema.md",sourceDirName:"packages",slug:"/packages/hive-configuration-schema",permalink:"/adaptors/packages/hive-configuration-schema",draft:!1,tags:[],version:"current",frontMatter:{title:"Config for hive",id:"hive-configuration-schema",keywords:["adaptor","configuration-schema","hive"]},sidebar:"adaptors",previous:{title:"hive@0.3.10",permalink:"/adaptors/packages/hive-docs"},next:{title:"hive changelog",permalink:"/adaptors/packages/hive-changelog"}},c={},p=[{value:"Sample Configuration",id:"sample-configuration",level:2},{value:"Full Schema",id:"full-schema",level:2}],l={toc:p},u="wrapper";function m(e){let{components:n,...t}=e;return(0,r.yg)(u,(0,a.A)({},l,t,{components:n,mdxType:"MDXLayout"}),(0,r.yg)("p",null,"Jobs that use the ",(0,r.yg)("inlineCode",{parentName:"p"},"hive"),' adaptor may require authentication. A\n"credential" for the ',(0,r.yg)("inlineCode",{parentName:"p"},"hive")," adaptor will follow the schema below. When\nusing the CLI, you can set up your own ",(0,r.yg)("inlineCode",{parentName:"p"},"state.configuration")," by using the\nsample below."),(0,r.yg)("h2",{id:"sample-configuration"},"Sample Configuration"),(0,r.yg)("p",null,"  Paste this into the ",(0,r.yg)("inlineCode",{parentName:"p"},"configuration")," key of your ",(0,r.yg)("inlineCode",{parentName:"p"},"state.json")," file and\nmodify the values to run jobs locally."),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-json"},'{\n  "host": "some-host-url.compute-1.amazonaws.com",\n  "database": "demo-db",\n  "username": "admin-demo",\n  "password": "@super(!)Secretpass"\n}\n')),(0,r.yg)("h2",{id:"full-schema"},"Full Schema"),(0,r.yg)("p",null,"  The full configuration schema describes each attribute of the credential and\nnotes those that are required."),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-json"},'{\n  "$schema": "http://json-schema.org/draft-07/schema#",\n  "properties": {\n      "host": {\n          "title": "Host URL",\n          "type": "string",\n          "description": "The database instance host URL",\n          "format": "string",\n          "minLength": 1,\n          "examples": [\n              "some-host-url.compute-1.amazonaws.com"\n          ]\n      },\n      "port": {\n          "title": "Port",\n          "type": "integer",\n          "default": 10001,\n          "description": "Database instance port",\n          "minLength": 1,\n          "examples": [\n              10001\n          ]\n      },\n      "database": {\n          "title": "Database",\n          "type": "string",\n          "description": "The database name",\n          "minLength": 1,\n          "examples": [\n              "demo-db"\n          ]\n      },\n      "username": {\n          "title": "Username",\n          "type": "string",\n          "description": "The username to log in the database",\n          "minLength": 1,\n          "examples": [\n              "admin-demo"\n          ]\n      },\n      "password": {\n          "title": "Password",\n          "type": "string",\n          "description": "The password to log in the database",\n          "writeOnly": true,\n          "minLength": 1,\n          "examples": [\n              "@super(!)Secretpass"\n          ]\n      }\n  },\n  "type": "object",\n  "additionalProperties": true,\n  "required": [\n      "host",\n      "database",\n      "username",\n      "password"\n  ]\n}\n')))}m.isMDXComponent=!0},15680:(e,n,t)=>{t.d(n,{xA:()=>l,yg:()=>h});var a=t(96540);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var c=a.createContext({}),p=function(e){var n=a.useContext(c),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},l=function(e){var n=p(e.components);return a.createElement(c.Provider,{value:n},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},d=a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,o=e.originalType,c=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),u=p(t),d=r,h=u["".concat(c,".").concat(d)]||u[d]||m[d]||o;return t?a.createElement(h,i(i({ref:n},l),{},{components:t})):a.createElement(h,i({ref:n},l))}));function h(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var o=t.length,i=new Array(o);i[0]=d;var s={};for(var c in n)hasOwnProperty.call(n,c)&&(s[c]=n[c]);s.originalType=e,s[u]="string"==typeof e?e:r,i[1]=s;for(var p=2;p<o;p++)i[p]=t[p];return a.createElement.apply(null,i)}return a.createElement.apply(null,t)}d.displayName="MDXCreateElement"}}]);