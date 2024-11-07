"use strict";(self.webpackChunk_openfn_docs=self.webpackChunk_openfn_docs||[]).push([[37510],{71991:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>s,contentTitle:()=>r,default:()=>d,frontMatter:()=>a,metadata:()=>p,toc:()=>c});var o=t(58168),l=(t(96540),t(15680));const a={title:"collections developer readme",id:"collections-readme",keywords:["adaptor","readme","collections"]},r="collections Adaptor developer README.md",p={unversionedId:"packages/collections-readme",id:"packages/collections-readme",title:"collections developer readme",description:"Source//github.com/OpenFn/adaptors/tree/main/packages/collections",source:"@site/adaptors/packages/collections-readme.md",sourceDirName:"packages",slug:"/packages/collections-readme",permalink:"/adaptors/packages/collections-readme",draft:!1,tags:[],version:"current",frontMatter:{title:"collections developer readme",id:"collections-readme",keywords:["adaptor","readme","collections"]},sidebar:"adaptors",previous:{title:"collections changelog",permalink:"/adaptors/packages/collections-changelog"},next:{title:"CommCare Adaptor",permalink:"/adaptors/commcare"}},s={},c=[{value:"Usage",id:"usage",level:2},{value:"Documentation",id:"documentation",level:2},{value:"CLI",id:"cli",level:2},{value:"For a single job",id:"for-a-single-job",level:3},{value:"For a workflow",id:"for-a-workflow",level:3},{value:"Deployments",id:"deployments",level:2},{value:"Development",id:"development",level:2}],i={toc:c},u="wrapper";function d(e){let{components:n,...t}=e;return(0,l.yg)(u,(0,o.A)({},i,t,{components:n,mdxType:"MDXLayout"}),(0,l.yg)("h1",{id:"collections-adaptor-developer-readmemd"},"collections Adaptor developer README.md"),(0,l.yg)("p",null,"Source: ",(0,l.yg)("a",{parentName:"p",href:"https://github.com/OpenFn/adaptors/tree/main/packages/collections"},"https://github.com/OpenFn/adaptors/tree/main/packages/collections")),(0,l.yg)("h1",{id:"language-collections-"},"language-collections ",(0,l.yg)("img",{src:"./assets/square.png",width:"30",height:"30"})),(0,l.yg)("p",null,"An ",(0,l.yg)("strong",{parentName:"p"},(0,l.yg)("em",{parentName:"strong"},"adaptor"))," for using the OpenFn Collections API."),(0,l.yg)("p",null,"The Collections adaptor is not designed to be used alone, but in conjunction\nwith other adaptors. As a result, it's a bit different to other adaptors."),(0,l.yg)("p",null,"The Collections API is a key/value store, which can act as a high performance\ncache, buffer or storage solution. All values are strings (but can contain\nJSON)."),(0,l.yg)("h2",{id:"usage"},"Usage"),(0,l.yg)("p",null,"All collections functions are exposed through the ",(0,l.yg)("inlineCode",{parentName:"p"},"collections")," namespace:"),(0,l.yg)("p",null,"To iterate over all values with ",(0,l.yg)("inlineCode",{parentName:"p"},"2024")," somewhere in the key"),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre"},"collections.each($.collectionName, '*2024*', (state, value, key) => {\n  console.log(value)\n})\n")),(0,l.yg)("h2",{id:"documentation"},"Documentation"),(0,l.yg)("p",null,"View the ",(0,l.yg)("a",{parentName:"p",href:"https://docs.openfn.org/adaptors/packages/collections-docs"},"docs site"),"\nfor full technical documentation."),(0,l.yg)("h2",{id:"cli"},"CLI"),(0,l.yg)("p",null,"Collections can be used from the CLI since v1.8.7, but you will need to:"),(0,l.yg)("ul",null,(0,l.yg)("li",{parentName:"ul"},"Set the job to use two adaptors"),(0,l.yg)("li",{parentName:"ul"},"Pass a Personal Access Token"),(0,l.yg)("li",{parentName:"ul"},"Set the Collections endpoint")),(0,l.yg)("p",null,"You can get a Personal Access Token from any v2 deployment."),(0,l.yg)("h3",{id:"for-a-single-job"},"For a single job"),(0,l.yg)("p",null,"You can pass multiple adaptors from the CLI:"),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre"},"openfn job.js -a collections -a http -s state.json\n")),(0,l.yg)("p",null,"You'll need to set configuration on the state.json:"),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre"},'{\n  "configuration": {\n    "collections_endpoint": "http://localhost:4000/collections",\n    "collections_token": "...paste the token from the app..."\n  }\n}\n\n')),(0,l.yg)("h3",{id:"for-a-workflow"},"For a workflow"),(0,l.yg)("p",null,"If you're using ",(0,l.yg)("inlineCode",{parentName:"p"},"workflow.json"),", set the token and endpoint on\n",(0,l.yg)("inlineCode",{parentName:"p"},"workflow.credentials"),":"),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre",className:"language-json"},'{\n  "workflow": {\n    "steps": [ ... ],\n    "credentials": {\n      "collections_endpoint": "http://localhost:4000/collections",\n      "collections_token": "...paste the token from the app..."\n    }\n  }\n}\n')),(0,l.yg)("p",null,"And make sure that any steps which use collections have multiple adaptors set:"),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre",className:"language-json"},'{\n  "workflow": {\n    "steps": [\n      {\n        "expression": "...",\n        "adaptors": ["@openfn/language-http", "@openfn/language-collections"]\n      }\n    ]\n  }\n}\n')),(0,l.yg)("p",null,"Note that steps cannot generally use multiple adaptors. Collections are special\nin this regard."),(0,l.yg)("h2",{id:"deployments"},"Deployments"),(0,l.yg)("p",null,"Collections must be configured for your platform instance (v2 only)."),(0,l.yg)("p",null,"Set the ",(0,l.yg)("inlineCode",{parentName:"p"},"WORKER_COLLECTIONS_URL")," env var on the Worker instance to enable\ncollections for that worker. The URL should point to\n",(0,l.yg)("inlineCode",{parentName:"p"},"https://<lightning>/collections")),(0,l.yg)("h2",{id:"development"},"Development"),(0,l.yg)("p",null,"Clone the ",(0,l.yg)("a",{parentName:"p",href:"https://github.com/OpenFn/adaptors"},"adaptors monorepo"),'. Follow the\n"Getting Started" guide inside to get set up.'),(0,l.yg)("p",null,"Run tests using ",(0,l.yg)("inlineCode",{parentName:"p"},"pnpm run test")," or ",(0,l.yg)("inlineCode",{parentName:"p"},"pnpm run test:watch")),(0,l.yg)("p",null,"Build the project using ",(0,l.yg)("inlineCode",{parentName:"p"},"pnpm build"),"."),(0,l.yg)("p",null,"To build ",(0,l.yg)("em",{parentName:"p"},"only")," the docs run ",(0,l.yg)("inlineCode",{parentName:"p"},"pnpm build docs"),"."))}d.isMDXComponent=!0},15680:(e,n,t)=>{t.d(n,{xA:()=>i,yg:()=>m});var o=t(96540);function l(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);n&&(o=o.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,o)}return t}function r(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){l(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function p(e,n){if(null==e)return{};var t,o,l=function(e,n){if(null==e)return{};var t,o,l={},a=Object.keys(e);for(o=0;o<a.length;o++)t=a[o],n.indexOf(t)>=0||(l[t]=e[t]);return l}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)t=a[o],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(l[t]=e[t])}return l}var s=o.createContext({}),c=function(e){var n=o.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):r(r({},n),e)),t},i=function(e){var n=c(e.components);return o.createElement(s.Provider,{value:n},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var n=e.children;return o.createElement(o.Fragment,{},n)}},g=o.forwardRef((function(e,n){var t=e.components,l=e.mdxType,a=e.originalType,s=e.parentName,i=p(e,["components","mdxType","originalType","parentName"]),u=c(t),g=l,m=u["".concat(s,".").concat(g)]||u[g]||d[g]||a;return t?o.createElement(m,r(r({ref:n},i),{},{components:t})):o.createElement(m,r({ref:n},i))}));function m(e,n){var t=arguments,l=n&&n.mdxType;if("string"==typeof e||l){var a=t.length,r=new Array(a);r[0]=g;var p={};for(var s in n)hasOwnProperty.call(n,s)&&(p[s]=n[s]);p.originalType=e,p[u]="string"==typeof e?e:l,r[1]=p;for(var c=2;c<a;c++)r[c]=t[c];return o.createElement.apply(null,r)}return o.createElement.apply(null,t)}g.displayName="MDXCreateElement"}}]);