(window.webpackJsonp=window.webpackJsonp||[]).push([[131],{204:function(e,r,t){"use strict";t.r(r),t.d(r,"frontMatter",(function(){return i})),t.d(r,"metadata",(function(){return c})),t.d(r,"toc",(function(){return s})),t.d(r,"default",(function(){return d}));var n=t(3),a=t(8),o=(t(0),t(277)),i={},c={unversionedId:"jobs/alter-state-before-operations",id:"jobs/alter-state-before-operations",isDocsHomePage:!1,title:"alter-state-before-operations",description:"`js",source:"@site/library/jobs/alter-state-before-operations.md",sourceDirName:"jobs",slug:"/jobs/alter-state-before-operations",permalink:"/library/jobs/alter-state-before-operations",version:"current",frontMatter:{},sidebar:"library",previous:{title:"Create SF Contact with salesforce",permalink:"/library/jobs/auto/Create SF Contact-2021-03-01"},next:{title:"bring-formId-into-data-array-then-create-parent-and-children-in-salesforce",permalink:"/library/jobs/bring-formId-into-data-array-then-create-parent-and-children-in-salesforce"}},s=[],l={toc:s};function d(e){var r=e.components,t=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(n.a)({},l,t,{components:r,mdxType:"MDXLayout"}),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-js"},"// Here, we make sure CommCare gives us an array to use in each(merge(...), ...)\nalterState(state => {\n  const idCards = state.data.form.ID_cards_given_to_vendor;\n  if (!Array.isArray(idCards)) {\n    state.data.form.ID_cards_given_to_vendor = [idCards];\n  }\n  return state;\n});\n\n// Now state has been changed, and we carry on...\neach(\n  merge(\n    dataPath('form.ID_cards_given_to_vendor[*]'),\n    fields(\n      field('Vendor_Id', dataValue('form.ID_vendor')),\n      field('form_finished_time', dataValue('form.meta.timeEnd'))\n    )\n  ),\n  upsert(\n    'Small_Packet__c',\n    'sp_id__c',\n    fields(\n      field('sp_id__c', dataValue('ID_cards_given_to_vendor')),\n      relationship('Vendor__r', 'Badge_Code__c', dataValue('Vendor_Id')),\n      field(\n        'Small_Packet_Distribution_Date__c',\n        dataValue('form_finished_time')\n      )\n    )\n  )\n);\n")))}d.isMDXComponent=!0},277:function(e,r,t){"use strict";t.d(r,"a",(function(){return u})),t.d(r,"b",(function(){return b}));var n=t(0),a=t.n(n);function o(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function i(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function c(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?i(Object(t),!0).forEach((function(r){o(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function s(e,r){if(null==e)return{};var t,n,a=function(e,r){if(null==e)return{};var t,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)t=o[n],r.indexOf(t)>=0||(a[t]=e[t]);return a}(e,r);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)t=o[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var l=a.a.createContext({}),d=function(e){var r=a.a.useContext(l),t=r;return e&&(t="function"==typeof e?e(r):c(c({},r),e)),t},u=function(e){var r=d(e.components);return a.a.createElement(l.Provider,{value:r},e.children)},f={inlineCode:"code",wrapper:function(e){var r=e.children;return a.a.createElement(a.a.Fragment,{},r)}},p=a.a.forwardRef((function(e,r){var t=e.components,n=e.mdxType,o=e.originalType,i=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),u=d(t),p=n,b=u["".concat(i,".").concat(p)]||u[p]||f[p]||o;return t?a.a.createElement(b,c(c({ref:r},l),{},{components:t})):a.a.createElement(b,c({ref:r},l))}));function b(e,r){var t=arguments,n=r&&r.mdxType;if("string"==typeof e||n){var o=t.length,i=new Array(o);i[0]=p;var c={};for(var s in r)hasOwnProperty.call(r,s)&&(c[s]=r[s]);c.originalType=e,c.mdxType="string"==typeof e?e:n,i[1]=c;for(var l=2;l<o;l++)i[l]=t[l];return a.a.createElement.apply(null,i)}return a.a.createElement.apply(null,t)}p.displayName="MDXCreateElement"}}]);