"use strict";(self.webpackChunk_openfn_docs=self.webpackChunk_openfn_docs||[]).push([[9049],{3905:function(e,t,o){o.d(t,{Zo:function(){return u},kt:function(){return m}});var n=o(67294);function r(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function i(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,n)}return o}function a(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?i(Object(o),!0).forEach((function(t){r(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):i(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function s(e,t){if(null==e)return{};var o,n,r=function(e,t){if(null==e)return{};var o,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)o=i[n],t.indexOf(o)>=0||(r[o]=e[o]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)o=i[n],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(r[o]=e[o])}return r}var l=n.createContext({}),c=function(e){var t=n.useContext(l),o=t;return e&&(o="function"==typeof e?e(t):a(a({},t),e)),o},u=function(e){var t=c(e.components);return n.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},p=n.forwardRef((function(e,t){var o=e.components,r=e.mdxType,i=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),p=c(o),m=r,f=p["".concat(l,".").concat(m)]||p[m]||d[m]||i;return o?n.createElement(f,a(a({ref:t},u),{},{components:o})):n.createElement(f,a({ref:t},u))}));function m(e,t){var o=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=o.length,a=new Array(i);a[0]=p;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:r,a[1]=s;for(var c=2;c<i;c++)a[c]=o[c];return n.createElement.apply(null,a)}return n.createElement.apply(null,o)}p.displayName="MDXCreateElement"},39017:function(e,t,o){o.r(t),o.d(t,{assets:function(){return u},contentTitle:function(){return l},default:function(){return m},frontMatter:function(){return s},metadata:function(){return c},toc:function(){return d}});var n=o(83117),r=o(80102),i=(o(67294),o(3905)),a=["components"],s={title:"Writing Docs"},l=void 0,c={unversionedId:"writing-docs",id:"writing-docs",title:"Writing Docs",description:"Please feel free to point out issues",source:"@site/docs/writing-docs.md",sourceDirName:".",slug:"/writing-docs",permalink:"/documentation/writing-docs",draft:!1,editUrl:"https://github.com/openfn/docs/edit/main/docs/writing-docs.md",tags:[],version:"current",frontMatter:{title:"Writing Docs"},sidebar:"docs",previous:{title:"Google Summer of Code",permalink:"/documentation/gsoc"},next:{title:"Style Guide",permalink:"/documentation/style-guide"}},u={},d=[{value:"Intro",id:"intro",level:2},{value:"What are docs",id:"what-are-docs",level:2},{value:"Goals for these docs",id:"goals-for-these-docs",level:2},{value:"Promote collaboration",id:"promote-collaboration",level:3},{value:"Get long tail contributions",id:"get-long-tail-contributions",level:3},{value:"Track doc bugs like code bugs",id:"track-doc-bugs-like-code-bugs",level:3},{value:"Get prompt and good quality reviews from team members",id:"get-prompt-and-good-quality-reviews-from-team-members",level:3},{value:"Make beautiful docs",id:"make-beautiful-docs",level:3},{value:"Use developer tools and workflows",id:"use-developer-tools-and-workflows",level:3}],p={toc:d};function m(e){var t=e.components,o=(0,r.Z)(e,a);return(0,i.kt)("wrapper",(0,n.Z)({},p,o,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"Please feel free to point out ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/openfn/docs/issues"},"issues"),"\nwith this documentation or, if you can't find the right repo, issues with the\ntools themselves. (The more feedback the better!). If you want to propose some\nnew language for the documentation, you can make those changes by clicking the\n",(0,i.kt)("strong",{parentName:"p"},'"Edit this page"')," link at the bottom of any page and submit a pull request!"),(0,i.kt)("h2",{id:"intro"},"Intro"),(0,i.kt)("p",null,"This document is meant to be a guide for OpenFn\u2019s documentation. Remember the\ngoal is to treat \u201cdocs like code\u201d and to create a docs portal that makes using\nOpenFn's tools a fairly self-service experience. Feel free to contribute to this\ndocument."),(0,i.kt)("h2",{id:"what-are-docs"},"What are docs"),(0,i.kt)("p",null,"When we say docs, we mean streamlined, tightly phrased, and fast-moving\ninformation that helps citizen integrators using OpenFn understand the\nplatform\u2019s complex application interfaces. What does treating docs like code\nmean? Store the doc source files in a version control system. Build the doc\nartifacts automatically. Ensure that a trusted set of reviewers meticulously\nreviews the docs. Publish the artifacts without much human intervention."),(0,i.kt)("p",null,"(Source: Anne Gentle\u2019s book\n",(0,i.kt)("em",{parentName:"p"},(0,i.kt)("a",{parentName:"em",href:"https://www.docslikecode.com/about/"},"Docs Like Code")),".)"),(0,i.kt)("h2",{id:"goals-for-these-docs"},"Goals for these docs"),(0,i.kt)("h3",{id:"promote-collaboration"},"Promote collaboration"),(0,i.kt)("p",null,"Collaborate with contributors efficiently by keeping docs in the same system as\ncode with deliverables generated from source files."),(0,i.kt)("h3",{id:"get-long-tail-contributions"},"Get long tail contributions"),(0,i.kt)("p",null,"Split deliverables into parts that encourage small but mighty contributions. One\nperson no longer needs to own an entire deliverable of documentation."),(0,i.kt)("h3",{id:"track-doc-bugs-like-code-bugs"},"Track doc bugs like code bugs"),(0,i.kt)("p",null,"When you fix a doc bug, you reference that bug in the commit message to help\nreviewers judge whether the doc fix solves the stated problem."),(0,i.kt)("h3",{id:"get-prompt-and-good-quality-reviews-from-team-members"},"Get prompt and good quality reviews from team members"),(0,i.kt)("p",null,"Trust team members to value docs, ensure technical accuracy and consistency,\nrespect end users\u2019 needs, and advocate for the best doc deliverables for\nconsumers."),(0,i.kt)("h3",{id:"make-beautiful-docs"},"Make beautiful docs"),(0,i.kt)("p",null,"Design is important. Create beautiful and modern looking docs."),(0,i.kt)("h3",{id:"use-developer-tools-and-workflows"},"Use developer tools and workflows"),(0,i.kt)("p",null,"Automate the process as much as possible, so we can focus on content creation."))}m.isMDXComponent=!0}}]);