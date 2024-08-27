"use strict";(self.webpackChunk_openfn_docs=self.webpackChunk_openfn_docs||[]).push([[4711],{33092:(e,a,t)=>{t.r(a),t.d(a,{assets:()=>s,contentTitle:()=>l,default:()=>c,frontMatter:()=>o,metadata:()=>i,toc:()=>d});var r=t(58168),n=(t(96540),t(15680));const o={title:"Add DHIS2 Data Value Sets",sidebar_label:"Add DHIS2 Data Value Sets",id:"Add-DHIS2-Data-Value-Sets-2016-03-28",keywords:["library","job","expression","dhis2","dataPath","dataValue","each","field","fields"]},l=void 0,i={unversionedId:"library/jobs/auto/Add-DHIS2-Data-Value-Sets-2016-03-28",id:"library/jobs/auto/Add-DHIS2-Data-Value-Sets-2016-03-28",title:"Add DHIS2 Data Value Sets",description:"This job was provided by an OpenFn.org user via the job library API.",source:"@site/adaptors/library/jobs/auto/Add-DHIS2-Data-Value-Sets-2016-03-28.md",sourceDirName:"library/jobs/auto",slug:"/library/jobs/auto/Add-DHIS2-Data-Value-Sets-2016-03-28",permalink:"/adaptors/library/jobs/auto/Add-DHIS2-Data-Value-Sets-2016-03-28",draft:!1,tags:[],version:"current",frontMatter:{title:"Add DHIS2 Data Value Sets",sidebar_label:"Add DHIS2 Data Value Sets",id:"Add-DHIS2-Data-Value-Sets-2016-03-28",keywords:["library","job","expression","dhis2","dataPath","dataValue","each","field","fields"]},sidebar:"adaptors",previous:{title:"0 - Get TEI data",permalink:"/adaptors/library/jobs/auto/0-Get-TEI-data-2021-06-02"},next:{title:"dhis2 changelog",permalink:"/adaptors/packages/dhis2-changelog"}},s={},d=[{value:"Metadata",id:"metadata",level:2},{value:"Key Functions",id:"key-functions",level:2},{value:"Expression",id:"expression",level:2}],u={toc:d},p="wrapper";function c(e){let{components:a,...t}=e;return(0,n.yg)(p,(0,r.A)({},u,t,{components:a,mdxType:"MDXLayout"}),(0,n.yg)("em",null,"This job was provided by an OpenFn.org user via the job library API."),(0,n.yg)("h2",{id:"metadata"},"Metadata"),(0,n.yg)("ul",null,(0,n.yg)("li",{parentName:"ul"},"Name: Add DHIS2 Data Value Sets"),(0,n.yg)("li",{parentName:"ul"},"Adaptor: ",(0,n.yg)("a",{parentName:"li",href:"https://www.github.com/openfn/language-dhis2"},(0,n.yg)("inlineCode",{parentName:"a"},"@openfn/language-dhis2"))),(0,n.yg)("li",{parentName:"ul"},"Adaptor Version: ",(0,n.yg)("a",{parentName:"li",href:"https://www.github.com/openfn/language-dhis2/releases/tag/v0.1.0"},(0,n.yg)("inlineCode",{parentName:"a"},"v0.1.0"))),(0,n.yg)("li",{parentName:"ul"},"Created over 8 years ago"),(0,n.yg)("li",{parentName:"ul"},"Updated almost 7 years ago"),(0,n.yg)("li",{parentName:"ul"},"Score: ",(0,n.yg)("b",null,"0")," (an ",(0,n.yg)("a",{parentName:"li",href:"/adaptors/library/#library-scores"},"indicator")," of how useful this job may be)")),(0,n.yg)("h2",{id:"key-functions"},"Key Functions"),(0,n.yg)("p",null,(0,n.yg)("inlineCode",{parentName:"p"},"dataPath"),", ",(0,n.yg)("inlineCode",{parentName:"p"},"dataValue"),", ",(0,n.yg)("inlineCode",{parentName:"p"},"each"),", ",(0,n.yg)("inlineCode",{parentName:"p"},"field"),", ",(0,n.yg)("inlineCode",{parentName:"p"},"fields")),(0,n.yg)("h2",{id:"expression"},"Expression"),(0,n.yg)("pre",null,(0,n.yg)("code",{parentName:"pre",className:"language-js"},'each(\n  dataPath("data[*]"),\n  // Use our system specific helper functions...\n  dataValueSet(\n    fields(\n      field("dataSet", "pBOMPrpg1QX"),\n      field("orgUnit", "DiszpKrYNg8"),\n      field("period", "201401"),\n      field("completeData", dataValue("today")),\n      field("dataValues", function(state) {\n        // Or write your own JS...        \n        console.log("Do anything you want in here.");\n        return [\n          dataElement("qrur9Dvnyt5", state.data.site_school_number),\n          dataElement("oZg33kd9taw", state.data.light_source),\n          dataElement("msodh3rEMJa", state.data.number_of_children)\n        ];\n      })\n    )\n  )\n);\n\n')))}c.isMDXComponent=!0},15680:(e,a,t)=>{t.d(a,{xA:()=>u,yg:()=>f});var r=t(96540);function n(e,a,t){return a in e?Object.defineProperty(e,a,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[a]=t,e}function o(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);a&&(r=r.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,r)}return t}function l(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?o(Object(t),!0).forEach((function(a){n(e,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))}))}return e}function i(e,a){if(null==e)return{};var t,r,n=function(e,a){if(null==e)return{};var t,r,n={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],a.indexOf(t)>=0||(n[t]=e[t]);return n}(e,a);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],a.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(n[t]=e[t])}return n}var s=r.createContext({}),d=function(e){var a=r.useContext(s),t=a;return e&&(t="function"==typeof e?e(a):l(l({},a),e)),t},u=function(e){var a=d(e.components);return r.createElement(s.Provider,{value:a},e.children)},p="mdxType",c={inlineCode:"code",wrapper:function(e){var a=e.children;return r.createElement(r.Fragment,{},a)}},y=r.forwardRef((function(e,a){var t=e.components,n=e.mdxType,o=e.originalType,s=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),p=d(t),y=n,f=p["".concat(s,".").concat(y)]||p[y]||c[y]||o;return t?r.createElement(f,l(l({ref:a},u),{},{components:t})):r.createElement(f,l({ref:a},u))}));function f(e,a){var t=arguments,n=a&&a.mdxType;if("string"==typeof e||n){var o=t.length,l=new Array(o);l[0]=y;var i={};for(var s in a)hasOwnProperty.call(a,s)&&(i[s]=a[s]);i.originalType=e,i[p]="string"==typeof e?e:n,l[1]=i;for(var d=2;d<o;d++)l[d]=t[d];return r.createElement.apply(null,l)}return r.createElement.apply(null,t)}y.displayName="MDXCreateElement"}}]);