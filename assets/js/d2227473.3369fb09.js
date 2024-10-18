"use strict";(self.webpackChunk_openfn_docs=self.webpackChunk_openfn_docs||[]).push([[49534],{3648:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>u,frontMatter:()=>a,metadata:()=>s,toc:()=>p});var o=r(58168),n=(r(96540),r(15680));const a={title:"History Retention"},i=void 0,s={unversionedId:"manage-projects/retention-periods",id:"manage-projects/retention-periods",title:"History Retention",description:'In the "Data Storage" section, you can configure how long you\'d like your run',source:"@site/docs/manage-projects/retention-periods.md",sourceDirName:"manage-projects",slug:"/manage-projects/retention-periods",permalink:"/documentation/manage-projects/retention-periods",draft:!1,editUrl:"https://github.com/openfn/docs/edit/main/docs/manage-projects/retention-periods.md",tags:[],version:"current",frontMatter:{title:"History Retention"},sidebar:"docs",previous:{title:"Project Management",permalink:"/documentation/manage-projects/platform-mgmt"},next:{title:"Data Storage",permalink:"/documentation/manage-projects/io-data-storage"}},c={},p=[{value:"What is history?",id:"what-is-history",level:3},{value:"Why would I want to reduce my history retention period for a project?",id:"why-would-i-want-to-reduce-my-history-retention-period-for-a-project",level:3},{value:"What happens when old work orders, runs, logs, or dataclips get removed?",id:"what-happens-when-old-work-orders-runs-logs-or-dataclips-get-removed",level:3}],l={toc:p},d="wrapper";function u(e){let{components:t,...r}=e;return(0,n.yg)(d,(0,o.A)({},l,r,{components:t,mdxType:"MDXLayout"}),(0,n.yg)("p",null,'In the "Data Storage" section, you can configure how long you\'d like your run\nhistory to be stored for a particular project.'),(0,n.yg)("admonition",{type:"tip"},(0,n.yg)("p",{parentName:"admonition"},"Note that when running Lightning on OpenFn.org, a project's plan may limit how\nlong we'll store your history. You can always store less, but paid plans get\nlonger storage.")),(0,n.yg)("h3",{id:"what-is-history"},"What is history?"),(0,n.yg)("p",null,"History includes work orders, runs, logs, and any associated input/output\ndataclips."),(0,n.yg)("h3",{id:"why-would-i-want-to-reduce-my-history-retention-period-for-a-project"},"Why would I want to reduce my history retention period for a project?"),(0,n.yg)("p",null,"Some project administrators chose to store history for a shorter duration (a\nmonth or 90-days) to reduce data storage costs or to limit their data footprint."),(0,n.yg)("h3",{id:"what-happens-when-old-work-orders-runs-logs-or-dataclips-get-removed"},"What happens when old work orders, runs, logs, or dataclips get removed?"),(0,n.yg)("p",null,"All history is removed from OpenFn and cannot be accessible on the platform. If\nyou have previously requested\n",(0,n.yg)("a",{parentName:"p",href:"/documentation/manage-projects/io-data-storage?_gl=1*1x5ctqh*_gcl_au*MTE3Njc2MDkyMC4xNzI0MjQzMTAwLjY0NTI0ODAyMC4xNzI3MTY5OTM5LjE3MjcxNjk5NDA.#export-history"},"work order history exports,"),"\nyou'll still be able to access exported CSVs via the history export page in\nproject settings."))}u.isMDXComponent=!0},15680:(e,t,r)=>{r.d(t,{xA:()=>l,yg:()=>m});var o=r(96540);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,o)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,o,n=function(e,t){if(null==e)return{};var r,o,n={},a=Object.keys(e);for(o=0;o<a.length;o++)r=a[o],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)r=a[o],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var c=o.createContext({}),p=function(e){var t=o.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},l=function(e){var t=p(e.components);return o.createElement(c.Provider,{value:t},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},y=o.forwardRef((function(e,t){var r=e.components,n=e.mdxType,a=e.originalType,c=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),d=p(r),y=n,m=d["".concat(c,".").concat(y)]||d[y]||u[y]||a;return r?o.createElement(m,i(i({ref:t},l),{},{components:r})):o.createElement(m,i({ref:t},l))}));function m(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var a=r.length,i=new Array(a);i[0]=y;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s[d]="string"==typeof e?e:n,i[1]=s;for(var p=2;p<a;p++)i[p]=r[p];return o.createElement.apply(null,i)}return o.createElement.apply(null,r)}y.displayName="MDXCreateElement"}}]);