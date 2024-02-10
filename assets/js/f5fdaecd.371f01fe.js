"use strict";(self.webpackChunk_openfn_docs=self.webpackChunk_openfn_docs||[]).push([[11948],{95788:(e,t,r)=>{r.d(t,{Iu:()=>l,yg:()=>g});var o=r(11504);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,o)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,o,n=function(e,t){if(null==e)return{};var r,o,n={},a=Object.keys(e);for(o=0;o<a.length;o++)r=a[o],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)r=a[o],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var c=o.createContext({}),u=function(e){var t=o.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},l=function(e){var t=u(e.components);return o.createElement(c.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},f=o.forwardRef((function(e,t){var r=e.components,n=e.mdxType,a=e.originalType,c=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),p=u(r),f=n,g=p["".concat(c,".").concat(f)]||p[f]||d[f]||a;return r?o.createElement(g,i(i({ref:t},l),{},{components:r})):o.createElement(g,i({ref:t},l))}));function g(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var a=r.length,i=new Array(a);i[0]=f;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s[p]="string"==typeof e?e:n,i[1]=s;for(var u=2;u<a;u++)i[u]=r[u];return o.createElement.apply(null,i)}return o.createElement.apply(null,r)}f.displayName="MDXCreateElement"},77696:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>d,frontMatter:()=>a,metadata:()=>s,toc:()=>u});var o=r(45072),n=(r(11504),r(95788));const a={title:"Data Storage"},i=void 0,s={unversionedId:"manage-projects/io-data-storage",id:"manage-projects/io-data-storage",title:"Data Storage",description:'In the "Data Storage" section, you can configure what you\'d like Lightning to do',source:"@site/docs/manage-projects/io-data-storage.md",sourceDirName:"manage-projects",slug:"/manage-projects/io-data-storage",permalink:"/documentation/next/manage-projects/io-data-storage",draft:!1,editUrl:"https://github.com/openfn/docs/edit/main/docs/manage-projects/io-data-storage.md",tags:[],version:"current",frontMatter:{title:"Data Storage"},sidebar:"docs",previous:{title:"History Retention",permalink:"/documentation/next/manage-projects/retention-periods"},next:{title:"User Roles",permalink:"/documentation/next/manage-projects/user-roles-permissions"}},c={},u=[{value:"Why would I store input/output data along with run logs?",id:"why-would-i-store-inputoutput-data-along-with-run-logs",level:3},{value:"Why would I chose to <em>NOT</em> store I/O data?",id:"why-would-i-chose-to-not-store-io-data",level:3}],l={toc:u},p="wrapper";function d(e){let{components:t,...r}=e;return(0,n.yg)(p,(0,o.c)({},l,r,{components:t,mdxType:"MDXLayout"}),(0,n.yg)("p",null,'In the "Data Storage" section, you can configure what you\'d like Lightning to do\nwith the actual ',(0,n.yg)("em",{parentName:"p"},"data")," that's processed (or produced) by your workflow runs."),(0,n.yg)("h3",{id:"why-would-i-store-inputoutput-data-along-with-run-logs"},"Why would I store input/output data along with run logs?"),(0,n.yg)("p",null,'One of the most powerful features of the platform is the ability to "replay"\nwork orders. If a particular case referral fails, an administrator can find the\nfailed work order, make a change to the workflow or wait for a destination\nsystem to come online, and then reprocess that work order without having to\nfetch (or re-send) the data from a source system.'),(0,n.yg)("h3",{id:"why-would-i-chose-to-not-store-io-data"},"Why would I chose to ",(0,n.yg)("em",{parentName:"h3"},"NOT")," store I/O data?"),(0,n.yg)("p",null,"Some of our users are processing incredibly sensitive data (such as medical\nrecords) and might want to ensure that after a workflow is run there is no\npatient data left on OpenFn servers."),(0,n.yg)("p",null,'Enabling this "zero-persistence" feature for I/O data is an attractive option\nfor folks who want to use OpenFn on the cloud but are worried about data\nsovereignty.'))}d.isMDXComponent=!0}}]);