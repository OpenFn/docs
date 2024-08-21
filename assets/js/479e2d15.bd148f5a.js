"use strict";(self.webpackChunk_openfn_docs=self.webpackChunk_openfn_docs||[]).push([[48806],{59678:(e,a,n)=>{n.r(a),n.d(a,{assets:()=>c,contentTitle:()=>p,default:()=>s,frontMatter:()=>o,metadata:()=>i,toc:()=>d});var t=n(58168),r=(n(96540),n(15680));const o={title:"khanacademy developer readme",id:"khanacademy-readme",keywords:["adaptor","readme","khanacademy"]},p="khanacademy Adaptor developer README.md",i={unversionedId:"packages/khanacademy-readme",id:"packages/khanacademy-readme",title:"khanacademy developer readme",description:"Source//github.com/OpenFn/adaptors/tree/main/packages/khanacademy",source:"@site/adaptors/packages/khanacademy-readme.md",sourceDirName:"packages",slug:"/packages/khanacademy-readme",permalink:"/adaptors/packages/khanacademy-readme",draft:!1,tags:[],version:"current",frontMatter:{title:"khanacademy developer readme",id:"khanacademy-readme",keywords:["adaptor","readme","khanacademy"]},sidebar:"adaptors",previous:{title:"khanacademy changelog",permalink:"/adaptors/packages/khanacademy-changelog"},next:{title:"Kobo Toolbox",permalink:"/adaptors/kobotoolbox"}},c={},d=[{value:"Documentation",id:"documentation",level:2},{value:"Configuration",id:"configuration",level:3},{value:"fetch",id:"fetch",level:2},{value:"sample usage",id:"sample-usage",level:4},{value:"Development",id:"development",level:2}],l={toc:d},m="wrapper";function s(e){let{components:a,...n}=e;return(0,r.yg)(m,(0,t.A)({},l,n,{components:a,mdxType:"MDXLayout"}),(0,r.yg)("h1",{id:"khanacademy-adaptor-developer-readmemd"},"khanacademy Adaptor developer README.md"),(0,r.yg)("p",null,"Source: ",(0,r.yg)("a",{parentName:"p",href:"https://github.com/OpenFn/adaptors/tree/main/packages/khanacademy"},"https://github.com/OpenFn/adaptors/tree/main/packages/khanacademy")),(0,r.yg)("h1",{id:"language-khanacademy"},"Language KhanAcademy"),(0,r.yg)("p",null,"Language Pack for building expressions and operations to make HTTP calls."),(0,r.yg)("h2",{id:"documentation"},"Documentation"),(0,r.yg)("h3",{id:"configuration"},"Configuration"),(0,r.yg)("p",null,"View all the required and optional properties for ",(0,r.yg)("inlineCode",{parentName:"p"},"state.configuration")," in the\nofficial\n",(0,r.yg)("a",{parentName:"p",href:"https://docs.openfn.org/adaptors/packages/khanacademy-configuration-schema/"},"configuration-schema"),"\ndefinition."),(0,r.yg)("h2",{id:"fetch"},"fetch"),(0,r.yg)("h4",{id:"sample-usage"},"sample usage"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-js"},"fetch({\n  getEndpoint: 'user',\n  queryParams: {\n    email: 'thisoneuser@something.org',\n  },\n  postUrl: 'https://www.openfn.org/inbox/your-uuid',\n});\n")),(0,r.yg)("h2",{id:"development"},"Development"),(0,r.yg)("p",null,"Clone the ",(0,r.yg)("a",{parentName:"p",href:"https://github.com/OpenFn/adaptors"},"adaptors monorepo"),". Follow the\n",(0,r.yg)("inlineCode",{parentName:"p"},"Getting Started")," guide inside to get set up."),(0,r.yg)("p",null,"Run tests using ",(0,r.yg)("inlineCode",{parentName:"p"},"pnpm run test")," or ",(0,r.yg)("inlineCode",{parentName:"p"},"pnpm run test:watch")),(0,r.yg)("p",null,"Build the project using ",(0,r.yg)("inlineCode",{parentName:"p"},"pnpm build"),"."),(0,r.yg)("p",null,"To just build the docs run ",(0,r.yg)("inlineCode",{parentName:"p"},"pnpm build docs")))}s.isMDXComponent=!0},15680:(e,a,n)=>{n.d(a,{xA:()=>l,yg:()=>g});var t=n(96540);function r(e,a,n){return a in e?Object.defineProperty(e,a,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[a]=n,e}function o(e,a){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);a&&(t=t.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),n.push.apply(n,t)}return n}function p(e){for(var a=1;a<arguments.length;a++){var n=null!=arguments[a]?arguments[a]:{};a%2?o(Object(n),!0).forEach((function(a){r(e,a,n[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(n,a))}))}return e}function i(e,a){if(null==e)return{};var n,t,r=function(e,a){if(null==e)return{};var n,t,r={},o=Object.keys(e);for(t=0;t<o.length;t++)n=o[t],a.indexOf(n)>=0||(r[n]=e[n]);return r}(e,a);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(t=0;t<o.length;t++)n=o[t],a.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var c=t.createContext({}),d=function(e){var a=t.useContext(c),n=a;return e&&(n="function"==typeof e?e(a):p(p({},a),e)),n},l=function(e){var a=d(e.components);return t.createElement(c.Provider,{value:a},e.children)},m="mdxType",s={inlineCode:"code",wrapper:function(e){var a=e.children;return t.createElement(t.Fragment,{},a)}},u=t.forwardRef((function(e,a){var n=e.components,r=e.mdxType,o=e.originalType,c=e.parentName,l=i(e,["components","mdxType","originalType","parentName"]),m=d(n),u=r,g=m["".concat(c,".").concat(u)]||m[u]||s[u]||o;return n?t.createElement(g,p(p({ref:a},l),{},{components:n})):t.createElement(g,p({ref:a},l))}));function g(e,a){var n=arguments,r=a&&a.mdxType;if("string"==typeof e||r){var o=n.length,p=new Array(o);p[0]=u;var i={};for(var c in a)hasOwnProperty.call(a,c)&&(i[c]=a[c]);i.originalType=e,i[m]="string"==typeof e?e:r,p[1]=i;for(var d=2;d<o;d++)p[d]=n[d];return t.createElement.apply(null,p)}return t.createElement.apply(null,n)}u.displayName="MDXCreateElement"}}]);