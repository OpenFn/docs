"use strict";(self.webpackChunk_openfn_docs=self.webpackChunk_openfn_docs||[]).push([[74067],{65549:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>d,frontMatter:()=>o,metadata:()=>s,toc:()=>p});var a=n(58168),r=(n(96540),n(15680));const o={title:"MySQL Adaptor"},i=void 0,s={unversionedId:"mysql",id:"mysql",title:"MySQL Adaptor",description:"About MySQL",source:"@site/adaptors/mysql.md",sourceDirName:".",slug:"/mysql",permalink:"/adaptors/mysql",draft:!1,tags:[],version:"current",frontMatter:{title:"MySQL Adaptor"},sidebar:"adaptors",previous:{title:"mssql developer readme",permalink:"/adaptors/packages/mssql-readme"},next:{title:"mysql@2.0.6",permalink:"/adaptors/packages/mysql-docs"}},l={},p=[{value:"About MySQL",id:"about-mysql",level:2},{value:"Integration Options",id:"integration-options",level:2},{value:"Authentication",id:"authentication",level:2},{value:"Helpful Links",id:"helpful-links",level:3}],c={toc:p},u="wrapper";function d(e){let{components:t,...n}=e;return(0,r.yg)(u,(0,a.A)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,r.yg)("h2",{id:"about-mysql"},"About MySQL"),(0,r.yg)("p",null,"MySQL is a free and open-source relational database management system. It can be accessed and manipulated using SQL to extract or load data."),(0,r.yg)("h2",{id:"integration-options"},"Integration Options"),(0,r.yg)("p",null,"The ",(0,r.yg)("inlineCode",{parentName:"p"},"mysql")," adaptor provides direct database connections for accessing data and executing SQL and standard database operations. See ",(0,r.yg)("a",{parentName:"p",href:"/adaptors/packages/mysql-docs"},"functions")," for more on how to use this adaptor."),(0,r.yg)("h2",{id:"authentication"},"Authentication"),(0,r.yg)("p",null,"See the ",(0,r.yg)("a",{parentName:"p",href:"https://dev.mysql.com/doc/"},"MySQL docs")," for the latest on supported authentication methods. When integrating with a MySQL database via OpenFn, you authenticate via SSH using authorized database credentials. See this adaptor's ",(0,r.yg)("a",{parentName:"p",href:"/adaptors/packages/mysql-configuration-schema"},"configuration docs")," for more on the required authentication parameters."),(0,r.yg)("p",null,"See platform docs on ",(0,r.yg)("a",{parentName:"p",href:"/documentation/manage-projects/manage-credentials"},"managing credentials")," for how to configure a credential in OpenFn. If working locally or if using a Raw JSON credential type, then your configuration will look something like this:"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre"},'{\n  "host": "some-host-url.compute-1.amazonaws.com",\n  "database": "demo-db",\n  "user": "admin-demo",\n  "password": "@super(!)Secretpass"\n}\n')),(0,r.yg)("h3",{id:"helpful-links"},"Helpful Links"),(0,r.yg)("ol",null,(0,r.yg)("li",{parentName:"ol"},(0,r.yg)("a",{parentName:"li",href:"https://dev.mysql.com/doc/"},"MySQL documentation"))))}d.isMDXComponent=!0},15680:(e,t,n)=>{n.d(t,{xA:()=>c,yg:()=>y});var a=n(96540);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=a.createContext({}),p=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=p(e.components);return a.createElement(l.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),u=p(n),m=r,y=u["".concat(l,".").concat(m)]||u[m]||d[m]||o;return n?a.createElement(y,i(i({ref:t},c),{},{components:n})):a.createElement(y,i({ref:t},c))}));function y(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=m;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[u]="string"==typeof e?e:r,i[1]=s;for(var p=2;p<o;p++)i[p]=n[p];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"}}]);