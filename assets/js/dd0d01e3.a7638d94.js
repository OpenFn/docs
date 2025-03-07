"use strict";(self.webpackChunk_openfn_docs=self.webpackChunk_openfn_docs||[]).push([[77562],{71918:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>p,default:()=>m,frontMatter:()=>o,metadata:()=>i,toc:()=>l});var r=n(58168),a=(n(96540),n(15680));const o={title:"OpenSSP Adaptor"},p=void 0,i={unversionedId:"openspp",id:"openspp",title:"OpenSSP Adaptor",description:"About OpenSSP",source:"@site/adaptors/openspp.md",sourceDirName:".",slug:"/openspp",permalink:"/adaptors/openspp",draft:!1,tags:[],version:"current",frontMatter:{title:"OpenSSP Adaptor"},sidebar:"adaptors",previous:{title:"openmrs developer readme",permalink:"/adaptors/packages/openmrs-readme"},next:{title:"openspp@2.0.8",permalink:"/adaptors/packages/openspp-docs"}},s={},l=[{value:"About OpenSSP",id:"about-openssp",level:2},{value:"Integration Options",id:"integration-options",level:2},{value:"Authentication",id:"authentication",level:2},{value:"Helpful Links",id:"helpful-links",level:3},{value:"Implementation Examples",id:"implementation-examples",level:3}],c={toc:l},u="wrapper";function m(e){let{components:t,...n}=e;return(0,a.yg)(u,(0,r.A)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,a.yg)("h2",{id:"about-openssp"},"About OpenSSP"),(0,a.yg)("p",null,(0,a.yg)("a",{parentName:"p",href:"https://openspp.org/"},"OpenSPP (Open Smart Patient Platform)")," is an open-source platform designed to support patient-centric workflows in healthcare delivery. It enables healthcare providers to manage patient data, schedule appointments, track health outcomes, and improve service delivery through real-time data insights and integration capabilities."),(0,a.yg)("h2",{id:"integration-options"},"Integration Options"),(0,a.yg)("p",null,"OpenSPP supports 2 primary integration options with OpenFn:"),(0,a.yg)("ol",null,(0,a.yg)("li",{parentName:"ol"},(0,a.yg)("p",{parentName:"li"},(0,a.yg)("strong",{parentName:"p"},"Rest API:")," OpenSPP has a REST API that enables external services like OpenFn to pull data from OpenSPP, or push data from external apps to OpenSPP. This option is suited for scheduled, bulk syncs or workflows that must update data in OpenSPP with external information. See ",(0,a.yg)("a",{parentName:"p",href:"/adaptors/packages/openspp-docs"},"functions")," for more on how to use this adaptor to work with the API.")),(0,a.yg)("li",{parentName:"ol"},(0,a.yg)("p",{parentName:"li"},(0,a.yg)("strong",{parentName:"p"},"Webhook:")," Webhook or Data Forwarding to push data from OpenSPP to external systems (see ",(0,a.yg)("a",{parentName:"p",href:"https://openspp.org/api"},"docs"),"). This option is suited for real-time, event-based data integration."))),(0,a.yg)("h2",{id:"authentication"},"Authentication"),(0,a.yg)("ol",null,(0,a.yg)("li",{parentName:"ol"},"See ",(0,a.yg)("a",{parentName:"li",href:"https://openspp.org/security"},"OpenSPP docs")," for the latest on supported authentication methods."),(0,a.yg)("li",{parentName:"ol"},"When integrating with OpenSPP via OpenFn, there is one primary authentication method that is supported: ",(0,a.yg)("strong",{parentName:"li"},"Basic Authentication"),". See this adaptor's ",(0,a.yg)("a",{parentName:"li",href:"/adaptors/packages/openspp-configuration-schema"},"Configuration docs")," for more on the required authentication parameters.")),(0,a.yg)("p",null,"See platform docs on ",(0,a.yg)("a",{parentName:"p",href:"/documentation/manage-projects/manage-credentials"},"managing credentials")," for how to configure a credential in OpenFn. If working locally or if using a Raw JSON credential type, then your configuration will look something like this:"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre"},'{\n  "password": "@some(!)Str0ngp4ss0w0rd",\n  "username": "test@openfn.org",\n  "database": "devel",\n  "baseUrl": "https://dev.newlogic-demo.com"\n}\n')),(0,a.yg)("h3",{id:"helpful-links"},"Helpful Links"),(0,a.yg)("ol",null,(0,a.yg)("li",{parentName:"ol"},(0,a.yg)("a",{parentName:"li",href:"https://openspp.org/documentation"},"OpenSPP Documentation")),(0,a.yg)("li",{parentName:"ol"},(0,a.yg)("a",{parentName:"li",href:"https://openspp.org/api"},"API Reference")),(0,a.yg)("li",{parentName:"ol"},(0,a.yg)("a",{parentName:"li",href:"https://openspp.org/integration"},"Integration Guide"))),(0,a.yg)("h3",{id:"implementation-examples"},"Implementation Examples"),(0,a.yg)("p",null,(0,a.yg)("em",{parentName:"p"},"Coming soon!")))}m.isMDXComponent=!0},15680:(e,t,n)=>{n.d(t,{xA:()=>c,yg:()=>g});var r=n(96540);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function p(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),l=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):p(p({},t),e)),n},c=function(e){var t=l(e.components);return r.createElement(s.Provider,{value:t},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),u=l(n),d=a,g=u["".concat(s,".").concat(d)]||u[d]||m[d]||o;return n?r.createElement(g,p(p({ref:t},c),{},{components:n})):r.createElement(g,p({ref:t},c))}));function g(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,p=new Array(o);p[0]=d;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i[u]="string"==typeof e?e:a,p[1]=i;for(var l=2;l<o;l++)p[l]=n[l];return r.createElement.apply(null,p)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"}}]);