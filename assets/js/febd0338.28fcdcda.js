"use strict";(self.webpackChunk_openfn_docs=self.webpackChunk_openfn_docs||[]).push([[25948],{88623:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>p,contentTitle:()=>i,default:()=>d,frontMatter:()=>o,metadata:()=>l,toc:()=>s});var r=t(58168),a=(t(96540),t(15680));const o={title:"Create Patient in OpenMRS",sidebar_label:"Create Patient in OpenMRS",id:"Create-Patient-in-OpenMRS-2019-10-24",keywords:["library","job","expression","openmrs","dataValue","field","fields"]},i=void 0,l={unversionedId:"library/jobs/auto/Create-Patient-in-OpenMRS-2019-10-24",id:"library/jobs/auto/Create-Patient-in-OpenMRS-2019-10-24",title:"Create Patient in OpenMRS",description:"This job was provided by an OpenFn.org user via the job library API.",source:"@site/adaptors/library/jobs/auto/Create-Patient-in-OpenMRS-2019-10-24.md",sourceDirName:"library/jobs/auto",slug:"/library/jobs/auto/Create-Patient-in-OpenMRS-2019-10-24",permalink:"/adaptors/library/jobs/auto/Create-Patient-in-OpenMRS-2019-10-24",draft:!1,tags:[],version:"current",frontMatter:{title:"Create Patient in OpenMRS",sidebar_label:"Create Patient in OpenMRS",id:"Create-Patient-in-OpenMRS-2019-10-24",keywords:["library","job","expression","openmrs","dataValue","field","fields"]},sidebar:"adaptors",previous:{title:"Create Person in OpenMRS",permalink:"/adaptors/library/jobs/auto/Create-Person-in-OpenMRS-2016-02-12"},next:{title:"openmrs changelog",permalink:"/adaptors/packages/openmrs-changelog"}},p={},s=[{value:"Metadata",id:"metadata",level:2},{value:"Key Functions",id:"key-functions",level:2},{value:"Expression",id:"expression",level:2}],u={toc:s},c="wrapper";function d(e){let{components:n,...t}=e;return(0,a.yg)(c,(0,r.A)({},u,t,{components:n,mdxType:"MDXLayout"}),(0,a.yg)("em",null,"This job was provided by an OpenFn.org user via the job library API."),(0,a.yg)("h2",{id:"metadata"},"Metadata"),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},"Name: Create Patient in OpenMRS"),(0,a.yg)("li",{parentName:"ul"},"Adaptor: ",(0,a.yg)("a",{parentName:"li",href:"https://www.github.com/openfn/language-openmrs"},(0,a.yg)("inlineCode",{parentName:"a"},"@openfn/language-openmrs"))),(0,a.yg)("li",{parentName:"ul"},"Adaptor Version: ",(0,a.yg)("a",{parentName:"li",href:"https://www.github.com/openfn/language-openmrs"},(0,a.yg)("inlineCode",{parentName:"a"},"latest"))),(0,a.yg)("li",{parentName:"ul"},"Created about 5 years ago"),(0,a.yg)("li",{parentName:"ul"},"Updated about 5 years ago"),(0,a.yg)("li",{parentName:"ul"},"Score: ",(0,a.yg)("b",null,"0")," (an ",(0,a.yg)("a",{parentName:"li",href:"/adaptors/library/#library-scores"},"indicator")," of how useful this job may be)")),(0,a.yg)("h2",{id:"key-functions"},"Key Functions"),(0,a.yg)("p",null,(0,a.yg)("inlineCode",{parentName:"p"},"dataValue"),", ",(0,a.yg)("inlineCode",{parentName:"p"},"field"),", ",(0,a.yg)("inlineCode",{parentName:"p"},"fields")),(0,a.yg)("h2",{id:"expression"},"Expression"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-js"},'//Job to create patient in OpenMRS \npatient(\n  fields(\n    field("gender", dataValue("form.gender")), //map values from CommCare forms\n    field("names", function(state) {\n      return [{\n        "patient_id": dataValue("form.case.@case_id")(state),\n        "creator": dataValue("form.user")(state)\n      }]\n    })\n  )\n)\n\n\n\n\n\n')))}d.isMDXComponent=!0},15680:(e,n,t)=>{t.d(n,{xA:()=>u,yg:()=>m});var r=t(96540);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var p=r.createContext({}),s=function(e){var n=r.useContext(p),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},u=function(e){var n=s(e.components);return r.createElement(p.Provider,{value:n},e.children)},c="mdxType",d={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},y=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,o=e.originalType,p=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),c=s(t),y=a,m=c["".concat(p,".").concat(y)]||c[y]||d[y]||o;return t?r.createElement(m,i(i({ref:n},u),{},{components:t})):r.createElement(m,i({ref:n},u))}));function m(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var o=t.length,i=new Array(o);i[0]=y;var l={};for(var p in n)hasOwnProperty.call(n,p)&&(l[p]=n[p]);l.originalType=e,l[c]="string"==typeof e?e:a,i[1]=l;for(var s=2;s<o;s++)i[s]=t[s];return r.createElement.apply(null,i)}return r.createElement.apply(null,t)}y.displayName="MDXCreateElement"}}]);