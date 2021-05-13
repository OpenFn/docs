(window.webpackJsonp=window.webpackJsonp||[]).push([[35],{102:function(e,a,t){"use strict";t.r(a),t.d(a,"frontMatter",(function(){return o})),t.d(a,"metadata",(function(){return l})),t.d(a,"toc",(function(){return c})),t.d(a,"default",(function(){return d}));var n=t(3),r=t(8),i=(t(0),t(336)),o={title:"Case CHW Update in SF (Sandbox) with salesforce",sidebar_label:"Case CHW Update in SF (Sandbox)",id:"Case CHW Update in SF Sandbox-2017-02-17",keywords:["library","job","expression","salesforce","alterState","create","dataValue","field","fields","upsert"]},l={unversionedId:"jobs/auto/Case CHW Update in SF Sandbox-2017-02-17",id:"jobs/auto/Case CHW Update in SF Sandbox-2017-02-17",isDocsHomePage:!1,title:"Case CHW Update in SF (Sandbox) with salesforce",description:"This job was provided by an OpenFn.org user via the job library API.",source:"@site/library/jobs/auto/Case CHW Update in SF Sandbox-2017-02-17.md",sourceDirName:"jobs/auto",slug:"/jobs/auto/Case CHW Update in SF Sandbox-2017-02-17",permalink:"/library/jobs/auto/Case CHW Update in SF Sandbox-2017-02-17",version:"current",sidebar_label:"Case CHW Update in SF (Sandbox)",frontMatter:{title:"Case CHW Update in SF (Sandbox) with salesforce",sidebar_label:"Case CHW Update in SF (Sandbox)",id:"Case CHW Update in SF Sandbox-2017-02-17",keywords:["library","job","expression","salesforce","alterState","create","dataValue","field","fields","upsert"]},sidebar:"library",previous:{title:"Case CHW Update in SF (Production) with salesforce",permalink:"/library/jobs/auto/Case CHW Update in SF Production-2017-05-15"},next:{title:"Case Clinician Update in SF (Production) with salesforce",permalink:"/library/jobs/auto/Case Clinician Update in SF Production-2017-05-15"}},c=[{value:"Metadata",id:"metadata",children:[]},{value:"Key Functions",id:"key-functions",children:[]},{value:"Expression",id:"expression",children:[]}],s={toc:c};function d(e){var a=e.components,t=Object(r.a)(e,["components"]);return Object(i.b)("wrapper",Object(n.a)({},s,t,{components:a,mdxType:"MDXLayout"}),Object(i.b)("em",null,"This job was provided by an OpenFn.org user via the job library API."),Object(i.b)("h2",{id:"metadata"},"Metadata"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"Name: Case CHW Update in SF (Sandbox)"),Object(i.b)("li",{parentName:"ul"},"Adaptor: ",Object(i.b)("inlineCode",{parentName:"li"},"@openfn/language-salesforce")),Object(i.b)("li",{parentName:"ul"},"Adaptor Version: ",Object(i.b)("inlineCode",{parentName:"li"},"v1.3.2")),Object(i.b)("li",{parentName:"ul"},"Created about 4 years ago"),Object(i.b)("li",{parentName:"ul"},"Updated 8 months ago")),Object(i.b)("h2",{id:"key-functions"},"Key Functions"),Object(i.b)("p",null,Object(i.b)("inlineCode",{parentName:"p"},"alterState"),", ",Object(i.b)("inlineCode",{parentName:"p"},"create"),", ",Object(i.b)("inlineCode",{parentName:"p"},"dataValue"),", ",Object(i.b)("inlineCode",{parentName:"p"},"field"),", ",Object(i.b)("inlineCode",{parentName:"p"},"fields"),", ",Object(i.b)("inlineCode",{parentName:"p"},"upsert")),Object(i.b)("h2",{id:"expression"},"Expression"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-js"},"alterState(state => {\n  if (dataValue('$.form.CHW.Follow-Up.Follow-Up')(state) == 'Yes') {\n    if (dataValue('$.form.CHW.Follow-Up.Client_Improved')(state) == 'No') {\n      return upsert(\n        'Service__c',\n        'CommCare_Code__c',\n        fields(\n          field('CommCare_Code__c', dataValue('$.form.case.@case_id')),\n          field(\n            'Follow_Up_Date__c',\n            dataValue('$.form.CHW.Follow-Up.Follow-Up_Date')\n          ),\n          field(\n            'Follow-Up_By_Date__c',\n            dataValue('form.CHW.Follow-Up.Follow-Up_By_Date')\n          ),\n          field(\n            'Clinical_Visit_Date__c',\n            dataValue('$.form.CHW.Facility_Services.Facility_Visit')\n          )\n        )\n      )(state);\n    } else {\n      return upsert(\n        'Service__c',\n        'CommCare_Code__c',\n        fields(\n          field('CommCare_Code__c', dataValue('$.form.case.@case_id')),\n          field(\n            'Follow_Up_Date__c',\n            dataValue('$.form.CHW.Follow-Up.Follow-Up_Date')\n          ),\n          field('Open_Case__c', false),\n          field(\n            'Clinical_Visit_Date__c',\n            dataValue('$.form.CHW.Facility_Services.Facility_Visit')\n          )\n        )\n      )(state);\n    }\n  } else if (\n    dataValue('$.form.CHW.Facility_Services.Facility_Visit')(state) == 'Yes'\n  ) {\n    return upsert(\n      'Service__c',\n      'CommCare_Code__c',\n      fields(\n        field('CommCare_Code__c', dataValue('$.form.case.@case_id')),\n        field(\n          'Clinical_Visit_Date__c',\n          dataValue('$.form.CHW.Facility_Services.Facility_Visit')\n        )\n      )\n    )(state);\n  }\n  return state;\n});\n\ncreate(\n  'Visit__c',\n  fields(\n    relationship(\n      'Household__r',\n      'CommCare_Code__c',\n      dataValue('$.form.Household_Code')\n    ),\n    field('Household_CHW__c', dataValue('$.form.CHW_ID')),\n    field('Date__c', dataValue('$.metadata.timeEnd')),\n    field('Location__latitude__s', dataValue('$.metadata.location[0]')),\n    field('Location__longitude__s', dataValue('$.metadata.location[1]'))\n  )\n);\n\n// Your job goes here.\n\n")))}d.isMDXComponent=!0},336:function(e,a,t){"use strict";t.d(a,"a",(function(){return p})),t.d(a,"b",(function(){return f}));var n=t(0),r=t.n(n);function i(e,a,t){return a in e?Object.defineProperty(e,a,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[a]=t,e}function o(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);a&&(n=n.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,n)}return t}function l(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?o(Object(t),!0).forEach((function(a){i(e,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))}))}return e}function c(e,a){if(null==e)return{};var t,n,r=function(e,a){if(null==e)return{};var t,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)t=i[n],a.indexOf(t)>=0||(r[t]=e[t]);return r}(e,a);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)t=i[n],a.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var s=r.a.createContext({}),d=function(e){var a=r.a.useContext(s),t=a;return e&&(t="function"==typeof e?e(a):l(l({},a),e)),t},p=function(e){var a=d(e.components);return r.a.createElement(s.Provider,{value:a},e.children)},u={inlineCode:"code",wrapper:function(e){var a=e.children;return r.a.createElement(r.a.Fragment,{},a)}},b=r.a.forwardRef((function(e,a){var t=e.components,n=e.mdxType,i=e.originalType,o=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),p=d(t),b=n,f=p["".concat(o,".").concat(b)]||p[b]||u[b]||i;return t?r.a.createElement(f,l(l({ref:a},s),{},{components:t})):r.a.createElement(f,l({ref:a},s))}));function f(e,a){var t=arguments,n=a&&a.mdxType;if("string"==typeof e||n){var i=t.length,o=new Array(i);o[0]=b;var l={};for(var c in a)hasOwnProperty.call(a,c)&&(l[c]=a[c]);l.originalType=e,l.mdxType="string"==typeof e?e:n,o[1]=l;for(var s=2;s<i;s++)o[s]=t[s];return r.a.createElement.apply(null,o)}return r.a.createElement.apply(null,t)}b.displayName="MDXCreateElement"}}]);