(window.webpackJsonp=window.webpackJsonp||[]).push([[100],{171:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return c})),n.d(t,"toc",(function(){return p})),n.d(t,"default",(function(){return s}));var r=n(3),o=n(8),a=(n(0),n(277)),i={title:"BambooHR"},c={unversionedId:"apps/bamboohr",id:"apps/bamboohr",isDocsHomePage:!1,title:"BambooHR",description:"Overview",source:"@site/docs/apps/bamboohr.md",sourceDirName:"apps",slug:"/apps/bamboohr",permalink:"/documentation/apps/bamboohr",editUrl:"https://github.com/openfn/docs/edit/main/docs/apps/bamboohr.md",version:"current",frontMatter:{title:"BambooHR"}},p=[{value:"Overview",id:"overview",children:[{value:"Integration Use Cases",id:"integration-use-cases",children:[]},{value:"Further Reading:",id:"further-reading",children:[]}]},{value:"Integration Options",id:"integration-options",children:[]},{value:"OpenFn Adaptor",id:"openfn-adaptor",children:[]},{value:"Integration Examples",id:"integration-examples",children:[]}],l={toc:p};function s(e){var t=e.components,n=Object(o.a)(e,["components"]);return Object(a.b)("wrapper",Object(r.a)({},l,n,{components:t,mdxType:"MDXLayout"}),Object(a.b)("h2",{id:"overview"},"Overview"),Object(a.b)("p",null,"BambooHR is..."),Object(a.b)("h3",{id:"integration-use-cases"},"Integration Use Cases"),Object(a.b)("p",null,"Example user stories..."),Object(a.b)("h3",{id:"further-reading"},"Further Reading:"),Object(a.b)("ol",null,Object(a.b)("li",{parentName:"ol"},"Links...")),Object(a.b)("h2",{id:"integration-options"},"Integration Options"),Object(a.b)("ol",null,Object(a.b)("li",{parentName:"ol"},Object(a.b)("p",{parentName:"li"},"Data integration via BambooHR Web API - link: ....")),Object(a.b)("li",{parentName:"ol"},Object(a.b)("p",{parentName:"li"},"Webhook service to push data to OpenFn endpoint - link: ... Notes about\nwebhook setup..."))),Object(a.b)("h2",{id:"openfn-adaptor"},"OpenFn Adaptor"),Object(a.b)("p",null,"Currently there is no tool-specific adaptor, so ",Object(a.b)("inlineCode",{parentName:"p"},"language-http")," can be\nimplemented to integrate via HTTP requests to the web API."),Object(a.b)("h2",{id:"integration-examples"},"Integration Examples"),Object(a.b)("p",null,"Links to sample jobs/ code snippets..."))}s.isMDXComponent=!0},277:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return m}));var r=n(0),o=n.n(r);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=o.a.createContext({}),s=function(e){var t=o.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},u=function(e){var t=s(e.components);return o.a.createElement(l.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},d=o.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,i=e.parentName,l=p(e,["components","mdxType","originalType","parentName"]),u=s(n),d=r,m=u["".concat(i,".").concat(d)]||u[d]||b[d]||a;return n?o.a.createElement(m,c(c({ref:t},l),{},{components:n})):o.a.createElement(m,c({ref:t},l))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,i=new Array(a);i[0]=d;var c={};for(var p in t)hasOwnProperty.call(t,p)&&(c[p]=t[p]);c.originalType=e,c.mdxType="string"==typeof e?e:r,i[1]=c;for(var l=2;l<a;l++)i[l]=n[l];return o.a.createElement.apply(null,i)}return o.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"}}]);