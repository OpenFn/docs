"use strict";(self.webpackChunk_openfn_docs=self.webpackChunk_openfn_docs||[]).push([[76660],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>g});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var i=a.createContext({}),p=function(e){var t=a.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},u=function(e){var t=p(e.components);return a.createElement(i.Provider,{value:t},e.children)},d="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},c=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,i=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),d=p(n),c=r,g=d["".concat(i,".").concat(c)]||d[c]||m[c]||o;return n?a.createElement(g,l(l({ref:t},u),{},{components:n})):a.createElement(g,l({ref:t},u))}));function g(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,l=new Array(o);l[0]=c;var s={};for(var i in t)hasOwnProperty.call(t,i)&&(s[i]=t[i]);s.originalType=e,s[d]="string"==typeof e?e:r,l[1]=s;for(var p=2;p<o;p++)l[p]=n[p];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}c.displayName="MDXCreateElement"},240:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>i,contentTitle:()=>l,default:()=>d,frontMatter:()=>o,metadata:()=>s,toc:()=>p});var a=n(87462),r=(n(67294),n(3905));const o={title:"mysql developer readme",id:"mysql-readme",keywords:["adaptor","readme","mysql"]},l="Developer README for the mysql adaptor",s={unversionedId:"packages/mysql-readme",id:"packages/mysql-readme",title:"mysql developer readme",description:"Source//github.com/OpenFn/adaptors/tree/main/packages/mysql",source:"@site/adaptors/packages/mysql-readme.md",sourceDirName:"packages",slug:"/packages/mysql-readme",permalink:"/adaptors/packages/mysql-readme",draft:!1,tags:[],version:"current",frontMatter:{title:"mysql developer readme",id:"mysql-readme",keywords:["adaptor","readme","mysql"]},sidebar:"adaptors",previous:{title:"mysql changelog",permalink:"/adaptors/packages/mysql-changelog"},next:{title:"nexmo@0.2.0",permalink:"/adaptors/packages/nexmo-docs"}},i={},p=[{value:"Documentation",id:"documentation",level:2},{value:"sample configuration",id:"sample-configuration",level:2},{value:"Execute a query",id:"execute-a-query",level:2},{value:"Execute a sql query",id:"execute-a-sql-query",level:2},{value:"Insert a single record",id:"insert-a-single-record",level:2},{value:"Insert or update a single record",id:"insert-or-update-a-single-record",level:2},{value:"Upsert many records",id:"upsert-many-records",level:2},{value:"Development",id:"development",level:2}],u={toc:p};function d(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"developer-readme-for-the-mysql-adaptor"},"Developer README for the mysql adaptor"),(0,r.kt)("p",null,"Source: ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/OpenFn/adaptors/tree/main/packages/mysql"},"https://github.com/OpenFn/adaptors/tree/main/packages/mysql")),(0,r.kt)("h1",{id:"language-mysql"},"Language MySQL"),(0,r.kt)("p",null,"Language Pack for building expressions and operations to run MySQL queries."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"See\n",(0,r.kt)("a",{parentName:"strong",href:"https://github.com/OpenFn/language-mysql/blob/master/src/Adaptor.js"},(0,r.kt)("inlineCode",{parentName:"a"},"src/Adaptor.js")),"\nfor the full list of available helper functions including ",(0,r.kt)("inlineCode",{parentName:"strong"},"upsert(...)"),".")),(0,r.kt)("h2",{id:"documentation"},"Documentation"),(0,r.kt)("h2",{id:"sample-configuration"},"sample configuration"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "host": "some-host-url.compute-1.amazonaws.com",\n  "port": "3306",\n  "database": "wouldntyouliketoknow",\n  "user": "me",\n  "password": "noway"\n}\n')),(0,r.kt)("h2",{id:"execute-a-query"},"Execute a query"),(0,r.kt)("p",null,"Execute an sql query with the node mysql package."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"query({\n  sql: state => {\n    return `select * from ${state.data.table} where id = ?;`;\n  },\n  timeout: 4000,\n  values: ['007'],\n});\n")),(0,r.kt)("h2",{id:"execute-a-sql-query"},"Execute a sql query"),(0,r.kt)("p",null,"This function takes either a ",(0,r.kt)("inlineCode",{parentName:"p"},"string")," or a ",(0,r.kt)("inlineCode",{parentName:"p"},"function")," that takes states and\nreturns a string."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"sqlString(state => {\n  return (\n    `INSERT INTO untitled_table (name, the_geom) VALUES ('` +\n    state.data.version +\n    `', ` +\n    dataValue('form.Choix_tache')(state) +\n    `)`\n  );\n});\n")),(0,r.kt)("h2",{id:"insert-a-single-record"},"Insert a single record"),(0,r.kt)("p",null,"This function is used to insert a single record in a MySQL database."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"insert(\n  'some_table',\n  fields(\n    field('firstname', dataValue('form.patient_firstname')),\n    field('lastname', dataValue('form.patient_lastname'))\n  )\n);\n")),(0,r.kt)("h2",{id:"insert-or-update-a-single-record"},"Insert or update a single record"),(0,r.kt)("p",null,"This function is used to insert a single record in a MySQL database or update it\nif there is a match."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"upsert(\n  'some_table',\n  fields(\n    field('firstname', dataValue('form.patient_firstname')),\n    field('lastname', dataValue('form.patient_lastname'))\n  )\n);\n")),(0,r.kt)("h2",{id:"upsert-many-records"},"Upsert many records"),(0,r.kt)("p",null,"This function allows the upsert of a set of records inside a table all at once."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"upsertMany(\n  'users', // the DB table\n  [\n    { name: 'one', email: 'one@openfn.org' },\n    { name: 'two', email: 'two@openfn.org' },\n  ]\n);\n")),(0,r.kt)("p",null,"or"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"upsertMany('users', state =>\n  state.data.users.map(user => {\n    name: user['name'],\n    email: user['email']\n  })\n);\n")),(0,r.kt)("h2",{id:"development"},"Development"),(0,r.kt)("p",null,"Clone the ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/OpenFn/adaptors"},"adaptors monorepo"),". Follow the\n",(0,r.kt)("inlineCode",{parentName:"p"},"Getting Started")," guide inside to get set up."),(0,r.kt)("p",null,"Run tests using ",(0,r.kt)("inlineCode",{parentName:"p"},"pnpm run test")," or ",(0,r.kt)("inlineCode",{parentName:"p"},"pnpm run test:watch")),(0,r.kt)("p",null,"Build the project using ",(0,r.kt)("inlineCode",{parentName:"p"},"pnpm build"),"."),(0,r.kt)("p",null,"To just build the docs run ",(0,r.kt)("inlineCode",{parentName:"p"},"pnpm build docs")))}d.isMDXComponent=!0}}]);