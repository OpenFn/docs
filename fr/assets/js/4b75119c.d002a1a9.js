"use strict";(self.webpackChunk_openfn_docs=self.webpackChunk_openfn_docs||[]).push([[94831],{3905:(t,e,n)=>{n.d(e,{Zo:()=>p,kt:()=>h});var r=n(67294);function o(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function a(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function i(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?a(Object(n),!0).forEach((function(e){o(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function s(t,e){if(null==t)return{};var n,r,o=function(t,e){if(null==t)return{};var n,r,o={},a=Object.keys(t);for(r=0;r<a.length;r++)n=a[r],e.indexOf(n)>=0||(o[n]=t[n]);return o}(t,e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);for(r=0;r<a.length;r++)n=a[r],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(o[n]=t[n])}return o}var l=r.createContext({}),u=function(t){var e=r.useContext(l),n=e;return t&&(n="function"==typeof t?t(e):i(i({},e),t)),n},p=function(t){var e=u(t.components);return r.createElement(l.Provider,{value:e},t.children)},c="mdxType",d={inlineCode:"code",wrapper:function(t){var e=t.children;return r.createElement(r.Fragment,{},e)}},m=r.forwardRef((function(t,e){var n=t.components,o=t.mdxType,a=t.originalType,l=t.parentName,p=s(t,["components","mdxType","originalType","parentName"]),c=u(n),m=o,h=c["".concat(l,".").concat(m)]||c[m]||d[m]||a;return n?r.createElement(h,i(i({ref:e},p),{},{components:n})):r.createElement(h,i({ref:e},p))}));function h(t,e){var n=arguments,o=e&&e.mdxType;if("string"==typeof t||o){var a=n.length,i=new Array(a);i[0]=m;var s={};for(var l in e)hasOwnProperty.call(e,l)&&(s[l]=e[l]);s.originalType=t,s[c]="string"==typeof t?t:o,i[1]=s;for(var u=2;u<a;u++)i[u]=n[u];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},60406:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>l,contentTitle:()=>i,default:()=>c,frontMatter:()=>a,metadata:()=>s,toc:()=>u});var r=n(87462),o=(n(67294),n(3905));const a={layout:"post",title:"Tracked entity instances in DHIS2",author:"Taylor Downs",author_url:"https://github.com/taylordowns2000",author_image_url:"https://avatars.githubusercontent.com/taylordowns2000",tags:["how-to","tips"],featured:!0},i=void 0,s={permalink:"/fr/articles/2020/12/09/upsert-in-dhis2",editUrl:"https://github.com/openfn/docs/edit/main/articles/2020-12-09-upsert-in-dhis2.md",source:"@site/articles/2020-12-09-upsert-in-dhis2.md",title:"Tracked entity instances in DHIS2",description:"tl;dr: Lots of our users want to upsert tracked entity instances in dhis2, but",date:"2020-12-09T00:00:00.000Z",formattedDate:"9 d\xe9cembre 2020",tags:[{label:"how-to",permalink:"/fr/articles/tags/how-to"},{label:"tips",permalink:"/fr/articles/tags/tips"}],readingTime:1.71,hasTruncateMarker:!0,authors:[{name:"Taylor Downs",url:"https://github.com/taylordowns2000",imageURL:"https://avatars.githubusercontent.com/taylordowns2000"}],frontMatter:{layout:"post",title:"Tracked entity instances in DHIS2",author:"Taylor Downs",author_url:"https://github.com/taylordowns2000",author_image_url:"https://avatars.githubusercontent.com/taylordowns2000",tags:["how-to","tips"],featured:!0},prevItem:{title:"Our Servers or Yours: Thinking through deployment options",permalink:"/fr/articles/2021/02/03/hosted-or-local-deployment"},nextItem:{title:"Product News: Enhanced Scheduled/Periodic Job Control",permalink:"/fr/articles/2020/07/14/cron-is-better-than-a-timer"}},l={authorsImageUrls:[void 0]},u=[{value:"A bit more...",id:"a-bit-more",level:2},{value:"Even more!",id:"even-more",level:2}],p={toc:u};function c(t){let{components:e,...n}=t;return(0,o.kt)("wrapper",(0,r.Z)({},p,n,{components:e,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"tl;dr: Lots of our users want to upsert tracked entity instances in dhis2, but\nupserts aren\u2019t supported by a standard DHIS2 API endpoint. We built one in our\ndhis2 adaptor: it\u2019s composed of existing APIs and a bit of logic \ud83e\udd14. Now you can\n",(0,o.kt)("inlineCode",{parentName:"p"},"upsert")," tracked entity instances to DHIS2 \ud83d\udc4d \u2705."),(0,o.kt)("h2",{id:"a-bit-more"},"A bit more..."),(0,o.kt)("p",null,"An \u201cUPSERT\u201d is a portmanteau of the database functions UPDATE and INSERT. It\u2019s\ncritical to handle upserts properly when integrating systems. As of version 35\nof the API, DHIS2 does not allow for an administrator to upsert tracked entity\ninstances (\u201cTEIs\u201d). OpenFn\u2019s own\n",(0,o.kt)("a",{parentName:"p",href:"https://github.com/chaiwa-berian"},"Chaiwa Berian")," has come up with a solution\nthat highlights the utility of helper functions in our dhis2 adaptor. By\ncombining various DHIS2 APIs through an upsertTEI function in OpenFn, DHIS2\nusers can now perform upserts to TEIs."),(0,o.kt)("p",null,"If you\u2019re curious, check out his implementation\n",(0,o.kt)("a",{parentName:"p",href:"https://github.com/OpenFn/language-dhis2/blob/master/src/Adaptor.js#L347"},"here"),"."),(0,o.kt)("h2",{id:"even-more"},"Even more!"),(0,o.kt)("p",null,"A tracked entity instance in DHIS2 is a type of entity that can be tracked\nthrough the system. It can be anything from a person to a commodity like a\nmedicine. If I am a database administrator presiding over two different systems\nthat are connected to one another, let\u2019s call them \u201cSystem A\u201d and \u201cSystem B,\u201d I\nwould like for any updates made to the TEI of a user named \u201cJim Smith\u201d in System\nA to also appear in Jim\u2019s record in System B. Before upserts came about, doing\nso was difficult because of the possibility of duplicate record creation.\nBecause an upsert simultaneously UPDATES and INSERTS, it prevents duplicates."),(0,o.kt)("p",null,"Upserts are important and good because they cut down on the risk of duplicate\ndata entry and they also allow for transactions to be retried over and over to\nensure data integrity. That last bit is called \u201cidempotency\u201d and you can read\nabout it ",(0,o.kt)("a",{parentName:"p",href:"https://blog.openfn.org/allow-yourself-to-fail/"},"over here"),"."),(0,o.kt)("p",null,"Please don\u2019t hesitate to reach out to one of OpenFn\u2019s implementation specialists\nif you\u2019d like to learn more."),(0,o.kt)("p",null,"\u2014 Taylor"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://openfn.org/signup"},"Sign up"),"{: .btn} to set up a project today,\nabsolutely free."),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"mailto:admin@openfn.org"},"Reach out"),"{: .btn} for more information."))}c.isMDXComponent=!0}}]);