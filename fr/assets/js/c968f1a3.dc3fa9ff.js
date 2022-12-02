"use strict";(self.webpackChunk_openfn_docs=self.webpackChunk_openfn_docs||[]).push([[71061],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>h});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var l=n.createContext({}),c=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},p=function(e){var t=c(e.components);return n.createElement(l.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),u=c(r),m=o,h=u["".concat(l,".").concat(m)]||u[m]||d[m]||a;return r?n.createElement(h,i(i({ref:t},p),{},{components:r})):n.createElement(h,i({ref:t},p))}));function h(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,i=new Array(a);i[0]=m;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[u]="string"==typeof e?e:o,i[1]=s;for(var c=2;c<a;c++)i[c]=r[c];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},41508:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>u,frontMatter:()=>a,metadata:()=>s,toc:()=>c});var n=r(87462),o=(r(67294),r(3905));const a={layout:"post",title:"Our Servers or Yours: Thinking through deployment options",author:"Jed Goldstein",author_url:"https://github.com/jedbgold",author_image_url:"https://avatars.githubusercontent.com/jedbgold",tags:["how-to","tips"],featured:!0},i=void 0,s={permalink:"/fr/articles/2021/02/03/hosted-or-local-deployment",editUrl:"https://github.com/openfn/docs/edit/main/articles/2021-02-03-hosted-or-local-deployment.md",source:"@site/articles/2021-02-03-hosted-or-local-deployment.md",title:"Our Servers or Yours: Thinking through deployment options",description:"Zandile is a program manager at an iNGO and she needs to use CommCare, DHIS2,",date:"2021-02-03T00:00:00.000Z",formattedDate:"3 f\xe9vrier 2021",tags:[{label:"how-to",permalink:"/fr/articles/tags/how-to"},{label:"tips",permalink:"/fr/articles/tags/tips"}],readingTime:4.345,hasTruncateMarker:!0,authors:[{name:"Jed Goldstein",url:"https://github.com/jedbgold",imageURL:"https://avatars.githubusercontent.com/jedbgold"}],frontMatter:{layout:"post",title:"Our Servers or Yours: Thinking through deployment options",author:"Jed Goldstein",author_url:"https://github.com/jedbgold",author_image_url:"https://avatars.githubusercontent.com/jedbgold",tags:["how-to","tips"],featured:!0},prevItem:{title:"Sync Like You Mean It: Thinking Through System \u201cSyncing\u201d Protocols",permalink:"/fr/articles/2021/02/17/syncing-options"},nextItem:{title:"Tracked entity instances in DHIS2",permalink:"/fr/articles/2020/12/09/upsert-in-dhis2"}},l={authorsImageUrls:[void 0]},c=[],p={toc:c};function u(e){let{components:t,...r}=e;return(0,o.kt)("wrapper",(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Zandile is a program manager at an iNGO and she needs to use CommCare, DHIS2,\nand OpenFn for an upcoming public health project. She understands that all three\npieces of software can be deployed locally, or accessed as SaaS (Software as a\nService)."),(0,o.kt)("p",null,"Essentially, Zandile needs to decide if she would like to run the software on\nsomeone else\u2019s servers (SaaS), or on her organization\u2019s own servers (deployed\nlocally). Before making a decision she outlines the basic, non-technical\nconsiderations for both options."))}u.isMDXComponent=!0}}]);