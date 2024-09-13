"use strict";(self.webpackChunk_openfn_docs=self.webpackChunk_openfn_docs||[]).push([[16476],{56213:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>d,frontMatter:()=>r,metadata:()=>l,toc:()=>p});var a=n(58168),i=(n(96540),n(15680));const r={title:"Paths & Path Conditions",sidebar_label:"Paths"},o=void 0,l={unversionedId:"build/paths",id:"build/paths",title:"Paths & Path Conditions",description:"A Path is both a visual and functional indication defining the sequence of Steps",source:"@site/docs/build/paths.md",sourceDirName:"build",slug:"/build/paths",permalink:"/documentation/build/paths",draft:!1,editUrl:"https://github.com/openfn/docs/edit/main/docs/build/paths.md",tags:[],version:"current",frontMatter:{title:"Paths & Path Conditions",sidebar_label:"Paths"},sidebar:"docs",previous:{title:"Design your Step",permalink:"/documentation/build/steps/step-design-intro"},next:{title:"Credentials",permalink:"/documentation/build/credentials"}},s={},p=[{value:"Path Conditions",id:"path-conditions",level:2},{value:"Writing JavaScript Expressions for Custom Path Conditions",id:"writing-javascript-expressions-for-custom-path-conditions",level:2},{value:"Disabling Paths",id:"disabling-paths",level:2}],u={toc:p},c="wrapper";function d(e){let{components:t,...r}=e;return(0,i.yg)(c,(0,a.A)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,i.yg)("p",null,"A Path is both a visual and functional indication defining the sequence of Steps\nthe Workflow follows when executed. Read on for more about the different types of Paths\nand configuration tips."),(0,i.yg)("h2",{id:"path-conditions"},"Path Conditions"),(0,i.yg)("p",null,"There are four types of Path Conditions that define whether the Workflow will\nproceed to the next Step when executed:"),(0,i.yg)("ol",null,(0,i.yg)("li",{parentName:"ol"},(0,i.yg)("strong",{parentName:"li"},"Always"),": the next Step will always run after the execution of the prior\nStep is completed"),(0,i.yg)("li",{parentName:"ol"},(0,i.yg)("strong",{parentName:"li"},"On Success"),": the next Step will run only if the execution of the prior\nStep ",(0,i.yg)("em",{parentName:"li"},"succeeded")),(0,i.yg)("li",{parentName:"ol"},(0,i.yg)("strong",{parentName:"li"},"On Failure"),": the next Step will run only if the execution of the prior\nStep ",(0,i.yg)("em",{parentName:"li"},"failed")),(0,i.yg)("li",{parentName:"ol"},(0,i.yg)("strong",{parentName:"li"},"Matches a JavaScript Expression"),": the next Step will only run if an\nexpression evaluates to be true")),(0,i.yg)("p",null,(0,i.yg)("img",{alt:"Path Conditions",src:n(70503).A,width:"1514",height:"616"})),(0,i.yg)("h2",{id:"writing-javascript-expressions-for-custom-path-conditions"},"Writing JavaScript Expressions for Custom Path Conditions"),(0,i.yg)("p",null,"Create a ",(0,i.yg)("strong",{parentName:"p"},"custom condition")," with a JavaScript expression. This evaluates\nagainst the state produced by the previous Step."),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre"},"state.data.form['@name'] === \"Register New Patient\"\n")),(0,i.yg)("p",null,"This is a regular Javsacript expression with ",(0,i.yg)("inlineCode",{parentName:"p"},"state")," in scope. If the expression\nevaluates to true (or anything ",(0,i.yg)("em",{parentName:"p"},"truthy"),"), the Path will be followed and the next\nStep will be executed."),(0,i.yg)("p",null,(0,i.yg)("img",{alt:"Custom Conditions",src:n(66611).A,width:"1036",height:"466"})),(0,i.yg)("p",null,"Examples of valid conditions include:"),(0,i.yg)("ul",null,(0,i.yg)("li",{parentName:"ul"},"Run if there are no errors: ",(0,i.yg)("inlineCode",{parentName:"li"},"!state.errors")),(0,i.yg)("li",{parentName:"ul"},"Run if some value exists on state: ",(0,i.yg)("inlineCode",{parentName:"li"},"state.has_valid_email_address")),(0,i.yg)("li",{parentName:"ul"},"Run if a data array contains any items: ",(0,i.yg)("inlineCode",{parentName:"li"},"state.data.length > 0")),(0,i.yg)("li",{parentName:"ul"},"Run if data includes one item which matches criteria:\n",(0,i.yg)("inlineCode",{parentName:"li"},"state.data.includes(item => item.age > 18)")),(0,i.yg)("li",{parentName:"ul"},"Run if the last Step received a HTTP error: ",(0,i.yg)("inlineCode",{parentName:"li"},"state.response.statusCode >= 400"))),(0,i.yg)("p",null,"In a custom expression you ",(0,i.yg)("strong",{parentName:"p"},"cannot")," do any of the following:"),(0,i.yg)("ul",null,(0,i.yg)("li",{parentName:"ul"},"Use adaptor functions"),(0,i.yg)("li",{parentName:"ul"},"Use Lazy State references (",(0,i.yg)("inlineCode",{parentName:"li"},"$"),")."),(0,i.yg)("li",{parentName:"ul"},"Use control statements like ",(0,i.yg)("inlineCode",{parentName:"li"},"if"),", ",(0,i.yg)("inlineCode",{parentName:"li"},"while"),", ",(0,i.yg)("inlineCode",{parentName:"li"},"for"),", etc")),(0,i.yg)("h2",{id:"disabling-paths"},"Disabling Paths"),(0,i.yg)("p",null,"Disabling a path will prevent any of the downstream Steps from running,\nregardless of the condition or state."),(0,i.yg)("p",null,"This can be a useful way of temporarily deactivating part of your workflow."),(0,i.yg)("p",null,"To disable a path:"),(0,i.yg)("ol",null,(0,i.yg)("li",{parentName:"ol"},"Click on the ",(0,i.yg)("inlineCode",{parentName:"li"},"Path")," you want to deactive"),(0,i.yg)("li",{parentName:"ol"},"Select the ",(0,i.yg)("inlineCode",{parentName:"li"},"Disable this path")," checkbox")))}d.isMDXComponent=!0},15680:(e,t,n)=>{n.d(t,{xA:()=>u,yg:()=>y});var a=n(96540);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=a.createContext({}),p=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=p(e.components);return a.createElement(s.Provider,{value:t},e.children)},c="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},g=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,r=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),c=p(n),g=i,y=c["".concat(s,".").concat(g)]||c[g]||d[g]||r;return n?a.createElement(y,o(o({ref:t},u),{},{components:n})):a.createElement(y,o({ref:t},u))}));function y(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=n.length,o=new Array(r);o[0]=g;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[c]="string"==typeof e?e:i,o[1]=l;for(var p=2;p<r;p++)o[p]=n[p];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}g.displayName="MDXCreateElement"},70503:(e,t,n)=>{n.d(t,{A:()=>a});const a=n.p+"assets/images/path_conditions-4ba4eeeec59b4defcb4bbc42b2f689fe.png"},66611:(e,t,n)=>{n.d(t,{A:()=>a});const a=n.p+"assets/images/path_js_expression-7764de20b6f2d5e8156902de9488cad5.png"}}]);