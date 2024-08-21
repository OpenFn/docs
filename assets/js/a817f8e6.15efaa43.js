"use strict";(self.webpackChunk_openfn_docs=self.webpackChunk_openfn_docs||[]).push([[83071],{31505:(e,a,t)=>{t.r(a),t.d(a,{assets:()=>i,contentTitle:()=>p,default:()=>g,frontMatter:()=>o,metadata:()=>s,toc:()=>l});var n=t(58168),r=(t(96540),t(15680));const o={title:"azure-storage developer readme",id:"azure-storage-readme",keywords:["adaptor","readme","azure-storage"]},p="azure-storage Adaptor developer README.md",s={unversionedId:"packages/azure-storage-readme",id:"packages/azure-storage-readme",title:"azure-storage developer readme",description:"Source//github.com/OpenFn/adaptors/tree/main/packages/azure-storage",source:"@site/adaptors/packages/azure-storage-readme.md",sourceDirName:"packages",slug:"/packages/azure-storage-readme",permalink:"/adaptors/packages/azure-storage-readme",draft:!1,tags:[],version:"current",frontMatter:{title:"azure-storage developer readme",id:"azure-storage-readme",keywords:["adaptor","readme","azure-storage"]},sidebar:"adaptors",previous:{title:"azure-storage changelog",permalink:"/adaptors/packages/azure-storage-changelog"},next:{title:"beyonic@0.3.3",permalink:"/adaptors/packages/beyonic-docs"}},i={},l=[{value:"Documentation",id:"documentation",level:2},{value:"Configuration",id:"configuration",level:3},{value:"An example showing multiple capabilties of this adaptor",id:"an-example-showing-multiple-capabilties-of-this-adaptor",level:3},{value:"Development",id:"development",level:2}],u={toc:l},c="wrapper";function g(e){let{components:a,...t}=e;return(0,r.yg)(c,(0,n.A)({},u,t,{components:a,mdxType:"MDXLayout"}),(0,r.yg)("h1",{id:"azure-storage-adaptor-developer-readmemd"},"azure-storage Adaptor developer README.md"),(0,r.yg)("p",null,"Source: ",(0,r.yg)("a",{parentName:"p",href:"https://github.com/OpenFn/adaptors/tree/main/packages/azure-storage"},"https://github.com/OpenFn/adaptors/tree/main/packages/azure-storage")),(0,r.yg)("h1",{id:"language-azure-storage-"},"language-azure-storage ",(0,r.yg)("img",{src:"assets/square.png",width:"30",height:"30"})),(0,r.yg)("p",null,"An OpenFn ",(0,r.yg)("strong",{parentName:"p"},(0,r.yg)("em",{parentName:"strong"},"adaptor"))," for building integration jobs for use with the Azure\nStorage APIs. At present, this adaptor only supports the Azure Blob Storage,\nAPI, but could be expanded for future Azure Storage services (e.g., Files,\nTables, Queues, etc.)."),(0,r.yg)("h2",{id:"documentation"},"Documentation"),(0,r.yg)("p",null,"View the ",(0,r.yg)("a",{parentName:"p",href:"https://docs.openfn.org/adaptors/packages/azure-storage-docs"},"docs site"),"\nfor full technical documentation."),(0,r.yg)("h3",{id:"configuration"},"Configuration"),(0,r.yg)("p",null,"View the\n",(0,r.yg)("a",{parentName:"p",href:"https://docs.openfn.org/adaptors/packages/azure-storage-configuration-schema/"},"configuration-schema"),"\nfor required and optional ",(0,r.yg)("inlineCode",{parentName:"p"},"configuration")," properties."),(0,r.yg)("h3",{id:"an-example-showing-multiple-capabilties-of-this-adaptor"},"An example showing multiple capabilties of this adaptor"),(0,r.yg)("p",null,"Assume you have a simple ",(0,r.yg)("inlineCode",{parentName:"p"},"state.json")," file as follows:"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-json"},'{\n  "data": {\n    "foo": "bar",\n    "bif": "baz",\n    "sunday": "monday",\n    "answer": "42"\n  },\n  "configuration": {\n      "accountName": "myaccountname",\n      "accountKey": "myaccountkey",\n      "containerName": "mycontainer"\n  }\n}\n')),(0,r.yg)("p",null,"Create a file ",(0,r.yg)("inlineCode",{parentName:"p"},"job.js"),", as shown below, to run with the OpenFn CLI. This\nexample uploads the blob with a year/month partitioning scheme, then\ndownloads the same blob and fetches the blob properties. It would be extremely\nunusual to perform all of these actions in a single job."),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-js"},"uploadBlob(\n  state => {\n    const date = new Date();\n    const id = '0e82962a-6ed0-4a88-92c1-51ae785b4126';\n    return `${date.getFullYear()}/${date.getMonth() + 1}/${id}.json`;\n  },\n  state.data,\n  {\n    blobHTTPHeaders: { blobContentType: 'application/json' }\n  },\n  { createContainer: true, overwrite: true }\n);\n\ndownloadBlob(\n   dataValue('blobName');\n);\n\ngetBlobProperties(\n state => {\n    return state.references[1].blobName;\n  }\n);\n")),(0,r.yg)("p",null,"Run the job as follows:"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-bash"},"openfn job -a azure-storage -s state.json -O\n")),(0,r.yg)("h2",{id:"development"},"Development"),(0,r.yg)("p",null,"Clone the ",(0,r.yg)("a",{parentName:"p",href:"https://github.com/OpenFn/adaptors"},"adaptors monorepo"),'. Follow the\n"Getting Started" guide inside to get set up.'),(0,r.yg)("p",null,"Run tests using ",(0,r.yg)("inlineCode",{parentName:"p"},"pnpm run test")," or ",(0,r.yg)("inlineCode",{parentName:"p"},"pnpm run test:watch")),(0,r.yg)("p",null,"Build the project using ",(0,r.yg)("inlineCode",{parentName:"p"},"pnpm build"),"."),(0,r.yg)("p",null,"To build ",(0,r.yg)("em",{parentName:"p"},"only")," the docs run ",(0,r.yg)("inlineCode",{parentName:"p"},"pnpm build docs"),"."))}g.isMDXComponent=!0},15680:(e,a,t)=>{t.d(a,{xA:()=>u,yg:()=>m});var n=t(96540);function r(e,a,t){return a in e?Object.defineProperty(e,a,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[a]=t,e}function o(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);a&&(n=n.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,n)}return t}function p(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?o(Object(t),!0).forEach((function(a){r(e,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))}))}return e}function s(e,a){if(null==e)return{};var t,n,r=function(e,a){if(null==e)return{};var t,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)t=o[n],a.indexOf(t)>=0||(r[t]=e[t]);return r}(e,a);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)t=o[n],a.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var i=n.createContext({}),l=function(e){var a=n.useContext(i),t=a;return e&&(t="function"==typeof e?e(a):p(p({},a),e)),t},u=function(e){var a=l(e.components);return n.createElement(i.Provider,{value:a},e.children)},c="mdxType",g={inlineCode:"code",wrapper:function(e){var a=e.children;return n.createElement(n.Fragment,{},a)}},d=n.forwardRef((function(e,a){var t=e.components,r=e.mdxType,o=e.originalType,i=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),c=l(t),d=r,m=c["".concat(i,".").concat(d)]||c[d]||g[d]||o;return t?n.createElement(m,p(p({ref:a},u),{},{components:t})):n.createElement(m,p({ref:a},u))}));function m(e,a){var t=arguments,r=a&&a.mdxType;if("string"==typeof e||r){var o=t.length,p=new Array(o);p[0]=d;var s={};for(var i in a)hasOwnProperty.call(a,i)&&(s[i]=a[i]);s.originalType=e,s[c]="string"==typeof e?e:r,p[1]=s;for(var l=2;l<o;l++)p[l]=t[l];return n.createElement.apply(null,p)}return n.createElement.apply(null,t)}d.displayName="MDXCreateElement"}}]);