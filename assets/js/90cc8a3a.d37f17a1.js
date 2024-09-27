"use strict";(self.webpackChunk_openfn_docs=self.webpackChunk_openfn_docs||[]).push([[13131],{83458:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>c,frontMatter:()=>i,metadata:()=>s,toc:()=>p});var r=n(58168),a=(n(96540),n(15680));const i={title:"fhir-ndr-et developer readme",id:"fhir-ndr-et-readme",keywords:["adaptor","readme","fhir-ndr-et"]},o="fhir-ndr-et Adaptor developer README.md",s={unversionedId:"packages/fhir-ndr-et-readme",id:"packages/fhir-ndr-et-readme",title:"fhir-ndr-et developer readme",description:"Source//github.com/OpenFn/adaptors/tree/main/packages/fhir-ndr-et",source:"@site/adaptors/packages/fhir-ndr-et-readme.md",sourceDirName:"packages",slug:"/packages/fhir-ndr-et-readme",permalink:"/adaptors/packages/fhir-ndr-et-readme",draft:!1,tags:[],version:"current",frontMatter:{title:"fhir-ndr-et developer readme",id:"fhir-ndr-et-readme",keywords:["adaptor","readme","fhir-ndr-et"]},sidebar:"adaptors",previous:{title:"fhir-ndr-et changelog",permalink:"/adaptors/packages/fhir-ndr-et-changelog"},next:{title:"Go.Data",permalink:"/adaptors/godata"}},l={},p=[{value:"Documentation",id:"documentation",level:2},{value:"Configuration",id:"configuration",level:3},{value:"Building",id:"building",level:2},{value:"How to use",id:"how-to-use",level:2},{value:"Code Generation",id:"code-generation",level:2},{value:"Development",id:"development",level:2}],d={toc:p},u="wrapper";function c(e){let{components:t,...n}=e;return(0,a.yg)(u,(0,r.A)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,a.yg)("h1",{id:"fhir-ndr-et-adaptor-developer-readmemd"},"fhir-ndr-et Adaptor developer README.md"),(0,a.yg)("p",null,"Source: ",(0,a.yg)("a",{parentName:"p",href:"https://github.com/OpenFn/adaptors/tree/main/packages/fhir-ndr-et"},"https://github.com/OpenFn/adaptors/tree/main/packages/fhir-ndr-et")),(0,a.yg)("h1",{id:"language-fhir-ndr-et-"},"language-fhir-ndr-et ",(0,a.yg)("img",{src:"./assets/square.png",width:"30",height:"30"})),(0,a.yg)("p",null,"An OpenFn ",(0,a.yg)("strong",{parentName:"p"},(0,a.yg)("em",{parentName:"strong"},"adaptor"))," for building integration jobs for use with the FHIR API\nfor NDR Ethopia."),(0,a.yg)("h2",{id:"documentation"},"Documentation"),(0,a.yg)("p",null,"This adaptor is largely auto-generated from the spec at\n",(0,a.yg)("a",{parentName:"p",href:"https://build.fhir.org/ig/jembi/ethiopia-hiv/branches/master/definitions.json.zip"},"https://build.fhir.org/ig/jembi/ethiopia-hiv/branches/master/definitions.json.zip"),".\nSee below for more details about that."),(0,a.yg)("p",null,"We ",(0,a.yg)("strong",{parentName:"p"},"strongly")," recommend not editing generated source files by hand! Better to\nupdate the spec, mappings, or code generation rules. Otherwise your changes will\nbe lost."),(0,a.yg)("p",null,"View the ",(0,a.yg)("a",{parentName:"p",href:"https://docs.openfn.org/adaptors/packages/fhir-ndr-et-docs"},"docs site"),"\nfor full technical documentation."),(0,a.yg)("h3",{id:"configuration"},"Configuration"),(0,a.yg)("p",null,"View the\n",(0,a.yg)("a",{parentName:"p",href:"https://docs.openfn.org/adaptors/packages/fhir-ndr-et-configuration-schema/"},"configuration-schema"),"\nfor required and optional ",(0,a.yg)("inlineCode",{parentName:"p"},"configuration")," properties."),(0,a.yg)("h2",{id:"building"},"Building"),(0,a.yg)("p",null,"To generate the adaptor source, run ",(0,a.yg)("inlineCode",{parentName:"p"},"pnpm build:src"),". This will generate the\nbuilder functions and typings, but not generate all the other adaptor stuff,\nlike docs and dist."),(0,a.yg)("p",null,"Run ",(0,a.yg)("inlineCode",{parentName:"p"},"pnpm build")," to generate source AND build the actual adaptor."),(0,a.yg)("p",null,'The first time the source build runs, a new "spec" file will be downloaded. To\nforce a new download (ie to update the spec) delete ',(0,a.yg)("inlineCode",{parentName:"p"},"./spec/spec.json")),(0,a.yg)("h2",{id:"how-to-use"},"How to use"),(0,a.yg)("p",null,"This adaptor provides a bunch of helper functions to create FHIR resources in\nthe right structure."),(0,a.yg)("p",null,"Use ",(0,a.yg)("inlineCode",{parentName:"p"},"builders.*")," (or ",(0,a.yg)("inlineCode",{parentName:"p"},"b.*")," for short) namespace to create resource types, like\nthis:"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre"},"fn(() => {\n  const encounter = builders.encounter('target-facility-encounter', {\n    id,\n    /* add props as needed */\n  });\n})\n")),(0,a.yg)("p",null,"All supported resource types have a main function on the ",(0,a.yg)("inlineCode",{parentName:"p"},"builders")," object. The\nfirst argument is the profile id for that resource, the second is JSON data to\ndefine the resource."),(0,a.yg)("p",null,"Code assist is available in Lightning for profile ids - just hit ctrl + space to\nbring up the list. It's also available in VSC (see the\n",(0,a.yg)("a",{parentName:"p",href:"https://github.com/OpenFn/adaptors/wiki/How-to-get-code-assist-for-adaptors-in-VSC"},"Wiki article"),")"),(0,a.yg)("p",null,"The json object is designed to be smart and do stuff like generate references\nautomatically, or map typed keys like effective -> effectiveDateTime."),(0,a.yg)("p",null,"Typescript and documentation should help here although work is needed on this\nstuff. The design is to give it a sensible value and trust it to do the right\nthing."),(0,a.yg)("p",null,"See Resources.tests.js for some examples of creating the supported resources\nfrom inputs."),(0,a.yg)("p",null,"As well as the builders, the adaptor also exports util functions to make it a\nbit easier to create references, codeableconcepts, codings and so on."),(0,a.yg)("p",null,"So you can do stuff like this:"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-js"},"fn(() => {\n  const encounter = builders.encounter('target-facility-encounter', {\n    id,\n    subject: util.reference('some-resource-id'),\n    class: util.coding([value, system]),\n  });\n});\n")),(0,a.yg)("h2",{id:"code-generation"},"Code Generation"),(0,a.yg)("p",null,"A number of files in ",(0,a.yg)("inlineCode",{parentName:"p"},"src")," are auto-generated (you can tell because they have a\nnice clear comment up at the top)."),(0,a.yg)("p",null,"The build logic is all handled in the ",(0,a.yg)("inlineCode",{parentName:"p"},"build/")," folder."),(0,a.yg)("p",null,"Here is roughly how the code generation works."),(0,a.yg)("p",null,"The objective is to read in the snapshot definition of all the fhir resources in\nthe destination system, and for each resource type that we're interested in,\ngenerate a) an easy-to-use builder function and b) a list of typescript\ndefinitions to match it."),(0,a.yg)("p",null,"First, we check to see whether ",(0,a.yg)("inlineCode",{parentName:"p"},"./spec/spec.json")," exists if it does not,\ndownload it!"),(0,a.yg)("p",null,"Then we load this spec.json into memory. It's a large complex file so we break\nit down into a simpler JSON representation which we call a schema."),(0,a.yg)("p",null,"The schema contains a simple expression of rules that our builder function will\nneed to apply. It looks a bit like this:"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-json"},'{\n  "id": "arv-regimen-medication",\n  "type": "Medication",\n  "url": "http://moh.gov.et/fhir/hiv/StructureDefinition/arv-regimen-medication",\n  "props": {\n    "id": {\n      "type": "string",\n      "isArray": false,\n      "desc": "Logical id of this artifact",\n      "isComposite": false,\n      "defaults": {}\n    }\n    // ...\n  }\n}\n')),(0,a.yg)("p",null,"This tells us for exaple that an arv-regimen-medication has a property called\n",(0,a.yg)("inlineCode",{parentName:"p"},"id"),", which is a type string. So our builder function will need to handle that."),(0,a.yg)("p",null,"We only generate a simple schema for the resource types we're interested in.\nThat's controlled by a file called ",(0,a.yg)("inlineCode",{parentName:"p"},"./build/mappings.ts"),". The mappings has two\njobs:"),(0,a.yg)("ol",null,(0,a.yg)("li",{parentName:"ol"},"Specific which resource types to generate builder functions for"),(0,a.yg)("li",{parentName:"ol"},"Provide manual override rules for those builders. This lets us provide\nspecial mappings on keys for example, or provide defaults if the schema is\nmissing some information.")),(0,a.yg)("p",null,"So now we've generated simple schema objects for the resource types we're\ninterested in."),(0,a.yg)("p",null,"Next we generate the builder functions. We use a library call ",(0,a.yg)("inlineCode",{parentName:"p"},"ast-types")," to\nhelp us do this. Mostly we build an AST tree directly - that is, we\nprogrammatically define the structure of the code using a neat API. And from\nthis structure we generate code strings with nice formatting."),(0,a.yg)("p",null,"This keeps our code generation nice and robust. The API ensures that the\ngenerated code is syntactically valid, and throws errors if we ask it do do\nsomething illegal - like nest a statement inside the condition of an\nif-statement. If we were generating strings directly, we'd have to be very\ncareful about things like typos and couldn't apply smart transformations to the\ncode."),(0,a.yg)("p",null,"Using the schema information and mapping overrides, we generate code statements\nto take the input data passed as the second argument, and apply it smartly to a\nnew FHIR resource, which we finally return. We lean heavily on the util\nfunctions in ",(0,a.yg)("inlineCode",{parentName:"p"},"src/utils.js")," to simplify this."),(0,a.yg)("p",null,"Once we've got our code, we have to generate matching TypeScript definitions for\neach builder. This ensures that we get code assist and intellisense on our\ngenerated functions, making the builders much safer and easier to use."),(0,a.yg)("p",null,"We use the TypeScript compiler to do this, just like how we use ",(0,a.yg)("inlineCode",{parentName:"p"},"ast-types")," to\ngenerate the code (although it has to be said that the TypeScript compiler has a\nway less nice API)."),(0,a.yg)("p",null,"Once finished, generated files are written into ",(0,a.yg)("inlineCode",{parentName:"p"},"src/"),", where they can be\ntested."),(0,a.yg)("h2",{id:"development"},"Development"),(0,a.yg)("p",null,"Clone the ",(0,a.yg)("a",{parentName:"p",href:"https://github.com/OpenFn/adaptors"},"adaptors monorepo"),'. Follow the\n"Getting Started" guide inside to get set up.'),(0,a.yg)("p",null,"Run tests using ",(0,a.yg)("inlineCode",{parentName:"p"},"pnpm run test")," or ",(0,a.yg)("inlineCode",{parentName:"p"},"pnpm run test:watch")),(0,a.yg)("p",null,"Build the project using ",(0,a.yg)("inlineCode",{parentName:"p"},"pnpm build"),"."),(0,a.yg)("p",null,"To build ",(0,a.yg)("em",{parentName:"p"},"only")," the docs run ",(0,a.yg)("inlineCode",{parentName:"p"},"pnpm build docs"),"."))}c.isMDXComponent=!0},15680:(e,t,n)=>{n.d(t,{xA:()=>d,yg:()=>h});var r=n(96540);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),p=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},d=function(e){var t=p(e.components);return r.createElement(l.Provider,{value:t},e.children)},u="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},g=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,l=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),u=p(n),g=a,h=u["".concat(l,".").concat(g)]||u[g]||c[g]||i;return n?r.createElement(h,o(o({ref:t},d),{},{components:n})):r.createElement(h,o({ref:t},d))}));function h(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=g;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[u]="string"==typeof e?e:a,o[1]=s;for(var p=2;p<i;p++)o[p]=n[p];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}g.displayName="MDXCreateElement"}}]);