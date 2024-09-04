"use strict";(self.webpackChunk_openfn_docs=self.webpackChunk_openfn_docs||[]).push([[38991],{60616:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>d,frontMatter:()=>o,metadata:()=>s,toc:()=>c});var a=n(58168),r=(n(96540),n(15680));const o={title:"Load to DHIS2",sidebar_label:"Load to DHIS2",id:"Load-to-DHIS2-2023-07-17",keywords:["library","job","expression","dhis2","create","get","join","map","async"]},i=void 0,s={unversionedId:"library/jobs/auto/Load-to-DHIS2-2023-07-17",id:"library/jobs/auto/Load-to-DHIS2-2023-07-17",title:"Load to DHIS2",description:"This job was provided by an OpenFn.org user via the job library API.",source:"@site/adaptors/library/jobs/auto/Load-to-DHIS2-2023-07-17.md",sourceDirName:"library/jobs/auto",slug:"/library/jobs/auto/Load-to-DHIS2-2023-07-17",permalink:"/adaptors/library/jobs/auto/Load-to-DHIS2-2023-07-17",draft:!1,tags:[],version:"current",frontMatter:{title:"Load to DHIS2",sidebar_label:"Load to DHIS2",id:"Load-to-DHIS2-2023-07-17",keywords:["library","job","expression","dhis2","create","get","join","map","async"]},sidebar:"adaptors",previous:{title:"\ud83d\udcdc Add events",permalink:"/adaptors/library/jobs/auto/DHIS2-Events-API"},next:{title:"DHIS2 Events",permalink:"/adaptors/library/jobs/auto/DHIS2-Events-2016-01-27"}},l={},c=[{value:"Metadata",id:"metadata",level:2},{value:"Key Functions",id:"key-functions",level:2},{value:"Expression",id:"expression",level:2}],p={toc:c},u="wrapper";function d(e){let{components:t,...n}=e;return(0,r.yg)(u,(0,a.A)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,r.yg)("em",null,"This job was provided by an OpenFn.org user via the job library API."),(0,r.yg)("h2",{id:"metadata"},"Metadata"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},"Name: Load to DHIS2"),(0,r.yg)("li",{parentName:"ul"},"Adaptor: ",(0,r.yg)("a",{parentName:"li",href:"https://www.github.com/openfn/language-dhis2"},(0,r.yg)("inlineCode",{parentName:"a"},"@openfn/language-dhis2"))),(0,r.yg)("li",{parentName:"ul"},"Adaptor Version: ",(0,r.yg)("a",{parentName:"li",href:"https://www.github.com/openfn/language-dhis2/releases/tag/v3.2.11"},(0,r.yg)("inlineCode",{parentName:"a"},"v3.2.11"))),(0,r.yg)("li",{parentName:"ul"},"Created about 1 year ago"),(0,r.yg)("li",{parentName:"ul"},"Updated 8 days ago"),(0,r.yg)("li",{parentName:"ul"},"Score: ",(0,r.yg)("b",null,"0")," (an ",(0,r.yg)("a",{parentName:"li",href:"/adaptors/library/#library-scores"},"indicator")," of how useful this job may be)")),(0,r.yg)("h2",{id:"key-functions"},"Key Functions"),(0,r.yg)("p",null,(0,r.yg)("inlineCode",{parentName:"p"},"create"),", ",(0,r.yg)("inlineCode",{parentName:"p"},"get"),", ",(0,r.yg)("inlineCode",{parentName:"p"},"join"),", ",(0,r.yg)("inlineCode",{parentName:"p"},"map"),", ",(0,r.yg)("inlineCode",{parentName:"p"},"async")),(0,r.yg)("h2",{id:"expression"},"Expression"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-js"},"// build and log nested dhis2 records\nfn(state => {\n  const { patientsWithClaims } = state.data;\n  const today = new Date().toISOString().split('T')[0];\n\n  const teis = patientsWithClaims.map(p => {\n    const patient = p.resource;\n    const claims = p.claims;\n    const treatments = claims\n      .map(c => c.resource.item[0])\n      .map(t => t.productOrService.coding[0].display)\n      .join('; ');\n\n    const enrollments = claims.map(c => {\n      const claim = c.resource;\n      const display = claim.insurance && claim.insurance[0].coverage.display;\n\n      const oclMapping = {\n        PARN: 'GMfuAqBFS1g',\n        'Programme Vaccination': 'GMfuAqBFS1g',\n        'Sant\xe9 Maternelle': 'wBUDpZSS4Bh',\n      };\n\n      console.log(\n        `We could use OCL to map \"${display}\" to \"${\n          oclMapping[display] || 'q5Qyv66pIAI (mTOMADY Other)'\n        }\"`\n      );\n\n      return {\n        orgUnit: 'KUVJPjmUmWc',\n        program: oclMapping[display] || 'q5Qyv66pIAI',\n        status: 'ACTIVE', // active\n        enrolledAt: today,\n        occurredAt: today,\n      };\n    });\n\n    return {\n      orgUnit: 'KUVJPjmUmWc', // Madagascar\n      trackedEntityType: 'x5fZpgCyv50', // Patient\n      attributes: [\n        { attribute: 'rDeWj9yYtzv', value: patient.identifier[0].value },\n        { attribute: 'E4f4wBsDVgR', value: patient.name[0].family },\n        { attribute: 'Fz33peSkK1I', value: patient.name[0].given[0] },\n        {\n          attribute: 'POCXiJxpYX1',\n          value: `${treatments}`,\n        },\n        { attribute: 'dA6ShmrHmhk', value: patient.birthDate },\n        { attribute: 'mWOlfweGigO', value: patient.gender },\n      ],\n      enrollments: enrollments,\n    };\n  });\n\n  return { ...state, teis };\n});\n\n// get current TEIs\nget('tracker/trackedEntities', {\n  orgUnit: 'KUVJPjmUmWc',\n  trackedEntityType: 'x5fZpgCyv50',\n});\n\n// create upsertable array\nfn(state => {\n  const { configuration, teis } = state;\n  const existing = state.data.instances;\n\n  const createable = [];\n  const updateable = [];\n\n  teis.forEach(t => {\n    const match = existing.find(e => {\n      const idAttr = e.attributes.find(a => a.displayName == 'Unique ID');\n      return idAttr && idAttr.value == t.attributes[0].value;\n    });\n\n    if (match) {\n      const enrollments =\n        (match.enrollments && match.enrollments.concat(t.enrollments)) ||\n        t.enrollments;\n\n      updateable.push({ ...match, ...t, enrollments });\n    } else {\n      createable.push(t);\n    }\n  });\n\n  console.log(`${updateable.length} to update; ${createable.length} to create`);\n  const trackedEntities = [...createable, ...updateable];\n\n  return { configuration, trackedEntities, references: [] };\n});\n\n// send data to DHIS2\ncreate('tracker', state => ({ trackedEntities: state.trackedEntities }), {\n  params: {\n    importStrategy: 'CREATE_AND_UPDATE',\n    atomicMode: 'OBJECT',\n    async: 'false',\n  },\n});\n\n")))}d.isMDXComponent=!0},15680:(e,t,n)=>{n.d(t,{xA:()=>p,yg:()=>y});var a=n(96540);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=a.createContext({}),c=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=c(e.components);return a.createElement(l.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),u=c(n),m=r,y=u["".concat(l,".").concat(m)]||u[m]||d[m]||o;return n?a.createElement(y,i(i({ref:t},p),{},{components:n})):a.createElement(y,i({ref:t},p))}));function y(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=m;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[u]="string"==typeof e?e:r,i[1]=s;for(var c=2;c<o;c++)i[c]=n[c];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"}}]);