"use strict";(self.webpackChunk_openfn_docs=self.webpackChunk_openfn_docs||[]).push([[28505],{1364:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>l,contentTitle:()=>i,default:()=>u,frontMatter:()=>o,metadata:()=>s,toc:()=>p});var a=t(58168),n=(t(96540),t(15680));const o={title:"Get cases from Primero",sidebar_label:"Get cases from Primero",id:"Get-cases-from-Primero-2021-09-23",keywords:["library","job","expression","primero","getCases","JSON"]},i=void 0,s={unversionedId:"library/jobs/auto/Get-cases-from-Primero-2021-09-23",id:"library/jobs/auto/Get-cases-from-Primero-2021-09-23",title:"Get cases from Primero",description:"This job was provided by an OpenFn.org user via the job library API.",source:"@site/adaptors/library/jobs/auto/Get-cases-from-Primero-2021-09-23.md",sourceDirName:"library/jobs/auto",slug:"/library/jobs/auto/Get-cases-from-Primero-2021-09-23",permalink:"/adaptors/library/jobs/auto/Get-cases-from-Primero-2021-09-23",draft:!1,tags:[],version:"current",frontMatter:{title:"Get cases from Primero",sidebar_label:"Get cases from Primero",id:"Get-cases-from-Primero-2021-09-23",keywords:["library","job","expression","primero","getCases","JSON"]},sidebar:"adaptors",previous:{title:"Config for primero",permalink:"/adaptors/packages/primero-configuration-schema"},next:{title:"primero changelog",permalink:"/adaptors/packages/primero-changelog"}},l={},p=[{value:"Metadata",id:"metadata",level:2},{value:"Key Functions",id:"key-functions",level:2},{value:"Expression",id:"expression",level:2}],c={toc:p},m="wrapper";function u(e){let{components:r,...t}=e;return(0,n.yg)(m,(0,a.A)({},c,t,{components:r,mdxType:"MDXLayout"}),(0,n.yg)("em",null,"This job was provided by an OpenFn.org user via the job library API."),(0,n.yg)("h2",{id:"metadata"},"Metadata"),(0,n.yg)("ul",null,(0,n.yg)("li",{parentName:"ul"},"Name: Get cases from Primero"),(0,n.yg)("li",{parentName:"ul"},"Adaptor: ",(0,n.yg)("a",{parentName:"li",href:"https://www.github.com/openfn/language-primero"},(0,n.yg)("inlineCode",{parentName:"a"},"@openfn/language-primero"))),(0,n.yg)("li",{parentName:"ul"},"Adaptor Version: ",(0,n.yg)("a",{parentName:"li",href:"https://www.github.com/openfn/language-primero/releases/tag/v2.2.8"},(0,n.yg)("inlineCode",{parentName:"a"},"v2.2.8"))),(0,n.yg)("li",{parentName:"ul"},"Created over 3 years ago"),(0,n.yg)("li",{parentName:"ul"},"Updated over 3 years ago"),(0,n.yg)("li",{parentName:"ul"},"Score: ",(0,n.yg)("b",null,"0")," (an ",(0,n.yg)("a",{parentName:"li",href:"/adaptors/library/#library-scores"},"indicator")," of how useful this job may be)")),(0,n.yg)("h2",{id:"key-functions"},"Key Functions"),(0,n.yg)("p",null,(0,n.yg)("inlineCode",{parentName:"p"},"getCases"),", ",(0,n.yg)("inlineCode",{parentName:"p"},"JSON")),(0,n.yg)("h2",{id:"expression"},"Expression"),(0,n.yg)("pre",null,(0,n.yg)("code",{parentName:"pre",className:"language-js"},"getCases({\n   remote: true,\n   case_id: \"234bbac3-7278-430a-98b5-1abc460671ec\" //extract 1 case using case id\n   //query: //...or use 'query' to filter by other criteria to get many cases\n },  state => {\n    console.log(`Primero cases extracted: ${JSON.stringify(state.data)}`); //logging Primero response\n    return { ...state, data: {}, references: [] }\n  })\n")))}u.isMDXComponent=!0},15680:(e,r,t)=>{t.d(r,{xA:()=>c,yg:()=>g});var a=t(96540);function n(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function o(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);r&&(a=a.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,a)}return t}function i(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?o(Object(t),!0).forEach((function(r){n(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function s(e,r){if(null==e)return{};var t,a,n=function(e,r){if(null==e)return{};var t,a,n={},o=Object.keys(e);for(a=0;a<o.length;a++)t=o[a],r.indexOf(t)>=0||(n[t]=e[t]);return n}(e,r);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)t=o[a],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(n[t]=e[t])}return n}var l=a.createContext({}),p=function(e){var r=a.useContext(l),t=r;return e&&(t="function"==typeof e?e(r):i(i({},r),e)),t},c=function(e){var r=p(e.components);return a.createElement(l.Provider,{value:r},e.children)},m="mdxType",u={inlineCode:"code",wrapper:function(e){var r=e.children;return a.createElement(a.Fragment,{},r)}},y=a.forwardRef((function(e,r){var t=e.components,n=e.mdxType,o=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),m=p(t),y=n,g=m["".concat(l,".").concat(y)]||m[y]||u[y]||o;return t?a.createElement(g,i(i({ref:r},c),{},{components:t})):a.createElement(g,i({ref:r},c))}));function g(e,r){var t=arguments,n=r&&r.mdxType;if("string"==typeof e||n){var o=t.length,i=new Array(o);i[0]=y;var s={};for(var l in r)hasOwnProperty.call(r,l)&&(s[l]=r[l]);s.originalType=e,s[m]="string"==typeof e?e:n,i[1]=s;for(var p=2;p<o;p++)i[p]=t[p];return a.createElement.apply(null,i)}return a.createElement.apply(null,t)}y.displayName="MDXCreateElement"}}]);