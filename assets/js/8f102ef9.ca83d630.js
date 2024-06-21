"use strict";(self.webpackChunk_openfn_docs=self.webpackChunk_openfn_docs||[]).push([[39954],{15680:(e,n,t)=>{t.d(n,{xA:()=>c,yg:()=>m});var r=t(96540);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var l=r.createContext({}),p=function(e){var n=r.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},c=function(e){var n=p(e.components);return r.createElement(l.Provider,{value:n},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},y=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),u=p(t),y=a,m=u["".concat(l,".").concat(y)]||u[y]||d[y]||o;return t?r.createElement(m,i(i({ref:n},c),{},{components:t})):r.createElement(m,i({ref:n},c))}));function m(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var o=t.length,i=new Array(o);i[0]=y;var s={};for(var l in n)hasOwnProperty.call(n,l)&&(s[l]=n[l]);s.originalType=e,s[u]="string"==typeof e?e:a,i[1]=s;for(var p=2;p<o;p++)i[p]=t[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,t)}y.displayName="MDXCreateElement"},28698:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>i,default:()=>d,frontMatter:()=>o,metadata:()=>s,toc:()=>p});var r=t(58168),a=(t(96540),t(15680));const o={title:"What's an operation?"},i=void 0,s={unversionedId:"jobs/operations",id:"version-legacy/jobs/operations",title:"What's an operation?",description:"An Operation is a function which returns a function which takes state and",source:"@site/versioned_docs/version-legacy/jobs/operations.md",sourceDirName:"jobs",slug:"/jobs/operations",permalink:"/documentation/legacy/jobs/operations",draft:!1,editUrl:"https://github.com/openfn/docs/edit/main/versioned_docs/version-legacy/jobs/operations.md",tags:[],version:"legacy",frontMatter:{title:"What's an operation?"},sidebar:"docs",previous:{title:"A closer look at jobs",permalink:"/documentation/legacy/jobs/understanding"},next:{title:"Using multiple operations",permalink:"/documentation/legacy/jobs/multiple-operations"}},l={},p=[],c={toc:p},u="wrapper";function d(e){let{components:n,...t}=e;return(0,a.yg)(u,(0,r.A)({},c,t,{components:n,mdxType:"MDXLayout"}),(0,a.yg)("p",null,"An Operation is a function which returns a function which takes ",(0,a.yg)("inlineCode",{parentName:"p"},"state")," and\nreturns a ",(0,a.yg)("inlineCode",{parentName:"p"},"Promise")," or ",(0,a.yg)("inlineCode",{parentName:"p"},"state"),"."),(0,a.yg)("p",null,"The purpose of an Operation is to act as an unresolved unit of behaviour."),(0,a.yg)("p",null,"For example, when creating an expression - the code itself doesn't know what the\nstate is going to be, only what ",(0,a.yg)("em",{parentName:"p"},"it's going to do"),"."),(0,a.yg)("p",null,"Language packs all follow this convention, where the functions that are provided\nall return Operations."),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-javascript"},"create('My_Custom_Object__c', {\n  Custom_Field__c: dataValue('foo'),\n});\n")),(0,a.yg)("p",null,"In the snippet above, the ",(0,a.yg)("inlineCode",{parentName:"p"},"create")," function doesn't know anything about\ncredentials, or any dynamic data that you may be available at runtime."),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-javascript"},"function create(objectName, data) {\n  return function (state) {\n    // expand the data argument using state\n    // actually do the work\n  };\n}\n")),(0,a.yg)("p",null,"In this snippet is a simple example of what most functions in OpenFn look like.\nThe ",(0,a.yg)("inlineCode",{parentName:"p"},"create")," function returns a function that takes state, this is an\n",(0,a.yg)("inlineCode",{parentName:"p"},"Operation"),". The runtime using ",(0,a.yg)("inlineCode",{parentName:"p"},"execute")," will call all Operations with ",(0,a.yg)("inlineCode",{parentName:"p"},"state"),"."))}d.isMDXComponent=!0}}]);