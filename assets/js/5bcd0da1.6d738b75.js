"use strict";(self.webpackChunk_openfn_docs=self.webpackChunk_openfn_docs||[]).push([[45452],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>g});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function p(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=n.createContext({}),s=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},c=function(e){var t=s(e.components);return n.createElement(l.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,c=p(e,["components","mdxType","originalType","parentName"]),u=s(r),m=a,g=u["".concat(l,".").concat(m)]||u[m]||d[m]||o;return r?n.createElement(g,i(i({ref:t},c),{},{components:r})):n.createElement(g,i({ref:t},c))}));function g(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=m;var p={};for(var l in t)hasOwnProperty.call(t,l)&&(p[l]=t[l]);p.originalType=e,p[u]="string"==typeof e?e:a,i[1]=p;for(var s=2;s<o;s++)i[s]=r[s];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},98690:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>u,frontMatter:()=>o,metadata:()=>p,toc:()=>s});var n=r(87462),a=(r(67294),r(3905));const o={title:"bigquery developer readme",id:"bigquery-readme",keywords:["adaptor","readme","bigquery"]},i="Developer README for the bigquery adaptor",p={unversionedId:"packages/bigquery-readme",id:"packages/bigquery-readme",title:"bigquery developer readme",description:"Source//github.com/OpenFn/adaptors/tree/main/packages/bigquery",source:"@site/adaptors/packages/bigquery-readme.md",sourceDirName:"packages",slug:"/packages/bigquery-readme",permalink:"/adaptors/packages/bigquery-readme",draft:!1,tags:[],version:"current",frontMatter:{title:"bigquery developer readme",id:"bigquery-readme",keywords:["adaptor","readme","bigquery"]},sidebar:"adaptors",previous:{title:"bigquery changelog",permalink:"/adaptors/packages/bigquery-changelog"},next:{title:"Community Health Toolkit",permalink:"/adaptors/cht"}},l={},s=[{value:"Documentation",id:"documentation",level:2},{value:"state.json",id:"statejson",level:3},{value:"operations (expression.js)",id:"operations-expressionjs",level:3},{value:"load(...)",id:"load",level:4},{value:"Development",id:"development",level:2}],c={toc:s};function u(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,n.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"developer-readme-for-the-bigquery-adaptor"},"Developer README for the bigquery adaptor"),(0,a.kt)("p",null,"Source: ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/OpenFn/adaptors/tree/main/packages/bigquery"},"https://github.com/OpenFn/adaptors/tree/main/packages/bigquery")),(0,a.kt)("h1",{id:"language-bigquery"},"Language BigQuery"),(0,a.kt)("p",null,"Language Pack for building expressions and operations to make HTTP calls."),(0,a.kt)("h2",{id:"documentation"},"Documentation"),(0,a.kt)("h3",{id:"statejson"},"state.json"),(0,a.kt)("p",null,"The configuration key must be a valid GCP credential as JSON."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "configuration": {\n    "type": "service_account",\n    "project_id": "some-project",\n    "private_key_id": "670b9e3c8c366e83aa569dd57cbfc5c575b72e42",\n    "private_key": "-----BEGIN PRIVATE KEY-----\\nblah\\nmoreblah=\\n-----END PRIVATE KEY-----\\n",\n    "client_email": "bigquery@some-project.iam.gserviceaccount.com",\n    "client_id": "someid",\n    "auth_uri": "https://accounts.google.com/o/oauth2/auth",\n    "token_uri": "https://oauth2.googleapis.com/token",\n    "auth_provider_x509_cert_url": "https://www.googleapis.com/oauth2/v1/certs",\n    "client_x509_cert_url": "https://www.googleapis.com/robot/v1/metadata/x509/bigquery%40some-project.iam.gserviceaccount.com"\n  },\n  "data": { "a": 1 }\n}\n')),(0,a.kt)("h3",{id:"operations-expressionjs"},"operations (expression.js)"),(0,a.kt)("h4",{id:"load"},"load(...)"),(0,a.kt)("p",null,"Load data to a table in bigquery from a CSV. See full\n",(0,a.kt)("a",{parentName:"p",href:"https://cloud.google.com/bigquery/docs/reference/rest/v2/Job#JobConfigurationLoad"},"options here"),"."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"load(\n  '/home/taylor/Desktop/type-C_r-ALL_ps-201012_freq-M_px-HS_pub-20200731_fmt-csv_ex-20200818.csv',\n  'awesome-solutions-project', // project\n  'test01', // dataset\n  'mytable', // table\n  {\n    schema:\n      'classification:STRING,year:STRING,period:STRING,period_desc:STRING,aggregate_level:STRING,is_leaf_code:STRING,trade_flow_code:STRING,trade_flow:STRING,reporter_code:STRING,reporter:STRING,reporter_iso:STRING,partner_code:STRING,partner:STRING,partner_iso:STRING,commodity_code:STRING,commodity:STRING,qty_unit_code:STRING,qty_unit:STRING,qty:INTEGER,netweight_kg:INTEGER,trade_value:INTEGER,flag:STRING',\n    schemaUpdateOptions: ['ALLOW_FIELD_ADDITION'],\n    // createDisposition: 'CREATE_IF_NEEDED',\n    writeDisposition: 'WRITE_APPEND',\n    skipLeadingRows: 1,\n  } // loadOptions\n);\n")),(0,a.kt)("h2",{id:"development"},"Development"),(0,a.kt)("p",null,"Clone the ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/OpenFn/adaptors"},"adaptors monorepo"),". Follow the\n",(0,a.kt)("inlineCode",{parentName:"p"},"Getting Started")," guide inside to get set up."),(0,a.kt)("p",null,"Run tests using ",(0,a.kt)("inlineCode",{parentName:"p"},"pnpm run test")," or ",(0,a.kt)("inlineCode",{parentName:"p"},"pnpm run test:watch")),(0,a.kt)("p",null,"Build the project using ",(0,a.kt)("inlineCode",{parentName:"p"},"pnpm build"),"."),(0,a.kt)("p",null,"To just build the docs run ",(0,a.kt)("inlineCode",{parentName:"p"},"pnpm build docs")))}u.isMDXComponent=!0}}]);