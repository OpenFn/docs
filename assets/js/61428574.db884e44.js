"use strict";(self.webpackChunk_openfn_docs=self.webpackChunk_openfn_docs||[]).push([[72543],{3905:(t,e,a)=>{a.d(e,{Zo:()=>d,kt:()=>c});var n=a(67294);function l(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function r(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,n)}return a}function o(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?r(Object(a),!0).forEach((function(e){l(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function i(t,e){if(null==t)return{};var a,n,l=function(t,e){if(null==t)return{};var a,n,l={},r=Object.keys(t);for(n=0;n<r.length;n++)a=r[n],e.indexOf(a)>=0||(l[a]=t[a]);return l}(t,e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);for(n=0;n<r.length;n++)a=r[n],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(l[a]=t[a])}return l}var u=n.createContext({}),p=function(t){var e=n.useContext(u),a=e;return t&&(a="function"==typeof t?t(e):o(o({},e),t)),a},d=function(t){var e=p(t.components);return n.createElement(u.Provider,{value:e},t.children)},k="mdxType",s={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},m=n.forwardRef((function(t,e){var a=t.components,l=t.mdxType,r=t.originalType,u=t.parentName,d=i(t,["components","mdxType","originalType","parentName"]),k=p(a),m=l,c=k["".concat(u,".").concat(m)]||k[m]||s[m]||r;return a?n.createElement(c,o(o({ref:e},d),{},{components:a})):n.createElement(c,o({ref:e},d))}));function c(t,e){var a=arguments,l=e&&e.mdxType;if("string"==typeof t||l){var r=a.length,o=new Array(r);o[0]=m;var i={};for(var u in e)hasOwnProperty.call(e,u)&&(i[u]=e[u]);i.originalType=t,i[k]="string"==typeof t?t:l,o[1]=i;for(var p=2;p<r;p++)o[p]=a[p];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}m.displayName="MDXCreateElement"},90867:(t,e,a)=>{a.r(e),a.d(e,{assets:()=>u,contentTitle:()=>o,default:()=>s,frontMatter:()=>r,metadata:()=>i,toc:()=>p});var n=a(87462),l=(a(67294),a(3905));const r={title:"postgresql@4.0.0",id:"postgresql-docs",keywords:["adaptor","postgresql","describeTable","findValue","insert","insertMany","insertTable","modifyTable","sql","upsert","upsertIf","upsertMany"]},o=void 0,i={unversionedId:"packages/postgresql-docs",id:"packages/postgresql-docs",title:"postgresql@4.0.0",description:"Functions",source:"@site/adaptors/packages/postgresql-docs.md",sourceDirName:"packages",slug:"/packages/postgresql-docs",permalink:"/adaptors/packages/postgresql-docs",draft:!1,tags:[],version:"current",frontMatter:{title:"postgresql@4.0.0",id:"postgresql-docs",keywords:["adaptor","postgresql","describeTable","findValue","insert","insertMany","insertTable","modifyTable","sql","upsert","upsertIf","upsertMany"]},sidebar:"adaptors",previous:{title:"PostgreSQL",permalink:"/adaptors/postgresql"},next:{title:"Config for postgresql",permalink:"/adaptors/packages/postgresql-configuration-schema"}},u={},p=[{value:"Functions",id:"functions",level:2},{value:"describeTable",id:"describetable",level:2},{value:"findValue",id:"findvalue",level:2},{value:"insert",id:"insert",level:2},{value:"insertMany",id:"insertmany",level:2},{value:"insertTable",id:"inserttable",level:2},{value:"modifyTable",id:"modifytable",level:2},{value:"sql",id:"sql",level:2},{value:"upsert",id:"upsert",level:2},{value:"upsertIf",id:"upsertif",level:2},{value:"upsertMany",id:"upsertmany",level:2}],d={toc:p},k="wrapper";function s(t){let{components:e,...a}=t;return(0,l.kt)(k,(0,n.Z)({},d,a,{components:e,mdxType:"MDXLayout"}),(0,l.kt)("h2",{id:"functions"},"Functions"),(0,l.kt)("dl",null,(0,l.kt)("dt",null,(0,l.kt)("a",{href:"#describeTable"},"describeTable(tableName, [options], callback)")),(0,l.kt)("dt",null,(0,l.kt)("a",{href:"#findValue"},"findValue([filter])")),(0,l.kt)("dt",null,(0,l.kt)("a",{href:"#insert"},"insert(table, record, [options], callback)")),(0,l.kt)("dt",null,(0,l.kt)("a",{href:"#insertMany"},"insertMany(table, records, [options], callback)")),(0,l.kt)("dt",null,(0,l.kt)("a",{href:"#insertTable"},"insertTable(tableName, columns, [options], callback)")),(0,l.kt)("dt",null,(0,l.kt)("a",{href:"#modifyTable"},"modifyTable(tableName, columns, [options], callback)")),(0,l.kt)("dt",null,(0,l.kt)("a",{href:"#sql"},"sql(sqlQuery, [options], callback)")),(0,l.kt)("dt",null,(0,l.kt)("a",{href:"#upsert"},"upsert(table, uuid, record, [options], callback)")),(0,l.kt)("dt",null,(0,l.kt)("a",{href:"#upsertIf"},"upsertIf(logical, table, uuid, record, [options], callback)")),(0,l.kt)("dt",null,(0,l.kt)("a",{href:"#upsertMany"},"upsertMany(table, uuid, data, [options], callback)"))),(0,l.kt)("h2",{id:"describetable"},"describeTable"),(0,l.kt)("p",null,"describeTable(tableName, ","[options]",", callback) \u21d2 ",(0,l.kt)("code",null,"Operation"),"\nList the columns of a table in a database."),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Kind"),": global function",(0,l.kt)("br",{parentName:"p"}),"\n",(0,l.kt)("strong",{parentName:"p"},"Access"),": public  "),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Param"),(0,l.kt)("th",{parentName:"tr",align:null},"Type"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"tableName"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("code",null,"string")),(0,l.kt)("td",{parentName:"tr",align:null},"The name of the table to describe")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"[options]"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("code",null,"object")),(0,l.kt)("td",{parentName:"tr",align:null},"Optional options argument")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"[options.writeSql]"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("code",null,"boolean")),(0,l.kt)("td",{parentName:"tr",align:null},"A boolean value that specifies whether to log the generated SQL statement. Defaults to false.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"[options.execute]"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("code",null,"boolean")),(0,l.kt)("td",{parentName:"tr",align:null},"A boolean value that specifies whether to execute the generated SQL statement. Defaults to false.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"callback"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("code",null,"function")),(0,l.kt)("td",{parentName:"tr",align:null},"(Optional) callback function")))),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Example"),"  "),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"describeTable('clinic_visits')\n")),(0,l.kt)("hr",null),(0,l.kt)("h2",{id:"findvalue"},"findValue"),(0,l.kt)("p",null,"findValue(","[filter]",") \u21d2 ",(0,l.kt)("code",null,"value"),"\nFetch a uuid key given a condition"),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Kind"),": global function",(0,l.kt)("br",{parentName:"p"}),"\n",(0,l.kt)("strong",{parentName:"p"},"Access"),": public  "),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Param"),(0,l.kt)("th",{parentName:"tr",align:null},"Type"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"[filter]"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("code",null,"object")),(0,l.kt)("td",{parentName:"tr",align:null},"A filter object with the lookup table, a uuid and the condition")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"[filter.uuid]"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("code",null,"string")),(0,l.kt)("td",{parentName:"tr",align:null},"The uuid value to search for in the specified relation.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"[filter.relation]"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("code",null,"string")),(0,l.kt)("td",{parentName:"tr",align:null},"The name of the relation to search for the uuid value.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"[filter.where]"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("code",null,"object")),(0,l.kt)("td",{parentName:"tr",align:null},"An object that contains key-value pairs to filter the search results.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"[filter.operator]"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("code",null,"object")),(0,l.kt)("td",{parentName:"tr",align:null},"An object that contains key-value pairs to specify the type of comparison to perform on the where clause.")))),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Example"),"  "),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"findValue({\n   uuid: 'id',\n   relation: 'users',\n   where: { first_name: 'Mamadou' },\n   operator: { first_name: 'like' }\n })\n")),(0,l.kt)("hr",null),(0,l.kt)("h2",{id:"insert"},"insert"),(0,l.kt)("p",null,"insert(table, record, ","[options]",", callback) \u21d2 ",(0,l.kt)("code",null,"Operation"),"\nInsert a record"),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Kind"),": global function",(0,l.kt)("br",{parentName:"p"}),"\n",(0,l.kt)("strong",{parentName:"p"},"Access"),": public  "),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Param"),(0,l.kt)("th",{parentName:"tr",align:null},"Type"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"table"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("code",null,"string")),(0,l.kt)("td",{parentName:"tr",align:null},"The target table")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"record"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("code",null,"object")),(0,l.kt)("td",{parentName:"tr",align:null},"Payload data for the record as a JS object or function")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"[options]"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("code",null,"object")),(0,l.kt)("td",{parentName:"tr",align:null},"Optional options argument")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"[options.setNull]"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("code",null,"string")),(0,l.kt)("td",{parentName:"tr",align:null},"A string value that specifies the behavior for inserting null values.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"[options.logValues]"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("code",null,"boolean")),(0,l.kt)("td",{parentName:"tr",align:null},"A boolean value that specifies whether to log the inserted values to the console. Defaults to false.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"[options.writeSql]"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("code",null,"boolean")),(0,l.kt)("td",{parentName:"tr",align:null},"A boolean value that specifies whether to log the generated SQL statement. Defaults to false.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"[options.execute]"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("code",null,"boolean")),(0,l.kt)("td",{parentName:"tr",align:null},"A boolean value that specifies whether to execute the generated SQL statement. Defaults to false.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"callback"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("code",null,"function")),(0,l.kt)("td",{parentName:"tr",align:null},"(Optional) callback function")))),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Example"),"  "),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"insert('users', { name: 'Elodie', id: 7 }, { setNull: \"'NaN'\", logValues: true });\n")),(0,l.kt)("hr",null),(0,l.kt)("h2",{id:"insertmany"},"insertMany"),(0,l.kt)("p",null,"insertMany(table, records, ","[options]",", callback) \u21d2 ",(0,l.kt)("code",null,"Operation"),"\nInsert many records, using the keys of the first as the column template"),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Kind"),": global function",(0,l.kt)("br",{parentName:"p"}),"\n",(0,l.kt)("strong",{parentName:"p"},"Access"),": public  "),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Param"),(0,l.kt)("th",{parentName:"tr",align:null},"Type"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"table"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("code",null,"string")),(0,l.kt)("td",{parentName:"tr",align:null},"The target table")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"records"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("code",null,"array")),(0,l.kt)("td",{parentName:"tr",align:null},"An array or a function that takes state and returns an array")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"[options]"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("code",null,"object")),(0,l.kt)("td",{parentName:"tr",align:null},"Optional options argument")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"[options.setNull]"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("code",null,"string")),(0,l.kt)("td",{parentName:"tr",align:null},"A string value that specifies the behavior for inserting null values.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"[options.logValues]"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("code",null,"boolean")),(0,l.kt)("td",{parentName:"tr",align:null},"A boolean value that specifies whether to log the inserted values to the console. Defaults to false.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"[options.writeSql]"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("code",null,"boolean")),(0,l.kt)("td",{parentName:"tr",align:null},"A boolean value that specifies whether to log the generated SQL statement. Defaults to false.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"[options.execute]"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("code",null,"boolean")),(0,l.kt)("td",{parentName:"tr",align:null},"A boolean value that specifies whether to execute the generated SQL statement. Defaults to false.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"callback"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("code",null,"function")),(0,l.kt)("td",{parentName:"tr",align:null},"(Optional) callback function")))),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Example"),"  "),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"insertMany('users', state => state.data.recordArray, { setNull: \"'undefined'\", logValues: true });\n")),(0,l.kt)("hr",null),(0,l.kt)("h2",{id:"inserttable"},"insertTable"),(0,l.kt)("p",null,"insertTable(tableName, columns, ","[options]",", callback) \u21d2 ",(0,l.kt)("code",null,"Operation"),"\nCreate a table in database when given an array of columns and a table_name."),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Kind"),": global function",(0,l.kt)("br",{parentName:"p"}),"\n",(0,l.kt)("strong",{parentName:"p"},"Access"),": public  "),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Param"),(0,l.kt)("th",{parentName:"tr",align:null},"Type"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"tableName"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("code",null,"string")),(0,l.kt)("td",{parentName:"tr",align:null},"The name of the table to create")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"columns"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("code",null,"array")),(0,l.kt)("td",{parentName:"tr",align:null},"An array of form columns")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"[options]"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("code",null,"object")),(0,l.kt)("td",{parentName:"tr",align:null},"Optional options argument")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"[options.writeSql]"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("code",null,"boolean")),(0,l.kt)("td",{parentName:"tr",align:null},"A boolean value that specifies whether to log the generated SQL statement. Defaults to false.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"[options.execute]"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("code",null,"boolean")),(0,l.kt)("td",{parentName:"tr",align:null},"A boolean value that specifies whether to execute the generated SQL statement. Defaults to false.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"callback"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("code",null,"function")),(0,l.kt)("td",{parentName:"tr",align:null},"(Optional) callback function")))),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Example"),"  "),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"insertTable('table_name', state => state.data.map(\n  column => ({\n    name: column.name,\n    type: column.type,\n    required: true, // optional\n    unique: false, // optional - to be set to true for unique constraint\n  })\n));\n")),(0,l.kt)("hr",null),(0,l.kt)("h2",{id:"modifytable"},"modifyTable"),(0,l.kt)("p",null,"modifyTable(tableName, columns, ","[options]",", callback) \u21d2 ",(0,l.kt)("code",null,"Operation"),"\nAlter an existing table in the database."),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Kind"),": global function",(0,l.kt)("br",{parentName:"p"}),"\n",(0,l.kt)("strong",{parentName:"p"},"Access"),": public  "),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Param"),(0,l.kt)("th",{parentName:"tr",align:null},"Type"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"tableName"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("code",null,"string")),(0,l.kt)("td",{parentName:"tr",align:null},"The name of the table to alter")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"columns"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("code",null,"array")),(0,l.kt)("td",{parentName:"tr",align:null},"An array of form columns")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"[options]"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("code",null,"object")),(0,l.kt)("td",{parentName:"tr",align:null},"Optional options argument")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"[options.writeSql]"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("code",null,"boolean")),(0,l.kt)("td",{parentName:"tr",align:null},"A boolean value that specifies whether to log the generated SQL statement. Defaults to false.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"[options.execute]"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("code",null,"boolean")),(0,l.kt)("td",{parentName:"tr",align:null},"A boolean value that specifies whether to execute the generated SQL statement. Defaults to false.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"callback"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("code",null,"function")),(0,l.kt)("td",{parentName:"tr",align:null},"(Optional) callback function")))),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Example"),"  "),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"modifyTable('table_name', state => state.data.map(\n  newColumn => ({\n    name: newColumn.name,\n    type: newColumn.type,\n    required: true, // optional\n    unique: false, // optional - to be set to true for unique constraint\n  })\n));\n")),(0,l.kt)("hr",null),(0,l.kt)("h2",{id:"sql"},"sql"),(0,l.kt)("p",null,"sql(sqlQuery, ","[options]",", callback) \u21d2 ",(0,l.kt)("code",null,"Operation"),"\nExecute an SQL statement"),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Kind"),": global function",(0,l.kt)("br",{parentName:"p"}),"\n",(0,l.kt)("strong",{parentName:"p"},"Access"),": public  "),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Param"),(0,l.kt)("th",{parentName:"tr",align:null},"Type"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"sqlQuery"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("code",null,"function")),(0,l.kt)("td",{parentName:"tr",align:null},"a function which takes state and returns a string of SQL.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"[options]"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("code",null,"object")),(0,l.kt)("td",{parentName:"tr",align:null},"Optional options argument")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"[options.writeSql]"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("code",null,"boolean")),(0,l.kt)("td",{parentName:"tr",align:null},"A boolean value that specifies whether to log the generated SQL statement. Defaults to false.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"[options.execute]"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("code",null,"boolean")),(0,l.kt)("td",{parentName:"tr",align:null},"A boolean value that specifies whether to execute the generated SQL statement. Defaults to false.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"callback"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("code",null,"function")),(0,l.kt)("td",{parentName:"tr",align:null},"(Optional) callback function")))),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Example"),"  "),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"sql(state => `select(*) from ${state.data.tableName};`, { writeSql: true })\n")),(0,l.kt)("hr",null),(0,l.kt)("h2",{id:"upsert"},"upsert"),(0,l.kt)("p",null,"upsert(table, uuid, record, ","[options]",", callback) \u21d2 ",(0,l.kt)("code",null,"Operation"),"\nInsert or update a record using ON CONFLICT UPDATE"),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Kind"),": global function",(0,l.kt)("br",{parentName:"p"}),"\n",(0,l.kt)("strong",{parentName:"p"},"Access"),": public  "),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Param"),(0,l.kt)("th",{parentName:"tr",align:null},"Type"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"table"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("code",null,"string")),(0,l.kt)("td",{parentName:"tr",align:null},"The target table")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"uuid"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("code",null,"string")),(0,l.kt)("td",{parentName:"tr",align:null},"The uuid column to determine a matching/existing record")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"record"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("code",null,"object")),(0,l.kt)("td",{parentName:"tr",align:null},"Payload data for the record as a JS object or function")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"[options]"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("code",null,"object")),(0,l.kt)("td",{parentName:"tr",align:null},"Optional options argument")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"[options.setNull]"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("code",null,"string")),(0,l.kt)("td",{parentName:"tr",align:null},"A string value that specifies the behavior for inserting null values.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"[options.writeSql]"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("code",null,"boolean")),(0,l.kt)("td",{parentName:"tr",align:null},"A boolean value that specifies whether to log the generated SQL statement. Defaults to false.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"[options.execute]"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("code",null,"boolean")),(0,l.kt)("td",{parentName:"tr",align:null},"A boolean value that specifies whether to execute the generated SQL statement. Defaults to false.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"[options.logValues]"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("code",null,"boolean")),(0,l.kt)("td",{parentName:"tr",align:null},"A boolean value that specifies whether to log the inserted values to the console. Defaults to false.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"callback"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("code",null,"function")),(0,l.kt)("td",{parentName:"tr",align:null},"(Optional) callback function")))),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Example"),"  "),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"upsert(\n  'users', // the DB table\n  'ON CONSTRAINT users_pkey', // a DB column with a unique constraint OR a CONSTRAINT NAME\n  { name: 'Elodie', id: 7 },\n  { setNull: [\"''\", \"'undefined'\"], writeSql:true, execute: true, logValues: true }\n)\n")),(0,l.kt)("hr",null),(0,l.kt)("h2",{id:"upsertif"},"upsertIf"),(0,l.kt)("p",null,"upsertIf(logical, table, uuid, record, ","[options]",", callback) \u21d2 ",(0,l.kt)("code",null,"Operation"),"\nInsert or update a record based on a logical condition using ON CONFLICT UPDATE"),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Kind"),": global function",(0,l.kt)("br",{parentName:"p"}),"\n",(0,l.kt)("strong",{parentName:"p"},"Access"),": public  "),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Param"),(0,l.kt)("th",{parentName:"tr",align:null},"Type"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"logical"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("code",null,"string")),(0,l.kt)("td",{parentName:"tr",align:null},"a data to check existing value for.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"table"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("code",null,"string")),(0,l.kt)("td",{parentName:"tr",align:null},"The target table")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"uuid"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("code",null,"string")),(0,l.kt)("td",{parentName:"tr",align:null},"The uuid column to determine a matching/existing record")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"record"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("code",null,"object")),(0,l.kt)("td",{parentName:"tr",align:null},"Payload data for the record as a JS object or function")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"[options]"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("code",null,"object")),(0,l.kt)("td",{parentName:"tr",align:null},"Optional options argument")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"[options.setNull]"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("code",null,"string")),(0,l.kt)("td",{parentName:"tr",align:null},"A string value that specifies the behavior for inserting null values.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"[options.writeSql]"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("code",null,"boolean")),(0,l.kt)("td",{parentName:"tr",align:null},"A boolean value that specifies whether to log the generated SQL statement. Defaults to false.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"[options.execute]"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("code",null,"boolean")),(0,l.kt)("td",{parentName:"tr",align:null},"A boolean value that specifies whether to execute the generated SQL statement. Defaults to false.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"[options.logValues]"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("code",null,"boolean")),(0,l.kt)("td",{parentName:"tr",align:null},"A boolean value that specifies whether to log the inserted values to the console. Defaults to false.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"callback"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("code",null,"function")),(0,l.kt)("td",{parentName:"tr",align:null},"(Optional) callback function")))),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Example"),"  "),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"upsertIf(\n  dataValue('name'),\n  'users', // the DB table\n  'ON CONSTRAINT users_pkey', // a DB column with a unique constraint OR a CONSTRAINT NAME\n  { name: 'Elodie', id: 7 },\n  { writeSql:true, execute: true }\n)\n")),(0,l.kt)("hr",null),(0,l.kt)("h2",{id:"upsertmany"},"upsertMany"),(0,l.kt)("p",null,"upsertMany(table, uuid, data, ","[options]",", callback) \u21d2 ",(0,l.kt)("code",null,"Operation"),"\nInsert or update multiple records using ON CONFLICT UPDATE and excluded"),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Kind"),": global function",(0,l.kt)("br",{parentName:"p"}),"\n",(0,l.kt)("strong",{parentName:"p"},"Access"),": public  "),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Param"),(0,l.kt)("th",{parentName:"tr",align:null},"Type"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"table"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("code",null,"string")),(0,l.kt)("td",{parentName:"tr",align:null},"The target table")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"uuid"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("code",null,"string")),(0,l.kt)("td",{parentName:"tr",align:null},"The uuid column to determine a matching/existing record")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"data"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("code",null,"array")),(0,l.kt)("td",{parentName:"tr",align:null},"An array of objects or a function that returns an array")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"[options]"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("code",null,"object")),(0,l.kt)("td",{parentName:"tr",align:null},"Optional options argument")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"[options.setNull]"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("code",null,"string")),(0,l.kt)("td",{parentName:"tr",align:null},"A string value that specifies the behavior for inserting null values.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"[options.writeSql]"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("code",null,"boolean")),(0,l.kt)("td",{parentName:"tr",align:null},"A boolean value that specifies whether to log the generated SQL statement. Defaults to false.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"[options.execute]"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("code",null,"boolean")),(0,l.kt)("td",{parentName:"tr",align:null},"A boolean value that specifies whether to execute the generated SQL statement. Defaults to false.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"[options.logValues]"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("code",null,"boolean")),(0,l.kt)("td",{parentName:"tr",align:null},"A boolean value that specifies whether to log the inserted values to the console. Defaults to false.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"callback"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("code",null,"function")),(0,l.kt)("td",{parentName:"tr",align:null},"(Optional) callback function")))),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Example"),"  "),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"upsertMany(\n  'users', // the DB table\n  'email', // a DB column with a unique constraint OR a CONSTRAINT NAME\n  [\n    { name: 'one', email: 'one@openfn.org' },\n    { name: 'two', email: 'two@openfn.org' },\n  ]\n { logValues: true }\n)\n")),(0,l.kt)("hr",null))}s.isMDXComponent=!0}}]);