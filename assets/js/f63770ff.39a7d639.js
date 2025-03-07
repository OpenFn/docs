"use strict";(self.webpackChunk_openfn_docs=self.webpackChunk_openfn_docs||[]).push([[73380],{10820:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>u,frontMatter:()=>r,metadata:()=>p,toc:()=>s});var a=n(58168),o=(n(96540),n(15680));const r={title:"OpenLMIS Adaptor"},i=void 0,p={unversionedId:"openlmis",id:"openlmis",title:"OpenLMIS Adaptor",description:"About OpenLMIS",source:"@site/adaptors/openlmis.md",sourceDirName:".",slug:"/openlmis",permalink:"/adaptors/openlmis",draft:!1,tags:[],version:"current",frontMatter:{title:"OpenLMIS Adaptor"},sidebar:"adaptors",previous:{title:"openimis developer readme",permalink:"/adaptors/packages/openimis-readme"},next:{title:"openlmis@1.0.10",permalink:"/adaptors/packages/openlmis-docs"}},l={},s=[{value:"About OpenLMIS",id:"about-openlmis",level:2},{value:"Integration Options",id:"integration-options",level:2},{value:"Authentication",id:"authentication",level:2},{value:"Helpful Links",id:"helpful-links",level:3},{value:"Implementation Examples",id:"implementation-examples",level:3}],m={toc:s},c="wrapper";function u(e){let{components:t,...n}=e;return(0,o.yg)(c,(0,a.A)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,o.yg)("h2",{id:"about-openlmis"},"About OpenLMIS"),(0,o.yg)("p",null,(0,o.yg)("a",{parentName:"p",href:"https://openlmis.org/"},"OpenLMIS (Open Logistics Management Information System)")," is an open-source, electronic logistics management information system designed to improve the management and distribution of health commodities. It enables supply chain management, providing visibility and accuracy in inventory tracking, order management, and reporting."),(0,o.yg)("h2",{id:"integration-options"},"Integration Options"),(0,o.yg)("p",null,"OpenLMIS supports 2 primary integration options with OpenFn:"),(0,o.yg)("ol",null,(0,o.yg)("li",{parentName:"ol"},(0,o.yg)("p",{parentName:"li"},(0,o.yg)("strong",{parentName:"p"},"Rest API:")," OpenLMIS has a REST API that enables external services like OpenFn to pull data from OpenLMIS, or push data from external apps to OpenLMIS. This option is suited for scheduled, bulk syncs or workflows that must update data in OpenLMIS with external information. See ",(0,o.yg)("a",{parentName:"p",href:"/adaptors/packages/openlmis-docs"},"functions")," for more on how to use this adaptor to work with the API.")),(0,o.yg)("li",{parentName:"ol"},(0,o.yg)("p",{parentName:"li"},(0,o.yg)("strong",{parentName:"p"},"Webhook:")," Webhook or Data Forwarding to push data from OpenLMIS to external systems (see ",(0,o.yg)("a",{parentName:"p",href:"https://openlmis.org/documentation/"},"docs"),"). This option is suited for real-time, event-based data integration."))),(0,o.yg)("h2",{id:"authentication"},"Authentication"),(0,o.yg)("ol",null,(0,o.yg)("li",{parentName:"ol"},"See ",(0,o.yg)("a",{parentName:"li",href:"https://openlmis.github.io/openlmis-api/"},"OpenLMIS docs")," for the latest on supported authentication methods."),(0,o.yg)("li",{parentName:"ol"},"When integrating with OpenLMIS via OpenFn, there is one primary authentication method that is supported: ",(0,o.yg)("strong",{parentName:"li"},"Basic Authentication"),". See this adaptor's ",(0,o.yg)("a",{parentName:"li",href:"/adaptors/packages/openlmis-configuration-schema"},"Configuration docs")," for more on the required authentication parameters.")),(0,o.yg)("p",null,"See platform docs on ",(0,o.yg)("a",{parentName:"p",href:"/documentation/manage-projects/manage-credentials"},"managing credentials")," for how to configure a credential in OpenFn. If working locally or if using a Raw JSON credential type, then your configuration will look something like this:"),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre"},'{\n  "password": "@some(!)Str0ngp4ss0w0rd",\n  "username": "administrator",\n  "baseUrl": "https://test.openlmis.org"\n}\n')),(0,o.yg)("h3",{id:"helpful-links"},"Helpful Links"),(0,o.yg)("ol",null,(0,o.yg)("li",{parentName:"ol"},(0,o.yg)("a",{parentName:"li",href:"https://openlmis.org/documentation/"},"OpenLMIS Documentation")," "),(0,o.yg)("li",{parentName:"ol"},(0,o.yg)("a",{parentName:"li",href:"https://openlmis.github.io/openlmis-api/"},"OpenLMIS API Guide")),(0,o.yg)("li",{parentName:"ol"},(0,o.yg)("a",{parentName:"li",href:"https://openlmis.org/integration/"},"Integration Guide"))),(0,o.yg)("h3",{id:"implementation-examples"},"Implementation Examples"),(0,o.yg)("p",null,(0,o.yg)("em",{parentName:"p"},"Coming soon!")))}u.isMDXComponent=!0},15680:(e,t,n)=>{n.d(t,{xA:()=>m,yg:()=>d});var a=n(96540);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=a.createContext({}),s=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},m=function(e){var t=s(e.components);return a.createElement(l.Provider,{value:t},e.children)},c="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},g=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,r=e.originalType,l=e.parentName,m=p(e,["components","mdxType","originalType","parentName"]),c=s(n),g=o,d=c["".concat(l,".").concat(g)]||c[g]||u[g]||r;return n?a.createElement(d,i(i({ref:t},m),{},{components:n})):a.createElement(d,i({ref:t},m))}));function d(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=n.length,i=new Array(r);i[0]=g;var p={};for(var l in t)hasOwnProperty.call(t,l)&&(p[l]=t[l]);p.originalType=e,p[c]="string"==typeof e?e:o,i[1]=p;for(var s=2;s<r;s++)i[s]=n[s];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}g.displayName="MDXCreateElement"}}]);