"use strict";(self.webpackChunk_openfn_docs=self.webpackChunk_openfn_docs||[]).push([[58475],{74217:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>u,frontMatter:()=>a,metadata:()=>p,toc:()=>s});var o=n(58168),r=(n(96540),n(15680));const a={title:"MongoDB Adaptor"},i=void 0,p={unversionedId:"mongodb",id:"mongodb",title:"MongoDB Adaptor",description:"About MongoDB",source:"@site/adaptors/mongodb.md",sourceDirName:".",slug:"/mongodb",permalink:"/adaptors/mongodb",draft:!1,tags:[],version:"current",frontMatter:{title:"MongoDB Adaptor"},sidebar:"adaptors",previous:{title:"mojatax developer readme",permalink:"/adaptors/packages/mojatax-readme"},next:{title:"mongodb@2.1.10",permalink:"/adaptors/packages/mongodb-docs"}},c={},s=[{value:"About MongoDB",id:"about-mongodb",level:2},{value:"Integration Options",id:"integration-options",level:2},{value:"Authentication",id:"authentication",level:2},{value:"Helpful Links",id:"helpful-links",level:3}],l={toc:s},d="wrapper";function u(e){let{components:t,...n}=e;return(0,r.yg)(d,(0,o.A)({},l,n,{components:t,mdxType:"MDXLayout"}),(0,r.yg)("h2",{id:"about-mongodb"},"About MongoDB"),(0,r.yg)("p",null,(0,r.yg)("a",{parentName:"p",href:"https://www.mongodb.com/"},"MongoDB")," is a NoSQL, document-oriented database that stores data in BSON (Binary JSON) format, enabling easy storage and retrieval of complex and hierarchical data structures"),(0,r.yg)("h2",{id:"integration-options"},"Integration Options"),(0,r.yg)("p",null,"The ",(0,r.yg)("inlineCode",{parentName:"p"},"mongodb")," adaptor provides direct database connections for accessing data and executing SQL and standard database operations. See ",(0,r.yg)("a",{parentName:"p",href:"/adaptors/packages/mongodb-docs"},"functions")," for more on how to use this adaptor."),(0,r.yg)("h2",{id:"authentication"},"Authentication"),(0,r.yg)("p",null,"See the ",(0,r.yg)("a",{parentName:"p",href:"https://www.mongodb.com/docs/"},"MongoDB docs")," for the latest on supported authentication methods. When integrating with a MongoDB database via OpenFn, you authenticate via SSH using authorized database credentials. See this adaptor's ",(0,r.yg)("a",{parentName:"p",href:"/adaptors/packages/mongodb-configuration-schema"},"configuration docs")," for more on the required authentication parameters."),(0,r.yg)("p",null,"See platform docs on ",(0,r.yg)("a",{parentName:"p",href:"/documentation/manage-projects/manage-credentials"},"managing credentials")," for how to configure a credential in OpenFn. If working locally or if using a Raw JSON credential type, then your configuration will look something like this:"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre"},'{\n  "clusterHostname": "yourCluster-xxxyzzz.mongodb.net",\n  "username": "admin",\n  "password": "@secret(!)Pass"\n}\n')),(0,r.yg)("h3",{id:"helpful-links"},"Helpful Links"),(0,r.yg)("ol",null,(0,r.yg)("li",{parentName:"ol"},(0,r.yg)("a",{parentName:"li",href:"https://www.mongodb.com/docs/"},"MongoDB documentation"))))}u.isMDXComponent=!0},15680:(e,t,n)=>{n.d(t,{xA:()=>l,yg:()=>m});var o=n(96540);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},a=Object.keys(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var c=o.createContext({}),s=function(e){var t=o.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},l=function(e){var t=s(e.components);return o.createElement(c.Provider,{value:t},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},g=o.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,c=e.parentName,l=p(e,["components","mdxType","originalType","parentName"]),d=s(n),g=r,m=d["".concat(c,".").concat(g)]||d[g]||u[g]||a;return n?o.createElement(m,i(i({ref:t},l),{},{components:n})):o.createElement(m,i({ref:t},l))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,i=new Array(a);i[0]=g;var p={};for(var c in t)hasOwnProperty.call(t,c)&&(p[c]=t[c]);p.originalType=e,p[d]="string"==typeof e?e:r,i[1]=p;for(var s=2;s<a;s++)i[s]=n[s];return o.createElement.apply(null,i)}return o.createElement.apply(null,n)}g.displayName="MDXCreateElement"}}]);