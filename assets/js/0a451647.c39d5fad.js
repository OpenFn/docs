"use strict";(self.webpackChunk_openfn_docs=self.webpackChunk_openfn_docs||[]).push([[99017],{33839:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>u,frontMatter:()=>o,metadata:()=>c,toc:()=>l});var r=n(58168),a=(n(96540),n(15680));const o={title:"ODK"},i="App Overview",c={unversionedId:"odk",id:"odk",title:"ODK",description:"ODK is a data collection platform used by researchers,",source:"@site/adaptors/odk.md",sourceDirName:".",slug:"/odk",permalink:"/adaptors/odk",draft:!1,tags:[],version:"current",frontMatter:{title:"ODK"},sidebar:"adaptors",previous:{title:"ocl developer readme",permalink:"/adaptors/packages/ocl-readme"},next:{title:"odk@3.0.3",permalink:"/adaptors/packages/odk-docs"}},s={},l=[],p={toc:l},d="wrapper";function u(e){let{components:t,...n}=e;return(0,a.yg)(d,(0,r.A)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,a.yg)("h1",{id:"app-overview"},"App Overview"),(0,a.yg)("p",null,(0,a.yg)("a",{parentName:"p",href:"https://getodk.org"},"ODK")," is a data collection platform used by researchers,\nfield teams, and other professionals to collect they data they need wherever it\nis."),(0,a.yg)("h1",{id:"integration-options"},"Integration Options"),(0,a.yg)("p",null,"In order to fetch data from an ODK Central, you must run a scheduled job with a\ncron trigger using the ",(0,a.yg)("inlineCode",{parentName:"p"},"odk")," adaptor."),(0,a.yg)("p",null,"Here's an example of a job that gets submission data."),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-js"},"getSubmissions($.projectId, $.xmlFormId);\n")),(0,a.yg)("p",null,"Every time this job runs it will get of all submissions and write them to\n",(0,a.yg)("inlineCode",{parentName:"p"},"state.data"),", leaving your state object looking like this:"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-json"},'{\n  "data": [\n    {\n      "__id": "uuid:85cb9aff-005e-4edd-9739-dc9c1a829c44",\n      "age": 25,\n      "meta": {\n        "instanceID": "uuid:85cb9aff-005e-4edd-9739-dc9c1a829c44"\n      },\n      "name": "Bob"\n    },\n    {\n      "__id": "uuid:297000fd-8eb2-4232-8863-d25f82521b87",\n      "age": 30,\n      "meta": {\n        "instanceID": "uuid:297000fd-8eb2-4232-8863-d25f82521b87"\n      },\n      "name": "Alice"\n    }\n  ],\n  "response": {\n    /* ODK response headers, code and context*/\n  }\n}\n')))}u.isMDXComponent=!0},15680:(e,t,n)=>{n.d(t,{xA:()=>p,yg:()=>m});var r=n(96540);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),l=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=l(e.components);return r.createElement(s.Provider,{value:t},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),d=l(n),f=a,m=d["".concat(s,".").concat(f)]||d[f]||u[f]||o;return n?r.createElement(m,i(i({ref:t},p),{},{components:n})):r.createElement(m,i({ref:t},p))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=f;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c[d]="string"==typeof e?e:a,i[1]=c;for(var l=2;l<o;l++)i[l]=n[l];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"}}]);