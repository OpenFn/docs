"use strict";(self.webpackChunk_openfn_docs=self.webpackChunk_openfn_docs||[]).push([[73765],{42614:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>d,frontMatter:()=>o,metadata:()=>p,toc:()=>c});var n=r(58168),a=(r(96540),r(15680));const o={title:"bigquery developer readme",id:"bigquery-readme",keywords:["adaptor","readme","bigquery"]},i="bigquery Adaptor developer README.md",p={unversionedId:"packages/bigquery-readme",id:"packages/bigquery-readme",title:"bigquery developer readme",description:"Source//github.com/OpenFn/adaptors/tree/main/packages/bigquery",source:"@site/adaptors/packages/bigquery-readme.md",sourceDirName:"packages",slug:"/packages/bigquery-readme",permalink:"/adaptors/packages/bigquery-readme",draft:!1,tags:[],version:"current",frontMatter:{title:"bigquery developer readme",id:"bigquery-readme",keywords:["adaptor","readme","bigquery"]},sidebar:"adaptors",previous:{title:"bigquery changelog",permalink:"/adaptors/packages/bigquery-changelog"},next:{title:"cartodb@0.4.10",permalink:"/adaptors/packages/cartodb-docs"}},s={},c=[{value:"Documentation",id:"documentation",level:2},{value:"state.json",id:"statejson",level:3},{value:"operations (expression.js)",id:"operations-expressionjs",level:3},{value:"load(...)",id:"load",level:4},{value:"Development",id:"development",level:2}],l={toc:c},u="wrapper";function d(e){let{components:t,...r}=e;return(0,a.yg)(u,(0,n.A)({},l,r,{components:t,mdxType:"MDXLayout"}),(0,a.yg)("h1",{id:"bigquery-adaptor-developer-readmemd"},"bigquery Adaptor developer README.md"),(0,a.yg)("p",null,"Source: ",(0,a.yg)("a",{parentName:"p",href:"https://github.com/OpenFn/adaptors/tree/main/packages/bigquery"},"https://github.com/OpenFn/adaptors/tree/main/packages/bigquery")),(0,a.yg)("h1",{id:"language-bigquery"},"Language BigQuery"),(0,a.yg)("p",null,"Language Pack for building expressions and operations to make HTTP calls."),(0,a.yg)("h2",{id:"documentation"},"Documentation"),(0,a.yg)("h3",{id:"statejson"},"state.json"),(0,a.yg)("p",null,"The configuration key must be a valid GCP credential as JSON."),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-json"},'{\n  "configuration": {\n    "type": "service_account",\n    "project_id": "some-project",\n    "private_key_id": "670b9e3c8c366e83aa569dd57cbfc5c575b72e42",\n    "private_key": "-----BEGIN PRIVATE KEY-----\\nblah\\nmoreblah=\\n-----END PRIVATE KEY-----\\n",\n    "client_email": "bigquery@some-project.iam.gserviceaccount.com",\n    "client_id": "someid",\n    "auth_uri": "https://accounts.google.com/o/oauth2/auth",\n    "token_uri": "https://oauth2.googleapis.com/token",\n    "auth_provider_x509_cert_url": "https://www.googleapis.com/oauth2/v1/certs",\n    "client_x509_cert_url": "https://www.googleapis.com/robot/v1/metadata/x509/bigquery%40some-project.iam.gserviceaccount.com"\n  },\n  "data": { "a": 1 }\n}\n')),(0,a.yg)("h3",{id:"operations-expressionjs"},"operations (expression.js)"),(0,a.yg)("h4",{id:"load"},"load(...)"),(0,a.yg)("p",null,"Load data to a table in bigquery from a CSV. See full\n",(0,a.yg)("a",{parentName:"p",href:"https://cloud.google.com/bigquery/docs/reference/rest/v2/Job#JobConfigurationLoad"},"options here"),"."),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-js"},"load(\n  '/home/taylor/Desktop/type-C_r-ALL_ps-201012_freq-M_px-HS_pub-20200731_fmt-csv_ex-20200818.csv',\n  'awesome-solutions-project', // project\n  'test01', // dataset\n  'mytable', // table\n  {\n    schema:\n      'classification:STRING,year:STRING,period:STRING,period_desc:STRING,aggregate_level:STRING,is_leaf_code:STRING,trade_flow_code:STRING,trade_flow:STRING,reporter_code:STRING,reporter:STRING,reporter_iso:STRING,partner_code:STRING,partner:STRING,partner_iso:STRING,commodity_code:STRING,commodity:STRING,qty_unit_code:STRING,qty_unit:STRING,qty:INTEGER,netweight_kg:INTEGER,trade_value:INTEGER,flag:STRING',\n    schemaUpdateOptions: ['ALLOW_FIELD_ADDITION'],\n    // createDisposition: 'CREATE_IF_NEEDED',\n    writeDisposition: 'WRITE_APPEND',\n    skipLeadingRows: 1,\n  } // loadOptions\n);\n")),(0,a.yg)("h2",{id:"development"},"Development"),(0,a.yg)("p",null,"Clone the ",(0,a.yg)("a",{parentName:"p",href:"https://github.com/OpenFn/adaptors"},"adaptors monorepo"),". Follow the\n",(0,a.yg)("inlineCode",{parentName:"p"},"Getting Started")," guide inside to get set up."),(0,a.yg)("p",null,"Run tests using ",(0,a.yg)("inlineCode",{parentName:"p"},"pnpm run test")," or ",(0,a.yg)("inlineCode",{parentName:"p"},"pnpm run test:watch")),(0,a.yg)("p",null,"Build the project using ",(0,a.yg)("inlineCode",{parentName:"p"},"pnpm build"),"."),(0,a.yg)("p",null,"To just build the docs run ",(0,a.yg)("inlineCode",{parentName:"p"},"pnpm build docs")))}d.isMDXComponent=!0},15680:(e,t,r)=>{r.d(t,{xA:()=>l,yg:()=>m});var n=r(96540);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function p(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=n.createContext({}),c=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},l=function(e){var t=c(e.components);return n.createElement(s.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},g=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,l=p(e,["components","mdxType","originalType","parentName"]),u=c(r),g=a,m=u["".concat(s,".").concat(g)]||u[g]||d[g]||o;return r?n.createElement(m,i(i({ref:t},l),{},{components:r})):n.createElement(m,i({ref:t},l))}));function m(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=g;var p={};for(var s in t)hasOwnProperty.call(t,s)&&(p[s]=t[s]);p.originalType=e,p[u]="string"==typeof e?e:a,i[1]=p;for(var c=2;c<o;c++)i[c]=r[c];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}g.displayName="MDXCreateElement"}}]);