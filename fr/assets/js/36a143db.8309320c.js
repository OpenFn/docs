"use strict";(self.webpackChunk_openfn_docs=self.webpackChunk_openfn_docs||[]).push([[67560],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>h});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c=r.createContext({}),l=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=l(e.components);return r.createElement(c.Provider,{value:t},e.children)},p="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},g=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),p=l(n),g=o,h=p["".concat(c,".").concat(g)]||p[g]||m[g]||a;return n?r.createElement(h,i(i({ref:t},u),{},{components:n})):r.createElement(h,i({ref:t},u))}));function h(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=g;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s[p]="string"==typeof e?e:o,i[1]=s;for(var l=2;l<a;l++)i[l]=n[l];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}g.displayName="MDXCreateElement"},51454:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>p,frontMatter:()=>a,metadata:()=>s,toc:()=>l});var r=n(87462),o=(n(67294),n(3905));const a={layout:"post",title:"Sync Like You Mean It: Thinking Through System \u201cSyncing\u201d Protocols",author:"Jed Goldstein",author_url:"https://github.com/jedbgold",author_image_url:"https://avatars.githubusercontent.com/jedbgold",tags:["how-to","tips"],featured:!0},i=void 0,s={permalink:"/fr/articles/2021/02/17/syncing-options",editUrl:"https://github.com/openfn/docs/edit/main/articles/2021-02-17-syncing-options.md",source:"@site/articles/2021-02-17-syncing-options.md",title:"Sync Like You Mean It: Thinking Through System \u201cSyncing\u201d Protocols",description:"\u201cSyncing\u201d is getting two systems to a state of harmony. This might mean keeping",date:"2021-02-17T00:00:00.000Z",formattedDate:"17 f\xe9vrier 2021",tags:[{label:"how-to",permalink:"/fr/articles/tags/how-to"},{label:"tips",permalink:"/fr/articles/tags/tips"}],readingTime:3.535,hasTruncateMarker:!0,authors:[{name:"Jed Goldstein",url:"https://github.com/jedbgold",imageURL:"https://avatars.githubusercontent.com/jedbgold"}],frontMatter:{layout:"post",title:"Sync Like You Mean It: Thinking Through System \u201cSyncing\u201d Protocols",author:"Jed Goldstein",author_url:"https://github.com/jedbgold",author_image_url:"https://avatars.githubusercontent.com/jedbgold",tags:["how-to","tips"],featured:!0},prevItem:{title:"Forms and Cases: CommCare and event-based integration",permalink:"/fr/articles/2021/05/24/commcare-events"},nextItem:{title:"Our Servers or Yours: Thinking through deployment options",permalink:"/fr/articles/2021/02/03/hosted-or-local-deployment"}},c={authorsImageUrls:[void 0]},l=[],u={toc:l};function p(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"\u201cSyncing\u201d is getting two systems to a state of harmony. This might mean keeping\na list of patients up to date, though modifications can be made in either\nsystem. It might mean copying transactions from one system to another on a\nnightly basis. It might mean a lot of things, but the key concept is that when\nyou sync systems, you\u2019re asking them to work together while simultaneously\nrespecting both software systems\u2019 independence."),(0,o.kt)("p",null,"In this post we\u2019ll discuss two different syncing protocols to consider when\ndesigning your data integration. These include:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("strong",{parentName:"li"},"Real-time, or event-based, syncs")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("strong",{parentName:"li"},"Scheduled syncs"))))}p.isMDXComponent=!0}}]);