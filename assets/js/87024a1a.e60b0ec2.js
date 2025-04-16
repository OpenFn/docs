"use strict";(self.webpackChunk_openfn_docs=self.webpackChunk_openfn_docs||[]).push([[3778],{85257:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>d,frontMatter:()=>n,metadata:()=>g,toc:()=>y});var l=a(58168),r=(a(96540),a(15680));const n={title:"fhir-fr@1.0.10",id:"fhir-fr-docs",keywords:["adaptor","fhir-fr"]},i=void 0,g={unversionedId:"packages/fhir-fr-docs",id:"packages/fhir-fr-docs",title:"fhir-fr@1.0.10",description:"This adaptor exports the following namespaced functions:",source:"@site/adaptors/packages/fhir-fr-docs.md",sourceDirName:"packages",slug:"/packages/fhir-fr-docs",permalink:"/adaptors/packages/fhir-fr-docs",draft:!1,tags:[],version:"current",frontMatter:{title:"fhir-fr@1.0.10",id:"fhir-fr-docs",keywords:["adaptor","fhir-fr"]},sidebar:"adaptors",previous:{title:"FHIR-FR IG Adaptor",permalink:"/adaptors/fhir-fr"},next:{title:"Config for fhir-fr",permalink:"/adaptors/packages/fhir-fr-configuration-schema"}},p={},y=[{value:"utils",id:"utils",level:2},{value:"utils.addExtension",id:"utils_addExtension",level:3},{value:"utils.cc",id:"utils_cc",level:3},{value:"utils.coding",id:"utils_coding",level:3},{value:"utils.composite",id:"utils_composite",level:3},{value:"utils.concept",id:"utils_concept",level:3},{value:"utils.findExtension",id:"utils_findExtension",level:3},{value:"utils.id",id:"utils_id",level:3},{value:"utils.identifier",id:"utils_identifier",level:3},{value:"utils.ref",id:"utils_ref",level:3},{value:"utils.reference",id:"utils_reference",level:3},{value:"utils.setSystemMap",id:"utils_setSystemMap",level:3},{value:"builders",id:"builders",level:2},{value:"builders.address",id:"builders_address",level:3},{value:"builders.appointment",id:"builders_appointment",level:3},{value:"builders.contactPoint",id:"builders_contactPoint",level:3},{value:"builders.encounter",id:"builders_encounter",level:3},{value:"builders.extension",id:"builders_extension",level:3},{value:"builders.healthcareService",id:"builders_healthcareService",level:3},{value:"builders.humanName",id:"builders_humanName",level:3},{value:"builders.location",id:"builders_location",level:3},{value:"builders.medicationAdministration",id:"builders_medicationAdministration",level:3},{value:"builders.observation",id:"builders_observation",level:3},{value:"builders.organization",id:"builders_organization",level:3},{value:"builders.patient",id:"builders_patient",level:3},{value:"builders.practitioner",id:"builders_practitioner",level:3},{value:"builders.practitionerRole",id:"builders_practitionerRole",level:3},{value:"builders.relatedPerson",id:"builders_relatedPerson",level:3},{value:"builders.schedule",id:"builders_schedule",level:3},{value:"builders.slot",id:"builders_slot",level:3}],u={toc:y},o="wrapper";function d(e){let{components:t,...a}=e;return(0,r.yg)(o,(0,l.A)({},u,a,{components:t,mdxType:"MDXLayout"}),(0,r.yg)("p",null,"This adaptor exports the following namespaced functions:"),(0,r.yg)("dl",null,(0,r.yg)("dt",null,(0,r.yg)("a",{href:"#utils_addExtension"},"utils.addExtension(resource, url, value)")),(0,r.yg)("dt",null,(0,r.yg)("a",{href:"#utils_cc"},"utils.cc()")),(0,r.yg)("dt",null,(0,r.yg)("a",{href:"#utils_coding"},"utils.coding(code, system)")),(0,r.yg)("dt",null,(0,r.yg)("a",{href:"#utils_composite"},"utils.composite(object, key, value)")),(0,r.yg)("dt",null,(0,r.yg)("a",{href:"#utils_concept"},"utils.concept()")),(0,r.yg)("dt",null,(0,r.yg)("a",{href:"#utils_findExtension"},"utils.findExtension(obj, targetUrl, [path])")),(0,r.yg)("dt",null,(0,r.yg)("a",{href:"#utils_id"},"utils.id()")),(0,r.yg)("dt",null,(0,r.yg)("a",{href:"#utils_identifier"},"utils.identifier(input, [system])")),(0,r.yg)("dt",null,(0,r.yg)("a",{href:"#utils_ref"},"utils.ref()")),(0,r.yg)("dt",null,(0,r.yg)("a",{href:"#utils_reference"},"utils.reference(ref)")),(0,r.yg)("dt",null,(0,r.yg)("a",{href:"#utils_setSystemMap"},"utils.setSystemMap()")),(0,r.yg)("dt",null,(0,r.yg)("a",{href:"#builders_address"},"builders.address(type, props)")),(0,r.yg)("dt",null,(0,r.yg)("a",{href:"#builders_appointment"},"builders.appointment(type, props)")),(0,r.yg)("dt",null,(0,r.yg)("a",{href:"#builders_contactPoint"},"builders.contactPoint(type, props)")),(0,r.yg)("dt",null,(0,r.yg)("a",{href:"#builders_encounter"},"builders.encounter(type, props)")),(0,r.yg)("dt",null,(0,r.yg)("a",{href:"#builders_extension"},"builders.extension(type, props)")),(0,r.yg)("dt",null,(0,r.yg)("a",{href:"#builders_healthcareService"},"builders.healthcareService(type, props)")),(0,r.yg)("dt",null,(0,r.yg)("a",{href:"#builders_humanName"},"builders.humanName(type, props)")),(0,r.yg)("dt",null,(0,r.yg)("a",{href:"#builders_location"},"builders.location(type, props)")),(0,r.yg)("dt",null,(0,r.yg)("a",{href:"#builders_medicationAdministration"},"builders.medicationAdministration(type, props)")),(0,r.yg)("dt",null,(0,r.yg)("a",{href:"#builders_observation"},"builders.observation(type, props)")),(0,r.yg)("dt",null,(0,r.yg)("a",{href:"#builders_organization"},"builders.organization(type, props)")),(0,r.yg)("dt",null,(0,r.yg)("a",{href:"#builders_patient"},"builders.patient(type, props)")),(0,r.yg)("dt",null,(0,r.yg)("a",{href:"#builders_practitioner"},"builders.practitioner(type, props)")),(0,r.yg)("dt",null,(0,r.yg)("a",{href:"#builders_practitionerRole"},"builders.practitionerRole(type, props)")),(0,r.yg)("dt",null,(0,r.yg)("a",{href:"#builders_relatedPerson"},"builders.relatedPerson(type, props)")),(0,r.yg)("dt",null,(0,r.yg)("a",{href:"#builders_schedule"},"builders.schedule(type, props)")),(0,r.yg)("dt",null,(0,r.yg)("a",{href:"#builders_slot"},"builders.slot(type, props)"))),(0,r.yg)("h2",{id:"utils"},"utils"),(0,r.yg)("p",null,"These functions belong to the utils namespace."),(0,r.yg)("h3",{id:"utils_addExtension"},"utils.addExtension"),(0,r.yg)("p",null,(0,r.yg)("code",null,"addExtension(resource, url, value)")),(0,r.yg)("p",null,"Add an extension to a resource (or object).\nAn object will be created and added to an ",(0,r.yg)("inlineCode",{parentName:"p"},"extension")," array on the provided resource.\nThe extension array will be set if it does not exist on the resource.\nThe value will be smartly written to the object, ie, valueDateTime or valueReference or valueString"),(0,r.yg)("table",null,(0,r.yg)("thead",{parentName:"table"},(0,r.yg)("tr",{parentName:"thead"},(0,r.yg)("th",{parentName:"tr",align:null},"Param"),(0,r.yg)("th",{parentName:"tr",align:null},"Type"),(0,r.yg)("th",{parentName:"tr",align:null},"Description"))),(0,r.yg)("tbody",{parentName:"table"},(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"resource"),(0,r.yg)("td",{parentName:"tr",align:null}),(0,r.yg)("td",{parentName:"tr",align:null},"a FHIR resource object to add an extension too")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"url"),(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("code",null,"string")),(0,r.yg)("td",{parentName:"tr",align:null},"the URL to set for the extension")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"value"),(0,r.yg)("td",{parentName:"tr",align:null}),(0,r.yg)("td",{parentName:"tr",align:null},"the value that the extension should contain")))),(0,r.yg)("hr",null),(0,r.yg)("h3",{id:"utils_cc"},"utils.cc"),(0,r.yg)("p",null,(0,r.yg)("code",null,"cc()")),(0,r.yg)("p",null,"Alias for util.concept()"),(0,r.yg)("hr",null),(0,r.yg)("h3",{id:"utils_coding"},"utils.coding"),(0,r.yg)("p",null,(0,r.yg)("code",null,"coding(code, system)")),(0,r.yg)("p",null,"Create a coding object { code, system }. Systems will be mapped using the system map."),(0,r.yg)("table",null,(0,r.yg)("thead",{parentName:"table"},(0,r.yg)("tr",{parentName:"thead"},(0,r.yg)("th",{parentName:"tr",align:null},"Param"),(0,r.yg)("th",{parentName:"tr",align:null},"Type"),(0,r.yg)("th",{parentName:"tr",align:null},"Description"))),(0,r.yg)("tbody",{parentName:"table"},(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"code"),(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("code",null,"string")),(0,r.yg)("td",{parentName:"tr",align:null},"the code value")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"system"),(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("code",null,"string")),(0,r.yg)("td",{parentName:"tr",align:null},"URL to the system. Well be mapped using the system map.")))),(0,r.yg)("hr",null),(0,r.yg)("h3",{id:"utils_composite"},"utils.composite"),(0,r.yg)("p",null,(0,r.yg)("code",null,"composite(object, key, value)")),(0,r.yg)("p",null,"Write a value to the target object using a typed key\nIe, if key is ",(0,r.yg)("inlineCode",{parentName:"p"},"value")," and the value is a date time string,\nthis function will write ",(0,r.yg)("inlineCode",{parentName:"p"},"valueDateTime")," to the object."),(0,r.yg)("p",null,"This function is poorly named."),(0,r.yg)("table",null,(0,r.yg)("thead",{parentName:"table"},(0,r.yg)("tr",{parentName:"thead"},(0,r.yg)("th",{parentName:"tr",align:null},"Param"),(0,r.yg)("th",{parentName:"tr",align:null},"Type"),(0,r.yg)("th",{parentName:"tr",align:null},"Description"))),(0,r.yg)("tbody",{parentName:"table"},(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"object"),(0,r.yg)("td",{parentName:"tr",align:null}),(0,r.yg)("td",{parentName:"tr",align:null},"the object to write the composite key to")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"key"),(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("code",null,"string")),(0,r.yg)("td",{parentName:"tr",align:null},"the base key to use to write the value")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"value"),(0,r.yg)("td",{parentName:"tr",align:null}),(0,r.yg)("td",{parentName:"tr",align:null},"some value to write to the object")))),(0,r.yg)("hr",null),(0,r.yg)("h3",{id:"utils_concept"},"utils.concept"),(0,r.yg)("p",null,(0,r.yg)("code",null,"concept()")),(0,r.yg)("p",null,"Create a codeableConcept. Codings can be coding objects or\n","[code, system]"," tuples\nif the first argument is a string, it will be set as the text.\nSystems will be mapped with the system map"),(0,r.yg)("p",null,(0,r.yg)("strong",{parentName:"p"},"Example:")," <Create a codeableConcept"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-js"},"const myConcept = util.concept(['abc', 'http://moh.gov.et/fhir/hiv/identifier/SmartCareID'])\n* @example <caption><Create a codeableConcept with text</caption>\nconst myConcept = util.concept('smart care id', ['abc', 'http://moh.gov.et/fhir/hiv/identifier/SmartCareID'])\n")),(0,r.yg)("hr",null),(0,r.yg)("h3",{id:"utils_findExtension"},"utils.findExtension"),(0,r.yg)("p",null,(0,r.yg)("code",null,"findExtension(obj, targetUrl, [path])")),(0,r.yg)("p",null,"Find an extension with a given url in some array"),(0,r.yg)("table",null,(0,r.yg)("thead",{parentName:"table"},(0,r.yg)("tr",{parentName:"thead"},(0,r.yg)("th",{parentName:"tr",align:null},"Param"),(0,r.yg)("th",{parentName:"tr",align:null},"Type"),(0,r.yg)("th",{parentName:"tr",align:null},"Description"))),(0,r.yg)("tbody",{parentName:"table"},(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"obj"),(0,r.yg)("td",{parentName:"tr",align:null}),(0,r.yg)("td",{parentName:"tr",align:null},"a fhir resource")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"targetUrl"),(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("code",null,"string")),(0,r.yg)("td",{parentName:"tr",align:null},"the extension URL you want to find")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"[path]"),(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("code",null,"string")),(0,r.yg)("td",{parentName:"tr",align:null},"a path to extract from the resource. Optional.")))),(0,r.yg)("hr",null),(0,r.yg)("h3",{id:"utils_id"},"utils.id"),(0,r.yg)("p",null,(0,r.yg)("code",null,"id()")),(0,r.yg)("p",null,"Alias for util.identifier()"),(0,r.yg)("hr",null),(0,r.yg)("h3",{id:"utils_identifier"},"utils.identifier"),(0,r.yg)("p",null,(0,r.yg)("code",null,"identifier(input, [system])")),(0,r.yg)("p",null,"Create an identifier resource. Systems will be mapped against the system map.\nThe input can be a string value, or an identifier object.\nIf input is an array of identifiers, an array of mapped/parsed values will be returned."),(0,r.yg)("table",null,(0,r.yg)("thead",{parentName:"table"},(0,r.yg)("tr",{parentName:"thead"},(0,r.yg)("th",{parentName:"tr",align:null},"Param"),(0,r.yg)("th",{parentName:"tr",align:null},"Type"),(0,r.yg)("th",{parentName:"tr",align:null},"Description"))),(0,r.yg)("tbody",{parentName:"table"},(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"input"),(0,r.yg)("td",{parentName:"tr",align:null}),(0,r.yg)("td",{parentName:"tr",align:null},"an array of strings, or a identifier value as a string or object")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"[system]"),(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("code",null,"string")),(0,r.yg)("td",{parentName:"tr",align:null},"the string system to use by default if")))),(0,r.yg)("hr",null),(0,r.yg)("h3",{id:"utils_ref"},"utils.ref"),(0,r.yg)("p",null,(0,r.yg)("code",null,"ref()")),(0,r.yg)("p",null,"Alias for util.reference()"),(0,r.yg)("hr",null),(0,r.yg)("h3",{id:"utils_reference"},"utils.reference"),(0,r.yg)("p",null,(0,r.yg)("code",null,"reference(ref)")),(0,r.yg)("p",null,"Create a reference object of the form { reference }\nIf ref is an array, each item will be mapped and an array returned.\nIf ref is a FHIR resource, a reference to it will be generated\nIf ref is a string, it'll be treated as a reference id and returned as an object\nIf ref is a valid FHIR reference, it'll just be returned."),(0,r.yg)("table",null,(0,r.yg)("thead",{parentName:"table"},(0,r.yg)("tr",{parentName:"thead"},(0,r.yg)("th",{parentName:"tr",align:null},"Param"),(0,r.yg)("th",{parentName:"tr",align:null},"Description"))),(0,r.yg)("tbody",{parentName:"table"},(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"ref"),(0,r.yg)("td",{parentName:"tr",align:null},"the thing to generate a reference from")))),(0,r.yg)("hr",null),(0,r.yg)("h3",{id:"utils_setSystemMap"},"utils.setSystemMap"),(0,r.yg)("p",null,(0,r.yg)("code",null,"setSystemMap()")),(0,r.yg)("p",null,"Define a set of mapped system values."),(0,r.yg)("p",null,"Builder functions will use this mappings when they encounter them in system keys. Useful for setting shortcuts."),(0,r.yg)("p",null,(0,r.yg)("strong",{parentName:"p"},"Example:")," Set shortcut sustem mappings"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-js"},"util.setSystemMap({\n  SmartCareID: 'http://moh.gov.et/fhir/hiv/identifier/SmartCareID'\n});\nbuilders.patient('patient', { identifier: util.identifier('xyz', 'SmartCareId') })\n};\n")),(0,r.yg)("hr",null),(0,r.yg)("h2",{id:"builders"},"builders"),(0,r.yg)("p",null,"These functions belong to the builders namespace."),(0,r.yg)("h3",{id:"builders_address"},"builders.address"),(0,r.yg)("p",null,(0,r.yg)("code",null,"address(type, props)")),(0,r.yg)("p",null,"Create a FHIR Address resource."),(0,r.yg)("table",null,(0,r.yg)("thead",{parentName:"table"},(0,r.yg)("tr",{parentName:"thead"},(0,r.yg)("th",{parentName:"tr",align:null},"Param"),(0,r.yg)("th",{parentName:"tr",align:null},"Type"),(0,r.yg)("th",{parentName:"tr",align:null},"Description"))),(0,r.yg)("tbody",{parentName:"table"},(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"type"),(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("code",null,"string")),(0,r.yg)("td",{parentName:"tr",align:null},"The profile id for the resource variant")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"props"),(0,r.yg)("td",{parentName:"tr",align:null}),(0,r.yg)("td",{parentName:"tr",align:null},"Properties to apply to the resource")))),(0,r.yg)("hr",null),(0,r.yg)("h3",{id:"builders_appointment"},"builders.appointment"),(0,r.yg)("p",null,(0,r.yg)("code",null,"appointment(type, props)")),(0,r.yg)("p",null,"Create a FHIR Appointment resource."),(0,r.yg)("table",null,(0,r.yg)("thead",{parentName:"table"},(0,r.yg)("tr",{parentName:"thead"},(0,r.yg)("th",{parentName:"tr",align:null},"Param"),(0,r.yg)("th",{parentName:"tr",align:null},"Type"),(0,r.yg)("th",{parentName:"tr",align:null},"Description"))),(0,r.yg)("tbody",{parentName:"table"},(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"type"),(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("code",null,"string")),(0,r.yg)("td",{parentName:"tr",align:null},"The profile id for the resource variant")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"props"),(0,r.yg)("td",{parentName:"tr",align:null}),(0,r.yg)("td",{parentName:"tr",align:null},"Properties to apply to the resource")))),(0,r.yg)("hr",null),(0,r.yg)("h3",{id:"builders_contactPoint"},"builders.contactPoint"),(0,r.yg)("p",null,(0,r.yg)("code",null,"contactPoint(type, props)")),(0,r.yg)("p",null,"Create a FHIR ContactPoint resource."),(0,r.yg)("table",null,(0,r.yg)("thead",{parentName:"table"},(0,r.yg)("tr",{parentName:"thead"},(0,r.yg)("th",{parentName:"tr",align:null},"Param"),(0,r.yg)("th",{parentName:"tr",align:null},"Type"),(0,r.yg)("th",{parentName:"tr",align:null},"Description"))),(0,r.yg)("tbody",{parentName:"table"},(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"type"),(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("code",null,"string")),(0,r.yg)("td",{parentName:"tr",align:null},"The profile id for the resource variant")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"props"),(0,r.yg)("td",{parentName:"tr",align:null}),(0,r.yg)("td",{parentName:"tr",align:null},"Properties to apply to the resource")))),(0,r.yg)("hr",null),(0,r.yg)("h3",{id:"builders_encounter"},"builders.encounter"),(0,r.yg)("p",null,(0,r.yg)("code",null,"encounter(type, props)")),(0,r.yg)("p",null,"Create a FHIR Encounter resource."),(0,r.yg)("table",null,(0,r.yg)("thead",{parentName:"table"},(0,r.yg)("tr",{parentName:"thead"},(0,r.yg)("th",{parentName:"tr",align:null},"Param"),(0,r.yg)("th",{parentName:"tr",align:null},"Type"),(0,r.yg)("th",{parentName:"tr",align:null},"Description"))),(0,r.yg)("tbody",{parentName:"table"},(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"type"),(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("code",null,"string")),(0,r.yg)("td",{parentName:"tr",align:null},"The profile id for the resource variant")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"props"),(0,r.yg)("td",{parentName:"tr",align:null}),(0,r.yg)("td",{parentName:"tr",align:null},"Properties to apply to the resource")))),(0,r.yg)("hr",null),(0,r.yg)("h3",{id:"builders_extension"},"builders.extension"),(0,r.yg)("p",null,(0,r.yg)("code",null,"extension(type, props)")),(0,r.yg)("p",null,"Create a FHIR Extension resource."),(0,r.yg)("table",null,(0,r.yg)("thead",{parentName:"table"},(0,r.yg)("tr",{parentName:"thead"},(0,r.yg)("th",{parentName:"tr",align:null},"Param"),(0,r.yg)("th",{parentName:"tr",align:null},"Type"),(0,r.yg)("th",{parentName:"tr",align:null},"Description"))),(0,r.yg)("tbody",{parentName:"table"},(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"type"),(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("code",null,"string")),(0,r.yg)("td",{parentName:"tr",align:null},"The profile id for the resource variant")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"props"),(0,r.yg)("td",{parentName:"tr",align:null}),(0,r.yg)("td",{parentName:"tr",align:null},"Properties to apply to the resource")))),(0,r.yg)("hr",null),(0,r.yg)("h3",{id:"builders_healthcareService"},"builders.healthcareService"),(0,r.yg)("p",null,(0,r.yg)("code",null,"healthcareService(type, props)")),(0,r.yg)("p",null,"Create a FHIR HealthcareService resource."),(0,r.yg)("table",null,(0,r.yg)("thead",{parentName:"table"},(0,r.yg)("tr",{parentName:"thead"},(0,r.yg)("th",{parentName:"tr",align:null},"Param"),(0,r.yg)("th",{parentName:"tr",align:null},"Type"),(0,r.yg)("th",{parentName:"tr",align:null},"Description"))),(0,r.yg)("tbody",{parentName:"table"},(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"type"),(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("code",null,"string")),(0,r.yg)("td",{parentName:"tr",align:null},"The profile id for the resource variant")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"props"),(0,r.yg)("td",{parentName:"tr",align:null}),(0,r.yg)("td",{parentName:"tr",align:null},"Properties to apply to the resource")))),(0,r.yg)("hr",null),(0,r.yg)("h3",{id:"builders_humanName"},"builders.humanName"),(0,r.yg)("p",null,(0,r.yg)("code",null,"humanName(type, props)")),(0,r.yg)("p",null,"Create a FHIR HumanName resource."),(0,r.yg)("table",null,(0,r.yg)("thead",{parentName:"table"},(0,r.yg)("tr",{parentName:"thead"},(0,r.yg)("th",{parentName:"tr",align:null},"Param"),(0,r.yg)("th",{parentName:"tr",align:null},"Type"),(0,r.yg)("th",{parentName:"tr",align:null},"Description"))),(0,r.yg)("tbody",{parentName:"table"},(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"type"),(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("code",null,"string")),(0,r.yg)("td",{parentName:"tr",align:null},"The profile id for the resource variant")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"props"),(0,r.yg)("td",{parentName:"tr",align:null}),(0,r.yg)("td",{parentName:"tr",align:null},"Properties to apply to the resource")))),(0,r.yg)("hr",null),(0,r.yg)("h3",{id:"builders_location"},"builders.location"),(0,r.yg)("p",null,(0,r.yg)("code",null,"location(type, props)")),(0,r.yg)("p",null,"Create a FHIR Location resource."),(0,r.yg)("table",null,(0,r.yg)("thead",{parentName:"table"},(0,r.yg)("tr",{parentName:"thead"},(0,r.yg)("th",{parentName:"tr",align:null},"Param"),(0,r.yg)("th",{parentName:"tr",align:null},"Type"),(0,r.yg)("th",{parentName:"tr",align:null},"Description"))),(0,r.yg)("tbody",{parentName:"table"},(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"type"),(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("code",null,"string")),(0,r.yg)("td",{parentName:"tr",align:null},"The profile id for the resource variant")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"props"),(0,r.yg)("td",{parentName:"tr",align:null}),(0,r.yg)("td",{parentName:"tr",align:null},"Properties to apply to the resource")))),(0,r.yg)("hr",null),(0,r.yg)("h3",{id:"builders_medicationAdministration"},"builders.medicationAdministration"),(0,r.yg)("p",null,(0,r.yg)("code",null,"medicationAdministration(type, props)")),(0,r.yg)("p",null,"Create a FHIR MedicationAdministration resource."),(0,r.yg)("table",null,(0,r.yg)("thead",{parentName:"table"},(0,r.yg)("tr",{parentName:"thead"},(0,r.yg)("th",{parentName:"tr",align:null},"Param"),(0,r.yg)("th",{parentName:"tr",align:null},"Type"),(0,r.yg)("th",{parentName:"tr",align:null},"Description"))),(0,r.yg)("tbody",{parentName:"table"},(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"type"),(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("code",null,"string")),(0,r.yg)("td",{parentName:"tr",align:null},"The profile id for the resource variant")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"props"),(0,r.yg)("td",{parentName:"tr",align:null}),(0,r.yg)("td",{parentName:"tr",align:null},"Properties to apply to the resource")))),(0,r.yg)("hr",null),(0,r.yg)("h3",{id:"builders_observation"},"builders.observation"),(0,r.yg)("p",null,(0,r.yg)("code",null,"observation(type, props)")),(0,r.yg)("p",null,"Create a FHIR Observation resource."),(0,r.yg)("table",null,(0,r.yg)("thead",{parentName:"table"},(0,r.yg)("tr",{parentName:"thead"},(0,r.yg)("th",{parentName:"tr",align:null},"Param"),(0,r.yg)("th",{parentName:"tr",align:null},"Type"),(0,r.yg)("th",{parentName:"tr",align:null},"Description"))),(0,r.yg)("tbody",{parentName:"table"},(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"type"),(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("code",null,"string")),(0,r.yg)("td",{parentName:"tr",align:null},"The profile id for the resource variant")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"props"),(0,r.yg)("td",{parentName:"tr",align:null}),(0,r.yg)("td",{parentName:"tr",align:null},"Properties to apply to the resource")))),(0,r.yg)("hr",null),(0,r.yg)("h3",{id:"builders_organization"},"builders.organization"),(0,r.yg)("p",null,(0,r.yg)("code",null,"organization(type, props)")),(0,r.yg)("p",null,"Create a FHIR Organization resource."),(0,r.yg)("table",null,(0,r.yg)("thead",{parentName:"table"},(0,r.yg)("tr",{parentName:"thead"},(0,r.yg)("th",{parentName:"tr",align:null},"Param"),(0,r.yg)("th",{parentName:"tr",align:null},"Type"),(0,r.yg)("th",{parentName:"tr",align:null},"Description"))),(0,r.yg)("tbody",{parentName:"table"},(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"type"),(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("code",null,"string")),(0,r.yg)("td",{parentName:"tr",align:null},"The profile id for the resource variant")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"props"),(0,r.yg)("td",{parentName:"tr",align:null}),(0,r.yg)("td",{parentName:"tr",align:null},"Properties to apply to the resource")))),(0,r.yg)("hr",null),(0,r.yg)("h3",{id:"builders_patient"},"builders.patient"),(0,r.yg)("p",null,(0,r.yg)("code",null,"patient(type, props)")),(0,r.yg)("p",null,"Create a FHIR Patient resource."),(0,r.yg)("table",null,(0,r.yg)("thead",{parentName:"table"},(0,r.yg)("tr",{parentName:"thead"},(0,r.yg)("th",{parentName:"tr",align:null},"Param"),(0,r.yg)("th",{parentName:"tr",align:null},"Type"),(0,r.yg)("th",{parentName:"tr",align:null},"Description"))),(0,r.yg)("tbody",{parentName:"table"},(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"type"),(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("code",null,"string")),(0,r.yg)("td",{parentName:"tr",align:null},"The profile id for the resource variant")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"props"),(0,r.yg)("td",{parentName:"tr",align:null}),(0,r.yg)("td",{parentName:"tr",align:null},"Properties to apply to the resource")))),(0,r.yg)("hr",null),(0,r.yg)("h3",{id:"builders_practitioner"},"builders.practitioner"),(0,r.yg)("p",null,(0,r.yg)("code",null,"practitioner(type, props)")),(0,r.yg)("p",null,"Create a FHIR Practitioner resource."),(0,r.yg)("table",null,(0,r.yg)("thead",{parentName:"table"},(0,r.yg)("tr",{parentName:"thead"},(0,r.yg)("th",{parentName:"tr",align:null},"Param"),(0,r.yg)("th",{parentName:"tr",align:null},"Type"),(0,r.yg)("th",{parentName:"tr",align:null},"Description"))),(0,r.yg)("tbody",{parentName:"table"},(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"type"),(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("code",null,"string")),(0,r.yg)("td",{parentName:"tr",align:null},"The profile id for the resource variant")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"props"),(0,r.yg)("td",{parentName:"tr",align:null}),(0,r.yg)("td",{parentName:"tr",align:null},"Properties to apply to the resource")))),(0,r.yg)("hr",null),(0,r.yg)("h3",{id:"builders_practitionerRole"},"builders.practitionerRole"),(0,r.yg)("p",null,(0,r.yg)("code",null,"practitionerRole(type, props)")),(0,r.yg)("p",null,"Create a FHIR PractitionerRole resource."),(0,r.yg)("table",null,(0,r.yg)("thead",{parentName:"table"},(0,r.yg)("tr",{parentName:"thead"},(0,r.yg)("th",{parentName:"tr",align:null},"Param"),(0,r.yg)("th",{parentName:"tr",align:null},"Type"),(0,r.yg)("th",{parentName:"tr",align:null},"Description"))),(0,r.yg)("tbody",{parentName:"table"},(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"type"),(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("code",null,"string")),(0,r.yg)("td",{parentName:"tr",align:null},"The profile id for the resource variant")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"props"),(0,r.yg)("td",{parentName:"tr",align:null}),(0,r.yg)("td",{parentName:"tr",align:null},"Properties to apply to the resource")))),(0,r.yg)("hr",null),(0,r.yg)("h3",{id:"builders_relatedPerson"},"builders.relatedPerson"),(0,r.yg)("p",null,(0,r.yg)("code",null,"relatedPerson(type, props)")),(0,r.yg)("p",null,"Create a FHIR RelatedPerson resource."),(0,r.yg)("table",null,(0,r.yg)("thead",{parentName:"table"},(0,r.yg)("tr",{parentName:"thead"},(0,r.yg)("th",{parentName:"tr",align:null},"Param"),(0,r.yg)("th",{parentName:"tr",align:null},"Type"),(0,r.yg)("th",{parentName:"tr",align:null},"Description"))),(0,r.yg)("tbody",{parentName:"table"},(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"type"),(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("code",null,"string")),(0,r.yg)("td",{parentName:"tr",align:null},"The profile id for the resource variant")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"props"),(0,r.yg)("td",{parentName:"tr",align:null}),(0,r.yg)("td",{parentName:"tr",align:null},"Properties to apply to the resource")))),(0,r.yg)("hr",null),(0,r.yg)("h3",{id:"builders_schedule"},"builders.schedule"),(0,r.yg)("p",null,(0,r.yg)("code",null,"schedule(type, props)")),(0,r.yg)("p",null,"Create a FHIR Schedule resource."),(0,r.yg)("table",null,(0,r.yg)("thead",{parentName:"table"},(0,r.yg)("tr",{parentName:"thead"},(0,r.yg)("th",{parentName:"tr",align:null},"Param"),(0,r.yg)("th",{parentName:"tr",align:null},"Type"),(0,r.yg)("th",{parentName:"tr",align:null},"Description"))),(0,r.yg)("tbody",{parentName:"table"},(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"type"),(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("code",null,"string")),(0,r.yg)("td",{parentName:"tr",align:null},"The profile id for the resource variant")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"props"),(0,r.yg)("td",{parentName:"tr",align:null}),(0,r.yg)("td",{parentName:"tr",align:null},"Properties to apply to the resource")))),(0,r.yg)("hr",null),(0,r.yg)("h3",{id:"builders_slot"},"builders.slot"),(0,r.yg)("p",null,(0,r.yg)("code",null,"slot(type, props)")),(0,r.yg)("p",null,"Create a FHIR Slot resource."),(0,r.yg)("table",null,(0,r.yg)("thead",{parentName:"table"},(0,r.yg)("tr",{parentName:"thead"},(0,r.yg)("th",{parentName:"tr",align:null},"Param"),(0,r.yg)("th",{parentName:"tr",align:null},"Type"),(0,r.yg)("th",{parentName:"tr",align:null},"Description"))),(0,r.yg)("tbody",{parentName:"table"},(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"type"),(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("code",null,"string")),(0,r.yg)("td",{parentName:"tr",align:null},"The profile id for the resource variant")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"props"),(0,r.yg)("td",{parentName:"tr",align:null}),(0,r.yg)("td",{parentName:"tr",align:null},"Properties to apply to the resource")))),(0,r.yg)("hr",null))}d.isMDXComponent=!0},15680:(e,t,a)=>{a.d(t,{xA:()=>u,yg:()=>m});var l=a(96540);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function n(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);t&&(l=l.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,l)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?n(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):n(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function g(e,t){if(null==e)return{};var a,l,r=function(e,t){if(null==e)return{};var a,l,r={},n=Object.keys(e);for(l=0;l<n.length;l++)a=n[l],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(l=0;l<n.length;l++)a=n[l],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var p=l.createContext({}),y=function(e){var t=l.useContext(p),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},u=function(e){var t=y(e.components);return l.createElement(p.Provider,{value:t},e.children)},o="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return l.createElement(l.Fragment,{},t)}},s=l.forwardRef((function(e,t){var a=e.components,r=e.mdxType,n=e.originalType,p=e.parentName,u=g(e,["components","mdxType","originalType","parentName"]),o=y(a),s=r,m=o["".concat(p,".").concat(s)]||o[s]||d[s]||n;return a?l.createElement(m,i(i({ref:t},u),{},{components:a})):l.createElement(m,i({ref:t},u))}));function m(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var n=a.length,i=new Array(n);i[0]=s;var g={};for(var p in t)hasOwnProperty.call(t,p)&&(g[p]=t[p]);g.originalType=e,g[o]="string"==typeof e?e:r,i[1]=g;for(var y=2;y<n;y++)i[y]=a[y];return l.createElement.apply(null,i)}return l.createElement.apply(null,a)}s.displayName="MDXCreateElement"}}]);