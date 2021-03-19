(window.webpackJsonp=window.webpackJsonp||[]).push([[110],{185:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return p})),n.d(t,"toc",(function(){return c})),n.d(t,"default",(function(){return s}));var r=n(3),o=n(8),a=(n(0),n(259)),i={title:"Community Health Toolkit"},p={unversionedId:"apps/cht",id:"apps/cht",isDocsHomePage:!1,title:"Community Health Toolkit",description:"1. To push data from CHT applications to OpenFn, leverage the",source:"@site/docs/apps/cht.md",slug:"/apps/cht",permalink:"/documentation/apps/cht",editUrl:"https://github.com/openfn/docs/edit/main/docs/apps/cht.md",version:"current",sidebar:"docs",previous:{title:"Connect Anything",permalink:"/documentation/apps/connect-anything"},next:{title:"CommCare HQ",permalink:"/documentation/apps/commcare"}},c=[],u={toc:c};function s(e){var t=e.components,n=Object(o.a)(e,["components"]);return Object(a.b)("wrapper",Object(r.a)({},u,n,{components:t,mdxType:"MDXLayout"}),Object(a.b)("ol",null,Object(a.b)("li",{parentName:"ol"},"To push data from CHT applications to OpenFn, leverage the\n",Object(a.b)("a",{parentName:"li",href:"https://docs.communityhealthtoolkit.org/apps/reference/app-settings/outbound/"},"Outbound Push"),"\nfeature to forward specified data to your OpenFn project."),Object(a.b)("li",{parentName:"ol"},"When definining the\n",Object(a.b)("a",{parentName:"li",href:"https://docs.communityhealthtoolkit.org/apps/reference/app-settings/outbound/#destination"},Object(a.b)("inlineCode",{parentName:"a"},"destination")),",\nspecify your OpenFn inbox URL as the ",Object(a.b)("inlineCode",{parentName:"li"},"baseURL"),". No ",Object(a.b)("inlineCode",{parentName:"li"},"auth")," parameters are\nrequired, unless you have configured Inbox Security on your OpenFn project."),Object(a.b)("li",{parentName:"ol"},"Define the data to forward to OpenFn in the\n",Object(a.b)("a",{parentName:"li",href:"https://docs.communityhealthtoolkit.org/apps/reference/app-settings/outbound/#mapping"},Object(a.b)("inlineCode",{parentName:"a"},"mapping")),'\nproperty. This will structure the payload that is sent to your OpenFn Inbox\nas a "Message".')),Object(a.b)("p",null,"To send data ",Object(a.b)("em",{parentName:"p"},"to")," CHT applications, check out the\n",Object(a.b)("a",{parentName:"p",href:"https://docs.communityhealthtoolkit.org/apps/reference/api/"},"CHT API"),"."))}s.isMDXComponent=!0},259:function(e,t,n){"use strict";n.d(t,"a",(function(){return l})),n.d(t,"b",(function(){return d}));var r=n(0),o=n.n(r);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function p(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var u=o.a.createContext({}),s=function(e){var t=o.a.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):p(p({},t),e)),n},l=function(e){var t=s(e.components);return o.a.createElement(u.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},b=o.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,i=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),l=s(n),b=r,d=l["".concat(i,".").concat(b)]||l[b]||m[b]||a;return n?o.a.createElement(d,p(p({ref:t},u),{},{components:n})):o.a.createElement(d,p({ref:t},u))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,i=new Array(a);i[0]=b;var p={};for(var c in t)hasOwnProperty.call(t,c)&&(p[c]=t[c]);p.originalType=e,p.mdxType="string"==typeof e?e:r,i[1]=p;for(var u=2;u<a;u++)i[u]=n[u];return o.a.createElement.apply(null,i)}return o.a.createElement.apply(null,n)}b.displayName="MDXCreateElement"}}]);