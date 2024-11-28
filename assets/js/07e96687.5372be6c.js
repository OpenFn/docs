"use strict";(self.webpackChunk_openfn_docs=self.webpackChunk_openfn_docs||[]).push([[24165],{70892:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>i,default:()=>d,frontMatter:()=>o,metadata:()=>p,toc:()=>s});var a=t(58168),r=(t(96540),t(15680));const o={title:"medicmobile developer readme",id:"medicmobile-readme",keywords:["adaptor","readme","medicmobile"]},i="medicmobile Adaptor developer README.md",p={unversionedId:"packages/medicmobile-readme",id:"packages/medicmobile-readme",title:"medicmobile developer readme",description:"Source//github.com/OpenFn/adaptors/tree/main/packages/medicmobile",source:"@site/adaptors/packages/medicmobile-readme.md",sourceDirName:"packages",slug:"/packages/medicmobile-readme",permalink:"/adaptors/packages/medicmobile-readme",draft:!1,tags:[],version:"current",frontMatter:{title:"medicmobile developer readme",id:"medicmobile-readme",keywords:["adaptor","readme","medicmobile"]},sidebar:"adaptors",previous:{title:"medicmobile changelog",permalink:"/adaptors/packages/medicmobile-changelog"},next:{title:"mogli@0.5.8",permalink:"/adaptors/packages/mogli-docs"}},l={},s=[{value:"Documentation",id:"documentation",level:2},{value:"Configuration",id:"configuration",level:3},{value:"sample fetchSubmissions expression",id:"sample-fetchsubmissions-expression",level:4},{value:"sample changesApi and pickFormData usage",id:"sample-changesapi-and-pickformdata-usage",level:4},{value:"Development",id:"development",level:2}],c={toc:s},m="wrapper";function d(e){let{components:n,...t}=e;return(0,r.yg)(m,(0,a.A)({},c,t,{components:n,mdxType:"MDXLayout"}),(0,r.yg)("h1",{id:"medicmobile-adaptor-developer-readmemd"},"medicmobile Adaptor developer README.md"),(0,r.yg)("p",null,"Source: ",(0,r.yg)("a",{parentName:"p",href:"https://github.com/OpenFn/adaptors/tree/main/packages/medicmobile"},"https://github.com/OpenFn/adaptors/tree/main/packages/medicmobile")),(0,r.yg)("h1",{id:"language-medic-mobile"},"Language Medic Mobile"),(0,r.yg)("p",null,"Language Pack for building expressions and operations to make calls to the Medic\nMobile API.",(0,r.yg)("br",{parentName:"p"}),"\n",(0,r.yg)("strong",{parentName:"p"},"For an overview of Medic's database, check out\n",(0,r.yg)("a",{parentName:"strong",href:"https://github.com/medic/medic-docs/blob/master/development/db-schema.md"},"Medic's DB Schema v2")),(0,r.yg)("br",{parentName:"p"}),"\n","The exported functions in this language package can be executed by\n",(0,r.yg)("a",{parentName:"p",href:"https://github.com/OpenFn/core"},"OpenFn/core"),":"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-sh"},"../core/lib/cli.js execute -l ./lib/Adaptor -s ./tmp/state.json -e ./tmp/expression.js\n")),(0,r.yg)("p",null,"For quick-start help, clone\n",(0,r.yg)("a",{parentName:"p",href:"https://github.com/OpenFn/openfn-devtools"},"OpenFn/openfn-devtools")," and follow\nthe README.md"),(0,r.yg)("h2",{id:"documentation"},"Documentation"),(0,r.yg)("h3",{id:"configuration"},"Configuration"),(0,r.yg)("p",null,"View all the required and optional properties for ",(0,r.yg)("inlineCode",{parentName:"p"},"state.configuration")," in the\nofficial\n",(0,r.yg)("a",{parentName:"p",href:"https://docs.openfn.org/adaptors/packages/medicmobile-configuration-schema/"},"configuration-schema"),"\ndefinition."),(0,r.yg)("h4",{id:"sample-fetchsubmissions-expression"},"sample fetchSubmissions expression"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-js"},"fetchSubmissions(\n  'pregnancy', // formId\n  { 'last-event-id': 334 }, // params, last-event-id will be replaced by cursor\n  'http://localhost:4000/inbox/abc-123-xyz' // postUrl\n);\n")),(0,r.yg)("h4",{id:"sample-changesapi-and-pickformdata-usage"},"sample changesApi and pickFormData usage"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-js"},"// get all the changes...\nchangesApi({\n  include_docs: true,\n  // This only gets used the first time the job is run.\n  // Subsequent runs take the lastSeq value as their cursor.\n  // \"last-event-id\": 789,\n});\n\n// Picks out the field data for a given formId.\npickFormData('pregnancy');\n")),(0,r.yg)("h2",{id:"development"},"Development"),(0,r.yg)("p",null,"Clone the ",(0,r.yg)("a",{parentName:"p",href:"https://github.com/OpenFn/adaptors"},"adaptors monorepo"),". Follow the\n",(0,r.yg)("inlineCode",{parentName:"p"},"Getting Started")," guide inside to get set up."),(0,r.yg)("p",null,"Run tests using ",(0,r.yg)("inlineCode",{parentName:"p"},"pnpm run test")," or ",(0,r.yg)("inlineCode",{parentName:"p"},"pnpm run test:watch")),(0,r.yg)("p",null,"Build the project using ",(0,r.yg)("inlineCode",{parentName:"p"},"pnpm build"),"."),(0,r.yg)("p",null,"To just build the docs run ",(0,r.yg)("inlineCode",{parentName:"p"},"pnpm build docs")))}d.isMDXComponent=!0},15680:(e,n,t)=>{t.d(n,{xA:()=>c,yg:()=>g});var a=t(96540);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function p(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var l=a.createContext({}),s=function(e){var n=a.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},c=function(e){var n=s(e.components);return a.createElement(l.Provider,{value:n},e.children)},m="mdxType",d={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},u=a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,o=e.originalType,l=e.parentName,c=p(e,["components","mdxType","originalType","parentName"]),m=s(t),u=r,g=m["".concat(l,".").concat(u)]||m[u]||d[u]||o;return t?a.createElement(g,i(i({ref:n},c),{},{components:t})):a.createElement(g,i({ref:n},c))}));function g(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var o=t.length,i=new Array(o);i[0]=u;var p={};for(var l in n)hasOwnProperty.call(n,l)&&(p[l]=n[l]);p.originalType=e,p[m]="string"==typeof e?e:r,i[1]=p;for(var s=2;s<o;s++)i[s]=t[s];return a.createElement.apply(null,i)}return a.createElement.apply(null,t)}u.displayName="MDXCreateElement"}}]);