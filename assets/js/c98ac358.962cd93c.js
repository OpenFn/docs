"use strict";(self.webpackChunk_openfn_docs=self.webpackChunk_openfn_docs||[]).push([[94395],{18117:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>l,contentTitle:()=>s,default:()=>c,frontMatter:()=>o,metadata:()=>i,toc:()=>p});var a=t(58168),n=(t(96540),t(15680));const o={title:"04a/Query for job changes",sidebar_label:"04a/Query for job changes",id:"04a-Query-for-job-changes-2019-12-12",keywords:["library","job","expression","mysql","alterState"]},s=void 0,i={unversionedId:"library/jobs/auto/04a-Query-for-job-changes-2019-12-12",id:"library/jobs/auto/04a-Query-for-job-changes-2019-12-12",title:"04a/Query for job changes",description:"This job was provided by an OpenFn.org user via the job library API.",source:"@site/adaptors/library/jobs/auto/04a-Query-for-job-changes-2019-12-12.md",sourceDirName:"library/jobs/auto",slug:"/library/jobs/auto/04a-Query-for-job-changes-2019-12-12",permalink:"/adaptors/library/jobs/auto/04a-Query-for-job-changes-2019-12-12",draft:!1,tags:[],version:"current",frontMatter:{title:"04a/Query for job changes",sidebar_label:"04a/Query for job changes",id:"04a-Query-for-job-changes-2019-12-12",keywords:["library","job","expression","mysql","alterState"]},sidebar:"adaptors",previous:{title:"05a/Query for new employees",permalink:"/adaptors/library/jobs/auto/05a-Query-for-new-employees-2019-12-19"},next:{title:"02a/ Query DB for people to pay",permalink:"/adaptors/library/jobs/auto/02a-Query-DB-for-people-to-pay-2019-12-11"}},l={},p=[{value:"Metadata",id:"metadata",level:2},{value:"Key Functions",id:"key-functions",level:2},{value:"Expression",id:"expression",level:2}],u={toc:p},y="wrapper";function c(e){let{components:r,...t}=e;return(0,n.yg)(y,(0,a.A)({},u,t,{components:r,mdxType:"MDXLayout"}),(0,n.yg)("em",null,"This job was provided by an OpenFn.org user via the job library API."),(0,n.yg)("h2",{id:"metadata"},"Metadata"),(0,n.yg)("ul",null,(0,n.yg)("li",{parentName:"ul"},"Name: 04a/Query for job changes"),(0,n.yg)("li",{parentName:"ul"},"Adaptor: ",(0,n.yg)("a",{parentName:"li",href:"https://www.github.com/openfn/language-mysql"},(0,n.yg)("inlineCode",{parentName:"a"},"@openfn/language-mysql"))),(0,n.yg)("li",{parentName:"ul"},"Adaptor Version: ",(0,n.yg)("a",{parentName:"li",href:"https://www.github.com/openfn/language-mysql"},(0,n.yg)("inlineCode",{parentName:"a"},"latest"))),(0,n.yg)("li",{parentName:"ul"},"Created almost 5 years ago"),(0,n.yg)("li",{parentName:"ul"},"Updated over 4 years ago"),(0,n.yg)("li",{parentName:"ul"},"Score: ",(0,n.yg)("b",null,"0")," (an ",(0,n.yg)("a",{parentName:"li",href:"/adaptors/library/#library-scores"},"indicator")," of how useful this job may be)")),(0,n.yg)("h2",{id:"key-functions"},"Key Functions"),(0,n.yg)("p",null,(0,n.yg)("inlineCode",{parentName:"p"},"alterState")),(0,n.yg)("h2",{id:"expression"},"Expression"),(0,n.yg)("pre",null,(0,n.yg)("code",{parentName:"pre",className:"language-js"},"sqlString(state => {\n  return \"SELECT position_id, position_name, salary, facility_id, facility_name, status \\\n    FROM position_updates WHERE status in ('NEW', 'CLOSED');\";\n});\n\nalterState(state => {\n  state.new_jobs = state.response.body;\n  console.log(state.new_jobs);\n  return state;\n})\n\nsqlString(state => {\n  return `UPDATE position_updates SET status='PROCESSED' WHERE status in ('NEW','CLOSED')`;\n});\n")))}c.isMDXComponent=!0},15680:(e,r,t)=>{t.d(r,{xA:()=>u,yg:()=>f});var a=t(96540);function n(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function o(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);r&&(a=a.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,a)}return t}function s(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?o(Object(t),!0).forEach((function(r){n(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function i(e,r){if(null==e)return{};var t,a,n=function(e,r){if(null==e)return{};var t,a,n={},o=Object.keys(e);for(a=0;a<o.length;a++)t=o[a],r.indexOf(t)>=0||(n[t]=e[t]);return n}(e,r);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)t=o[a],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(n[t]=e[t])}return n}var l=a.createContext({}),p=function(e){var r=a.useContext(l),t=r;return e&&(t="function"==typeof e?e(r):s(s({},r),e)),t},u=function(e){var r=p(e.components);return a.createElement(l.Provider,{value:r},e.children)},y="mdxType",c={inlineCode:"code",wrapper:function(e){var r=e.children;return a.createElement(a.Fragment,{},r)}},b=a.forwardRef((function(e,r){var t=e.components,n=e.mdxType,o=e.originalType,l=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),y=p(t),b=n,f=y["".concat(l,".").concat(b)]||y[b]||c[b]||o;return t?a.createElement(f,s(s({ref:r},u),{},{components:t})):a.createElement(f,s({ref:r},u))}));function f(e,r){var t=arguments,n=r&&r.mdxType;if("string"==typeof e||n){var o=t.length,s=new Array(o);s[0]=b;var i={};for(var l in r)hasOwnProperty.call(r,l)&&(i[l]=r[l]);i.originalType=e,i[y]="string"==typeof e?e:n,s[1]=i;for(var p=2;p<o;p++)s[p]=t[p];return a.createElement.apply(null,s)}return a.createElement.apply(null,t)}b.displayName="MDXCreateElement"}}]);