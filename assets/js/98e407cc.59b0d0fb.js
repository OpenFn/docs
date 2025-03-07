"use strict";(self.webpackChunk_openfn_docs=self.webpackChunk_openfn_docs||[]).push([[43506],{84217:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>u,frontMatter:()=>r,metadata:()=>p,toc:()=>c});var n=a(58168),i=(a(96540),a(15680));const r={title:"MailChimp Adaptor"},o=void 0,p={unversionedId:"mailchimp",id:"mailchimp",title:"MailChimp Adaptor",description:"About Mailchimp",source:"@site/adaptors/mailchimp.md",sourceDirName:".",slug:"/mailchimp",permalink:"/adaptors/mailchimp",draft:!1,tags:[],version:"current",frontMatter:{title:"MailChimp Adaptor"},sidebar:"adaptors",previous:{title:"magpi developer readme",permalink:"/adaptors/packages/magpi-readme"},next:{title:"mailchimp@1.0.11",permalink:"/adaptors/packages/mailchimp-docs"}},l={},c=[{value:"About Mailchimp",id:"about-mailchimp",level:2},{value:"Integration Options",id:"integration-options",level:2},{value:"Authentication",id:"authentication",level:2},{value:"Helpful Links",id:"helpful-links",level:3},{value:"Implementation Examples",id:"implementation-examples",level:3}],m={toc:c},s="wrapper";function u(e){let{components:t,...a}=e;return(0,i.yg)(s,(0,n.A)({},m,a,{components:t,mdxType:"MDXLayout"}),(0,i.yg)("h2",{id:"about-mailchimp"},"About Mailchimp"),(0,i.yg)("p",null,(0,i.yg)("a",{parentName:"p",href:"https://mailchimp.com/"},"Mailchimp")," is a marketing automation platform that allows businesses to design, send, and manage email campaigns. It also provides tools for audience management, analytics, and integrations with other platforms to support marketing efforts."),(0,i.yg)("h2",{id:"integration-options"},"Integration Options"),(0,i.yg)("p",null,"Mailchimp supports two primary integration options:"),(0,i.yg)("p",null,(0,i.yg)("strong",{parentName:"p"},"1. Rest API:")," Mailchimp offers a REST API that enables external applications to interact with its services. This option is ideal for applications requiring scheduled or bulk synchronization with Mailchimp. Refer to the Mailchimp REST API ",(0,i.yg)("a",{parentName:"p",href:"https://mailchimp.com/developer/marketing/api/"},"documentation")," for detailed guidelines on endpoints and payload formats."),(0,i.yg)("p",null,(0,i.yg)("strong",{parentName:"p"},"2. Webhook:")," Webhook or Data Forwarding to push data from MailChimp to external systems (",(0,i.yg)("a",{parentName:"p",href:"https://mailchimp.com/developer/transactional/docs/webhooks/"},"see docs"),"). This option is suited for real-time, event-based data integration."),(0,i.yg)("h2",{id:"authentication"},"Authentication"),(0,i.yg)("p",null,"When integrating with Mailchimp via OpenFn, authentication via ",(0,i.yg)("strong",{parentName:"p"},"API Key")," is supported (",(0,i.yg)("a",{parentName:"p",href:"https://mailchimp.com/developer/marketing/docs/fundamentals/#connecting-to-the-api"},"see MC docs"),". See this adaptor's ",(0,i.yg)("a",{parentName:"p",href:"/adaptors/packages/mailchimp-configuration-schema"},"Configuration docs")," for more on the required authentication parameters."),(0,i.yg)("p",null,"See platform docs on ",(0,i.yg)("a",{parentName:"p",href:"documentation/manage-projects/manage-credentials"},"managing credentials")," for how to configure a credential in OpenFn. If working locally or if using a Raw JSON credential type, then your configuration will look something like this:"),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre"},'{\n  "server": "us11",\n  "apiKey": "0eb22c7b4a1c5bcd789379bf8a92902d-us13"\n}\n')),(0,i.yg)("h3",{id:"helpful-links"},"Helpful Links"),(0,i.yg)("ol",null,(0,i.yg)("li",{parentName:"ol"},(0,i.yg)("a",{parentName:"li",href:"https://mailchimp.com/developer/"},"Developer Portal")),(0,i.yg)("li",{parentName:"ol"},(0,i.yg)("a",{parentName:"li",href:"https://mailchimp.com/developer/marketing/"},"API Reference")),(0,i.yg)("li",{parentName:"ol"},(0,i.yg)("a",{parentName:"li",href:"https://mailchimp.com/developer/marketing/guides/set-up-webhooks/"},"Webhook Setup Guide"))),(0,i.yg)("h3",{id:"implementation-examples"},"Implementation Examples"),(0,i.yg)("ol",null,(0,i.yg)("li",{parentName:"ol"},"GIFE Project - Mailchimp -> Salesforce sync: ",(0,i.yg)("a",{parentName:"li",href:"https://github.com/OpenFn/gife"},"https://github.com/OpenFn/gife"))))}u.isMDXComponent=!0},15680:(e,t,a)=>{a.d(t,{xA:()=>m,yg:()=>g});var n=a(96540);function i(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){i(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function p(e,t){if(null==e)return{};var a,n,i=function(e,t){if(null==e)return{};var a,n,i={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(i[a]=e[a]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(i[a]=e[a])}return i}var l=n.createContext({}),c=function(e){var t=n.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},m=function(e){var t=c(e.components);return n.createElement(l.Provider,{value:t},e.children)},s="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},h=n.forwardRef((function(e,t){var a=e.components,i=e.mdxType,r=e.originalType,l=e.parentName,m=p(e,["components","mdxType","originalType","parentName"]),s=c(a),h=i,g=s["".concat(l,".").concat(h)]||s[h]||u[h]||r;return a?n.createElement(g,o(o({ref:t},m),{},{components:a})):n.createElement(g,o({ref:t},m))}));function g(e,t){var a=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=a.length,o=new Array(r);o[0]=h;var p={};for(var l in t)hasOwnProperty.call(t,l)&&(p[l]=t[l]);p.originalType=e,p[s]="string"==typeof e?e:i,o[1]=p;for(var c=2;c<r;c++)o[c]=a[c];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}h.displayName="MDXCreateElement"}}]);