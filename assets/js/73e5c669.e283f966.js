"use strict";(self.webpackChunk_openfn_docs=self.webpackChunk_openfn_docs||[]).push([[9747],{9434:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>m,frontMatter:()=>r,metadata:()=>p,toc:()=>s});var n=o(58168),a=(o(96540),o(15680));const r={title:"Odoo Adaptor"},i=void 0,p={unversionedId:"odoo",id:"odoo",title:"Odoo Adaptor",description:"About Odoo",source:"@site/adaptors/odoo.md",sourceDirName:".",slug:"/odoo",permalink:"/adaptors/odoo",draft:!1,tags:[],version:"current",frontMatter:{title:"Odoo Adaptor"},sidebar:"adaptors",previous:{title:"odk developer readme",permalink:"/adaptors/packages/odk-readme"},next:{title:"odoo@1.0.1",permalink:"/adaptors/packages/odoo-docs"}},l={},s=[{value:"About Odoo",id:"about-odoo",level:2},{value:"Integration Options",id:"integration-options",level:2},{value:"Authentication",id:"authentication",level:2},{value:"Helpful Links",id:"helpful-links",level:3},{value:"Implementation Examples",id:"implementation-examples",level:3}],d={toc:s},c="wrapper";function m(e){let{components:t,...o}=e;return(0,a.yg)(c,(0,n.A)({},d,o,{components:t,mdxType:"MDXLayout"}),(0,a.yg)("h2",{id:"about-odoo"},"About Odoo"),(0,a.yg)("p",null,(0,a.yg)("a",{parentName:"p",href:"https://odoo.com/"},"Odoo")," is a marketing automation platform that allows businesses to design, send, and manage email campaigns. It also provides tools for audience management, analytics, and integrations with other platforms to support marketing efforts."),(0,a.yg)("h2",{id:"integration-options"},"Integration Options"),(0,a.yg)("p",null,"Odoo supports two primary integration options with OpenFn:"),(0,a.yg)("p",null,(0,a.yg)("strong",{parentName:"p"},"1. Direct DB Connection:")," This is what ",(0,a.yg)("em",{parentName:"p"},"this")," adaptor supports to directly connect to your Odoo database. "),(0,a.yg)("p",null,(0,a.yg)("strong",{parentName:"p"},"2. Rest API:")," Odoo offers a REST API that enables external applications to interact with its services, but this is a ",(0,a.yg)("em",{parentName:"p"},"paid option/may require an additional plugin"),". This option is ideal for applications requiring scheduled or bulk synchronization with Odoo. Refer to the Odoo REST API ",(0,a.yg)("a",{parentName:"p",href:"https://www.odoo.com/documentation/16.0/developer/api/external_api.html"},"documentation")," for detailed guidelines on endpoints and payload formats."),(0,a.yg)("p",null,(0,a.yg)("strong",{parentName:"p"},"3. Webhook:")," Webhook or Data Forwarding to push data from Odoo to external systems (",(0,a.yg)("a",{parentName:"p",href:"https://www.odoo.com/documentation/16.0/developer/reference/webhooks.html"},"see docs"),"). This option is suited for real-time, event-based data integration."),(0,a.yg)("h2",{id:"authentication"},"Authentication"),(0,a.yg)("ol",null,(0,a.yg)("li",{parentName:"ol"},"See ",(0,a.yg)("a",{parentName:"li",href:"https://www.odoo.com/documentation/16.0/developer/misc/api/odoo.html"},"Odoo docs")," for the latest on supported authentication methods."),(0,a.yg)("li",{parentName:"ol"},"When integrating with Odoo via OpenFn, authentication via ",(0,a.yg)("strong",{parentName:"li"},"User Credentials")," is supported."),(0,a.yg)("li",{parentName:"ol"},"See this adaptor's ",(0,a.yg)("a",{parentName:"li",href:"/adaptors/packages/odoo-configuration-schema"},"Configuration docs")," for more on the required authentication parameters.")),(0,a.yg)("p",null,"See platform docs on ",(0,a.yg)("a",{parentName:"p",href:"documentation/manage-projects/manage-credentials"},"managing credentials")," for how to configure a credential in OpenFn. If working locally or if using a Raw JSON credential type, then your configuration will look something like this:"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre"},'{\n  "password": "@some(!)Str0ngp4ss0w0rd",\n  "username": "test@openfn.org",\n  "database": "devel",\n  "baseUrl": "https://dev.newlogic-demo.com"\n}\n')),(0,a.yg)("h3",{id:"helpful-links"},"Helpful Links"),(0,a.yg)("ol",null,(0,a.yg)("li",{parentName:"ol"},(0,a.yg)("a",{parentName:"li",href:"https://www.odoo.com/documentation"},"Odoo Developer Portal")),(0,a.yg)("li",{parentName:"ol"},(0,a.yg)("a",{parentName:"li",href:"https://www.odoo.com/documentation/16.0/developer/api/external_api.html"},"API Reference")),(0,a.yg)("li",{parentName:"ol"},(0,a.yg)("a",{parentName:"li",href:"https://www.odoo.com/documentation/16.0/developer/reference/webhooks.html"},"Webhook Setup Guide"))),(0,a.yg)("h3",{id:"implementation-examples"},"Implementation Examples"),(0,a.yg)("p",null,(0,a.yg)("em",{parentName:"p"},"Coming soon!")))}m.isMDXComponent=!0},15680:(e,t,o)=>{o.d(t,{xA:()=>d,yg:()=>g});var n=o(96540);function a(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function r(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,n)}return o}function i(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?r(Object(o),!0).forEach((function(t){a(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):r(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function p(e,t){if(null==e)return{};var o,n,a=function(e,t){if(null==e)return{};var o,n,a={},r=Object.keys(e);for(n=0;n<r.length;n++)o=r[n],t.indexOf(o)>=0||(a[o]=e[o]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)o=r[n],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(a[o]=e[o])}return a}var l=n.createContext({}),s=function(e){var t=n.useContext(l),o=t;return e&&(o="function"==typeof e?e(t):i(i({},t),e)),o},d=function(e){var t=s(e.components);return n.createElement(l.Provider,{value:t},e.children)},c="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var o=e.components,a=e.mdxType,r=e.originalType,l=e.parentName,d=p(e,["components","mdxType","originalType","parentName"]),c=s(o),u=a,g=c["".concat(l,".").concat(u)]||c[u]||m[u]||r;return o?n.createElement(g,i(i({ref:t},d),{},{components:o})):n.createElement(g,i({ref:t},d))}));function g(e,t){var o=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=o.length,i=new Array(r);i[0]=u;var p={};for(var l in t)hasOwnProperty.call(t,l)&&(p[l]=t[l]);p.originalType=e,p[c]="string"==typeof e?e:a,i[1]=p;for(var s=2;s<r;s++)i[s]=o[s];return n.createElement.apply(null,i)}return n.createElement.apply(null,o)}u.displayName="MDXCreateElement"}}]);