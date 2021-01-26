(window.webpackJsonp=window.webpackJsonp||[]).push([[29],{145:function(e,t,n){"use strict";n.d(t,"a",(function(){return b}));var a=n(0),o=n.n(a);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=o.a.createContext({}),p=function(e){var t=o.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},d={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},u=o.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,r=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),u=p(n),b=a,m=u["".concat(r,".").concat(b)]||u[b]||d[b]||i;return n?o.a.createElement(m,s(s({ref:t},l),{},{components:n})):o.a.createElement(m,s({ref:t},l))}));function b(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,r=new Array(i);r[0]=u;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:a,r[1]=s;for(var l=2;l<i;l++)r[l]=n[l];return o.a.createElement.apply(null,r)}return o.a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},97:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return r})),n.d(t,"metadata",(function(){return s})),n.d(t,"toc",(function(){return c})),n.d(t,"default",(function(){return p}));var a=n(3),o=n(7),i=(n(0),n(145)),r={title:"Kobo Toolbox"},s={unversionedId:"tools/kobo-toolbox",id:"tools/kobo-toolbox",isDocsHomePage:!1,title:"Kobo Toolbox",description:"Overview",source:"@site/docs/tools/kobo-toolbox.md",slug:"/tools/kobo-toolbox",permalink:"/documentation/tools/kobo-toolbox",editUrl:"https://github.com/openfn/docs/edit/main/docs/tools/kobo-toolbox.md",version:"current",sidebar:"docs",previous:{title:"Go.Data",permalink:"/documentation/tools/godata"},next:{title:"For Application Developers",permalink:"/documentation/for-devs"}},c=[{value:"Overview",id:"overview",children:[]},{value:"Integration Use Cases",id:"integration-use-cases",children:[]},{value:"Further Reading",id:"further-reading",children:[]},{value:"Integration Options",id:"integration-options",children:[{value:"Data &amp; Metadata integration via Kobo Web API",id:"data--metadata-integration-via-kobo-web-api",children:[]},{value:"Webhook service to push submission data to OpenFn endpoint",id:"webhook-service-to-push-submission-data-to-openfn-endpoint",children:[]}]},{value:"OpenFn Adaptor",id:"openfn-adaptor",children:[]},{value:"Integration Examples",id:"integration-examples",children:[]}],l={toc:c};function p(e){var t=e.components,n=Object(o.a)(e,["components"]);return Object(i.a)("wrapper",Object(a.a)({},l,n,{components:t,mdxType:"MDXLayout"}),Object(i.a)("h2",{id:"overview"},"Overview"),Object(i.a)("div",{className:"admonition admonition-note alert alert--secondary"},Object(i.a)("div",Object(a.a)({parentName:"div"},{className:"admonition-heading"}),Object(i.a)("h5",{parentName:"div"},Object(i.a)("span",Object(a.a)({parentName:"h5"},{className:"admonition-icon"}),Object(i.a)("svg",Object(a.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(i.a)("path",Object(a.a)({parentName:"svg"},{fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"})))),"note")),Object(i.a)("div",Object(a.a)({parentName:"div"},{className:"admonition-content"}),Object(i.a)("p",{parentName:"div"},"Tool docs are (1) to ensure all OpenFn can more quickly and easily integrate\nwith common tools, and (2) to educate any OpenFn user/the wider sector."))),Object(i.a)("h2",{id:"integration-use-cases"},"Integration Use Cases"),Object(i.a)("p",null,"Example user stories..."),Object(i.a)("h2",{id:"further-reading"},"Further Reading"),Object(i.a)("ol",null,Object(i.a)("li",{parentName:"ol"},"Links to external sites and OpenFn docs...")),Object(i.a)("h2",{id:"integration-options"},"Integration Options"),Object(i.a)("h3",{id:"data--metadata-integration-via-kobo-web-api"},"Data & Metadata integration via Kobo Web API"),Object(i.a)("p",null,"Summary & links... Learning about Kobo API, what we can/cannot extract from\ndifferent endpoints..."),Object(i.a)("h3",{id:"webhook-service-to-push-submission-data-to-openfn-endpoint"},"Webhook service to push submission data to OpenFn endpoint"),Object(i.a)("ol",null,Object(i.a)("li",{parentName:"ol"},"To push data from Kobo, users must click the projects icon on their left-side\nnav bar. It's in the shape of a globe."),Object(i.a)("li",{parentName:"ol"},"Once selecting a project, the ",Object(i.a)("inlineCode",{parentName:"li"},"Project Settings")," link will appear at the top\nleft side of the screen. Click it to open the Project Settings page."),Object(i.a)("li",{parentName:"ol"},"In the bottom left pane of the project settings page, users must paste their\ninbox URL from OpenFn into the ",Object(i.a)("inlineCode",{parentName:"li"},"Rest Services")," ",Object(i.a)("inlineCode",{parentName:"li"},"Service URL")," input area and\nselect ",Object(i.a)("inlineCode",{parentName:"li"},"JSON Post")," as the ",Object(i.a)("inlineCode",{parentName:"li"},"Service Name"),"."),Object(i.a)("li",{parentName:"ol"},"It's helpful to add a wrapper to your form data if you will be publishing\nmultiple forms to OpenFn. You could use\n",Object(i.a)("inlineCode",{parentName:"li"},'{"form":"my_form", "body": %SUBMISSION%}'),"."),Object(i.a)("li",{parentName:"ol"},"Click ",Object(i.a)("inlineCode",{parentName:"li"},"Add Service")," to start forwarding new Kobo submissions to OpenFn.org.")),Object(i.a)("p",null,"To test to integration, add a submission manually using the\n",Object(i.a)("inlineCode",{parentName:"p"},"enter data in browser")," button. Head back to your history page at OpenFn to view\nthe newly submitted data and write a new ",Object(i.a)("inlineCode",{parentName:"p"},"filter")," and ",Object(i.a)("inlineCode",{parentName:"p"},"job")," to map your Kobo\ndata to any destination system on OpenFn."),Object(i.a)("p",null,"Here's a sample post from Kobo REST service. Note that questions inside groups\nare prefixed with ",Object(i.a)("inlineCode",{parentName:"p"},"groupname/")," rather than sitting inside a group object like\nODK:"),Object(i.a)("pre",null,Object(i.a)("code",Object(a.a)({parentName:"pre"},{className:"language-json"}),'{\n  "meta/instanceID": "uuid:19d72997-8316-4e02-8016-4a8ddf6a2aa4",\n  "group1/name": "twenty",\n  "group1/age": "19",\n  "formhub/uuid": "6f5773a110b046cb97e3d71f6c04e7a6",\n  "first_q": "hello",\n  "final_q": "why not?",\n  "_xform_id_string": "groups",\n  "_uuid": "19d72997-8316-4e02-8016-4a8ddf6a2aa4",\n  "_userform_id": "taylordowns2000_groups",\n  "_tags": [],\n  "_submitted_by": null,\n  "_submission_time": "2016-04-22T06:38:20",\n  "_status": "submitted_via_web",\n  "_notes": [],\n  "_id": 889409,\n  "_geolocation": [null, null],\n  "_bamboo_dataset_id": "",\n  "_attachments": []\n}\n')),Object(i.a)("h2",{id:"openfn-adaptor"},"OpenFn Adaptor"),Object(i.a)("p",null,"Check out\n",Object(i.a)("a",Object(a.a)({parentName:"p"},{href:"https://www.github.com/openfn/language-kobotoolbox"}),"OpenFn/language-kobotoolbox")),Object(i.a)("h2",{id:"integration-examples"},"Integration Examples"),Object(i.a)("p",null,"Links to sample jobs/ code snippets..."))}p.isMDXComponent=!0}}]);