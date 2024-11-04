"use strict";(self.webpackChunk_openfn_docs=self.webpackChunk_openfn_docs||[]).push([[55673],{63616:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>p,contentTitle:()=>g,default:()=>i,frontMatter:()=>r,metadata:()=>o,toc:()=>y});var n=a(58168),l=(a(96540),a(15680));const r={title:"salesforce@4.8.6",id:"salesforce-docs",keywords:["adaptor","salesforce","bulk","bulkQuery","create","createIf","describe","describeAll","destroy","insert","query","reference","relationship","retrieve","toUTF8","update","upsert","upsertIf"]},g=void 0,o={unversionedId:"packages/salesforce-docs",id:"packages/salesforce-docs",title:"salesforce@4.8.6",description:"bulk(sObject, operation, options, records)",source:"@site/adaptors/packages/salesforce-docs.md",sourceDirName:"packages",slug:"/packages/salesforce-docs",permalink:"/adaptors/packages/salesforce-docs",draft:!1,tags:[],version:"current",frontMatter:{title:"salesforce@4.8.6",id:"salesforce-docs",keywords:["adaptor","salesforce","bulk","bulkQuery","create","createIf","describe","describeAll","destroy","insert","query","reference","relationship","retrieve","toUTF8","update","upsert","upsertIf"]},sidebar:"adaptors",previous:{title:"Salesforce",permalink:"/adaptors/salesforce"},next:{title:"Config for salesforce",permalink:"/adaptors/packages/salesforce-configuration-schema"}},p={},y=[{value:"Functions",id:"functions",level:2},{value:"bulk",id:"bulk",level:3},{value:"bulkQuery",id:"bulkquery",level:3},{value:"create",id:"create",level:3},{value:"createIf",id:"createif",level:3},{value:"describe",id:"describe",level:3},{value:"describeAll",id:"describeall",level:3},{value:"destroy",id:"destroy",level:3},{value:"insert",id:"insert",level:3},{value:"query",id:"query",level:3},{value:"reference",id:"reference",level:3},{value:"relationship",id:"relationship",level:3},{value:"retrieve",id:"retrieve",level:3},{value:"toUTF8",id:"toutf8",level:3},{value:"update",id:"update",level:3},{value:"upsert",id:"upsert",level:3},{value:"upsertIf",id:"upsertif",level:3}],u={toc:y},d="wrapper";function i(e){let{components:t,...a}=e;return(0,l.yg)(d,(0,n.A)({},u,a,{components:t,mdxType:"MDXLayout"}),(0,l.yg)("dl",null,(0,l.yg)("dt",null,(0,l.yg)("a",{href:"#bulk"},"bulk(sObject, operation, options, records)")),(0,l.yg)("dt",null,(0,l.yg)("a",{href:"#bulkquery"},"bulkQuery(qs, options, callback)")),(0,l.yg)("dt",null,(0,l.yg)("a",{href:"#create"},"create(sObject, attrs)")),(0,l.yg)("dt",null,(0,l.yg)("a",{href:"#createif"},"createIf(logical, sObject, attrs)")),(0,l.yg)("dt",null,(0,l.yg)("a",{href:"#describe"},"describe(sObject)")),(0,l.yg)("dt",null,(0,l.yg)("a",{href:"#describeall"},"describeAll()")),(0,l.yg)("dt",null,(0,l.yg)("a",{href:"#destroy"},"destroy(sObject, attrs, options)")),(0,l.yg)("dt",null,(0,l.yg)("a",{href:"#insert"},"insert(sObject, attrs)")),(0,l.yg)("dt",null,(0,l.yg)("a",{href:"#query"},"query(qs, options, callback)")),(0,l.yg)("dt",null,(0,l.yg)("a",{href:"#reference"},"reference(position)")),(0,l.yg)("dt",null,(0,l.yg)("a",{href:"#relationship"},"relationship(relationshipName, externalId, dataSource)")),(0,l.yg)("dt",null,(0,l.yg)("a",{href:"#retrieve"},"retrieve(sObject, id, callback)")),(0,l.yg)("dt",null,(0,l.yg)("a",{href:"#toutf8"},"toUTF8(input)")),(0,l.yg)("dt",null,(0,l.yg)("a",{href:"#update"},"update(sObject, attrs)")),(0,l.yg)("dt",null,(0,l.yg)("a",{href:"#upsert"},"upsert(sObject, externalId, attrs)")),(0,l.yg)("dt",null,(0,l.yg)("a",{href:"#upsertif"},"upsertIf(logical, sObject, externalId, attrs)"))),(0,l.yg)("p",null,"This adaptor exports the following from common:"),(0,l.yg)("dl",null,(0,l.yg)("dt",null,(0,l.yg)("a",{href:"/adaptors/packages/common-docs#alterstate"},"alterState()")),(0,l.yg)("dt",null,(0,l.yg)("a",{href:"/adaptors/packages/common-docs#arraytostring"},"arrayToString()")),(0,l.yg)("dt",null,(0,l.yg)("a",{href:"/adaptors/packages/common-docs#beta"},"beta")),(0,l.yg)("dt",null,(0,l.yg)("a",{href:"/adaptors/packages/common-docs#chunk"},"chunk()")),(0,l.yg)("dt",null,(0,l.yg)("a",{href:"/adaptors/packages/common-docs#combine"},"combine()")),(0,l.yg)("dt",null,(0,l.yg)("a",{href:"/adaptors/packages/common-docs#datapath"},"dataPath()")),(0,l.yg)("dt",null,(0,l.yg)("a",{href:"/adaptors/packages/common-docs#datavalue"},"dataValue()")),(0,l.yg)("dt",null,(0,l.yg)("a",{href:"/adaptors/packages/common-docs#datefns"},"dateFns")),(0,l.yg)("dt",null,(0,l.yg)("a",{href:"/adaptors/packages/common-docs#each"},"each()")),(0,l.yg)("dt",null,(0,l.yg)("a",{href:"/adaptors/packages/common-docs#expandreferences"},"expandReferences()")),(0,l.yg)("dt",null,(0,l.yg)("a",{href:"/adaptors/packages/common-docs#field"},"field()")),(0,l.yg)("dt",null,(0,l.yg)("a",{href:"/adaptors/packages/common-docs#fields"},"fields()")),(0,l.yg)("dt",null,(0,l.yg)("a",{href:"/adaptors/packages/common-docs#fn"},"fn()")),(0,l.yg)("dt",null,(0,l.yg)("a",{href:"/adaptors/packages/common-docs#fnif"},"fnIf()")),(0,l.yg)("dt",null,(0,l.yg)("a",{href:"/adaptors/packages/common-docs#group"},"group()")),(0,l.yg)("dt",null,(0,l.yg)("a",{href:"/adaptors/packages/common-docs#http"},"http")),(0,l.yg)("dt",null,(0,l.yg)("a",{href:"/adaptors/packages/common-docs#humanproper"},"humanProper()")),(0,l.yg)("dt",null,(0,l.yg)("a",{href:"/adaptors/packages/common-docs#index"},"index()")),(0,l.yg)("dt",null,(0,l.yg)("a",{href:"/adaptors/packages/common-docs#join"},"join()")),(0,l.yg)("dt",null,(0,l.yg)("a",{href:"/adaptors/packages/common-docs#jsonvalue"},"jsonValue()")),(0,l.yg)("dt",null,(0,l.yg)("a",{href:"/adaptors/packages/common-docs#lastreferencevalue"},"lastReferenceValue()")),(0,l.yg)("dt",null,(0,l.yg)("a",{href:"/adaptors/packages/common-docs#map"},"map()")),(0,l.yg)("dt",null,(0,l.yg)("a",{href:"/adaptors/packages/common-docs#merge"},"merge()")),(0,l.yg)("dt",null,(0,l.yg)("a",{href:"/adaptors/packages/common-docs#referencepath"},"referencePath()")),(0,l.yg)("dt",null,(0,l.yg)("a",{href:"/adaptors/packages/common-docs#scrubemojis"},"scrubEmojis()")),(0,l.yg)("dt",null,(0,l.yg)("a",{href:"/adaptors/packages/common-docs#source"},"source()")),(0,l.yg)("dt",null,(0,l.yg)("a",{href:"/adaptors/packages/common-docs#sourcevalue"},"sourceValue()")),(0,l.yg)("dt",null,(0,l.yg)("a",{href:"/adaptors/packages/common-docs#toarray"},"toArray()"))),(0,l.yg)("h2",{id:"functions"},"Functions"),(0,l.yg)("h3",{id:"bulk"},"bulk"),(0,l.yg)("p",null,(0,l.yg)("code",null,"bulk(sObject, operation, options, records) \u21d2 Operation")),(0,l.yg)("p",null,"Create and execute a bulk job."),(0,l.yg)("table",null,(0,l.yg)("thead",{parentName:"table"},(0,l.yg)("tr",{parentName:"thead"},(0,l.yg)("th",{parentName:"tr",align:null},"Param"),(0,l.yg)("th",{parentName:"tr",align:null},"Type"),(0,l.yg)("th",{parentName:"tr",align:null},"Default"),(0,l.yg)("th",{parentName:"tr",align:null},"Description"))),(0,l.yg)("tbody",{parentName:"table"},(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"sObject"),(0,l.yg)("td",{parentName:"tr",align:null},(0,l.yg)("code",null,"string")),(0,l.yg)("td",{parentName:"tr",align:null}),(0,l.yg)("td",{parentName:"tr",align:null},"API name of the sObject.")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"operation"),(0,l.yg)("td",{parentName:"tr",align:null},(0,l.yg)("code",null,"string")),(0,l.yg)("td",{parentName:"tr",align:null}),(0,l.yg)("td",{parentName:"tr",align:null},'The bulk operation to be performed.Eg "insert"')),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"options"),(0,l.yg)("td",{parentName:"tr",align:null},(0,l.yg)("code",null,"object")),(0,l.yg)("td",{parentName:"tr",align:null}),(0,l.yg)("td",{parentName:"tr",align:null},"Options passed to the bulk api.")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"[options.pollTimeout]"),(0,l.yg)("td",{parentName:"tr",align:null},(0,l.yg)("code",null,"integer")),(0,l.yg)("td",{parentName:"tr",align:null},(0,l.yg)("code",null,"240000")),(0,l.yg)("td",{parentName:"tr",align:null},"Polling timeout in milliseconds.")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"[options.pollInterval]"),(0,l.yg)("td",{parentName:"tr",align:null},(0,l.yg)("code",null,"integer")),(0,l.yg)("td",{parentName:"tr",align:null},(0,l.yg)("code",null,"6000")),(0,l.yg)("td",{parentName:"tr",align:null},"Polling interval in milliseconds.")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"[options.extIdField]"),(0,l.yg)("td",{parentName:"tr",align:null},(0,l.yg)("code",null,"string")),(0,l.yg)("td",{parentName:"tr",align:null}),(0,l.yg)("td",{parentName:"tr",align:null},"External id field.")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"[options.failOnError]"),(0,l.yg)("td",{parentName:"tr",align:null},(0,l.yg)("code",null,"boolean")),(0,l.yg)("td",{parentName:"tr",align:null},(0,l.yg)("code",null,"false")),(0,l.yg)("td",{parentName:"tr",align:null},"Fail the operation on error.")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"records"),(0,l.yg)("td",{parentName:"tr",align:null},(0,l.yg)("code",null,"array")),(0,l.yg)("td",{parentName:"tr",align:null}),(0,l.yg)("td",{parentName:"tr",align:null},"an array of records, or a function which returns an array.")))),(0,l.yg)("p",null,(0,l.yg)("strong",{parentName:"p"},"Example:")," Bulk insert"),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre",className:"language-js"},'bulk(\n  "Patient__c",\n  "insert",\n  { failOnError: true },\n  (state) => state.someArray.map((x) => ({ Age__c: x.age, Name: x.name }))\n);\n')),(0,l.yg)("p",null,(0,l.yg)("strong",{parentName:"p"},"Example:")," Bulk upsert"),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre",className:"language-js"},'bulk(\n  "vera__Beneficiary__c",\n  "upsert",\n  { extIdField: "vera__Result_UID__c" },\n  [\n    {\n      vera__Reporting_Period__c: 2023,\n      vera__Geographic_Area__c: "Uganda",\n      "vera__Indicator__r.vera__ExtId__c": 1001,\n      vera__Result_UID__c: "1001_2023_Uganda",\n    },\n  ]\n);\n')),(0,l.yg)("hr",null),(0,l.yg)("h3",{id:"bulkquery"},"bulkQuery"),(0,l.yg)("p",null,(0,l.yg)("code",null,"bulkQuery(qs, options, callback) \u21d2 Operation")),(0,l.yg)("p",null,"Execute an SOQL Bulk Query.\nThis function uses bulk query to efficiently query large data sets and reduce the number of API requests.\n",(0,l.yg)("inlineCode",{parentName:"p"},"bulkQuery()")," uses ",(0,l.yg)("a",{parentName:"p",href:"https://sforce.co/4azgczz"},"Bulk API v.2.0 Query")," which is available in API version 47.0 and later.\nThis API is subject to ",(0,l.yg)("a",{parentName:"p",href:"https://sforce.co/4b6kn6z"},"rate limits"),"."),(0,l.yg)("table",null,(0,l.yg)("thead",{parentName:"table"},(0,l.yg)("tr",{parentName:"thead"},(0,l.yg)("th",{parentName:"tr",align:null},"Param"),(0,l.yg)("th",{parentName:"tr",align:null},"Type"),(0,l.yg)("th",{parentName:"tr",align:null},"Default"),(0,l.yg)("th",{parentName:"tr",align:null},"Description"))),(0,l.yg)("tbody",{parentName:"table"},(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"qs"),(0,l.yg)("td",{parentName:"tr",align:null},(0,l.yg)("code",null,"string")),(0,l.yg)("td",{parentName:"tr",align:null}),(0,l.yg)("td",{parentName:"tr",align:null},"A query string.")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"options"),(0,l.yg)("td",{parentName:"tr",align:null},(0,l.yg)("code",null,"object")),(0,l.yg)("td",{parentName:"tr",align:null}),(0,l.yg)("td",{parentName:"tr",align:null},"Options passed to the bulk api.")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"[options.pollTimeout]"),(0,l.yg)("td",{parentName:"tr",align:null},(0,l.yg)("code",null,"integer")),(0,l.yg)("td",{parentName:"tr",align:null},(0,l.yg)("code",null,"90000")),(0,l.yg)("td",{parentName:"tr",align:null},"Polling timeout in milliseconds.")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"[options.pollInterval]"),(0,l.yg)("td",{parentName:"tr",align:null},(0,l.yg)("code",null,"integer")),(0,l.yg)("td",{parentName:"tr",align:null},(0,l.yg)("code",null,"3000")),(0,l.yg)("td",{parentName:"tr",align:null},"Polling interval in milliseconds.")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"callback"),(0,l.yg)("td",{parentName:"tr",align:null},(0,l.yg)("code",null,"function")),(0,l.yg)("td",{parentName:"tr",align:null}),(0,l.yg)("td",{parentName:"tr",align:null},"A callback to execute once the record is retrieved")))),(0,l.yg)("p",null,(0,l.yg)("strong",{parentName:"p"},"Example:")," The results will be available on ",(0,l.yg)("inlineCode",{parentName:"p"},"state.data")),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre",className:"language-js"},"bulkQuery(state=> `SELECT Id FROM Patient__c WHERE Health_ID__c = '${state.data.field1}'`);\n")),(0,l.yg)("p",null,(0,l.yg)("strong",{parentName:"p"},"Example")),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre",className:"language-js"},"bulkQuery(\n  (state) =>\n    `SELECT Id FROM Patient__c WHERE Health_ID__c = '${state.data.field1}'`,\n  { pollTimeout: 10000, pollInterval: 6000 }\n);\n")),(0,l.yg)("hr",null),(0,l.yg)("h3",{id:"create"},"create"),(0,l.yg)("p",null,(0,l.yg)("code",null,"create(sObject, attrs) \u21d2 Operation")),(0,l.yg)("p",null,"Create a new sObject record(s)."),(0,l.yg)("table",null,(0,l.yg)("thead",{parentName:"table"},(0,l.yg)("tr",{parentName:"thead"},(0,l.yg)("th",{parentName:"tr",align:null},"Param"),(0,l.yg)("th",{parentName:"tr",align:null},"Type"),(0,l.yg)("th",{parentName:"tr",align:null},"Description"))),(0,l.yg)("tbody",{parentName:"table"},(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"sObject"),(0,l.yg)("td",{parentName:"tr",align:null},(0,l.yg)("code",null,"string")),(0,l.yg)("td",{parentName:"tr",align:null},"API name of the sObject.")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"attrs"),(0,l.yg)("td",{parentName:"tr",align:null},(0,l.yg)("code",null,"object")),(0,l.yg)("td",{parentName:"tr",align:null},"Field attributes for the new record.")))),(0,l.yg)("p",null,(0,l.yg)("strong",{parentName:"p"},"Example:"),"  Single record creation"),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre",className:"language-js"},'create("Account", { Name: "My Account #1" });\n')),(0,l.yg)("p",null,(0,l.yg)("strong",{parentName:"p"},"Example:"),"  Multiple records creation"),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre",className:"language-js"},'create("Account",[{ Name: "My Account #1" }, { Name: "My Account #2" }]);\n')),(0,l.yg)("hr",null),(0,l.yg)("h3",{id:"createif"},"createIf"),(0,l.yg)("p",null,(0,l.yg)("code",null,"createIf(logical, sObject, attrs) \u21d2 Operation")),(0,l.yg)("p",null,"Create a new sObject if conditions are met."),(0,l.yg)("p",null,(0,l.yg)("strong",{parentName:"p"},"The ",(0,l.yg)("inlineCode",{parentName:"strong"},"createIf()")," function has been deprecated. Use ",(0,l.yg)("inlineCode",{parentName:"strong"},"fnIf(condition,create())")," instead.")),(0,l.yg)("table",null,(0,l.yg)("thead",{parentName:"table"},(0,l.yg)("tr",{parentName:"thead"},(0,l.yg)("th",{parentName:"tr",align:null},"Param"),(0,l.yg)("th",{parentName:"tr",align:null},"Type"),(0,l.yg)("th",{parentName:"tr",align:null},"Description"))),(0,l.yg)("tbody",{parentName:"table"},(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"logical"),(0,l.yg)("td",{parentName:"tr",align:null},(0,l.yg)("code",null,"boolean")),(0,l.yg)("td",{parentName:"tr",align:null},"a logical statement that will be evaluated.")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"sObject"),(0,l.yg)("td",{parentName:"tr",align:null},(0,l.yg)("code",null,"string")),(0,l.yg)("td",{parentName:"tr",align:null},"API name of the sObject.")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"attrs"),(0,l.yg)("td",{parentName:"tr",align:null},(0,l.yg)("code",null,"object")," ","|"," ",(0,l.yg)("code",null,"Array.","<","object",">")),(0,l.yg)("td",{parentName:"tr",align:null},"Field attributes for the new object.")))),(0,l.yg)("p",null,(0,l.yg)("strong",{parentName:"p"},"Example")),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre",className:"language-js"},'createIf(true, \'obj_name\', {\n  attr1: "foo",\n  attr2: "bar"\n})\n')),(0,l.yg)("hr",null),(0,l.yg)("h3",{id:"describe"},"describe"),(0,l.yg)("p",null,(0,l.yg)("code",null,"describe(sObject) \u21d2 Operation")),(0,l.yg)("p",null,"Prints an sObject metadata and pushes the result to state.references"),(0,l.yg)("table",null,(0,l.yg)("thead",{parentName:"table"},(0,l.yg)("tr",{parentName:"thead"},(0,l.yg)("th",{parentName:"tr",align:null},"Param"),(0,l.yg)("th",{parentName:"tr",align:null},"Type"),(0,l.yg)("th",{parentName:"tr",align:null},"Description"))),(0,l.yg)("tbody",{parentName:"table"},(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"sObject"),(0,l.yg)("td",{parentName:"tr",align:null},(0,l.yg)("code",null,"string")),(0,l.yg)("td",{parentName:"tr",align:null},"API name of the sObject.")))),(0,l.yg)("p",null,(0,l.yg)("strong",{parentName:"p"},"Example")),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre",className:"language-js"},"describe('obj_name')\n")),(0,l.yg)("hr",null),(0,l.yg)("h3",{id:"describeall"},"describeAll"),(0,l.yg)("p",null,(0,l.yg)("code",null,"describeAll() \u21d2 Operation")),(0,l.yg)("p",null,"Prints the total number of all available sObjects and pushes the result to ",(0,l.yg)("inlineCode",{parentName:"p"},"state.references"),"."),(0,l.yg)("p",null,(0,l.yg)("strong",{parentName:"p"},"Example")),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre",className:"language-js"},"describeAll()\n")),(0,l.yg)("hr",null),(0,l.yg)("h3",{id:"destroy"},"destroy"),(0,l.yg)("p",null,(0,l.yg)("code",null,"destroy(sObject, attrs, options) \u21d2 Operation")),(0,l.yg)("p",null,"Delete records of an object."),(0,l.yg)("table",null,(0,l.yg)("thead",{parentName:"table"},(0,l.yg)("tr",{parentName:"thead"},(0,l.yg)("th",{parentName:"tr",align:null},"Param"),(0,l.yg)("th",{parentName:"tr",align:null},"Type"),(0,l.yg)("th",{parentName:"tr",align:null},"Description"))),(0,l.yg)("tbody",{parentName:"table"},(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"sObject"),(0,l.yg)("td",{parentName:"tr",align:null},(0,l.yg)("code",null,"string")),(0,l.yg)("td",{parentName:"tr",align:null},"API name of the sObject.")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"attrs"),(0,l.yg)("td",{parentName:"tr",align:null},(0,l.yg)("code",null,"object")),(0,l.yg)("td",{parentName:"tr",align:null},"Array of IDs of records to delete.")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"options"),(0,l.yg)("td",{parentName:"tr",align:null},(0,l.yg)("code",null,"object")),(0,l.yg)("td",{parentName:"tr",align:null},"Options for the destroy delete operation.")))),(0,l.yg)("p",null,(0,l.yg)("strong",{parentName:"p"},"Example")),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre",className:"language-js"},"destroy('obj_name', [\n '0060n00000JQWHYAA5',\n '0090n00000JQEWHYAA5\n], { failOnError: true })\n")),(0,l.yg)("hr",null),(0,l.yg)("h3",{id:"insert"},"insert"),(0,l.yg)("p",null,(0,l.yg)("code",null,"insert(sObject, attrs) \u21d2 Operation")),(0,l.yg)("p",null,'Alias for "create(sObject, attrs)".'),(0,l.yg)("table",null,(0,l.yg)("thead",{parentName:"table"},(0,l.yg)("tr",{parentName:"thead"},(0,l.yg)("th",{parentName:"tr",align:null},"Param"),(0,l.yg)("th",{parentName:"tr",align:null},"Type"),(0,l.yg)("th",{parentName:"tr",align:null},"Description"))),(0,l.yg)("tbody",{parentName:"table"},(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"sObject"),(0,l.yg)("td",{parentName:"tr",align:null},(0,l.yg)("code",null,"string")),(0,l.yg)("td",{parentName:"tr",align:null},"API name of the sObject.")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"attrs"),(0,l.yg)("td",{parentName:"tr",align:null},(0,l.yg)("code",null,"object")),(0,l.yg)("td",{parentName:"tr",align:null},"Field attributes for the new record.")))),(0,l.yg)("p",null,(0,l.yg)("strong",{parentName:"p"},"Example:"),"  Single record creation"),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre",className:"language-js"},'insert("Account", { Name: "My Account #1" });\n')),(0,l.yg)("p",null,(0,l.yg)("strong",{parentName:"p"},"Example:"),"  Multiple records creation"),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre",className:"language-js"},'insert("Account",[{ Name: "My Account #1" }, { Name: "My Account #2" }]);\n')),(0,l.yg)("hr",null),(0,l.yg)("h3",{id:"query"},"query"),(0,l.yg)("p",null,(0,l.yg)("code",null,"query(qs, options, callback) \u21d2 Operation")),(0,l.yg)("p",null,"Execute an SOQL query.\nNote that in an event of a query error,\nerror logs will be printed but the operation will not throw the error."),(0,l.yg)("p",null,"The Salesforce query API is subject to rate limits, ",(0,l.yg)("a",{parentName:"p",href:"https://sforce.co/3W9zyaQ"},"See for more details"),"."),(0,l.yg)("table",null,(0,l.yg)("thead",{parentName:"table"},(0,l.yg)("tr",{parentName:"thead"},(0,l.yg)("th",{parentName:"tr",align:null},"Param"),(0,l.yg)("th",{parentName:"tr",align:null},"Type"),(0,l.yg)("th",{parentName:"tr",align:null},"Default"),(0,l.yg)("th",{parentName:"tr",align:null},"Description"))),(0,l.yg)("tbody",{parentName:"table"},(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"qs"),(0,l.yg)("td",{parentName:"tr",align:null},(0,l.yg)("code",null,"string")),(0,l.yg)("td",{parentName:"tr",align:null}),(0,l.yg)("td",{parentName:"tr",align:null},"A query string. Must be less than ",(0,l.yg)("inlineCode",{parentName:"td"},"4000")," characters in WHERE clause")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"options"),(0,l.yg)("td",{parentName:"tr",align:null},(0,l.yg)("code",null,"object")),(0,l.yg)("td",{parentName:"tr",align:null}),(0,l.yg)("td",{parentName:"tr",align:null},"Options passed to the bulk api.")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"[options.autoFetch]"),(0,l.yg)("td",{parentName:"tr",align:null},(0,l.yg)("code",null,"boolean")),(0,l.yg)("td",{parentName:"tr",align:null},(0,l.yg)("code",null,"false")),(0,l.yg)("td",{parentName:"tr",align:null},"Fetch next records if available.")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"callback"),(0,l.yg)("td",{parentName:"tr",align:null},(0,l.yg)("code",null,"function")),(0,l.yg)("td",{parentName:"tr",align:null}),(0,l.yg)("td",{parentName:"tr",align:null},"A callback to execute once the record is retrieved")))),(0,l.yg)("p",null,(0,l.yg)("strong",{parentName:"p"},"Example")),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre",className:"language-js"},"query(state=> `SELECT Id FROM Patient__c WHERE Health_ID__c = '${state.data.field1}'`);\n")),(0,l.yg)("p",null,(0,l.yg)("strong",{parentName:"p"},"Example:")," Query more records if next records are available"),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre",className:"language-js"},"query(state=> `SELECT Id FROM Patient__c WHERE Health_ID__c = '${state.data.field1}'`, { autoFetch: true });\n")),(0,l.yg)("hr",null),(0,l.yg)("h3",{id:"reference"},"reference"),(0,l.yg)("p",null,(0,l.yg)("code",null,"reference(position) \u21d2 State")),(0,l.yg)("p",null,"Get a reference ID by an index."),(0,l.yg)("table",null,(0,l.yg)("thead",{parentName:"table"},(0,l.yg)("tr",{parentName:"thead"},(0,l.yg)("th",{parentName:"tr",align:null},"Param"),(0,l.yg)("th",{parentName:"tr",align:null},"Type"),(0,l.yg)("th",{parentName:"tr",align:null},"Description"))),(0,l.yg)("tbody",{parentName:"table"},(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"position"),(0,l.yg)("td",{parentName:"tr",align:null},(0,l.yg)("code",null,"number")),(0,l.yg)("td",{parentName:"tr",align:null},"Position for references array.")))),(0,l.yg)("p",null,(0,l.yg)("strong",{parentName:"p"},"Example")),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre",className:"language-js"},"reference(0)\n")),(0,l.yg)("hr",null),(0,l.yg)("h3",{id:"relationship"},"relationship"),(0,l.yg)("p",null,(0,l.yg)("code",null,"relationship(relationshipName, externalId, dataSource) \u21d2 object")),(0,l.yg)("p",null,"Adds a lookup relation or 'dome insert' to a record."),(0,l.yg)("table",null,(0,l.yg)("thead",{parentName:"table"},(0,l.yg)("tr",{parentName:"thead"},(0,l.yg)("th",{parentName:"tr",align:null},"Param"),(0,l.yg)("th",{parentName:"tr",align:null},"Type"),(0,l.yg)("th",{parentName:"tr",align:null},"Description"))),(0,l.yg)("tbody",{parentName:"table"},(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"relationshipName"),(0,l.yg)("td",{parentName:"tr",align:null},(0,l.yg)("code",null,"string")),(0,l.yg)("td",{parentName:"tr",align:null},(0,l.yg)("inlineCode",{parentName:"td"},"__r")," relationship field on the record.")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"externalId"),(0,l.yg)("td",{parentName:"tr",align:null},(0,l.yg)("code",null,"string")),(0,l.yg)("td",{parentName:"tr",align:null},"Salesforce ExternalID field.")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"dataSource"),(0,l.yg)("td",{parentName:"tr",align:null},(0,l.yg)("code",null,"string")),(0,l.yg)("td",{parentName:"tr",align:null},"resolvable source.")))),(0,l.yg)("p",null,(0,l.yg)("strong",{parentName:"p"},"Example")),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre",className:"language-js"},'Data Sourced Value:\n relationship("relationship_name__r", "externalID on related object", dataSource("path"))\nFixed Value:\n relationship("relationship_name__r", "externalID on related object", "hello world")\n')),(0,l.yg)("hr",null),(0,l.yg)("h3",{id:"retrieve"},"retrieve"),(0,l.yg)("p",null,(0,l.yg)("code",null,"retrieve(sObject, id, callback) \u21d2 Operation")),(0,l.yg)("p",null,"Retrieves a Salesforce sObject(s)."),(0,l.yg)("table",null,(0,l.yg)("thead",{parentName:"table"},(0,l.yg)("tr",{parentName:"thead"},(0,l.yg)("th",{parentName:"tr",align:null},"Param"),(0,l.yg)("th",{parentName:"tr",align:null},"Type"),(0,l.yg)("th",{parentName:"tr",align:null},"Description"))),(0,l.yg)("tbody",{parentName:"table"},(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"sObject"),(0,l.yg)("td",{parentName:"tr",align:null},(0,l.yg)("code",null,"string")),(0,l.yg)("td",{parentName:"tr",align:null},"The sObject to retrieve")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"id"),(0,l.yg)("td",{parentName:"tr",align:null},(0,l.yg)("code",null,"string")),(0,l.yg)("td",{parentName:"tr",align:null},"The id of the record")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"callback"),(0,l.yg)("td",{parentName:"tr",align:null},(0,l.yg)("code",null,"function")),(0,l.yg)("td",{parentName:"tr",align:null},"A callback to execute once the record is retrieved")))),(0,l.yg)("p",null,(0,l.yg)("strong",{parentName:"p"},"Example")),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre",className:"language-js"},"retrieve('ContentVersion', '0684K0000020Au7QAE/VersionData');\n")),(0,l.yg)("hr",null),(0,l.yg)("h3",{id:"toutf8"},"toUTF8"),(0,l.yg)("p",null,(0,l.yg)("code",null,"toUTF8(input) \u21d2 string")),(0,l.yg)("p",null,"Transliterates unicode characters to their best ASCII representation"),(0,l.yg)("p",null,(0,l.yg)("strong",{parentName:"p"},"Returns"),": ",(0,l.yg)("code",null,"string")," - - ASCII representation of input string  "),(0,l.yg)("table",null,(0,l.yg)("thead",{parentName:"table"},(0,l.yg)("tr",{parentName:"thead"},(0,l.yg)("th",{parentName:"tr",align:null},"Param"),(0,l.yg)("th",{parentName:"tr",align:null},"Type"),(0,l.yg)("th",{parentName:"tr",align:null},"Description"))),(0,l.yg)("tbody",{parentName:"table"},(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"input"),(0,l.yg)("td",{parentName:"tr",align:null},(0,l.yg)("code",null,"string")),(0,l.yg)("td",{parentName:"tr",align:null},"A string with unicode characters")))),(0,l.yg)("p",null,(0,l.yg)("strong",{parentName:"p"},"Example")),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre",className:"language-js"},'fn((state) => {\n  const s = toUTF8("\u03ac\u03bd\u03b8\u03c1\u03c9\u03c0\u03bf\u03b9");\n  console.log(s); // anthropoi\n  return state;\n});\n')),(0,l.yg)("hr",null),(0,l.yg)("h3",{id:"update"},"update"),(0,l.yg)("p",null,(0,l.yg)("code",null,"update(sObject, attrs) \u21d2 Operation")),(0,l.yg)("p",null,"Update an sObject record or records."),(0,l.yg)("table",null,(0,l.yg)("thead",{parentName:"table"},(0,l.yg)("tr",{parentName:"thead"},(0,l.yg)("th",{parentName:"tr",align:null},"Param"),(0,l.yg)("th",{parentName:"tr",align:null},"Type"),(0,l.yg)("th",{parentName:"tr",align:null},"Description"))),(0,l.yg)("tbody",{parentName:"table"},(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"sObject"),(0,l.yg)("td",{parentName:"tr",align:null},(0,l.yg)("code",null,"string")),(0,l.yg)("td",{parentName:"tr",align:null},"API name of the sObject.")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"attrs"),(0,l.yg)("td",{parentName:"tr",align:null},(0,l.yg)("code",null,"object")," ","|"," ",(0,l.yg)("code",null,"Array.","<","object",">")),(0,l.yg)("td",{parentName:"tr",align:null},"Field attributes for the new object.")))),(0,l.yg)("p",null,(0,l.yg)("strong",{parentName:"p"},"Example:"),"  Single record update"),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre",className:"language-js"},'update("Account", {\n  Id: "0010500000fxbcuAAA",\n  Name: "Updated Account #1",\n});\n')),(0,l.yg)("p",null,(0,l.yg)("strong",{parentName:"p"},"Example:"),"  Multiple records update"),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre",className:"language-js"},'update("Account", [\n  { Id: "0010500000fxbcuAAA", Name: "Updated Account #1" },\n  { Id: "0010500000fxbcvAAA", Name: "Updated Account #2" },\n]);\n')),(0,l.yg)("hr",null),(0,l.yg)("h3",{id:"upsert"},"upsert"),(0,l.yg)("p",null,(0,l.yg)("code",null,"upsert(sObject, externalId, attrs) \u21d2 Operation")),(0,l.yg)("p",null,"Create a new sObject record, or updates it if it already exists\nExternal ID field name must be specified in second argument."),(0,l.yg)("table",null,(0,l.yg)("thead",{parentName:"table"},(0,l.yg)("tr",{parentName:"thead"},(0,l.yg)("th",{parentName:"tr",align:null},"Param"),(0,l.yg)("th",{parentName:"tr",align:null},"Type"),(0,l.yg)("th",{parentName:"tr",align:null},"Description"))),(0,l.yg)("tbody",{parentName:"table"},(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"sObject"),(0,l.yg)("td",{parentName:"tr",align:null},(0,l.yg)("code",null,"string")),(0,l.yg)("td",{parentName:"tr",align:null},"API name of the sObject.")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"externalId"),(0,l.yg)("td",{parentName:"tr",align:null},(0,l.yg)("code",null,"string")),(0,l.yg)("td",{parentName:"tr",align:null},"The external ID of the sObject.")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"attrs"),(0,l.yg)("td",{parentName:"tr",align:null},(0,l.yg)("code",null,"object")," ","|"," ",(0,l.yg)("code",null,"Array.","<","object",">")),(0,l.yg)("td",{parentName:"tr",align:null},"Field attributes for the new object.")))),(0,l.yg)("p",null,(0,l.yg)("strong",{parentName:"p"},"Example:"),"  Single record upsert "),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre",className:"language-js"},'upsert("UpsertTable__c", "ExtId__c", { Name: "Record #1", ExtId__c : \'ID-0000001\' });\n')),(0,l.yg)("p",null,(0,l.yg)("strong",{parentName:"p"},"Example:"),"  Multiple record upsert "),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre",className:"language-js"},'upsert("UpsertTable__c", "ExtId__c", [\n  { Name: "Record #1", ExtId__c : \'ID-0000001\' },\n  { Name: "Record #2", ExtId__c : \'ID-0000002\' },\n]);\n')),(0,l.yg)("hr",null),(0,l.yg)("h3",{id:"upsertif"},"upsertIf"),(0,l.yg)("p",null,(0,l.yg)("code",null,"upsertIf(logical, sObject, externalId, attrs) \u21d2 Operation")),(0,l.yg)("p",null,"Conditionally create a new sObject record, or updates it if it already exists"),(0,l.yg)("p",null,(0,l.yg)("strong",{parentName:"p"},"The ",(0,l.yg)("inlineCode",{parentName:"strong"},"upsertIf()")," function has been deprecated. Use ",(0,l.yg)("inlineCode",{parentName:"strong"},"fnIf(condition,upsert())")," instead.")),(0,l.yg)("table",null,(0,l.yg)("thead",{parentName:"table"},(0,l.yg)("tr",{parentName:"thead"},(0,l.yg)("th",{parentName:"tr",align:null},"Param"),(0,l.yg)("th",{parentName:"tr",align:null},"Type"),(0,l.yg)("th",{parentName:"tr",align:null},"Description"))),(0,l.yg)("tbody",{parentName:"table"},(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"logical"),(0,l.yg)("td",{parentName:"tr",align:null},(0,l.yg)("code",null,"boolean")),(0,l.yg)("td",{parentName:"tr",align:null},"a logical statement that will be evaluated.")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"sObject"),(0,l.yg)("td",{parentName:"tr",align:null},(0,l.yg)("code",null,"string")),(0,l.yg)("td",{parentName:"tr",align:null},"API name of the sObject.")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"externalId"),(0,l.yg)("td",{parentName:"tr",align:null},(0,l.yg)("code",null,"string")),(0,l.yg)("td",{parentName:"tr",align:null},"ID.")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"attrs"),(0,l.yg)("td",{parentName:"tr",align:null},(0,l.yg)("code",null,"object")," ","|"," ",(0,l.yg)("code",null,"Array.","<","object",">")),(0,l.yg)("td",{parentName:"tr",align:null},"Field attributes for the new object.")))),(0,l.yg)("p",null,(0,l.yg)("strong",{parentName:"p"},"Example")),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre",className:"language-js"},"upsertIf(true, 'obj_name', 'ext_id', {\n  attr1: \"foo\",\n  attr2: \"bar\"\n})\n")),(0,l.yg)("hr",null))}i.isMDXComponent=!0},15680:(e,t,a)=>{a.d(t,{xA:()=>u,yg:()=>c});var n=a(96540);function l(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function g(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){l(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,n,l=function(e,t){if(null==e)return{};var a,n,l={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(l[a]=e[a]);return l}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(l[a]=e[a])}return l}var p=n.createContext({}),y=function(e){var t=n.useContext(p),a=t;return e&&(a="function"==typeof e?e(t):g(g({},t),e)),a},u=function(e){var t=y(e.components);return n.createElement(p.Provider,{value:t},e.children)},d="mdxType",i={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},s=n.forwardRef((function(e,t){var a=e.components,l=e.mdxType,r=e.originalType,p=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),d=y(a),s=l,c=d["".concat(p,".").concat(s)]||d[s]||i[s]||r;return a?n.createElement(c,g(g({ref:t},u),{},{components:a})):n.createElement(c,g({ref:t},u))}));function c(e,t){var a=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var r=a.length,g=new Array(r);g[0]=s;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o[d]="string"==typeof e?e:l,g[1]=o;for(var y=2;y<r;y++)g[y]=a[y];return n.createElement.apply(null,g)}return n.createElement.apply(null,a)}s.displayName="MDXCreateElement"}}]);