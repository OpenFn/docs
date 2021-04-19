(window.webpackJsonp=window.webpackJsonp||[]).push([[171],{244:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return c})),n.d(t,"metadata",(function(){return i})),n.d(t,"toc",(function(){return u})),n.d(t,"default",(function(){return s}));var r=n(3),o=n(8),a=(n(0),n(266)),c={title:"SurveyCTO"},i={unversionedId:"apps/survey-cto",id:"apps/survey-cto",isDocsHomePage:!1,title:"SurveyCTO",description:"SurveyCTO is not able to push data to external URLs. In order to fetch data from",source:"@site/docs/apps/survey-cto.md",sourceDirName:"apps",slug:"/apps/survey-cto",permalink:"/documentation/apps/survey-cto",editUrl:"https://github.com/openfn/docs/edit/main/docs/apps/survey-cto.md",version:"current",frontMatter:{title:"SurveyCTO"},sidebar:"docs",previous:{title:"Salesforce",permalink:"/documentation/apps/salesforce"},next:{title:"Tableau",permalink:"/documentation/apps/tableau"}},u=[],p={toc:u};function s(e){var t=e.components,n=Object(o.a)(e,["components"]);return Object(a.b)("wrapper",Object(r.a)({},p,n,{components:t,mdxType:"MDXLayout"}),Object(a.b)("p",null,"SurveyCTO is not able to push data to external URLs. In order to fetch data from\nSurveyCTO, you must run a job on a using ",Object(a.b)("inlineCode",{parentName:"p"},"language-surveycto"),":"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-js"},"fetchSubmissions(\n  'form_id', // the form id\n  'Sep 1, 2016 3:56:02 PM', // the initial \"after\" date\n  // after the first run, OpenFn will only fetch new submissions\n  'https://www.openfn.org/inbox/something-secret' // the inbox to post form data to.\n);\n")),Object(a.b)("p",null,"Every time this job runs it will only fetch new data, by default."))}s.isMDXComponent=!0},266:function(e,t,n){"use strict";n.d(t,"a",(function(){return l})),n.d(t,"b",(function(){return m}));var r=n(0),o=n.n(r);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function u(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var p=o.a.createContext({}),s=function(e){var t=o.a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},l=function(e){var t=s(e.components);return o.a.createElement(p.Provider,{value:t},e.children)},f={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},d=o.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,c=e.parentName,p=u(e,["components","mdxType","originalType","parentName"]),l=s(n),d=r,m=l["".concat(c,".").concat(d)]||l[d]||f[d]||a;return n?o.a.createElement(m,i(i({ref:t},p),{},{components:n})):o.a.createElement(m,i({ref:t},p))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,c=new Array(a);c[0]=d;var i={};for(var u in t)hasOwnProperty.call(t,u)&&(i[u]=t[u]);i.originalType=e,i.mdxType="string"==typeof e?e:r,c[1]=i;for(var p=2;p<a;p++)c[p]=n[p];return o.a.createElement.apply(null,c)}return o.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"}}]);