"use strict";(self.webpackChunk_openfn_docs=self.webpackChunk_openfn_docs||[]).push([[85732],{57321:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>p,contentTitle:()=>o,default:()=>u,frontMatter:()=>r,metadata:()=>g,toc:()=>y});var n=a(58168),l=(a(96540),a(15680));const r={title:"kobotoolbox@3.0.0",id:"kobotoolbox-docs",keywords:["adaptor","kobotoolbox","getDeploymentInfo","getForms","getSubmissions"]},o=void 0,g={unversionedId:"packages/kobotoolbox-docs",id:"packages/kobotoolbox-docs",title:"kobotoolbox@3.0.0",description:"getDeploymentInfo(formId)",source:"@site/adaptors/packages/kobotoolbox-docs.md",sourceDirName:"packages",slug:"/packages/kobotoolbox-docs",permalink:"/adaptors/packages/kobotoolbox-docs",draft:!1,tags:[],version:"current",frontMatter:{title:"kobotoolbox@3.0.0",id:"kobotoolbox-docs",keywords:["adaptor","kobotoolbox","getDeploymentInfo","getForms","getSubmissions"]},sidebar:"adaptors",previous:{title:"Kobo Toolbox",permalink:"/adaptors/kobotoolbox"},next:{title:"Config for kobotoolbox",permalink:"/adaptors/packages/kobotoolbox-configuration-schema"}},p={},y=[{value:"Functions",id:"functions",level:2},{value:"getDeploymentInfo",id:"getdeploymentinfo",level:3},{value:"getForms",id:"getforms",level:3},{value:"getSubmissions",id:"getsubmissions",level:3},{value:"http",id:"http",level:2},{value:"http.get",id:"http_get",level:3},{value:"http.post",id:"http_post",level:3},{value:"http.put",id:"http_put",level:3},{value:"Interfaces",id:"interfaces",level:2},{value:"KoboToolboxHttpState",id:"kobotoolboxhttpstate",level:3},{value:"RequestOptions",id:"requestoptions",level:3},{value:"RequestOptions",id:"requestoptions-1",level:3}],s={toc:y},i="wrapper";function u(e){let{components:t,...a}=e;return(0,l.yg)(i,(0,n.A)({},s,a,{components:t,mdxType:"MDXLayout"}),(0,l.yg)("dl",null,(0,l.yg)("dt",null,(0,l.yg)("a",{href:"#getdeploymentinfo"},"getDeploymentInfo(formId)")),(0,l.yg)("dt",null,(0,l.yg)("a",{href:"#getforms"},"getForms()")),(0,l.yg)("dt",null,(0,l.yg)("a",{href:"#getsubmissions"},"getSubmissions(formId, [options])"))),(0,l.yg)("p",null,"This adaptor exports the following namespaced functions:"),(0,l.yg)("dl",null,(0,l.yg)("dt",null,(0,l.yg)("a",{href:"#http_get"},"http.get(path, [options])")),(0,l.yg)("dt",null,(0,l.yg)("a",{href:"#http_post"},"http.post(path, data, [options])")),(0,l.yg)("dt",null,(0,l.yg)("a",{href:"#http_put"},"http.put(path, data, [options])"))),(0,l.yg)("p",null,"This adaptor exports the following from common:"),(0,l.yg)("dl",null,(0,l.yg)("dt",null,(0,l.yg)("a",{href:"/adaptors/packages/common-docs#alterstate"},"alterState()")),(0,l.yg)("dt",null,(0,l.yg)("a",{href:"/adaptors/packages/common-docs#cursor"},"cursor()")),(0,l.yg)("dt",null,(0,l.yg)("a",{href:"/adaptors/packages/common-docs#datapath"},"dataPath()")),(0,l.yg)("dt",null,(0,l.yg)("a",{href:"/adaptors/packages/common-docs#datavalue"},"dataValue()")),(0,l.yg)("dt",null,(0,l.yg)("a",{href:"/adaptors/packages/common-docs#each"},"each()")),(0,l.yg)("dt",null,(0,l.yg)("a",{href:"/adaptors/packages/common-docs#field"},"field()")),(0,l.yg)("dt",null,(0,l.yg)("a",{href:"/adaptors/packages/common-docs#fields"},"fields()")),(0,l.yg)("dt",null,(0,l.yg)("a",{href:"/adaptors/packages/common-docs#fn"},"fn()")),(0,l.yg)("dt",null,(0,l.yg)("a",{href:"/adaptors/packages/common-docs#fnif"},"fnIf()")),(0,l.yg)("dt",null,(0,l.yg)("a",{href:"/adaptors/packages/common-docs#group"},"group()")),(0,l.yg)("dt",null,(0,l.yg)("a",{href:"/adaptors/packages/common-docs#http"},"http")),(0,l.yg)("dt",null,(0,l.yg)("a",{href:"/adaptors/packages/common-docs#lastreferencevalue"},"lastReferenceValue()")),(0,l.yg)("dt",null,(0,l.yg)("a",{href:"/adaptors/packages/common-docs#merge"},"merge()")),(0,l.yg)("dt",null,(0,l.yg)("a",{href:"/adaptors/packages/common-docs#sourcevalue"},"sourceValue()"))),(0,l.yg)("h2",{id:"functions"},"Functions"),(0,l.yg)("h3",{id:"getdeploymentinfo"},"getDeploymentInfo"),(0,l.yg)("p",null,(0,l.yg)("code",null,"getDeploymentInfo(formId) \u21d2 Operation")),(0,l.yg)("p",null,"Get deployment information for a specific form. Calls ",(0,l.yg)("inlineCode",{parentName:"p"},"/api/v2/assets/<id>/deployment/"),"."),(0,l.yg)("table",null,(0,l.yg)("thead",{parentName:"table"},(0,l.yg)("tr",{parentName:"thead"},(0,l.yg)("th",{parentName:"tr",align:null},"Param"),(0,l.yg)("th",{parentName:"tr",align:null},"Type"),(0,l.yg)("th",{parentName:"tr",align:null},"Description"))),(0,l.yg)("tbody",{parentName:"table"},(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"formId"),(0,l.yg)("td",{parentName:"tr",align:null},(0,l.yg)("code",null,"string")),(0,l.yg)("td",{parentName:"tr",align:null},"Form Id to get the deployment information")))),(0,l.yg)("p",null,"This operation writes the following keys to state:"),(0,l.yg)("table",null,(0,l.yg)("thead",{parentName:"table"},(0,l.yg)("tr",{parentName:"thead"},(0,l.yg)("th",{parentName:"tr",align:null},"State Key"),(0,l.yg)("th",{parentName:"tr",align:null},"Description"))),(0,l.yg)("tbody",{parentName:"table"},(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"data"),(0,l.yg)("td",{parentName:"tr",align:null},"an object containing deployment information")))),(0,l.yg)("p",null,(0,l.yg)("strong",{parentName:"p"},"Example")),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre",className:"language-js"},"getDeploymentInfo('aXecHjmbATuF6iGFmvBLBX');\n")),(0,l.yg)("hr",null),(0,l.yg)("h3",{id:"getforms"},"getForms"),(0,l.yg)("p",null,(0,l.yg)("code",null,"getForms() \u21d2 Operation")),(0,l.yg)("p",null,"Make a request to fetch all survey forms accessible to the authorized user. Calls ",(0,l.yg)("inlineCode",{parentName:"p"},"/api/v2/assets/?asset_type=survey"),"."),(0,l.yg)("p",null,"This operation writes the following keys to state:"),(0,l.yg)("table",null,(0,l.yg)("thead",{parentName:"table"},(0,l.yg)("tr",{parentName:"thead"},(0,l.yg)("th",{parentName:"tr",align:null},"State Key"),(0,l.yg)("th",{parentName:"tr",align:null},"Description"))),(0,l.yg)("tbody",{parentName:"table"},(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"data"),(0,l.yg)("td",{parentName:"tr",align:null},"an array of form objects")))),(0,l.yg)("p",null,(0,l.yg)("strong",{parentName:"p"},"Example")),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre",className:"language-js"},"getForms();\n")),(0,l.yg)("hr",null),(0,l.yg)("h3",{id:"getsubmissions"},"getSubmissions"),(0,l.yg)("p",null,(0,l.yg)("code",null,"getSubmissions(formId, [options]) \u21d2 Operation")),(0,l.yg)("p",null,"Get submissions for a specific form. Calls ",(0,l.yg)("inlineCode",{parentName:"p"},"/api/v2/assets/<formId>/data/"),"."),(0,l.yg)("table",null,(0,l.yg)("thead",{parentName:"table"},(0,l.yg)("tr",{parentName:"thead"},(0,l.yg)("th",{parentName:"tr",align:null},"Param"),(0,l.yg)("th",{parentName:"tr",align:null},"Type"),(0,l.yg)("th",{parentName:"tr",align:null},"Default"),(0,l.yg)("th",{parentName:"tr",align:null},"Description"))),(0,l.yg)("tbody",{parentName:"table"},(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"formId"),(0,l.yg)("td",{parentName:"tr",align:null},(0,l.yg)("code",null,"string")),(0,l.yg)("td",{parentName:"tr",align:null}),(0,l.yg)("td",{parentName:"tr",align:null},"Form Id to get the specific submissions")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"[options]"),(0,l.yg)("td",{parentName:"tr",align:null},(0,l.yg)("code",null,"object")),(0,l.yg)("td",{parentName:"tr",align:null},(0,l.yg)("code",null,"{}")),(0,l.yg)("td",{parentName:"tr",align:null},"Optional query params for the request")))),(0,l.yg)("p",null,"This operation writes the following keys to state:"),(0,l.yg)("table",null,(0,l.yg)("thead",{parentName:"table"},(0,l.yg)("tr",{parentName:"thead"},(0,l.yg)("th",{parentName:"tr",align:null},"State Key"),(0,l.yg)("th",{parentName:"tr",align:null},"Description"))),(0,l.yg)("tbody",{parentName:"table"},(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"data"),(0,l.yg)("td",{parentName:"tr",align:null},"an array of submission objects")))),(0,l.yg)("p",null,(0,l.yg)("strong",{parentName:"p"},"Example:")," Get all submissions for a specific form"),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre",className:"language-js"},"getSubmissions('aXecHjmbATuF6iGFmvBLBX');\n")),(0,l.yg)("p",null,(0,l.yg)("strong",{parentName:"p"},"Example:")," Get form submissions with a query"),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre",className:"language-js"},"getSubmissions('aXecHjmbATuF6iGFmvBLBX', { query: { _submission_time:{ $gte: \"2022-06-12T21:54:20\" } } });\n")),(0,l.yg)("hr",null),(0,l.yg)("h2",{id:"http"},"http"),(0,l.yg)("p",null,"These functions belong to the http namespace."),(0,l.yg)("h3",{id:"http_get"},"http.get"),(0,l.yg)("p",null,(0,l.yg)("code",null,"get(path, [options]) \u21d2 operation")),(0,l.yg)("p",null,"Make a GET request to any KoboToolbox endpoint."),(0,l.yg)("table",null,(0,l.yg)("thead",{parentName:"table"},(0,l.yg)("tr",{parentName:"thead"},(0,l.yg)("th",{parentName:"tr",align:null},"Param"),(0,l.yg)("th",{parentName:"tr",align:null},"Type"),(0,l.yg)("th",{parentName:"tr",align:null},"Default"),(0,l.yg)("th",{parentName:"tr",align:null},"Description"))),(0,l.yg)("tbody",{parentName:"table"},(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"path"),(0,l.yg)("td",{parentName:"tr",align:null},(0,l.yg)("code",null,"string")),(0,l.yg)("td",{parentName:"tr",align:null}),(0,l.yg)("td",{parentName:"tr",align:null},"path to resource")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"[options]"),(0,l.yg)("td",{parentName:"tr",align:null},(0,l.yg)("a",{parentName:"td",href:"#requestoptions"},(0,l.yg)("code",null,"RequestOptions"))),(0,l.yg)("td",{parentName:"tr",align:null},(0,l.yg)("code",null,"{}")),(0,l.yg)("td",{parentName:"tr",align:null},"An object containing query params and headers for the request")))),(0,l.yg)("p",null,"This operation writes the following keys to state:"),(0,l.yg)("table",null,(0,l.yg)("thead",{parentName:"table"},(0,l.yg)("tr",{parentName:"thead"},(0,l.yg)("th",{parentName:"tr",align:null},"State Key"),(0,l.yg)("th",{parentName:"tr",align:null},"Description"))),(0,l.yg)("tbody",{parentName:"table"},(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"data"),(0,l.yg)("td",{parentName:"tr",align:null},"The response body (as JSON)")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"response"),(0,l.yg)("td",{parentName:"tr",align:null},"The HTTP response from the KoboToolbox server (excluding the body). Responses will be returned in JSON format")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"references"),(0,l.yg)("td",{parentName:"tr",align:null},"An array of all previous data objects used in the Job")))),(0,l.yg)("p",null,(0,l.yg)("strong",{parentName:"p"},"Example:")," GET assets resource"),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre",className:"language-js"},'http.get(\n "/assets/",\n )\n')),(0,l.yg)("hr",null),(0,l.yg)("h3",{id:"http_post"},"http.post"),(0,l.yg)("p",null,(0,l.yg)("code",null,"post(path, data, [options]) \u21d2 operation")),(0,l.yg)("p",null,"Make a POST request to a KoboToolbox endpoint"),(0,l.yg)("table",null,(0,l.yg)("thead",{parentName:"table"},(0,l.yg)("tr",{parentName:"thead"},(0,l.yg)("th",{parentName:"tr",align:null},"Param"),(0,l.yg)("th",{parentName:"tr",align:null},"Type"),(0,l.yg)("th",{parentName:"tr",align:null},"Default"),(0,l.yg)("th",{parentName:"tr",align:null},"Description"))),(0,l.yg)("tbody",{parentName:"table"},(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"path"),(0,l.yg)("td",{parentName:"tr",align:null},(0,l.yg)("code",null,"string")),(0,l.yg)("td",{parentName:"tr",align:null}),(0,l.yg)("td",{parentName:"tr",align:null},"path to resource")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"data"),(0,l.yg)("td",{parentName:"tr",align:null},(0,l.yg)("code",null,"any")),(0,l.yg)("td",{parentName:"tr",align:null}),(0,l.yg)("td",{parentName:"tr",align:null},"the body data in JSON format")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"[options]"),(0,l.yg)("td",{parentName:"tr",align:null},(0,l.yg)("a",{parentName:"td",href:"#requestoptions"},(0,l.yg)("code",null,"RequestOptions"))),(0,l.yg)("td",{parentName:"tr",align:null},(0,l.yg)("code",null,"{}")),(0,l.yg)("td",{parentName:"tr",align:null},"An object containing query params and headers for the request")))),(0,l.yg)("p",null,"This operation writes the following keys to state:"),(0,l.yg)("table",null,(0,l.yg)("thead",{parentName:"table"},(0,l.yg)("tr",{parentName:"thead"},(0,l.yg)("th",{parentName:"tr",align:null},"State Key"),(0,l.yg)("th",{parentName:"tr",align:null},"Description"))),(0,l.yg)("tbody",{parentName:"table"},(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"data"),(0,l.yg)("td",{parentName:"tr",align:null},"The response body (as JSON)")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"response"),(0,l.yg)("td",{parentName:"tr",align:null},"The HTTP response from the KoboToolbox server (excluding the body). Responses will be returned in JSON format")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"references"),(0,l.yg)("td",{parentName:"tr",align:null},"An array of all previous data objects used in the Job")))),(0,l.yg)("p",null,(0,l.yg)("strong",{parentName:"p"},"Example:")," Create an asset resource"),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre",className:"language-js"},"http.post(\n '/assets/',\n {\n  name: 'Feedback Survey Test',\n  asset_type: 'survey',\n },\n );\n")),(0,l.yg)("hr",null),(0,l.yg)("h3",{id:"http_put"},"http.put"),(0,l.yg)("p",null,(0,l.yg)("code",null,"put(path, data, [options]) \u21d2 operation")),(0,l.yg)("p",null,"Make a PUT request to a KoboToolbox endpoint"),(0,l.yg)("table",null,(0,l.yg)("thead",{parentName:"table"},(0,l.yg)("tr",{parentName:"thead"},(0,l.yg)("th",{parentName:"tr",align:null},"Param"),(0,l.yg)("th",{parentName:"tr",align:null},"Type"),(0,l.yg)("th",{parentName:"tr",align:null},"Default"),(0,l.yg)("th",{parentName:"tr",align:null},"Description"))),(0,l.yg)("tbody",{parentName:"table"},(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"path"),(0,l.yg)("td",{parentName:"tr",align:null},(0,l.yg)("code",null,"string")),(0,l.yg)("td",{parentName:"tr",align:null}),(0,l.yg)("td",{parentName:"tr",align:null},"path to resource")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"data"),(0,l.yg)("td",{parentName:"tr",align:null},(0,l.yg)("code",null,"any")),(0,l.yg)("td",{parentName:"tr",align:null}),(0,l.yg)("td",{parentName:"tr",align:null},"the body data in JSON format")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"[options]"),(0,l.yg)("td",{parentName:"tr",align:null},(0,l.yg)("a",{parentName:"td",href:"#requestoptions"},(0,l.yg)("code",null,"RequestOptions"))),(0,l.yg)("td",{parentName:"tr",align:null},(0,l.yg)("code",null,"{}")),(0,l.yg)("td",{parentName:"tr",align:null},"An object containing query params and headers for the request")))),(0,l.yg)("p",null,"This operation writes the following keys to state:"),(0,l.yg)("table",null,(0,l.yg)("thead",{parentName:"table"},(0,l.yg)("tr",{parentName:"thead"},(0,l.yg)("th",{parentName:"tr",align:null},"State Key"),(0,l.yg)("th",{parentName:"tr",align:null},"Description"))),(0,l.yg)("tbody",{parentName:"table"},(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"data"),(0,l.yg)("td",{parentName:"tr",align:null},"The response body (as JSON)")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"response"),(0,l.yg)("td",{parentName:"tr",align:null},"The HTTP response from the KoboToolbox server (excluding the body). Responses will be returned in JSON format")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"references"),(0,l.yg)("td",{parentName:"tr",align:null},"An array of all previous data objects used in the Job")))),(0,l.yg)("p",null,(0,l.yg)("strong",{parentName:"p"},"Example:")," Update an asset resource"),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre",className:"language-js"},"http.put(\n 'assets/a4jAWzoa8SZWzZGhx84sB5/deployment/',\n {\n  name: 'Feedback Survey Test',\n  asset_type: 'survey',\n },\n );\n")),(0,l.yg)("hr",null),(0,l.yg)("h2",{id:"interfaces"},"Interfaces"),(0,l.yg)("h3",{id:"kobotoolboxhttpstate"},"KoboToolboxHttpState"),(0,l.yg)("p",null,"State object"),(0,l.yg)("p",null,(0,l.yg)("strong",{parentName:"p"},"Properties")),(0,l.yg)("table",null,(0,l.yg)("thead",{parentName:"table"},(0,l.yg)("tr",{parentName:"thead"},(0,l.yg)("th",{parentName:"tr",align:null},"Name"),(0,l.yg)("th",{parentName:"tr",align:null},"Description"))),(0,l.yg)("tbody",{parentName:"table"},(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"data"),(0,l.yg)("td",{parentName:"tr",align:null},"The response body (as JSON)")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"response"),(0,l.yg)("td",{parentName:"tr",align:null},"The HTTP response from the KoboToolbox server (excluding the body). Responses will be returned in JSON format")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"references"),(0,l.yg)("td",{parentName:"tr",align:null},"An array of all previous data objects used in the Job")))),(0,l.yg)("hr",null),(0,l.yg)("h3",{id:"requestoptions"},"RequestOptions"),(0,l.yg)("p",null,"Options object"),(0,l.yg)("p",null,(0,l.yg)("strong",{parentName:"p"},"Properties")),(0,l.yg)("table",null,(0,l.yg)("thead",{parentName:"table"},(0,l.yg)("tr",{parentName:"thead"},(0,l.yg)("th",{parentName:"tr",align:null},"Name"),(0,l.yg)("th",{parentName:"tr",align:null},"Type"),(0,l.yg)("th",{parentName:"tr",align:null},"Default"),(0,l.yg)("th",{parentName:"tr",align:null},"Description"))),(0,l.yg)("tbody",{parentName:"table"},(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"query"),(0,l.yg)("td",{parentName:"tr",align:null},(0,l.yg)("code",null,"object")),(0,l.yg)("td",{parentName:"tr",align:null}),(0,l.yg)("td",{parentName:"tr",align:null},"An object of query parameters to be encoded into the URL")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"headers"),(0,l.yg)("td",{parentName:"tr",align:null},(0,l.yg)("code",null,"object")),(0,l.yg)("td",{parentName:"tr",align:null}),(0,l.yg)("td",{parentName:"tr",align:null},"An object of all request headers")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"[parseAs]"),(0,l.yg)("td",{parentName:"tr",align:null},(0,l.yg)("code",null,"string")),(0,l.yg)("td",{parentName:"tr",align:null},(0,l.yg)("code",null,'"',"'","json","'",'"')),(0,l.yg)("td",{parentName:"tr",align:null},"The response format to parse (e.g., 'json', 'text', or 'stream')")))),(0,l.yg)("hr",null),(0,l.yg)("h3",{id:"requestoptions-1"},"RequestOptions"),(0,l.yg)("p",null,"Options object"),(0,l.yg)("p",null,(0,l.yg)("strong",{parentName:"p"},"Properties")),(0,l.yg)("table",null,(0,l.yg)("thead",{parentName:"table"},(0,l.yg)("tr",{parentName:"thead"},(0,l.yg)("th",{parentName:"tr",align:null},"Name"),(0,l.yg)("th",{parentName:"tr",align:null},"Type"),(0,l.yg)("th",{parentName:"tr",align:null},"Default"),(0,l.yg)("th",{parentName:"tr",align:null},"Description"))),(0,l.yg)("tbody",{parentName:"table"},(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"query"),(0,l.yg)("td",{parentName:"tr",align:null},(0,l.yg)("code",null,"object")),(0,l.yg)("td",{parentName:"tr",align:null}),(0,l.yg)("td",{parentName:"tr",align:null},"An object of query parameters to be encoded into the URL")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"headers"),(0,l.yg)("td",{parentName:"tr",align:null},(0,l.yg)("code",null,"object")),(0,l.yg)("td",{parentName:"tr",align:null}),(0,l.yg)("td",{parentName:"tr",align:null},"An object of all request headers")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"[parseAs]"),(0,l.yg)("td",{parentName:"tr",align:null},(0,l.yg)("code",null,"string")),(0,l.yg)("td",{parentName:"tr",align:null},(0,l.yg)("code",null,'"',"'","json","'",'"')),(0,l.yg)("td",{parentName:"tr",align:null},"The response format to parse (e.g., 'json', 'text', or 'stream')")))),(0,l.yg)("hr",null))}u.isMDXComponent=!0},15680:(e,t,a)=>{a.d(t,{xA:()=>s,yg:()=>m});var n=a(96540);function l(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){l(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function g(e,t){if(null==e)return{};var a,n,l=function(e,t){if(null==e)return{};var a,n,l={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(l[a]=e[a]);return l}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(l[a]=e[a])}return l}var p=n.createContext({}),y=function(e){var t=n.useContext(p),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},s=function(e){var t=y(e.components);return n.createElement(p.Provider,{value:t},e.children)},i="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var a=e.components,l=e.mdxType,r=e.originalType,p=e.parentName,s=g(e,["components","mdxType","originalType","parentName"]),i=y(a),d=l,m=i["".concat(p,".").concat(d)]||i[d]||u[d]||r;return a?n.createElement(m,o(o({ref:t},s),{},{components:a})):n.createElement(m,o({ref:t},s))}));function m(e,t){var a=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var r=a.length,o=new Array(r);o[0]=d;var g={};for(var p in t)hasOwnProperty.call(t,p)&&(g[p]=t[p]);g.originalType=e,g[i]="string"==typeof e?e:l,o[1]=g;for(var y=2;y<r;y++)o[y]=a[y];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}d.displayName="MDXCreateElement"}}]);