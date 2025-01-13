"use strict";(self.webpackChunk_openfn_docs=self.webpackChunk_openfn_docs||[]).push([[65250],{16113:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>i,contentTitle:()=>s,default:()=>c,frontMatter:()=>n,metadata:()=>l,toc:()=>p});var r=a(58168),o=(a(96540),a(15680));const n={title:"Kobo to sheets",sidebar_label:"Kobo to sheets",id:"Kobo-to-sheets-2023-10-13",keywords:["library","job","expression","googlesheets","appendValues","dataValue"]},s=void 0,l={unversionedId:"library/jobs/auto/Kobo-to-sheets-2023-10-13",id:"library/jobs/auto/Kobo-to-sheets-2023-10-13",title:"Kobo to sheets",description:"This job was provided by an OpenFn.org user via the job library API.",source:"@site/adaptors/library/jobs/auto/Kobo-to-sheets-2023-10-13.md",sourceDirName:"library/jobs/auto",slug:"/library/jobs/auto/Kobo-to-sheets-2023-10-13",permalink:"/adaptors/library/jobs/auto/Kobo-to-sheets-2023-10-13",draft:!1,tags:[],version:"current",frontMatter:{title:"Kobo to sheets",sidebar_label:"Kobo to sheets",id:"Kobo-to-sheets-2023-10-13",keywords:["library","job","expression","googlesheets","appendValues","dataValue"]},sidebar:"adaptors",previous:{title:"google oauth test",permalink:"/adaptors/library/jobs/auto/google-oauth-test-2024-12-20"},next:{title:"Register Patient",permalink:"/adaptors/library/jobs/auto/Register-Patient-2021-03-02"}},i={},p=[{value:"Metadata",id:"metadata",level:2},{value:"Key Functions",id:"key-functions",level:2},{value:"Expression",id:"expression",level:2}],u={toc:p},y="wrapper";function c(e){let{components:t,...a}=e;return(0,o.yg)(y,(0,r.A)({},u,a,{components:t,mdxType:"MDXLayout"}),(0,o.yg)("em",null,"This job was provided by an OpenFn.org user via the job library API."),(0,o.yg)("h2",{id:"metadata"},"Metadata"),(0,o.yg)("ul",null,(0,o.yg)("li",{parentName:"ul"},"Name: Kobo to sheets"),(0,o.yg)("li",{parentName:"ul"},"Adaptor: ",(0,o.yg)("a",{parentName:"li",href:"https://www.github.com/openfn/language-googlesheets"},(0,o.yg)("inlineCode",{parentName:"a"},"@openfn/language-googlesheets"))),(0,o.yg)("li",{parentName:"ul"},"Adaptor Version: ",(0,o.yg)("a",{parentName:"li",href:"https://www.github.com/openfn/language-googlesheets/releases/tag/v2.1.6"},(0,o.yg)("inlineCode",{parentName:"a"},"v2.1.6"))),(0,o.yg)("li",{parentName:"ul"},"Created over 1 year ago"),(0,o.yg)("li",{parentName:"ul"},"Updated about 1 year ago"),(0,o.yg)("li",{parentName:"ul"},"Score: ",(0,o.yg)("b",null,"3")," (an ",(0,o.yg)("a",{parentName:"li",href:"/adaptors/library/#library-scores"},"indicator")," of how useful this job may be)")),(0,o.yg)("h2",{id:"key-functions"},"Key Functions"),(0,o.yg)("p",null,(0,o.yg)("inlineCode",{parentName:"p"},"appendValues"),", ",(0,o.yg)("inlineCode",{parentName:"p"},"dataValue")),(0,o.yg)("h2",{id:"expression"},"Expression"),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre",className:"language-js"},"appendValues({\n  spreadsheetId: '13JNoH_nzG4x_mwvW83BMrpTWdKt4asBiZiLfQduB7B0',\n  range: 'Sheet1!A1:E1',\n  values: [\n    [\n      dataValue('National_ID'),\n      dataValue('First_Name_of_Patient'),\n      dataValue('Last_Name_of_Patient'),\n    ],\n  ],\n});\n")))}c.isMDXComponent=!0},15680:(e,t,a)=>{a.d(t,{xA:()=>u,yg:()=>b});var r=a(96540);function o(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function n(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function s(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?n(Object(a),!0).forEach((function(t){o(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):n(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,r,o=function(e,t){if(null==e)return{};var a,r,o={},n=Object.keys(e);for(r=0;r<n.length;r++)a=n[r],t.indexOf(a)>=0||(o[a]=e[a]);return o}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(r=0;r<n.length;r++)a=n[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(o[a]=e[a])}return o}var i=r.createContext({}),p=function(e){var t=r.useContext(i),a=t;return e&&(a="function"==typeof e?e(t):s(s({},t),e)),a},u=function(e){var t=p(e.components);return r.createElement(i.Provider,{value:t},e.children)},y="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var a=e.components,o=e.mdxType,n=e.originalType,i=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),y=p(a),d=o,b=y["".concat(i,".").concat(d)]||y[d]||c[d]||n;return a?r.createElement(b,s(s({ref:t},u),{},{components:a})):r.createElement(b,s({ref:t},u))}));function b(e,t){var a=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var n=a.length,s=new Array(n);s[0]=d;var l={};for(var i in t)hasOwnProperty.call(t,i)&&(l[i]=t[i]);l.originalType=e,l[y]="string"==typeof e?e:o,s[1]=l;for(var p=2;p<n;p++)s[p]=a[p];return r.createElement.apply(null,s)}return r.createElement.apply(null,a)}d.displayName="MDXCreateElement"}}]);