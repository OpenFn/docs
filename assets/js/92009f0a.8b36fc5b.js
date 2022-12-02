"use strict";(self.webpackChunk_openfn_docs=self.webpackChunk_openfn_docs||[]).push([[18073],{3905:(t,e,a)=>{a.d(e,{Zo:()=>d,kt:()=>h});var n=a(67294);function o(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function r(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,n)}return a}function i(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?r(Object(a),!0).forEach((function(e){o(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function p(t,e){if(null==t)return{};var a,n,o=function(t,e){if(null==t)return{};var a,n,o={},r=Object.keys(t);for(n=0;n<r.length;n++)a=r[n],e.indexOf(a)>=0||(o[a]=t[a]);return o}(t,e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);for(n=0;n<r.length;n++)a=r[n],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(o[a]=t[a])}return o}var l=n.createContext({}),s=function(t){var e=n.useContext(l),a=e;return t&&(a="function"==typeof t?t(e):i(i({},e),t)),a},d=function(t){var e=s(t.components);return n.createElement(l.Provider,{value:e},t.children)},u="mdxType",g={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},c=n.forwardRef((function(t,e){var a=t.components,o=t.mdxType,r=t.originalType,l=t.parentName,d=p(t,["components","mdxType","originalType","parentName"]),u=s(a),c=o,h=u["".concat(l,".").concat(c)]||u[c]||g[c]||r;return a?n.createElement(h,i(i({ref:e},d),{},{components:a})):n.createElement(h,i({ref:e},d))}));function h(t,e){var a=arguments,o=e&&e.mdxType;if("string"==typeof t||o){var r=a.length,i=new Array(r);i[0]=c;var p={};for(var l in e)hasOwnProperty.call(e,l)&&(p[l]=e[l]);p.originalType=t,p[u]="string"==typeof t?t:o,i[1]=p;for(var s=2;s<r;s++)i[s]=a[s];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}c.displayName="MDXCreateElement"},83242:(t,e,a)=>{a.r(e),a.d(e,{assets:()=>l,contentTitle:()=>i,default:()=>u,frontMatter:()=>r,metadata:()=>p,toc:()=>s});var n=a(87462),o=(a(67294),a(3905));const r={title:"Go.Data"},i=void 0,p={unversionedId:"godata",id:"godata",title:"Go.Data",description:"Overview",source:"@site/adaptors/godata.md",sourceDirName:".",slug:"/godata",permalink:"/adaptors/godata",draft:!1,tags:[],version:"current",frontMatter:{title:"Go.Data"},sidebar:"adaptors",previous:{title:"fhir developer readme",permalink:"/adaptors/packages/fhir-readme"},next:{title:"godata@3.2.0",permalink:"/adaptors/packages/godata-docs"}},l={},s=[{value:"Overview",id:"overview",level:2},{value:"Integration Use Cases",id:"integration-use-cases",level:3},{value:"Further Reading",id:"further-reading",level:3},{value:"Integration Options",id:"integration-options",level:2},{value:"OpenFn Adaptor",id:"openfn-adaptor",level:2},{value:"Implementation Examples",id:"implementation-examples",level:2}],d={toc:s};function u(t){let{components:e,...a}=t;return(0,o.kt)("wrapper",(0,n.Z)({},d,a,{components:e,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"overview"},"Overview"),(0,o.kt)("p",null,"Go.Data (",(0,o.kt)("a",{parentName:"p",href:"https://www.who.int/godata"},"https://www.who.int/godata")," is an outbreak investigation tool for field data collection during\npublic health emergencies."),(0,o.kt)("h3",{id:"integration-use-cases"},"Integration Use Cases"),(0,o.kt)("p",null,"Check out the Go.Data ",(0,o.kt)("inlineCode",{parentName:"p"},"Interoperability Toolkit")," docs for example OpenFn integrations and related documentation: ",(0,o.kt)("a",{parentName:"p",href:"https://worldhealthorganization.github.io/godata/interoperability/"},"https://worldhealthorganization.github.io/godata/interoperability/")),(0,o.kt)("h3",{id:"further-reading"},"Further Reading"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Go.Data API docs\n",(0,o.kt)("a",{parentName:"li",href:"https://worldhealthorganization.github.io/godata/api-docs/"},"https://worldhealthorganization.github.io/godata/api-docs/")),(0,o.kt)("li",{parentName:"ol"},"Go.Data Community\n",(0,o.kt)("a",{parentName:"li",href:"https://community-godata.who.int/login"},"https://community-godata.who.int/login")),(0,o.kt)("li",{parentName:"ol"},"Go.Data GitHub Repository \u2013 ",(0,o.kt)("a",{parentName:"li",href:"https://github.com/WorldHealthOrganization/godata"},"https://github.com/WorldHealthOrganization/godata"))),(0,o.kt)("h2",{id:"integration-options"},"Integration Options"),(0,o.kt)("p",null,"Data integration via the Go.Data web API. Two-way integration can be achieved, but see all options here: ",(0,o.kt)("a",{parentName:"p",href:"https://worldhealthorganization.github.io/godata/options/"},"https://worldhealthorganization.github.io/godata/options/")),(0,o.kt)("h2",{id:"openfn-adaptor"},"OpenFn Adaptor"),(0,o.kt)("p",null,"The open-source ",(0,o.kt)("a",{parentName:"p",href:"https://openfn.github.io/language-godata/"},(0,o.kt)("inlineCode",{parentName:"a"},"language-godata")),"\nadaptor has been developed with a series of helper functions for common\noperations to expedite integration setup."),(0,o.kt)("p",null,"Also, the generic\n",(0,o.kt)("a",{parentName:"p",href:"https://github.com/OpenFn/language-http#language-http-"},(0,o.kt)("inlineCode",{parentName:"a"},"language-http"))," can be\nused to make HTTP requests to the Go.Data API and can perform any operations not\nsupported by ",(0,o.kt)("inlineCode",{parentName:"p"},"language-godata"),"."),(0,o.kt)("h2",{id:"implementation-examples"},"Implementation Examples"),(0,o.kt)("p",null,"See Go.Data docs site: ",(0,o.kt)("a",{parentName:"p",href:"https://worldhealthorganization.github.io/godata/integration-scripts/"},"https://worldhealthorganization.github.io/godata/integration-scripts/")))}u.isMDXComponent=!0}}]);