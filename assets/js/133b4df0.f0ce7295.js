"use strict";(self.webpackChunk_openfn_docs=self.webpackChunk_openfn_docs||[]).push([[59424],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>f});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),c=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},d=function(e){var t=c(e.components);return r.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,s=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),u=c(n),f=a,m=u["".concat(s,".").concat(f)]||u[f]||p[f]||i;return n?r.createElement(m,o(o({ref:t},d),{},{components:n})):r.createElement(m,o({ref:t},d))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=u;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:a,o[1]=l;for(var c=2;c<i;c++)o[c]=n[c];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},71223:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>p,frontMatter:()=>i,metadata:()=>l,toc:()=>c});var r=n(87462),a=(n(67294),n(3905));const i={title:"Credentials"},o=void 0,l={unversionedId:"build/credentials",id:"build/credentials",title:"Credentials",description:"Credentials",source:"@site/docs/build/credentials.md",sourceDirName:"build",slug:"/build/credentials",permalink:"/documentation/build/credentials",draft:!1,editUrl:"https://github.com/openfn/docs/edit/main/docs/build/credentials.md",tags:[],version:"current",frontMatter:{title:"Credentials"},sidebar:"docs",previous:{title:"Triggers",permalink:"/documentation/build/triggers"},next:{title:"Your Inbox",permalink:"/documentation/build/inbox"}},s={},c=[{value:"Credentials",id:"credentials",level:2},{value:"Raw Credentials",id:"raw-credentials",level:3},{value:"Keychain Credentials",id:"keychain-credentials",level:3}],d={toc:c};function p(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"credentials"},"Credentials"),(0,a.kt)("p",null,"Credentials are used to authorize connections to destination systems. In the\nfuture, our adaptors will use credentials to fetch meta-data from source and\ndestination applications and make the job writing process easier."),(0,a.kt)("p",null,'Some systems (Salesforce, OpenMRS, DHIS2) require an instanceUrl, host, or\nApiUrl. Leave off the final "/" in these Urls: ',(0,a.kt)("inlineCode",{parentName:"p"},"https://login.salesforce.com")," or\n",(0,a.kt)("inlineCode",{parentName:"p"},"http://demo.openmrs.org/openmrs")," or ",(0,a.kt)("inlineCode",{parentName:"p"},"https://play.dhis2.org"),"."),(0,a.kt)("p",null,'Credentials can only be viewed, or edited by a single user \u2014 their "owner" (or\nthe person that created that credential). All the collaborators on a particular\nproject can choose those credentials for use when defining a job.'),(0,a.kt)("p",null,"There are two special types of credentials, in addition to the myriad standard\napplication-specific and authentication protocol-specific credentials."),(0,a.kt)("h3",{id:"raw-credentials"},"Raw Credentials"),(0,a.kt)("p",null,"Raw credentials are valid JSON documents which are passed into a job's runtime\nstate. Note that owners of these credentials will be able to view them, in their\nentirety, in the clear."),(0,a.kt)("h3",{id:"keychain-credentials"},"Keychain Credentials"),(0,a.kt)("p",null,"Keychain credentials allow for a single job to make use of multiple credentials.\nThey work by inspecting the data in the job's runtime state (i.e., ",(0,a.kt)("inlineCode",{parentName:"p"},"state.data"),")\nand checking for the value of a predetermined identifier. Based on that value,\npresent in the data for a given source message, for example, ",(0,a.kt)("em",{parentName:"p"},"another"),"\ncredential will be selected and applied for that particular job run."))}p.isMDXComponent=!0}}]);