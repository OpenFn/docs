"use strict";(self.webpackChunk_openfn_docs=self.webpackChunk_openfn_docs||[]).push([[73516],{18729:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>d,frontMatter:()=>o,metadata:()=>p,toc:()=>l});var n=a(58168),r=(a(96540),a(15680));const o={title:"Hive Adaptor"},i=void 0,p={unversionedId:"hive",id:"hive",title:"Hive Adaptor",description:"About Apache Hive",source:"@site/adaptors/hive.md",sourceDirName:".",slug:"/hive",permalink:"/adaptors/hive",draft:!1,tags:[],version:"current",frontMatter:{title:"Hive Adaptor"},sidebar:"adaptors",previous:{title:"googlesheets developer readme",permalink:"/adaptors/packages/googlesheets-readme"},next:{title:"hive@0.3.10",permalink:"/adaptors/packages/hive-docs"}},s={},l=[{value:"About Apache Hive",id:"about-apache-hive",level:2},{value:"Integration Options",id:"integration-options",level:2},{value:"Authentication",id:"authentication",level:2},{value:"Helpful Links",id:"helpful-links",level:3},{value:"Implementation Examples",id:"implementation-examples",level:3}],c={toc:l},u="wrapper";function d(e){let{components:t,...a}=e;return(0,r.yg)(u,(0,n.A)({},c,a,{components:t,mdxType:"MDXLayout"}),(0,r.yg)("h2",{id:"about-apache-hive"},"About Apache Hive"),(0,r.yg)("p",null,(0,r.yg)("a",{parentName:"p",href:"https://hive.apache.org/"},"Apache Hive")," is a data warehouse software that facilitates reading, writing, and managing large datasets stored in distributed storage systems."),(0,r.yg)("h2",{id:"integration-options"},"Integration Options"),(0,r.yg)("p",null,"The ",(0,r.yg)("inlineCode",{parentName:"p"},"hive")," adaptor provides direct database connections for accessing data and executing SQL and standard database operations. See ",(0,r.yg)("a",{parentName:"p",href:"/adaptors/packages/hive-docs"},"functions")," for more on how to use this adaptor."),(0,r.yg)("h2",{id:"authentication"},"Authentication"),(0,r.yg)("p",null,"See ",(0,r.yg)("a",{parentName:"p",href:"https://hive.apache.org/docs/"},"Hive docs")," for the latest on supported authentication methods. When integrating with a Hive database via OpenFn, you authenticate via SSH using authorized database credentials. See this adaptor's ",(0,r.yg)("a",{parentName:"p",href:"/adaptors/packages/hive-configuration-schema"},"Configuration docs")," for more on the required authentication parameters."),(0,r.yg)("p",null,"See platform docs on ",(0,r.yg)("a",{parentName:"p",href:"/documentation/manage-projects/manage-credentials"},"managing credentials")," for how to configure a credential in OpenFn. If working locally or if using a Raw JSON credential type, then your configuration will look something like this:"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre"},'{\n  "host": "some-host-url.compute-1.amazonaws.com",\n  "database": "demo-db",\n  "username": "admin-demo",\n  "password": "@super(!)Secretpass"\n}\n')),(0,r.yg)("h3",{id:"helpful-links"},"Helpful Links"),(0,r.yg)("ol",null,(0,r.yg)("li",{parentName:"ol"},(0,r.yg)("a",{parentName:"li",href:"https://hive.apache.org/"},"Hive documentation"))),(0,r.yg)("h3",{id:"implementation-examples"},"Implementation Examples"),(0,r.yg)("p",null,(0,r.yg)("em",{parentName:"p"},"Coming soon!")))}d.isMDXComponent=!0},15680:(e,t,a)=>{a.d(t,{xA:()=>c,yg:()=>g});var n=a(96540);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function p(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var s=n.createContext({}),l=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},c=function(e){var t=l(e.components);return n.createElement(s.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,c=p(e,["components","mdxType","originalType","parentName"]),u=l(a),m=r,g=u["".concat(s,".").concat(m)]||u[m]||d[m]||o;return a?n.createElement(g,i(i({ref:t},c),{},{components:a})):n.createElement(g,i({ref:t},c))}));function g(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=a.length,i=new Array(o);i[0]=m;var p={};for(var s in t)hasOwnProperty.call(t,s)&&(p[s]=t[s]);p.originalType=e,p[u]="string"==typeof e?e:r,i[1]=p;for(var l=2;l<o;l++)i[l]=a[l];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}m.displayName="MDXCreateElement"}}]);