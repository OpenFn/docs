"use strict";(self.webpackChunk_openfn_docs=self.webpackChunk_openfn_docs||[]).push([[31020],{3905:(e,n,t)=>{t.d(n,{Zo:()=>p,kt:()=>c});var a=t(67294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function o(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var s=a.createContext({}),u=function(e){var n=a.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},p=function(e){var n=u(e.components);return a.createElement(s.Provider,{value:n},e.children)},m={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},d=a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),d=u(t),c=r,f=d["".concat(s,".").concat(c)]||d[c]||m[c]||i;return t?a.createElement(f,l(l({ref:n},p),{},{components:t})):a.createElement(f,l({ref:n},p))}));function c(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var i=t.length,l=new Array(i);l[0]=d;var o={};for(var s in n)hasOwnProperty.call(n,s)&&(o[s]=n[s]);o.originalType=e,o.mdxType="string"==typeof e?e:r,l[1]=o;for(var u=2;u<i;u++)l[u]=t[u];return a.createElement.apply(null,l)}return a.createElement.apply(null,t)}d.displayName="MDXCreateElement"},19347:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>s,contentTitle:()=>l,default:()=>m,frontMatter:()=>i,metadata:()=>o,toc:()=>u});var a=t(87462),r=(t(67294),t(3905));const i={title:"send email",sidebar_label:"\ud83d\udcdc send email",id:"send-mail-in-mailgun",keywords:["library","job","expression","mailgun","dataValue","field","fields","send"]},l=void 0,o={unversionedId:"jobs/auto/send-mail-in-mailgun",id:"jobs/auto/send-mail-in-mailgun",title:"send email",description:"\ud83d\udcdc This job is an official example from OpenFn.",source:"@site/library/jobs/auto/send-mail-in-mailgun.md",sourceDirName:"jobs/auto",slug:"/jobs/auto/send-mail-in-mailgun",permalink:"/library/jobs/auto/send-mail-in-mailgun",draft:!1,tags:[],version:"current",frontMatter:{title:"send email",sidebar_label:"\ud83d\udcdc send email",id:"send-mail-in-mailgun",keywords:["library","job","expression","mailgun","dataValue","field","fields","send"]},sidebar:"library",previous:{title:"01 send mailgun email",permalink:"/library/jobs/auto/01-send-mailgun-email-2018-12-04"},next:{title:"CommCare to Azure Sql",permalink:"/library/jobs/auto/CommCare-to-Azure-Sql-2020-01-27"}},s={},u=[{value:"Metadata",id:"metadata",level:2},{value:"Key Functions",id:"key-functions",level:2},{value:"Expression",id:"expression",level:2}],p={toc:u};function m(e){let{components:n,...t}=e;return(0,r.kt)("wrapper",(0,a.Z)({},p,t,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"\ud83d\udcdc ",(0,r.kt)("em",null,"This job is an official example from OpenFn.")),(0,r.kt)("h2",{id:"metadata"},"Metadata"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Name: send email"),(0,r.kt)("li",{parentName:"ul"},"Adaptor: ",(0,r.kt)("a",{parentName:"li",href:"https://www.github.com/openfn/language-mailgun"},(0,r.kt)("inlineCode",{parentName:"a"},"@openfn/language-mailgun"))),(0,r.kt)("li",{parentName:"ul"},"Adaptor Version: ",(0,r.kt)("a",{parentName:"li",href:"https://www.github.com/openfn/language-mailgun"},(0,r.kt)("inlineCode",{parentName:"a"},"latest"))),(0,r.kt)("li",{parentName:"ul"},"Created date unknown"),(0,r.kt)("li",{parentName:"ul"},"Updated date unknown"),(0,r.kt)("li",{parentName:"ul"},"Score: ",(0,r.kt)("b",null,"100")," (an ",(0,r.kt)("a",{parentName:"li",href:"/library/#library-scores"},"indicator")," of how useful this job may be)")),(0,r.kt)("h2",{id:"key-functions"},"Key Functions"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"dataValue"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"field"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"fields"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"send")),(0,r.kt)("h2",{id:"expression"},"Expression"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"send(\n  fields(\n    field('from', 'you@domain.com'),\n    field('to', dataValue('form.submission.respondantEmail')),\n    field('subject', 'Thanks for completing our survey.'),\n    field('text', 'Your message goes here.')\n  )\n);\n\n")))}m.isMDXComponent=!0}}]);