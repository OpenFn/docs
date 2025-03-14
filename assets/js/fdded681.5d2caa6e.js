"use strict";(self.webpackChunk_openfn_docs=self.webpackChunk_openfn_docs||[]).push([[83543],{62984:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>c,frontMatter:()=>o,metadata:()=>l,toc:()=>s});var a=n(58168),r=(n(96540),n(15680));const o={title:"Mailgun Adaptor"},i=void 0,l={unversionedId:"mailgun",id:"mailgun",title:"Mailgun Adaptor",description:"About Mailgun",source:"@site/adaptors/mailgun.md",sourceDirName:".",slug:"/mailgun",permalink:"/adaptors/mailgun",draft:!1,tags:[],version:"current",frontMatter:{title:"Mailgun Adaptor"},sidebar:"adaptors",previous:{title:"mailchimp developer readme",permalink:"/adaptors/packages/mailchimp-readme"},next:{title:"mailgun@0.5.10",permalink:"/adaptors/packages/mailgun-docs"}},p={},s=[{value:"About Mailgun",id:"about-mailgun",level:2},{value:"Integration Options",id:"integration-options",level:2},{value:"Authentication",id:"authentication",level:2},{value:"Helpful Links",id:"helpful-links",level:3}],u={toc:s},g="wrapper";function c(e){let{components:t,...n}=e;return(0,r.yg)(g,(0,a.A)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,r.yg)("h2",{id:"about-mailgun"},"About Mailgun"),(0,r.yg)("p",null,(0,r.yg)("a",{parentName:"p",href:"https://www.mailgun.com/"},"Mailgun")," is an email delivery service designed for developers and provides APIs for sending, receiving, and tracking emails."),(0,r.yg)("h2",{id:"integration-options"},"Integration Options"),(0,r.yg)("p",null,"Mailgun supports 2 primary integration options with OpenFn:"),(0,r.yg)("ol",null,(0,r.yg)("li",{parentName:"ol"},(0,r.yg)("p",{parentName:"li"},(0,r.yg)("strong",{parentName:"p"},"Rest API:")," Mailgun has a REST API that enables external services like OpenFn to pull data from Mailgun, or push data from external apps to Mailgun. This option is suited for scheduled, bulk syncs or workflows that must update data in Mailgun with external information. See ",(0,r.yg)("a",{parentName:"p",href:"/adaptors/packages/mailgun-docs"},"functions")," for more on how to use this adaptor to work with the API.")),(0,r.yg)("li",{parentName:"ol"},(0,r.yg)("p",{parentName:"li"},(0,r.yg)("strong",{parentName:"p"},"Webhook:")," Webhook or Data Forwarding to push data from Mailgun to external systems (see ",(0,r.yg)("a",{parentName:"p",href:"https://documentation.mailgun.com/docs/mailgun/user-manual/tracking-messages/#webhooks"},"docs"),"). This option is suited for real-time, event-based data integration."))),(0,r.yg)("h2",{id:"authentication"},"Authentication"),(0,r.yg)("ol",null,(0,r.yg)("li",{parentName:"ol"},"See ",(0,r.yg)("a",{parentName:"li",href:"https://developers.google.com/gmail/api/auth/scopes"},"Mailgun docs")," for the latest on supported authentication methods."),(0,r.yg)("li",{parentName:"ol"},"When integrating with Mailgun via OpenFn, there is one primary authentication method that is supported: ",(0,r.yg)("strong",{parentName:"li"},"API Key"),". See this adaptor's ",(0,r.yg)("a",{parentName:"li",href:"/adaptors/packages/mailgun-configuration-schema"},"Configuration docs")," for more on the required authentication parameters.")),(0,r.yg)("p",null,"See platform docs on ",(0,r.yg)("a",{parentName:"p",href:"/documentation/manage-projects/manage-credentials"},"managing credentials")," for how to configure a credential in OpenFn. If working locally or if using a Raw JSON credential type, then your configuration will look something like this:"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre"},'{\n  "domain": "sandbox-123.mailgun.org",\n  "apiKey": "otherThiNGfSECret"\n}\n')),(0,r.yg)("h3",{id:"helpful-links"},"Helpful Links"),(0,r.yg)("ol",null,(0,r.yg)("li",{parentName:"ol"},(0,r.yg)("a",{parentName:"li",href:"https://documentation.mailgun.com/"},"Mailgun API Documentation")),(0,r.yg)("li",{parentName:"ol"},(0,r.yg)("a",{parentName:"li",href:"https://documentation.mailgun.com/en/latest/api-events.html#event-webhooks"},"Event Webhooks")),(0,r.yg)("li",{parentName:"ol"},(0,r.yg)("a",{parentName:"li",href:"https://help.mailgun.com/"},"Support and Community"))))}c.isMDXComponent=!0},15680:(e,t,n)=>{n.d(t,{xA:()=>u,yg:()=>d});var a=n(96540);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p=a.createContext({}),s=function(e){var t=a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=s(e.components);return a.createElement(p.Provider,{value:t},e.children)},g="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,p=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),g=s(n),m=r,d=g["".concat(p,".").concat(m)]||g[m]||c[m]||o;return n?a.createElement(d,i(i({ref:t},u),{},{components:n})):a.createElement(d,i({ref:t},u))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=m;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l[g]="string"==typeof e?e:r,i[1]=l;for(var s=2;s<o;s++)i[s]=n[s];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"}}]);