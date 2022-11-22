"use strict";(self.webpackChunk_openfn_docs=self.webpackChunk_openfn_docs||[]).push([[37874],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>m});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=r.createContext({}),s=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},d=function(e){var t=s(e.components);return r.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},c=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,p=e.parentName,d=i(e,["components","mdxType","originalType","parentName"]),c=s(n),m=a,f=c["".concat(p,".").concat(m)]||c[m]||u[m]||o;return n?r.createElement(f,l(l({ref:t},d),{},{components:n})):r.createElement(f,l({ref:t},d))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,l=new Array(o);l[0]=c;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i.mdxType="string"==typeof e?e:a,l[1]=i;for(var s=2;s<o;s++)l[s]=n[s];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}c.displayName="MDXCreateElement"},71647:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>l,default:()=>u,frontMatter:()=>o,metadata:()=>i,toc:()=>s});var r=n(87462),a=(n(67294),n(3905));const o={title:"telerivet developer readme",id:"telerivet-readme",keywords:["adaptor","readme","telerivet"]},l="Developer README for the telerivet adaptor",i={unversionedId:"packages/telerivet-readme",id:"packages/telerivet-readme",title:"telerivet developer readme",description:"Source//github.com/OpenFn/adaptors/tree/main/packages/telerivet",source:"@site/adaptors/packages/telerivet-readme.md",sourceDirName:"packages",slug:"/packages/telerivet-readme",permalink:"/fr/adaptors/packages/telerivet-readme",draft:!1,tags:[],version:"current",frontMatter:{title:"telerivet developer readme",id:"telerivet-readme",keywords:["adaptor","readme","telerivet"]},sidebar:"library",previous:{title:"telerivet changelog",permalink:"/fr/adaptors/packages/telerivet-changelog"},next:{title:"template@1.7.4",permalink:"/fr/adaptors/packages/template-docs"}},p={},s=[{value:"Documentation",id:"documentation",level:2},{value:"Sample configuration",id:"sample-configuration",level:2},{value:"Send message",id:"send-message",level:2},{value:"Current <code>send</code> expression:",id:"current-send-expression",level:4},{value:"sendBulk messages - WIP",id:"sendbulk-messages---wip",level:2},{value:"Current <code>sendBulk</code> expression:",id:"current-sendbulk-expression",level:4},{value:"Development",id:"development",level:2}],d={toc:s};function u(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"developer-readme-for-the-telerivet-adaptor"},"Developer README for the telerivet adaptor"),(0,a.kt)("p",null,"Source: ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/OpenFn/adaptors/tree/main/packages/telerivet"},"https://github.com/OpenFn/adaptors/tree/main/packages/telerivet")),(0,a.kt)("h1",{id:"language-telerivet"},"Language Telerivet"),(0,a.kt)("p",null,"Language Pack for sending messages using the\n",(0,a.kt)("a",{parentName:"p",href:"https://telerivet.com/api/rest/curl"},"telerivet API"),"."),(0,a.kt)("h2",{id:"documentation"},"Documentation"),(0,a.kt)("h2",{id:"sample-configuration"},"Sample configuration"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "projectId": "telerivet_project_id",\n  "apiKey": "telerivetapikey"\n}\n')),(0,a.kt)("h2",{id:"send-message"},"Send message"),(0,a.kt)("h4",{id:"current-send-expression"},"Current ",(0,a.kt)("inlineCode",{parentName:"h4"},"send")," expression:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"send(\n  fields(\n    field('to_number', dataValue('recipient_number')),\n    field('content', dataValue('recipient_text')),\n    // Lots of optional parameters...\n    field('message_type', 'sms'),\n    field('route_id', dataValue('some_route'))\n  )\n);\n")),(0,a.kt)("h2",{id:"sendbulk-messages---wip"},"sendBulk messages - WIP"),(0,a.kt)("h4",{id:"current-sendbulk-expression"},"Current ",(0,a.kt)("inlineCode",{parentName:"h4"},"sendBulk")," expression:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},'send(fields(\n  field("content", dataValue("recipient_text")),\n  field("to_numbers", [\n        "+14155550123",\n        "+14255550234",\n        "+16505550345"\n    ]\n  // Lots of optional parameters...\n  field("message_type", "sms"),\n  field("route_id", dataValue("some_route"))\n))\n')),(0,a.kt)("p",null,'Note that "recipient_text" may be a concatenation like this:'),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"field('content', function (state) {\n  return dataValue('salutation')(state).concat(\n    '. ',\n    dataValue('last_name')(state),\n    ', )'\n  );\n});\n")),(0,a.kt)("h2",{id:"development"},"Development"),(0,a.kt)("p",null,"Clone the ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/OpenFn/adaptors"},"adaptors monorepo"),". Follow the\n",(0,a.kt)("inlineCode",{parentName:"p"},"Getting Started")," guide inside to get set up."),(0,a.kt)("p",null,"Run tests using ",(0,a.kt)("inlineCode",{parentName:"p"},"pnpm run test")," or ",(0,a.kt)("inlineCode",{parentName:"p"},"pnpm run test:watch")),(0,a.kt)("p",null,"Build the project using ",(0,a.kt)("inlineCode",{parentName:"p"},"pnpm build"),"."),(0,a.kt)("p",null,"To just build the docs run ",(0,a.kt)("inlineCode",{parentName:"p"},"pnpm build docs")))}u.isMDXComponent=!0}}]);