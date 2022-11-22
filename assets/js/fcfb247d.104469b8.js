"use strict";(self.webpackChunk_openfn_docs=self.webpackChunk_openfn_docs||[]).push([[78082],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>m});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},s=Object.keys(e);for(a=0;a<s.length;a++)n=s[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(a=0;a<s.length;a++)n=s[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var i=a.createContext({}),u=function(e){var t=a.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=u(e.components);return a.createElement(i.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},c=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,s=e.originalType,i=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),c=u(n),m=r,g=c["".concat(i,".").concat(m)]||c[m]||d[m]||s;return n?a.createElement(g,o(o({ref:t},p),{},{components:n})):a.createElement(g,o({ref:t},p))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var s=n.length,o=new Array(s);o[0]=c;var l={};for(var i in t)hasOwnProperty.call(t,i)&&(l[i]=t[i]);l.originalType=e,l.mdxType="string"==typeof e?e:r,o[1]=l;for(var u=2;u<s;u++)o[u]=n[u];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}c.displayName="MDXCreateElement"},21458:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>i,contentTitle:()=>o,default:()=>d,frontMatter:()=>s,metadata:()=>l,toc:()=>u});var a=n(87462),r=(n(67294),n(3905));const s={title:"postgresql developer readme",id:"postgresql-readme",keywords:["adaptor","readme","postgresql"]},o="Developer README for the postgresql adaptor",l={unversionedId:"packages/postgresql-readme",id:"packages/postgresql-readme",title:"postgresql developer readme",description:"Source//github.com/OpenFn/adaptors/tree/main/packages/postgresql",source:"@site/adaptors/packages/postgresql-readme.md",sourceDirName:"packages",slug:"/packages/postgresql-readme",permalink:"/adaptors/packages/postgresql-readme",draft:!1,tags:[],version:"current",frontMatter:{title:"postgresql developer readme",id:"postgresql-readme",keywords:["adaptor","readme","postgresql"]},sidebar:"library",previous:{title:"postgresql changelog",permalink:"/adaptors/packages/postgresql-changelog"},next:{title:"primero@2.10.2",permalink:"/adaptors/packages/primero-docs"}},i={},u=[{value:"Documentation",id:"documentation",level:2},{value:"required configuration for Heroku postgres",id:"required-configuration-for-heroku-postgres",level:2},{value:"<code>sql(query)</code>",id:"sqlquery",level:2},{value:"sample usage",id:"sample-usage",level:4},{value:"Find a single value for a table",id:"find-a-single-value-for-a-table",level:2},{value:"Insert a single record",id:"insert-a-single-record",level:2},{value:"Insert or Update using a unique column as a key",id:"insert-or-update-using-a-unique-column-as-a-key",level:2},{value:"Insert or Update if a value exist in the record",id:"insert-or-update-if-a-value-exist-in-the-record",level:2},{value:"Insert many records in postgresql",id:"insert-many-records-in-postgresql",level:2},{value:"Upsert many records in postgresql",id:"upsert-many-records-in-postgresql",level:2},{value:"Describe a table from postgres",id:"describe-a-table-from-postgres",level:2},{value:"Create a table in the database",id:"create-a-table-in-the-database",level:2},{value:"Alter a table in the database",id:"alter-a-table-in-the-database",level:2},{value:"Development",id:"development",level:2}],p={toc:u};function d(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"developer-readme-for-the-postgresql-adaptor"},"Developer README for the postgresql adaptor"),(0,r.kt)("p",null,"Source: ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/OpenFn/adaptors/tree/main/packages/postgresql"},"https://github.com/OpenFn/adaptors/tree/main/packages/postgresql")),(0,r.kt)("h1",{id:"language-postgresql"},"Language PostgreSQL"),(0,r.kt)("p",null,"Language Pack for building expressions and operations to run PostgreSQL queries."),(0,r.kt)("h2",{id:"documentation"},"Documentation"),(0,r.kt)("h2",{id:"required-configuration-for-heroku-postgres"},"required configuration for Heroku postgres"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "host": "some-host-url.compute-1.amazonaws.com",\n  "port": "5432",\n  "database": "wouldntyouliketoknow",\n  "user": "me",\n  "password": "noway",\n  "ssl": true,\n  "allowSelfSignedCert": true\n}\n')),(0,r.kt)("h2",{id:"sqlquery"},(0,r.kt)("inlineCode",{parentName:"h2"},"sql(query)")),(0,r.kt)("p",null,"Execute an sql query. An option can be added to either log the query or not and\neither execute the query or no. The options can be omitted as well."),(0,r.kt)("h4",{id:"sample-usage"},"sample usage"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"sql(\n  state =>\n    `INSERT INTO untitled_table (name, the_geom) VALUES ('` +\n    dataValue('form.first_name')(state) +\n    `', ST_SetSRID(ST_Point(` +\n    dataValue('lat')(state) +\n    `, ` +\n    dataValue('long')(state) +\n    `),4326))`,\n  { writeSql: true, execute: true }\n);\n")),(0,r.kt)("h2",{id:"find-a-single-value-for-a-table"},"Find a single value for a table"),(0,r.kt)("p",null,"This helper function allows to build a specific query where ",(0,r.kt)("inlineCode",{parentName:"p"},"sql")," would not be\nbest suited. It returns a single value and not a promise. An example of usage\nwould be in building a mapping object with a value from a lookup table."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"alterState(async state => {\n  const user = {\n    id: 1,\n    name: 'Mamadou',\n    user_id: await findValue({\n      uuid: 'id',\n      relation: 'users',\n      where: { first_name: 'Mama%' },\n      operator: { first_name: 'like' }, // operator is optional. \"=\" is used by default.\n    })(state),\n  };\n\n  return upsert(...)(state);\n});\n")),(0,r.kt)("h2",{id:"insert-a-single-record"},"Insert a single record"),(0,r.kt)("p",null,"This functions is used to insert a single record in postgres database. An option\n",(0,r.kt)("inlineCode",{parentName:"p"},"writeSql")," allows to log the generated sql query. The ",(0,r.kt)("inlineCode",{parentName:"p"},"setNull")," option allows to\nreplace the specified elements with ",(0,r.kt)("inlineCode",{parentName:"p"},"NULL"),"."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"insert(\n  'users',\n  {\n    email: 'antony@gmail.com',\n    first_name: 'Antony',\n    inserted_at: '2020-08-27 00:00:00',\n    updated_at: '2020-08-27 00:00:00',\n  },\n  { setNull: [\"''\", \"'undefined'\"], writeSql: true, logValues: true }\n);\n")),(0,r.kt)("h2",{id:"insert-or-update-using-a-unique-column-as-a-key"},"Insert or Update using a unique column as a key"),(0,r.kt)("p",null,"Insert or Update if matched. An option, ",(0,r.kt)("inlineCode",{parentName:"p"},"execute"),", allows to either run the\ngenerated query or no."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"upsert(\n  'users',\n  'email',\n  {\n    email: 'luca@openfn.org',\n    first_name: 'Luca',\n    inserted_at: '2010-01-01 00:00:00',\n    updated_at: '2010-01-01 00:00:00',\n  },\n  {\n    setNull: [\"'NaN'\", \"'undefined'\"],\n    writeSql: false,\n    execute: true,\n    logValues: true,\n  }\n);\n")),(0,r.kt)("h2",{id:"insert-or-update-if-a-value-exist-in-the-record"},"Insert or Update if a value exist in the record"),(0,r.kt)("p",null,"This function will upsert a record only if the logical given is true. In this\ncase we check if ",(0,r.kt)("inlineCode",{parentName:"p"},"dataValue('name')")," exists."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"upsertIf(dataValue('name'), 'users', 'ON CONSTRAINT users_pkey', {\n  name: 'Elodie',\n  id: 7,\n});\n")),(0,r.kt)("h2",{id:"insert-many-records-in-postgresql"},"Insert many records in postgresql"),(0,r.kt)("p",null,"This function allows the insert of a set of records inside a table all at once."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"insertMany(\n  'users',\n  state =>\n    state.data.people.map(s => {\n      return {\n        first_name: ['Luca', 'Mohamed', 'Elodie'],\n        inserted_at: '2020-01-01 00:00:00',\n        updated_at: '2020-01-01 00:00:00',\n      };\n    }),\n  { logValues: true }\n);\n")),(0,r.kt)("h2",{id:"upsert-many-records-in-postgresql"},"Upsert many records in postgresql"),(0,r.kt)("p",null,"This function allows the upsert of a set of records inside a table all at once."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"upsertMany('users', 'ON CONSTRAINT users_pkey', state =>\n  state.data.people.map(s => {\n    return {\n      first_name: ['Luca', 'Mohamed', 'Elodie'],\n      inserted_at: '2020-01-01 00:00:00',\n      updated_at: '2020-01-01 00:00:00',\n    };\n  })\n);\n")),(0,r.kt)("h2",{id:"describe-a-table-from-postgres"},"Describe a table from postgres"),(0,r.kt)("p",null,"This function is used to fetch the list of columns of a given table in the\ndatabase."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"describeTable('users', { writeSql: true, execute: false });\n")),(0,r.kt)("h2",{id:"create-a-table-in-the-database"},"Create a table in the database"),(0,r.kt)("p",null,"This function allows to create a table in a database from a given array of\ncolumns. The key ",(0,r.kt)("inlineCode",{parentName:"p"},"identity")," can be use for a column to auto-generate a value."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"insertTable('users', state =>\n  state.data.map(column => ({\n    name: column.name,\n    type: column.type,\n    required: true, // optional\n    unique: false, // optional - set to true for unique constraint\n  }))\n);\n")),(0,r.kt)("h2",{id:"alter-a-table-in-the-database"},"Alter a table in the database"),(0,r.kt)("p",null,"This function allows to add new columns to a table. Beware of the fact that you\ncannot add new columns with names that already exist in the table."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"modifyTable(\n  'users',\n  state =>\n    state.data.map(newColumn => ({\n      name: newColumn.name,\n      type: newColumn.type,\n      required: true, // optional\n      unique: false, // optional - set to true for unique constraint\n    })),\n  { writeSql: false, execute: true }\n);\n")),(0,r.kt)("h2",{id:"development"},"Development"),(0,r.kt)("p",null,"Clone the ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/OpenFn/adaptors"},"adaptors monorepo"),". Follow the\n",(0,r.kt)("inlineCode",{parentName:"p"},"Getting Started")," guide inside to get set up."),(0,r.kt)("p",null,"Run tests using ",(0,r.kt)("inlineCode",{parentName:"p"},"pnpm run test")," or ",(0,r.kt)("inlineCode",{parentName:"p"},"pnpm run test:watch")),(0,r.kt)("p",null,"Build the project using ",(0,r.kt)("inlineCode",{parentName:"p"},"pnpm build"),"."),(0,r.kt)("p",null,"To just build the docs run ",(0,r.kt)("inlineCode",{parentName:"p"},"pnpm build docs")))}d.isMDXComponent=!0}}]);