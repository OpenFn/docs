"use strict";(self.webpackChunk_openfn_docs=self.webpackChunk_openfn_docs||[]).push([[32107],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>f});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),c=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=c(e.components);return r.createElement(l.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),u=c(n),m=a,f=u["".concat(l,".").concat(m)]||u[m]||d[m]||o;return n?r.createElement(f,i(i({ref:t},p),{},{components:n})):r.createElement(f,i({ref:t},p))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=m;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[u]="string"==typeof e?e:a,i[1]=s;for(var c=2;c<o;c++)i[c]=n[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},82450:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>d,frontMatter:()=>o,metadata:()=>s,toc:()=>c});var r=n(87462),a=(n(67294),n(3905));const o={title:"Fetch Claims",sidebar_label:"Fetch Claims",id:"Fetch-Claims-2023-07-17",keywords:["library","job","expression","http","create","get","map","JSON"]},i=void 0,s={unversionedId:"library/jobs/auto/Fetch-Claims-2023-07-17",id:"library/jobs/auto/Fetch-Claims-2023-07-17",title:"Fetch Claims",description:"This job was provided by an OpenFn.org user via the job library API.",source:"@site/adaptors/library/jobs/auto/Fetch-Claims-2023-07-17.md",sourceDirName:"library/jobs/auto",slug:"/library/jobs/auto/Fetch-Claims-2023-07-17",permalink:"/fr/adaptors/library/jobs/auto/Fetch-Claims-2023-07-17",draft:!1,tags:[],version:"current",frontMatter:{title:"Fetch Claims",sidebar_label:"Fetch Claims",id:"Fetch-Claims-2023-07-17",keywords:["library","job","expression","http","create","get","map","JSON"]},sidebar:"adaptors",previous:{title:"\u2728 WF3-1. Bulk get Person Visit cases",permalink:"/fr/adaptors/library/jobs/auto/WF3-1-Bulk-get-Person-Visit-cases-2023-05-19"},next:{title:"no return",permalink:"/fr/adaptors/library/jobs/auto/no-return-2023-01-06"}},l={},c=[{value:"Metadata",id:"metadata",level:2},{value:"Key Functions",id:"key-functions",level:2},{value:"Expression",id:"expression",level:2}],p={toc:c},u="wrapper";function d(e){let{components:t,...n}=e;return(0,a.kt)(u,(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("em",null,"This job was provided by an OpenFn.org user via the job library API."),(0,a.kt)("h2",{id:"metadata"},"Metadata"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Name: Fetch Claims"),(0,a.kt)("li",{parentName:"ul"},"Adaptor: ",(0,a.kt)("a",{parentName:"li",href:"https://www.github.com/openfn/language-http"},(0,a.kt)("inlineCode",{parentName:"a"},"@openfn/language-http"))),(0,a.kt)("li",{parentName:"ul"},"Adaptor Version: ",(0,a.kt)("a",{parentName:"li",href:"https://www.github.com/openfn/language-http/releases/tag/v5.0.1"},(0,a.kt)("inlineCode",{parentName:"a"},"v5.0.1"))),(0,a.kt)("li",{parentName:"ul"},"Created 3 months ago"),(0,a.kt)("li",{parentName:"ul"},"Updated 3 months ago"),(0,a.kt)("li",{parentName:"ul"},"Score: ",(0,a.kt)("b",null,"63")," (an ",(0,a.kt)("a",{parentName:"li",href:"/adaptors/library/#library-scores"},"indicator")," of how useful this job may be)")),(0,a.kt)("h2",{id:"key-functions"},"Key Functions"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"create"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"get"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"map"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"JSON")),(0,a.kt)("h2",{id:"expression"},"Expression"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"// establish a baseline for the cursor\nfn(state => {\n  const today = new Date().toISOString().split('T')[0];\n  console.log(\n    `Fetching all claims updated on or after ${state.cursor || '2023-07-19'}`\n  );\n  return { ...state, today };\n});\n\n// Get claims and related patients from HAPI, updated since cursor date\nget(\n  'Claim',\n  {\n    query: {\n      _lastUpdated: `ge${state.cursor || '2023-07-19'}`,\n      _include: 'Claim:patient',\n      _sort: '-_lastUpdated',\n      _count: 200,\n    },\n  },\n  next => {\n    if (next.data.total == 0)\n      return { ...next, data: { claims: [], patients: [] } };\n\n    const byType = next.data.entry.reduce((r, a) => {\n      r[a.resource.resourceType] = r[a.resource.resourceType] || [];\n      r[a.resource.resourceType].push(a);\n      return r;\n    }, Object.create(null));\n\n    return {\n      ...next,\n      data: {\n        claims: byType.Claim,\n        patients: byType.Patient,\n      },\n    };\n  }\n);\n\n// clean and merge data\nfn(state => {\n  const { claims, patients } = state.data;\n\n  // Noisy logs to help debug data quality issues\n  claims.forEach(c => {\n    const { resource } = c;\n    if (!resource.id) console.log('claim', resource.id, 'has no id');\n    if (!resource.item) {\n      console.log('claim', resource.id, 'has no item');\n    } else if (!resource.item[0].productOrService.coding) {\n      console.log('claim', resource.id, 'has no coding');\n    }\n\n    if (!resource.patient.reference.split('/')[1])\n      console.log('claim', resource.id, 'has no patient');\n  });\n\n  const patientsWithClaims = patients\n    // drop all patients without identifiers\n    .filter(p => p.resource.identifier)\n    .map(p => ({\n      ...p,\n      claims: claims.filter(c => {\n        return (\n          // has item\n          c.resource.item &&\n          // has coding\n          c.resource.item[0].productOrService.coding &&\n          // for this patient\n          p.resource.id == c.resource.patient.reference.split('/')[1]\n        );\n      }),\n    }));\n\n  return { ...state, data: { patientsWithClaims } };\n});\n\n// print some logs and update the cursor for next time\nfn(state => {\n  const { data, today } = state;\n\n  console.log('Found the following patients and claims in FHIR:');\n  console.log(\n    JSON.stringify(\n      data.patientsWithClaims.map(p => ({\n        patient: p.resource.id,\n        claims: p.claims.map(c => c.resource.id),\n      })),\n      null,\n      2\n    )\n  );\n\n  return { data: state.data, cursor: today };\n});\n\n")))}d.isMDXComponent=!0}}]);