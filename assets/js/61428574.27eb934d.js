"use strict";(self.webpackChunk_openfn_docs=self.webpackChunk_openfn_docs||[]).push([[72543],{3905:(t,e,a)=>{a.d(e,{Zo:()=>d,kt:()=>k});var n=a(67294);function r(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function l(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,n)}return a}function p(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?l(Object(a),!0).forEach((function(e){r(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function o(t,e){if(null==t)return{};var a,n,r=function(t,e){if(null==t)return{};var a,n,r={},l=Object.keys(t);for(n=0;n<l.length;n++)a=l[n],e.indexOf(a)>=0||(r[a]=t[a]);return r}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(n=0;n<l.length;n++)a=l[n],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(r[a]=t[a])}return r}var i=n.createContext({}),u=function(t){var e=n.useContext(i),a=e;return t&&(a="function"==typeof t?t(e):p(p({},e),t)),a},d=function(t){var e=u(t.components);return n.createElement(i.Provider,{value:e},t.children)},s={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},m=n.forwardRef((function(t,e){var a=t.components,r=t.mdxType,l=t.originalType,i=t.parentName,d=o(t,["components","mdxType","originalType","parentName"]),m=u(a),k=r,c=m["".concat(i,".").concat(k)]||m[k]||s[k]||l;return a?n.createElement(c,p(p({ref:e},d),{},{components:a})):n.createElement(c,p({ref:e},d))}));function k(t,e){var a=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var l=a.length,p=new Array(l);p[0]=m;var o={};for(var i in e)hasOwnProperty.call(e,i)&&(o[i]=e[i]);o.originalType=t,o.mdxType="string"==typeof t?t:r,p[1]=o;for(var u=2;u<l;u++)p[u]=a[u];return n.createElement.apply(null,p)}return n.createElement.apply(null,a)}m.displayName="MDXCreateElement"},58334:(t,e,a)=>{a.r(e),a.d(e,{assets:()=>i,contentTitle:()=>p,default:()=>s,frontMatter:()=>l,metadata:()=>o,toc:()=>u});var n=a(87462),r=(a(67294),a(3905));const l={title:"postgresql@3.4.2",id:"postgresql-docs",keywords:["adaptor","postgresql","sql","findValue","insert","insertMany","upsert","upsertIf","upsertMany","describeTable","insertTable","modifyTable"]},p=void 0,o={unversionedId:"packages/postgresql-docs",id:"packages/postgresql-docs",title:"postgresql@3.4.2",description:"Adaptor",source:"@site/adaptors/packages/postgresql-docs.md",sourceDirName:"packages",slug:"/packages/postgresql-docs",permalink:"/adaptors/packages/postgresql-docs",draft:!1,tags:[],version:"current",frontMatter:{title:"postgresql@3.4.2",id:"postgresql-docs",keywords:["adaptor","postgresql","sql","findValue","insert","insertMany","upsert","upsertIf","upsertMany","describeTable","insertTable","modifyTable"]},sidebar:"library",previous:{title:"openmrs developer readme",permalink:"/adaptors/packages/openmrs-readme"},next:{title:"postgresql changelog",permalink:"/adaptors/packages/postgresql-changelog"}},i={},u=[{value:"Adaptor",id:"adaptor",level:2},{value:"Adaptor.execute",id:"adaptorexecute",level:3},{value:"new exports.execute(operations)",id:"new-exportsexecuteoperations",level:4},{value:"Adaptor.sql",id:"adaptorsql",level:3},{value:"new exports.sql(sqlQuery, options)",id:"new-exportssqlsqlquery-options",level:4},{value:"Adaptor.findValue",id:"adaptorfindvalue",level:3},{value:"new exports.findValue(filter)",id:"new-exportsfindvaluefilter",level:4},{value:"Adaptor.insert",id:"adaptorinsert",level:3},{value:"new exports.insert(table, record, options)",id:"new-exportsinserttable-record-options",level:4},{value:"Adaptor.insertMany",id:"adaptorinsertmany",level:3},{value:"new exports.insertMany(table, records, options)",id:"new-exportsinsertmanytable-records-options",level:4},{value:"Adaptor.upsert",id:"adaptorupsert",level:3},{value:"new exports.upsert(table, uuid, record, options)",id:"new-exportsupserttable-uuid-record-options",level:4},{value:"Adaptor.upsertIf",id:"adaptorupsertif",level:3},{value:"new exports.upsertIf(logical, table, uuid, record, options)",id:"new-exportsupsertiflogical-table-uuid-record-options",level:4},{value:"Adaptor.upsertMany",id:"adaptorupsertmany",level:3},{value:"new exports.upsertMany(table, uuid, data, options)",id:"new-exportsupsertmanytable-uuid-data-options",level:4},{value:"Adaptor.describeTable",id:"adaptordescribetable",level:3},{value:"new exports.describeTable(tableName, options)",id:"new-exportsdescribetabletablename-options",level:4},{value:"Adaptor.insertTable",id:"adaptorinserttable",level:3},{value:"new exports.insertTable(tableName, columns, options)",id:"new-exportsinserttabletablename-columns-options",level:4},{value:"Adaptor.modifyTable",id:"adaptormodifytable",level:3},{value:"new exports.modifyTable(tableName, columns, options)",id:"new-exportsmodifytabletablename-columns-options",level:4}],d={toc:u};function s(t){let{components:e,...a}=t;return(0,r.kt)("wrapper",(0,n.Z)({},d,a,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("a",{name:"module_Adaptor"}),(0,r.kt)("h2",{id:"adaptor"},"Adaptor"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#module_Adaptor"},"Adaptor"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#module_Adaptor.execute"},".execute"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#new_module_Adaptor.execute_new"},"new exports.execute(operations)")))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#module_Adaptor.sql"},".sql"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#new_module_Adaptor.sql_new"},"new exports.sql(sqlQuery, options)")))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#module_Adaptor.findValue"},".findValue"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#new_module_Adaptor.findValue_new"},"new exports.findValue(filter)")))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#module_Adaptor.insert"},".insert"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#new_module_Adaptor.insert_new"},"new exports.insert(table, record, options)")))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#module_Adaptor.insertMany"},".insertMany"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#new_module_Adaptor.insertMany_new"},"new exports.insertMany(table, records, options)")))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#module_Adaptor.upsert"},".upsert"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#new_module_Adaptor.upsert_new"},"new exports.upsert(table, uuid, record, options)")))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#module_Adaptor.upsertIf"},".upsertIf"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#new_module_Adaptor.upsertIf_new"},"new exports.upsertIf(logical, table, uuid, record, options)")))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#module_Adaptor.upsertMany"},".upsertMany"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#new_module_Adaptor.upsertMany_new"},"new exports.upsertMany(table, uuid, data, options)")))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#module_Adaptor.describeTable"},".describeTable"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#new_module_Adaptor.describeTable_new"},"new exports.describeTable(tableName, options)")))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#module_Adaptor.insertTable"},".insertTable"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#new_module_Adaptor.insertTable_new"},"new exports.insertTable(tableName, columns, options)")))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#module_Adaptor.modifyTable"},".modifyTable"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#new_module_Adaptor.modifyTable_new"},"new exports.modifyTable(tableName, columns, options)"))))))),(0,r.kt)("a",{name:"module_Adaptor.execute"}),(0,r.kt)("h3",{id:"adaptorexecute"},"Adaptor.execute"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Kind"),": static class of ",(0,r.kt)("a",{parentName:"p",href:"#module_Adaptor"},(0,r.kt)("code",null,"Adaptor")),"  "),(0,r.kt)("a",{name:"new_module_Adaptor.execute_new"}),(0,r.kt)("h4",{id:"new-exportsexecuteoperations"},"new exports.execute(operations)"),(0,r.kt)("p",null,"Execute a sequence of operations.\nWraps ",(0,r.kt)("inlineCode",{parentName:"p"},"language-common/execute"),", and prepends initial state for postgresql."),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Param"),(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"operations"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("code",null,"Operations")),(0,r.kt)("td",{parentName:"tr",align:null},"Operations to be performed.")))),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Example"),"  "),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"execute(\n  create('foo'),\n  delete('bar')\n)(state)\n")),(0,r.kt)("a",{name:"module_Adaptor.sql"}),(0,r.kt)("h3",{id:"adaptorsql"},"Adaptor.sql"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Kind"),": static class of ",(0,r.kt)("a",{parentName:"p",href:"#module_Adaptor"},(0,r.kt)("code",null,"Adaptor")),(0,r.kt)("br",{parentName:"p"}),"\n",(0,r.kt)("strong",{parentName:"p"},"Access"),": public  "),(0,r.kt)("a",{name:"new_module_Adaptor.sql_new"}),(0,r.kt)("h4",{id:"new-exportssqlsqlquery-options"},"new exports.sql(sqlQuery, options)"),(0,r.kt)("p",null,"Execute an SQL statement"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Param"),(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"sqlQuery"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("code",null,"function")),(0,r.kt)("td",{parentName:"tr",align:null},"a function which takes state and returns a string of SQL.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"options"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("code",null,"object")),(0,r.kt)("td",{parentName:"tr",align:null},"Optional options argument")))),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Example"),"  "),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"sql(state => `select(*) from ${state.data.tableName};`, { writeSql: true })\n")),(0,r.kt)("a",{name:"module_Adaptor.findValue"}),(0,r.kt)("h3",{id:"adaptorfindvalue"},"Adaptor.findValue"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Kind"),": static class of ",(0,r.kt)("a",{parentName:"p",href:"#module_Adaptor"},(0,r.kt)("code",null,"Adaptor")),(0,r.kt)("br",{parentName:"p"}),"\n",(0,r.kt)("strong",{parentName:"p"},"Access"),": public  "),(0,r.kt)("a",{name:"new_module_Adaptor.findValue_new"}),(0,r.kt)("h4",{id:"new-exportsfindvaluefilter"},"new exports.findValue(filter)"),(0,r.kt)("p",null,"Fetch a uuid key given a condition"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Param"),(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"filter"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("code",null,"object")),(0,r.kt)("td",{parentName:"tr",align:null},"A filter object with the lookup table, a uuid and the condition")))),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Example"),"  "),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"findValue({\n   uuid: 'id',\n   relation: 'users',\n   where: { first_name: 'Mamadou' },\n   operator: { first_name: 'like' }\n })\n")),(0,r.kt)("a",{name:"module_Adaptor.insert"}),(0,r.kt)("h3",{id:"adaptorinsert"},"Adaptor.insert"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Kind"),": static class of ",(0,r.kt)("a",{parentName:"p",href:"#module_Adaptor"},(0,r.kt)("code",null,"Adaptor")),(0,r.kt)("br",{parentName:"p"}),"\n",(0,r.kt)("strong",{parentName:"p"},"Access"),": public  "),(0,r.kt)("a",{name:"new_module_Adaptor.insert_new"}),(0,r.kt)("h4",{id:"new-exportsinserttable-record-options"},"new exports.insert(table, record, options)"),(0,r.kt)("p",null,"Insert a record"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Param"),(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"table"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("code",null,"string")),(0,r.kt)("td",{parentName:"tr",align:null},"The target table")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"record"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("code",null,"object")),(0,r.kt)("td",{parentName:"tr",align:null},"Payload data for the record as a JS object or function")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"options"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("code",null,"object")),(0,r.kt)("td",{parentName:"tr",align:null},"Optional options argument")))),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Example"),"  "),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"insert('users', { name: 'Elodie', id: 7 }, { setNull: \"'NaN'\", logValues: true });\n")),(0,r.kt)("a",{name:"module_Adaptor.insertMany"}),(0,r.kt)("h3",{id:"adaptorinsertmany"},"Adaptor.insertMany"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Kind"),": static class of ",(0,r.kt)("a",{parentName:"p",href:"#module_Adaptor"},(0,r.kt)("code",null,"Adaptor")),(0,r.kt)("br",{parentName:"p"}),"\n",(0,r.kt)("strong",{parentName:"p"},"Access"),": public  "),(0,r.kt)("a",{name:"new_module_Adaptor.insertMany_new"}),(0,r.kt)("h4",{id:"new-exportsinsertmanytable-records-options"},"new exports.insertMany(table, records, options)"),(0,r.kt)("p",null,"Insert many records, using the keys of the first as the column template"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Param"),(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"table"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("code",null,"string")),(0,r.kt)("td",{parentName:"tr",align:null},"The target table")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"records"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("code",null,"array")),(0,r.kt)("td",{parentName:"tr",align:null},"An array or a function that takes state and returns an array")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"options"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("code",null,"object")),(0,r.kt)("td",{parentName:"tr",align:null},"Optional options argument")))),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Example"),"  "),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"insertMany('users', state => state.data.recordArray, { setNull: \"'undefined'\", logValues: true });\n")),(0,r.kt)("a",{name:"module_Adaptor.upsert"}),(0,r.kt)("h3",{id:"adaptorupsert"},"Adaptor.upsert"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Kind"),": static class of ",(0,r.kt)("a",{parentName:"p",href:"#module_Adaptor"},(0,r.kt)("code",null,"Adaptor")),(0,r.kt)("br",{parentName:"p"}),"\n",(0,r.kt)("strong",{parentName:"p"},"Access"),": public  "),(0,r.kt)("a",{name:"new_module_Adaptor.upsert_new"}),(0,r.kt)("h4",{id:"new-exportsupserttable-uuid-record-options"},"new exports.upsert(table, uuid, record, options)"),(0,r.kt)("p",null,"Insert or update a record using ON CONFLICT UPDATE"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Param"),(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"table"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("code",null,"string")),(0,r.kt)("td",{parentName:"tr",align:null},"The target table")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"uuid"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("code",null,"string")),(0,r.kt)("td",{parentName:"tr",align:null},"The uuid column to determine a matching/existing record")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"record"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("code",null,"object")),(0,r.kt)("td",{parentName:"tr",align:null},"Payload data for the record as a JS object or function")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"options"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("code",null,"object")),(0,r.kt)("td",{parentName:"tr",align:null},"Optional options argument")))),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Example"),"  "),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"upsert(\n  'users', // the DB table\n  'ON CONSTRAINT users_pkey', // a DB column with a unique constraint OR a CONSTRAINT NAME\n  { name: 'Elodie', id: 7 },\n  { setNull: [\"''\", \"'undefined'\"], writeSql:true, execute: true, logValues: true }\n)\n")),(0,r.kt)("a",{name:"module_Adaptor.upsertIf"}),(0,r.kt)("h3",{id:"adaptorupsertif"},"Adaptor.upsertIf"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Kind"),": static class of ",(0,r.kt)("a",{parentName:"p",href:"#module_Adaptor"},(0,r.kt)("code",null,"Adaptor")),(0,r.kt)("br",{parentName:"p"}),"\n",(0,r.kt)("strong",{parentName:"p"},"Access"),": public  "),(0,r.kt)("a",{name:"new_module_Adaptor.upsertIf_new"}),(0,r.kt)("h4",{id:"new-exportsupsertiflogical-table-uuid-record-options"},"new exports.upsertIf(logical, table, uuid, record, options)"),(0,r.kt)("p",null,"Insert or update a record based on a logical condition using ON CONFLICT UPDATE"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Param"),(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"logical"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("code",null,"string")),(0,r.kt)("td",{parentName:"tr",align:null},"a data to check existing value for.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"table"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("code",null,"string")),(0,r.kt)("td",{parentName:"tr",align:null},"The target table")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"uuid"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("code",null,"string")),(0,r.kt)("td",{parentName:"tr",align:null},"The uuid column to determine a matching/existing record")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"record"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("code",null,"object")),(0,r.kt)("td",{parentName:"tr",align:null},"Payload data for the record as a JS object or function")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"options"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("code",null,"object")),(0,r.kt)("td",{parentName:"tr",align:null},"Optional options argument")))),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Example"),"  "),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"upsertIf(\n  dataValue('name'),\n  'users', // the DB table\n  'ON CONSTRAINT users_pkey', // a DB column with a unique constraint OR a CONSTRAINT NAME\n  { name: 'Elodie', id: 7 },\n  { writeSql:true, execute: true }\n)\n")),(0,r.kt)("a",{name:"module_Adaptor.upsertMany"}),(0,r.kt)("h3",{id:"adaptorupsertmany"},"Adaptor.upsertMany"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Kind"),": static class of ",(0,r.kt)("a",{parentName:"p",href:"#module_Adaptor"},(0,r.kt)("code",null,"Adaptor")),(0,r.kt)("br",{parentName:"p"}),"\n",(0,r.kt)("strong",{parentName:"p"},"Access"),": public  "),(0,r.kt)("a",{name:"new_module_Adaptor.upsertMany_new"}),(0,r.kt)("h4",{id:"new-exportsupsertmanytable-uuid-data-options"},"new exports.upsertMany(table, uuid, data, options)"),(0,r.kt)("p",null,"Insert or update multiple records using ON CONFLICT UPDATE and excluded"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Param"),(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"table"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("code",null,"string")),(0,r.kt)("td",{parentName:"tr",align:null},"The target table")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"uuid"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("code",null,"string")),(0,r.kt)("td",{parentName:"tr",align:null},"The uuid column to determine a matching/existing record")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"data"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("code",null,"array")),(0,r.kt)("td",{parentName:"tr",align:null},"An array of objects or a function that returns an array")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"options"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("code",null,"object")),(0,r.kt)("td",{parentName:"tr",align:null},"Optional options argument")))),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Example"),"  "),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"upsertMany(\n  'users', // the DB table\n  'email', // a DB column with a unique constraint OR a CONSTRAINT NAME\n  [\n    { name: 'one', email: 'one@openfn.org },\n    { name: 'two', email: 'two@openfn.org },\n  ]\n { logValues: true }\n)\n")),(0,r.kt)("a",{name:"module_Adaptor.describeTable"}),(0,r.kt)("h3",{id:"adaptordescribetable"},"Adaptor.describeTable"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Kind"),": static class of ",(0,r.kt)("a",{parentName:"p",href:"#module_Adaptor"},(0,r.kt)("code",null,"Adaptor")),(0,r.kt)("br",{parentName:"p"}),"\n",(0,r.kt)("strong",{parentName:"p"},"Access"),": public  "),(0,r.kt)("a",{name:"new_module_Adaptor.describeTable_new"}),(0,r.kt)("h4",{id:"new-exportsdescribetabletablename-options"},"new exports.describeTable(tableName, options)"),(0,r.kt)("p",null,"List the columns of a table in a database."),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Param"),(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"tableName"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("code",null,"string")),(0,r.kt)("td",{parentName:"tr",align:null},"The name of the table to describe")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"options"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("code",null,"object")),(0,r.kt)("td",{parentName:"tr",align:null},"Optional options argument")))),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Example"),"  "),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"describeTable('clinic_visits')\n")),(0,r.kt)("a",{name:"module_Adaptor.insertTable"}),(0,r.kt)("h3",{id:"adaptorinserttable"},"Adaptor.insertTable"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Kind"),": static class of ",(0,r.kt)("a",{parentName:"p",href:"#module_Adaptor"},(0,r.kt)("code",null,"Adaptor")),(0,r.kt)("br",{parentName:"p"}),"\n",(0,r.kt)("strong",{parentName:"p"},"Access"),": public  "),(0,r.kt)("a",{name:"new_module_Adaptor.insertTable_new"}),(0,r.kt)("h4",{id:"new-exportsinserttabletablename-columns-options"},"new exports.insertTable(tableName, columns, options)"),(0,r.kt)("p",null,"Create a table in database when given an array of columns and a table_name."),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Param"),(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"tableName"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("code",null,"string")),(0,r.kt)("td",{parentName:"tr",align:null},"The name of the table to create")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"columns"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("code",null,"array")),(0,r.kt)("td",{parentName:"tr",align:null},"An array of form columns")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"options"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("code",null,"object")),(0,r.kt)("td",{parentName:"tr",align:null},"Optional options argument")))),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Example"),"  "),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"insertTable('table_name', state => state.data.map(\n  column => ({\n    name: column.name,\n    type: column.type,\n    required: true, // optional\n    unique: false, // optional - to be set to true for unique constraint\n  })\n));\n")),(0,r.kt)("a",{name:"module_Adaptor.modifyTable"}),(0,r.kt)("h3",{id:"adaptormodifytable"},"Adaptor.modifyTable"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Kind"),": static class of ",(0,r.kt)("a",{parentName:"p",href:"#module_Adaptor"},(0,r.kt)("code",null,"Adaptor")),(0,r.kt)("br",{parentName:"p"}),"\n",(0,r.kt)("strong",{parentName:"p"},"Access"),": public  "),(0,r.kt)("a",{name:"new_module_Adaptor.modifyTable_new"}),(0,r.kt)("h4",{id:"new-exportsmodifytabletablename-columns-options"},"new exports.modifyTable(tableName, columns, options)"),(0,r.kt)("p",null,"Alter an existing table in the database."),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Param"),(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"tableName"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("code",null,"string")),(0,r.kt)("td",{parentName:"tr",align:null},"The name of the table to alter")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"columns"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("code",null,"array")),(0,r.kt)("td",{parentName:"tr",align:null},"An array of form columns")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"options"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("code",null,"object")),(0,r.kt)("td",{parentName:"tr",align:null},"Optional options argument")))),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Example"),"  "),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"modifyTable('table_name', state => state.data.map(\n  newColumn => ({\n    name: newColumn.name,\n    type: newColumn.type,\n    required: true, // optional\n    unique: false, // optional - to be set to true for unique constraint\n  })\n));\n")))}s.isMDXComponent=!0}}]);