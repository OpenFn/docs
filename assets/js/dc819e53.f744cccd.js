"use strict";(self.webpackChunk_openfn_docs=self.webpackChunk_openfn_docs||[]).push([[96431],{64034:(e,a,n)=>{n.r(a),n.d(a,{assets:()=>o,contentTitle:()=>g,default:()=>y,frontMatter:()=>r,metadata:()=>p,toc:()=>i});var l=n(58168),t=(n(96540),n(15680));const r={title:"openspp@2.0.8",id:"openspp-docs",keywords:["adaptor","openspp","addToGroup","createGroup","createIndividual","enroll","getArea","getEnrolledPrograms","getGroup","getGroupMembers","getIndividual","getProgram","getPrograms","getServicePoint","removeFromGroup","searchArea","searchGroup","searchIndividual","searchServicePoint","unenroll","updateGroup","updateIndividual"]},g=void 0,p={unversionedId:"packages/openspp-docs",id:"packages/openspp-docs",title:"openspp@2.0.8",description:"addToGroup(groupid, individualid, role)",source:"@site/adaptors/packages/openspp-docs.md",sourceDirName:"packages",slug:"/packages/openspp-docs",permalink:"/adaptors/packages/openspp-docs",draft:!1,tags:[],version:"current",frontMatter:{title:"openspp@2.0.8",id:"openspp-docs",keywords:["adaptor","openspp","addToGroup","createGroup","createIndividual","enroll","getArea","getEnrolledPrograms","getGroup","getGroupMembers","getIndividual","getProgram","getPrograms","getServicePoint","removeFromGroup","searchArea","searchGroup","searchIndividual","searchServicePoint","unenroll","updateGroup","updateIndividual"]},sidebar:"adaptors",previous:{title:"openmrs developer readme",permalink:"/adaptors/packages/openmrs-readme"},next:{title:"Config for openspp",permalink:"/adaptors/packages/openspp-configuration-schema"}},o={},i=[{value:"Functions",id:"functions",level:2},{value:"addToGroup",id:"addtogroup",level:3},{value:"createGroup",id:"creategroup",level:3},{value:"createIndividual",id:"createindividual",level:3},{value:"enroll",id:"enroll",level:3},{value:"getArea",id:"getarea",level:3},{value:"getEnrolledPrograms",id:"getenrolledprograms",level:3},{value:"getGroup",id:"getgroup",level:3},{value:"getGroupMembers",id:"getgroupmembers",level:3},{value:"getIndividual",id:"getindividual",level:3},{value:"getProgram",id:"getprogram",level:3},{value:"getPrograms",id:"getprograms",level:3},{value:"getServicePoint",id:"getservicepoint",level:3},{value:"removeFromGroup",id:"removefromgroup",level:3},{value:"searchArea",id:"searcharea",level:3},{value:"searchGroup",id:"searchgroup",level:3},{value:"searchIndividual",id:"searchindividual",level:3},{value:"searchServicePoint",id:"searchservicepoint",level:3},{value:"unenroll",id:"unenroll",level:3},{value:"updateGroup",id:"updategroup",level:3},{value:"updateIndividual",id:"updateindividual",level:3}],d={toc:i},u="wrapper";function y(e){let{components:a,...n}=e;return(0,t.yg)(u,(0,l.A)({},d,n,{components:a,mdxType:"MDXLayout"}),(0,t.yg)("dl",null,(0,t.yg)("dt",null,(0,t.yg)("a",{href:"#addtogroup"},"addToGroup(group_id, individual_id, role)")),(0,t.yg)("dt",null,(0,t.yg)("a",{href:"#creategroup"},"createGroup(data, callback)")),(0,t.yg)("dt",null,(0,t.yg)("a",{href:"#createindividual"},"createIndividual(data, callback)")),(0,t.yg)("dt",null,(0,t.yg)("a",{href:"#enroll"},"enroll(spp_id, program_id)")),(0,t.yg)("dt",null,(0,t.yg)("a",{href:"#getarea"},"getArea(spp_id, callback)")),(0,t.yg)("dt",null,(0,t.yg)("a",{href:"#getenrolledprograms"},"getEnrolledPrograms(spp_id, callback)")),(0,t.yg)("dt",null,(0,t.yg)("a",{href:"#getgroup"},"getGroup(spp_id, callback)")),(0,t.yg)("dt",null,(0,t.yg)("a",{href:"#getgroupmembers"},"getGroupMembers(spp_id, [options], callback)")),(0,t.yg)("dt",null,(0,t.yg)("a",{href:"#getindividual"},"getIndividual(spp_id, callback)")),(0,t.yg)("dt",null,(0,t.yg)("a",{href:"#getprogram"},"getProgram(program_id, callback)")),(0,t.yg)("dt",null,(0,t.yg)("a",{href:"#getprograms"},"getPrograms([options], callback)")),(0,t.yg)("dt",null,(0,t.yg)("a",{href:"#getservicepoint"},"getServicePoint(spp_id, callback)")),(0,t.yg)("dt",null,(0,t.yg)("a",{href:"#removefromgroup"},"removeFromGroup(group_id, individual_id)")),(0,t.yg)("dt",null,(0,t.yg)("a",{href:"#searcharea"},"searchArea(domain, [options], callback)")),(0,t.yg)("dt",null,(0,t.yg)("a",{href:"#searchgroup"},"searchGroup(domain, [options], callback)")),(0,t.yg)("dt",null,(0,t.yg)("a",{href:"#searchindividual"},"searchIndividual(domain, [options], callback)")),(0,t.yg)("dt",null,(0,t.yg)("a",{href:"#searchservicepoint"},"searchServicePoint(domain, [options], callback)")),(0,t.yg)("dt",null,(0,t.yg)("a",{href:"#unenroll"},"unenroll(spp_id, program_id)")),(0,t.yg)("dt",null,(0,t.yg)("a",{href:"#updategroup"},"updateGroup(group_id, data)")),(0,t.yg)("dt",null,(0,t.yg)("a",{href:"#updateindividual"},"updateIndividual(individual_id, data)"))),(0,t.yg)("p",null,"This adaptor exports the following from common:"),(0,t.yg)("dl",null,(0,t.yg)("dt",null,(0,t.yg)("a",{href:"/adaptors/packages/common-docs#datapath"},"dataPath()")),(0,t.yg)("dt",null,(0,t.yg)("a",{href:"/adaptors/packages/common-docs#datavalue"},"dataValue()")),(0,t.yg)("dt",null,(0,t.yg)("a",{href:"/adaptors/packages/common-docs#datefns"},"dateFns")),(0,t.yg)("dt",null,(0,t.yg)("a",{href:"/adaptors/packages/common-docs#each"},"each()")),(0,t.yg)("dt",null,(0,t.yg)("a",{href:"/adaptors/packages/common-docs#field"},"field()")),(0,t.yg)("dt",null,(0,t.yg)("a",{href:"/adaptors/packages/common-docs#fields"},"fields()")),(0,t.yg)("dt",null,(0,t.yg)("a",{href:"/adaptors/packages/common-docs#fn"},"fn()")),(0,t.yg)("dt",null,(0,t.yg)("a",{href:"/adaptors/packages/common-docs#fnif"},"fnIf()")),(0,t.yg)("dt",null,(0,t.yg)("a",{href:"/adaptors/packages/common-docs#http"},"http")),(0,t.yg)("dt",null,(0,t.yg)("a",{href:"/adaptors/packages/common-docs#lastreferencevalue"},"lastReferenceValue()")),(0,t.yg)("dt",null,(0,t.yg)("a",{href:"/adaptors/packages/common-docs#merge"},"merge()")),(0,t.yg)("dt",null,(0,t.yg)("a",{href:"/adaptors/packages/common-docs#sourcevalue"},"sourceValue()"))),(0,t.yg)("h2",{id:"functions"},"Functions"),(0,t.yg)("h3",{id:"addtogroup"},"addToGroup"),(0,t.yg)("p",null,(0,t.yg)("code",null,"addToGroup(group_id, individual_id, role) \u21d2 Operation")),(0,t.yg)("p",null,"add individual to group in OpenSPP"),(0,t.yg)("table",null,(0,t.yg)("thead",{parentName:"table"},(0,t.yg)("tr",{parentName:"thead"},(0,t.yg)("th",{parentName:"tr",align:null},"Param"),(0,t.yg)("th",{parentName:"tr",align:null},"Type"),(0,t.yg)("th",{parentName:"tr",align:null},"Description"))),(0,t.yg)("tbody",{parentName:"table"},(0,t.yg)("tr",{parentName:"tbody"},(0,t.yg)("td",{parentName:"tr",align:null},"group_id"),(0,t.yg)("td",{parentName:"tr",align:null},(0,t.yg)("code",null,"string")),(0,t.yg)("td",{parentName:"tr",align:null},"group registrant id")),(0,t.yg)("tr",{parentName:"tbody"},(0,t.yg)("td",{parentName:"tr",align:null},"individual_id"),(0,t.yg)("td",{parentName:"tr",align:null},(0,t.yg)("code",null,"string")),(0,t.yg)("td",{parentName:"tr",align:null},"individual registrant id")),(0,t.yg)("tr",{parentName:"tbody"},(0,t.yg)("td",{parentName:"tr",align:null},"role"),(0,t.yg)("td",{parentName:"tr",align:null},(0,t.yg)("code",null,"string")),(0,t.yg)("td",{parentName:"tr",align:null},"individual role in group")))),(0,t.yg)("p",null,(0,t.yg)("strong",{parentName:"p"},"Example:")," create a new head for group"),(0,t.yg)("pre",null,(0,t.yg)("code",{parentName:"pre",className:"language-js"},'addToGroup("GRP_B2BRHJN2", "IND_8DUQL4M4", "Head")\n')),(0,t.yg)("p",null,(0,t.yg)("strong",{parentName:"p"},"Example:")," create a new ordinary member for group"),(0,t.yg)("pre",null,(0,t.yg)("code",{parentName:"pre",className:"language-js"},'addToGroup("GRP_B2BRHJN2", "IND_8DUQL4M4")\n')),(0,t.yg)("p",null,(0,t.yg)("strong",{parentName:"p"},"Example:")," create a new member with new role for group"),(0,t.yg)("pre",null,(0,t.yg)("code",{parentName:"pre",className:"language-js"},'addToGroup("GRP_B2BRHJN2", "IND_8DUQL4M4", "new-role-name")\n')),(0,t.yg)("hr",null),(0,t.yg)("h3",{id:"creategroup"},"createGroup"),(0,t.yg)("p",null,(0,t.yg)("code",null,"createGroup(data, callback) \u21d2 Operation")),(0,t.yg)("p",null,"create new group for OpenSPP"),(0,t.yg)("table",null,(0,t.yg)("thead",{parentName:"table"},(0,t.yg)("tr",{parentName:"thead"},(0,t.yg)("th",{parentName:"tr",align:null},"Param"),(0,t.yg)("th",{parentName:"tr",align:null},"Type"),(0,t.yg)("th",{parentName:"tr",align:null},"Description"))),(0,t.yg)("tbody",{parentName:"table"},(0,t.yg)("tr",{parentName:"tbody"},(0,t.yg)("td",{parentName:"tr",align:null},"data"),(0,t.yg)("td",{parentName:"tr",align:null},(0,t.yg)("code",null,"object")),(0,t.yg)("td",{parentName:"tr",align:null},"registrant create data")),(0,t.yg)("tr",{parentName:"tbody"},(0,t.yg)("td",{parentName:"tr",align:null},"callback"),(0,t.yg)("td",{parentName:"tr",align:null},(0,t.yg)("code",null,"function")),(0,t.yg)("td",{parentName:"tr",align:null},"An optional callback function")))),(0,t.yg)("p",null,(0,t.yg)("strong",{parentName:"p"},"Example")),(0,t.yg)("pre",null,(0,t.yg)("code",{parentName:"pre",className:"language-js"},'createGroup({ name: "Group 1" })\n')),(0,t.yg)("hr",null),(0,t.yg)("h3",{id:"createindividual"},"createIndividual"),(0,t.yg)("p",null,(0,t.yg)("code",null,"createIndividual(data, callback) \u21d2 Operation")),(0,t.yg)("p",null,"create new individual for OpenSPP"),(0,t.yg)("table",null,(0,t.yg)("thead",{parentName:"table"},(0,t.yg)("tr",{parentName:"thead"},(0,t.yg)("th",{parentName:"tr",align:null},"Param"),(0,t.yg)("th",{parentName:"tr",align:null},"Type"),(0,t.yg)("th",{parentName:"tr",align:null},"Description"))),(0,t.yg)("tbody",{parentName:"table"},(0,t.yg)("tr",{parentName:"tbody"},(0,t.yg)("td",{parentName:"tr",align:null},"data"),(0,t.yg)("td",{parentName:"tr",align:null},(0,t.yg)("code",null,"object")),(0,t.yg)("td",{parentName:"tr",align:null},"registrant create data")),(0,t.yg)("tr",{parentName:"tbody"},(0,t.yg)("td",{parentName:"tr",align:null},"callback"),(0,t.yg)("td",{parentName:"tr",align:null},(0,t.yg)("code",null,"function")),(0,t.yg)("td",{parentName:"tr",align:null},"An optional callback function")))),(0,t.yg)("p",null,(0,t.yg)("strong",{parentName:"p"},"Example")),(0,t.yg)("pre",null,(0,t.yg)("code",{parentName:"pre",className:"language-js"},'createIndividual({ name: "Individual 1" })\n')),(0,t.yg)("hr",null),(0,t.yg)("h3",{id:"enroll"},"enroll"),(0,t.yg)("p",null,(0,t.yg)("code",null,"enroll(spp_id, program_id)")),(0,t.yg)("p",null,"enroll registrant to program in OpenSPP"),(0,t.yg)("table",null,(0,t.yg)("thead",{parentName:"table"},(0,t.yg)("tr",{parentName:"thead"},(0,t.yg)("th",{parentName:"tr",align:null},"Param"),(0,t.yg)("th",{parentName:"tr",align:null},"Type"),(0,t.yg)("th",{parentName:"tr",align:null},"Description"))),(0,t.yg)("tbody",{parentName:"table"},(0,t.yg)("tr",{parentName:"tbody"},(0,t.yg)("td",{parentName:"tr",align:null},"spp_id"),(0,t.yg)("td",{parentName:"tr",align:null},(0,t.yg)("code",null,"string")),(0,t.yg)("td",{parentName:"tr",align:null},"spp_id of group / individual wanted to enroll")),(0,t.yg)("tr",{parentName:"tbody"},(0,t.yg)("td",{parentName:"tr",align:null},"program_id"),(0,t.yg)("td",{parentName:"tr",align:null},(0,t.yg)("code",null,"string")),(0,t.yg)("td",{parentName:"tr",align:null},"program_id of program")))),(0,t.yg)("p",null,(0,t.yg)("strong",{parentName:"p"},"Example")),(0,t.yg)("pre",null,(0,t.yg)("code",{parentName:"pre",className:"language-js"},'enroll("IND_Q4VGGZPF", "PROG_2023_00000001")\n')),(0,t.yg)("hr",null),(0,t.yg)("h3",{id:"getarea"},"getArea"),(0,t.yg)("p",null,(0,t.yg)("code",null,"getArea(spp_id, callback) \u21d2 Operation")),(0,t.yg)("p",null,"get area by id in OpenSPP"),(0,t.yg)("table",null,(0,t.yg)("thead",{parentName:"table"},(0,t.yg)("tr",{parentName:"thead"},(0,t.yg)("th",{parentName:"tr",align:null},"Param"),(0,t.yg)("th",{parentName:"tr",align:null},"Type"),(0,t.yg)("th",{parentName:"tr",align:null},"Description"))),(0,t.yg)("tbody",{parentName:"table"},(0,t.yg)("tr",{parentName:"tbody"},(0,t.yg)("td",{parentName:"tr",align:null},"spp_id"),(0,t.yg)("td",{parentName:"tr",align:null},(0,t.yg)("code",null,"string")),(0,t.yg)("td",{parentName:"tr",align:null},"spp_id of area")),(0,t.yg)("tr",{parentName:"tbody"},(0,t.yg)("td",{parentName:"tr",align:null},"callback"),(0,t.yg)("td",{parentName:"tr",align:null},(0,t.yg)("code",null,"function")),(0,t.yg)("td",{parentName:"tr",align:null},"An optional callback function")))),(0,t.yg)("p",null,(0,t.yg)("strong",{parentName:"p"},"Example")),(0,t.yg)("pre",null,(0,t.yg)("code",{parentName:"pre",className:"language-js"},'getArea("LOC_7M92NLDH")\n')),(0,t.yg)("hr",null),(0,t.yg)("h3",{id:"getenrolledprograms"},"getEnrolledPrograms"),(0,t.yg)("p",null,(0,t.yg)("code",null,"getEnrolledPrograms(spp_id, callback) \u21d2 Operation")),(0,t.yg)("p",null,"get programs list for specific registrant from OpenSPP"),(0,t.yg)("table",null,(0,t.yg)("thead",{parentName:"table"},(0,t.yg)("tr",{parentName:"thead"},(0,t.yg)("th",{parentName:"tr",align:null},"Param"),(0,t.yg)("th",{parentName:"tr",align:null},"Type"),(0,t.yg)("th",{parentName:"tr",align:null},"Description"))),(0,t.yg)("tbody",{parentName:"table"},(0,t.yg)("tr",{parentName:"tbody"},(0,t.yg)("td",{parentName:"tr",align:null},"spp_id"),(0,t.yg)("td",{parentName:"tr",align:null},(0,t.yg)("code",null,"string")),(0,t.yg)("td",{parentName:"tr",align:null},"spp_id of group / individual wanted to search")),(0,t.yg)("tr",{parentName:"tbody"},(0,t.yg)("td",{parentName:"tr",align:null},"callback"),(0,t.yg)("td",{parentName:"tr",align:null},(0,t.yg)("code",null,"function")),(0,t.yg)("td",{parentName:"tr",align:null},"An optional callback function")))),(0,t.yg)("p",null,(0,t.yg)("strong",{parentName:"p"},"Example")),(0,t.yg)("pre",null,(0,t.yg)("code",{parentName:"pre",className:"language-js"},'getEnrolledPrograms("IND_Q4VGGZPF")\n')),(0,t.yg)("hr",null),(0,t.yg)("h3",{id:"getgroup"},"getGroup"),(0,t.yg)("p",null,(0,t.yg)("code",null,"getGroup(spp_id, callback) \u21d2 Operation")),(0,t.yg)("p",null,"get group information from OpenSPP"),(0,t.yg)("table",null,(0,t.yg)("thead",{parentName:"table"},(0,t.yg)("tr",{parentName:"thead"},(0,t.yg)("th",{parentName:"tr",align:null},"Param"),(0,t.yg)("th",{parentName:"tr",align:null},"Type"),(0,t.yg)("th",{parentName:"tr",align:null},"Description"))),(0,t.yg)("tbody",{parentName:"table"},(0,t.yg)("tr",{parentName:"tbody"},(0,t.yg)("td",{parentName:"tr",align:null},"spp_id"),(0,t.yg)("td",{parentName:"tr",align:null},(0,t.yg)("code",null,"string")),(0,t.yg)("td",{parentName:"tr",align:null},"The spp_id of the group")),(0,t.yg)("tr",{parentName:"tbody"},(0,t.yg)("td",{parentName:"tr",align:null},"callback"),(0,t.yg)("td",{parentName:"tr",align:null},(0,t.yg)("code",null,"function")),(0,t.yg)("td",{parentName:"tr",align:null},"An optional callback function")))),(0,t.yg)("p",null,(0,t.yg)("strong",{parentName:"p"},"Example")),(0,t.yg)("pre",null,(0,t.yg)("code",{parentName:"pre",className:"language-js"},'getGroup("GRP_Q4VGGZPF")\n')),(0,t.yg)("hr",null),(0,t.yg)("h3",{id:"getgroupmembers"},"getGroupMembers"),(0,t.yg)("p",null,(0,t.yg)("code",null,"getGroupMembers(spp_id, [options], callback) \u21d2 Operation")),(0,t.yg)("p",null,"get group members information from OpenSPP"),(0,t.yg)("table",null,(0,t.yg)("thead",{parentName:"table"},(0,t.yg)("tr",{parentName:"thead"},(0,t.yg)("th",{parentName:"tr",align:null},"Param"),(0,t.yg)("th",{parentName:"tr",align:null},"Type"),(0,t.yg)("th",{parentName:"tr",align:null},"Default"),(0,t.yg)("th",{parentName:"tr",align:null},"Description"))),(0,t.yg)("tbody",{parentName:"table"},(0,t.yg)("tr",{parentName:"tbody"},(0,t.yg)("td",{parentName:"tr",align:null},"spp_id"),(0,t.yg)("td",{parentName:"tr",align:null},(0,t.yg)("code",null,"string")),(0,t.yg)("td",{parentName:"tr",align:null}),(0,t.yg)("td",{parentName:"tr",align:null},"The name of the group")),(0,t.yg)("tr",{parentName:"tbody"},(0,t.yg)("td",{parentName:"tr",align:null},"[options]"),(0,t.yg)("td",{parentName:"tr",align:null},(0,t.yg)("code",null,"object")),(0,t.yg)("td",{parentName:"tr",align:null},(0,t.yg)("code",null,"{}")),(0,t.yg)("td",{parentName:"tr",align:null},"Searching options, eg: limit for limiting number of records returning, order for searching order, offset for skipping records")),(0,t.yg)("tr",{parentName:"tbody"},(0,t.yg)("td",{parentName:"tr",align:null},"callback"),(0,t.yg)("td",{parentName:"tr",align:null},(0,t.yg)("code",null,"function")),(0,t.yg)("td",{parentName:"tr",align:null}),(0,t.yg)("td",{parentName:"tr",align:null},"An optional callback function")))),(0,t.yg)("p",null,(0,t.yg)("strong",{parentName:"p"},"Example")),(0,t.yg)("pre",null,(0,t.yg)("code",{parentName:"pre",className:"language-js"},'getGroupMembers("GRP_Q4VGGZPF")\n')),(0,t.yg)("hr",null),(0,t.yg)("h3",{id:"getindividual"},"getIndividual"),(0,t.yg)("p",null,(0,t.yg)("code",null,"getIndividual(spp_id, callback) \u21d2 Operation")),(0,t.yg)("p",null,"get individual information from OpenSPP"),(0,t.yg)("table",null,(0,t.yg)("thead",{parentName:"table"},(0,t.yg)("tr",{parentName:"thead"},(0,t.yg)("th",{parentName:"tr",align:null},"Param"),(0,t.yg)("th",{parentName:"tr",align:null},"Type"),(0,t.yg)("th",{parentName:"tr",align:null},"Description"))),(0,t.yg)("tbody",{parentName:"table"},(0,t.yg)("tr",{parentName:"tbody"},(0,t.yg)("td",{parentName:"tr",align:null},"spp_id"),(0,t.yg)("td",{parentName:"tr",align:null},(0,t.yg)("code",null,"string")),(0,t.yg)("td",{parentName:"tr",align:null},"The spp_id of the individual")),(0,t.yg)("tr",{parentName:"tbody"},(0,t.yg)("td",{parentName:"tr",align:null},"callback"),(0,t.yg)("td",{parentName:"tr",align:null},(0,t.yg)("code",null,"function")),(0,t.yg)("td",{parentName:"tr",align:null},"An optional callback function")))),(0,t.yg)("p",null,(0,t.yg)("strong",{parentName:"p"},"Example")),(0,t.yg)("pre",null,(0,t.yg)("code",{parentName:"pre",className:"language-js"},'getIndividual("IND_Q4VGGZPF")\n')),(0,t.yg)("hr",null),(0,t.yg)("h3",{id:"getprogram"},"getProgram"),(0,t.yg)("p",null,(0,t.yg)("code",null,"getProgram(program_id, callback) \u21d2 Operation")),(0,t.yg)("p",null,"get program information from OpenSPP"),(0,t.yg)("table",null,(0,t.yg)("thead",{parentName:"table"},(0,t.yg)("tr",{parentName:"thead"},(0,t.yg)("th",{parentName:"tr",align:null},"Param"),(0,t.yg)("th",{parentName:"tr",align:null},"Type"),(0,t.yg)("th",{parentName:"tr",align:null},"Description"))),(0,t.yg)("tbody",{parentName:"table"},(0,t.yg)("tr",{parentName:"tbody"},(0,t.yg)("td",{parentName:"tr",align:null},"program_id"),(0,t.yg)("td",{parentName:"tr",align:null},(0,t.yg)("code",null,"string")),(0,t.yg)("td",{parentName:"tr",align:null},"searching domain")),(0,t.yg)("tr",{parentName:"tbody"},(0,t.yg)("td",{parentName:"tr",align:null},"callback"),(0,t.yg)("td",{parentName:"tr",align:null},(0,t.yg)("code",null,"function")),(0,t.yg)("td",{parentName:"tr",align:null},"An optional callback function")))),(0,t.yg)("p",null,(0,t.yg)("strong",{parentName:"p"},"Example")),(0,t.yg)("pre",null,(0,t.yg)("code",{parentName:"pre",className:"language-js"},'getProgram("PROG_2023_00000001")\n')),(0,t.yg)("hr",null),(0,t.yg)("h3",{id:"getprograms"},"getPrograms"),(0,t.yg)("p",null,(0,t.yg)("code",null,"getPrograms([options], callback) \u21d2 Operation")),(0,t.yg)("p",null,"get programs list from OpenSPP"),(0,t.yg)("table",null,(0,t.yg)("thead",{parentName:"table"},(0,t.yg)("tr",{parentName:"thead"},(0,t.yg)("th",{parentName:"tr",align:null},"Param"),(0,t.yg)("th",{parentName:"tr",align:null},"Type"),(0,t.yg)("th",{parentName:"tr",align:null},"Default"),(0,t.yg)("th",{parentName:"tr",align:null},"Description"))),(0,t.yg)("tbody",{parentName:"table"},(0,t.yg)("tr",{parentName:"tbody"},(0,t.yg)("td",{parentName:"tr",align:null},"[options]"),(0,t.yg)("td",{parentName:"tr",align:null},(0,t.yg)("code",null,"number")),(0,t.yg)("td",{parentName:"tr",align:null},(0,t.yg)("code",null,"{}")),(0,t.yg)("td",{parentName:"tr",align:null},"offset from start")),(0,t.yg)("tr",{parentName:"tbody"},(0,t.yg)("td",{parentName:"tr",align:null},"callback"),(0,t.yg)("td",{parentName:"tr",align:null},(0,t.yg)("code",null,"function")),(0,t.yg)("td",{parentName:"tr",align:null}),(0,t.yg)("td",{parentName:"tr",align:null},"An optional callback function")))),(0,t.yg)("p",null,(0,t.yg)("strong",{parentName:"p"},"Example")),(0,t.yg)("pre",null,(0,t.yg)("code",{parentName:"pre",className:"language-js"},"getPrograms(100)\n")),(0,t.yg)("hr",null),(0,t.yg)("h3",{id:"getservicepoint"},"getServicePoint"),(0,t.yg)("p",null,(0,t.yg)("code",null,"getServicePoint(spp_id, callback) \u21d2 Operation")),(0,t.yg)("p",null,"get service points information from OpenSPP"),(0,t.yg)("table",null,(0,t.yg)("thead",{parentName:"table"},(0,t.yg)("tr",{parentName:"thead"},(0,t.yg)("th",{parentName:"tr",align:null},"Param"),(0,t.yg)("th",{parentName:"tr",align:null},"Type"),(0,t.yg)("th",{parentName:"tr",align:null},"Description"))),(0,t.yg)("tbody",{parentName:"table"},(0,t.yg)("tr",{parentName:"tbody"},(0,t.yg)("td",{parentName:"tr",align:null},"spp_id"),(0,t.yg)("td",{parentName:"tr",align:null},(0,t.yg)("code",null,"string")),(0,t.yg)("td",{parentName:"tr",align:null},"The spp_id of the agent")),(0,t.yg)("tr",{parentName:"tbody"},(0,t.yg)("td",{parentName:"tr",align:null},"callback"),(0,t.yg)("td",{parentName:"tr",align:null},(0,t.yg)("code",null,"function")),(0,t.yg)("td",{parentName:"tr",align:null},"An optional callback function")))),(0,t.yg)("p",null,(0,t.yg)("strong",{parentName:"p"},"Example")),(0,t.yg)("pre",null,(0,t.yg)("code",{parentName:"pre",className:"language-js"},'getServicePoint("SVP_8P4KP4RT")\n')),(0,t.yg)("hr",null),(0,t.yg)("h3",{id:"removefromgroup"},"removeFromGroup"),(0,t.yg)("p",null,(0,t.yg)("code",null,"removeFromGroup(group_id, individual_id) \u21d2 Operation")),(0,t.yg)("p",null,"remove individual from group in OpenSPP"),(0,t.yg)("table",null,(0,t.yg)("thead",{parentName:"table"},(0,t.yg)("tr",{parentName:"thead"},(0,t.yg)("th",{parentName:"tr",align:null},"Param"),(0,t.yg)("th",{parentName:"tr",align:null},"Type"),(0,t.yg)("th",{parentName:"tr",align:null},"Description"))),(0,t.yg)("tbody",{parentName:"table"},(0,t.yg)("tr",{parentName:"tbody"},(0,t.yg)("td",{parentName:"tr",align:null},"group_id"),(0,t.yg)("td",{parentName:"tr",align:null},(0,t.yg)("code",null,"string")),(0,t.yg)("td",{parentName:"tr",align:null},"group registrant id")),(0,t.yg)("tr",{parentName:"tbody"},(0,t.yg)("td",{parentName:"tr",align:null},"individual_id"),(0,t.yg)("td",{parentName:"tr",align:null},(0,t.yg)("code",null,"string")),(0,t.yg)("td",{parentName:"tr",align:null},"individual registrant id")))),(0,t.yg)("p",null,(0,t.yg)("strong",{parentName:"p"},"Example")),(0,t.yg)("pre",null,(0,t.yg)("code",{parentName:"pre",className:"language-js"},'removeFromGroup("GRP_B2BRHJN2", "IND_8DUQL4M4")\n')),(0,t.yg)("hr",null),(0,t.yg)("h3",{id:"searcharea"},"searchArea"),(0,t.yg)("p",null,(0,t.yg)("code",null,"searchArea(domain, [options], callback) \u21d2 Operation")),(0,t.yg)("p",null,"searching for service point in OpenSPP"),(0,t.yg)("table",null,(0,t.yg)("thead",{parentName:"table"},(0,t.yg)("tr",{parentName:"thead"},(0,t.yg)("th",{parentName:"tr",align:null},"Param"),(0,t.yg)("th",{parentName:"tr",align:null},"Type"),(0,t.yg)("th",{parentName:"tr",align:null},"Default"),(0,t.yg)("th",{parentName:"tr",align:null},"Description"))),(0,t.yg)("tbody",{parentName:"table"},(0,t.yg)("tr",{parentName:"tbody"},(0,t.yg)("td",{parentName:"tr",align:null},"domain"),(0,t.yg)("td",{parentName:"tr",align:null},(0,t.yg)("code",null,"Array")),(0,t.yg)("td",{parentName:"tr",align:null}),(0,t.yg)("td",{parentName:"tr",align:null},"searching domain")),(0,t.yg)("tr",{parentName:"tbody"},(0,t.yg)("td",{parentName:"tr",align:null},"[options]"),(0,t.yg)("td",{parentName:"tr",align:null},(0,t.yg)("code",null,"object")),(0,t.yg)("td",{parentName:"tr",align:null},(0,t.yg)("code",null,"{}")),(0,t.yg)("td",{parentName:"tr",align:null},"Searching options, eg: limit for limiting number of records returning, order for searching order, offset for skipping records")),(0,t.yg)("tr",{parentName:"tbody"},(0,t.yg)("td",{parentName:"tr",align:null},"callback"),(0,t.yg)("td",{parentName:"tr",align:null},(0,t.yg)("code",null,"function")),(0,t.yg)("td",{parentName:"tr",align:null}),(0,t.yg)("td",{parentName:"tr",align:null},"An optional callback function")))),(0,t.yg)("p",null,(0,t.yg)("strong",{parentName:"p"},"Example:")," search without offset"),(0,t.yg)("pre",null,(0,t.yg)("code",{parentName:"pre",className:"language-js"},'searchArea([["code", "=", "10732"]])\n')),(0,t.yg)("p",null,(0,t.yg)("strong",{parentName:"p"},"Example:")," search with offset"),(0,t.yg)("pre",null,(0,t.yg)("code",{parentName:"pre",className:"language-js"},'searchArea([["kind", "=", 1]], { offset: 10 }})\n')),(0,t.yg)("hr",null),(0,t.yg)("h3",{id:"searchgroup"},"searchGroup"),(0,t.yg)("p",null,(0,t.yg)("code",null,"searchGroup(domain, [options], callback) \u21d2 Operation")),(0,t.yg)("p",null,"get groups from OpenSPP"),(0,t.yg)("table",null,(0,t.yg)("thead",{parentName:"table"},(0,t.yg)("tr",{parentName:"thead"},(0,t.yg)("th",{parentName:"tr",align:null},"Param"),(0,t.yg)("th",{parentName:"tr",align:null},"Type"),(0,t.yg)("th",{parentName:"tr",align:null},"Default"),(0,t.yg)("th",{parentName:"tr",align:null},"Description"))),(0,t.yg)("tbody",{parentName:"table"},(0,t.yg)("tr",{parentName:"tbody"},(0,t.yg)("td",{parentName:"tr",align:null},"domain"),(0,t.yg)("td",{parentName:"tr",align:null},(0,t.yg)("code",null,"Array")),(0,t.yg)("td",{parentName:"tr",align:null}),(0,t.yg)("td",{parentName:"tr",align:null},"searching domain")),(0,t.yg)("tr",{parentName:"tbody"},(0,t.yg)("td",{parentName:"tr",align:null},"[options]"),(0,t.yg)("td",{parentName:"tr",align:null},(0,t.yg)("code",null,"object")),(0,t.yg)("td",{parentName:"tr",align:null},(0,t.yg)("code",null,"{}")),(0,t.yg)("td",{parentName:"tr",align:null},"Searching options, eg: limit for limiting number of records returning, order for ordering search, offset for skipping records")),(0,t.yg)("tr",{parentName:"tbody"},(0,t.yg)("td",{parentName:"tr",align:null},"callback"),(0,t.yg)("td",{parentName:"tr",align:null},(0,t.yg)("code",null,"function")),(0,t.yg)("td",{parentName:"tr",align:null}),(0,t.yg)("td",{parentName:"tr",align:null},"An optional callback function")))),(0,t.yg)("p",null,(0,t.yg)("strong",{parentName:"p"},"Example:")," search group by domain"),(0,t.yg)("pre",null,(0,t.yg)("code",{parentName:"pre",className:"language-js"},'searchGroup([["spp_id", "=", "GRP_Q4VGGZPF"]])\n')),(0,t.yg)("p",null,(0,t.yg)("strong",{parentName:"p"},"Example:")," search group by domain with offset"),(0,t.yg)("pre",null,(0,t.yg)("code",{parentName:"pre",className:"language-js"},'searchGroup([["spp_id", "ilike", "GRP"]], { offset: 100 }})\n')),(0,t.yg)("p",null,(0,t.yg)("strong",{parentName:"p"},"Example:")," search group by complex domain for more accuracy"),(0,t.yg)("pre",null,(0,t.yg)("code",{parentName:"pre",className:"language-js"},'searchGroup([["address", "!=", false], ["phone", "!=", false]])\n')),(0,t.yg)("hr",null),(0,t.yg)("h3",{id:"searchindividual"},"searchIndividual"),(0,t.yg)("p",null,(0,t.yg)("code",null,"searchIndividual(domain, [options], callback) \u21d2 Operation")),(0,t.yg)("p",null,"get individuals from OpenSPP"),(0,t.yg)("table",null,(0,t.yg)("thead",{parentName:"table"},(0,t.yg)("tr",{parentName:"thead"},(0,t.yg)("th",{parentName:"tr",align:null},"Param"),(0,t.yg)("th",{parentName:"tr",align:null},"Type"),(0,t.yg)("th",{parentName:"tr",align:null},"Default"),(0,t.yg)("th",{parentName:"tr",align:null},"Description"))),(0,t.yg)("tbody",{parentName:"table"},(0,t.yg)("tr",{parentName:"tbody"},(0,t.yg)("td",{parentName:"tr",align:null},"domain"),(0,t.yg)("td",{parentName:"tr",align:null},(0,t.yg)("code",null,"Array")),(0,t.yg)("td",{parentName:"tr",align:null}),(0,t.yg)("td",{parentName:"tr",align:null},"searching domain")),(0,t.yg)("tr",{parentName:"tbody"},(0,t.yg)("td",{parentName:"tr",align:null},"[options]"),(0,t.yg)("td",{parentName:"tr",align:null},(0,t.yg)("code",null,"object")),(0,t.yg)("td",{parentName:"tr",align:null},(0,t.yg)("code",null,"{}")),(0,t.yg)("td",{parentName:"tr",align:null},"Searching options, eg: limit for limiting number of records returning, order for searching order, offset for skipping records")),(0,t.yg)("tr",{parentName:"tbody"},(0,t.yg)("td",{parentName:"tr",align:null},"callback"),(0,t.yg)("td",{parentName:"tr",align:null},(0,t.yg)("code",null,"function")),(0,t.yg)("td",{parentName:"tr",align:null}),(0,t.yg)("td",{parentName:"tr",align:null},"An optional callback function")))),(0,t.yg)("p",null,(0,t.yg)("strong",{parentName:"p"},"Example:")," search individual by domain"),(0,t.yg)("pre",null,(0,t.yg)("code",{parentName:"pre",className:"language-js"},'searchIndividual([["spp_id", "=", "IND_Q4VGGZPF"]])\n')),(0,t.yg)("p",null,(0,t.yg)("strong",{parentName:"p"},"Example:")," search individual by domain with offset"),(0,t.yg)("pre",null,(0,t.yg)("code",{parentName:"pre",className:"language-js"},'searchIndividual([["spp_id", "ilike", "IND"]], { offset: 100 })\n')),(0,t.yg)("p",null,(0,t.yg)("strong",{parentName:"p"},"Example:")," search individual by complex domain for more accuracy"),(0,t.yg)("pre",null,(0,t.yg)("code",{parentName:"pre",className:"language-js"},'searchIndividual([["address", "!=", false], ["birthdate", "=", false]])\n')),(0,t.yg)("hr",null),(0,t.yg)("h3",{id:"searchservicepoint"},"searchServicePoint"),(0,t.yg)("p",null,(0,t.yg)("code",null,"searchServicePoint(domain, [options], callback) \u21d2 Operation")),(0,t.yg)("p",null,"searching for service point in OpenSPP"),(0,t.yg)("table",null,(0,t.yg)("thead",{parentName:"table"},(0,t.yg)("tr",{parentName:"thead"},(0,t.yg)("th",{parentName:"tr",align:null},"Param"),(0,t.yg)("th",{parentName:"tr",align:null},"Type"),(0,t.yg)("th",{parentName:"tr",align:null},"Default"),(0,t.yg)("th",{parentName:"tr",align:null},"Description"))),(0,t.yg)("tbody",{parentName:"table"},(0,t.yg)("tr",{parentName:"tbody"},(0,t.yg)("td",{parentName:"tr",align:null},"domain"),(0,t.yg)("td",{parentName:"tr",align:null},(0,t.yg)("code",null,"Array")),(0,t.yg)("td",{parentName:"tr",align:null}),(0,t.yg)("td",{parentName:"tr",align:null},"searching domain")),(0,t.yg)("tr",{parentName:"tbody"},(0,t.yg)("td",{parentName:"tr",align:null},"[options]"),(0,t.yg)("td",{parentName:"tr",align:null},(0,t.yg)("code",null,"object")),(0,t.yg)("td",{parentName:"tr",align:null},(0,t.yg)("code",null,"{}")),(0,t.yg)("td",{parentName:"tr",align:null},"Searching options, eg: limit for limiting number of records returning, order for searching order, offset for skipping records")),(0,t.yg)("tr",{parentName:"tbody"},(0,t.yg)("td",{parentName:"tr",align:null},"callback"),(0,t.yg)("td",{parentName:"tr",align:null},(0,t.yg)("code",null,"function")),(0,t.yg)("td",{parentName:"tr",align:null}),(0,t.yg)("td",{parentName:"tr",align:null},"An optional callback function")))),(0,t.yg)("p",null,(0,t.yg)("strong",{parentName:"p"},"Example:")," search without offset"),(0,t.yg)("pre",null,(0,t.yg)("code",{parentName:"pre",className:"language-js"},'searchServicePoint([["name", "ilike", "agent 1"]])\n')),(0,t.yg)("p",null,(0,t.yg)("strong",{parentName:"p"},"Example:")," search with offset"),(0,t.yg)("pre",null,(0,t.yg)("code",{parentName:"pre",className:"language-js"},'searchServicePoint([["name", "ilike", "agent 1"]], { offset: 100 })\n')),(0,t.yg)("hr",null),(0,t.yg)("h3",{id:"unenroll"},"unenroll"),(0,t.yg)("p",null,(0,t.yg)("code",null,"unenroll(spp_id, program_id)")),(0,t.yg)("p",null,"unenroll registrant from program in OpenSPP"),(0,t.yg)("table",null,(0,t.yg)("thead",{parentName:"table"},(0,t.yg)("tr",{parentName:"thead"},(0,t.yg)("th",{parentName:"tr",align:null},"Param"),(0,t.yg)("th",{parentName:"tr",align:null},"Type"),(0,t.yg)("th",{parentName:"tr",align:null},"Description"))),(0,t.yg)("tbody",{parentName:"table"},(0,t.yg)("tr",{parentName:"tbody"},(0,t.yg)("td",{parentName:"tr",align:null},"spp_id"),(0,t.yg)("td",{parentName:"tr",align:null},(0,t.yg)("code",null,"string")),(0,t.yg)("td",{parentName:"tr",align:null},"spp_id of group / individual wanted to unenroll")),(0,t.yg)("tr",{parentName:"tbody"},(0,t.yg)("td",{parentName:"tr",align:null},"program_id"),(0,t.yg)("td",{parentName:"tr",align:null},(0,t.yg)("code",null,"string")),(0,t.yg)("td",{parentName:"tr",align:null},"program_id of program")))),(0,t.yg)("p",null,(0,t.yg)("strong",{parentName:"p"},"Example")),(0,t.yg)("pre",null,(0,t.yg)("code",{parentName:"pre",className:"language-js"},'unenroll("IND_Q4VGGZPF", "PROG_2023_00000001")\n')),(0,t.yg)("hr",null),(0,t.yg)("h3",{id:"updategroup"},"updateGroup"),(0,t.yg)("p",null,(0,t.yg)("code",null,"updateGroup(group_id, data) \u21d2 Operation")),(0,t.yg)("p",null,"update group for OpenSPP"),(0,t.yg)("table",null,(0,t.yg)("thead",{parentName:"table"},(0,t.yg)("tr",{parentName:"thead"},(0,t.yg)("th",{parentName:"tr",align:null},"Param"),(0,t.yg)("th",{parentName:"tr",align:null},"Type"),(0,t.yg)("th",{parentName:"tr",align:null},"Description"))),(0,t.yg)("tbody",{parentName:"table"},(0,t.yg)("tr",{parentName:"tbody"},(0,t.yg)("td",{parentName:"tr",align:null},"group_id"),(0,t.yg)("td",{parentName:"tr",align:null},(0,t.yg)("code",null,"string")),(0,t.yg)("td",{parentName:"tr",align:null},"group registrant id")),(0,t.yg)("tr",{parentName:"tbody"},(0,t.yg)("td",{parentName:"tr",align:null},"data"),(0,t.yg)("td",{parentName:"tr",align:null},(0,t.yg)("code",null,"object")),(0,t.yg)("td",{parentName:"tr",align:null},"registrant update data")))),(0,t.yg)("p",null,(0,t.yg)("strong",{parentName:"p"},"Example")),(0,t.yg)("pre",null,(0,t.yg)("code",{parentName:"pre",className:"language-js"},'updateGroup("GRP_B2BRHJN2", { name: "Group 1" })\n')),(0,t.yg)("hr",null),(0,t.yg)("h3",{id:"updateindividual"},"updateIndividual"),(0,t.yg)("p",null,(0,t.yg)("code",null,"updateIndividual(individual_id, data) \u21d2 Operation")),(0,t.yg)("p",null,"update individual for OpenSPP"),(0,t.yg)("table",null,(0,t.yg)("thead",{parentName:"table"},(0,t.yg)("tr",{parentName:"thead"},(0,t.yg)("th",{parentName:"tr",align:null},"Param"),(0,t.yg)("th",{parentName:"tr",align:null},"Type"),(0,t.yg)("th",{parentName:"tr",align:null},"Description"))),(0,t.yg)("tbody",{parentName:"table"},(0,t.yg)("tr",{parentName:"tbody"},(0,t.yg)("td",{parentName:"tr",align:null},"individual_id"),(0,t.yg)("td",{parentName:"tr",align:null},(0,t.yg)("code",null,"string")),(0,t.yg)("td",{parentName:"tr",align:null},"individual registrant id")),(0,t.yg)("tr",{parentName:"tbody"},(0,t.yg)("td",{parentName:"tr",align:null},"data"),(0,t.yg)("td",{parentName:"tr",align:null},(0,t.yg)("code",null,"object")),(0,t.yg)("td",{parentName:"tr",align:null},"registrant update data")))),(0,t.yg)("p",null,(0,t.yg)("strong",{parentName:"p"},"Example")),(0,t.yg)("pre",null,(0,t.yg)("code",{parentName:"pre",className:"language-js"},'updateIndividual("IND_8DUQL4M4", { name: "Individual 1" })\n')),(0,t.yg)("hr",null))}y.isMDXComponent=!0},15680:(e,a,n)=>{n.d(a,{xA:()=>d,yg:()=>c});var l=n(96540);function t(e,a,n){return a in e?Object.defineProperty(e,a,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[a]=n,e}function r(e,a){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);a&&(l=l.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),n.push.apply(n,l)}return n}function g(e){for(var a=1;a<arguments.length;a++){var n=null!=arguments[a]?arguments[a]:{};a%2?r(Object(n),!0).forEach((function(a){t(e,a,n[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(n,a))}))}return e}function p(e,a){if(null==e)return{};var n,l,t=function(e,a){if(null==e)return{};var n,l,t={},r=Object.keys(e);for(l=0;l<r.length;l++)n=r[l],a.indexOf(n)>=0||(t[n]=e[n]);return t}(e,a);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(l=0;l<r.length;l++)n=r[l],a.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(t[n]=e[n])}return t}var o=l.createContext({}),i=function(e){var a=l.useContext(o),n=a;return e&&(n="function"==typeof e?e(a):g(g({},a),e)),n},d=function(e){var a=i(e.components);return l.createElement(o.Provider,{value:a},e.children)},u="mdxType",y={inlineCode:"code",wrapper:function(e){var a=e.children;return l.createElement(l.Fragment,{},a)}},m=l.forwardRef((function(e,a){var n=e.components,t=e.mdxType,r=e.originalType,o=e.parentName,d=p(e,["components","mdxType","originalType","parentName"]),u=i(n),m=t,c=u["".concat(o,".").concat(m)]||u[m]||y[m]||r;return n?l.createElement(c,g(g({ref:a},d),{},{components:n})):l.createElement(c,g({ref:a},d))}));function c(e,a){var n=arguments,t=a&&a.mdxType;if("string"==typeof e||t){var r=n.length,g=new Array(r);g[0]=m;var p={};for(var o in a)hasOwnProperty.call(a,o)&&(p[o]=a[o]);p.originalType=e,p[u]="string"==typeof e?e:t,g[1]=p;for(var i=2;i<r;i++)g[i]=n[i];return l.createElement.apply(null,g)}return l.createElement.apply(null,n)}m.displayName="MDXCreateElement"}}]);