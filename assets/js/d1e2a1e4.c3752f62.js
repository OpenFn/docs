"use strict";(self.webpackChunk_openfn_docs=self.webpackChunk_openfn_docs||[]).push([[182],{15680:(e,t,a)=>{a.d(t,{xA:()=>p,yg:()=>m});var n=a(96540);function l(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function g(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){l(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,n,l=function(e,t){if(null==e)return{};var a,n,l={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(l[a]=e[a]);return l}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(l[a]=e[a])}return l}var y=n.createContext({}),u=function(e){var t=n.useContext(y),a=t;return e&&(a="function"==typeof e?e(t):g(g({},t),e)),a},p=function(e){var t=u(e.components);return n.createElement(y.Provider,{value:t},e.children)},d="mdxType",i={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},s=n.forwardRef((function(e,t){var a=e.components,l=e.mdxType,r=e.originalType,y=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),d=u(a),s=l,m=d["".concat(y,".").concat(s)]||d[s]||i[s]||r;return a?n.createElement(m,g(g({ref:t},p),{},{components:a})):n.createElement(m,g({ref:t},p))}));function m(e,t){var a=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var r=a.length,g=new Array(r);g[0]=s;var o={};for(var y in t)hasOwnProperty.call(t,y)&&(o[y]=t[y]);o.originalType=e,o[d]="string"==typeof e?e:l,g[1]=o;for(var u=2;u<r;u++)g[u]=a[u];return n.createElement.apply(null,g)}return n.createElement.apply(null,a)}s.displayName="MDXCreateElement"},89437:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>y,contentTitle:()=>g,default:()=>i,frontMatter:()=>r,metadata:()=>o,toc:()=>u});var n=a(58168),l=(a(96540),a(15680));const r={title:"mssql@4.3.2",id:"mssql-docs",keywords:["adaptor","mssql","describeTable","findValue","insert","insertMany","insertTable","modifyTable","sql","upsert","upsertIf","upsertMany"]},g=void 0,o={unversionedId:"packages/mssql-docs",id:"packages/mssql-docs",title:"mssql@4.3.2",description:"Functions",source:"@site/adaptors/packages/mssql-docs.md",sourceDirName:"packages",slug:"/packages/mssql-docs",permalink:"/adaptors/packages/mssql-docs",draft:!1,tags:[],version:"current",frontMatter:{title:"mssql@4.3.2",id:"mssql-docs",keywords:["adaptor","mssql","describeTable","findValue","insert","insertMany","insertTable","modifyTable","sql","upsert","upsertIf","upsertMany"]},sidebar:"adaptors",previous:{title:"msgraph developer readme",permalink:"/adaptors/packages/msgraph-readme"},next:{title:"Config for mssql",permalink:"/adaptors/packages/mssql-configuration-schema"}},y={},u=[{value:"Functions",id:"functions",level:2},{value:"addRowsToRefs",id:"addrowstorefs",level:2},{value:"cleanupState",id:"cleanupstate",level:2},{value:"createConnection",id:"createconnection",level:2},{value:"describeTable",id:"describetable",level:2},{value:"findValue",id:"findvalue",level:2},{value:"flattenRows",id:"flattenrows",level:2},{value:"insert",id:"insert",level:2},{value:"insertMany",id:"insertmany",level:2},{value:"insertTable",id:"inserttable",level:2},{value:"modifyTable",id:"modifytable",level:2},{value:"sql",id:"sql",level:2},{value:"upsert",id:"upsert",level:2},{value:"upsertIf",id:"upsertif",level:2},{value:"upsertMany",id:"upsertmany",level:2}],p={toc:u},d="wrapper";function i(e){let{components:t,...a}=e;return(0,l.yg)(d,(0,n.A)({},p,a,{components:t,mdxType:"MDXLayout"}),(0,l.yg)("h2",{id:"functions"},"Functions"),(0,l.yg)("dl",null,(0,l.yg)("dt",null,(0,l.yg)("a",{href:"#addrowstorefs"},"addRowsToRefs(state, rows)")),(0,l.yg)("dt",null,(0,l.yg)("a",{href:"#cleanupstate"},"cleanupState(state)")),(0,l.yg)("dt",null,(0,l.yg)("a",{href:"#createconnection"},"createConnection(state)")),(0,l.yg)("dt",null,(0,l.yg)("a",{href:"#describetable"},"describeTable(tableName, options)")),(0,l.yg)("dt",null,(0,l.yg)("a",{href:"#findvalue"},"findValue(filter)")),(0,l.yg)("dt",null,(0,l.yg)("a",{href:"#flattenrows"},"flattenRows(state, rows)")),(0,l.yg)("dt",null,(0,l.yg)("a",{href:"#insert"},"insert(table, record, options)")),(0,l.yg)("dt",null,(0,l.yg)("a",{href:"#insertmany"},"insertMany(table, records, options)")),(0,l.yg)("dt",null,(0,l.yg)("a",{href:"#inserttable"},"insertTable(tableName, columns, options)")),(0,l.yg)("dt",null,(0,l.yg)("a",{href:"#modifytable"},"modifyTable(tableName, columns, options)")),(0,l.yg)("dt",null,(0,l.yg)("a",{href:"#sql"},"sql(params)")),(0,l.yg)("dt",null,(0,l.yg)("a",{href:"#upsert"},"upsert(table, uuid, record, options)")),(0,l.yg)("dt",null,(0,l.yg)("a",{href:"#upsertif"},"upsertIf(logical, table, uuid, record, options)")),(0,l.yg)("dt",null,(0,l.yg)("a",{href:"#upsertmany"},"upsertMany(table, uuid, records, options)"))),(0,l.yg)("p",null,"The following functions are exported from the common adaptor:"),(0,l.yg)("dl",null,(0,l.yg)("dt",null,(0,l.yg)("a",{href:"/adaptors/packages/common-docs#alterstate"},"alterState()")),(0,l.yg)("dt",null,(0,l.yg)("a",{href:"/adaptors/packages/common-docs#combine"},"combine()")),(0,l.yg)("dt",null,(0,l.yg)("a",{href:"/adaptors/packages/common-docs#cursor"},"cursor()")),(0,l.yg)("dt",null,(0,l.yg)("a",{href:"/adaptors/packages/common-docs#datapath"},"dataPath()")),(0,l.yg)("dt",null,(0,l.yg)("a",{href:"/adaptors/packages/common-docs#datavalue"},"dataValue()")),(0,l.yg)("dt",null,(0,l.yg)("a",{href:"/adaptors/packages/common-docs#datefns"},"dateFns()")),(0,l.yg)("dt",null,(0,l.yg)("a",{href:"/adaptors/packages/common-docs#each"},"each()")),(0,l.yg)("dt",null,(0,l.yg)("a",{href:"/adaptors/packages/common-docs#field"},"field()")),(0,l.yg)("dt",null,(0,l.yg)("a",{href:"/adaptors/packages/common-docs#fields"},"fields()")),(0,l.yg)("dt",null,(0,l.yg)("a",{href:"/adaptors/packages/common-docs#fn"},"fn()")),(0,l.yg)("dt",null,(0,l.yg)("a",{href:"/adaptors/packages/common-docs#fnif"},"fnIf()")),(0,l.yg)("dt",null,(0,l.yg)("a",{href:"/adaptors/packages/common-docs#http"},"http()")),(0,l.yg)("dt",null,(0,l.yg)("a",{href:"/adaptors/packages/common-docs#lastreferencevalue"},"lastReferenceValue()")),(0,l.yg)("dt",null,(0,l.yg)("a",{href:"/adaptors/packages/common-docs#merge"},"merge()")),(0,l.yg)("dt",null,(0,l.yg)("a",{href:"/adaptors/packages/common-docs#sourcevalue"},"sourceValue()"))),(0,l.yg)("h2",{id:"addrowstorefs"},"addRowsToRefs"),(0,l.yg)("p",null,"addRowsToRefs(state, rows) \u21d2 ",(0,l.yg)("code",null,"State")),(0,l.yg)("p",null,"Sets the returned rows from a query as the first item in the state.references\narray, leaving state.data unchanged between operations."),(0,l.yg)("table",null,(0,l.yg)("thead",{parentName:"table"},(0,l.yg)("tr",{parentName:"thead"},(0,l.yg)("th",{parentName:"tr",align:null},"Param"),(0,l.yg)("th",{parentName:"tr",align:null},"Type"),(0,l.yg)("th",{parentName:"tr",align:null},"Description"))),(0,l.yg)("tbody",{parentName:"table"},(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"state"),(0,l.yg)("td",{parentName:"tr",align:null},(0,l.yg)("code",null,"State")),(0,l.yg)("td",{parentName:"tr",align:null})),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"rows"),(0,l.yg)("td",{parentName:"tr",align:null},(0,l.yg)("code",null,"array")),(0,l.yg)("td",{parentName:"tr",align:null},"the array of rows returned from the sql query")))),(0,l.yg)("hr",null),(0,l.yg)("h2",{id:"cleanupstate"},"cleanupState"),(0,l.yg)("p",null,"cleanupState(state) \u21d2 ",(0,l.yg)("code",null,"State")),(0,l.yg)("p",null,"Removes unserializable keys from the state."),(0,l.yg)("table",null,(0,l.yg)("thead",{parentName:"table"},(0,l.yg)("tr",{parentName:"thead"},(0,l.yg)("th",{parentName:"tr",align:null},"Param"),(0,l.yg)("th",{parentName:"tr",align:null},"Type"))),(0,l.yg)("tbody",{parentName:"table"},(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"state"),(0,l.yg)("td",{parentName:"tr",align:null},(0,l.yg)("code",null,"State"))))),(0,l.yg)("p",null,(0,l.yg)("strong",{parentName:"p"},"Example"),"  "),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre",className:"language-js"},"cleanupState(state)\n")),(0,l.yg)("hr",null),(0,l.yg)("h2",{id:"createconnection"},"createConnection"),(0,l.yg)("p",null,"createConnection(state) \u21d2 ",(0,l.yg)("code",null,"State")),(0,l.yg)("p",null,"Creates a connection."),(0,l.yg)("table",null,(0,l.yg)("thead",{parentName:"table"},(0,l.yg)("tr",{parentName:"thead"},(0,l.yg)("th",{parentName:"tr",align:null},"Param"),(0,l.yg)("th",{parentName:"tr",align:null},"Type"),(0,l.yg)("th",{parentName:"tr",align:null},"Description"))),(0,l.yg)("tbody",{parentName:"table"},(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"state"),(0,l.yg)("td",{parentName:"tr",align:null},(0,l.yg)("code",null,"State")),(0,l.yg)("td",{parentName:"tr",align:null},"Runtime state.")))),(0,l.yg)("p",null,(0,l.yg)("strong",{parentName:"p"},"Example"),"  "),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre",className:"language-js"},"createConnection(state)\n")),(0,l.yg)("hr",null),(0,l.yg)("h2",{id:"describetable"},"describeTable"),(0,l.yg)("p",null,"describeTable(tableName, options) \u21d2 ",(0,l.yg)("code",null,"Operation")),(0,l.yg)("p",null,"List the columns of a table in a database."),(0,l.yg)("table",null,(0,l.yg)("thead",{parentName:"table"},(0,l.yg)("tr",{parentName:"thead"},(0,l.yg)("th",{parentName:"tr",align:null},"Param"),(0,l.yg)("th",{parentName:"tr",align:null},"Type"),(0,l.yg)("th",{parentName:"tr",align:null},"Description"))),(0,l.yg)("tbody",{parentName:"table"},(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"tableName"),(0,l.yg)("td",{parentName:"tr",align:null},(0,l.yg)("code",null,"string")),(0,l.yg)("td",{parentName:"tr",align:null},"The name of the table to describe")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"options"),(0,l.yg)("td",{parentName:"tr",align:null},(0,l.yg)("code",null,"object")),(0,l.yg)("td",{parentName:"tr",align:null},"Optional options argument")))),(0,l.yg)("p",null,(0,l.yg)("strong",{parentName:"p"},"Example"),"  "),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre",className:"language-js"},"describeTable('clinic_visits')\n")),(0,l.yg)("hr",null),(0,l.yg)("h2",{id:"findvalue"},"findValue"),(0,l.yg)("p",null,"findValue(filter) \u21d2 ",(0,l.yg)("code",null,"Operation")),(0,l.yg)("p",null,"Fetch a uuid key given a condition"),(0,l.yg)("table",null,(0,l.yg)("thead",{parentName:"table"},(0,l.yg)("tr",{parentName:"thead"},(0,l.yg)("th",{parentName:"tr",align:null},"Param"),(0,l.yg)("th",{parentName:"tr",align:null},"Type"),(0,l.yg)("th",{parentName:"tr",align:null},"Description"))),(0,l.yg)("tbody",{parentName:"table"},(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"filter"),(0,l.yg)("td",{parentName:"tr",align:null},(0,l.yg)("code",null,"object")),(0,l.yg)("td",{parentName:"tr",align:null},"A filter object with the lookup table, a uuid and the condition")))),(0,l.yg)("p",null,(0,l.yg)("strong",{parentName:"p"},"Example"),"  "),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre",className:"language-js"},"findValue({\n   uuid: 'id',\n   relation: 'users',\n   where: { first_name: 'Mama%', last_name: 'Cisse'},\n   operator: { first_name: 'like', last_name: '='}\n })\n")),(0,l.yg)("hr",null),(0,l.yg)("h2",{id:"flattenrows"},"flattenRows"),(0,l.yg)("p",null,"flattenRows(state, rows) \u21d2 ",(0,l.yg)("code",null,"State")),(0,l.yg)("p",null,"Returns a flatten object of the rows (array of arrays) with rowCount."),(0,l.yg)("table",null,(0,l.yg)("thead",{parentName:"table"},(0,l.yg)("tr",{parentName:"thead"},(0,l.yg)("th",{parentName:"tr",align:null},"Param"),(0,l.yg)("th",{parentName:"tr",align:null},"Type"),(0,l.yg)("th",{parentName:"tr",align:null},"Description"))),(0,l.yg)("tbody",{parentName:"table"},(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"state"),(0,l.yg)("td",{parentName:"tr",align:null},(0,l.yg)("code",null,"State")),(0,l.yg)("td",{parentName:"tr",align:null})),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"rows"),(0,l.yg)("td",{parentName:"tr",align:null},(0,l.yg)("code",null,"array")),(0,l.yg)("td",{parentName:"tr",align:null},"the array of rows returned from the sql query")))),(0,l.yg)("hr",null),(0,l.yg)("h2",{id:"insert"},"insert"),(0,l.yg)("p",null,"insert(table, record, options) \u21d2 ",(0,l.yg)("code",null,"Operation")),(0,l.yg)("p",null,"Insert a record"),(0,l.yg)("table",null,(0,l.yg)("thead",{parentName:"table"},(0,l.yg)("tr",{parentName:"thead"},(0,l.yg)("th",{parentName:"tr",align:null},"Param"),(0,l.yg)("th",{parentName:"tr",align:null},"Type"),(0,l.yg)("th",{parentName:"tr",align:null},"Description"))),(0,l.yg)("tbody",{parentName:"table"},(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"table"),(0,l.yg)("td",{parentName:"tr",align:null},(0,l.yg)("code",null,"string")),(0,l.yg)("td",{parentName:"tr",align:null},"The target table")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"record"),(0,l.yg)("td",{parentName:"tr",align:null},(0,l.yg)("code",null,"object")),(0,l.yg)("td",{parentName:"tr",align:null},"Payload data for the record as a JS object")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"options"),(0,l.yg)("td",{parentName:"tr",align:null},(0,l.yg)("code",null,"object")),(0,l.yg)("td",{parentName:"tr",align:null},"Optional options argument")))),(0,l.yg)("p",null,(0,l.yg)("strong",{parentName:"p"},"Example"),"  "),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre",className:"language-js"},"insert(table, record, {setNull: [\"'undefined'\", \"''\"], logValues: false})\n")),(0,l.yg)("hr",null),(0,l.yg)("h2",{id:"insertmany"},"insertMany"),(0,l.yg)("p",null,"insertMany(table, records, options) \u21d2 ",(0,l.yg)("code",null,"Operation")),(0,l.yg)("p",null,"Insert many records, using the keys of the first as the column template"),(0,l.yg)("table",null,(0,l.yg)("thead",{parentName:"table"},(0,l.yg)("tr",{parentName:"thead"},(0,l.yg)("th",{parentName:"tr",align:null},"Param"),(0,l.yg)("th",{parentName:"tr",align:null},"Type"),(0,l.yg)("th",{parentName:"tr",align:null},"Description"))),(0,l.yg)("tbody",{parentName:"table"},(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"table"),(0,l.yg)("td",{parentName:"tr",align:null},(0,l.yg)("code",null,"string")),(0,l.yg)("td",{parentName:"tr",align:null},"The target table")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"records"),(0,l.yg)("td",{parentName:"tr",align:null},(0,l.yg)("code",null,"function")),(0,l.yg)("td",{parentName:"tr",align:null},"A function that takes state and returns an array of records")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"options"),(0,l.yg)("td",{parentName:"tr",align:null},(0,l.yg)("code",null,"object")),(0,l.yg)("td",{parentName:"tr",align:null},"Optional options argument")))),(0,l.yg)("p",null,(0,l.yg)("strong",{parentName:"p"},"Example"),"  "),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre",className:"language-js"},"insertMany(table, records, { setNull: false, writeSql: true, logValues: false })\n")),(0,l.yg)("hr",null),(0,l.yg)("h2",{id:"inserttable"},"insertTable"),(0,l.yg)("p",null,"insertTable(tableName, columns, options) \u21d2 ",(0,l.yg)("code",null,"Operation")),(0,l.yg)("p",null,"Create a table in database when given an array of columns and a table_name."),(0,l.yg)("table",null,(0,l.yg)("thead",{parentName:"table"},(0,l.yg)("tr",{parentName:"thead"},(0,l.yg)("th",{parentName:"tr",align:null},"Param"),(0,l.yg)("th",{parentName:"tr",align:null},"Type"),(0,l.yg)("th",{parentName:"tr",align:null},"Description"))),(0,l.yg)("tbody",{parentName:"table"},(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"tableName"),(0,l.yg)("td",{parentName:"tr",align:null},(0,l.yg)("code",null,"string")),(0,l.yg)("td",{parentName:"tr",align:null},"The name of the table to create")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"columns"),(0,l.yg)("td",{parentName:"tr",align:null},(0,l.yg)("code",null,"array")),(0,l.yg)("td",{parentName:"tr",align:null},"An array of form columns")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"options"),(0,l.yg)("td",{parentName:"tr",align:null},(0,l.yg)("code",null,"object")),(0,l.yg)("td",{parentName:"tr",align:null},"Optional options argument")))),(0,l.yg)("p",null,(0,l.yg)("strong",{parentName:"p"},"Example"),"  "),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre",className:"language-js"},"insertTable('table_name', state => state.data.map(\n  column => ({\n    name: column.name,\n    type: column.type,\n    required: true, // optional\n    unique: false, // optional - to be set to true for unique constraint\n  })\n));\n")),(0,l.yg)("hr",null),(0,l.yg)("h2",{id:"modifytable"},"modifyTable"),(0,l.yg)("p",null,"modifyTable(tableName, columns, options) \u21d2 ",(0,l.yg)("code",null,"Operation")),(0,l.yg)("p",null,"Alter an existing table in the database."),(0,l.yg)("table",null,(0,l.yg)("thead",{parentName:"table"},(0,l.yg)("tr",{parentName:"thead"},(0,l.yg)("th",{parentName:"tr",align:null},"Param"),(0,l.yg)("th",{parentName:"tr",align:null},"Type"),(0,l.yg)("th",{parentName:"tr",align:null},"Description"))),(0,l.yg)("tbody",{parentName:"table"},(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"tableName"),(0,l.yg)("td",{parentName:"tr",align:null},(0,l.yg)("code",null,"string")),(0,l.yg)("td",{parentName:"tr",align:null},"The name of the table to alter")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"columns"),(0,l.yg)("td",{parentName:"tr",align:null},(0,l.yg)("code",null,"array")),(0,l.yg)("td",{parentName:"tr",align:null},"An array of form columns")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"options"),(0,l.yg)("td",{parentName:"tr",align:null},(0,l.yg)("code",null,"object")),(0,l.yg)("td",{parentName:"tr",align:null},"Optional options argument")))),(0,l.yg)("p",null,(0,l.yg)("strong",{parentName:"p"},"Example"),"  "),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre",className:"language-js"},"modifyTable('table_name', state => state.data.map(\n  newColumn => ({\n    name: newColumn.name,\n    type: newColumn.type,\n    required: true, // optional\n    unique: false, // optional - to be set to true for unique constraint\n  })\n));\n")),(0,l.yg)("hr",null),(0,l.yg)("h2",{id:"sql"},"sql"),(0,l.yg)("p",null,"sql(params) \u21d2 ",(0,l.yg)("code",null,"Operation")),(0,l.yg)("p",null,"Execute an SQL statement"),(0,l.yg)("table",null,(0,l.yg)("thead",{parentName:"table"},(0,l.yg)("tr",{parentName:"thead"},(0,l.yg)("th",{parentName:"tr",align:null},"Param"),(0,l.yg)("th",{parentName:"tr",align:null},"Type"),(0,l.yg)("th",{parentName:"tr",align:null},"Description"))),(0,l.yg)("tbody",{parentName:"table"},(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"params"),(0,l.yg)("td",{parentName:"tr",align:null},(0,l.yg)("code",null,"object")),(0,l.yg)("td",{parentName:"tr",align:null},"Payload data for the message")))),(0,l.yg)("p",null,(0,l.yg)("strong",{parentName:"p"},"Example"),"  "),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre",className:"language-js"},"sql({ query, options })\n")),(0,l.yg)("hr",null),(0,l.yg)("h2",{id:"upsert"},"upsert"),(0,l.yg)("p",null,"upsert(table, uuid, record, options) \u21d2 ",(0,l.yg)("code",null,"Operation")),(0,l.yg)("p",null,"Insert or update a record using SQL MERGE"),(0,l.yg)("table",null,(0,l.yg)("thead",{parentName:"table"},(0,l.yg)("tr",{parentName:"thead"},(0,l.yg)("th",{parentName:"tr",align:null},"Param"),(0,l.yg)("th",{parentName:"tr",align:null},"Type"),(0,l.yg)("th",{parentName:"tr",align:null},"Description"))),(0,l.yg)("tbody",{parentName:"table"},(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"table"),(0,l.yg)("td",{parentName:"tr",align:null},(0,l.yg)("code",null,"string")),(0,l.yg)("td",{parentName:"tr",align:null},"The target table")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"uuid"),(0,l.yg)("td",{parentName:"tr",align:null},(0,l.yg)("code",null,"string")),(0,l.yg)("td",{parentName:"tr",align:null},"The uuid column to determine a matching/existing record")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"record"),(0,l.yg)("td",{parentName:"tr",align:null},(0,l.yg)("code",null,"object")),(0,l.yg)("td",{parentName:"tr",align:null},"Payload data for the record as a JS object")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"options"),(0,l.yg)("td",{parentName:"tr",align:null},(0,l.yg)("code",null,"object")),(0,l.yg)("td",{parentName:"tr",align:null},"Optional options argument")))),(0,l.yg)("p",null,(0,l.yg)("strong",{parentName:"p"},"Example"),"  "),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre",className:"language-js"},"upsert(table, uuid, record, { setNull: \"'undefined'\", logValues: false})\nupsert(table, [uuid1, uuid2], record, { setNull: \"'undefined'\", logValues: false})\n")),(0,l.yg)("hr",null),(0,l.yg)("h2",{id:"upsertif"},"upsertIf"),(0,l.yg)("p",null,"upsertIf(logical, table, uuid, record, options) \u21d2 ",(0,l.yg)("code",null,"Operation")),(0,l.yg)("p",null,"Insert or update a record based on a logical condition using ON CONFLICT UPDATE"),(0,l.yg)("table",null,(0,l.yg)("thead",{parentName:"table"},(0,l.yg)("tr",{parentName:"thead"},(0,l.yg)("th",{parentName:"tr",align:null},"Param"),(0,l.yg)("th",{parentName:"tr",align:null},"Type"),(0,l.yg)("th",{parentName:"tr",align:null},"Description"))),(0,l.yg)("tbody",{parentName:"table"},(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"logical"),(0,l.yg)("td",{parentName:"tr",align:null},(0,l.yg)("code",null,"string")),(0,l.yg)("td",{parentName:"tr",align:null},"a data to check existing value for.")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"table"),(0,l.yg)("td",{parentName:"tr",align:null},(0,l.yg)("code",null,"string")),(0,l.yg)("td",{parentName:"tr",align:null},"The target table")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"uuid"),(0,l.yg)("td",{parentName:"tr",align:null},(0,l.yg)("code",null,"string")),(0,l.yg)("td",{parentName:"tr",align:null},"The uuid column to determine a matching/existing record")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"record"),(0,l.yg)("td",{parentName:"tr",align:null},(0,l.yg)("code",null,"object")),(0,l.yg)("td",{parentName:"tr",align:null},"Payload data for the record as a JS object or function")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"options"),(0,l.yg)("td",{parentName:"tr",align:null},(0,l.yg)("code",null,"object")),(0,l.yg)("td",{parentName:"tr",align:null},"Optional options argument")))),(0,l.yg)("p",null,(0,l.yg)("strong",{parentName:"p"},"Example"),"  "),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre",className:"language-js"},"upsertIf(\n  dataValue('name'),\n  'users', // the DB table\n  'uuid', // a DB column with a unique constraint\n  { name: 'Elodie', id: 7 },\n  { writeSql:true, execute: true, logValues: false }\n)\n")),(0,l.yg)("hr",null),(0,l.yg)("h2",{id:"upsertmany"},"upsertMany"),(0,l.yg)("p",null,"upsertMany(table, uuid, records, options) \u21d2 ",(0,l.yg)("code",null,"Operation")),(0,l.yg)("p",null,"Insert or update multiple records using ON CONFLICT UPDATE and excluded"),(0,l.yg)("table",null,(0,l.yg)("thead",{parentName:"table"},(0,l.yg)("tr",{parentName:"thead"},(0,l.yg)("th",{parentName:"tr",align:null},"Param"),(0,l.yg)("th",{parentName:"tr",align:null},"Type"),(0,l.yg)("th",{parentName:"tr",align:null},"Description"))),(0,l.yg)("tbody",{parentName:"table"},(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"table"),(0,l.yg)("td",{parentName:"tr",align:null},(0,l.yg)("code",null,"string")),(0,l.yg)("td",{parentName:"tr",align:null},"The target table")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"uuid"),(0,l.yg)("td",{parentName:"tr",align:null},(0,l.yg)("code",null,"string")),(0,l.yg)("td",{parentName:"tr",align:null},"The uuid column to determine a matching/existing record")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"records"),(0,l.yg)("td",{parentName:"tr",align:null},(0,l.yg)("code",null,"function")),(0,l.yg)("td",{parentName:"tr",align:null},"A function that takes state and returns an array of records")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"options"),(0,l.yg)("td",{parentName:"tr",align:null},(0,l.yg)("code",null,"object")),(0,l.yg)("td",{parentName:"tr",align:null},"Optional options argument")))),(0,l.yg)("p",null,(0,l.yg)("strong",{parentName:"p"},"Example"),"  "),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre",className:"language-js"},"upsertMany(\n 'users', 'email', records, { logValues: false }\n)\nupsertMany(\n 'users', ['email', 'phone'], records, { logValues: false }\n)\n")),(0,l.yg)("hr",null))}i.isMDXComponent=!0}}]);