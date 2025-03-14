"use strict";(self.webpackChunk_openfn_docs=self.webpackChunk_openfn_docs||[]).push([[23060],{377:(e,a,t)=>{t.r(a),t.d(a,{assets:()=>p,contentTitle:()=>o,default:()=>y,frontMatter:()=>l,metadata:()=>g,toc:()=>s});var n=t(58168),r=(t(96540),t(15680));const l={title:"primero@3.0.10",id:"primero-docs",keywords:["adaptor","primero","createCase","createReferrals","getCases","getForms","getLocations","getLookups","getReferrals","updateCase","updateReferral","upsertCase"]},o=void 0,g={unversionedId:"packages/primero-docs",id:"packages/primero-docs",title:"primero@3.0.10",description:"createCase(params, callback)",source:"@site/adaptors/packages/primero-docs.md",sourceDirName:"packages",slug:"/packages/primero-docs",permalink:"/adaptors/packages/primero-docs",draft:!1,tags:[],version:"current",frontMatter:{title:"primero@3.0.10",id:"primero-docs",keywords:["adaptor","primero","createCase","createReferrals","getCases","getForms","getLocations","getLookups","getReferrals","updateCase","updateReferral","upsertCase"]},sidebar:"adaptors",previous:{title:"Primero",permalink:"/adaptors/primero"},next:{title:"Config for primero",permalink:"/adaptors/packages/primero-configuration-schema"}},p={},s=[{value:"Functions",id:"functions",level:2},{value:"createCase",id:"createcase",level:3},{value:"createReferrals",id:"createreferrals",level:3},{value:"getCases",id:"getcases",level:3},{value:"getForms",id:"getforms",level:3},{value:"getLocations",id:"getlocations",level:3},{value:"getLookups",id:"getlookups",level:3},{value:"getReferrals",id:"getreferrals",level:3},{value:"updateCase",id:"updatecase",level:3},{value:"updateReferral",id:"updatereferral",level:3},{value:"upsertCase",id:"upsertcase",level:3}],i={toc:s},c="wrapper";function y(e){let{components:a,...t}=e;return(0,r.yg)(c,(0,n.A)({},i,t,{components:a,mdxType:"MDXLayout"}),(0,r.yg)("dl",null,(0,r.yg)("dt",null,(0,r.yg)("a",{href:"#createcase"},"createCase(params, callback)")),(0,r.yg)("dt",null,(0,r.yg)("a",{href:"#createreferrals"},"createReferrals(params, callback)")),(0,r.yg)("dt",null,(0,r.yg)("a",{href:"#getcases"},"getCases(query, options, callback)")),(0,r.yg)("dt",null,(0,r.yg)("a",{href:"#getforms"},"getForms(query, callback)")),(0,r.yg)("dt",null,(0,r.yg)("a",{href:"#getlocations"},"getLocations(query, callback)")),(0,r.yg)("dt",null,(0,r.yg)("a",{href:"#getlookups"},"getLookups(query, callback)")),(0,r.yg)("dt",null,(0,r.yg)("a",{href:"#getreferrals"},"getReferrals(params, callback)")),(0,r.yg)("dt",null,(0,r.yg)("a",{href:"#updatecase"},"updateCase(id, params, callback)")),(0,r.yg)("dt",null,(0,r.yg)("a",{href:"#updatereferral"},"updateReferral(params, callback)")),(0,r.yg)("dt",null,(0,r.yg)("a",{href:"#upsertcase"},"upsertCase(params, callback)"))),(0,r.yg)("p",null,"This adaptor exports the following from common:"),(0,r.yg)("dl",null,(0,r.yg)("dt",null,(0,r.yg)("a",{href:"/adaptors/packages/common-docs#alterstate"},"alterState()")),(0,r.yg)("dt",null,(0,r.yg)("a",{href:"/adaptors/packages/common-docs#beta"},"beta")),(0,r.yg)("dt",null,(0,r.yg)("a",{href:"/adaptors/packages/common-docs#combine"},"combine()")),(0,r.yg)("dt",null,(0,r.yg)("a",{href:"/adaptors/packages/common-docs#datapath"},"dataPath()")),(0,r.yg)("dt",null,(0,r.yg)("a",{href:"/adaptors/packages/common-docs#datavalue"},"dataValue()")),(0,r.yg)("dt",null,(0,r.yg)("a",{href:"/adaptors/packages/common-docs#datefns"},"dateFns")),(0,r.yg)("dt",null,(0,r.yg)("a",{href:"/adaptors/packages/common-docs#each"},"each()")),(0,r.yg)("dt",null,(0,r.yg)("a",{href:"/adaptors/packages/common-docs#field"},"field()")),(0,r.yg)("dt",null,(0,r.yg)("a",{href:"/adaptors/packages/common-docs#fields"},"fields()")),(0,r.yg)("dt",null,(0,r.yg)("a",{href:"/adaptors/packages/common-docs#fn"},"fn()")),(0,r.yg)("dt",null,(0,r.yg)("a",{href:"/adaptors/packages/common-docs#fnif"},"fnIf()")),(0,r.yg)("dt",null,(0,r.yg)("a",{href:"/adaptors/packages/common-docs#http"},"http")),(0,r.yg)("dt",null,(0,r.yg)("a",{href:"/adaptors/packages/common-docs#lastreferencevalue"},"lastReferenceValue()")),(0,r.yg)("dt",null,(0,r.yg)("a",{href:"/adaptors/packages/common-docs#merge"},"merge()")),(0,r.yg)("dt",null,(0,r.yg)("a",{href:"/adaptors/packages/common-docs#sourcevalue"},"sourceValue()"))),(0,r.yg)("h2",{id:"functions"},"Functions"),(0,r.yg)("h3",{id:"createcase"},"createCase"),(0,r.yg)("p",null,(0,r.yg)("code",null,"createCase(params, callback) \u21d2 Operation")),(0,r.yg)("p",null,"Create a new case in Primero"),(0,r.yg)("p",null,"Use this function to create a new case in Primero based on a set of Data."),(0,r.yg)("table",null,(0,r.yg)("thead",{parentName:"table"},(0,r.yg)("tr",{parentName:"thead"},(0,r.yg)("th",{parentName:"tr",align:null},"Param"),(0,r.yg)("th",{parentName:"tr",align:null},"Type"),(0,r.yg)("th",{parentName:"tr",align:null},"Description"))),(0,r.yg)("tbody",{parentName:"table"},(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"params"),(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("code",null,"object")),(0,r.yg)("td",{parentName:"tr",align:null},"an object with some case data.")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"callback"),(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("code",null,"function")),(0,r.yg)("td",{parentName:"tr",align:null},"(Optional) Callback function")))),(0,r.yg)("p",null,(0,r.yg)("strong",{parentName:"p"},"Example:")," Create a new case in Primero based on a set of Data"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-js"},'createCase({\n  data: {\n    age: 16,\n    sex: "female",\n    name: "Edwine Edgemont",\n  },\n});\n')),(0,r.yg)("hr",null),(0,r.yg)("h3",{id:"createreferrals"},"createReferrals"),(0,r.yg)("p",null,(0,r.yg)("code",null,"createReferrals(params, callback) \u21d2 Operation")),(0,r.yg)("p",null,"Create referrals in Primero"),(0,r.yg)("p",null,"Use this function to bulk refer to one or multiple cases from Primero to a single user"),(0,r.yg)("table",null,(0,r.yg)("thead",{parentName:"table"},(0,r.yg)("tr",{parentName:"thead"},(0,r.yg)("th",{parentName:"tr",align:null},"Param"),(0,r.yg)("th",{parentName:"tr",align:null},"Type"),(0,r.yg)("th",{parentName:"tr",align:null},"Description"))),(0,r.yg)("tbody",{parentName:"table"},(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"params"),(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("code",null,"object")),(0,r.yg)("td",{parentName:"tr",align:null},"an object with referral data.")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"callback"),(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("code",null,"function")),(0,r.yg)("td",{parentName:"tr",align:null},"(Optional) Callback function")))),(0,r.yg)("p",null,(0,r.yg)("strong",{parentName:"p"},"Example:")," Create referrals for multiple cases in Primero"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-js"},'createReferrals({\n  data: {\n    ids: [\n      "749e9c6e-60db-45ec-8f5a-69da7c223a79",\n      "dcea6052-07d9-4cfa-9abf-9a36987cdd25",\n    ],\n    transitioned_to: "primero_cp",\n    notes: "This is a bulk referral",\n  },\n});\n')),(0,r.yg)("hr",null),(0,r.yg)("h3",{id:"getcases"},"getCases"),(0,r.yg)("p",null,(0,r.yg)("code",null,"getCases(query, options, callback) \u21d2 Operation")),(0,r.yg)("p",null,"Use this function to get cases from Primero based on a set of query parameters.\nNote that in many implementations, the ",(0,r.yg)("inlineCode",{parentName:"p"},"remote")," attribute should be set to ",(0,r.yg)("inlineCode",{parentName:"p"},"true")," to ensure that only cases marked for remote access will be retrieved.\nSet ",(0,r.yg)("inlineCode",{parentName:"p"},"case_id")," on the query object to fetch a specific case."),(0,r.yg)("table",null,(0,r.yg)("thead",{parentName:"table"},(0,r.yg)("tr",{parentName:"thead"},(0,r.yg)("th",{parentName:"tr",align:null},"Param"),(0,r.yg)("th",{parentName:"tr",align:null},"Type"),(0,r.yg)("th",{parentName:"tr",align:null},"Description"))),(0,r.yg)("tbody",{parentName:"table"},(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"query"),(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("code",null,"object")),(0,r.yg)("td",{parentName:"tr",align:null},"Query parameters to send to primero, which will be built into URL parameters. See ",(0,r.yg)("a",{parentName:"td",href:"https://github.com/primeroIMS/primero/blob/master/doc/api/cases/get.md"},"Primero Docs")," for a list of valid parameters.")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"options"),(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("code",null,"object")),(0,r.yg)("td",{parentName:"tr",align:null},"(Optional) Additional options")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"options.withReferrals"),(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("code",null,"boolean")),(0,r.yg)("td",{parentName:"tr",align:null},"Set to true to include referrals with each case. This will generate an extra request for each case and may take some time to process.")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"callback"),(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("code",null,"function")),(0,r.yg)("td",{parentName:"tr",align:null},"(Optional) Callback function")))),(0,r.yg)("p",null,(0,r.yg)("strong",{parentName:"p"},"Example:")," Fetch all cases"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-js"},"getCases();\n")),(0,r.yg)("p",null,(0,r.yg)("strong",{parentName:"p"},"Example:")," Fetch all cases which match query criteria"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-js"},'getCases({\n  remote: true,\n  sex: "male",\n  age: "10..15",\n  protection_concerns :"unaccompanied,separated",\n});\n')),(0,r.yg)("p",null,(0,r.yg)("strong",{parentName:"p"},"Example:")," Fetch a specific case by id"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-js"},'getCases({\n  case_id: "6aeaa66a-5a92-4ff5-bf7a-e59cde07eaaz",\n});\n')),(0,r.yg)("p",null,(0,r.yg)("strong",{parentName:"p"},"Example:")," Get all remote cases and their referrals"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-js"},"getCases(\n { remote: true },\n { withReferrals: true }\n);\n")),(0,r.yg)("hr",null),(0,r.yg)("h3",{id:"getforms"},"getForms"),(0,r.yg)("p",null,(0,r.yg)("code",null,"getForms(query, callback) \u21d2 Operation")),(0,r.yg)("p",null,"Get forms from Primero"),(0,r.yg)("p",null,"Use this function to get forms from Primero that are accessible to this user based on a set of query parameters.\nThe user can filter the form list by record type and module."),(0,r.yg)("table",null,(0,r.yg)("thead",{parentName:"table"},(0,r.yg)("tr",{parentName:"thead"},(0,r.yg)("th",{parentName:"tr",align:null},"Param"),(0,r.yg)("th",{parentName:"tr",align:null},"Type"),(0,r.yg)("th",{parentName:"tr",align:null},"Description"))),(0,r.yg)("tbody",{parentName:"table"},(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"query"),(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("code",null,"object")),(0,r.yg)("td",{parentName:"tr",align:null},"an object with a query param at minimum")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"callback"),(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("code",null,"function")),(0,r.yg)("td",{parentName:"tr",align:null},"(Optional) Callback function")))),(0,r.yg)("p",null,(0,r.yg)("strong",{parentName:"p"},"Example:")," Get the list of all forms"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-js"},"getForms();\n")),(0,r.yg)("p",null,(0,r.yg)("strong",{parentName:"p"},"Example:")," Get the list of all forms for a specific module"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-js"},'getForms({\n  module_id: "6aeaa66a-5a92-4ff5-bf7a-e59cde07eaaz",\n});\n')),(0,r.yg)("hr",null),(0,r.yg)("h3",{id:"getlocations"},"getLocations"),(0,r.yg)("p",null,(0,r.yg)("code",null,"getLocations(query, callback) \u21d2 Operation")),(0,r.yg)("p",null,"Get locations from Primero"),(0,r.yg)("p",null,"Use this function to get a paginated list of all locations that are accessible to this user from Primero.\nNote: You can specify a ",(0,r.yg)("inlineCode",{parentName:"p"},"per")," value to fetch records per page(Defaults to 20).\nAlso you can specify ",(0,r.yg)("inlineCode",{parentName:"p"},"page")," value to fetch pagination (Defaults to 1).\nAnother parameter is ",(0,r.yg)("inlineCode",{parentName:"p"},"hierarchy: true")," (Defaults to false)"),(0,r.yg)("table",null,(0,r.yg)("thead",{parentName:"table"},(0,r.yg)("tr",{parentName:"thead"},(0,r.yg)("th",{parentName:"tr",align:null},"Param"),(0,r.yg)("th",{parentName:"tr",align:null},"Type"),(0,r.yg)("th",{parentName:"tr",align:null},"Description"))),(0,r.yg)("tbody",{parentName:"table"},(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"query"),(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("code",null,"object")),(0,r.yg)("td",{parentName:"tr",align:null},"an object with a query param at minimum")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"callback"),(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("code",null,"function")),(0,r.yg)("td",{parentName:"tr",align:null},"(Optional) Callback function")))),(0,r.yg)("p",null,(0,r.yg)("strong",{parentName:"p"},"Example:")," Get loocations from Primero with query parameters"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-js"},"getLocations({\n  page: 1,\n  per: 20\n})\n")),(0,r.yg)("hr",null),(0,r.yg)("h3",{id:"getlookups"},"getLookups"),(0,r.yg)("p",null,(0,r.yg)("code",null,"getLookups(query, callback) \u21d2 Operation")),(0,r.yg)("p",null,"Get lookups from Primero"),(0,r.yg)("p",null,"Use this function to get a paginated list of all lookups that are accessible to this user from Primero.\nNote: You can specify a ",(0,r.yg)("inlineCode",{parentName:"p"},"per")," value to fetch records per page(Defaults to 20).\nAlso you can specify ",(0,r.yg)("inlineCode",{parentName:"p"},"page")," value to fetch pagination (Defaults to 1)"),(0,r.yg)("table",null,(0,r.yg)("thead",{parentName:"table"},(0,r.yg)("tr",{parentName:"thead"},(0,r.yg)("th",{parentName:"tr",align:null},"Param"),(0,r.yg)("th",{parentName:"tr",align:null},"Type"),(0,r.yg)("th",{parentName:"tr",align:null},"Description"))),(0,r.yg)("tbody",{parentName:"table"},(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"query"),(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("code",null,"object")),(0,r.yg)("td",{parentName:"tr",align:null},"an object with a query param at minimum")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"callback"),(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("code",null,"function")),(0,r.yg)("td",{parentName:"tr",align:null},"(Optional) Callback function")))),(0,r.yg)("p",null,(0,r.yg)("strong",{parentName:"p"},"Example:")," Get lookups from Primero with query parameters"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-js"},"getLookups({\n  per: 10000,\n  page: 5\n});\n")),(0,r.yg)("hr",null),(0,r.yg)("h3",{id:"getreferrals"},"getReferrals"),(0,r.yg)("p",null,(0,r.yg)("code",null,"getReferrals(params, callback) \u21d2 Operation")),(0,r.yg)("p",null,"Get referrals for a specific case in Primero"),(0,r.yg)("p",null,"Use this function to get the list of referrals of one case from Primero.\nThe search can be done using either ",(0,r.yg)("inlineCode",{parentName:"p"},"record id")," or ",(0,r.yg)("inlineCode",{parentName:"p"},"case id"),"."),(0,r.yg)("table",null,(0,r.yg)("thead",{parentName:"table"},(0,r.yg)("tr",{parentName:"thead"},(0,r.yg)("th",{parentName:"tr",align:null},"Param"),(0,r.yg)("th",{parentName:"tr",align:null},"Type"),(0,r.yg)("th",{parentName:"tr",align:null},"Description"))),(0,r.yg)("tbody",{parentName:"table"},(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"params"),(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("code",null,"object")),(0,r.yg)("td",{parentName:"tr",align:null},"an object with an externalId field to select the attribute to use for matching on case and an externalId value for that case.")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"callback"),(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("code",null,"function")),(0,r.yg)("td",{parentName:"tr",align:null},"(Optional) Callback function")))),(0,r.yg)("p",null,(0,r.yg)("strong",{parentName:"p"},"Example:")," Get referrals for a case in Primero by record id"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-js"},'getReferrals({\n  externalId: "record_id",\n  id: "6aeaa66a-5a92-4ff5-bf7a-e59cde07eaaz",\n});\n')),(0,r.yg)("p",null,(0,r.yg)("strong",{parentName:"p"},"Example:")," Get referrals for a case in Primero by case id"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-js"},' getReferrals({\n  id: "6aeaa66a-5a92-4ff5-bf7a-e59cde07eaaz",\n});\n')),(0,r.yg)("hr",null),(0,r.yg)("h3",{id:"updatecase"},"updateCase"),(0,r.yg)("p",null,(0,r.yg)("code",null,"updateCase(id, params, callback) \u21d2 Operation")),(0,r.yg)("p",null,"Update an existing case in Primero"),(0,r.yg)("p",null,"Use this function to update an existing case from Primero.\nIn this implementation, the function uses a case ID to check for the case to update,\nThen merge the values submitted in this call into an existing case.\nFields not specified in this request will not be modified.\nFor nested subform fields, the subform arrays will be recursively merged,\nkeeping both the existing values and appending the new"),(0,r.yg)("table",null,(0,r.yg)("thead",{parentName:"table"},(0,r.yg)("tr",{parentName:"thead"},(0,r.yg)("th",{parentName:"tr",align:null},"Param"),(0,r.yg)("th",{parentName:"tr",align:null},"Type"),(0,r.yg)("th",{parentName:"tr",align:null},"Description"))),(0,r.yg)("tbody",{parentName:"table"},(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"id"),(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("code",null,"string")),(0,r.yg)("td",{parentName:"tr",align:null},"A case ID to use for the update.")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"params"),(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("code",null,"object")),(0,r.yg)("td",{parentName:"tr",align:null},"an object with some case data.")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"callback"),(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("code",null,"function")),(0,r.yg)("td",{parentName:"tr",align:null},"(Optional) Callback function")))),(0,r.yg)("p",null,(0,r.yg)("strong",{parentName:"p"},"Example:")," Update case for a specific case id"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-js"},'updateCase("6aeaa66a-5a92-4ff5-bf7a-e59cde07eaaz", {\n  data: {\n    age: 16,\n    sex: "female",\n    name: "Fiona Edgemont",\n  },\n});\n')),(0,r.yg)("hr",null),(0,r.yg)("h3",{id:"updatereferral"},"updateReferral"),(0,r.yg)("p",null,(0,r.yg)("code",null,"updateReferral(params, callback) \u21d2 Operation")),(0,r.yg)("p",null,"Update a single referral for a specific case in Primero"),(0,r.yg)("table",null,(0,r.yg)("thead",{parentName:"table"},(0,r.yg)("tr",{parentName:"thead"},(0,r.yg)("th",{parentName:"tr",align:null},"Param"),(0,r.yg)("th",{parentName:"tr",align:null},"Type"),(0,r.yg)("th",{parentName:"tr",align:null},"Description"))),(0,r.yg)("tbody",{parentName:"table"},(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"params"),(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("code",null,"object")),(0,r.yg)("td",{parentName:"tr",align:null},"an object with an caseExternalId value to use, the id and the referral id to update.")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"callback"),(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("code",null,"function")),(0,r.yg)("td",{parentName:"tr",align:null},"(Optional) Callback function")))),(0,r.yg)("p",null,(0,r.yg)("strong",{parentName:"p"},"Example:")," Update referral by record id"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-js"},'updateReferral({\n  caseExternalId: "record_id",\n  id: "749e9c6e-60db-45ec-8f5a-69da7c223a79",\n  caseId: "dcea6052-07d9-4cfa-9abf-9a36987cdd25",\n  data: (state) => state.data,\n});\n')),(0,r.yg)("hr",null),(0,r.yg)("h3",{id:"upsertcase"},"upsertCase"),(0,r.yg)("p",null,(0,r.yg)("code",null,"upsertCase(params, callback) \u21d2 Operation")),(0,r.yg)("p",null,"Upsert case to Primero"),(0,r.yg)("p",null,"Use this function to update an existing case from Primero or to create it otherwise.\nIn this implementation, we first fetch the list of cases,\nthen we check if the case exist before choosing the right operation to do."),(0,r.yg)("table",null,(0,r.yg)("thead",{parentName:"table"},(0,r.yg)("tr",{parentName:"thead"},(0,r.yg)("th",{parentName:"tr",align:null},"Param"),(0,r.yg)("th",{parentName:"tr",align:null},"Type"),(0,r.yg)("th",{parentName:"tr",align:null},"Description"))),(0,r.yg)("tbody",{parentName:"table"},(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"params"),(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("code",null,"object")),(0,r.yg)("td",{parentName:"tr",align:null},"an object with an externalIds and some case data.")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"callback"),(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("code",null,"function")),(0,r.yg)("td",{parentName:"tr",align:null},"(Optional) Callback function")))),(0,r.yg)("p",null,(0,r.yg)("strong",{parentName:"p"},"Example:")," Upsert case for a specific case id"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-js"},'upsertCase({\n  externalIds: ["case_id"],\n  data: state => ({\n    age: 20,\n    sex: "male",\n    name: "Alex",\n    status: "open",\n    case_id: "6aeaa66a-5a92-4ff5-bf7a-e59cde07eaaz",\n  }),\n});\n')),(0,r.yg)("hr",null))}y.isMDXComponent=!0},15680:(e,a,t)=>{t.d(a,{xA:()=>i,yg:()=>m});var n=t(96540);function r(e,a,t){return a in e?Object.defineProperty(e,a,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[a]=t,e}function l(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);a&&(n=n.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,n)}return t}function o(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?l(Object(t),!0).forEach((function(a){r(e,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))}))}return e}function g(e,a){if(null==e)return{};var t,n,r=function(e,a){if(null==e)return{};var t,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)t=l[n],a.indexOf(t)>=0||(r[t]=e[t]);return r}(e,a);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)t=l[n],a.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var p=n.createContext({}),s=function(e){var a=n.useContext(p),t=a;return e&&(t="function"==typeof e?e(a):o(o({},a),e)),t},i=function(e){var a=s(e.components);return n.createElement(p.Provider,{value:a},e.children)},c="mdxType",y={inlineCode:"code",wrapper:function(e){var a=e.children;return n.createElement(n.Fragment,{},a)}},u=n.forwardRef((function(e,a){var t=e.components,r=e.mdxType,l=e.originalType,p=e.parentName,i=g(e,["components","mdxType","originalType","parentName"]),c=s(t),u=r,m=c["".concat(p,".").concat(u)]||c[u]||y[u]||l;return t?n.createElement(m,o(o({ref:a},i),{},{components:t})):n.createElement(m,o({ref:a},i))}));function m(e,a){var t=arguments,r=a&&a.mdxType;if("string"==typeof e||r){var l=t.length,o=new Array(l);o[0]=u;var g={};for(var p in a)hasOwnProperty.call(a,p)&&(g[p]=a[p]);g.originalType=e,g[c]="string"==typeof e?e:r,o[1]=g;for(var s=2;s<l;s++)o[s]=t[s];return n.createElement.apply(null,o)}return n.createElement.apply(null,t)}u.displayName="MDXCreateElement"}}]);