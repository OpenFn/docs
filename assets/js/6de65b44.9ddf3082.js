"use strict";(self.webpackChunk_openfn_docs=self.webpackChunk_openfn_docs||[]).push([[69445],{51656:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>s,contentTitle:()=>c,default:()=>f,frontMatter:()=>r,metadata:()=>i,toc:()=>l});var o=t(58168),a=(t(96540),t(15680));const r={title:"Config for facebook",id:"facebook-configuration-schema",keywords:["adaptor","configuration-schema","facebook"]},c=void 0,i={unversionedId:"packages/facebook-configuration-schema",id:"packages/facebook-configuration-schema",title:"Config for facebook",description:"Jobs that use the facebook adaptor may require authentication. A",source:"@site/adaptors/packages/facebook-configuration-schema.md",sourceDirName:"packages",slug:"/packages/facebook-configuration-schema",permalink:"/adaptors/packages/facebook-configuration-schema",draft:!1,tags:[],version:"current",frontMatter:{title:"Config for facebook",id:"facebook-configuration-schema",keywords:["adaptor","configuration-schema","facebook"]},sidebar:"adaptors",previous:{title:"facebook@0.4.2",permalink:"/adaptors/packages/facebook-docs"},next:{title:"facebook changelog",permalink:"/adaptors/packages/facebook-changelog"}},s={},l=[{value:"Sample Configuration",id:"sample-configuration",level:2},{value:"Full Schema",id:"full-schema",level:2}],p={toc:l},u="wrapper";function f(e){let{components:n,...t}=e;return(0,a.yg)(u,(0,o.A)({},p,t,{components:n,mdxType:"MDXLayout"}),(0,a.yg)("p",null,"Jobs that use the ",(0,a.yg)("inlineCode",{parentName:"p"},"facebook"),' adaptor may require authentication. A\n"credential" for the ',(0,a.yg)("inlineCode",{parentName:"p"},"facebook")," adaptor will follow the schema below. When\nusing the CLI, you can set up your own ",(0,a.yg)("inlineCode",{parentName:"p"},"state.configuration")," by using the\nsample below."),(0,a.yg)("h2",{id:"sample-configuration"},"Sample Configuration"),(0,a.yg)("p",null,"  Paste this into the ",(0,a.yg)("inlineCode",{parentName:"p"},"configuration")," key of your ",(0,a.yg)("inlineCode",{parentName:"p"},"state.json")," file and\nmodify the values to run jobs locally."),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-json"},'{\n  "access_token": "EAAGm0PX4ZCpsBAEHuZBwZBZCDEZDZD7ZC8ZBZBt7MbZA7sVZA"\n}\n')),(0,a.yg)("h2",{id:"full-schema"},"Full Schema"),(0,a.yg)("p",null,"  The full configuration schema describes each attribute of the credential and\nnotes those that are required."),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-json"},'{\n  "$schema": "http://json-schema.org/draft-07/schema#",\n  "$comment": "OAuth2",\n  "properties": {\n      "access_token": {\n          "title": "Access Token",\n          "type": "string",\n          "description": "Your Facebook API access token",\n          "writeOnly": true,\n          "minLength": 1,\n          "examples": [\n              "EAAGm0PX4ZCpsBAEHuZBwZBZCDEZDZD7ZC8ZBZBt7MbZA7sVZA"\n          ]\n      }\n  },\n  "type": "object",\n  "additionalProperties": true,\n  "required": [\n      "access_token"\n  ]\n}\n')))}f.isMDXComponent=!0},15680:(e,n,t)=>{t.d(n,{xA:()=>p,yg:()=>m});var o=t(96540);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function r(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);n&&(o=o.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,o)}return t}function c(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?r(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function i(e,n){if(null==e)return{};var t,o,a=function(e,n){if(null==e)return{};var t,o,a={},r=Object.keys(e);for(o=0;o<r.length;o++)t=r[o],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)t=r[o],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var s=o.createContext({}),l=function(e){var n=o.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):c(c({},n),e)),t},p=function(e){var n=l(e.components);return o.createElement(s.Provider,{value:n},e.children)},u="mdxType",f={inlineCode:"code",wrapper:function(e){var n=e.children;return o.createElement(o.Fragment,{},n)}},g=o.forwardRef((function(e,n){var t=e.components,a=e.mdxType,r=e.originalType,s=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),u=l(t),g=a,m=u["".concat(s,".").concat(g)]||u[g]||f[g]||r;return t?o.createElement(m,c(c({ref:n},p),{},{components:t})):o.createElement(m,c({ref:n},p))}));function m(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var r=t.length,c=new Array(r);c[0]=g;var i={};for(var s in n)hasOwnProperty.call(n,s)&&(i[s]=n[s]);i.originalType=e,i[u]="string"==typeof e?e:a,c[1]=i;for(var l=2;l<r;l++)c[l]=t[l];return o.createElement.apply(null,c)}return o.createElement.apply(null,t)}g.displayName="MDXCreateElement"}}]);