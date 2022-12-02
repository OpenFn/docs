"use strict";(self.webpackChunk_openfn_docs=self.webpackChunk_openfn_docs||[]).push([[95997],{3905:(e,r,n)=>{n.d(r,{Zo:()=>u,kt:()=>m});var t=n(67294);function a(e,r,n){return r in e?Object.defineProperty(e,r,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[r]=n,e}function o(e,r){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);r&&(t=t.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),n.push.apply(n,t)}return n}function i(e){for(var r=1;r<arguments.length;r++){var n=null!=arguments[r]?arguments[r]:{};r%2?o(Object(n),!0).forEach((function(r){a(e,r,n[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))}))}return e}function l(e,r){if(null==e)return{};var n,t,a=function(e,r){if(null==e)return{};var n,t,a={},o=Object.keys(e);for(t=0;t<o.length;t++)n=o[t],r.indexOf(n)>=0||(a[n]=e[n]);return a}(e,r);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(t=0;t<o.length;t++)n=o[t],r.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=t.createContext({}),p=function(e){var r=t.useContext(s),n=r;return e&&(n="function"==typeof e?e(r):i(i({},r),e)),n},u=function(e){var r=p(e.components);return t.createElement(s.Provider,{value:r},e.children)},c="mdxType",d={inlineCode:"code",wrapper:function(e){var r=e.children;return t.createElement(t.Fragment,{},r)}},f=t.forwardRef((function(e,r){var n=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),c=p(n),f=a,m=c["".concat(s,".").concat(f)]||c[f]||d[f]||o;return n?t.createElement(m,i(i({ref:r},u),{},{components:n})):t.createElement(m,i({ref:r},u))}));function m(e,r){var n=arguments,a=r&&r.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=f;var l={};for(var s in r)hasOwnProperty.call(r,s)&&(l[s]=r[s]);l.originalType=e,l[c]="string"==typeof e?e:a,i[1]=l;for(var p=2;p<o;p++)i[p]=n[p];return t.createElement.apply(null,i)}return t.createElement.apply(null,n)}f.displayName="MDXCreateElement"},33841:(e,r,n)=>{n.r(r),n.d(r,{assets:()=>s,contentTitle:()=>i,default:()=>c,frontMatter:()=>o,metadata:()=>l,toc:()=>p});var t=n(87462),a=(n(67294),n(3905));const o={title:"Create Person in OpenMRS",sidebar_label:"Create Person in OpenMRS",id:"Create-Person-in-OpenMRS-2016-02-12",keywords:["library","job","expression","openmrs","dataValue","field","fields"]},i=void 0,l={unversionedId:"library/jobs/auto/Create-Person-in-OpenMRS-2016-02-12",id:"library/jobs/auto/Create-Person-in-OpenMRS-2016-02-12",title:"Create Person in OpenMRS",description:"This job was provided by an OpenFn.org user via the job library API.",source:"@site/adaptors/library/jobs/auto/Create-Person-in-OpenMRS-2016-02-12.md",sourceDirName:"library/jobs/auto",slug:"/library/jobs/auto/Create-Person-in-OpenMRS-2016-02-12",permalink:"/fr/adaptors/library/jobs/auto/Create-Person-in-OpenMRS-2016-02-12",draft:!1,tags:[],version:"current",frontMatter:{title:"Create Person in OpenMRS",sidebar_label:"Create Person in OpenMRS",id:"Create-Person-in-OpenMRS-2016-02-12",keywords:["library","job","expression","openmrs","dataValue","field","fields"]},sidebar:"adaptors",previous:{title:"openmrs@0.10.0",permalink:"/fr/adaptors/packages/openmrs-docs"},next:{title:"Create Patient in OpenMRS",permalink:"/fr/adaptors/library/jobs/auto/Create-Patient-in-OpenMRS-2019-10-24"}},s={},p=[{value:"Metadata",id:"metadata",level:2},{value:"Key Functions",id:"key-functions",level:2},{value:"Expression",id:"expression",level:2}],u={toc:p};function c(e){let{components:r,...n}=e;return(0,a.kt)("wrapper",(0,t.Z)({},u,n,{components:r,mdxType:"MDXLayout"}),(0,a.kt)("em",null,"This job was provided by an OpenFn.org user via the job library API."),(0,a.kt)("h2",{id:"metadata"},"Metadata"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Name: Create Person in OpenMRS"),(0,a.kt)("li",{parentName:"ul"},"Adaptor: ",(0,a.kt)("a",{parentName:"li",href:"https://www.github.com/openfn/language-openmrs"},(0,a.kt)("inlineCode",{parentName:"a"},"@openfn/language-openmrs"))),(0,a.kt)("li",{parentName:"ul"},"Adaptor Version: ",(0,a.kt)("a",{parentName:"li",href:"https://www.github.com/openfn/language-openmrs/releases/tag/v0.0.2"},(0,a.kt)("inlineCode",{parentName:"a"},"v0.0.2"))),(0,a.kt)("li",{parentName:"ul"},"Created almost 7 years ago"),(0,a.kt)("li",{parentName:"ul"},"Updated over 1 year ago"),(0,a.kt)("li",{parentName:"ul"},"Score: ",(0,a.kt)("b",null,"0")," (an ",(0,a.kt)("a",{parentName:"li",href:"/adaptors/library/#library-scores"},"indicator")," of how useful this job may be)")),(0,a.kt)("h2",{id:"key-functions"},"Key Functions"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"dataValue"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"field"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"fields")),(0,a.kt)("h2",{id:"expression"},"Expression"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},'person(\n  fields(\n    field("gender", "M"),\n    field("names", function(state) {\n      return [{\n        "givenName": dataValue("form.first_name")(state),\n        "familyName": "Sports_Music_Field_Day"\n      }]\n    })\n  )\n)\n')))}c.isMDXComponent=!0}}]);