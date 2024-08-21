"use strict";(self.webpackChunk_openfn_docs=self.webpackChunk_openfn_docs||[]).push([[60473],{50219:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>c,default:()=>d,frontMatter:()=>o,metadata:()=>i,toc:()=>p});var r=t(58168),a=(t(96540),t(15680));const o={title:"Config for cartodb",id:"cartodb-configuration-schema",keywords:["adaptor","configuration-schema","cartodb"]},c=void 0,i={unversionedId:"packages/cartodb-configuration-schema",id:"packages/cartodb-configuration-schema",title:"Config for cartodb",description:"Jobs that use the cartodb adaptor may require authentication. A",source:"@site/adaptors/packages/cartodb-configuration-schema.md",sourceDirName:"packages",slug:"/packages/cartodb-configuration-schema",permalink:"/adaptors/packages/cartodb-configuration-schema",draft:!1,tags:[],version:"current",frontMatter:{title:"Config for cartodb",id:"cartodb-configuration-schema",keywords:["adaptor","configuration-schema","cartodb"]},sidebar:"adaptors",previous:{title:"cartodb@0.4.3",permalink:"/adaptors/packages/cartodb-docs"},next:{title:"cartodb changelog",permalink:"/adaptors/packages/cartodb-changelog"}},l={},p=[{value:"Sample Configuration",id:"sample-configuration",level:2},{value:"Full Schema",id:"full-schema",level:2}],s={toc:p},u="wrapper";function d(e){let{components:n,...t}=e;return(0,a.yg)(u,(0,r.A)({},s,t,{components:n,mdxType:"MDXLayout"}),(0,a.yg)("p",null,"Jobs that use the ",(0,a.yg)("inlineCode",{parentName:"p"},"cartodb"),' adaptor may require authentication. A\n"credential" for the ',(0,a.yg)("inlineCode",{parentName:"p"},"cartodb")," adaptor will follow the schema below. When\nusing the CLI, you can set up your own ",(0,a.yg)("inlineCode",{parentName:"p"},"state.configuration")," by using the\nsample below."),(0,a.yg)("h2",{id:"sample-configuration"},"Sample Configuration"),(0,a.yg)("p",null,"  Paste this into the ",(0,a.yg)("inlineCode",{parentName:"p"},"configuration")," key of your ",(0,a.yg)("inlineCode",{parentName:"p"},"state.json")," file and\nmodify the values to run jobs locally."),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-json"},'{\n  "account": "openfn",\n  "apiKey": "longsecretkey"\n}\n')),(0,a.yg)("h2",{id:"full-schema"},"Full Schema"),(0,a.yg)("p",null,"  The full configuration schema describes each attribute of the credential and\nnotes those that are required."),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-json"},'{\n  "$schema": "http://json-schema.org/draft-07/schema#",\n  "properties": {\n      "account": {\n          "title": "Account",\n          "type": "string",\n          "description": "CartoDB account name",\n          "minLength": 1,\n          "examples": [\n              "openfn"\n          ]\n      },\n      "apiKey": {\n          "title": "API Key",\n          "type": "string",\n          "description": "CartoDB API key",\n          "minLength": 1,\n          "examples": [\n              "longsecretkey"\n          ]\n      }\n  },\n  "type": "object",\n  "additionalProperties": true,\n  "required": [\n      "account",\n      "apiKey"\n  ]\n}\n')))}d.isMDXComponent=!0},15680:(e,n,t)=>{t.d(n,{xA:()=>s,yg:()=>g});var r=t(96540);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function c(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function i(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var l=r.createContext({}),p=function(e){var n=r.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):c(c({},n),e)),t},s=function(e){var n=p(e.components);return r.createElement(l.Provider,{value:n},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},f=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),u=p(t),f=a,g=u["".concat(l,".").concat(f)]||u[f]||d[f]||o;return t?r.createElement(g,c(c({ref:n},s),{},{components:t})):r.createElement(g,c({ref:n},s))}));function g(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var o=t.length,c=new Array(o);c[0]=f;var i={};for(var l in n)hasOwnProperty.call(n,l)&&(i[l]=n[l]);i.originalType=e,i[u]="string"==typeof e?e:a,c[1]=i;for(var p=2;p<o;p++)c[p]=t[p];return r.createElement.apply(null,c)}return r.createElement.apply(null,t)}f.displayName="MDXCreateElement"}}]);