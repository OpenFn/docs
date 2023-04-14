"use strict";(self.webpackChunk_openfn_docs=self.webpackChunk_openfn_docs||[]).push([[80448],{3905:(t,e,a)=>{a.d(e,{Zo:()=>d,kt:()=>c});var n=a(67294);function l(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function r(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,n)}return a}function o(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?r(Object(a),!0).forEach((function(e){l(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function p(t,e){if(null==t)return{};var a,n,l=function(t,e){if(null==t)return{};var a,n,l={},r=Object.keys(t);for(n=0;n<r.length;n++)a=r[n],e.indexOf(a)>=0||(l[a]=t[a]);return l}(t,e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);for(n=0;n<r.length;n++)a=r[n],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(l[a]=t[a])}return l}var u=n.createContext({}),i=function(t){var e=n.useContext(u),a=e;return t&&(a="function"==typeof t?t(e):o(o({},e),t)),a},d=function(t){var e=i(t.components);return n.createElement(u.Provider,{value:e},t.children)},s="mdxType",k={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},m=n.forwardRef((function(t,e){var a=t.components,l=t.mdxType,r=t.originalType,u=t.parentName,d=p(t,["components","mdxType","originalType","parentName"]),s=i(a),m=l,c=s["".concat(u,".").concat(m)]||s[m]||k[m]||r;return a?n.createElement(c,o(o({ref:e},d),{},{components:a})):n.createElement(c,o({ref:e},d))}));function c(t,e){var a=arguments,l=e&&e.mdxType;if("string"==typeof t||l){var r=a.length,o=new Array(r);o[0]=m;var p={};for(var u in e)hasOwnProperty.call(e,u)&&(p[u]=e[u]);p.originalType=t,p[s]="string"==typeof t?t:l,o[1]=p;for(var i=2;i<r;i++)o[i]=a[i];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}m.displayName="MDXCreateElement"},33191:(t,e,a)=>{a.r(e),a.d(e,{assets:()=>u,contentTitle:()=>o,default:()=>k,frontMatter:()=>r,metadata:()=>p,toc:()=>i});var n=a(87462),l=(a(67294),a(3905));const r={title:"mssql@4.0.6",id:"mssql-docs",keywords:["adaptor","mssql","describeTable","findValue","insert","insertMany","insertTable","modifyTable","sql","upsert","upsertIf","upsertMany"]},o=void 0,p={unversionedId:"packages/mssql-docs",id:"packages/mssql-docs",title:"mssql@4.0.6",description:"Functions",source:"@site/adaptors/packages/mssql-docs.md",sourceDirName:"packages",slug:"/packages/mssql-docs",permalink:"/adaptors/packages/mssql-docs",draft:!1,tags:[],version:"current",frontMatter:{title:"mssql@4.0.6",id:"mssql-docs",keywords:["adaptor","mssql","describeTable","findValue","insert","insertMany","insertTable","modifyTable","sql","upsert","upsertIf","upsertMany"]},sidebar:"adaptors",previous:{title:"Moodle",permalink:"/adaptors/moodle"},next:{title:"Config for mssql",permalink:"/adaptors/packages/mssql-configuration-schema"}},u={},i=[{value:"Functions",id:"functions",level:2},{value:"addRowsToRefs(state, rows) \u21d2 <code>State</code>",id:"addrowstorefsstate-rows--state",level:2},{value:"cleanupState(state) \u21d2 <code>State</code>",id:"cleanupstatestate--state",level:2},{value:"createConnection(state) \u21d2 <code>State</code>",id:"createconnectionstate--state",level:2},{value:"describeTable(tableName, options) \u21d2 <code>Operation</code>",id:"describetabletablename-options--operation",level:2},{value:"findValue(filter) \u21d2 <code>Operation</code>",id:"findvaluefilter--operation",level:2},{value:"flattenRows(state, rows) \u21d2 <code>State</code>",id:"flattenrowsstate-rows--state",level:2},{value:"insert(table, record, options) \u21d2 <code>Operation</code>",id:"inserttable-record-options--operation",level:2},{value:"insertMany(table, records, options) \u21d2 <code>Operation</code>",id:"insertmanytable-records-options--operation",level:2},{value:"insertTable(tableName, columns, options) \u21d2 <code>Operation</code>",id:"inserttabletablename-columns-options--operation",level:2},{value:"modifyTable(tableName, columns, options) \u21d2 <code>Operation</code>",id:"modifytabletablename-columns-options--operation",level:2},{value:"sql(params) \u21d2 <code>Operation</code>",id:"sqlparams--operation",level:2},{value:"upsert(table, uuid, record, options) \u21d2 <code>Operation</code>",id:"upserttable-uuid-record-options--operation",level:2},{value:"upsertIf(logical, table, uuid, record, options) \u21d2 <code>Operation</code>",id:"upsertiflogical-table-uuid-record-options--operation",level:2},{value:"upsertMany(table, uuid, records, options) \u21d2 <code>Operation</code>",id:"upsertmanytable-uuid-records-options--operation",level:2}],d={toc:i},s="wrapper";function k(t){let{components:e,...a}=t;return(0,l.kt)(s,(0,n.Z)({},d,a,{components:e,mdxType:"MDXLayout"}),(0,l.kt)("h2",{id:"functions"},"Functions"),(0,l.kt)("dl",null,(0,l.kt)("dt",null,(0,l.kt)("a",{href:"#addRowsToRefs"},"addRowsToRefs(state, rows)")," \u21d2 ",(0,l.kt)("code",null,"State")),(0,l.kt)("dd",null,(0,l.kt)("p",null,"Sets the returned rows from a query as the first item in the state.references array, leaving state.data unchanged between operations.")),(0,l.kt)("dt",null,(0,l.kt)("a",{href:"#cleanupState"},"cleanupState(state)")," \u21d2 ",(0,l.kt)("code",null,"State")),(0,l.kt)("dd",null,(0,l.kt)("p",null,"Removes unserializable keys from the state.")),(0,l.kt)("dt",null,(0,l.kt)("a",{href:"#createConnection"},"createConnection(state)")," \u21d2 ",(0,l.kt)("code",null,"State")),(0,l.kt)("dd",null,(0,l.kt)("p",null,"Creates a connection.")),(0,l.kt)("dt",null,(0,l.kt)("a",{href:"#describeTable"},"describeTable(tableName, options)")," \u21d2 ",(0,l.kt)("code",null,"Operation")),(0,l.kt)("dd",null,(0,l.kt)("p",null,"List the columns of a table in a database.")),(0,l.kt)("dt",null,(0,l.kt)("a",{href:"#findValue"},"findValue(filter)")," \u21d2 ",(0,l.kt)("code",null,"Operation")),(0,l.kt)("dd",null,(0,l.kt)("p",null,"Fetch a uuid key given a condition")),(0,l.kt)("dt",null,(0,l.kt)("a",{href:"#flattenRows"},"flattenRows(state, rows)")," \u21d2 ",(0,l.kt)("code",null,"State")),(0,l.kt)("dd",null,(0,l.kt)("p",null,"Returns a flatten object of the rows (array of arrays) with rowCount.")),(0,l.kt)("dt",null,(0,l.kt)("a",{href:"#insert"},"insert(table, record, options)")," \u21d2 ",(0,l.kt)("code",null,"Operation")),(0,l.kt)("dd",null,(0,l.kt)("p",null,"Insert a record")),(0,l.kt)("dt",null,(0,l.kt)("a",{href:"#insertMany"},"insertMany(table, records, options)")," \u21d2 ",(0,l.kt)("code",null,"Operation")),(0,l.kt)("dd",null,(0,l.kt)("p",null,"Insert many records, using the keys of the first as the column template")),(0,l.kt)("dt",null,(0,l.kt)("a",{href:"#insertTable"},"insertTable(tableName, columns, options)")," \u21d2 ",(0,l.kt)("code",null,"Operation")),(0,l.kt)("dd",null,(0,l.kt)("p",null,"Create a table in database when given an array of columns and a table_name.")),(0,l.kt)("dt",null,(0,l.kt)("a",{href:"#modifyTable"},"modifyTable(tableName, columns, options)")," \u21d2 ",(0,l.kt)("code",null,"Operation")),(0,l.kt)("dd",null,(0,l.kt)("p",null,"Alter an existing table in the database.")),(0,l.kt)("dt",null,(0,l.kt)("a",{href:"#sql"},"sql(params)")," \u21d2 ",(0,l.kt)("code",null,"Operation")),(0,l.kt)("dd",null,(0,l.kt)("p",null,"Execute an SQL statement")),(0,l.kt)("dt",null,(0,l.kt)("a",{href:"#upsert"},"upsert(table, uuid, record, options)")," \u21d2 ",(0,l.kt)("code",null,"Operation")),(0,l.kt)("dd",null,(0,l.kt)("p",null,"Insert or update a record using SQL MERGE")),(0,l.kt)("dt",null,(0,l.kt)("a",{href:"#upsertIf"},"upsertIf(logical, table, uuid, record, options)")," \u21d2 ",(0,l.kt)("code",null,"Operation")),(0,l.kt)("dd",null,(0,l.kt)("p",null,"Insert or update a record based on a logical condition using ON CONFLICT UPDATE")),(0,l.kt)("dt",null,(0,l.kt)("a",{href:"#upsertMany"},"upsertMany(table, uuid, records, options)")," \u21d2 ",(0,l.kt)("code",null,"Operation")),(0,l.kt)("dd",null,(0,l.kt)("p",null,"Insert or update multiple records using ON CONFLICT UPDATE and excluded"))),(0,l.kt)("a",{name:"addRowsToRefs"}),(0,l.kt)("h2",{id:"addrowstorefsstate-rows--state"},"addRowsToRefs(state, rows) \u21d2 ",(0,l.kt)("code",null,"State")),(0,l.kt)("p",null,"Sets the returned rows from a query as the first item in the state.references\narray, leaving state.data unchanged between operations."),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Kind"),": global function  "),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Param"),(0,l.kt)("th",{parentName:"tr",align:null},"Type"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"state"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("code",null,"State")),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"rows"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("code",null,"array")),(0,l.kt)("td",{parentName:"tr",align:null},"the array of rows returned from the sql query")))),(0,l.kt)("hr",null),(0,l.kt)("a",{name:"cleanupState"}),(0,l.kt)("h2",{id:"cleanupstatestate--state"},"cleanupState(state) \u21d2 ",(0,l.kt)("code",null,"State")),(0,l.kt)("p",null,"Removes unserializable keys from the state."),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Kind"),": global function  "),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Param"),(0,l.kt)("th",{parentName:"tr",align:null},"Type"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"state"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("code",null,"State"))))),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Example"),"  "),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"cleanupState(state)\n")),(0,l.kt)("hr",null),(0,l.kt)("a",{name:"createConnection"}),(0,l.kt)("h2",{id:"createconnectionstate--state"},"createConnection(state) \u21d2 ",(0,l.kt)("code",null,"State")),(0,l.kt)("p",null,"Creates a connection."),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Kind"),": global function  "),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Param"),(0,l.kt)("th",{parentName:"tr",align:null},"Type"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"state"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("code",null,"State")),(0,l.kt)("td",{parentName:"tr",align:null},"Runtime state.")))),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Example"),"  "),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"createConnection(state)\n")),(0,l.kt)("hr",null),(0,l.kt)("a",{name:"describeTable"}),(0,l.kt)("h2",{id:"describetabletablename-options--operation"},"describeTable(tableName, options) \u21d2 ",(0,l.kt)("code",null,"Operation")),(0,l.kt)("p",null,"List the columns of a table in a database."),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Kind"),": global function",(0,l.kt)("br",{parentName:"p"}),"\n",(0,l.kt)("strong",{parentName:"p"},"Access"),": public  "),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Param"),(0,l.kt)("th",{parentName:"tr",align:null},"Type"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"tableName"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("code",null,"string")),(0,l.kt)("td",{parentName:"tr",align:null},"The name of the table to describe")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"options"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("code",null,"object")),(0,l.kt)("td",{parentName:"tr",align:null},"Optional options argument")))),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Example"),"  "),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"describeTable('clinic_visits')\n")),(0,l.kt)("hr",null),(0,l.kt)("a",{name:"findValue"}),(0,l.kt)("h2",{id:"findvaluefilter--operation"},"findValue(filter) \u21d2 ",(0,l.kt)("code",null,"Operation")),(0,l.kt)("p",null,"Fetch a uuid key given a condition"),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Kind"),": global function",(0,l.kt)("br",{parentName:"p"}),"\n",(0,l.kt)("strong",{parentName:"p"},"Access"),": public  "),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Param"),(0,l.kt)("th",{parentName:"tr",align:null},"Type"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"filter"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("code",null,"object")),(0,l.kt)("td",{parentName:"tr",align:null},"A filter object with the lookup table, a uuid and the condition")))),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Example"),"  "),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"findValue({\n   uuid: 'id',\n   relation: 'users',\n   where: { first_name: 'Mama%', last_name: 'Cisse'},\n   operator: { first_name: 'like', last_name: '='}\n })\n")),(0,l.kt)("hr",null),(0,l.kt)("a",{name:"flattenRows"}),(0,l.kt)("h2",{id:"flattenrowsstate-rows--state"},"flattenRows(state, rows) \u21d2 ",(0,l.kt)("code",null,"State")),(0,l.kt)("p",null,"Returns a flatten object of the rows (array of arrays) with rowCount."),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Kind"),": global function  "),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Param"),(0,l.kt)("th",{parentName:"tr",align:null},"Type"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"state"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("code",null,"State")),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"rows"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("code",null,"array")),(0,l.kt)("td",{parentName:"tr",align:null},"the array of rows returned from the sql query")))),(0,l.kt)("hr",null),(0,l.kt)("a",{name:"insert"}),(0,l.kt)("h2",{id:"inserttable-record-options--operation"},"insert(table, record, options) \u21d2 ",(0,l.kt)("code",null,"Operation")),(0,l.kt)("p",null,"Insert a record"),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Kind"),": global function",(0,l.kt)("br",{parentName:"p"}),"\n",(0,l.kt)("strong",{parentName:"p"},"Access"),": public  "),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Param"),(0,l.kt)("th",{parentName:"tr",align:null},"Type"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"table"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("code",null,"string")),(0,l.kt)("td",{parentName:"tr",align:null},"The target table")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"record"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("code",null,"object")),(0,l.kt)("td",{parentName:"tr",align:null},"Payload data for the record as a JS object")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"options"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("code",null,"object")),(0,l.kt)("td",{parentName:"tr",align:null},"Optional options argument")))),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Example"),"  "),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"insert(table, record, {setNull: [\"'undefined'\", \"''\"], logValues: false})\n")),(0,l.kt)("hr",null),(0,l.kt)("a",{name:"insertMany"}),(0,l.kt)("h2",{id:"insertmanytable-records-options--operation"},"insertMany(table, records, options) \u21d2 ",(0,l.kt)("code",null,"Operation")),(0,l.kt)("p",null,"Insert many records, using the keys of the first as the column template"),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Kind"),": global function",(0,l.kt)("br",{parentName:"p"}),"\n",(0,l.kt)("strong",{parentName:"p"},"Access"),": public  "),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Param"),(0,l.kt)("th",{parentName:"tr",align:null},"Type"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"table"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("code",null,"string")),(0,l.kt)("td",{parentName:"tr",align:null},"The target table")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"records"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("code",null,"function")),(0,l.kt)("td",{parentName:"tr",align:null},"A function that takes state and returns an array of records")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"options"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("code",null,"object")),(0,l.kt)("td",{parentName:"tr",align:null},"Optional options argument")))),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Example"),"  "),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"insertMany(table, records, { setNull: false, writeSql: true, logValues: false })\n")),(0,l.kt)("hr",null),(0,l.kt)("a",{name:"insertTable"}),(0,l.kt)("h2",{id:"inserttabletablename-columns-options--operation"},"insertTable(tableName, columns, options) \u21d2 ",(0,l.kt)("code",null,"Operation")),(0,l.kt)("p",null,"Create a table in database when given an array of columns and a table_name."),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Kind"),": global function",(0,l.kt)("br",{parentName:"p"}),"\n",(0,l.kt)("strong",{parentName:"p"},"Access"),": public  "),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Param"),(0,l.kt)("th",{parentName:"tr",align:null},"Type"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"tableName"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("code",null,"string")),(0,l.kt)("td",{parentName:"tr",align:null},"The name of the table to create")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"columns"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("code",null,"array")),(0,l.kt)("td",{parentName:"tr",align:null},"An array of form columns")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"options"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("code",null,"object")),(0,l.kt)("td",{parentName:"tr",align:null},"Optional options argument")))),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Example"),"  "),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"insertTable('table_name', state => state.data.map(\n  column => ({\n    name: column.name,\n    type: column.type,\n    required: true, // optional\n    unique: false, // optional - to be set to true for unique constraint\n  })\n));\n")),(0,l.kt)("hr",null),(0,l.kt)("a",{name:"modifyTable"}),(0,l.kt)("h2",{id:"modifytabletablename-columns-options--operation"},"modifyTable(tableName, columns, options) \u21d2 ",(0,l.kt)("code",null,"Operation")),(0,l.kt)("p",null,"Alter an existing table in the database."),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Kind"),": global function",(0,l.kt)("br",{parentName:"p"}),"\n",(0,l.kt)("strong",{parentName:"p"},"Access"),": public  "),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Param"),(0,l.kt)("th",{parentName:"tr",align:null},"Type"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"tableName"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("code",null,"string")),(0,l.kt)("td",{parentName:"tr",align:null},"The name of the table to alter")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"columns"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("code",null,"array")),(0,l.kt)("td",{parentName:"tr",align:null},"An array of form columns")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"options"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("code",null,"object")),(0,l.kt)("td",{parentName:"tr",align:null},"Optional options argument")))),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Example"),"  "),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"modifyTable('table_name', state => state.data.map(\n  newColumn => ({\n    name: newColumn.name,\n    type: newColumn.type,\n    required: true, // optional\n    unique: false, // optional - to be set to true for unique constraint\n  })\n));\n")),(0,l.kt)("hr",null),(0,l.kt)("a",{name:"sql"}),(0,l.kt)("h2",{id:"sqlparams--operation"},"sql(params) \u21d2 ",(0,l.kt)("code",null,"Operation")),(0,l.kt)("p",null,"Execute an SQL statement"),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Kind"),": global function",(0,l.kt)("br",{parentName:"p"}),"\n",(0,l.kt)("strong",{parentName:"p"},"Access"),": public  "),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Param"),(0,l.kt)("th",{parentName:"tr",align:null},"Type"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"params"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("code",null,"object")),(0,l.kt)("td",{parentName:"tr",align:null},"Payload data for the message")))),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Example"),"  "),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"sql({ query, options })\n")),(0,l.kt)("hr",null),(0,l.kt)("a",{name:"upsert"}),(0,l.kt)("h2",{id:"upserttable-uuid-record-options--operation"},"upsert(table, uuid, record, options) \u21d2 ",(0,l.kt)("code",null,"Operation")),(0,l.kt)("p",null,"Insert or update a record using SQL MERGE"),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Kind"),": global function",(0,l.kt)("br",{parentName:"p"}),"\n",(0,l.kt)("strong",{parentName:"p"},"Access"),": public  "),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Param"),(0,l.kt)("th",{parentName:"tr",align:null},"Type"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"table"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("code",null,"string")),(0,l.kt)("td",{parentName:"tr",align:null},"The target table")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"uuid"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("code",null,"string")),(0,l.kt)("td",{parentName:"tr",align:null},"The uuid column to determine a matching/existing record")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"record"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("code",null,"object")),(0,l.kt)("td",{parentName:"tr",align:null},"Payload data for the record as a JS object")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"options"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("code",null,"object")),(0,l.kt)("td",{parentName:"tr",align:null},"Optional options argument")))),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Example"),"  "),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"upsert(table, uuid, record, { setNull: \"'undefined'\", logValues: false})\nupsert(table, [uuid1, uuid2], record, { setNull: \"'undefined'\", logValues: false})\n")),(0,l.kt)("hr",null),(0,l.kt)("a",{name:"upsertIf"}),(0,l.kt)("h2",{id:"upsertiflogical-table-uuid-record-options--operation"},"upsertIf(logical, table, uuid, record, options) \u21d2 ",(0,l.kt)("code",null,"Operation")),(0,l.kt)("p",null,"Insert or update a record based on a logical condition using ON CONFLICT UPDATE"),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Kind"),": global function",(0,l.kt)("br",{parentName:"p"}),"\n",(0,l.kt)("strong",{parentName:"p"},"Access"),": public  "),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Param"),(0,l.kt)("th",{parentName:"tr",align:null},"Type"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"logical"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("code",null,"string")),(0,l.kt)("td",{parentName:"tr",align:null},"a data to check existing value for.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"table"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("code",null,"string")),(0,l.kt)("td",{parentName:"tr",align:null},"The target table")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"uuid"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("code",null,"string")),(0,l.kt)("td",{parentName:"tr",align:null},"The uuid column to determine a matching/existing record")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"record"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("code",null,"object")),(0,l.kt)("td",{parentName:"tr",align:null},"Payload data for the record as a JS object or function")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"options"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("code",null,"object")),(0,l.kt)("td",{parentName:"tr",align:null},"Optional options argument")))),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Example"),"  "),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"upsertIf(\n  dataValue('name'),\n  'users', // the DB table\n  'uuid', // a DB column with a unique constraint\n  { name: 'Elodie', id: 7 },\n  { writeSql:true, execute: true, logValues: false }\n)\n")),(0,l.kt)("hr",null),(0,l.kt)("a",{name:"upsertMany"}),(0,l.kt)("h2",{id:"upsertmanytable-uuid-records-options--operation"},"upsertMany(table, uuid, records, options) \u21d2 ",(0,l.kt)("code",null,"Operation")),(0,l.kt)("p",null,"Insert or update multiple records using ON CONFLICT UPDATE and excluded"),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Kind"),": global function",(0,l.kt)("br",{parentName:"p"}),"\n",(0,l.kt)("strong",{parentName:"p"},"Access"),": public  "),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Param"),(0,l.kt)("th",{parentName:"tr",align:null},"Type"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"table"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("code",null,"string")),(0,l.kt)("td",{parentName:"tr",align:null},"The target table")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"uuid"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("code",null,"string")),(0,l.kt)("td",{parentName:"tr",align:null},"The uuid column to determine a matching/existing record")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"records"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("code",null,"function")),(0,l.kt)("td",{parentName:"tr",align:null},"A function that takes state and returns an array of records")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"options"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("code",null,"object")),(0,l.kt)("td",{parentName:"tr",align:null},"Optional options argument")))),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Example"),"  "),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"upsertMany(\n 'users', 'email', records, { logValues: false }\n)\nupsertMany(\n 'users', ['email', 'phone'], records, { logValues: false }\n)\n")),(0,l.kt)("hr",null))}k.isMDXComponent=!0}}]);