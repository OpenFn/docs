"use strict";(self.webpackChunk_openfn_docs=self.webpackChunk_openfn_docs||[]).push([[28109],{15680:(e,a,t)=>{t.d(a,{xA:()=>i,yg:()=>m});var n=t(96540);function l(e,a,t){return a in e?Object.defineProperty(e,a,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[a]=t,e}function r(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);a&&(n=n.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,n)}return t}function g(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?r(Object(t),!0).forEach((function(a){l(e,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))}))}return e}function p(e,a){if(null==e)return{};var t,n,l=function(e,a){if(null==e)return{};var t,n,l={},r=Object.keys(e);for(n=0;n<r.length;n++)t=r[n],a.indexOf(t)>=0||(l[t]=e[t]);return l}(e,a);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)t=r[n],a.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(l[t]=e[t])}return l}var o=n.createContext({}),d=function(e){var a=n.useContext(o),t=a;return e&&(t="function"==typeof e?e(a):g(g({},a),e)),t},i=function(e){var a=d(e.components);return n.createElement(o.Provider,{value:a},e.children)},y="mdxType",u={inlineCode:"code",wrapper:function(e){var a=e.children;return n.createElement(n.Fragment,{},a)}},s=n.forwardRef((function(e,a){var t=e.components,l=e.mdxType,r=e.originalType,o=e.parentName,i=p(e,["components","mdxType","originalType","parentName"]),y=d(t),s=l,m=y["".concat(o,".").concat(s)]||y[s]||u[s]||r;return t?n.createElement(m,g(g({ref:a},i),{},{components:t})):n.createElement(m,g({ref:a},i))}));function m(e,a){var t=arguments,l=a&&a.mdxType;if("string"==typeof e||l){var r=t.length,g=new Array(r);g[0]=s;var p={};for(var o in a)hasOwnProperty.call(a,o)&&(p[o]=a[o]);p.originalType=e,p[y]="string"==typeof e?e:l,g[1]=p;for(var d=2;d<r;d++)g[d]=t[d];return n.createElement.apply(null,g)}return n.createElement.apply(null,t)}s.displayName="MDXCreateElement"},8931:(e,a,t)=>{t.r(a),t.d(a,{assets:()=>o,contentTitle:()=>g,default:()=>u,frontMatter:()=>r,metadata:()=>p,toc:()=>d});var n=t(58168),l=(t(96540),t(15680));const r={title:"dhis2@5.0.0",id:"dhis2-docs",keywords:["adaptor","dhis2","attr","create","destroy","discover","dv","findAttributeValue","get","patch","update","upsert"]},g=void 0,p={unversionedId:"packages/dhis2-docs",id:"packages/dhis2-docs",title:"dhis2@5.0.0",description:"attr(attribute, value)",source:"@site/adaptors/packages/dhis2-docs.md",sourceDirName:"packages",slug:"/packages/dhis2-docs",permalink:"/adaptors/packages/dhis2-docs",draft:!1,tags:[],version:"current",frontMatter:{title:"dhis2@5.0.0",id:"dhis2-docs",keywords:["adaptor","dhis2","attr","create","destroy","discover","dv","findAttributeValue","get","patch","update","upsert"]},sidebar:"adaptors",previous:{title:"DHIS2",permalink:"/adaptors/dhis2"},next:{title:"Config for dhis2",permalink:"/adaptors/packages/dhis2-configuration-schema"}},o={},d=[{value:"Functions",id:"functions",level:2},{value:"attr",id:"attr",level:3},{value:"create",id:"create",level:3},{value:"destroy",id:"destroy",level:3},{value:"discover",id:"discover",level:3},{value:"dv",id:"dv",level:3},{value:"findAttributeValue",id:"findattributevalue",level:3},{value:"get",id:"get",level:3},{value:"patch",id:"patch",level:3},{value:"update",id:"update",level:3},{value:"upsert",id:"upsert",level:3}],i={toc:d},y="wrapper";function u(e){let{components:a,...t}=e;return(0,l.yg)(y,(0,n.A)({},i,t,{components:a,mdxType:"MDXLayout"}),(0,l.yg)("dl",null,(0,l.yg)("dt",null,(0,l.yg)("a",{href:"#attr"},"attr(attribute, value)")),(0,l.yg)("dt",null,(0,l.yg)("a",{href:"#create"},"create(resourceType, data, [options], [callback])")),(0,l.yg)("dt",null,(0,l.yg)("a",{href:"#destroy"},"destroy(resourceType, path, [data], [options], [callback])")),(0,l.yg)("dt",null,(0,l.yg)("a",{href:"#discover"},"discover(httpMethod, endpoint)")),(0,l.yg)("dt",null,(0,l.yg)("a",{href:"#dv"},"dv(dataElement, value)")),(0,l.yg)("dt",null,(0,l.yg)("a",{href:"#findattributevalue"},"findAttributeValue(trackedEntityInstance, attributeDisplayName)")),(0,l.yg)("dt",null,(0,l.yg)("a",{href:"#get"},"get(resourceType, query, [options], [callback])")),(0,l.yg)("dt",null,(0,l.yg)("a",{href:"#patch"},"patch(resourceType, path, data, [options], [callback])")),(0,l.yg)("dt",null,(0,l.yg)("a",{href:"#update"},"update(resourceType, path, data, [options], [callback])")),(0,l.yg)("dt",null,(0,l.yg)("a",{href:"#upsert"},"upsert(resourceType, query, data, [options], [callback])"))),(0,l.yg)("p",null,"This adaptor exports the following from common:"),(0,l.yg)("dl",null,(0,l.yg)("dt",null,(0,l.yg)("a",{href:"/adaptors/packages/common-docs#alterstate"},"alterState()")),(0,l.yg)("dt",null,(0,l.yg)("a",{href:"/adaptors/packages/common-docs#datapath"},"dataPath()")),(0,l.yg)("dt",null,(0,l.yg)("a",{href:"/adaptors/packages/common-docs#datavalue"},"dataValue()")),(0,l.yg)("dt",null,(0,l.yg)("a",{href:"/adaptors/packages/common-docs#datefns"},"dateFns")),(0,l.yg)("dt",null,(0,l.yg)("a",{href:"/adaptors/packages/common-docs#each"},"each()")),(0,l.yg)("dt",null,(0,l.yg)("a",{href:"/adaptors/packages/common-docs#field"},"field()")),(0,l.yg)("dt",null,(0,l.yg)("a",{href:"/adaptors/packages/common-docs#fields"},"fields()")),(0,l.yg)("dt",null,(0,l.yg)("a",{href:"/adaptors/packages/common-docs#fn"},"fn()")),(0,l.yg)("dt",null,(0,l.yg)("a",{href:"/adaptors/packages/common-docs#fnif"},"fnIf()")),(0,l.yg)("dt",null,(0,l.yg)("a",{href:"/adaptors/packages/common-docs#group"},"group()")),(0,l.yg)("dt",null,(0,l.yg)("a",{href:"/adaptors/packages/common-docs#http"},"http")),(0,l.yg)("dt",null,(0,l.yg)("a",{href:"/adaptors/packages/common-docs#lastreferencevalue"},"lastReferenceValue()")),(0,l.yg)("dt",null,(0,l.yg)("a",{href:"/adaptors/packages/common-docs#merge"},"merge()")),(0,l.yg)("dt",null,(0,l.yg)("a",{href:"/adaptors/packages/common-docs#sourcevalue"},"sourceValue()"))),(0,l.yg)("h2",{id:"functions"},"Functions"),(0,l.yg)("h3",{id:"attr"},"attr"),(0,l.yg)("p",null,(0,l.yg)("code",null,"attr(attribute, value) \u21d2 object")),(0,l.yg)("p",null,"Converts an attribute ID and value into a DSHI2 attribute object"),(0,l.yg)("table",null,(0,l.yg)("thead",{parentName:"table"},(0,l.yg)("tr",{parentName:"thead"},(0,l.yg)("th",{parentName:"tr",align:null},"Param"),(0,l.yg)("th",{parentName:"tr",align:null},"Type"),(0,l.yg)("th",{parentName:"tr",align:null},"Description"))),(0,l.yg)("tbody",{parentName:"table"},(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"attribute"),(0,l.yg)("td",{parentName:"tr",align:null},(0,l.yg)("code",null,"string")),(0,l.yg)("td",{parentName:"tr",align:null},"A tracked entity instance (TEI) attribute ID.")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"value"),(0,l.yg)("td",{parentName:"tr",align:null},(0,l.yg)("code",null,"string")),(0,l.yg)("td",{parentName:"tr",align:null},"The value for that attribute.")))),(0,l.yg)("p",null,(0,l.yg)("strong",{parentName:"p"},"Example")),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre",className:"language-js"},"attr('w75KJ2mc4zz', 'Elias')\n")),(0,l.yg)("hr",null),(0,l.yg)("h3",{id:"create"},"create"),(0,l.yg)("p",null,(0,l.yg)("code",null,"create(resourceType, data, [options], [callback]) \u21d2 Operation")),(0,l.yg)("p",null,"Create a record"),(0,l.yg)("table",null,(0,l.yg)("thead",{parentName:"table"},(0,l.yg)("tr",{parentName:"thead"},(0,l.yg)("th",{parentName:"tr",align:null},"Param"),(0,l.yg)("th",{parentName:"tr",align:null},"Type"),(0,l.yg)("th",{parentName:"tr",align:null},"Description"))),(0,l.yg)("tbody",{parentName:"table"},(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"resourceType"),(0,l.yg)("td",{parentName:"tr",align:null},(0,l.yg)("code",null,"string")),(0,l.yg)("td",{parentName:"tr",align:null},"Type of resource to create. E.g. ",(0,l.yg)("inlineCode",{parentName:"td"},"trackedEntityInstances"),", ",(0,l.yg)("inlineCode",{parentName:"td"},"programs"),", ",(0,l.yg)("inlineCode",{parentName:"td"},"events"),", ...")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"data"),(0,l.yg)("td",{parentName:"tr",align:null},(0,l.yg)("code",null,"Dhis2Data")),(0,l.yg)("td",{parentName:"tr",align:null},"Object which defines data that will be used to create a given instance of resource. To create a single instance of a resource, ",(0,l.yg)("inlineCode",{parentName:"td"},"data")," must be a javascript object, and to create multiple instances of a resources, ",(0,l.yg)("inlineCode",{parentName:"td"},"data")," must be an array of javascript objects.")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"[options]"),(0,l.yg)("td",{parentName:"tr",align:null},(0,l.yg)("code",null,"Object")),(0,l.yg)("td",{parentName:"tr",align:null},"Optional ",(0,l.yg)("inlineCode",{parentName:"td"},"options")," to define URL parameters via params (E.g. ",(0,l.yg)("inlineCode",{parentName:"td"},"filter"),", ",(0,l.yg)("inlineCode",{parentName:"td"},"dimension")," and other import parameters), request config (E.g. ",(0,l.yg)("inlineCode",{parentName:"td"},"auth"),") and the DHIS2 apiVersion.")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"[callback]"),(0,l.yg)("td",{parentName:"tr",align:null},(0,l.yg)("code",null,"function")),(0,l.yg)("td",{parentName:"tr",align:null},"Optional callback to handle the response")))),(0,l.yg)("p",null,(0,l.yg)("strong",{parentName:"p"},"Example:")," a program"),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre",className:"language-js"},"create('programs', {\n  name: 'name 20',\n  shortName: 'n20',\n  programType: 'WITHOUT_REGISTRATION',\n});\n")),(0,l.yg)("p",null,(0,l.yg)("strong",{parentName:"p"},"Example:")," an event"),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre",className:"language-js"},"create('events', {\n  program: 'eBAyeGv0exc',\n  orgUnit: 'DiszpKrYNg8',\n  status: 'COMPLETED',\n});\n")),(0,l.yg)("p",null,(0,l.yg)("strong",{parentName:"p"},"Example:")," a trackedEntityInstance"),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre",className:"language-js"},"create('trackedEntityInstances', {\n  orgUnit: 'TSyzvBiovKh',\n  trackedEntityType: 'nEenWmSyUEp',\n  attributes: [\n    {\n      attribute: 'w75KJ2mc4zz',\n      value: 'Gigiwe',\n    },\n  ]\n});\n")),(0,l.yg)("p",null,(0,l.yg)("strong",{parentName:"p"},"Example:")," a dataSet"),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre",className:"language-js"},"create('dataSets', { name: 'OpenFn Data Set', periodType: 'Monthly' });\n")),(0,l.yg)("p",null,(0,l.yg)("strong",{parentName:"p"},"Example:")," a dataSetNotification"),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre",className:"language-js"},"create('dataSetNotificationTemplates', {\n  dataSetNotificationTrigger: 'DATA_SET_COMPLETION',\n  notificationRecipient: 'ORGANISATION_UNIT_CONTACT',\n  name: 'Notification',\n  messageTemplate: 'Hello',\n  deliveryChannels: ['SMS'],\n  dataSets: [],\n});\n")),(0,l.yg)("p",null,(0,l.yg)("strong",{parentName:"p"},"Example:")," a dataElement"),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre",className:"language-js"},"create('dataElements', {\n  aggregationType: 'SUM',\n  domainType: 'AGGREGATE',\n  valueType: 'NUMBER',\n  name: 'Paracetamol',\n  shortName: 'Para',\n});\n")),(0,l.yg)("p",null,(0,l.yg)("strong",{parentName:"p"},"Example:")," a dataElementGroup"),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre",className:"language-js"},"create('dataElementGroups', {\n  name: 'Data Element Group 1',\n  dataElements: [],\n});\n")),(0,l.yg)("p",null,(0,l.yg)("strong",{parentName:"p"},"Example:")," a dataElementGroupSet"),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre",className:"language-js"},"create('dataElementGroupSets', {\n  name: 'Data Element Group Set 4',\n  dataDimension: true,\n  shortName: 'DEGS4',\n  dataElementGroups: [],\n});\n")),(0,l.yg)("p",null,(0,l.yg)("strong",{parentName:"p"},"Example:")," a dataValueSet"),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre",className:"language-js"},"create('dataValueSets', {\n  dataElement: 'f7n9E0hX8qk',\n  period: '201401',\n  orgUnit: 'DiszpKrYNg8',\n  value: '12',\n});\n")),(0,l.yg)("p",null,(0,l.yg)("strong",{parentName:"p"},"Example:")," a dataValueSet with related dataValues"),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre",className:"language-js"},"create('dataValueSets', {\n  dataSet: 'pBOMPrpg1QX',\n  completeDate: '2014-02-03',\n  period: '201401',\n  orgUnit: 'DiszpKrYNg8',\n  dataValues: [\n    {\n      dataElement: 'f7n9E0hX8qk',\n      value: '1',\n    },\n    {\n      dataElement: 'Ix2HsbDMLea',\n      value: '2',\n    },\n    {\n      dataElement: 'eY5ehpbEsB7',\n      value: '3',\n    },\n  ],\n});\n")),(0,l.yg)("p",null,(0,l.yg)("strong",{parentName:"p"},"Example:")," an enrollment"),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre",className:"language-js"},"create('enrollments', {\n  trackedEntityInstance: 'bmshzEacgxa',\n  orgUnit: 'TSyzvBiovKh',\n  program: 'gZBxv9Ujxg0',\n  enrollmentDate: '2013-09-17',\n  incidentDate: '2013-09-17',\n});\n")),(0,l.yg)("hr",null),(0,l.yg)("h3",{id:"destroy"},"destroy"),(0,l.yg)("p",null,(0,l.yg)("code",null,"destroy(resourceType, path, [data], [options], [callback]) \u21d2 Operation")),(0,l.yg)("p",null,"Delete a record. A generic helper function to delete an object"),(0,l.yg)("table",null,(0,l.yg)("thead",{parentName:"table"},(0,l.yg)("tr",{parentName:"thead"},(0,l.yg)("th",{parentName:"tr",align:null},"Param"),(0,l.yg)("th",{parentName:"tr",align:null},"Type"),(0,l.yg)("th",{parentName:"tr",align:null},"Description"))),(0,l.yg)("tbody",{parentName:"table"},(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"resourceType"),(0,l.yg)("td",{parentName:"tr",align:null},(0,l.yg)("code",null,"string")),(0,l.yg)("td",{parentName:"tr",align:null},"The type of resource to be deleted. E.g. ",(0,l.yg)("inlineCode",{parentName:"td"},"trackedEntityInstances"),", ",(0,l.yg)("inlineCode",{parentName:"td"},"organisationUnits"),", etc.")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"path"),(0,l.yg)("td",{parentName:"tr",align:null},(0,l.yg)("code",null,"string")),(0,l.yg)("td",{parentName:"tr",align:null},"Can be an ",(0,l.yg)("inlineCode",{parentName:"td"},"id")," of an ",(0,l.yg)("inlineCode",{parentName:"td"},"object")," or ",(0,l.yg)("inlineCode",{parentName:"td"},"path")," to the ",(0,l.yg)("inlineCode",{parentName:"td"},"nested object")," to ",(0,l.yg)("inlineCode",{parentName:"td"},"delete"),".")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"[data]"),(0,l.yg)("td",{parentName:"tr",align:null},(0,l.yg)("code",null,"Object")),(0,l.yg)("td",{parentName:"tr",align:null},"Optional. This is useful when you want to remove multiple objects from a collection in one request. You can send ",(0,l.yg)("inlineCode",{parentName:"td"},"data")," as, for example, ",(0,l.yg)("inlineCode",{parentName:"td"},'{"identifiableObjects": [{"id": "IDA"}, {"id": "IDB"}, {"id": "IDC"}]}'),". See more ",(0,l.yg)("a",{parentName:"td",href:"https://docs.dhis2.org/2.34/en/dhis2_developer_manual/web-api.html#deleting-objects"},"on DHIS2 API docs"))),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"[options]"),(0,l.yg)("td",{parentName:"tr",align:null},(0,l.yg)("code",null,"Object")),(0,l.yg)("td",{parentName:"tr",align:null},"Optional ",(0,l.yg)("inlineCode",{parentName:"td"},"options")," for ",(0,l.yg)("inlineCode",{parentName:"td"},"del")," operation including params e.g. ",(0,l.yg)("inlineCode",{parentName:"td"},"{preheatCache: true, strategy: 'UPDATE', mergeMode: 'REPLACE'}"),". Run ",(0,l.yg)("inlineCode",{parentName:"td"},"discover")," or see ",(0,l.yg)("a",{parentName:"td",href:"https://docs.dhis2.org/2.34/en/dhis2_developer_manual/web-api.html#create-update-parameters"},"DHIS2 documentation"),". Defaults to ",(0,l.yg)("inlineCode",{parentName:"td"},"{operationName: 'delete', apiVersion: state.configuration.apiVersion, responseType: 'json'}"))),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"[callback]"),(0,l.yg)("td",{parentName:"tr",align:null},(0,l.yg)("code",null,"function")),(0,l.yg)("td",{parentName:"tr",align:null},"Optional callback to handle the response")))),(0,l.yg)("p",null,(0,l.yg)("strong",{parentName:"p"},"Example:")," a tracked entity instance"),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre",className:"language-js"},"destroy('trackedEntityInstances', 'LcRd6Nyaq7T');\n")),(0,l.yg)("hr",null),(0,l.yg)("h3",{id:"discover"},"discover"),(0,l.yg)("p",null,(0,l.yg)("code",null,"discover(httpMethod, endpoint) \u21d2 Operation")),(0,l.yg)("p",null,"Discover ",(0,l.yg)("inlineCode",{parentName:"p"},"DHIS2")," ",(0,l.yg)("inlineCode",{parentName:"p"},"api")," ",(0,l.yg)("inlineCode",{parentName:"p"},"endpoint")," ",(0,l.yg)("inlineCode",{parentName:"p"},"query parameters")," and allowed ",(0,l.yg)("inlineCode",{parentName:"p"},"operators")," for a given resource's endpoint."),(0,l.yg)("table",null,(0,l.yg)("thead",{parentName:"table"},(0,l.yg)("tr",{parentName:"thead"},(0,l.yg)("th",{parentName:"tr",align:null},"Param"),(0,l.yg)("th",{parentName:"tr",align:null},"Type"),(0,l.yg)("th",{parentName:"tr",align:null},"Description"))),(0,l.yg)("tbody",{parentName:"table"},(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"httpMethod"),(0,l.yg)("td",{parentName:"tr",align:null},(0,l.yg)("code",null,"string")),(0,l.yg)("td",{parentName:"tr",align:null},"The HTTP to inspect parameter usage for a given endpoint, e.g., ",(0,l.yg)("inlineCode",{parentName:"td"},"get"),", ",(0,l.yg)("inlineCode",{parentName:"td"},"post"),",",(0,l.yg)("inlineCode",{parentName:"td"},"put"),",",(0,l.yg)("inlineCode",{parentName:"td"},"patch"),",",(0,l.yg)("inlineCode",{parentName:"td"},"delete"))),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"endpoint"),(0,l.yg)("td",{parentName:"tr",align:null},(0,l.yg)("code",null,"string")),(0,l.yg)("td",{parentName:"tr",align:null},"The path for a given endpoint. E.g. ",(0,l.yg)("inlineCode",{parentName:"td"},"/trackedEntityInstances")," or ",(0,l.yg)("inlineCode",{parentName:"td"},"/dataValueSets"))))),(0,l.yg)("p",null,(0,l.yg)("strong",{parentName:"p"},"Example:")," a list of parameters allowed on a given endpoint for specific http method"),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre",className:"language-js"},"discover('post', '/trackedEntityInstances')\n")),(0,l.yg)("hr",null),(0,l.yg)("h3",{id:"dv"},"dv"),(0,l.yg)("p",null,(0,l.yg)("code",null,"dv(dataElement, value) \u21d2 object")),(0,l.yg)("p",null,"Converts a dataElement and value into a DSHI2 dataValue object"),(0,l.yg)("table",null,(0,l.yg)("thead",{parentName:"table"},(0,l.yg)("tr",{parentName:"thead"},(0,l.yg)("th",{parentName:"tr",align:null},"Param"),(0,l.yg)("th",{parentName:"tr",align:null},"Type"),(0,l.yg)("th",{parentName:"tr",align:null},"Description"))),(0,l.yg)("tbody",{parentName:"table"},(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"dataElement"),(0,l.yg)("td",{parentName:"tr",align:null},(0,l.yg)("code",null,"string")),(0,l.yg)("td",{parentName:"tr",align:null},"A data element ID.")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"value"),(0,l.yg)("td",{parentName:"tr",align:null},(0,l.yg)("code",null,"string")),(0,l.yg)("td",{parentName:"tr",align:null},"The value for that data element.")))),(0,l.yg)("p",null,(0,l.yg)("strong",{parentName:"p"},"Example")),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre",className:"language-js"},"dv('f7n9E0hX8qk', 12)\n")),(0,l.yg)("hr",null),(0,l.yg)("h3",{id:"findattributevalue"},"findAttributeValue"),(0,l.yg)("p",null,(0,l.yg)("code",null,"findAttributeValue(trackedEntityInstance, attributeDisplayName) \u21d2 string")),(0,l.yg)("p",null,"Gets an attribute value by its case-insensitive display name"),(0,l.yg)("table",null,(0,l.yg)("thead",{parentName:"table"},(0,l.yg)("tr",{parentName:"thead"},(0,l.yg)("th",{parentName:"tr",align:null},"Param"),(0,l.yg)("th",{parentName:"tr",align:null},"Type"),(0,l.yg)("th",{parentName:"tr",align:null},"Description"))),(0,l.yg)("tbody",{parentName:"table"},(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"trackedEntityInstance"),(0,l.yg)("td",{parentName:"tr",align:null},(0,l.yg)("code",null,"Object")),(0,l.yg)("td",{parentName:"tr",align:null},"A tracked entity instance (TEI) object")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"attributeDisplayName"),(0,l.yg)("td",{parentName:"tr",align:null},(0,l.yg)("code",null,"string")),(0,l.yg)("td",{parentName:"tr",align:null},"The 'displayName' to search for in the TEI's attributes")))),(0,l.yg)("p",null,(0,l.yg)("strong",{parentName:"p"},"Example")),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre",className:"language-js"},"findAttributeValue(state.data.trackedEntityInstances[0], 'first name')\n")),(0,l.yg)("hr",null),(0,l.yg)("h3",{id:"get"},"get"),(0,l.yg)("p",null,(0,l.yg)("code",null,"get(resourceType, query, [options], [callback]) \u21d2 Operation")),(0,l.yg)("p",null,"Get data. Generic helper method for getting data of any kind from DHIS2."),(0,l.yg)("ul",null,(0,l.yg)("li",{parentName:"ul"},"This can be used to get ",(0,l.yg)("inlineCode",{parentName:"li"},"DataValueSets"),",",(0,l.yg)("inlineCode",{parentName:"li"},"events"),",",(0,l.yg)("inlineCode",{parentName:"li"},"trackedEntityInstances"),",",(0,l.yg)("inlineCode",{parentName:"li"},"etc."))),(0,l.yg)("p",null,(0,l.yg)("strong",{parentName:"p"},"Returns"),": ",(0,l.yg)("code",null,"Operation")," - state  "),(0,l.yg)("table",null,(0,l.yg)("thead",{parentName:"table"},(0,l.yg)("tr",{parentName:"thead"},(0,l.yg)("th",{parentName:"tr",align:null},"Param"),(0,l.yg)("th",{parentName:"tr",align:null},"Type"),(0,l.yg)("th",{parentName:"tr",align:null},"Description"))),(0,l.yg)("tbody",{parentName:"table"},(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"resourceType"),(0,l.yg)("td",{parentName:"tr",align:null},(0,l.yg)("code",null,"string")),(0,l.yg)("td",{parentName:"tr",align:null},"The type of resource to get(use its ",(0,l.yg)("inlineCode",{parentName:"td"},"plural")," name). E.g. ",(0,l.yg)("inlineCode",{parentName:"td"},"dataElements"),", ",(0,l.yg)("inlineCode",{parentName:"td"},"trackedEntityInstances"),",",(0,l.yg)("inlineCode",{parentName:"td"},"organisationUnits"),", etc.")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"query"),(0,l.yg)("td",{parentName:"tr",align:null},(0,l.yg)("code",null,"Object")),(0,l.yg)("td",{parentName:"tr",align:null},"A query object that will limit what resources are retrieved when converted into request params.")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"[options]"),(0,l.yg)("td",{parentName:"tr",align:null},(0,l.yg)("code",null,"Object")),(0,l.yg)("td",{parentName:"tr",align:null},"Optional ",(0,l.yg)("inlineCode",{parentName:"td"},"options")," to define URL parameters via params beyond filters, request configuration (e.g. ",(0,l.yg)("inlineCode",{parentName:"td"},"auth"),") and DHIS2 api version to use.")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"[callback]"),(0,l.yg)("td",{parentName:"tr",align:null},(0,l.yg)("code",null,"function")),(0,l.yg)("td",{parentName:"tr",align:null},"Optional callback to handle the response")))),(0,l.yg)("p",null,(0,l.yg)("strong",{parentName:"p"},"Example:")," all data values for the ","'","pBOMPrpg1QX","'"," dataset"),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre",className:"language-js"},"get('dataValueSets', {\n  dataSet: 'pBOMPrpg1QX',\n  orgUnit: 'DiszpKrYNg8',\n  period: '201401',\n  fields: '*',\n});\n")),(0,l.yg)("p",null,(0,l.yg)("strong",{parentName:"p"},"Example:")," all programs for an organization unit"),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre",className:"language-js"},"get('programs', { orgUnit: 'TSyzvBiovKh', fields: '*' });\n")),(0,l.yg)("p",null,(0,l.yg)("strong",{parentName:"p"},"Example:")," a single tracked entity instance by a unique external ID"),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre",className:"language-js"},"get('trackedEntityInstances', {\n  ou: 'DiszpKrYNg8',\n  filter: ['flGbXLXCrEo:Eq:124', 'w75KJ2mc4zz:Eq:John'],\n});\n")),(0,l.yg)("hr",null),(0,l.yg)("h3",{id:"patch"},"patch"),(0,l.yg)("p",null,(0,l.yg)("code",null,"patch(resourceType, path, data, [options], [callback]) \u21d2 Operation")),(0,l.yg)("p",null,"Patch a record. A generic helper function to send partial updates on one or more object properties."),(0,l.yg)("ul",null,(0,l.yg)("li",{parentName:"ul"},"You are not required to send the full body of object properties."),(0,l.yg)("li",{parentName:"ul"},"This is useful for cases where you don't want or need to update all properties on a object.")),(0,l.yg)("table",null,(0,l.yg)("thead",{parentName:"table"},(0,l.yg)("tr",{parentName:"thead"},(0,l.yg)("th",{parentName:"tr",align:null},"Param"),(0,l.yg)("th",{parentName:"tr",align:null},"Type"),(0,l.yg)("th",{parentName:"tr",align:null},"Description"))),(0,l.yg)("tbody",{parentName:"table"},(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"resourceType"),(0,l.yg)("td",{parentName:"tr",align:null},(0,l.yg)("code",null,"string")),(0,l.yg)("td",{parentName:"tr",align:null},"The type of resource to be updated. E.g. ",(0,l.yg)("inlineCode",{parentName:"td"},"dataElements"),", ",(0,l.yg)("inlineCode",{parentName:"td"},"organisationUnits"),", etc.")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"path"),(0,l.yg)("td",{parentName:"tr",align:null},(0,l.yg)("code",null,"string")),(0,l.yg)("td",{parentName:"tr",align:null},"The ",(0,l.yg)("inlineCode",{parentName:"td"},"id")," or ",(0,l.yg)("inlineCode",{parentName:"td"},"path")," to the ",(0,l.yg)("inlineCode",{parentName:"td"},"object")," to be updated. E.g. ",(0,l.yg)("inlineCode",{parentName:"td"},"FTRrcoaog83")," or ",(0,l.yg)("inlineCode",{parentName:"td"},"FTRrcoaog83/{collection-name}/{object-id}"))),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"data"),(0,l.yg)("td",{parentName:"tr",align:null},(0,l.yg)("code",null,"Object")),(0,l.yg)("td",{parentName:"tr",align:null},"Data to update. Include only the fields you want to update. E.g. ",(0,l.yg)("inlineCode",{parentName:"td"},'{name: "New Name"}'))),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"[options]"),(0,l.yg)("td",{parentName:"tr",align:null},(0,l.yg)("code",null,"Object")),(0,l.yg)("td",{parentName:"tr",align:null},"Optional configuration, including params for the update ({preheatCache: true, strategy: 'UPDATE', mergeMode: 'REPLACE'}). Defaults to ",(0,l.yg)("inlineCode",{parentName:"td"},"{operationName: 'patch', apiVersion: state.configuration.apiVersion, responseType: 'json'}"))),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"[callback]"),(0,l.yg)("td",{parentName:"tr",align:null},(0,l.yg)("code",null,"function")),(0,l.yg)("td",{parentName:"tr",align:null},"Optional callback to handle the response")))),(0,l.yg)("p",null,(0,l.yg)("strong",{parentName:"p"},"Example:")," a dataElement"),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre",className:"language-js"},"patch('dataElements', 'FTRrcoaog83', { name: 'New Name' });\n")),(0,l.yg)("hr",null),(0,l.yg)("h3",{id:"update"},"update"),(0,l.yg)("p",null,(0,l.yg)("code",null,"update(resourceType, path, data, [options], [callback]) \u21d2 Operation")),(0,l.yg)("p",null,"Update data. A generic helper function to update a resource object of any type.\nUpdating an object requires to send ",(0,l.yg)("inlineCode",{parentName:"p"},"all required fields")," or the ",(0,l.yg)("inlineCode",{parentName:"p"},"full body")),(0,l.yg)("table",null,(0,l.yg)("thead",{parentName:"table"},(0,l.yg)("tr",{parentName:"thead"},(0,l.yg)("th",{parentName:"tr",align:null},"Param"),(0,l.yg)("th",{parentName:"tr",align:null},"Type"),(0,l.yg)("th",{parentName:"tr",align:null},"Description"))),(0,l.yg)("tbody",{parentName:"table"},(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"resourceType"),(0,l.yg)("td",{parentName:"tr",align:null},(0,l.yg)("code",null,"string")),(0,l.yg)("td",{parentName:"tr",align:null},"The type of resource to be updated. E.g. ",(0,l.yg)("inlineCode",{parentName:"td"},"dataElements"),", ",(0,l.yg)("inlineCode",{parentName:"td"},"organisationUnits"),", etc.")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"path"),(0,l.yg)("td",{parentName:"tr",align:null},(0,l.yg)("code",null,"string")),(0,l.yg)("td",{parentName:"tr",align:null},"The ",(0,l.yg)("inlineCode",{parentName:"td"},"id")," or ",(0,l.yg)("inlineCode",{parentName:"td"},"path")," to the ",(0,l.yg)("inlineCode",{parentName:"td"},"object")," to be updated. E.g. ",(0,l.yg)("inlineCode",{parentName:"td"},"FTRrcoaog83")," or ",(0,l.yg)("inlineCode",{parentName:"td"},"FTRrcoaog83/{collection-name}/{object-id}"))),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"data"),(0,l.yg)("td",{parentName:"tr",align:null},(0,l.yg)("code",null,"Object")),(0,l.yg)("td",{parentName:"tr",align:null},"Data to update. It requires to send ",(0,l.yg)("inlineCode",{parentName:"td"},"all required fields")," or the ",(0,l.yg)("inlineCode",{parentName:"td"},"full body"),". If you want ",(0,l.yg)("inlineCode",{parentName:"td"},"partial updates"),", use ",(0,l.yg)("inlineCode",{parentName:"td"},"patch")," operation.")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"[options]"),(0,l.yg)("td",{parentName:"tr",align:null},(0,l.yg)("code",null,"Object")),(0,l.yg)("td",{parentName:"tr",align:null},"Optional ",(0,l.yg)("inlineCode",{parentName:"td"},"options")," to define URL parameters via params (E.g. ",(0,l.yg)("inlineCode",{parentName:"td"},"filter"),", ",(0,l.yg)("inlineCode",{parentName:"td"},"dimension")," and other import parameters), request config (E.g. ",(0,l.yg)("inlineCode",{parentName:"td"},"auth"),") and the DHIS2 apiVersion.")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"[callback]"),(0,l.yg)("td",{parentName:"tr",align:null},(0,l.yg)("code",null,"function")),(0,l.yg)("td",{parentName:"tr",align:null},"Optional callback to handle the response")))),(0,l.yg)("p",null,(0,l.yg)("strong",{parentName:"p"},"Example:")," a program"),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre",className:"language-js"},"update('programs', 'qAZJCrNJK8H', {\n  name: '14e1aa02c3f0a31618e096f2c6d03bed',\n  shortName: '14e1aa02',\n  programType: 'WITHOUT_REGISTRATION',\n});\n")),(0,l.yg)("p",null,(0,l.yg)("strong",{parentName:"p"},"Example:")," an event"),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre",className:"language-js"},"update('events', 'PVqUD2hvU4E', {\n  program: 'eBAyeGv0exc',\n  orgUnit: 'Ngelehun CHC',\n  status: 'COMPLETED',\n  storedBy: 'admin',\n  dataValues: [],\n});\n")),(0,l.yg)("p",null,(0,l.yg)("strong",{parentName:"p"},"Example:")," a trackedEntityInstance"),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre",className:"language-js"},"update('trackedEntityInstances', 'IeQfgUtGPq2', {\n  created: '2015-08-06T21:12:37.256',\n  orgUnit: 'TSyzvBiovKh',\n  createdAtClient: '2015-08-06T21:12:37.256',\n  trackedEntityInstance: 'IeQfgUtGPq2',\n  lastUpdated: '2015-08-06T21:12:37.257',\n  trackedEntityType: 'nEenWmSyUEp',\n  inactive: false,\n  deleted: false,\n  featureType: 'NONE',\n  programOwners: [\n    {\n      ownerOrgUnit: 'TSyzvBiovKh',\n      program: 'IpHINAT79UW',\n      trackedEntityInstance: 'IeQfgUtGPq2',\n    },\n  ],\n  enrollments: [],\n  relationships: [],\n  attributes: [\n    {\n      lastUpdated: '2016-01-12T00:00:00.000',\n      displayName: 'Last name',\n      created: '2016-01-12T00:00:00.000',\n      valueType: 'TEXT',\n      attribute: 'zDhUuAYrxNC',\n      value: 'Russell',\n    },\n    {\n      lastUpdated: '2016-01-12T00:00:00.000',\n      code: 'MMD_PER_NAM',\n      displayName: 'First name',\n      created: '2016-01-12T00:00:00.000',\n      valueType: 'TEXT',\n      attribute: 'w75KJ2mc4zz',\n      value: 'Catherine',\n    },\n  ],\n});\n")),(0,l.yg)("p",null,(0,l.yg)("strong",{parentName:"p"},"Example:")," a dataSet"),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre",className:"language-js"},"update('dataSets', 'lyLU2wR22tC', { name: 'OpenFN Data Set', periodType: 'Weekly' });\n")),(0,l.yg)("p",null,(0,l.yg)("strong",{parentName:"p"},"Example:")," a dataSetNotification"),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre",className:"language-js"},"update('dataSetNotificationTemplates', 'VbQBwdm1wVP', {\n  dataSetNotificationTrigger: 'DATA_SET_COMPLETION',\n  notificationRecipient: 'ORGANISATION_UNIT_CONTACT',\n  name: 'Notification',\n  messageTemplate: 'Hello Updated,\n  deliveryChannels: ['SMS'],\n  dataSets: [],\n});\n")),(0,l.yg)("p",null,(0,l.yg)("strong",{parentName:"p"},"Example:")," a dataElement"),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre",className:"language-js"},"update('dataElements', 'FTRrcoaog83', {\n  aggregationType: 'SUM',\n  domainType: 'AGGREGATE',\n  valueType: 'NUMBER',\n  name: 'Paracetamol',\n  shortName: 'Para',\n});\n")),(0,l.yg)("p",null,(0,l.yg)("strong",{parentName:"p"},"Example:")," a dataElementGroup"),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre",className:"language-js"},"update('dataElementGroups', 'QrprHT61XFk', {\n  name: 'Data Element Group 1',\n  dataElements: [],\n});\n")),(0,l.yg)("p",null,(0,l.yg)("strong",{parentName:"p"},"Example:")," a dataElementGroupSet"),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre",className:"language-js"},"update('dataElementGroupSets', 'VxWloRvAze8', {\n  name: 'Data Element Group Set 4',\n  dataDimension: true,\n  shortName: 'DEGS4',\n  dataElementGroups: [],\n});\n")),(0,l.yg)("p",null,(0,l.yg)("strong",{parentName:"p"},"Example:")," a dataValueSet"),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre",className:"language-js"},"update('dataValueSets', 'AsQj6cDsUq4', {\n  dataElement: 'f7n9E0hX8qk',\n  period: '201401',\n  orgUnit: 'DiszpKrYNg8',\n  value: '12',\n});\n")),(0,l.yg)("p",null,(0,l.yg)("strong",{parentName:"p"},"Example:")," a dataValueSet with related dataValues"),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre",className:"language-js"},"update('dataValueSets', 'Ix2HsbDMLea', {\n  dataSet: 'pBOMPrpg1QX',\n  completeDate: '2014-02-03',\n  period: '201401',\n  orgUnit: 'DiszpKrYNg8',\n  dataValues: [\n    {\n      dataElement: 'f7n9E0hX8qk',\n      value: '1',\n    },\n    {\n      dataElement: 'Ix2HsbDMLea',\n      value: '2',\n    },\n    {\n      dataElement: 'eY5ehpbEsB7',\n      value: '3',\n    },\n  ],\n});\n")),(0,l.yg)("p",null,(0,l.yg)("strong",{parentName:"p"},"Example:")," a single enrollment"),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre",className:"language-js"},"update('enrollments', 'CmsHzercTBa' {\n  trackedEntityInstance: 'bmshzEacgxa',\n  orgUnit: 'TSyzvBiovKh',\n  program: 'gZBxv9Ujxg0',\n  enrollmentDate: '2013-10-17',\n  incidentDate: '2013-10-17',\n});\n")),(0,l.yg)("hr",null),(0,l.yg)("h3",{id:"upsert"},"upsert"),(0,l.yg)("p",null,(0,l.yg)("code",null,"upsert(resourceType, query, data, [options], [callback]) \u21d2 Operation")),(0,l.yg)("p",null,"Upsert a record. A generic helper function used to atomically either insert a row, or on the basis of the row already existing, UPDATE that existing row instead."),(0,l.yg)("p",null,(0,l.yg)("strong",{parentName:"p"},"Throws"),":"),(0,l.yg)("ul",null,(0,l.yg)("li",{parentName:"ul"},(0,l.yg)("code",null,"RangeError")," - Throws range error")),(0,l.yg)("table",null,(0,l.yg)("thead",{parentName:"table"},(0,l.yg)("tr",{parentName:"thead"},(0,l.yg)("th",{parentName:"tr",align:null},"Param"),(0,l.yg)("th",{parentName:"tr",align:null},"Type"),(0,l.yg)("th",{parentName:"tr",align:null},"Description"))),(0,l.yg)("tbody",{parentName:"table"},(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"resourceType"),(0,l.yg)("td",{parentName:"tr",align:null},(0,l.yg)("code",null,"string")),(0,l.yg)("td",{parentName:"tr",align:null},"The type of a resource to ",(0,l.yg)("inlineCode",{parentName:"td"},"upsert"),". E.g. ",(0,l.yg)("inlineCode",{parentName:"td"},"trackedEntityInstances"))),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"query"),(0,l.yg)("td",{parentName:"tr",align:null},(0,l.yg)("code",null,"Object")),(0,l.yg)("td",{parentName:"tr",align:null},"A query object that allows to uniquely identify the resource to update. If no matches found, then the resource will be created.")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"data"),(0,l.yg)("td",{parentName:"tr",align:null},(0,l.yg)("code",null,"Object")),(0,l.yg)("td",{parentName:"tr",align:null},"The data to use for update or create depending on the result of the query.")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"[options]"),(0,l.yg)("td",{parentName:"tr",align:null},(0,l.yg)("code",null,"Object")),(0,l.yg)("td",{parentName:"tr",align:null},"Optional configuration that will be applied to both the ",(0,l.yg)("inlineCode",{parentName:"td"},"get")," and the ",(0,l.yg)("inlineCode",{parentName:"td"},"create")," or ",(0,l.yg)("inlineCode",{parentName:"td"},"update")," operations.")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"[callback]"),(0,l.yg)("td",{parentName:"tr",align:null},(0,l.yg)("code",null,"function")),(0,l.yg)("td",{parentName:"tr",align:null},"Optional callback to handle the response")))),(0,l.yg)("p",null,(0,l.yg)("strong",{parentName:"p"},"Example:")," Example ","`","expression.js","`"," of upsert"),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre",className:"language-js"},"upsert('trackedEntityInstances', {\n ou: 'TSyzvBiovKh',\n filter: ['w75KJ2mc4zz:Eq:Qassim'],\n}, {\n orgUnit: 'TSyzvBiovKh',\n trackedEntityType: 'nEenWmSyUEp',\n attributes: [\n   {\n     attribute: 'w75KJ2mc4zz',\n     value: 'Qassim',\n   },\n ],\n});\n")),(0,l.yg)("hr",null))}u.isMDXComponent=!0}}]);