"use strict";(self.webpackChunk_openfn_docs=self.webpackChunk_openfn_docs||[]).push([[23475],{13434:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>d,frontMatter:()=>o,metadata:()=>p,toc:()=>c});var r=n(58168),a=(n(96540),n(15680));const o={title:"hive developer readme",id:"hive-readme",keywords:["adaptor","readme","hive"]},i="hive Adaptor developer README.md",p={unversionedId:"packages/hive-readme",id:"packages/hive-readme",title:"hive developer readme",description:"Source//github.com/OpenFn/adaptors/tree/main/packages/hive",source:"@site/adaptors/packages/hive-readme.md",sourceDirName:"packages",slug:"/packages/hive-readme",permalink:"/adaptors/packages/hive-readme",draft:!1,tags:[],version:"current",frontMatter:{title:"hive developer readme",id:"hive-readme",keywords:["adaptor","readme","hive"]},sidebar:"adaptors",previous:{title:"hive changelog",permalink:"/adaptors/packages/hive-changelog"},next:{title:"http@6.4.3",permalink:"/adaptors/packages/http-docs"}},l={},c=[{value:"Documentation",id:"documentation",level:2},{value:"Configuration",id:"configuration",level:3},{value:"A example expression using the <code>query</code> function",id:"a-example-expression-using-the-query-function",level:3},{value:"Development",id:"development",level:2}],s={toc:c},u="wrapper";function d(e){let{components:t,...n}=e;return(0,a.yg)(u,(0,r.A)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,a.yg)("h1",{id:"hive-adaptor-developer-readmemd"},"hive Adaptor developer README.md"),(0,a.yg)("p",null,"Source: ",(0,a.yg)("a",{parentName:"p",href:"https://github.com/OpenFn/adaptors/tree/main/packages/hive"},"https://github.com/OpenFn/adaptors/tree/main/packages/hive")),(0,a.yg)("h1",{id:"language-hive-"},"language-hive ",(0,a.yg)("img",{src:"assets/square.png",width:"30",height:"30"})),(0,a.yg)("p",null,"An OpenFn ",(0,a.yg)("strong",{parentName:"p"},(0,a.yg)("em",{parentName:"strong"},"adaptor"))," for building integration jobs for use with the HIVE API."),(0,a.yg)("h2",{id:"documentation"},"Documentation"),(0,a.yg)("p",null,"View the ",(0,a.yg)("a",{parentName:"p",href:"https://docs.openfn.org/adaptors/packages/hive-docs"},"docs site")," for\nfull technical documentation."),(0,a.yg)("h3",{id:"configuration"},"Configuration"),(0,a.yg)("p",null,"View the\n",(0,a.yg)("a",{parentName:"p",href:"https://docs.openfn.org/adaptors/packages/hive-configuration-schema/"},"configuration-schema"),"\nfor required and optional ",(0,a.yg)("inlineCode",{parentName:"p"},"configuration")," properties."),(0,a.yg)("h3",{id:"a-example-expression-using-the-query-function"},"A example expression using the ",(0,a.yg)("inlineCode",{parentName:"h3"},"query")," function"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-js"},"query('select count(*) from patient');\n")),(0,a.yg)("h2",{id:"development"},"Development"),(0,a.yg)("p",null,"Clone the ",(0,a.yg)("a",{parentName:"p",href:"https://github.com/OpenFn/adaptors"},"adaptors monorepo"),'. Follow the\n"Getting Started" guide inside to get set up.'),(0,a.yg)("p",null,"Run tests using ",(0,a.yg)("inlineCode",{parentName:"p"},"pnpm run test")," or ",(0,a.yg)("inlineCode",{parentName:"p"},"pnpm run test:watch")),(0,a.yg)("p",null,"Build the project using ",(0,a.yg)("inlineCode",{parentName:"p"},"pnpm build"),"."),(0,a.yg)("p",null,"To build ",(0,a.yg)("em",{parentName:"p"},"only")," the docs run ",(0,a.yg)("inlineCode",{parentName:"p"},"pnpm build docs"),"."))}d.isMDXComponent=!0},15680:(e,t,n)=>{n.d(t,{xA:()=>s,yg:()=>m});var r=n(96540);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),c=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},s=function(e){var t=c(e.components);return r.createElement(l.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},g=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,s=p(e,["components","mdxType","originalType","parentName"]),u=c(n),g=a,m=u["".concat(l,".").concat(g)]||u[g]||d[g]||o;return n?r.createElement(m,i(i({ref:t},s),{},{components:n})):r.createElement(m,i({ref:t},s))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=g;var p={};for(var l in t)hasOwnProperty.call(t,l)&&(p[l]=t[l]);p.originalType=e,p[u]="string"==typeof e?e:a,i[1]=p;for(var c=2;c<o;c++)i[c]=n[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}g.displayName="MDXCreateElement"}}]);