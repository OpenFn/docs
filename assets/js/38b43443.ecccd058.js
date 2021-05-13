(window.webpackJsonp=window.webpackJsonp||[]).push([[68],{139:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return i})),t.d(n,"metadata",(function(){return s})),t.d(n,"toc",(function(){return l})),t.d(n,"default",(function(){return u}));var r=t(3),o=t(8),a=(t(0),t(336)),i={title:"Close Household Case with commcare",sidebar_label:"Close Household Case",id:"Close Household Case-2017-05-15",keywords:["library","job","expression","commcare","dataValue","field","fields","submit"]},s={unversionedId:"jobs/auto/Close Household Case-2017-05-15",id:"jobs/auto/Close Household Case-2017-05-15",isDocsHomePage:!1,title:"Close Household Case with commcare",description:"This job was provided by an OpenFn.org user via the job library API.",source:"@site/library/jobs/auto/Close Household Case-2017-05-15.md",sourceDirName:"jobs/auto",slug:"/jobs/auto/Close Household Case-2017-05-15",permalink:"/library/jobs/auto/Close Household Case-2017-05-15",version:"current",sidebar_label:"Close Household Case",frontMatter:{title:"Close Household Case with commcare",sidebar_label:"Close Household Case",id:"Close Household Case-2017-05-15",keywords:["library","job","expression","commcare","dataValue","field","fields","submit"]},sidebar:"library",previous:{title:"Change Owner ID for People in Household, CommCare with commcare",permalink:"/library/jobs/auto/Change Owner ID for People in Household, CommCare-2017-03-30"},next:{title:"Close Person Case with commcare",permalink:"/library/jobs/auto/Close Person Case-2017-05-15"}},l=[{value:"Metadata",id:"metadata",children:[]},{value:"Key Functions",id:"key-functions",children:[]},{value:"Expression",id:"expression",children:[]}],c={toc:l};function u(e){var n=e.components,t=Object(o.a)(e,["components"]);return Object(a.b)("wrapper",Object(r.a)({},c,t,{components:n,mdxType:"MDXLayout"}),Object(a.b)("em",null,"This job was provided by an OpenFn.org user via the job library API."),Object(a.b)("h2",{id:"metadata"},"Metadata"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"Name: Close Household Case"),Object(a.b)("li",{parentName:"ul"},"Adaptor: ",Object(a.b)("inlineCode",{parentName:"li"},"@openfn/language-commcare")),Object(a.b)("li",{parentName:"ul"},"Adaptor Version: ",Object(a.b)("inlineCode",{parentName:"li"},"latest")),Object(a.b)("li",{parentName:"ul"},"Created almost 4 years ago"),Object(a.b)("li",{parentName:"ul"},"Updated 8 months ago")),Object(a.b)("h2",{id:"key-functions"},"Key Functions"),Object(a.b)("p",null,Object(a.b)("inlineCode",{parentName:"p"},"dataValue"),", ",Object(a.b)("inlineCode",{parentName:"p"},"field"),", ",Object(a.b)("inlineCode",{parentName:"p"},"fields"),", ",Object(a.b)("inlineCode",{parentName:"p"},"submit")),Object(a.b)("h2",{id:"expression"},"Expression"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-js"},"submit(\n  fields(\n    field('@', state => {\n      return {\n        'xmlns:jrm': 'http://dev.commcarehq.org/jr/xforms',\n        xmlns:\n          'http://openrosa.org/formdesigner/980c10cdb3b140101225e25c6e8aff48f471b3d',\n        uiVersion: '1',\n        version: '46',\n        name: 'Update Household',\n      };\n    }),\n\n    field('n0:case', state => {\n      return {\n        '@': {\n          case_id: dataValue('new[0].Commcare_Code__c')(state),\n          date_modified: new Date().toISOString(),\n          user_id: 'e298884bfb6ee2d2b38591a6e8ae0228',\n          'xmlns:n0': 'http://commcarehq.org/case/transaction/v2',\n        },\n        'n0:close': '',\n      };\n    }),\n    field('n1:meta', state => {\n      return {\n        '@': { 'xmlns:n1': 'http://openrosa.org/jr/xforms' },\n        'n1:deviceID': 'Formplayer',\n        'n1:timeStart': new Date().toISOString(),\n        'n1:timeEnd': new Date().toISOString(),\n        'n1:userID': 'e298884bfb6ee2d2b38591a6e8ae0228',\n      };\n    })\n  )\n);\n\n")))}u.isMDXComponent=!0},336:function(e,n,t){"use strict";t.d(n,"a",(function(){return b})),t.d(n,"b",(function(){return m}));var r=t(0),o=t.n(r);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function s(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var c=o.a.createContext({}),u=function(e){var n=o.a.useContext(c),t=n;return e&&(t="function"==typeof e?e(n):s(s({},n),e)),t},b=function(e){var n=u(e.components);return o.a.createElement(c.Provider,{value:n},e.children)},d={inlineCode:"code",wrapper:function(e){var n=e.children;return o.a.createElement(o.a.Fragment,{},n)}},p=o.a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,a=e.originalType,i=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),b=u(t),p=r,m=b["".concat(i,".").concat(p)]||b[p]||d[p]||a;return t?o.a.createElement(m,s(s({ref:n},c),{},{components:t})):o.a.createElement(m,s({ref:n},c))}));function m(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var a=t.length,i=new Array(a);i[0]=p;var s={};for(var l in n)hasOwnProperty.call(n,l)&&(s[l]=n[l]);s.originalType=e,s.mdxType="string"==typeof e?e:r,i[1]=s;for(var c=2;c<a;c++)i[c]=t[c];return o.a.createElement.apply(null,i)}return o.a.createElement.apply(null,t)}p.displayName="MDXCreateElement"}}]);