"use strict";(self.webpackChunk_openfn_docs=self.webpackChunk_openfn_docs||[]).push([[95182],{84789:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>u,frontMatter:()=>r,metadata:()=>p,toc:()=>g});var n=a(58168),o=(a(96540),a(15680));const r={title:"Go.Data"},i=void 0,p={unversionedId:"godata",id:"godata",title:"Go.Data",description:"Overview",source:"@site/adaptors/godata.md",sourceDirName:".",slug:"/godata",permalink:"/adaptors/godata",draft:!1,tags:[],version:"current",frontMatter:{title:"Go.Data"},sidebar:"adaptors",previous:{title:"fhir-ndr-et developer readme",permalink:"/adaptors/packages/fhir-ndr-et-readme"},next:{title:"godata@3.5.4",permalink:"/adaptors/packages/godata-docs"}},l={},g=[{value:"Overview",id:"overview",level:2},{value:"Integration Use Cases",id:"integration-use-cases",level:3},{value:"Further Reading",id:"further-reading",level:3},{value:"Integration Options",id:"integration-options",level:2},{value:"OpenFn Adaptor",id:"openfn-adaptor",level:2},{value:"Implementation Examples",id:"implementation-examples",level:2}],s={toc:g},d="wrapper";function u(e){let{components:t,...a}=e;return(0,o.yg)(d,(0,n.A)({},s,a,{components:t,mdxType:"MDXLayout"}),(0,o.yg)("h2",{id:"overview"},"Overview"),(0,o.yg)("p",null,"Go.Data (",(0,o.yg)("a",{parentName:"p",href:"https://www.who.int/godata"},"https://www.who.int/godata")," is an outbreak investigation tool for field data collection during\npublic health emergencies."),(0,o.yg)("h3",{id:"integration-use-cases"},"Integration Use Cases"),(0,o.yg)("p",null,"Check out the Go.Data ",(0,o.yg)("inlineCode",{parentName:"p"},"Interoperability Toolkit")," docs for example OpenFn integrations and related documentation: ",(0,o.yg)("a",{parentName:"p",href:"https://worldhealthorganization.github.io/godata/interoperability/"},"https://worldhealthorganization.github.io/godata/interoperability/")),(0,o.yg)("h3",{id:"further-reading"},"Further Reading"),(0,o.yg)("ol",null,(0,o.yg)("li",{parentName:"ol"},"Go.Data API docs\n",(0,o.yg)("a",{parentName:"li",href:"https://worldhealthorganization.github.io/godata/api-docs/"},"https://worldhealthorganization.github.io/godata/api-docs/")),(0,o.yg)("li",{parentName:"ol"},"Go.Data Community\n",(0,o.yg)("a",{parentName:"li",href:"https://community-godata.who.int/login"},"https://community-godata.who.int/login")),(0,o.yg)("li",{parentName:"ol"},"Go.Data GitHub Repository \u2013 ",(0,o.yg)("a",{parentName:"li",href:"https://github.com/WorldHealthOrganization/godata"},"https://github.com/WorldHealthOrganization/godata"))),(0,o.yg)("h2",{id:"integration-options"},"Integration Options"),(0,o.yg)("p",null,"Data integration via the Go.Data web API. Two-way integration can be achieved, but see all options here: ",(0,o.yg)("a",{parentName:"p",href:"https://worldhealthorganization.github.io/godata/options/"},"https://worldhealthorganization.github.io/godata/options/")),(0,o.yg)("h2",{id:"openfn-adaptor"},"OpenFn Adaptor"),(0,o.yg)("p",null,"The open-source ",(0,o.yg)("a",{parentName:"p",href:"https://openfn.github.io/language-godata/"},(0,o.yg)("inlineCode",{parentName:"a"},"language-godata")),"\nadaptor has been developed with a series of helper functions for common\noperations to expedite integration setup."),(0,o.yg)("p",null,"Also, the generic\n",(0,o.yg)("a",{parentName:"p",href:"https://github.com/OpenFn/language-http#language-http-"},(0,o.yg)("inlineCode",{parentName:"a"},"language-http"))," can be\nused to make HTTP requests to the Go.Data API and can perform any operations not\nsupported by ",(0,o.yg)("inlineCode",{parentName:"p"},"language-godata"),"."),(0,o.yg)("h2",{id:"implementation-examples"},"Implementation Examples"),(0,o.yg)("p",null,"See Go.Data docs site: ",(0,o.yg)("a",{parentName:"p",href:"https://worldhealthorganization.github.io/godata/integration-scripts/"},"https://worldhealthorganization.github.io/godata/integration-scripts/")))}u.isMDXComponent=!0},15680:(e,t,a)=>{a.d(t,{xA:()=>s,yg:()=>h});var n=a(96540);function o(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){o(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function p(e,t){if(null==e)return{};var a,n,o=function(e,t){if(null==e)return{};var a,n,o={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(o[a]=e[a]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(o[a]=e[a])}return o}var l=n.createContext({}),g=function(e){var t=n.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},s=function(e){var t=g(e.components);return n.createElement(l.Provider,{value:t},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},c=n.forwardRef((function(e,t){var a=e.components,o=e.mdxType,r=e.originalType,l=e.parentName,s=p(e,["components","mdxType","originalType","parentName"]),d=g(a),c=o,h=d["".concat(l,".").concat(c)]||d[c]||u[c]||r;return a?n.createElement(h,i(i({ref:t},s),{},{components:a})):n.createElement(h,i({ref:t},s))}));function h(e,t){var a=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=a.length,i=new Array(r);i[0]=c;var p={};for(var l in t)hasOwnProperty.call(t,l)&&(p[l]=t[l]);p.originalType=e,p[d]="string"==typeof e?e:o,i[1]=p;for(var g=2;g<r;g++)i[g]=a[g];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}c.displayName="MDXCreateElement"}}]);