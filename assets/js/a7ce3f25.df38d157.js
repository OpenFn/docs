"use strict";(self.webpackChunk_openfn_docs=self.webpackChunk_openfn_docs||[]).push([[35491],{35235:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>y,frontMatter:()=>o,metadata:()=>l,toc:()=>c});var r=a(58168),n=(a(96540),a(15680));const o={title:"Create contact",sidebar_label:"Create contact",id:"Create-contact-2021-03-01",keywords:["library","job","expression","salesforce","create","dataValue"]},i=void 0,l={unversionedId:"library/jobs/auto/Create-contact-2021-03-01",id:"library/jobs/auto/Create-contact-2021-03-01",title:"Create contact",description:"This job was provided by an OpenFn.org user via the job library API.",source:"@site/adaptors/library/jobs/auto/Create-contact-2021-03-01.md",sourceDirName:"library/jobs/auto",slug:"/library/jobs/auto/Create-contact-2021-03-01",permalink:"/adaptors/library/jobs/auto/Create-contact-2021-03-01",draft:!1,tags:[],version:"current",frontMatter:{title:"Create contact",sidebar_label:"Create contact",id:"Create-contact-2021-03-01",keywords:["library","job","expression","salesforce","create","dataValue"]},sidebar:"adaptors",previous:{title:"Q3 2022 Upsert Person Visit",permalink:"/adaptors/library/jobs/auto/Q3-2022-Upsert-Person-Visit-2022-06-28"},next:{title:"HIV Testing Event Statistics",permalink:"/adaptors/library/jobs/auto/HIV-Testing-Event-Statistics-2021-05-03"}},s={},c=[{value:"Metadata",id:"metadata",level:2},{value:"Key Functions",id:"key-functions",level:2},{value:"Expression",id:"expression",level:2}],p={toc:c},u="wrapper";function y(e){let{components:t,...a}=e;return(0,n.yg)(u,(0,r.A)({},p,a,{components:t,mdxType:"MDXLayout"}),(0,n.yg)("em",null,"This job was provided by an OpenFn.org user via the job library API."),(0,n.yg)("h2",{id:"metadata"},"Metadata"),(0,n.yg)("ul",null,(0,n.yg)("li",{parentName:"ul"},"Name: Create contact"),(0,n.yg)("li",{parentName:"ul"},"Adaptor: ",(0,n.yg)("a",{parentName:"li",href:"https://www.github.com/openfn/language-salesforce"},(0,n.yg)("inlineCode",{parentName:"a"},"@openfn/language-salesforce"))),(0,n.yg)("li",{parentName:"ul"},"Adaptor Version: ",(0,n.yg)("a",{parentName:"li",href:"https://www.github.com/openfn/language-salesforce"},(0,n.yg)("inlineCode",{parentName:"a"},"latest"))),(0,n.yg)("li",{parentName:"ul"},"Created over 3 years ago"),(0,n.yg)("li",{parentName:"ul"},"Updated 8 months ago"),(0,n.yg)("li",{parentName:"ul"},"Score: ",(0,n.yg)("b",null,"18")," (an ",(0,n.yg)("a",{parentName:"li",href:"/adaptors/library/#library-scores"},"indicator")," of how useful this job may be)")),(0,n.yg)("h2",{id:"key-functions"},"Key Functions"),(0,n.yg)("p",null,(0,n.yg)("inlineCode",{parentName:"p"},"create"),", ",(0,n.yg)("inlineCode",{parentName:"p"},"dataValue")),(0,n.yg)("h2",{id:"expression"},"Expression"),(0,n.yg)("pre",null,(0,n.yg)("code",{parentName:"pre",className:"language-js"},'create(\'Contact\', {\n  FirstName: dataValue("body.Patient_name"),\n  LastName: dataValue(\'body.Last_Name_of_Patient\'),\n  Age__c: dataValue("body.Age"),\n  Sex__c: dataValue(\'body.Sex\'),    \n  Case_ID__c: dataValue("body.National_ID"),    \n  Comments__c: dataValue("body.Comments")\n});\n\n')))}y.isMDXComponent=!0},15680:(e,t,a)=>{a.d(t,{xA:()=>p,yg:()=>b});var r=a(96540);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},o=Object.keys(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var s=r.createContext({}),c=function(e){var t=r.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},p=function(e){var t=c(e.components);return r.createElement(s.Provider,{value:t},e.children)},u="mdxType",y={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,o=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),u=c(a),d=n,b=u["".concat(s,".").concat(d)]||u[d]||y[d]||o;return a?r.createElement(b,i(i({ref:t},p),{},{components:a})):r.createElement(b,i({ref:t},p))}));function b(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=a.length,i=new Array(o);i[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[u]="string"==typeof e?e:n,i[1]=l;for(var c=2;c<o;c++)i[c]=a[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,a)}d.displayName="MDXCreateElement"}}]);