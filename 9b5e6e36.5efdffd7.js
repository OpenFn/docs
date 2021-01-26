(window.webpackJsonp=window.webpackJsonp||[]).push([[42],{111:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return c})),n.d(t,"toc",(function(){return l})),n.d(t,"default",(function(){return s}));var r=n(3),o=n(7),a=(n(0),n(145)),i={title:"BambooHR"},c={unversionedId:"tools/bamboohr",id:"tools/bamboohr",isDocsHomePage:!1,title:"BambooHR",description:"Overview",source:"@site/docs/tools/bamboohr.md",slug:"/tools/bamboohr",permalink:"/documentation/tools/bamboohr",editUrl:"https://github.com/openfn/docs/edit/main/docs/tools/bamboohr.md",version:"current"},l=[{value:"Overview",id:"overview",children:[{value:"Integration Use Cases",id:"integration-use-cases",children:[]},{value:"Further Reading:",id:"further-reading",children:[]}]},{value:"Integration Options",id:"integration-options",children:[]},{value:"OpenFn Adaptor",id:"openfn-adaptor",children:[]},{value:"Integration Examples",id:"integration-examples",children:[]}],p={toc:l};function s(e){var t=e.components,n=Object(o.a)(e,["components"]);return Object(a.a)("wrapper",Object(r.a)({},p,n,{components:t,mdxType:"MDXLayout"}),Object(a.a)("h2",{id:"overview"},"Overview"),Object(a.a)("p",null,"BambooHR is..."),Object(a.a)("h3",{id:"integration-use-cases"},"Integration Use Cases"),Object(a.a)("p",null,"Example user stories..."),Object(a.a)("h3",{id:"further-reading"},"Further Reading:"),Object(a.a)("ol",null,Object(a.a)("li",{parentName:"ol"},"Links...")),Object(a.a)("h2",{id:"integration-options"},"Integration Options"),Object(a.a)("ol",null,Object(a.a)("li",{parentName:"ol"},Object(a.a)("p",{parentName:"li"},"Data integration via BambooHR Web API - link: ....")),Object(a.a)("li",{parentName:"ol"},Object(a.a)("p",{parentName:"li"},"Webhook service to push data to OpenFn endpoint - link: ... Notes about\nwebhook setup..."))),Object(a.a)("h2",{id:"openfn-adaptor"},"OpenFn Adaptor"),Object(a.a)("p",null,"Currently there is no tool-specific adaptor, so ",Object(a.a)("inlineCode",{parentName:"p"},"language-http")," can be\nimplemented to integrate via HTTP requests to the web API."),Object(a.a)("h2",{id:"integration-examples"},"Integration Examples"),Object(a.a)("p",null,"Links to sample jobs/ code snippets..."))}s.isMDXComponent=!0},145:function(e,t,n){"use strict";n.d(t,"a",(function(){return d}));var r=n(0),o=n.n(r);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var p=o.a.createContext({}),s=function(e){var t=o.a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},u={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},b=o.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,i=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),b=s(n),d=r,m=b["".concat(i,".").concat(d)]||b[d]||u[d]||a;return n?o.a.createElement(m,c(c({ref:t},p),{},{components:n})):o.a.createElement(m,c({ref:t},p))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,i=new Array(a);i[0]=b;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:r,i[1]=c;for(var p=2;p<a;p++)i[p]=n[p];return o.a.createElement.apply(null,i)}return o.a.createElement.apply(null,n)}b.displayName="MDXCreateElement"}}]);