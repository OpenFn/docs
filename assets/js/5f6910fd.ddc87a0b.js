"use strict";(self.webpackChunk_openfn_docs=self.webpackChunk_openfn_docs||[]).push([[13388],{86717:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>c,frontMatter:()=>o,metadata:()=>l,toc:()=>d});var a=n(58168),r=(n(96540),n(15680));const o={title:"Add events",sidebar_label:"\ud83d\udcdc Add events",id:"DHIS2-Events-API",keywords:["library","job","expression","dhis2","dataValue","field","fields"]},i=void 0,l={unversionedId:"library/jobs/auto/DHIS2-Events-API",id:"library/jobs/auto/DHIS2-Events-API",title:"Add events",description:"\ud83d\udcdc This job is an official example from OpenFn.",source:"@site/adaptors/library/jobs/auto/DHIS2-Events-API.md",sourceDirName:"library/jobs/auto",slug:"/library/jobs/auto/DHIS2-Events-API",permalink:"/adaptors/library/jobs/auto/DHIS2-Events-API",draft:!1,tags:[],version:"current",frontMatter:{title:"Add events",sidebar_label:"\ud83d\udcdc Add events",id:"DHIS2-Events-API",keywords:["library","job","expression","dhis2","dataValue","field","fields"]},sidebar:"adaptors",previous:{title:"\ud83d\udcdc Add data values",permalink:"/adaptors/library/jobs/auto/DHIS2-DataValues-API"},next:{title:"Load to DHIS2",permalink:"/adaptors/library/jobs/auto/Load-to-DHIS2-2023-07-17"}},s={},d=[{value:"Metadata",id:"metadata",level:2},{value:"Key Functions",id:"key-functions",level:2},{value:"Expression",id:"expression",level:2}],p={toc:d},u="wrapper";function c(e){let{components:t,...n}=e;return(0,r.yg)(u,(0,a.A)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,r.yg)("p",null,"\ud83d\udcdc ",(0,r.yg)("em",null,"This job is an official example from OpenFn.")),(0,r.yg)("h2",{id:"metadata"},"Metadata"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},"Name: Add events"),(0,r.yg)("li",{parentName:"ul"},"Adaptor: ",(0,r.yg)("a",{parentName:"li",href:"https://www.github.com/openfn/language-dhis2"},(0,r.yg)("inlineCode",{parentName:"a"},"@openfn/language-dhis2"))),(0,r.yg)("li",{parentName:"ul"},"Adaptor Version: ",(0,r.yg)("a",{parentName:"li",href:"https://www.github.com/openfn/language-dhis2"},(0,r.yg)("inlineCode",{parentName:"a"},"latest"))),(0,r.yg)("li",{parentName:"ul"},"Created date unknown"),(0,r.yg)("li",{parentName:"ul"},"Updated date unknown"),(0,r.yg)("li",{parentName:"ul"},"Score: ",(0,r.yg)("b",null,"100")," (an ",(0,r.yg)("a",{parentName:"li",href:"/adaptors/library/#library-scores"},"indicator")," of how useful this job may be)")),(0,r.yg)("h2",{id:"key-functions"},"Key Functions"),(0,r.yg)("p",null,(0,r.yg)("inlineCode",{parentName:"p"},"dataValue"),", ",(0,r.yg)("inlineCode",{parentName:"p"},"field"),", ",(0,r.yg)("inlineCode",{parentName:"p"},"fields")),(0,r.yg)("h2",{id:"expression"},"Expression"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-js"},"// ----\n// Create new events in DHIS2 using a generic JSON message, submitted by\n// Taylor Downs @ OpenFn for demonstration porpoises.\n// ---\n\nevent(\n  fields(\n    field('program', 'eBAyeGv0exc'),\n    field('orgUnit', 'DiszpKrYNg8'),\n    field('eventDate', dataValue('meta.date')),\n    field('status', 'COMPLETED'),\n    field('storedBy', 'admin'),\n    field('coordinate', {\n      latitude: '59.8',\n      longitude: '10.9',\n    }),\n    field('dataValues', function (state) {\n      return [\n        dataElement('qrur9Dvnyt5', dataValue('form.prop_a')(state)),\n        dataElement('oZg33kd9taw', dataValue('form.prop_b')(state)),\n        dataElement('msodh3rEMJa', dataValue('form.prop_c')(state)),\n      ];\n    })\n  )\n);\n\n")))}c.isMDXComponent=!0},15680:(e,t,n)=>{n.d(t,{xA:()=>p,yg:()=>f});var a=n(96540);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),d=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=d(e.components);return a.createElement(s.Provider,{value:t},e.children)},u="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},y=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),u=d(n),y=r,f=u["".concat(s,".").concat(y)]||u[y]||c[y]||o;return n?a.createElement(f,i(i({ref:t},p),{},{components:n})):a.createElement(f,i({ref:t},p))}));function f(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=y;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[u]="string"==typeof e?e:r,i[1]=l;for(var d=2;d<o;d++)i[d]=n[d];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}y.displayName="MDXCreateElement"}}]);