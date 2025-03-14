"use strict";(self.webpackChunk_openfn_docs=self.webpackChunk_openfn_docs||[]).push([[97823],{33634:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>d,frontMatter:()=>o,metadata:()=>i,toc:()=>p});var r=a(58168),n=(a(96540),a(15680));const o={title:"2. SMS Balance Update to Customer",sidebar_label:"2. SMS Balance Update to Customer",id:"2-SMS-Balance-Update-to-Customer-2018-12-14",keywords:["library","job","expression","telerivet","dataValue","field","fields","send"]},l=void 0,i={unversionedId:"library/jobs/auto/2-SMS-Balance-Update-to-Customer-2018-12-14",id:"library/jobs/auto/2-SMS-Balance-Update-to-Customer-2018-12-14",title:"2. SMS Balance Update to Customer",description:"This job was provided by an OpenFn.org user via the job library API.",source:"@site/adaptors/library/jobs/auto/2-SMS-Balance-Update-to-Customer-2018-12-14.md",sourceDirName:"library/jobs/auto",slug:"/library/jobs/auto/2-SMS-Balance-Update-to-Customer-2018-12-14",permalink:"/adaptors/library/jobs/auto/2-SMS-Balance-Update-to-Customer-2018-12-14",draft:!1,tags:[],version:"current",sidebarPosition:2,frontMatter:{title:"2. SMS Balance Update to Customer",sidebar_label:"2. SMS Balance Update to Customer",id:"2-SMS-Balance-Update-to-Customer-2018-12-14",keywords:["library","job","expression","telerivet","dataValue","field","fields","send"]},sidebar:"adaptors",previous:{title:"\ud83d\udcdc Send sms from Salesforce workflow action",permalink:"/adaptors/library/jobs/auto/send-sms-from-salesforce-workflow"},next:{title:"telerivet changelog",permalink:"/adaptors/packages/telerivet-changelog"}},s={},p=[{value:"Metadata",id:"metadata",level:2},{value:"Key Functions",id:"key-functions",level:2},{value:"Expression",id:"expression",level:2}],u={toc:p},c="wrapper";function d(e){let{components:t,...a}=e;return(0,n.yg)(c,(0,r.A)({},u,a,{components:t,mdxType:"MDXLayout"}),(0,n.yg)("em",null,"This job was provided by an OpenFn.org user via the job library API."),(0,n.yg)("h2",{id:"metadata"},"Metadata"),(0,n.yg)("ul",null,(0,n.yg)("li",{parentName:"ul"},"Name: 2. SMS Balance Update to Customer"),(0,n.yg)("li",{parentName:"ul"},"Adaptor: ",(0,n.yg)("a",{parentName:"li",href:"https://www.github.com/openfn/language-telerivet"},(0,n.yg)("inlineCode",{parentName:"a"},"@openfn/language-telerivet"))),(0,n.yg)("li",{parentName:"ul"},"Adaptor Version: ",(0,n.yg)("a",{parentName:"li",href:"https://www.github.com/openfn/language-telerivet"},(0,n.yg)("inlineCode",{parentName:"a"},"latest"))),(0,n.yg)("li",{parentName:"ul"},"Created over 6 years ago"),(0,n.yg)("li",{parentName:"ul"},"Updated almost 2 years ago"),(0,n.yg)("li",{parentName:"ul"},"Score: ",(0,n.yg)("b",null,"3")," (an ",(0,n.yg)("a",{parentName:"li",href:"/adaptors/library/#library-scores"},"indicator")," of how useful this job may be)")),(0,n.yg)("h2",{id:"key-functions"},"Key Functions"),(0,n.yg)("p",null,(0,n.yg)("inlineCode",{parentName:"p"},"dataValue"),", ",(0,n.yg)("inlineCode",{parentName:"p"},"field"),", ",(0,n.yg)("inlineCode",{parentName:"p"},"fields"),", ",(0,n.yg)("inlineCode",{parentName:"p"},"send")),(0,n.yg)("h2",{id:"expression"},"Expression"),(0,n.yg)("pre",null,(0,n.yg)("code",{parentName:"pre",className:"language-js"},"send(\n  fields(\n    field('to_number',\n      dataValue('Envelope.Body.notification.Phone_Number__c')\n    ),\n    field('message_type', 'sms'),\n    field('route_id', 'PN5d224d8136086997'),\n    field('content',\n      'Payment successful! Your updated contract balance is '\n      + state.data.Envelope.Body.notification.AmountDue__c\n    )\n  )\n);\n")))}d.isMDXComponent=!0},15680:(e,t,a)=>{a.d(t,{xA:()=>u,yg:()=>m});var r=a(96540);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},o=Object.keys(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var s=r.createContext({}),p=function(e){var t=r.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},u=function(e){var t=p(e.components);return r.createElement(s.Provider,{value:t},e.children)},c="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},y=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,o=e.originalType,s=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),c=p(a),y=n,m=c["".concat(s,".").concat(y)]||c[y]||d[y]||o;return a?r.createElement(m,l(l({ref:t},u),{},{components:a})):r.createElement(m,l({ref:t},u))}));function m(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=a.length,l=new Array(o);l[0]=y;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i[c]="string"==typeof e?e:n,l[1]=i;for(var p=2;p<o;p++)l[p]=a[p];return r.createElement.apply(null,l)}return r.createElement.apply(null,a)}y.displayName="MDXCreateElement"}}]);