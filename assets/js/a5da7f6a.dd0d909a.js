"use strict";(self.webpackChunk_openfn_docs=self.webpackChunk_openfn_docs||[]).push([[79008],{85739:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>p,contentTitle:()=>r,default:()=>m,frontMatter:()=>a,metadata:()=>l,toc:()=>s});var n=o(58168),i=(o(96540),o(15680));const a={title:"Twilio Adaptor"},r=void 0,l={unversionedId:"twilio",id:"twilio",title:"Twilio Adaptor",description:"About Twilio",source:"@site/adaptors/twilio.md",sourceDirName:".",slug:"/twilio",permalink:"/adaptors/twilio",draft:!1,tags:[],version:"current",frontMatter:{title:"Twilio Adaptor"},sidebar:"adaptors",previous:{title:"testing developer readme",permalink:"/adaptors/packages/testing-readme"},next:{title:"twilio@0.5.2",permalink:"/adaptors/packages/twilio-docs"}},p={},s=[{value:"About Twilio",id:"about-twilio",level:2},{value:"Integration Options",id:"integration-options",level:2},{value:"Authentication",id:"authentication",level:2},{value:"Helpful Links",id:"helpful-links",level:3},{value:"Implementation Examples",id:"implementation-examples",level:3}],c={toc:s},u="wrapper";function m(e){let{components:t,...o}=e;return(0,i.yg)(u,(0,n.A)({},c,o,{components:t,mdxType:"MDXLayout"}),(0,i.yg)("h2",{id:"about-twilio"},"About Twilio"),(0,i.yg)("p",null,(0,i.yg)("a",{parentName:"p",href:"https://www.twilio.com/en-us"},"Twilio")," is a cloud communications platform that enables developers to build and scale applications for voice, messaging, video, and other communication channels."),(0,i.yg)("h2",{id:"integration-options"},"Integration Options"),(0,i.yg)("p",null,"Twilio supports 2 primary integration options with OpenFn:"),(0,i.yg)("ol",null,(0,i.yg)("li",{parentName:"ol"},(0,i.yg)("strong",{parentName:"li"},"Rest API:")," Twilio has a REST API that enables external services like OpenFn to pull data from Twilio, or push data from external apps to Twilio. This option is suited for scheduled, bulk syncs or workflows that must update data in Twilio with external information. See ",(0,i.yg)("a",{parentName:"li",href:"/adaptors/packages/twilio-docs"},"functions")," for more on how to use this adaptor to work with the API."),(0,i.yg)("li",{parentName:"ol"},(0,i.yg)("strong",{parentName:"li"},"Webhook:")," Webhook or Data Forwarding to push data from Twilio to external systems (see ",(0,i.yg)("a",{parentName:"li",href:"https://www.twilio.com/docs/usage/webhooks"},"docs"),"). This option is suited for real-time, event-based data integration.")),(0,i.yg)("h2",{id:"authentication"},"Authentication"),(0,i.yg)("ol",null,(0,i.yg)("li",{parentName:"ol"},"See ",(0,i.yg)("a",{parentName:"li",href:"https://www.twilio.com/docs/"},"Twilio docs")," for the latest on supported authentication methods."),(0,i.yg)("li",{parentName:"ol"},"When integrating with Twilio via OpenFn, there is one primary authentication method that is supported: ",(0,i.yg)("strong",{parentName:"li"},"API Key"),". See this adaptor's ",(0,i.yg)("a",{parentName:"li",href:"/adaptors/packages/twilio-configuration-schema"},"Configuration docs")," for more on the required authentication parameters.")),(0,i.yg)("p",null,"See platform docs on ",(0,i.yg)("a",{parentName:"p",href:"/documentation/manage-projects/manage-credentials"},"managing credentials")," for how to configure a credential in OpenFn. If working locally or if using a Raw JSON credential type, then your configuration will look something like this:"),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre"},'{\n  "accountSid": "account_id",\n  "authToken": "evenMoreSecret"\n}\n')),(0,i.yg)("h3",{id:"helpful-links"},"Helpful Links"),(0,i.yg)("ol",null,(0,i.yg)("li",{parentName:"ol"},(0,i.yg)("a",{parentName:"li",href:"https://www.twilio.com/docs/"},"Twilio API Documentation")),(0,i.yg)("li",{parentName:"ol"},(0,i.yg)("a",{parentName:"li",href:"https://www.twilio.com/docs/usage/webhooks"},"Webhook Setup"))),(0,i.yg)("h3",{id:"implementation-examples"},"Implementation Examples"),(0,i.yg)("p",null,(0,i.yg)("em",{parentName:"p"},"Coming soon!")))}m.isMDXComponent=!0},15680:(e,t,o)=>{o.d(t,{xA:()=>c,yg:()=>g});var n=o(96540);function i(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function a(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,n)}return o}function r(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?a(Object(o),!0).forEach((function(t){i(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):a(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function l(e,t){if(null==e)return{};var o,n,i=function(e,t){if(null==e)return{};var o,n,i={},a=Object.keys(e);for(n=0;n<a.length;n++)o=a[n],t.indexOf(o)>=0||(i[o]=e[o]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)o=a[n],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(i[o]=e[o])}return i}var p=n.createContext({}),s=function(e){var t=n.useContext(p),o=t;return e&&(o="function"==typeof e?e(t):r(r({},t),e)),o},c=function(e){var t=s(e.components);return n.createElement(p.Provider,{value:t},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var o=e.components,i=e.mdxType,a=e.originalType,p=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),u=s(o),d=i,g=u["".concat(p,".").concat(d)]||u[d]||m[d]||a;return o?n.createElement(g,r(r({ref:t},c),{},{components:o})):n.createElement(g,r({ref:t},c))}));function g(e,t){var o=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=o.length,r=new Array(a);r[0]=d;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l[u]="string"==typeof e?e:i,r[1]=l;for(var s=2;s<a;s++)r[s]=o[s];return n.createElement.apply(null,r)}return n.createElement.apply(null,o)}d.displayName="MDXCreateElement"}}]);