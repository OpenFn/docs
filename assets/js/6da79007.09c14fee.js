"use strict";(self.webpackChunk_openfn_docs=self.webpackChunk_openfn_docs||[]).push([[95069],{44165:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>u,frontMatter:()=>o,metadata:()=>p,toc:()=>s});var a=n(58168),r=(n(96540),n(15680));const o={title:"OpenHIM Adaptor"},i=void 0,p={unversionedId:"openhim",id:"openhim",title:"OpenHIM Adaptor",description:"About OpenHIM",source:"@site/adaptors/openhim.md",sourceDirName:".",slug:"/openhim",permalink:"/adaptors/openhim",draft:!1,tags:[],version:"current",frontMatter:{title:"OpenHIM Adaptor"},sidebar:"adaptors",previous:{title:"openfn developer readme",permalink:"/adaptors/packages/openfn-readme"},next:{title:"openhim@0.3.8",permalink:"/adaptors/packages/openhim-docs"}},l={},s=[{value:"About OpenHIM",id:"about-openhim",level:2},{value:"Integration Options",id:"integration-options",level:2},{value:"Authentication",id:"authentication",level:2},{value:"Helpful Links",id:"helpful-links",level:3},{value:"Implementation Examples",id:"implementation-examples",level:3}],m={toc:s},c="wrapper";function u(e){let{components:t,...n}=e;return(0,r.yg)(c,(0,a.A)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,r.yg)("h2",{id:"about-openhim"},"About OpenHIM"),(0,r.yg)("p",null,(0,r.yg)("a",{parentName:"p",href:"https://openhim.org/"},"OpenHIM (Open Health Information Mediator)")," is an open-source, middleware solution designed to facilitate interoperability between health information systems. It acts as a mediator, handling data transformation, validation, and routing between various systems. "),(0,r.yg)("h2",{id:"integration-options"},"Integration Options"),(0,r.yg)("p",null,"OpenHIM supports 2 primary integration options with OpenFn:"),(0,r.yg)("ol",null,(0,r.yg)("li",{parentName:"ol"},(0,r.yg)("p",{parentName:"li"},(0,r.yg)("strong",{parentName:"p"},"Rest API:")," OpenHIM has a REST API that enables external services like OpenFn to pull data from OpenHIM, or push data from external apps to OpenHIM. This option is suited for scheduled, bulk syncs or workflows that must update data in OpenHIM with external information. See ",(0,r.yg)("a",{parentName:"p",href:"/adaptors/packages/openhim-docs"},"functions")," for more on how to use this adaptor to work with the API.")),(0,r.yg)("li",{parentName:"ol"},(0,r.yg)("p",{parentName:"li"},(0,r.yg)("strong",{parentName:"p"},"Webhook:")," Webhook or Data Forwarding to push data from OpenHIM to external systems (see ",(0,r.yg)("a",{parentName:"p",href:"https://openhim.org/docs/user-guide/alerting-reports/"},"docs"),"). This option is suited for real-time, event-based data integration."))),(0,r.yg)("h2",{id:"authentication"},"Authentication"),(0,r.yg)("ol",null,(0,r.yg)("li",{parentName:"ol"},"See ",(0,r.yg)("a",{parentName:"li",href:"https://openhim.org/documentation"},"OpenHIM docs")," for the latest on supported authentication methods."),(0,r.yg)("li",{parentName:"ol"},"When integrating with OpenHIM via OpenFn, there is one primary authentication method that is supported: ",(0,r.yg)("strong",{parentName:"li"},"Basic Authentication"),". See this adaptor's ",(0,r.yg)("a",{parentName:"li",href:"/adaptors/packages/openhim-configuration-schema"},"Configuration docs")," for more on the required authentication parameters.")),(0,r.yg)("p",null,"See platform docs on ",(0,r.yg)("a",{parentName:"p",href:"/documentation/manage-projects/manage-credentials"},"managing credentials")," for how to configure a credential in OpenFn. If working locally or if using a Raw JSON credential type, then your configuration will look something like this:"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre"},'{\n  "apiUrl": "http://openhim.com/api"\n}\n')),(0,r.yg)("h3",{id:"helpful-links"},"Helpful Links"),(0,r.yg)("ol",null,(0,r.yg)("li",{parentName:"ol"},(0,r.yg)("a",{parentName:"li",href:"https://openhim.org/documentation"},"OpenHIM Documentation")),(0,r.yg)("li",{parentName:"ol"},(0,r.yg)("a",{parentName:"li",href:"https://openhim.org/api"},"OpenHIM API Reference"))),(0,r.yg)("h3",{id:"implementation-examples"},"Implementation Examples"),(0,r.yg)("p",null,(0,r.yg)("em",{parentName:"p"},"Coming soon!")))}u.isMDXComponent=!0},15680:(e,t,n)=>{n.d(t,{xA:()=>m,yg:()=>g});var a=n(96540);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=a.createContext({}),s=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},m=function(e){var t=s(e.components);return a.createElement(l.Provider,{value:t},e.children)},c="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,l=e.parentName,m=p(e,["components","mdxType","originalType","parentName"]),c=s(n),d=r,g=c["".concat(l,".").concat(d)]||c[d]||u[d]||o;return n?a.createElement(g,i(i({ref:t},m),{},{components:n})):a.createElement(g,i({ref:t},m))}));function g(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=d;var p={};for(var l in t)hasOwnProperty.call(t,l)&&(p[l]=t[l]);p.originalType=e,p[c]="string"==typeof e?e:r,i[1]=p;for(var s=2;s<o;s++)i[s]=n[s];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"}}]);