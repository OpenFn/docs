"use strict";(self.webpackChunk_openfn_docs=self.webpackChunk_openfn_docs||[]).push([[85744],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>b});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),u=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},d=function(e){var t=u(e.components);return a.createElement(s.Provider,{value:t},e.children)},p="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},c=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),p=u(n),c=r,b=p["".concat(s,".").concat(c)]||p[c]||m[c]||i;return n?a.createElement(b,o(o({ref:t},d),{},{components:n})):a.createElement(b,o({ref:t},d))}));function b(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=c;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[p]="string"==typeof e?e:r,o[1]=l;for(var u=2;u<i;u++)o[u]=n[u];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}c.displayName="MDXCreateElement"},8345:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>m,frontMatter:()=>i,metadata:()=>l,toc:()=>u});var a=n(87462),r=(n(67294),n(3905));const i={title:"01 send mailgun email",sidebar_label:"01 send mailgun email",id:"01-send-mailgun-email-2018-12-04",keywords:["library","job","expression","mailgun","dataValue","field","fields","send"]},o=void 0,l={unversionedId:"library/jobs/auto/01-send-mailgun-email-2018-12-04",id:"library/jobs/auto/01-send-mailgun-email-2018-12-04",title:"01 send mailgun email",description:"This job was provided by an OpenFn.org user via the job library API.",source:"@site/adaptors/library/jobs/auto/01-send-mailgun-email-2018-12-04.md",sourceDirName:"library/jobs/auto",slug:"/library/jobs/auto/01-send-mailgun-email-2018-12-04",permalink:"/adaptors/library/jobs/auto/01-send-mailgun-email-2018-12-04",draft:!1,tags:[],version:"current",sidebarPosition:1,frontMatter:{title:"01 send mailgun email",sidebar_label:"01 send mailgun email",id:"01-send-mailgun-email-2018-12-04",keywords:["library","job","expression","mailgun","dataValue","field","fields","send"]},sidebar:"adaptors",previous:{title:"\ud83d\udcdc send email",permalink:"/adaptors/library/jobs/auto/send-mail-in-mailgun"},next:{title:"mailgun changelog",permalink:"/adaptors/packages/mailgun-changelog"}},s={},u=[{value:"Metadata",id:"metadata",level:2},{value:"Key Functions",id:"key-functions",level:2},{value:"Expression",id:"expression",level:2}],d={toc:u},p="wrapper";function m(e){let{components:t,...n}=e;return(0,r.kt)(p,(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("em",null,"This job was provided by an OpenFn.org user via the job library API."),(0,r.kt)("h2",{id:"metadata"},"Metadata"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Name: 01 send mailgun email"),(0,r.kt)("li",{parentName:"ul"},"Adaptor: ",(0,r.kt)("a",{parentName:"li",href:"https://www.github.com/openfn/language-mailgun"},(0,r.kt)("inlineCode",{parentName:"a"},"@openfn/language-mailgun"))),(0,r.kt)("li",{parentName:"ul"},"Adaptor Version: ",(0,r.kt)("a",{parentName:"li",href:"https://www.github.com/openfn/language-mailgun"},(0,r.kt)("inlineCode",{parentName:"a"},"latest"))),(0,r.kt)("li",{parentName:"ul"},"Created over 4 years ago"),(0,r.kt)("li",{parentName:"ul"},"Updated over 4 years ago"),(0,r.kt)("li",{parentName:"ul"},"Score: ",(0,r.kt)("b",null,"0")," (an ",(0,r.kt)("a",{parentName:"li",href:"/adaptors/library/#library-scores"},"indicator")," of how useful this job may be)")),(0,r.kt)("h2",{id:"key-functions"},"Key Functions"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"dataValue"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"field"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"fields"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"send")),(0,r.kt)("h2",{id:"expression"},"Expression"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"send(\n  fields(\n    field('from', 'aleksa@openfn.org'),\n    field('to', 'aleksa@openfn.org, aleksa@verasolutions.org'),\n    field('subject', 'Kobo: New Form Submitted'),\n      //You can write your own custom, anonymous functions to do whatever you desire - see function(state)\n    field('text', function(state) {\n      const msgText = \"A form was submitted by \"+ dataValue(\"_submitted_by\")(state) + \". Please login to review!\"\n      return msgText\n       //result will be an email with body text \"A form was submitted by [Kobo Submitted By User]. Please login to review!\" \n\n    })\n  ) \n )\n")))}m.isMDXComponent=!0}}]);