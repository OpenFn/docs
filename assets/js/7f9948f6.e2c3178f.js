(window.webpackJsonp=window.webpackJsonp||[]).push([[93],{166:function(e,t,o){"use strict";o.r(t),o.d(t,"frontMatter",(function(){return a})),o.d(t,"metadata",(function(){return c})),o.d(t,"toc",(function(){return s})),o.d(t,"default",(function(){return d}));var n=o(3),r=o(8),i=(o(0),o(259)),a={title:"Writing Docs"},c={unversionedId:"writing-docs",id:"writing-docs",isDocsHomePage:!1,title:"Writing Docs",description:"Intro",source:"@site/docs/writing-docs.md",slug:"/writing-docs",permalink:"/documentation/writing-docs",editUrl:"https://github.com/openfn/docs/edit/main/docs/writing-docs.md",version:"current",sidebar:"docs",previous:{title:"Google Summer of Code",permalink:"/documentation/gsoc"},next:{title:"Style Guide",permalink:"/documentation/style-guide"}},s=[{value:"Intro",id:"intro",children:[]},{value:"What are docs",id:"what-are-docs",children:[]},{value:"Goals for these docs",id:"goals-for-these-docs",children:[{value:"Promote collaboration",id:"promote-collaboration",children:[]},{value:"Get long tail contributions",id:"get-long-tail-contributions",children:[]},{value:"Track doc bugs like code bugs",id:"track-doc-bugs-like-code-bugs",children:[]},{value:"Get prompt and good quality reviews from team members",id:"get-prompt-and-good-quality-reviews-from-team-members",children:[]},{value:"Make beautiful docs",id:"make-beautiful-docs",children:[]},{value:"Use developer tools and workflows",id:"use-developer-tools-and-workflows",children:[]}]}],l={toc:s};function d(e){var t=e.components,o=Object(r.a)(e,["components"]);return Object(i.b)("wrapper",Object(n.a)({},l,o,{components:t,mdxType:"MDXLayout"}),Object(i.b)("h2",{id:"intro"},"Intro"),Object(i.b)("p",null,"This document is meant to be a guide for OpenFn\u2019s documentation. Remember the\ngoal is to treat \u201cdocs like code\u201d and to create a docs portal that makes using\nOpenFn's tools a fairly self-service experience. Feel free to contribute to this\ndocument."),Object(i.b)("h2",{id:"what-are-docs"},"What are docs"),Object(i.b)("p",null,"When we say docs, we mean streamlined, tightly phrased, and fast-moving\ninformation that helps citizen integrators using OpenFn understand the\nplatform\u2019s complex application interfaces. What does treating docs like code\nmean? Store the doc source files in a version control system. Build the doc\nartifacts automatically. Ensure that a trusted set of reviewers meticulously\nreviews the docs. Publish the artifacts without much human intervention."),Object(i.b)("p",null,"(Source: Anne Gentle\u2019s book\n",Object(i.b)("em",{parentName:"p"},Object(i.b)("a",{parentName:"em",href:"https://www.docslikecode.com/about/"},"Docs Like Code")),".)"),Object(i.b)("h2",{id:"goals-for-these-docs"},"Goals for these docs"),Object(i.b)("h3",{id:"promote-collaboration"},"Promote collaboration"),Object(i.b)("p",null,"Collaborate with contributors efficiently by keeping docs in the same system as\ncode with deliverables generated from source files."),Object(i.b)("h3",{id:"get-long-tail-contributions"},"Get long tail contributions"),Object(i.b)("p",null,"Split deliverables into parts that encourage small but mighty contributions. One\nperson no longer needs to own an entire deliverable of documentation."),Object(i.b)("h3",{id:"track-doc-bugs-like-code-bugs"},"Track doc bugs like code bugs"),Object(i.b)("p",null,"When you fix a doc bug, you reference that bug in the commit message to help\nreviewers judge whether the doc fix solves the stated problem."),Object(i.b)("h3",{id:"get-prompt-and-good-quality-reviews-from-team-members"},"Get prompt and good quality reviews from team members"),Object(i.b)("p",null,"Trust team members to value docs, ensure technical accuracy and consistency,\nrespect end users\u2019 needs, and advocate for the best doc deliverables for\nconsumers."),Object(i.b)("h3",{id:"make-beautiful-docs"},"Make beautiful docs"),Object(i.b)("p",null,"Design is important. Create beautiful and modern looking docs."),Object(i.b)("h3",{id:"use-developer-tools-and-workflows"},"Use developer tools and workflows"),Object(i.b)("p",null,"Automate the process as much as possible, so we can focus on content creation."))}d.isMDXComponent=!0},259:function(e,t,o){"use strict";o.d(t,"a",(function(){return u})),o.d(t,"b",(function(){return p}));var n=o(0),r=o.n(n);function i(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function a(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,n)}return o}function c(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?a(Object(o),!0).forEach((function(t){i(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):a(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function s(e,t){if(null==e)return{};var o,n,r=function(e,t){if(null==e)return{};var o,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)o=i[n],t.indexOf(o)>=0||(r[o]=e[o]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)o=i[n],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(r[o]=e[o])}return r}var l=r.a.createContext({}),d=function(e){var t=r.a.useContext(l),o=t;return e&&(o="function"==typeof e?e(t):c(c({},t),e)),o},u=function(e){var t=d(e.components);return r.a.createElement(l.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},m=r.a.forwardRef((function(e,t){var o=e.components,n=e.mdxType,i=e.originalType,a=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),u=d(o),m=n,p=u["".concat(a,".").concat(m)]||u[m]||b[m]||i;return o?r.a.createElement(p,c(c({ref:t},l),{},{components:o})):r.a.createElement(p,c({ref:t},l))}));function p(e,t){var o=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=o.length,a=new Array(i);a[0]=m;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:n,a[1]=c;for(var l=2;l<i;l++)a[l]=o[l];return r.a.createElement.apply(null,a)}return r.a.createElement.apply(null,o)}m.displayName="MDXCreateElement"}}]);