"use strict";(self.webpackChunk_openfn_docs=self.webpackChunk_openfn_docs||[]).push([[40953],{83253:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>y,contentTitle:()=>g,default:()=>d,frontMatter:()=>l,metadata:()=>p,toc:()=>o});var n=a(58168),r=(a(96540),a(15680));const l={title:"openmrs@4.2.0",id:"openmrs-docs",keywords:["adaptor","openmrs","create","get","getEncounter","getEncounters","getPatient","post","searchPatient","searchPerson","update","upsert"]},g=void 0,p={unversionedId:"packages/openmrs-docs",id:"packages/openmrs-docs",title:"openmrs@4.2.0",description:"create(resourceType, data, [callback])",source:"@site/adaptors/packages/openmrs-docs.md",sourceDirName:"packages",slug:"/packages/openmrs-docs",permalink:"/adaptors/packages/openmrs-docs",draft:!1,tags:[],version:"current",frontMatter:{title:"openmrs@4.2.0",id:"openmrs-docs",keywords:["adaptor","openmrs","create","get","getEncounter","getEncounters","getPatient","post","searchPatient","searchPerson","update","upsert"]},sidebar:"adaptors",previous:{title:"OpenMRS Adaptor",permalink:"/adaptors/openmrs"},next:{title:"Config for openmrs",permalink:"/adaptors/packages/openmrs-configuration-schema"}},y={},o=[{value:"Functions",id:"functions",level:2},{value:"create",id:"create",level:3},{value:"get",id:"get",level:3},{value:"getEncounter",id:"getencounter",level:3},{value:"getEncounters",id:"getencounters",level:3},{value:"getPatient",id:"getpatient",level:3},{value:"post",id:"post",level:3},{value:"searchPatient",id:"searchpatient",level:3},{value:"searchPerson",id:"searchperson",level:3},{value:"update",id:"update",level:3},{value:"upsert",id:"upsert",level:3},{value:"fhir",id:"fhir",level:2},{value:"fhir.get",id:"fhir_get",level:3},{value:"http",id:"http",level:2},{value:"http.request",id:"http_request",level:3},{value:"Interfaces",id:"interfaces",level:2},{value:"FhirParameters",id:"fhirparameters",level:3}],i={toc:o},u="wrapper";function d(e){let{components:t,...a}=e;return(0,r.yg)(u,(0,n.A)({},i,a,{components:t,mdxType:"MDXLayout"}),(0,r.yg)("dl",null,(0,r.yg)("dt",null,(0,r.yg)("a",{href:"#create"},"create(resourceType, data, [callback])")),(0,r.yg)("dt",null,(0,r.yg)("a",{href:"#get"},"get(path, query, [callback])")),(0,r.yg)("dt",null,(0,r.yg)("a",{href:"#getencounter"},"getEncounter(uuid, [callback])")),(0,r.yg)("dt",null,(0,r.yg)("a",{href:"#getencounters"},"getEncounters(query, [callback])")),(0,r.yg)("dt",null,(0,r.yg)("a",{href:"#getpatient"},"getPatient(uuid, [callback])")),(0,r.yg)("dt",null,(0,r.yg)("a",{href:"#post"},"post(path, data, [callback])")),(0,r.yg)("dt",null,(0,r.yg)("a",{href:"#searchpatient"},"searchPatient(query, [callback])")),(0,r.yg)("dt",null,(0,r.yg)("a",{href:"#searchperson"},"searchPerson(query, [callback])")),(0,r.yg)("dt",null,(0,r.yg)("a",{href:"#update"},"update(resourceType, path, data, [callback])")),(0,r.yg)("dt",null,(0,r.yg)("a",{href:"#upsert"},"upsert(resourceType, query, data, [callback])"))),(0,r.yg)("p",null,"This adaptor exports the following namespaced functions:"),(0,r.yg)("dl",null,(0,r.yg)("dt",null,(0,r.yg)("a",{href:"#fhir_get"},"fhir.get(path, query, [callback])")),(0,r.yg)("dt",null,(0,r.yg)("a",{href:"#http_request"},"http.request(method, path, [options])"))),(0,r.yg)("p",null,"This adaptor exports the following from common:"),(0,r.yg)("dl",null,(0,r.yg)("dt",null,(0,r.yg)("a",{href:"/adaptors/packages/common-docs#alterstate"},"alterState()")),(0,r.yg)("dt",null,(0,r.yg)("a",{href:"/adaptors/packages/common-docs#arraytostring"},"arrayToString()")),(0,r.yg)("dt",null,(0,r.yg)("a",{href:"/adaptors/packages/common-docs#cursor"},"cursor()")),(0,r.yg)("dt",null,(0,r.yg)("a",{href:"/adaptors/packages/common-docs#datapath"},"dataPath()")),(0,r.yg)("dt",null,(0,r.yg)("a",{href:"/adaptors/packages/common-docs#datavalue"},"dataValue()")),(0,r.yg)("dt",null,(0,r.yg)("a",{href:"/adaptors/packages/common-docs#datefns"},"dateFns")),(0,r.yg)("dt",null,(0,r.yg)("a",{href:"/adaptors/packages/common-docs#each"},"each()")),(0,r.yg)("dt",null,(0,r.yg)("a",{href:"/adaptors/packages/common-docs#field"},"field()")),(0,r.yg)("dt",null,(0,r.yg)("a",{href:"/adaptors/packages/common-docs#fields"},"fields()")),(0,r.yg)("dt",null,(0,r.yg)("a",{href:"/adaptors/packages/common-docs#fn"},"fn()")),(0,r.yg)("dt",null,(0,r.yg)("a",{href:"/adaptors/packages/common-docs#fnif"},"fnIf()")),(0,r.yg)("dt",null,(0,r.yg)("a",{href:"/adaptors/packages/common-docs#lastreferencevalue"},"lastReferenceValue()")),(0,r.yg)("dt",null,(0,r.yg)("a",{href:"/adaptors/packages/common-docs#merge"},"merge()")),(0,r.yg)("dt",null,(0,r.yg)("a",{href:"/adaptors/packages/common-docs#sourcevalue"},"sourceValue()"))),(0,r.yg)("h2",{id:"functions"},"Functions"),(0,r.yg)("h3",{id:"create"},"create"),(0,r.yg)("p",null,(0,r.yg)("code",null,"create(resourceType, data, [callback]) \u21d2 Operation")),(0,r.yg)("p",null,"Create a record"),(0,r.yg)("table",null,(0,r.yg)("thead",{parentName:"table"},(0,r.yg)("tr",{parentName:"thead"},(0,r.yg)("th",{parentName:"tr",align:null},"Param"),(0,r.yg)("th",{parentName:"tr",align:null},"Type"),(0,r.yg)("th",{parentName:"tr",align:null},"Description"))),(0,r.yg)("tbody",{parentName:"table"},(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"resourceType"),(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("code",null,"string")),(0,r.yg)("td",{parentName:"tr",align:null},"Type of resource to create. E.g. ",(0,r.yg)("inlineCode",{parentName:"td"},"person"),", ",(0,r.yg)("inlineCode",{parentName:"td"},"patient"),", ",(0,r.yg)("inlineCode",{parentName:"td"},"encounter"),", ...")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"data"),(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("code",null,"OpenMRSData")),(0,r.yg)("td",{parentName:"tr",align:null},"Object which defines data that will be used to create a given instance of resource. To create a single instance of a resource, ",(0,r.yg)("inlineCode",{parentName:"td"},"data")," must be a javascript object, and to create multiple instances of a resources, ",(0,r.yg)("inlineCode",{parentName:"td"},"data")," must be an array of javascript objects.")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"[callback]"),(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("code",null,"function")),(0,r.yg)("td",{parentName:"tr",align:null},"Optional callback to handle the response")))),(0,r.yg)("p",null,(0,r.yg)("strong",{parentName:"p"},"Example:")," Create a person"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-js"},'create("person", {\n  names: [\n    {\n      givenName: "Mohit",\n      familyName: "Kumar",\n    },\n  ],\n  gender: "M",\n  birthdate: "1997-09-02",\n  addresses: [\n    {\n      address1: "30, Vivekananda Layout, Munnekolal,Marathahalli",\n      cityVillage: "Bengaluru",\n      country: "India",\n      postalCode: "560037",\n    },\n  ],\n});\n')),(0,r.yg)("p",null,(0,r.yg)("strong",{parentName:"p"},"Example:")," Create an encounter"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-js"},"create(\"encounter\", {\n  encounterDatetime: '2023-05-25T06:08:25.000+0000',\n  patient: '1fdaa696-e759-4a7d-a066-f1ae557c151b',\n  encounterType: 'dd528487-82a5-4082-9c72-ed246bd49591',\n  location: 'ba685651-ed3b-4e63-9b35-78893060758a',\n  encounterProviders: [],\n  visit: {\n    patient: '1fdaa696-e759-4a7d-a066-f1ae557c151b',\n    visitType: '7b0f5697-27e3-40c4-8bae-f4049abfb4ed',\n    startDatetime: '2023-05-25T06:08:25.000+0000',\n    stopDatetime: '2023-05-25T06:09:25.000+0000',\n  },\n})\n")),(0,r.yg)("p",null,(0,r.yg)("strong",{parentName:"p"},"Example:")," Create a patient"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-js"},"create(\"patient\", {\n  identifiers: [\n    {\n      identifier: '4023287',\n      identifierType: '05a29f94-c0ed-11e2-94be-8c13b969e334',\n      preferred: true,\n    },\n  ],\n  person: {\n    gender: 'M',\n    age: 42,\n    birthdate: '1970-01-01T00:00:00.000+0100',\n    birthdateEstimated: false,\n    names: [\n      {\n        givenName: 'Doe',\n        familyName: 'John',\n      },\n    ],\n  },\n})\n")),(0,r.yg)("hr",null),(0,r.yg)("h3",{id:"get"},"get"),(0,r.yg)("p",null,(0,r.yg)("code",null,"get(path, query, [callback]) \u21d2 Operation")),(0,r.yg)("p",null,"Make a get request to any OpenMRS endpoint"),(0,r.yg)("table",null,(0,r.yg)("thead",{parentName:"table"},(0,r.yg)("tr",{parentName:"thead"},(0,r.yg)("th",{parentName:"tr",align:null},"Param"),(0,r.yg)("th",{parentName:"tr",align:null},"Type"),(0,r.yg)("th",{parentName:"tr",align:null},"Description"))),(0,r.yg)("tbody",{parentName:"table"},(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"path"),(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("code",null,"string")),(0,r.yg)("td",{parentName:"tr",align:null},"Path to resource")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"query"),(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("code",null,"object")),(0,r.yg)("td",{parentName:"tr",align:null},"parameters for the request")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"[callback]"),(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("code",null,"function")),(0,r.yg)("td",{parentName:"tr",align:null},"Optional callback to handle the response")))),(0,r.yg)("p",null,(0,r.yg)("strong",{parentName:"p"},"Example")),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-js"},'get("patient", {\n  q: "Patient",\n  limit: 1,\n});\n')),(0,r.yg)("hr",null),(0,r.yg)("h3",{id:"getencounter"},"getEncounter"),(0,r.yg)("p",null,(0,r.yg)("code",null,"getEncounter(uuid, [callback]) \u21d2 Operation")),(0,r.yg)("p",null,"Gets encounter matching a uuid"),(0,r.yg)("table",null,(0,r.yg)("thead",{parentName:"table"},(0,r.yg)("tr",{parentName:"thead"},(0,r.yg)("th",{parentName:"tr",align:null},"Param"),(0,r.yg)("th",{parentName:"tr",align:null},"Type"),(0,r.yg)("th",{parentName:"tr",align:null},"Description"))),(0,r.yg)("tbody",{parentName:"table"},(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"uuid"),(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("code",null,"object")),(0,r.yg)("td",{parentName:"tr",align:null},"A uuid for the encounter")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"[callback]"),(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("code",null,"function")),(0,r.yg)("td",{parentName:"tr",align:null},"Optional callback to handle the response")))),(0,r.yg)("p",null,(0,r.yg)("strong",{parentName:"p"},"Example")),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-js"},'getEncounter("123")\n')),(0,r.yg)("hr",null),(0,r.yg)("h3",{id:"getencounters"},"getEncounters"),(0,r.yg)("p",null,(0,r.yg)("code",null,"getEncounters(query, [callback]) \u21d2 Operation")),(0,r.yg)("p",null,"Gets encounters matching params"),(0,r.yg)("table",null,(0,r.yg)("thead",{parentName:"table"},(0,r.yg)("tr",{parentName:"thead"},(0,r.yg)("th",{parentName:"tr",align:null},"Param"),(0,r.yg)("th",{parentName:"tr",align:null},"Type"),(0,r.yg)("th",{parentName:"tr",align:null},"Description"))),(0,r.yg)("tbody",{parentName:"table"},(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"query"),(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("code",null,"object")),(0,r.yg)("td",{parentName:"tr",align:null},"Object for the patient")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"[callback]"),(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("code",null,"function")),(0,r.yg)("td",{parentName:"tr",align:null},"Optional callback to handle the response")))),(0,r.yg)("p",null,(0,r.yg)("strong",{parentName:"p"},"Example")),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-js"},'getEncounters({ patient: "123", fromdate: "2023-05-18" })\n')),(0,r.yg)("hr",null),(0,r.yg)("h3",{id:"getpatient"},"getPatient"),(0,r.yg)("p",null,(0,r.yg)("code",null,"getPatient(uuid, [callback]) \u21d2 Operation")),(0,r.yg)("p",null,"Gets patient matching a uuid"),(0,r.yg)("table",null,(0,r.yg)("thead",{parentName:"table"},(0,r.yg)("tr",{parentName:"thead"},(0,r.yg)("th",{parentName:"tr",align:null},"Param"),(0,r.yg)("th",{parentName:"tr",align:null},"Type"),(0,r.yg)("th",{parentName:"tr",align:null},"Description"))),(0,r.yg)("tbody",{parentName:"table"},(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"uuid"),(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("code",null,"string")),(0,r.yg)("td",{parentName:"tr",align:null},"A uuid for the patient")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"[callback]"),(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("code",null,"function")),(0,r.yg)("td",{parentName:"tr",align:null},"Optional callback to handle the response")))),(0,r.yg)("p",null,(0,r.yg)("strong",{parentName:"p"},"Example:")," Get a patient by uuid"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-js"},"getPatient('681f8785-c9ca-4dc8-a091-7b869316ff93')\n")),(0,r.yg)("hr",null),(0,r.yg)("h3",{id:"post"},"post"),(0,r.yg)("p",null,(0,r.yg)("code",null,"post(path, data, [callback]) \u21d2 Operation")),(0,r.yg)("p",null,"Make a post request to any OpenMRS endpoint"),(0,r.yg)("table",null,(0,r.yg)("thead",{parentName:"table"},(0,r.yg)("tr",{parentName:"thead"},(0,r.yg)("th",{parentName:"tr",align:null},"Param"),(0,r.yg)("th",{parentName:"tr",align:null},"Type"),(0,r.yg)("th",{parentName:"tr",align:null},"Description"))),(0,r.yg)("tbody",{parentName:"table"},(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"path"),(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("code",null,"string")),(0,r.yg)("td",{parentName:"tr",align:null},"Path to resource")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"data"),(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("code",null,"object")),(0,r.yg)("td",{parentName:"tr",align:null},"Object which defines data that will be used to create a given instance of resource")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"[callback]"),(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("code",null,"function")),(0,r.yg)("td",{parentName:"tr",align:null},"Optional callback to handle the response")))),(0,r.yg)("p",null,(0,r.yg)("strong",{parentName:"p"},"Example")),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-js"},'post(\n  "idgen/identifiersource/8549f706-7e85-4c1d-9424-217d50a2988b/identifier",\n  {}\n);\n')),(0,r.yg)("hr",null),(0,r.yg)("h3",{id:"searchpatient"},"searchPatient"),(0,r.yg)("p",null,(0,r.yg)("code",null,"searchPatient(query, [callback]) \u21d2 Operation")),(0,r.yg)("p",null,"Fetch all non-retired patients that match any specified parameters"),(0,r.yg)("table",null,(0,r.yg)("thead",{parentName:"table"},(0,r.yg)("tr",{parentName:"thead"},(0,r.yg)("th",{parentName:"tr",align:null},"Param"),(0,r.yg)("th",{parentName:"tr",align:null},"Type"),(0,r.yg)("th",{parentName:"tr",align:null},"Description"))),(0,r.yg)("tbody",{parentName:"table"},(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"query"),(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("code",null,"object")),(0,r.yg)("td",{parentName:"tr",align:null},"Object with query for the patient.")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"[callback]"),(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("code",null,"function")),(0,r.yg)("td",{parentName:"tr",align:null},"Optional callback to handle the response")))),(0,r.yg)("p",null,(0,r.yg)("strong",{parentName:"p"},"Example")),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-js"},'searchPatient({ q: "Sarah"})\n')),(0,r.yg)("hr",null),(0,r.yg)("h3",{id:"searchperson"},"searchPerson"),(0,r.yg)("p",null,(0,r.yg)("code",null,"searchPerson(query, [callback]) \u21d2 Operation")),(0,r.yg)("p",null,"Fetch all non-retired persons that match any specified parameters"),(0,r.yg)("table",null,(0,r.yg)("thead",{parentName:"table"},(0,r.yg)("tr",{parentName:"thead"},(0,r.yg)("th",{parentName:"tr",align:null},"Param"),(0,r.yg)("th",{parentName:"tr",align:null},"Type"),(0,r.yg)("th",{parentName:"tr",align:null},"Description"))),(0,r.yg)("tbody",{parentName:"table"},(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"query"),(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("code",null,"object")),(0,r.yg)("td",{parentName:"tr",align:null},"object with query for the person")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"[callback]"),(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("code",null,"function")),(0,r.yg)("td",{parentName:"tr",align:null},"Optional callback to handle the response")))),(0,r.yg)("p",null,(0,r.yg)("strong",{parentName:"p"},"Example")),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-js"},'searchPerson({ q: "Sarah" })\n')),(0,r.yg)("hr",null),(0,r.yg)("h3",{id:"update"},"update"),(0,r.yg)("p",null,(0,r.yg)("code",null,"update(resourceType, path, data, [callback]) \u21d2 Operation")),(0,r.yg)("p",null,"Update data. A generic helper function to update a resource object of any type.\nUpdating an object requires to send ",(0,r.yg)("inlineCode",{parentName:"p"},"all required fields")," or the ",(0,r.yg)("inlineCode",{parentName:"p"},"full body")),(0,r.yg)("table",null,(0,r.yg)("thead",{parentName:"table"},(0,r.yg)("tr",{parentName:"thead"},(0,r.yg)("th",{parentName:"tr",align:null},"Param"),(0,r.yg)("th",{parentName:"tr",align:null},"Type"),(0,r.yg)("th",{parentName:"tr",align:null},"Description"))),(0,r.yg)("tbody",{parentName:"table"},(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"resourceType"),(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("code",null,"string")),(0,r.yg)("td",{parentName:"tr",align:null},"The type of resource to be updated. E.g. ",(0,r.yg)("inlineCode",{parentName:"td"},"person"),", ",(0,r.yg)("inlineCode",{parentName:"td"},"patient"),", etc.")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"path"),(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("code",null,"string")),(0,r.yg)("td",{parentName:"tr",align:null},"The ",(0,r.yg)("inlineCode",{parentName:"td"},"id")," or ",(0,r.yg)("inlineCode",{parentName:"td"},"path")," to the ",(0,r.yg)("inlineCode",{parentName:"td"},"object")," to be updated. E.g. ",(0,r.yg)("inlineCode",{parentName:"td"},"e739808f-f166-42ae-aaf3-8b3e8fa13fda")," or ",(0,r.yg)("inlineCode",{parentName:"td"},"e739808f-f166-42ae-aaf3-8b3e8fa13fda/{collection-name}/{object-id}"))),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"data"),(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("code",null,"Object")),(0,r.yg)("td",{parentName:"tr",align:null},"Data to update. It requires to send ",(0,r.yg)("inlineCode",{parentName:"td"},"all required fields")," or the ",(0,r.yg)("inlineCode",{parentName:"td"},"full body"),". If you want ",(0,r.yg)("inlineCode",{parentName:"td"},"partial updates"),", use ",(0,r.yg)("inlineCode",{parentName:"td"},"patch")," operation.")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"[callback]"),(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("code",null,"function")),(0,r.yg)("td",{parentName:"tr",align:null},"Optional callback to handle the response")))),(0,r.yg)("p",null,(0,r.yg)("strong",{parentName:"p"},"Example:")," a person"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-js"},'update("person", \'3cad37ad-984d-4c65-a019-3eb120c9c373\',{"gender":"M","birthdate":"1997-01-13"})\n')),(0,r.yg)("hr",null),(0,r.yg)("h3",{id:"upsert"},"upsert"),(0,r.yg)("p",null,(0,r.yg)("code",null,"upsert(resourceType, query, data, [callback]) \u21d2 Operation")),(0,r.yg)("p",null,"Upsert a record. A generic helper function used to atomically either insert a row, or on the basis of the row already existing, UPDATE that existing row instead."),(0,r.yg)("p",null,(0,r.yg)("strong",{parentName:"p"},"Throws"),":"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("code",null,"RangeError")," - Throws range error")),(0,r.yg)("table",null,(0,r.yg)("thead",{parentName:"table"},(0,r.yg)("tr",{parentName:"thead"},(0,r.yg)("th",{parentName:"tr",align:null},"Param"),(0,r.yg)("th",{parentName:"tr",align:null},"Type"),(0,r.yg)("th",{parentName:"tr",align:null},"Description"))),(0,r.yg)("tbody",{parentName:"table"},(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"resourceType"),(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("code",null,"string")),(0,r.yg)("td",{parentName:"tr",align:null},"The type of a resource to ",(0,r.yg)("inlineCode",{parentName:"td"},"upsert"),". E.g. ",(0,r.yg)("inlineCode",{parentName:"td"},"trackedEntityInstances"))),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"query"),(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("code",null,"Object")),(0,r.yg)("td",{parentName:"tr",align:null},"A query object that allows to uniquely identify the resource to update. If no matches found, then the resource will be created.")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"data"),(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("code",null,"Object")),(0,r.yg)("td",{parentName:"tr",align:null},"The data to use for update or create depending on the result of the query.")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"[callback]"),(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("code",null,"function")),(0,r.yg)("td",{parentName:"tr",align:null},"Optional callback to handle the response")))),(0,r.yg)("p",null,(0,r.yg)("strong",{parentName:"p"},"Example:")," For an existing patient using upsert"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-js"},"upsert('patient', { q: '10007JJ' }, { person: { age: 50 } });\n")),(0,r.yg)("p",null,(0,r.yg)("strong",{parentName:"p"},"Example:")," For non existing patient creating a patient record using upsert "),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-js"},'upsert(\n  "patient",\n  { q: "1000EHE" },\n  {\n    identifiers: [\n      {\n        identifier: "1000EHE",\n        identifierType: "05a29f94-c0ed-11e2-94be-8c13b969e334",\n        location: "44c3efb0-2583-4c80-a79e-1f756a03c0a1",\n        preferred: true,\n      },\n    ],\n    person: {\n      gender: "M",\n      age: 42,\n    },\n  }\n);\n')),(0,r.yg)("hr",null),(0,r.yg)("h2",{id:"fhir"},"fhir"),(0,r.yg)("p",null,"These functions belong to the fhir namespace."),(0,r.yg)("h3",{id:"fhir_get"},"fhir.get"),(0,r.yg)("p",null,(0,r.yg)("code",null,"get(path, query, [callback]) \u21d2 Operation")),(0,r.yg)("p",null,"Make a get request to any FHIR endpoint in OpenMRS"),(0,r.yg)("table",null,(0,r.yg)("thead",{parentName:"table"},(0,r.yg)("tr",{parentName:"thead"},(0,r.yg)("th",{parentName:"tr",align:null},"Param"),(0,r.yg)("th",{parentName:"tr",align:null},"Type"),(0,r.yg)("th",{parentName:"tr",align:null},"Description"))),(0,r.yg)("tbody",{parentName:"table"},(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"path"),(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("code",null,"string")),(0,r.yg)("td",{parentName:"tr",align:null},"Path to resource")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"query"),(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("a",{parentName:"td",href:"#fhirparameters"},(0,r.yg)("code",null,"FhirParameters"))),(0,r.yg)("td",{parentName:"tr",align:null},"Request parameters")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"[callback]"),(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("code",null,"function")),(0,r.yg)("td",{parentName:"tr",align:null},"Optional callback to handle the response")))),(0,r.yg)("p",null,(0,r.yg)("strong",{parentName:"p"},"Example:")," Get encounters based on lastUpdated field"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-js"},"fhir.get('Encounter', { count: 100, lastUpdated: 'ge2024-01-01T00:00:00Z' })\n")),(0,r.yg)("hr",null),(0,r.yg)("h2",{id:"http"},"http"),(0,r.yg)("p",null,"These functions belong to the http namespace."),(0,r.yg)("h3",{id:"http_request"},"http.request"),(0,r.yg)("p",null,(0,r.yg)("code",null,"request(method, path, [options]) \u21d2 Operation")),(0,r.yg)("p",null,"Make a HTTP request to any OpenMRS endpoint"),(0,r.yg)("table",null,(0,r.yg)("thead",{parentName:"table"},(0,r.yg)("tr",{parentName:"thead"},(0,r.yg)("th",{parentName:"tr",align:null},"Param"),(0,r.yg)("th",{parentName:"tr",align:null},"Type"),(0,r.yg)("th",{parentName:"tr",align:null},"Default"),(0,r.yg)("th",{parentName:"tr",align:null},"Description"))),(0,r.yg)("tbody",{parentName:"table"},(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"method"),(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("code",null,"string")),(0,r.yg)("td",{parentName:"tr",align:null}),(0,r.yg)("td",{parentName:"tr",align:null},"HTTP method to use")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"path"),(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("code",null,"string")),(0,r.yg)("td",{parentName:"tr",align:null}),(0,r.yg)("td",{parentName:"tr",align:null},"Path to resource")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"[options]"),(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("a",{parentName:"td",href:"#openmrsoptions"},(0,r.yg)("code",null,"OpenMRSOptions"))),(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("code",null,"{}")),(0,r.yg)("td",{parentName:"tr",align:null},"An object containing query, headers, and body for the request")))),(0,r.yg)("p",null,(0,r.yg)("strong",{parentName:"p"},"Example")),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-js"},'request("GET",\n  "/ws/rest/v1/patient/d3f7e1a8-0114-4de6-914b-41a11fc8a1a8", {\n   query:{ \n      limit: 1, \n      offset: 20 \n   },\n});\n')),(0,r.yg)("hr",null),(0,r.yg)("h2",{id:"interfaces"},"Interfaces"),(0,r.yg)("h3",{id:"fhirparameters"},"FhirParameters"),(0,r.yg)("p",null,"OpenMRS FHIR requests parameters options.\nThis combines ",(0,r.yg)("a",{parentName:"p",href:"https://fhir.openmrs.org/artifacts.html"}," FHIR search parameters"),", ",(0,r.yg)("a",{parentName:"p",href:"https://www.hl7.org/fhir/R4/search.html"},"resource-specific parameters"),", and pagination options."),(0,r.yg)("p",null,(0,r.yg)("strong",{parentName:"p"},"Properties")),(0,r.yg)("table",null,(0,r.yg)("thead",{parentName:"table"},(0,r.yg)("tr",{parentName:"thead"},(0,r.yg)("th",{parentName:"tr",align:null},"Name"),(0,r.yg)("th",{parentName:"tr",align:null},"Type"),(0,r.yg)("th",{parentName:"tr",align:null},"Description"))),(0,r.yg)("tbody",{parentName:"table"},(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"count"),(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("code",null,"string")),(0,r.yg)("td",{parentName:"tr",align:null},"Number of results to return (_count in FHIR)")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"include"),(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("code",null,"string")),(0,r.yg)("td",{parentName:"tr",align:null},"Resources to include in the response (_include in FHIR)")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"revinclude"),(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("code",null,"string")),(0,r.yg)("td",{parentName:"tr",align:null},"Reverse includes to include in the response (_revinclude in FHIR)")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"summary"),(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("code",null,"string")),(0,r.yg)("td",{parentName:"tr",align:null},"Summary mode for the response (_summary in FHIR)")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"total"),(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("code",null,"string")),(0,r.yg)("td",{parentName:"tr",align:null},"Whether to include a total count of matching resources (_total in FHIR)")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"elements"),(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("code",null,"string")),(0,r.yg)("td",{parentName:"tr",align:null},"List of elements to include in the response (_elements in FHIR)")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"contained"),(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("code",null,"string")),(0,r.yg)("td",{parentName:"tr",align:null},"Whether to include contained resources (_contained in FHIR)")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"containedType"),(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("code",null,"string")),(0,r.yg)("td",{parentName:"tr",align:null},"Type of contained resources (_containedType in FHIR)")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"id"),(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("code",null,"string")),(0,r.yg)("td",{parentName:"tr",align:null},"Logical ID of the resource to filter on (_id in FHIR)")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"lastUpdated"),(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("code",null,"string")),(0,r.yg)("td",{parentName:"tr",align:null},"Timestamp to filter resources last updated after this date (_lastUpdated in FHIR)")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"tag"),(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("code",null,"string")),(0,r.yg)("td",{parentName:"tr",align:null},"Tag to filter resources by (_tag in FHIR)")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"profile"),(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("code",null,"string")),(0,r.yg)("td",{parentName:"tr",align:null},"Profile URL to filter resources by (_profile in FHIR)")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"security"),(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("code",null,"string")),(0,r.yg)("td",{parentName:"tr",align:null},"Security labels to filter resources by (_security in FHIR)")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"text"),(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("code",null,"string")),(0,r.yg)("td",{parentName:"tr",align:null},"Text search on narrative content (_text in FHIR)")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"content"),(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("code",null,"string")),(0,r.yg)("td",{parentName:"tr",align:null},"Full-text search on resource content (_content in FHIR)")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"list"),(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("code",null,"string")),(0,r.yg)("td",{parentName:"tr",align:null},"Search resources included in a particular list (_list in FHIR)")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"has"),(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("code",null,"string")),(0,r.yg)("td",{parentName:"tr",align:null},"Perform search based on reference chains (_has in FHIR)")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"getPagesOffset"),(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("code",null,"string")),(0,r.yg)("td",{parentName:"tr",align:null},"Offset for pagination, used to skip a number of results (_getpagesoffset in OpenMRS)")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"getPages"),(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("code",null,"string")),(0,r.yg)("td",{parentName:"tr",align:null},"Get specific pages of resources (_getpages in OpenMRS)")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"bundleType"),(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("code",null,"string")),(0,r.yg)("td",{parentName:"tr",align:null},"Type of bundle to return (e.g., searchset, batch, history) (_bundleType in FHIR)")))),(0,r.yg)("hr",null))}d.isMDXComponent=!0},15680:(e,t,a)=>{a.d(t,{xA:()=>i,yg:()=>s});var n=a(96540);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function g(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function p(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var y=n.createContext({}),o=function(e){var t=n.useContext(y),a=t;return e&&(a="function"==typeof e?e(t):g(g({},t),e)),a},i=function(e){var t=o(e.components);return n.createElement(y.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},c=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,l=e.originalType,y=e.parentName,i=p(e,["components","mdxType","originalType","parentName"]),u=o(a),c=r,s=u["".concat(y,".").concat(c)]||u[c]||d[c]||l;return a?n.createElement(s,g(g({ref:t},i),{},{components:a})):n.createElement(s,g({ref:t},i))}));function s(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=a.length,g=new Array(l);g[0]=c;var p={};for(var y in t)hasOwnProperty.call(t,y)&&(p[y]=t[y]);p.originalType=e,p[u]="string"==typeof e?e:r,g[1]=p;for(var o=2;o<l;o++)g[o]=a[o];return n.createElement.apply(null,g)}return n.createElement.apply(null,a)}c.displayName="MDXCreateElement"}}]);