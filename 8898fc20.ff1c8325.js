(window.webpackJsonp=window.webpackJsonp||[]).push([[39],{108:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return i})),r.d(t,"metadata",(function(){return c})),r.d(t,"toc",(function(){return s})),r.d(t,"default",(function(){return l}));var n=r(3),a=r(7),o=(r(0),r(145)),i={},c={unversionedId:"jobs/Create-SMS-Linked-to-Contact-in-SF",id:"jobs/Create-SMS-Linked-to-Contact-in-SF",isDocsHomePage:!1,title:"Create-SMS-Linked-to-Contact-in-SF",description:"`js",source:"@site/library/jobs/Create-SMS-Linked-to-Contact-in-SF.md",slug:"/jobs/Create-SMS-Linked-to-Contact-in-SF",permalink:"/library/jobs/Create-SMS-Linked-to-Contact-in-SF",version:"current",sidebar:"library",previous:{title:"send-sms-from-salesforce-workflow",permalink:"/library/jobs/send-sms-from-salesforce-workflow"},next:{title:"upsert-many-items-in-array-with-value-outside-array",permalink:"/library/jobs/upsert-many-items-in-array-with-value-outside-array"}},s=[],u={toc:s};function l(e){var t=e.components,r=Object(a.a)(e,["components"]);return Object(o.a)("wrapper",Object(n.a)({},u,r,{components:t,mdxType:"MDXLayout"}),Object(o.a)("pre",null,Object(o.a)("code",Object(n.a)({parentName:"pre"},{className:"language-js"}),'create("SMS__c", fields(\n  field("text__c", dataValue("message_text")),\n  relationship("Contact__r", "Contact_Phone_Number__c", dataValue("from_number")),\n  field("date__c", dataValue("date"))\n)\n')))}l.isMDXComponent=!0},145:function(e,t,r){"use strict";r.d(t,"a",(function(){return d}));var n=r(0),a=r.n(n);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var u=a.a.createContext({}),l=function(e){var t=a.a.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):c(c({},t),e)),r},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},f=a.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,i=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),f=l(r),d=n,m=f["".concat(i,".").concat(d)]||f[d]||p[d]||o;return r?a.a.createElement(m,c(c({ref:t},u),{},{components:r})):a.a.createElement(m,c({ref:t},u))}));function d(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,i=new Array(o);i[0]=f;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:n,i[1]=c;for(var u=2;u<o;u++)i[u]=r[u];return a.a.createElement.apply(null,i)}return a.a.createElement.apply(null,r)}f.displayName="MDXCreateElement"}}]);