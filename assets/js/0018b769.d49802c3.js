"use strict";(self.webpackChunk_openfn_docs=self.webpackChunk_openfn_docs||[]).push([[66290],{19360:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>i,contentTitle:()=>p,default:()=>d,frontMatter:()=>o,metadata:()=>s,toc:()=>u});var n=a(58168),r=(a(96540),a(15680));const o={title:"satusehat developer readme",id:"satusehat-readme",keywords:["adaptor","readme","satusehat"]},p="satusehat Adaptor developer README.md",s={unversionedId:"packages/satusehat-readme",id:"packages/satusehat-readme",title:"satusehat developer readme",description:"Source//github.com/OpenFn/adaptors/tree/main/packages/satusehat",source:"@site/adaptors/packages/satusehat-readme.md",sourceDirName:"packages",slug:"/packages/satusehat-readme",permalink:"/adaptors/packages/satusehat-readme",draft:!1,tags:[],version:"current",frontMatter:{title:"satusehat developer readme",id:"satusehat-readme",keywords:["adaptor","readme","satusehat"]},sidebar:"adaptors",previous:{title:"satusehat changelog",permalink:"/adaptors/packages/satusehat-changelog"},next:{title:"SFTP Adaptor",permalink:"/adaptors/sftp"}},i={},u=[{value:"Documentation",id:"documentation",level:2},{value:"Configuration",id:"configuration",level:3},{value:"A example expression using the <code>post</code> function",id:"a-example-expression-using-the-post-function",level:3},{value:"Development",id:"development",level:2}],l={toc:u},c="wrapper";function d(e){let{components:t,...a}=e;return(0,r.yg)(c,(0,n.A)({},l,a,{components:t,mdxType:"MDXLayout"}),(0,r.yg)("h1",{id:"satusehat-adaptor-developer-readmemd"},"satusehat Adaptor developer README.md"),(0,r.yg)("p",null,"Source: ",(0,r.yg)("a",{parentName:"p",href:"https://github.com/OpenFn/adaptors/tree/main/packages/satusehat"},"https://github.com/OpenFn/adaptors/tree/main/packages/satusehat")),(0,r.yg)("h1",{id:"language-satusehat-"},"language-satusehat ",(0,r.yg)("img",{src:"./assets/square.png",width:"30",height:"30"})),(0,r.yg)("p",null,"An OpenFn ",(0,r.yg)("strong",{parentName:"p"},(0,r.yg)("em",{parentName:"strong"},"adaptor"))," for building integration jobs for use with the satusehat API."),(0,r.yg)("h2",{id:"documentation"},"Documentation"),(0,r.yg)("p",null,"View the ",(0,r.yg)("a",{parentName:"p",href:"https://docs.openfn.org/adaptors/packages/satusehat-docs"},"docs site"),"\nfor full technical documentation."),(0,r.yg)("h3",{id:"configuration"},"Configuration"),(0,r.yg)("p",null,"View the\n",(0,r.yg)("a",{parentName:"p",href:"https://docs.openfn.org/adaptors/packages/satusehat-configuration-schema/"},"configuration-schema"),"\nfor required and optional ",(0,r.yg)("inlineCode",{parentName:"p"},"configuration")," properties."),(0,r.yg)("h3",{id:"a-example-expression-using-the-post-function"},"A example expression using the ",(0,r.yg)("inlineCode",{parentName:"h3"},"post")," function"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-js"},'post(\'Organization\', {  "resourceType": "Organization" });\n')),(0,r.yg)("h2",{id:"development"},"Development"),(0,r.yg)("p",null,"Clone the ",(0,r.yg)("a",{parentName:"p",href:"https://github.com/OpenFn/adaptors"},"adaptors monorepo"),'. Follow the\n"Getting Started" guide inside to get set up.'),(0,r.yg)("p",null,"Run tests using ",(0,r.yg)("inlineCode",{parentName:"p"},"pnpm run test")," or ",(0,r.yg)("inlineCode",{parentName:"p"},"pnpm run test:watch")),(0,r.yg)("p",null,"Build the project using ",(0,r.yg)("inlineCode",{parentName:"p"},"pnpm build"),"."),(0,r.yg)("p",null,"To build ",(0,r.yg)("em",{parentName:"p"},"only")," the docs run ",(0,r.yg)("inlineCode",{parentName:"p"},"pnpm build docs"),"."))}d.isMDXComponent=!0},15680:(e,t,a)=>{a.d(t,{xA:()=>l,yg:()=>m});var n=a(96540);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function p(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var i=n.createContext({}),u=function(e){var t=n.useContext(i),a=t;return e&&(a="function"==typeof e?e(t):p(p({},t),e)),a},l=function(e){var t=u(e.components);return n.createElement(i.Provider,{value:t},e.children)},c="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},g=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,o=e.originalType,i=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),c=u(a),g=r,m=c["".concat(i,".").concat(g)]||c[g]||d[g]||o;return a?n.createElement(m,p(p({ref:t},l),{},{components:a})):n.createElement(m,p({ref:t},l))}));function m(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=a.length,p=new Array(o);p[0]=g;var s={};for(var i in t)hasOwnProperty.call(t,i)&&(s[i]=t[i]);s.originalType=e,s[c]="string"==typeof e?e:r,p[1]=s;for(var u=2;u<o;u++)p[u]=a[u];return n.createElement.apply(null,p)}return n.createElement.apply(null,a)}g.displayName="MDXCreateElement"}}]);