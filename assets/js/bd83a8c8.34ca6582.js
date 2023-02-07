"use strict";(self.webpackChunk_openfn_docs=self.webpackChunk_openfn_docs||[]).push([[63792],{3905:(e,o,t)=>{t.d(o,{Zo:()=>c,kt:()=>b});var n=t(67294);function r(e,o,t){return o in e?Object.defineProperty(e,o,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[o]=t,e}function a(e,o){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);o&&(n=n.filter((function(o){return Object.getOwnPropertyDescriptor(e,o).enumerable}))),t.push.apply(t,n)}return t}function l(e){for(var o=1;o<arguments.length;o++){var t=null!=arguments[o]?arguments[o]:{};o%2?a(Object(t),!0).forEach((function(o){r(e,o,t[o])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(o){Object.defineProperty(e,o,Object.getOwnPropertyDescriptor(t,o))}))}return e}function p(e,o){if(null==e)return{};var t,n,r=function(e,o){if(null==e)return{};var t,n,r={},a=Object.keys(e);for(n=0;n<a.length;n++)t=a[n],o.indexOf(t)>=0||(r[t]=e[t]);return r}(e,o);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)t=a[n],o.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var i=n.createContext({}),s=function(e){var o=n.useContext(i),t=o;return e&&(t="function"==typeof e?e(o):l(l({},o),e)),t},c=function(e){var o=s(e.components);return n.createElement(i.Provider,{value:o},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var o=e.children;return n.createElement(n.Fragment,{},o)}},m=n.forwardRef((function(e,o){var t=e.components,r=e.mdxType,a=e.originalType,i=e.parentName,c=p(e,["components","mdxType","originalType","parentName"]),u=s(t),m=r,b=u["".concat(i,".").concat(m)]||u[m]||d[m]||a;return t?n.createElement(b,l(l({ref:o},c),{},{components:t})):n.createElement(b,l({ref:o},c))}));function b(e,o){var t=arguments,r=o&&o.mdxType;if("string"==typeof e||r){var a=t.length,l=new Array(a);l[0]=m;var p={};for(var i in o)hasOwnProperty.call(o,i)&&(p[i]=o[i]);p.originalType=e,p[u]="string"==typeof e?e:r,l[1]=p;for(var s=2;s<a;s++)l[s]=t[s];return n.createElement.apply(null,l)}return n.createElement.apply(null,t)}m.displayName="MDXCreateElement"},51118:(e,o,t)=>{t.r(o),t.d(o,{assets:()=>i,contentTitle:()=>l,default:()=>d,frontMatter:()=>a,metadata:()=>p,toc:()=>s});var n=t(87462),r=(t(67294),t(3905));const a={title:"kobotoolbox developer readme",id:"kobotoolbox-readme",keywords:["adaptor","readme","kobotoolbox"]},l="Developer README for the kobotoolbox adaptor",p={unversionedId:"packages/kobotoolbox-readme",id:"packages/kobotoolbox-readme",title:"kobotoolbox developer readme",description:"Source//github.com/OpenFn/adaptors/tree/main/packages/kobotoolbox",source:"@site/adaptors/packages/kobotoolbox-readme.md",sourceDirName:"packages",slug:"/packages/kobotoolbox-readme",permalink:"/adaptors/packages/kobotoolbox-readme",draft:!1,tags:[],version:"current",frontMatter:{title:"kobotoolbox developer readme",id:"kobotoolbox-readme",keywords:["adaptor","readme","kobotoolbox"]},sidebar:"adaptors",previous:{title:"kobotoolbox changelog",permalink:"/adaptors/packages/kobotoolbox-changelog"},next:{title:"kobotoolbox Config",permalink:"/adaptors/packages/kobotoolbox-configuration-schema"}},i={},s=[{value:"Documentation",id:"documentation",level:2},{value:"post",id:"post",level:2},{value:"sample configuration",id:"sample-configuration",level:4},{value:"Get the list of forms",id:"get-the-list-of-forms",level:4},{value:"Get submissions for a specific form",id:"get-submissions-for-a-specific-form",level:3},{value:"Development",id:"development",level:2}],c={toc:s},u="wrapper";function d(e){let{components:o,...t}=e;return(0,r.kt)(u,(0,n.Z)({},c,t,{components:o,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"developer-readme-for-the-kobotoolbox-adaptor"},"Developer README for the kobotoolbox adaptor"),(0,r.kt)("p",null,"Source: ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/OpenFn/adaptors/tree/main/packages/kobotoolbox"},"https://github.com/OpenFn/adaptors/tree/main/packages/kobotoolbox")),(0,r.kt)("h1",{id:"language-kobotoolbox"},"Language KoboToolbox"),(0,r.kt)("p",null,"Language Pack for building expressions and operations to interact with the\n","[TEMPLATE]"," API."),(0,r.kt)("h2",{id:"documentation"},"Documentation"),(0,r.kt)("h2",{id:"post"},"post"),(0,r.kt)("h4",{id:"sample-configuration"},"sample configuration"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "baseURL": "https://kf.kobotoolbox.org",\n  "username": "mamadou@openfn.org",\n  "password": "supersecret",\n  "apiVersion": "v2"\n}\n')),(0,r.kt)("h4",{id:"get-the-list-of-forms"},"Get the list of forms"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"getForms({}, state => {\n  console.log(state.data);\n  return state;\n});\n")),(0,r.kt)("h3",{id:"get-submissions-for-a-specific-form"},"Get submissions for a specific form"),(0,r.kt)("p",null,"A query can be used to filter results."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"getSubmissions(\n  { formId: 'aXecHjmbATuF6iGFmvBLBX', query: { end: { $gte: '2020-11-20' } } },\n  state => {\n    console.log(state.data);\n    return state;\n  }\n);\n")),(0,r.kt)("h2",{id:"development"},"Development"),(0,r.kt)("p",null,"Clone the ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/OpenFn/adaptors"},"adaptors monorepo"),". Follow the\n",(0,r.kt)("inlineCode",{parentName:"p"},"Getting Started")," guide inside to get set up."),(0,r.kt)("p",null,"Run tests using ",(0,r.kt)("inlineCode",{parentName:"p"},"pnpm run test")," or ",(0,r.kt)("inlineCode",{parentName:"p"},"pnpm run test:watch")),(0,r.kt)("p",null,"Build the project using ",(0,r.kt)("inlineCode",{parentName:"p"},"pnpm build"),"."),(0,r.kt)("p",null,"To just build the docs run ",(0,r.kt)("inlineCode",{parentName:"p"},"pnpm build docs")))}d.isMDXComponent=!0}}]);