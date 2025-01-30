"use strict";(self.webpackChunk_openfn_docs=self.webpackChunk_openfn_docs||[]).push([[80771],{55479:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>f,frontMatter:()=>a,metadata:()=>c,toc:()=>u});var r=n(58168),i=(n(96540),n(15680));const a={title:"Config for intuit",id:"intuit-configuration-schema",keywords:["adaptor","configuration-schema","intuit"]},o=void 0,c={unversionedId:"packages/intuit-configuration-schema",id:"packages/intuit-configuration-schema",title:"Config for intuit",description:"Jobs that use the intuit adaptor may require authentication. A",source:"@site/adaptors/packages/intuit-configuration-schema.md",sourceDirName:"packages",slug:"/packages/intuit-configuration-schema",permalink:"/adaptors/packages/intuit-configuration-schema",draft:!1,tags:[],version:"current",frontMatter:{title:"Config for intuit",id:"intuit-configuration-schema",keywords:["adaptor","configuration-schema","intuit"]},sidebar:"adaptors",previous:{title:"intuit@1.0.0",permalink:"/adaptors/packages/intuit-docs"},next:{title:"intuit changelog",permalink:"/adaptors/packages/intuit-changelog"}},s={},u=[{value:"Sample Configuration",id:"sample-configuration",level:2},{value:"Full Schema",id:"full-schema",level:2}],l={toc:u},p="wrapper";function f(e){let{components:t,...n}=e;return(0,i.yg)(p,(0,r.A)({},l,n,{components:t,mdxType:"MDXLayout"}),(0,i.yg)("p",null,"Jobs that use the ",(0,i.yg)("inlineCode",{parentName:"p"},"intuit"),' adaptor may require authentication. A\n"credential" for the ',(0,i.yg)("inlineCode",{parentName:"p"},"intuit")," adaptor will follow the schema below. When\nusing the CLI, you can set up your own ",(0,i.yg)("inlineCode",{parentName:"p"},"state.configuration")," by using the\nsample below."),(0,i.yg)("h2",{id:"sample-configuration"},"Sample Configuration"),(0,i.yg)("p",null,"  Paste this into the ",(0,i.yg)("inlineCode",{parentName:"p"},"configuration")," key of your ",(0,i.yg)("inlineCode",{parentName:"p"},"state.json")," file and\nmodify the values to run jobs locally."),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre",className:"language-json"},'{\n  "access_token": "eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsIng1dCI6IjlGWERwYmZNRlQyU3ZRdVhoODQ2WVR3RUlCdyIsI",\n  "baseUrl": "https://sandbox-quickbooks.api.intuit.com"\n}\n')),(0,i.yg)("h2",{id:"full-schema"},"Full Schema"),(0,i.yg)("p",null,"  The full configuration schema describes each attribute of the credential and\nnotes those that are required."),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre",className:"language-json"},'{\n  "$schema": "http://json-schema.org/draft-07/schema#",\n  "properties": {\n      "baseUrl": {\n          "title": "Base URL",\n          "type": "string",\n          "description": "The Quickbooks(intuit) base URL",\n          "format": "uri",\n          "minLength": 1,\n          "examples": [\n              "https://sandbox-quickbooks.api.intuit.com"\n          ]\n      },\n      "access_token": {\n          "title": "Access Token",\n          "type": "string",\n          "description": "Your Quickbooks(intuit) access token",\n          "examples": [\n              "eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsIng1dCI6IjlGWERwYmZNRlQyU3ZRdVhoODQ2WVR3RUlCdyIsI"\n          ]\n      }\n  },\n  "type": "object",\n  "additionalProperties": true,\n  "required": [\n      "access_token",\n      "baseUrl"\n  ]\n}\n')))}f.isMDXComponent=!0},15680:(e,t,n)=>{n.d(t,{xA:()=>l,yg:()=>m});var r=n(96540);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=r.createContext({}),u=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},l=function(e){var t=u(e.components);return r.createElement(s.Provider,{value:t},e.children)},p="mdxType",f={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},g=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,a=e.originalType,s=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),p=u(n),g=i,m=p["".concat(s,".").concat(g)]||p[g]||f[g]||a;return n?r.createElement(m,o(o({ref:t},l),{},{components:n})):r.createElement(m,o({ref:t},l))}));function m(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=n.length,o=new Array(a);o[0]=g;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c[p]="string"==typeof e?e:i,o[1]=c;for(var u=2;u<a;u++)o[u]=n[u];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}g.displayName="MDXCreateElement"}}]);