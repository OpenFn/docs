"use strict";(self.webpackChunk_openfn_docs=self.webpackChunk_openfn_docs||[]).push([[59644],{56310:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>u,frontMatter:()=>o,metadata:()=>s,toc:()=>p});var a=n(58168),r=(n(96540),n(15680));const o={title:"dhis2 developer readme",id:"dhis2-readme",keywords:["adaptor","readme","dhis2"]},i="dhis2 Adaptor developer README.md",s={unversionedId:"packages/dhis2-readme",id:"packages/dhis2-readme",title:"dhis2 developer readme",description:"Source//github.com/OpenFn/adaptors/tree/main/packages/dhis2",source:"@site/adaptors/packages/dhis2-readme.md",sourceDirName:"packages",slug:"/packages/dhis2-readme",permalink:"/adaptors/packages/dhis2-readme",draft:!1,tags:[],version:"current",frontMatter:{title:"dhis2 developer readme",id:"dhis2-readme",keywords:["adaptor","readme","dhis2"]},sidebar:"adaptors",previous:{title:"dhis2 changelog",permalink:"/adaptors/packages/dhis2-changelog"},next:{title:"divoc@0.1.0",permalink:"/adaptors/packages/divoc-docs"}},l={},p=[{value:"Table of Contents",id:"table-of-contents",level:2},{value:"Getting Started",id:"getting-started",level:2},{value:"Important Note",id:"important-note",level:2},{value:"Configuration",id:"configuration",level:2},{value:"Helper Functions",id:"helper-functions",level:2},{value:"Development",id:"development",level:2},{value:"Running Tests",id:"running-tests",level:3},{value:"Unit Tests",id:"unit-tests",level:3},{value:"Integration Tests",id:"integration-tests",level:3},{value:"Troubleshooting Tests",id:"troubleshooting-tests",level:3}],g={toc:p},d="wrapper";function u(e){let{components:t,...n}=e;return(0,r.yg)(d,(0,a.A)({},g,n,{components:t,mdxType:"MDXLayout"}),(0,r.yg)("h1",{id:"dhis2-adaptor-developer-readmemd"},"dhis2 Adaptor developer README.md"),(0,r.yg)("p",null,"Source: ",(0,r.yg)("a",{parentName:"p",href:"https://github.com/OpenFn/adaptors/tree/main/packages/dhis2"},"https://github.com/OpenFn/adaptors/tree/main/packages/dhis2")),(0,r.yg)("h1",{id:"language-dhis2"},"Language DHIS2"),(0,r.yg)("p",null,"An OpenFn language pack for building expressions and operations to work with the\n",(0,r.yg)("a",{parentName:"p",href:"https://docs.dhis2.org/en/home.html"},"DHIS2 API"),". Commonly used via\n",(0,r.yg)("a",{parentName:"p",href:"https://app.openfn.org"},"OpenFn.org")," or manually with\n",(0,r.yg)("a",{parentName:"p",href:"https://github.com/OpenFn/kit"},"OpenFn CLI"),"."),(0,r.yg)("h2",{id:"table-of-contents"},"Table of Contents"),(0,r.yg)("ol",null,(0,r.yg)("li",{parentName:"ol"},(0,r.yg)("a",{parentName:"li",href:"#getting-started"},"Getting Started")),(0,r.yg)("li",{parentName:"ol"},(0,r.yg)("a",{parentName:"li",href:"#important-note"},"Important Note")),(0,r.yg)("li",{parentName:"ol"},(0,r.yg)("a",{parentName:"li",href:"#configuration"},"Configuration")),(0,r.yg)("li",{parentName:"ol"},(0,r.yg)("a",{parentName:"li",href:"#helper-functions"},"Helper Functions")),(0,r.yg)("li",{parentName:"ol"},(0,r.yg)("a",{parentName:"li",href:"#development"},"Development"),(0,r.yg)("ul",{parentName:"li"},(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("a",{parentName:"li",href:"#running-tests"},"Running Tests")),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("a",{parentName:"li",href:"#unit-tests"},"Unit Tests")),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("a",{parentName:"li",href:"#integration-tests"},"Integration Tests")),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("a",{parentName:"li",href:"#troubleshooting-tests"},"Troubleshooting Tests"))))),(0,r.yg)("hr",null),(0,r.yg)("h2",{id:"getting-started"},"Getting Started"),(0,r.yg)("p",null,"To use this package, execute commands via OpenFn/core from the root of the\nrepository:"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-sh"},"openfn job.js -a dhis2 -s tmp/state.json\n")),(0,r.yg)("p",null,"For installation and usage, see the\n",(0,r.yg)("a",{parentName:"p",href:"https://docs.openfn.org/adaptors/packages/dhis2-docs"},"docs site"),"."),(0,r.yg)("hr",null),(0,r.yg)("h2",{id:"important-note"},"Important Note"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},"For DHIS2 API versions 2.42+ and the ",(0,r.yg)("strong",{parentName:"li"},"new tracker"),", use ",(0,r.yg)("strong",{parentName:"li"},"adaptor 6.0+"),".\nRefer to the\n",(0,r.yg)("a",{parentName:"li",href:"https://docs.dhis2.org/en/develop/using-the-api/dhis-core-version-master/tracker.html"},"DHIS2 API documentation"),"\nfor details."),(0,r.yg)("li",{parentName:"ul"},"For ",(0,r.yg)("strong",{parentName:"li"},"old tracker versions")," and DHIS2 API versions ",(0,r.yg)("strong",{parentName:"li"},"prior to 2.42"),", use\n",(0,r.yg)("strong",{parentName:"li"},"adaptor 5.0+"),". But we highly recommend upgrading to the latest version.")),(0,r.yg)("hr",null),(0,r.yg)("h2",{id:"configuration"},"Configuration"),(0,r.yg)("p",null,"All required and optional properties for ",(0,r.yg)("inlineCode",{parentName:"p"},"state.configuration")," are defined in\nthe official\n",(0,r.yg)("a",{parentName:"p",href:"https://docs.openfn.org/adaptors/packages/dhis2-configuration-schema/"},"configuration-schema"),"."),(0,r.yg)("p",null,"Ensure you configure:"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("strong",{parentName:"li"},"Username"),": DHIS2 admin username"),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("strong",{parentName:"li"},"Password"),": Corresponding DHIS2 admin password"),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("strong",{parentName:"li"},"Host URL"),": URL of the DHIS2 instance")),(0,r.yg)("p",null,"Example configuration:"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-json"},'{\n  "username": "admin",\n  "password": "district",\n  "hostUrl": "https://play.dhis2.org/2.36.6"\n}\n')),(0,r.yg)("hr",null),(0,r.yg)("h2",{id:"helper-functions"},"Helper Functions"),(0,r.yg)("p",null,"Helper functions simplify common DHIS2 operations. View the\n",(0,r.yg)("a",{parentName:"p",href:"https://docs.openfn.org/adaptors/packages/dhis2-docs"},"complete function documentation"),"."),(0,r.yg)("h2",{id:"development"},"Development"),(0,r.yg)("h3",{id:"running-tests"},"Running Tests"),(0,r.yg)("p",null,"To run unit and integration tests, use the following commands:"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("strong",{parentName:"li"},"Unit Tests"),": ",(0,r.yg)("inlineCode",{parentName:"li"},"pnpm test")),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("strong",{parentName:"li"},"Integration Tests"),": ",(0,r.yg)("inlineCode",{parentName:"li"},"pnpm test:integration"))),(0,r.yg)("p",null,(0,r.yg)("em",{parentName:"p"},"Note: Integration tests depend on a live DHIS2 instance.")),(0,r.yg)("h3",{id:"unit-tests"},"Unit Tests"),(0,r.yg)("p",null,"Unit tests validate helper functions independently. For example:"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},"Does ",(0,r.yg)("inlineCode",{parentName:"li"},"create('events', payload)")," perform a correct POST request?")),(0,r.yg)("p",null,"Add new unit tests whenever helper functions are updated."),(0,r.yg)("h3",{id:"integration-tests"},"Integration Tests"),(0,r.yg)("p",null,"Integration tests validate end-to-end behavior with a live DHIS2 instance.\nEnsure your test environment includes:"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},"At least one ",(0,r.yg)("strong",{parentName:"li"},"organisation unit"),"."),(0,r.yg)("li",{parentName:"ul"},"One ",(0,r.yg)("strong",{parentName:"li"},"program")," and a corresponding ",(0,r.yg)("strong",{parentName:"li"},"program stage"),"."),(0,r.yg)("li",{parentName:"ul"},"A ",(0,r.yg)("strong",{parentName:"li"},"tracked entity instance")," enrolled in the program.")),(0,r.yg)("p",null,"Modify ",(0,r.yg)("inlineCode",{parentName:"p"},"globalState")," in ",(0,r.yg)("inlineCode",{parentName:"p"},"test/integration.js")," as needed:"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-javascript"},"before(done => {\n  fixture.initialState = {\n    configuration: {\n      username: 'admin',\n      password: 'district',\n      hostUrl: 'https://play.dhis2.org/2.36.6',\n    },\n    program: 'IpHINAT79UW',\n    orgUnit: 'DiszpKrYNg8',\n    trackedEntityInstance: 'uhubxsfLanV',\n    programStage: 'eaDHS084uMp',\n  };\n  done();\n});\n")),(0,r.yg)("h3",{id:"troubleshooting-tests"},"Troubleshooting Tests"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("strong",{parentName:"li"},"Timeout Errors"),": Increase the global timeout in ",(0,r.yg)("inlineCode",{parentName:"li"},"test/mocha.opts"),"."),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("strong",{parentName:"li"},"Environment Issues"),": Ensure DHIS2 components (programs, org units, etc.)\nare correctly configured.")),(0,r.yg)("hr",null),(0,r.yg)("p",null,"For further technical details, see the\n",(0,r.yg)("a",{parentName:"p",href:"https://docs.openfn.org/adaptors/packages/dhis2-docs"},"documentation")," or contact\nthe ",(0,r.yg)("a",{parentName:"p",href:"https://community.openfn.org"},"OpenFn community"),"."))}u.isMDXComponent=!0},15680:(e,t,n)=>{n.d(t,{xA:()=>g,yg:()=>c});var a=n(96540);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=a.createContext({}),p=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},g=function(e){var t=p(e.components);return a.createElement(l.Provider,{value:t},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,l=e.parentName,g=s(e,["components","mdxType","originalType","parentName"]),d=p(n),m=r,c=d["".concat(l,".").concat(m)]||d[m]||u[m]||o;return n?a.createElement(c,i(i({ref:t},g),{},{components:n})):a.createElement(c,i({ref:t},g))}));function c(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=m;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[d]="string"==typeof e?e:r,i[1]=s;for(var p=2;p<o;p++)i[p]=n[p];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"}}]);