"use strict";(self.webpackChunk_openfn_docs=self.webpackChunk_openfn_docs||[]).push([[80448],{3905:(t,e,a)=>{a.d(e,{Zo:()=>i,kt:()=>c});var n=a(67294);function l(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function r(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,n)}return a}function o(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?r(Object(a),!0).forEach((function(e){l(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function p(t,e){if(null==t)return{};var a,n,l=function(t,e){if(null==t)return{};var a,n,l={},r=Object.keys(t);for(n=0;n<r.length;n++)a=r[n],e.indexOf(a)>=0||(l[a]=t[a]);return l}(t,e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);for(n=0;n<r.length;n++)a=r[n],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(l[a]=t[a])}return l}var s=n.createContext({}),u=function(t){var e=n.useContext(s),a=e;return t&&(a="function"==typeof t?t(e):o(o({},e),t)),a},i=function(t){var e=u(t.components);return n.createElement(s.Provider,{value:e},t.children)},d="mdxType",k={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},m=n.forwardRef((function(t,e){var a=t.components,l=t.mdxType,r=t.originalType,s=t.parentName,i=p(t,["components","mdxType","originalType","parentName"]),d=u(a),m=l,c=d["".concat(s,".").concat(m)]||d[m]||k[m]||r;return a?n.createElement(c,o(o({ref:e},i),{},{components:a})):n.createElement(c,o({ref:e},i))}));function c(t,e){var a=arguments,l=e&&e.mdxType;if("string"==typeof t||l){var r=a.length,o=new Array(r);o[0]=m;var p={};for(var s in e)hasOwnProperty.call(e,s)&&(p[s]=e[s]);p.originalType=t,p[d]="string"==typeof t?t:l,o[1]=p;for(var u=2;u<r;u++)o[u]=a[u];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}m.displayName="MDXCreateElement"},33191:(t,e,a)=>{a.r(e),a.d(e,{assets:()=>s,contentTitle:()=>o,default:()=>d,frontMatter:()=>r,metadata:()=>p,toc:()=>u});var n=a(87462),l=(a(67294),a(3905));const r={title:"mssql@4.0.0",id:"mssql-docs",keywords:["adaptor","mssql","sql","findValue","insert","insertMany","upsert","upsertIf","upsertMany","describeTable","insertTable","modifyTable"]},o=void 0,p={unversionedId:"packages/mssql-docs",id:"packages/mssql-docs",title:"mssql@4.0.0",description:"Classes",source:"@site/adaptors/packages/mssql-docs.md",sourceDirName:"packages",slug:"/packages/mssql-docs",permalink:"/adaptors/packages/mssql-docs",draft:!1,tags:[],version:"current",frontMatter:{title:"mssql@4.0.0",id:"mssql-docs",keywords:["adaptor","mssql","sql","findValue","insert","insertMany","upsert","upsertIf","upsertMany","describeTable","insertTable","modifyTable"]},sidebar:"adaptors",previous:{title:"Moodle",permalink:"/adaptors/moodle"},next:{title:"Extract Vitas Data",permalink:"/adaptors/library/jobs/auto/Extract-Vitas-Data-2021-05-11"}},s={},u=[{value:"Classes",id:"classes",level:2},{value:"Functions",id:"functions",level:2},{value:"execute",id:"execute",level:2},{value:"new exports.execute(operations)",id:"new-exportsexecuteoperations",level:3},{value:"sql",id:"sql",level:2},{value:"new exports.sql(params)",id:"new-exportssqlparams",level:3},{value:"findValue",id:"findvalue",level:2},{value:"new exports.findValue(filter)",id:"new-exportsfindvaluefilter",level:3},{value:"insert",id:"insert",level:2},{value:"new exports.insert(table, record, options)",id:"new-exportsinserttable-record-options",level:3},{value:"insertMany",id:"insertmany",level:2},{value:"new exports.insertMany(table, records, options)",id:"new-exportsinsertmanytable-records-options",level:3},{value:"upsert",id:"upsert",level:2},{value:"new exports.upsert(table, uuid, record, options)",id:"new-exportsupserttable-uuid-record-options",level:3},{value:"upsertIf",id:"upsertif",level:2},{value:"new exports.upsertIf(logical, table, uuid, record, options)",id:"new-exportsupsertiflogical-table-uuid-record-options",level:3},{value:"upsertMany",id:"upsertmany",level:2},{value:"new exports.upsertMany(table, uuid, records, options)",id:"new-exportsupsertmanytable-uuid-records-options",level:3},{value:"describeTable",id:"describetable",level:2},{value:"new exports.describeTable(tableName, options)",id:"new-exportsdescribetabletablename-options",level:3},{value:"insertTable",id:"inserttable",level:2},{value:"new exports.insertTable(tableName, columns, options)",id:"new-exportsinserttabletablename-columns-options",level:3},{value:"modifyTable",id:"modifytable",level:2},{value:"new exports.modifyTable(tableName, columns, options)",id:"new-exportsmodifytabletablename-columns-options",level:3},{value:"createConnection(state) \u21d2 <code>State</code>",id:"createconnectionstate--state",level:2},{value:"cleanupState(state) \u21d2 <code>State</code>",id:"cleanupstatestate--state",level:2},{value:"addRowsToRefs(state, rows) \u21d2 <code>State</code>",id:"addrowstorefsstate-rows--state",level:2},{value:"flattenRows(state, rows) \u21d2 <code>State</code>",id:"flattenrowsstate-rows--state",level:2}],i={toc:u};function d(t){let{components:e,...a}=t;return(0,l.kt)("wrapper",(0,n.Z)({},i,a,{components:e,mdxType:"MDXLayout"}),(0,l.kt)("h2",{id:"classes"},"Classes"),(0,l.kt)("dl",null,(0,l.kt)("dt",null,(0,l.kt)("a",{href:"#execute"},"execute")),(0,l.kt)("dd",null),(0,l.kt)("dt",null,(0,l.kt)("a",{href:"#sql"},"sql")),(0,l.kt)("dd",null),(0,l.kt)("dt",null,(0,l.kt)("a",{href:"#findValue"},"findValue")),(0,l.kt)("dd",null),(0,l.kt)("dt",null,(0,l.kt)("a",{href:"#insert"},"insert")),(0,l.kt)("dd",null),(0,l.kt)("dt",null,(0,l.kt)("a",{href:"#insertMany"},"insertMany")),(0,l.kt)("dd",null),(0,l.kt)("dt",null,(0,l.kt)("a",{href:"#upsert"},"upsert")),(0,l.kt)("dd",null),(0,l.kt)("dt",null,(0,l.kt)("a",{href:"#upsertIf"},"upsertIf")),(0,l.kt)("dd",null),(0,l.kt)("dt",null,(0,l.kt)("a",{href:"#upsertMany"},"upsertMany")),(0,l.kt)("dd",null),(0,l.kt)("dt",null,(0,l.kt)("a",{href:"#describeTable"},"describeTable")),(0,l.kt)("dd",null),(0,l.kt)("dt",null,(0,l.kt)("a",{href:"#insertTable"},"insertTable")),(0,l.kt)("dd",null),(0,l.kt)("dt",null,(0,l.kt)("a",{href:"#modifyTable"},"modifyTable")),(0,l.kt)("dd",null)),(0,l.kt)("h2",{id:"functions"},"Functions"),(0,l.kt)("dl",null,(0,l.kt)("dt",null,(0,l.kt)("a",{href:"#createConnection"},"createConnection(state)")," \u21d2 ",(0,l.kt)("code",null,"State")),(0,l.kt)("dd",null,(0,l.kt)("p",null,"Creates a connection.")),(0,l.kt)("dt",null,(0,l.kt)("a",{href:"#cleanupState"},"cleanupState(state)")," \u21d2 ",(0,l.kt)("code",null,"State")),(0,l.kt)("dd",null,(0,l.kt)("p",null,"Removes unserializable keys from the state.")),(0,l.kt)("dt",null,(0,l.kt)("a",{href:"#addRowsToRefs"},"addRowsToRefs(state, rows)")," \u21d2 ",(0,l.kt)("code",null,"State")),(0,l.kt)("dd",null,(0,l.kt)("p",null,"Sets the returned rows from a query as the first item in the state.references array, leaving state.data unchanged between operations.")),(0,l.kt)("dt",null,(0,l.kt)("a",{href:"#flattenRows"},"flattenRows(state, rows)")," \u21d2 ",(0,l.kt)("code",null,"State")),(0,l.kt)("dd",null,(0,l.kt)("p",null,"Returns a flatten object of the rows (array of arrays) with rowCount."))),(0,l.kt)("a",{name:"execute"}),(0,l.kt)("h2",{id:"execute"},"execute"),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Kind"),": global class  "),(0,l.kt)("a",{name:"new_execute_new"}),(0,l.kt)("h3",{id:"new-exportsexecuteoperations"},"new exports.execute(operations)"),(0,l.kt)("p",null,"Execute a sequence of operations.\nWraps ",(0,l.kt)("inlineCode",{parentName:"p"},"language-common/execute"),", and prepends initial state for mssql."),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Param"),(0,l.kt)("th",{parentName:"tr",align:null},"Type"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"operations"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("code",null,"Operations")),(0,l.kt)("td",{parentName:"tr",align:null},"Operations to be performed.")))),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Example"),"  "),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"execute(\n  create('foo'),\n  delete('bar')\n)(state)\n")),(0,l.kt)("a",{name:"sql"}),(0,l.kt)("h2",{id:"sql"},"sql"),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Kind"),": global class",(0,l.kt)("br",{parentName:"p"}),"\n",(0,l.kt)("strong",{parentName:"p"},"Access"),": public  "),(0,l.kt)("a",{name:"new_sql_new"}),(0,l.kt)("h3",{id:"new-exportssqlparams"},"new exports.sql(params)"),(0,l.kt)("p",null,"Execute an SQL statement"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Param"),(0,l.kt)("th",{parentName:"tr",align:null},"Type"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"params"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("code",null,"object")),(0,l.kt)("td",{parentName:"tr",align:null},"Payload data for the message")))),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Example"),"  "),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"sql({ query, options })\n")),(0,l.kt)("a",{name:"findValue"}),(0,l.kt)("h2",{id:"findvalue"},"findValue"),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Kind"),": global class",(0,l.kt)("br",{parentName:"p"}),"\n",(0,l.kt)("strong",{parentName:"p"},"Access"),": public  "),(0,l.kt)("a",{name:"new_findValue_new"}),(0,l.kt)("h3",{id:"new-exportsfindvaluefilter"},"new exports.findValue(filter)"),(0,l.kt)("p",null,"Fetch a uuid key given a condition"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Param"),(0,l.kt)("th",{parentName:"tr",align:null},"Type"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"filter"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("code",null,"object")),(0,l.kt)("td",{parentName:"tr",align:null},"A filter object with the lookup table, a uuid and the condition")))),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Example"),"  "),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"findValue({\n   uuid: 'id',\n   relation: 'users',\n   where: { first_name: 'Mama%', last_name: 'Cisse'},\n   operator: { first_name: 'like', last_name: '='}\n })\n")),(0,l.kt)("a",{name:"insert"}),(0,l.kt)("h2",{id:"insert"},"insert"),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Kind"),": global class",(0,l.kt)("br",{parentName:"p"}),"\n",(0,l.kt)("strong",{parentName:"p"},"Access"),": public  "),(0,l.kt)("a",{name:"new_insert_new"}),(0,l.kt)("h3",{id:"new-exportsinserttable-record-options"},"new exports.insert(table, record, options)"),(0,l.kt)("p",null,"Insert a record"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Param"),(0,l.kt)("th",{parentName:"tr",align:null},"Type"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"table"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("code",null,"string")),(0,l.kt)("td",{parentName:"tr",align:null},"The target table")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"record"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("code",null,"object")),(0,l.kt)("td",{parentName:"tr",align:null},"Payload data for the record as a JS object")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"options"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("code",null,"object")),(0,l.kt)("td",{parentName:"tr",align:null},"Optional options argument")))),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Example"),"  "),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"insert(table, record, {setNull: [\"'undefined'\", \"''\"], logValues: false})\n")),(0,l.kt)("a",{name:"insertMany"}),(0,l.kt)("h2",{id:"insertmany"},"insertMany"),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Kind"),": global class",(0,l.kt)("br",{parentName:"p"}),"\n",(0,l.kt)("strong",{parentName:"p"},"Access"),": public  "),(0,l.kt)("a",{name:"new_insertMany_new"}),(0,l.kt)("h3",{id:"new-exportsinsertmanytable-records-options"},"new exports.insertMany(table, records, options)"),(0,l.kt)("p",null,"Insert many records, using the keys of the first as the column template"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Param"),(0,l.kt)("th",{parentName:"tr",align:null},"Type"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"table"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("code",null,"string")),(0,l.kt)("td",{parentName:"tr",align:null},"The target table")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"records"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("code",null,"function")),(0,l.kt)("td",{parentName:"tr",align:null},"A function that takes state and returns an array of records")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"options"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("code",null,"object")),(0,l.kt)("td",{parentName:"tr",align:null},"Optional options argument")))),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Example"),"  "),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"insertMany(table, records, { setNull: false, writeSql: true, logValues: false })\n")),(0,l.kt)("a",{name:"upsert"}),(0,l.kt)("h2",{id:"upsert"},"upsert"),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Kind"),": global class",(0,l.kt)("br",{parentName:"p"}),"\n",(0,l.kt)("strong",{parentName:"p"},"Access"),": public  "),(0,l.kt)("a",{name:"new_upsert_new"}),(0,l.kt)("h3",{id:"new-exportsupserttable-uuid-record-options"},"new exports.upsert(table, uuid, record, options)"),(0,l.kt)("p",null,"Insert or update a record using SQL MERGE"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Param"),(0,l.kt)("th",{parentName:"tr",align:null},"Type"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"table"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("code",null,"string")),(0,l.kt)("td",{parentName:"tr",align:null},"The target table")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"uuid"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("code",null,"string")),(0,l.kt)("td",{parentName:"tr",align:null},"The uuid column to determine a matching/existing record")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"record"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("code",null,"object")),(0,l.kt)("td",{parentName:"tr",align:null},"Payload data for the record as a JS object")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"options"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("code",null,"object")),(0,l.kt)("td",{parentName:"tr",align:null},"Optional options argument")))),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Example"),"  "),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"upsert(table, uuid, record, { setNull: \"'undefined'\", logValues: false})\nupsert(table, [uuid1, uuid2], record, { setNull: \"'undefined'\", logValues: false})\n")),(0,l.kt)("a",{name:"upsertIf"}),(0,l.kt)("h2",{id:"upsertif"},"upsertIf"),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Kind"),": global class",(0,l.kt)("br",{parentName:"p"}),"\n",(0,l.kt)("strong",{parentName:"p"},"Access"),": public  "),(0,l.kt)("a",{name:"new_upsertIf_new"}),(0,l.kt)("h3",{id:"new-exportsupsertiflogical-table-uuid-record-options"},"new exports.upsertIf(logical, table, uuid, record, options)"),(0,l.kt)("p",null,"Insert or update a record based on a logical condition using ON CONFLICT UPDATE"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Param"),(0,l.kt)("th",{parentName:"tr",align:null},"Type"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"logical"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("code",null,"string")),(0,l.kt)("td",{parentName:"tr",align:null},"a data to check existing value for.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"table"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("code",null,"string")),(0,l.kt)("td",{parentName:"tr",align:null},"The target table")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"uuid"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("code",null,"string")),(0,l.kt)("td",{parentName:"tr",align:null},"The uuid column to determine a matching/existing record")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"record"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("code",null,"object")),(0,l.kt)("td",{parentName:"tr",align:null},"Payload data for the record as a JS object or function")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"options"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("code",null,"object")),(0,l.kt)("td",{parentName:"tr",align:null},"Optional options argument")))),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Example"),"  "),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"upsertIf(\n  dataValue('name'),\n  'users', // the DB table\n  'uuid', // a DB column with a unique constraint\n  { name: 'Elodie', id: 7 },\n  { writeSql:true, execute: true, logValues: false }\n)\n")),(0,l.kt)("a",{name:"upsertMany"}),(0,l.kt)("h2",{id:"upsertmany"},"upsertMany"),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Kind"),": global class",(0,l.kt)("br",{parentName:"p"}),"\n",(0,l.kt)("strong",{parentName:"p"},"Access"),": public  "),(0,l.kt)("a",{name:"new_upsertMany_new"}),(0,l.kt)("h3",{id:"new-exportsupsertmanytable-uuid-records-options"},"new exports.upsertMany(table, uuid, records, options)"),(0,l.kt)("p",null,"Insert or update multiple records using ON CONFLICT UPDATE and excluded"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Param"),(0,l.kt)("th",{parentName:"tr",align:null},"Type"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"table"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("code",null,"string")),(0,l.kt)("td",{parentName:"tr",align:null},"The target table")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"uuid"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("code",null,"string")),(0,l.kt)("td",{parentName:"tr",align:null},"The uuid column to determine a matching/existing record")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"records"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("code",null,"function")),(0,l.kt)("td",{parentName:"tr",align:null},"A function that takes state and returns an array of records")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"options"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("code",null,"object")),(0,l.kt)("td",{parentName:"tr",align:null},"Optional options argument")))),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Example"),"  "),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"upsertMany(\n 'users', 'email', records, { logValues: false }\n)\nupsertMany(\n 'users', ['email', 'phone'], records, { logValues: false }\n)\n")),(0,l.kt)("a",{name:"describeTable"}),(0,l.kt)("h2",{id:"describetable"},"describeTable"),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Kind"),": global class",(0,l.kt)("br",{parentName:"p"}),"\n",(0,l.kt)("strong",{parentName:"p"},"Access"),": public  "),(0,l.kt)("a",{name:"new_describeTable_new"}),(0,l.kt)("h3",{id:"new-exportsdescribetabletablename-options"},"new exports.describeTable(tableName, options)"),(0,l.kt)("p",null,"List the columns of a table in a database."),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Param"),(0,l.kt)("th",{parentName:"tr",align:null},"Type"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"tableName"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("code",null,"string")),(0,l.kt)("td",{parentName:"tr",align:null},"The name of the table to describe")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"options"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("code",null,"object")),(0,l.kt)("td",{parentName:"tr",align:null},"Optional options argument")))),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Example"),"  "),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"describeTable('clinic_visits')\n")),(0,l.kt)("a",{name:"insertTable"}),(0,l.kt)("h2",{id:"inserttable"},"insertTable"),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Kind"),": global class",(0,l.kt)("br",{parentName:"p"}),"\n",(0,l.kt)("strong",{parentName:"p"},"Access"),": public  "),(0,l.kt)("a",{name:"new_insertTable_new"}),(0,l.kt)("h3",{id:"new-exportsinserttabletablename-columns-options"},"new exports.insertTable(tableName, columns, options)"),(0,l.kt)("p",null,"Create a table in database when given an array of columns and a table_name."),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Param"),(0,l.kt)("th",{parentName:"tr",align:null},"Type"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"tableName"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("code",null,"string")),(0,l.kt)("td",{parentName:"tr",align:null},"The name of the table to create")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"columns"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("code",null,"array")),(0,l.kt)("td",{parentName:"tr",align:null},"An array of form columns")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"options"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("code",null,"object")),(0,l.kt)("td",{parentName:"tr",align:null},"Optional options argument")))),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Example"),"  "),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"insertTable('table_name', state => state.data.map(\n  column => ({\n    name: column.name,\n    type: column.type,\n    required: true, // optional\n    unique: false, // optional - to be set to true for unique constraint\n  })\n));\n")),(0,l.kt)("a",{name:"modifyTable"}),(0,l.kt)("h2",{id:"modifytable"},"modifyTable"),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Kind"),": global class",(0,l.kt)("br",{parentName:"p"}),"\n",(0,l.kt)("strong",{parentName:"p"},"Access"),": public  "),(0,l.kt)("a",{name:"new_modifyTable_new"}),(0,l.kt)("h3",{id:"new-exportsmodifytabletablename-columns-options"},"new exports.modifyTable(tableName, columns, options)"),(0,l.kt)("p",null,"Alter an existing table in the database."),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Param"),(0,l.kt)("th",{parentName:"tr",align:null},"Type"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"tableName"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("code",null,"string")),(0,l.kt)("td",{parentName:"tr",align:null},"The name of the table to alter")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"columns"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("code",null,"array")),(0,l.kt)("td",{parentName:"tr",align:null},"An array of form columns")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"options"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("code",null,"object")),(0,l.kt)("td",{parentName:"tr",align:null},"Optional options argument")))),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Example"),"  "),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"modifyTable('table_name', state => state.data.map(\n  newColumn => ({\n    name: newColumn.name,\n    type: newColumn.type,\n    required: true, // optional\n    unique: false, // optional - to be set to true for unique constraint\n  })\n));\n")),(0,l.kt)("a",{name:"createConnection"}),(0,l.kt)("h2",{id:"createconnectionstate--state"},"createConnection(state) \u21d2 ",(0,l.kt)("code",null,"State")),(0,l.kt)("p",null,"Creates a connection."),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Kind"),": global function  "),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Param"),(0,l.kt)("th",{parentName:"tr",align:null},"Type"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"state"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("code",null,"State")),(0,l.kt)("td",{parentName:"tr",align:null},"Runtime state.")))),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Example"),"  "),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"createConnection(state)\n")),(0,l.kt)("a",{name:"cleanupState"}),(0,l.kt)("h2",{id:"cleanupstatestate--state"},"cleanupState(state) \u21d2 ",(0,l.kt)("code",null,"State")),(0,l.kt)("p",null,"Removes unserializable keys from the state."),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Kind"),": global function  "),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Param"),(0,l.kt)("th",{parentName:"tr",align:null},"Type"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"state"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("code",null,"State"))))),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Example"),"  "),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"cleanupState(state)\n")),(0,l.kt)("a",{name:"addRowsToRefs"}),(0,l.kt)("h2",{id:"addrowstorefsstate-rows--state"},"addRowsToRefs(state, rows) \u21d2 ",(0,l.kt)("code",null,"State")),(0,l.kt)("p",null,"Sets the returned rows from a query as the first item in the state.references\narray, leaving state.data unchanged between operations."),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Kind"),": global function  "),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Param"),(0,l.kt)("th",{parentName:"tr",align:null},"Type"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"state"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("code",null,"State")),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"rows"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("code",null,"array")),(0,l.kt)("td",{parentName:"tr",align:null},"the array of rows returned from the sql query")))),(0,l.kt)("a",{name:"flattenRows"}),(0,l.kt)("h2",{id:"flattenrowsstate-rows--state"},"flattenRows(state, rows) \u21d2 ",(0,l.kt)("code",null,"State")),(0,l.kt)("p",null,"Returns a flatten object of the rows (array of arrays) with rowCount."),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Kind"),": global function  "),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Param"),(0,l.kt)("th",{parentName:"tr",align:null},"Type"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"state"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("code",null,"State")),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"rows"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("code",null,"array")),(0,l.kt)("td",{parentName:"tr",align:null},"the array of rows returned from the sql query")))))}d.isMDXComponent=!0}}]);