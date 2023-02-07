"use strict";(self.webpackChunk_openfn_docs=self.webpackChunk_openfn_docs||[]).push([[17773],{3905:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>h});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=a.createContext({}),m=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},s=function(e){var t=m(e.components);return a.createElement(l.Provider,{value:t},e.children)},c="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,l=e.parentName,s=p(e,["components","mdxType","originalType","parentName"]),c=m(n),d=r,h=c["".concat(l,".").concat(d)]||c[d]||u[d]||i;return n?a.createElement(h,o(o({ref:t},s),{},{components:n})):a.createElement(h,o({ref:t},s))}));function h(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=d;var p={};for(var l in t)hasOwnProperty.call(t,l)&&(p[l]=t[l]);p.originalType=e,p[c]="string"==typeof e?e:r,o[1]=p;for(var m=2;m<i;m++)o[m]=n[m];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},91713:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>u,frontMatter:()=>i,metadata:()=>p,toc:()=>m});var a=n(87462),r=(n(67294),n(3905));const i={title:"mailchimp developer readme",id:"mailchimp-readme",keywords:["adaptor","readme","mailchimp"]},o="Developer README for the mailchimp adaptor",p={unversionedId:"packages/mailchimp-readme",id:"packages/mailchimp-readme",title:"mailchimp developer readme",description:"Source//github.com/OpenFn/adaptors/tree/main/packages/mailchimp",source:"@site/adaptors/packages/mailchimp-readme.md",sourceDirName:"packages",slug:"/packages/mailchimp-readme",permalink:"/fr/adaptors/packages/mailchimp-readme",draft:!1,tags:[],version:"current",frontMatter:{title:"mailchimp developer readme",id:"mailchimp-readme",keywords:["adaptor","readme","mailchimp"]},sidebar:"adaptors",previous:{title:"mailchimp changelog",permalink:"/fr/adaptors/packages/mailchimp-changelog"},next:{title:"mailchimp Config",permalink:"/fr/adaptors/packages/mailchimp-configuration-schema"}},l={},m=[{value:"Documentation",id:"documentation",level:2},{value:"sample configuration",id:"sample-configuration",level:4},{value:"sample expression with multiple operations",id:"sample-expression-with-multiple-operations",level:4},{value:"Development",id:"development",level:2}],s={toc:m},c="wrapper";function u(e){let{components:t,...n}=e;return(0,r.kt)(c,(0,a.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"developer-readme-for-the-mailchimp-adaptor"},"Developer README for the mailchimp adaptor"),(0,r.kt)("p",null,"Source: ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/OpenFn/adaptors/tree/main/packages/mailchimp"},"https://github.com/OpenFn/adaptors/tree/main/packages/mailchimp")),(0,r.kt)("h1",{id:"language-mailchimp"},"Language Mailchimp"),(0,r.kt)("p",null,"An OpenFn ",(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("em",{parentName:"strong"},"adaptor"))," for building integration jobs for use with the Mailchimp\nmarketing API."),(0,r.kt)("h2",{id:"documentation"},"Documentation"),(0,r.kt)("h4",{id:"sample-configuration"},"sample configuration"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "apiKey": "someSecretShhh",\n  "server": "us11"\n}\n')),(0,r.kt)("h4",{id:"sample-expression-with-multiple-operations"},"sample expression with multiple operations"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"upsertMembers({\n  listId: 'someId',\n  users: state =>\n    state.response.body.rows.map(u => ({\n      email: u.email,\n      status: u.allow_other_emails ? 'subscribed' : 'unsubscribed',\n      mergeFields: { FNAME: u.first_name, LNAME: u.last_name },\n    })),\n  options: {},\n});\n\ntagMembers({\n  listId: 'someId', // All Subscribers\n  tagId: 'someTag', // User\n  members: state => state.response.body.rows.map(u => u.email),\n});\n\ntagMembers({\n  listId: 'someId', // All Subscribers\n  tagId: 'someTag', // Other Emails Allowed\n  members: state =>\n    state.response.body.rows\n      .filter(u => u.allow_other_emails)\n      .map(u => u.email),\n});\n")),(0,r.kt)("h2",{id:"development"},"Development"),(0,r.kt)("p",null,"Clone the ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/OpenFn/adaptors"},"adaptors monorepo"),". Follow the\n",(0,r.kt)("inlineCode",{parentName:"p"},"Getting Started")," guide inside to get set up."),(0,r.kt)("p",null,"Run tests using ",(0,r.kt)("inlineCode",{parentName:"p"},"pnpm run test")," or ",(0,r.kt)("inlineCode",{parentName:"p"},"pnpm run test:watch")),(0,r.kt)("p",null,"Build the project using ",(0,r.kt)("inlineCode",{parentName:"p"},"pnpm build"),"."),(0,r.kt)("p",null,"To just build the docs run ",(0,r.kt)("inlineCode",{parentName:"p"},"pnpm build docs")))}u.isMDXComponent=!0}}]);