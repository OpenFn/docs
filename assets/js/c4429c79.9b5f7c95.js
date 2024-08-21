"use strict";(self.webpackChunk_openfn_docs=self.webpackChunk_openfn_docs||[]).push([[8132],{85854:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>s,contentTitle:()=>p,default:()=>d,frontMatter:()=>o,metadata:()=>i,toc:()=>c});var n=t(58168),a=(t(96540),t(15680));const o={title:"resourcemap developer readme",id:"resourcemap-readme",keywords:["adaptor","readme","resourcemap"]},p="resourcemap Adaptor developer README.md",i={unversionedId:"packages/resourcemap-readme",id:"packages/resourcemap-readme",title:"resourcemap developer readme",description:"Source//github.com/OpenFn/adaptors/tree/main/packages/resourcemap",source:"@site/adaptors/packages/resourcemap-readme.md",sourceDirName:"packages",slug:"/packages/resourcemap-readme",permalink:"/adaptors/packages/resourcemap-readme",draft:!1,tags:[],version:"current",frontMatter:{title:"resourcemap developer readme",id:"resourcemap-readme",keywords:["adaptor","readme","resourcemap"]},sidebar:"adaptors",previous:{title:"resourcemap changelog",permalink:"/adaptors/packages/resourcemap-changelog"},next:{title:"Salesforce",permalink:"/adaptors/salesforce"}},s={},c=[{value:"Documentation",id:"documentation",level:2},{value:"Configuration",id:"configuration",level:3},{value:"Expressions",id:"expressions",level:2},{value:"<code>submitSite(collectionId, fields)</code>",id:"submitsitecollectionid-fields",level:2},{value:"Development",id:"development",level:2}],l={toc:c},u="wrapper";function d(e){let{components:r,...t}=e;return(0,a.yg)(u,(0,n.A)({},l,t,{components:r,mdxType:"MDXLayout"}),(0,a.yg)("h1",{id:"resourcemap-adaptor-developer-readmemd"},"resourcemap Adaptor developer README.md"),(0,a.yg)("p",null,"Source: ",(0,a.yg)("a",{parentName:"p",href:"https://github.com/OpenFn/adaptors/tree/main/packages/resourcemap"},"https://github.com/OpenFn/adaptors/tree/main/packages/resourcemap")),(0,a.yg)("h1",{id:"language-resourcemap"},"Language ResourceMap"),(0,a.yg)("p",null,"Language Pack for building expressions and operations for working with the\n",(0,a.yg)("a",{parentName:"p",href:"https://github.com/instedd/resourcemap/wiki/REST_API"},"resourcemap API"),"."),(0,a.yg)("h2",{id:"documentation"},"Documentation"),(0,a.yg)("p",null,"We are working towards this to start:\n",(0,a.yg)("a",{parentName:"p",href:"https://github.com/instedd/resourcemap/wiki/REST_API#create-site"},"https://github.com/instedd/resourcemap/wiki/REST_API#create-site")),(0,a.yg)("h3",{id:"configuration"},"Configuration"),(0,a.yg)("p",null,"View all the required and optional properties for ",(0,a.yg)("inlineCode",{parentName:"p"},"state.configuration")," in the\nofficial\n",(0,a.yg)("a",{parentName:"p",href:"https://docs.openfn.org/adaptors/packages/resourcemap-configuration-schema/"},"configuration-schema"),"\ndefinition."),(0,a.yg)("h2",{id:"expressions"},"Expressions"),(0,a.yg)("h2",{id:"submitsitecollectionid-fields"},(0,a.yg)("inlineCode",{parentName:"h2"},"submitSite(collectionId, fields)")),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-js"},"submitSite(\n  303,\n  fields(\n    field('name', dataValue('sampleText')),\n    field('lat', 48.86),\n    field('lon', 2.35),\n    field('properties', function (state) {\n      return {\n        Comment: state.data.sampleText,\n        phone: '85512345678',\n      };\n    })\n  )\n);\n")),(0,a.yg)("h2",{id:"development"},"Development"),(0,a.yg)("p",null,"Clone the ",(0,a.yg)("a",{parentName:"p",href:"https://github.com/OpenFn/adaptors"},"adaptors monorepo"),". Follow the\n",(0,a.yg)("inlineCode",{parentName:"p"},"Getting Started")," guide inside to get set up."),(0,a.yg)("p",null,"Run tests using ",(0,a.yg)("inlineCode",{parentName:"p"},"pnpm run test")," or ",(0,a.yg)("inlineCode",{parentName:"p"},"pnpm run test:watch")),(0,a.yg)("p",null,"Build the project using ",(0,a.yg)("inlineCode",{parentName:"p"},"pnpm build"),"."),(0,a.yg)("p",null,"To just build the docs run ",(0,a.yg)("inlineCode",{parentName:"p"},"pnpm build docs")))}d.isMDXComponent=!0},15680:(e,r,t)=>{t.d(r,{xA:()=>l,yg:()=>g});var n=t(96540);function a(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function o(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function p(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?o(Object(t),!0).forEach((function(r){a(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function i(e,r){if(null==e)return{};var t,n,a=function(e,r){if(null==e)return{};var t,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)t=o[n],r.indexOf(t)>=0||(a[t]=e[t]);return a}(e,r);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)t=o[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var s=n.createContext({}),c=function(e){var r=n.useContext(s),t=r;return e&&(t="function"==typeof e?e(r):p(p({},r),e)),t},l=function(e){var r=c(e.components);return n.createElement(s.Provider,{value:r},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},m=n.forwardRef((function(e,r){var t=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,l=i(e,["components","mdxType","originalType","parentName"]),u=c(t),m=a,g=u["".concat(s,".").concat(m)]||u[m]||d[m]||o;return t?n.createElement(g,p(p({ref:r},l),{},{components:t})):n.createElement(g,p({ref:r},l))}));function g(e,r){var t=arguments,a=r&&r.mdxType;if("string"==typeof e||a){var o=t.length,p=new Array(o);p[0]=m;var i={};for(var s in r)hasOwnProperty.call(r,s)&&(i[s]=r[s]);i.originalType=e,i[u]="string"==typeof e?e:a,p[1]=i;for(var c=2;c<o;c++)p[c]=t[c];return n.createElement.apply(null,p)}return n.createElement.apply(null,t)}m.displayName="MDXCreateElement"}}]);