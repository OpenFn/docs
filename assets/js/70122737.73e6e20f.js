(window.webpackJsonp=window.webpackJsonp||[]).push([[95],{166:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return o})),n.d(t,"metadata",(function(){return l})),n.d(t,"toc",(function(){return c})),n.d(t,"default",(function(){return u}));var r=n(3),a=n(8),i=(n(0),n(276)),o={title:"COVID-19 TEI (dhis2) with dhis2",sidebar_label:"COVID-19 TEI (dhis2)",id:"COVID-19 TEI dhis2-2021-03-22",keywords:["library","job","expression","dhis2","createTEI","dataValue"]},l={unversionedId:"jobs/auto/COVID-19 TEI dhis2-2021-03-22",id:"jobs/auto/COVID-19 TEI dhis2-2021-03-22",isDocsHomePage:!1,title:"COVID-19 TEI (dhis2) with dhis2",description:"This job was provided by an OpenFn.org user via the job library API.",source:"@site/library/jobs/auto/COVID-19 TEI dhis2-2021-03-22.md",sourceDirName:"jobs/auto",slug:"/jobs/auto/COVID-19 TEI dhis2-2021-03-22",permalink:"/library/jobs/auto/COVID-19 TEI dhis2-2021-03-22",version:"current",sidebar_label:"COVID-19 TEI (dhis2)",frontMatter:{title:"COVID-19 TEI (dhis2) with dhis2",sidebar_label:"COVID-19 TEI (dhis2)",id:"COVID-19 TEI dhis2-2021-03-22",keywords:["library","job","expression","dhis2","createTEI","dataValue"]},sidebar:"library",previous:{title:"Pay CHW with beyonic",permalink:"/library/jobs/auto/Pay CHW-2021-04-23"},next:{title:"Add data values with dhis2",permalink:"/library/jobs/auto/DHIS2-DataValues-API"}},c=[{value:"Metadata",id:"metadata",children:[]},{value:"Key Functions",id:"key-functions",children:[]},{value:"Expression",id:"expression",children:[]}],s={toc:c};function u(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(i.b)("wrapper",Object(r.a)({},s,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)("em",null,"This job was provided by an OpenFn.org user via the job library API."),Object(i.b)("h2",{id:"metadata"},"Metadata"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"Name: COVID-19 TEI (dhis2)"),Object(i.b)("li",{parentName:"ul"},"Adaptor: ",Object(i.b)("inlineCode",{parentName:"li"},"@openfn/language-dhis2")),Object(i.b)("li",{parentName:"ul"},"Adaptor Version: ",Object(i.b)("inlineCode",{parentName:"li"},"v2.0.4")),Object(i.b)("li",{parentName:"ul"},"Created about 2 months ago"),Object(i.b)("li",{parentName:"ul"},"Updated 10 days ago")),Object(i.b)("h2",{id:"key-functions"},"Key Functions"),Object(i.b)("p",null,Object(i.b)("inlineCode",{parentName:"p"},"createTEI"),", ",Object(i.b)("inlineCode",{parentName:"p"},"dataValue")),Object(i.b)("h2",{id:"expression"},"Expression"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-js"},"// See list of cases here: https://covid19.dhis2.org/demo/dhis-web-tracker-capture/index.html#/?program=DM9n1bUw8W8\ncreateTEI({\n  orgUnit: 'GD7TowwI46c',\n  trackedEntityType: 'MCPQUTHX1Ze',\n  attributes: [\n    {\n      attribute: 'he05i8FUwu3', // case id\n      value: dataValue('body._id'),\n    },\n    {\n      attribute: 'sB1IHYu2xQT', // first name\n      value: dataValue('body.Patient_name'),\n    },\n    {\n      attribute: 'ENRjVGxVL6l', // last name\n      value: dataValue('body.Last_Name_of_Patient'),\n    },\n    {\n      attribute: 'Rv8WM2mTuS5', // age\n      value: dataValue('body.Age'),\n    },\n  ],\n  enrollments: [\n    {\n      orgUnit: 'GD7TowwI46c',\n      program: 'DM9n1bUw8W8',\n      programState: 'sAV9jAajr8x',\n      enrollmentDate: dataValue('body.Date'),\n      incidentDate: dataValue('body.Covid_19_suspected_criteria/Speciman_Collection_date')\n    },\n  ],\n});\n")))}u.isMDXComponent=!0},276:function(e,t,n){"use strict";n.d(t,"a",(function(){return d})),n.d(t,"b",(function(){return m}));var r=n(0),a=n.n(r);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=a.a.createContext({}),u=function(e){var t=a.a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},d=function(e){var t=u(e.components);return a.a.createElement(s.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},p=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,o=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),d=u(n),p=r,m=d["".concat(o,".").concat(p)]||d[p]||b[p]||i;return n?a.a.createElement(m,l(l({ref:t},s),{},{components:n})):a.a.createElement(m,l({ref:t},s))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=p;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:r,o[1]=l;for(var s=2;s<i;s++)o[s]=n[s];return a.a.createElement.apply(null,o)}return a.a.createElement.apply(null,n)}p.displayName="MDXCreateElement"}}]);