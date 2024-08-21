"use strict";(self.webpackChunk_openfn_docs=self.webpackChunk_openfn_docs||[]).push([[36138],{56750:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>s,default:()=>g,frontMatter:()=>o,metadata:()=>i,toc:()=>p});var r=t(58168),a=(t(96540),t(15680));const o={title:"Config for postgresql",id:"postgresql-configuration-schema",keywords:["adaptor","configuration-schema","postgresql"]},s=void 0,i={unversionedId:"packages/postgresql-configuration-schema",id:"packages/postgresql-configuration-schema",title:"Config for postgresql",description:"Jobs that use the postgresql adaptor may require authentication. A",source:"@site/adaptors/packages/postgresql-configuration-schema.md",sourceDirName:"packages",slug:"/packages/postgresql-configuration-schema",permalink:"/adaptors/packages/postgresql-configuration-schema",draft:!1,tags:[],version:"current",frontMatter:{title:"Config for postgresql",id:"postgresql-configuration-schema",keywords:["adaptor","configuration-schema","postgresql"]},sidebar:"adaptors",previous:{title:"postgresql@6.0.1",permalink:"/adaptors/packages/postgresql-docs"},next:{title:"\ud83d\udcdc Using findValue with an array of data",permalink:"/adaptors/library/jobs/auto/async-findValue"}},l={},p=[{value:"Sample Configuration",id:"sample-configuration",level:2},{value:"Full Schema",id:"full-schema",level:2}],c={toc:p},u="wrapper";function g(e){let{components:n,...t}=e;return(0,a.yg)(u,(0,r.A)({},c,t,{components:n,mdxType:"MDXLayout"}),(0,a.yg)("p",null,"Jobs that use the ",(0,a.yg)("inlineCode",{parentName:"p"},"postgresql"),' adaptor may require authentication. A\n"credential" for the ',(0,a.yg)("inlineCode",{parentName:"p"},"postgresql")," adaptor will follow the schema below. When\nusing the CLI, you can set up your own ",(0,a.yg)("inlineCode",{parentName:"p"},"state.configuration")," by using the\nsample below."),(0,a.yg)("h2",{id:"sample-configuration"},"Sample Configuration"),(0,a.yg)("p",null,"  Paste this into the ",(0,a.yg)("inlineCode",{parentName:"p"},"configuration")," key of your ",(0,a.yg)("inlineCode",{parentName:"p"},"state.json")," file and\nmodify the values to run jobs locally."),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-json"},'{\n  "host": "some-host.compute-1.amazonaws.com",\n  "user": "admin",\n  "database": "demo-db",\n  "password": "@super(!)Secretpass"\n}\n')),(0,a.yg)("h2",{id:"full-schema"},"Full Schema"),(0,a.yg)("p",null,"  The full configuration schema describes each attribute of the credential and\nnotes those that are required."),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-json"},'{\n  "$schema": "http://json-schema.org/draft-07/schema#",\n  "properties": {\n      "host": {\n          "title": "Host",\n          "type": "string",\n          "description": "Postgres instance host URL or IP address",\n          "minLength": 1,\n          "examples": [\n              "some-host.compute-1.amazonaws.com",\n              "201.220.61.246"\n          ]\n      },\n      "port": {\n          "title": "Port",\n          "type": "integer",\n          "default": 5432,\n          "description": "Database instance port",\n          "minLength": 1,\n          "examples": [\n              5432\n          ]\n      },\n      "database": {\n          "title": "Database",\n          "type": "string",\n          "description": "The database name",\n          "minLength": 1,\n          "examples": [\n              "demo-db"\n          ]\n      },\n      "user": {\n          "title": "User",\n          "type": "string",\n          "description": "User name",\n          "minLength": 1,\n          "examples": [\n              "admin"\n          ]\n      },\n      "password": {\n          "title": "Password",\n          "type": "string",\n          "description": "Password",\n          "writeOnly": true,\n          "minLength": 1,\n          "examples": [\n              "@super(!)Secretpass"\n          ]\n      },\n      "ssl": {\n          "title": "Use SSL",\n          "type": "boolean",\n          "examples": [\n              true\n          ]\n      },\n      "allowSelfSignedCert": {\n          "title": "Allow self-signed certificate",\n          "type": "boolean",\n          "examples": [\n              true\n          ]\n      }\n  },\n  "type": "object",\n  "additionalProperties": true,\n  "required": [\n      "host",\n      "user",\n      "database",\n      "password"\n  ]\n}\n')))}g.isMDXComponent=!0},15680:(e,n,t)=>{t.d(n,{xA:()=>c,yg:()=>d});var r=t(96540);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function s(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function i(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var l=r.createContext({}),p=function(e){var n=r.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):s(s({},n),e)),t},c=function(e){var n=p(e.components);return r.createElement(l.Provider,{value:n},e.children)},u="mdxType",g={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},m=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),u=p(t),m=a,d=u["".concat(l,".").concat(m)]||u[m]||g[m]||o;return t?r.createElement(d,s(s({ref:n},c),{},{components:t})):r.createElement(d,s({ref:n},c))}));function d(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var o=t.length,s=new Array(o);s[0]=m;var i={};for(var l in n)hasOwnProperty.call(n,l)&&(i[l]=n[l]);i.originalType=e,i[u]="string"==typeof e?e:a,s[1]=i;for(var p=2;p<o;p++)s[p]=t[p];return r.createElement.apply(null,s)}return r.createElement.apply(null,t)}m.displayName="MDXCreateElement"}}]);