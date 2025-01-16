"use strict";(self.webpackChunk_openfn_docs=self.webpackChunk_openfn_docs||[]).push([[10037],{60927:(e,a,t)=>{t.r(a),t.d(a,{assets:()=>s,contentTitle:()=>i,default:()=>c,frontMatter:()=>o,metadata:()=>p,toc:()=>l});var n=t(58168),r=(t(96540),t(15680));const o={title:"maximo developer readme",id:"maximo-readme",keywords:["adaptor","readme","maximo"]},i="maximo Adaptor developer README.md",p={unversionedId:"packages/maximo-readme",id:"packages/maximo-readme",title:"maximo developer readme",description:"Source//github.com/OpenFn/adaptors/tree/main/packages/maximo",source:"@site/adaptors/packages/maximo-readme.md",sourceDirName:"packages",slug:"/packages/maximo-readme",permalink:"/adaptors/packages/maximo-readme",draft:!1,tags:[],version:"current",frontMatter:{title:"maximo developer readme",id:"maximo-readme",keywords:["adaptor","readme","maximo"]},sidebar:"adaptors",previous:{title:"maximo changelog",permalink:"/adaptors/packages/maximo-changelog"},next:{title:"medicmobile@0.5.10",permalink:"/adaptors/packages/medicmobile-docs"}},s={},l=[{value:"Documentation",id:"documentation",level:2},{value:"Configuration",id:"configuration",level:3},{value:"Fetch",id:"fetch",level:3},{value:"sample &#39;fetch&#39; expression",id:"sample-fetch-expression",level:4},{value:"sample &#39;create&#39; expression",id:"sample-create-expression",level:3},{value:"sample &#39;update75&#39; expression",id:"sample-update75-expression",level:3},{value:"Development",id:"development",level:2}],m={toc:l},d="wrapper";function c(e){let{components:a,...t}=e;return(0,r.yg)(d,(0,n.A)({},m,t,{components:a,mdxType:"MDXLayout"}),(0,r.yg)("h1",{id:"maximo-adaptor-developer-readmemd"},"maximo Adaptor developer README.md"),(0,r.yg)("p",null,"Source: ",(0,r.yg)("a",{parentName:"p",href:"https://github.com/OpenFn/adaptors/tree/main/packages/maximo"},"https://github.com/OpenFn/adaptors/tree/main/packages/maximo")),(0,r.yg)("h1",{id:"language-maximo"},"Language Maximo"),(0,r.yg)("p",null,"Language Pack for building expressions and operations to access IBM Maximo EAM."),(0,r.yg)("h2",{id:"documentation"},"Documentation"),(0,r.yg)("h3",{id:"configuration"},"Configuration"),(0,r.yg)("p",null,"View all the required and optional properties for ",(0,r.yg)("inlineCode",{parentName:"p"},"state.configuration")," in the\nofficial\n",(0,r.yg)("a",{parentName:"p",href:"https://docs.openfn.org/adaptors/packages/maximo-configuration-schema/"},"configuration-schema"),"\ndefinition."),(0,r.yg)("h3",{id:"fetch"},"Fetch"),(0,r.yg)("h4",{id:"sample-fetch-expression"},"sample 'fetch' expression"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-js"},"fetch({\n  endpoint: 'maxrest/rest/os/mxinventory',\n  query: {\n    ITEMNUM: '01226',\n    _format: 'json',\n  },\n  postUrl: 'https://www.openfn.org/inbox/not-real',\n});\n")),(0,r.yg)("h3",{id:"sample-create-expression"},"sample 'create' expression"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-js"},"create({\n  endpoint: 'maxrest/rest/os/mxinvbal/',\n  body: function (state) {\n    return {\n      ITEMNUM: dataValue('form.ITEMNUM')(state),\n      ITEMSETID: dataValue('form.ITEMSETID')(state),\n      SITEID: dataValue('form.SITEID')(state),\n      LOCATION: dataValue('form.LOCATION')(state),\n      ISSUEUNIT: 'FOO',\n      PHYSCNT: dataValue('PHYSCNT')(state),\n      BINNUM: dataValue('form.BINNUM')(state),\n    };\n  },\n});\n")),(0,r.yg)("h3",{id:"sample-update75-expression"},"sample 'update75' expression"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-js"},"update75({\n  endpoint: state => {\n    return (\n      'maxrest/rest/os/mxinvbal/' +\n      dataValue('form.question1.INVBALANCESID')(state)\n    );\n  },\n  body: state => {\n    return {\n      _action: 'AddChange', //this is required for the old Maximo API!\n      ITEMNUM: dataValue('form.ITEMNUM')(state),\n      ITEMSETID: dataValue('form.ITEMSETID')(state),\n      SITEID: dataValue('form.SITEID')(state),\n      LOCATION: dataValue('form.LOCATION')(state),\n      PHYSCNT: dataValue('form.PHYSCNT')(state),\n      BINNUM: dataValue('form.BINNUM')(state),\n    };\n  },\n});\n")),(0,r.yg)("h2",{id:"development"},"Development"),(0,r.yg)("p",null,"Clone the ",(0,r.yg)("a",{parentName:"p",href:"https://github.com/OpenFn/adaptors"},"adaptors monorepo"),". Follow the\n",(0,r.yg)("inlineCode",{parentName:"p"},"Getting Started")," guide inside to get set up."),(0,r.yg)("p",null,"Run tests using ",(0,r.yg)("inlineCode",{parentName:"p"},"pnpm run test")," or ",(0,r.yg)("inlineCode",{parentName:"p"},"pnpm run test:watch")),(0,r.yg)("p",null,"Build the project using ",(0,r.yg)("inlineCode",{parentName:"p"},"pnpm build"),"."),(0,r.yg)("p",null,"To just build the docs run ",(0,r.yg)("inlineCode",{parentName:"p"},"pnpm build docs")))}c.isMDXComponent=!0},15680:(e,a,t)=>{t.d(a,{xA:()=>m,yg:()=>g});var n=t(96540);function r(e,a,t){return a in e?Object.defineProperty(e,a,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[a]=t,e}function o(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);a&&(n=n.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,n)}return t}function i(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?o(Object(t),!0).forEach((function(a){r(e,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))}))}return e}function p(e,a){if(null==e)return{};var t,n,r=function(e,a){if(null==e)return{};var t,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)t=o[n],a.indexOf(t)>=0||(r[t]=e[t]);return r}(e,a);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)t=o[n],a.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var s=n.createContext({}),l=function(e){var a=n.useContext(s),t=a;return e&&(t="function"==typeof e?e(a):i(i({},a),e)),t},m=function(e){var a=l(e.components);return n.createElement(s.Provider,{value:a},e.children)},d="mdxType",c={inlineCode:"code",wrapper:function(e){var a=e.children;return n.createElement(n.Fragment,{},a)}},u=n.forwardRef((function(e,a){var t=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,m=p(e,["components","mdxType","originalType","parentName"]),d=l(t),u=r,g=d["".concat(s,".").concat(u)]||d[u]||c[u]||o;return t?n.createElement(g,i(i({ref:a},m),{},{components:t})):n.createElement(g,i({ref:a},m))}));function g(e,a){var t=arguments,r=a&&a.mdxType;if("string"==typeof e||r){var o=t.length,i=new Array(o);i[0]=u;var p={};for(var s in a)hasOwnProperty.call(a,s)&&(p[s]=a[s]);p.originalType=e,p[d]="string"==typeof e?e:r,i[1]=p;for(var l=2;l<o;l++)i[l]=t[l];return n.createElement.apply(null,i)}return n.createElement.apply(null,t)}u.displayName="MDXCreateElement"}}]);