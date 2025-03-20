"use strict";(self.webpackChunk_openfn_docs=self.webpackChunk_openfn_docs||[]).push([[38032],{28308:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>l,contentTitle:()=>i,default:()=>u,frontMatter:()=>o,metadata:()=>p,toc:()=>d});var n=t(58168),a=(t(96540),t(15680));const o={title:"fhir-4 developer readme",id:"fhir-4-readme",keywords:["adaptor","readme","fhir-4"]},i="fhir-4 Adaptor developer README.md",p={unversionedId:"packages/fhir-4-readme",id:"packages/fhir-4-readme",title:"fhir-4 developer readme",description:"Source//github.com/OpenFn/adaptors/tree/main/packages/fhir-4",source:"@site/adaptors/packages/fhir-4-readme.md",sourceDirName:"packages",slug:"/packages/fhir-4-readme",permalink:"/adaptors/packages/fhir-4-readme",draft:!1,tags:[],version:"current",frontMatter:{title:"fhir-4 developer readme",id:"fhir-4-readme",keywords:["adaptor","readme","fhir-4"]},sidebar:"adaptors",previous:{title:"fhir-4 changelog",permalink:"/adaptors/packages/fhir-4-changelog"},next:{title:"FHIR-FR IG Adaptor",permalink:"/adaptors/fhir-fr"}},l={},d=[{value:"Build command",id:"build-command",level:2},{value:"Documentation",id:"documentation",level:2},{value:"Configuration",id:"configuration",level:3},{value:"Development",id:"development",level:2}],c={toc:d},s="wrapper";function u(e){let{components:r,...t}=e;return(0,a.yg)(s,(0,n.A)({},c,t,{components:r,mdxType:"MDXLayout"}),(0,a.yg)("h1",{id:"fhir-4-adaptor-developer-readmemd"},"fhir-4 Adaptor developer README.md"),(0,a.yg)("p",null,"Source: ",(0,a.yg)("a",{parentName:"p",href:"https://github.com/OpenFn/adaptors/tree/main/packages/fhir-4"},"https://github.com/OpenFn/adaptors/tree/main/packages/fhir-4")),(0,a.yg)("h1",{id:"language-fhir-4-"},"language-fhir-4 ",(0,a.yg)("img",{src:"./assets/square.png",width:"30",height:"30"})),(0,a.yg)("p",null,"An OpenFn adaptor for building integration jobs for use with the fhir-4 API."),(0,a.yg)("p",null,"This adaptor has been auto-generated from a FHIR spec. Do not modify generated\ncode or changes will be lost."),(0,a.yg)("h2",{id:"build-command"},"Build command"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre"},"pnpm generate-fhir fhir-4 \\\n  --spec https://hl7.org/fhir/R4B/definitions.json.zip \\\n  --mappings tools/generate-fhir/tmp/mappings-fhir4.js \\\n  --tests \\\n  --simple-builders\n")),(0,a.yg)("h2",{id:"documentation"},"Documentation"),(0,a.yg)("p",null,"View the ",(0,a.yg)("a",{parentName:"p",href:"https://docs.openfn.org/adaptors/packages/fhir-4-docs"},"docs site")," for\nfull technical documentation."),(0,a.yg)("h3",{id:"configuration"},"Configuration"),(0,a.yg)("p",null,"View the\n",(0,a.yg)("a",{parentName:"p",href:"https://docs.openfn.org/adaptors/packages/fhir-4-configuration-schema/"},"configuration-schema"),"\nfor required and optional ",(0,a.yg)("inlineCode",{parentName:"p"},"configuration")," properties."),(0,a.yg)("h2",{id:"development"},"Development"),(0,a.yg)("p",null,"Clone the ",(0,a.yg)("a",{parentName:"p",href:"https://github.com/OpenFn/adaptors"},"adaptors monorepo"),'. Follow the\n"Getting Started" guide inside to get set up.'),(0,a.yg)("p",null,"Run tests using ",(0,a.yg)("inlineCode",{parentName:"p"},"pnpm run test")),(0,a.yg)("p",null,"Build the adaptor using ",(0,a.yg)("inlineCode",{parentName:"p"},"pnpm build"),"."),(0,a.yg)("p",null,"Re-generate the adaptor source with ",(0,a.yg)("inlineCode",{parentName:"p"},"pnpm generate-fhir fhir-4")),(0,a.yg)("p",null,"To update the spec an re-generate, run ",(0,a.yg)("inlineCode",{parentName:"p"},"pnpm generate-fhir fhir-4 --respec"),". You\ncan update the spec url with ",(0,a.yg)("inlineCode",{parentName:"p"},"--spec <www>")," or by modifying package.json"))}u.isMDXComponent=!0},15680:(e,r,t)=>{t.d(r,{xA:()=>c,yg:()=>f});var n=t(96540);function a(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function o(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function i(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?o(Object(t),!0).forEach((function(r){a(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function p(e,r){if(null==e)return{};var t,n,a=function(e,r){if(null==e)return{};var t,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)t=o[n],r.indexOf(t)>=0||(a[t]=e[t]);return a}(e,r);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)t=o[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var l=n.createContext({}),d=function(e){var r=n.useContext(l),t=r;return e&&(t="function"==typeof e?e(r):i(i({},r),e)),t},c=function(e){var r=d(e.components);return n.createElement(l.Provider,{value:r},e.children)},s="mdxType",u={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},g=n.forwardRef((function(e,r){var t=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,c=p(e,["components","mdxType","originalType","parentName"]),s=d(t),g=a,f=s["".concat(l,".").concat(g)]||s[g]||u[g]||o;return t?n.createElement(f,i(i({ref:r},c),{},{components:t})):n.createElement(f,i({ref:r},c))}));function f(e,r){var t=arguments,a=r&&r.mdxType;if("string"==typeof e||a){var o=t.length,i=new Array(o);i[0]=g;var p={};for(var l in r)hasOwnProperty.call(r,l)&&(p[l]=r[l]);p.originalType=e,p[s]="string"==typeof e?e:a,i[1]=p;for(var d=2;d<o;d++)i[d]=t[d];return n.createElement.apply(null,i)}return n.createElement.apply(null,t)}g.displayName="MDXCreateElement"}}]);