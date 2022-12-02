"use strict";(self.webpackChunk_openfn_docs=self.webpackChunk_openfn_docs||[]).push([[5099],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>b});var a=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=a.createContext({}),p=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},u=function(e){var t=p(e.components);return a.createElement(l.Provider,{value:t},e.children)},c="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,r=e.originalType,l=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),c=p(n),m=o,b=c["".concat(l,".").concat(m)]||c[m]||d[m]||r;return n?a.createElement(b,s(s({ref:t},u),{},{components:n})):a.createElement(b,s({ref:t},u))}));function b(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=n.length,s=new Array(r);s[0]=m;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i[c]="string"==typeof e?e:o,s[1]=i;for(var p=2;p<r;p++)s[p]=n[p];return a.createElement.apply(null,s)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},15097:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>s,default:()=>c,frontMatter:()=>r,metadata:()=>i,toc:()=>p});var a=n(87462),o=(n(67294),n(3905));const r={title:"Extract Kobo data from API to send to OpenFn Inbox",sidebar_label:"\ud83d\udcdc Extract Kobo data from API to send to OpenFn Inbox",id:"getKoboData",keywords:["library","job","expression","http","alterState","dataPath","each","get","map","post"]},s=void 0,i={unversionedId:"library/jobs/auto/getKoboData",id:"library/jobs/auto/getKoboData",title:"Extract Kobo data from API to send to OpenFn Inbox",description:"\ud83d\udcdc This job is an official example from OpenFn.",source:"@site/adaptors/library/jobs/auto/getKoboData.md",sourceDirName:"library/jobs/auto",slug:"/library/jobs/auto/getKoboData",permalink:"/adaptors/library/jobs/auto/getKoboData",draft:!1,tags:[],version:"current",frontMatter:{title:"Extract Kobo data from API to send to OpenFn Inbox",sidebar_label:"\ud83d\udcdc Extract Kobo data from API to send to OpenFn Inbox",id:"getKoboData",keywords:["library","job","expression","http","alterState","dataPath","each","get","map","post"]},sidebar:"adaptors",previous:{title:"http@4.2.3",permalink:"/adaptors/packages/http-docs"},next:{title:"\ud83d\udcdc Using async and array.map",permalink:"/adaptors/library/jobs/auto/async-and-array-dot-map"}},l={},p=[{value:"Metadata",id:"metadata",level:2},{value:"Key Functions",id:"key-functions",level:2},{value:"Expression",id:"expression",level:2}],u={toc:p};function c(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,a.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"\ud83d\udcdc ",(0,o.kt)("em",null,"This job is an official example from OpenFn.")),(0,o.kt)("h2",{id:"metadata"},"Metadata"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Name: Extract Kobo data from API to send to OpenFn Inbox"),(0,o.kt)("li",{parentName:"ul"},"Adaptor: ",(0,o.kt)("a",{parentName:"li",href:"https://www.github.com/openfn/language-http"},(0,o.kt)("inlineCode",{parentName:"a"},"@openfn/language-http"))),(0,o.kt)("li",{parentName:"ul"},"Adaptor Version: ",(0,o.kt)("a",{parentName:"li",href:"https://www.github.com/openfn/language-http/releases/tag/v3.1.7"},(0,o.kt)("inlineCode",{parentName:"a"},"v3.1.7"))),(0,o.kt)("li",{parentName:"ul"},"Created date unknown"),(0,o.kt)("li",{parentName:"ul"},"Updated date unknown"),(0,o.kt)("li",{parentName:"ul"},"Score: ",(0,o.kt)("b",null,"100")," (an ",(0,o.kt)("a",{parentName:"li",href:"/adaptors/library/#library-scores"},"indicator")," of how useful this job may be)")),(0,o.kt)("h2",{id:"key-functions"},"Key Functions"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"alterState"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"dataPath"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"each"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"get"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"map"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"post")),(0,o.kt)("h2",{id:"expression"},"Expression"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"//Sample job to get Kobo data and post back to OpenFn Inbox\nalterState(state => {\n  console.log(`Started at: ${new Date().toISOString()}`);\n  state.submissions = [];\n  state.data = {\n    surveys: [\n      // =========================================================================\n      //== TODO: Specify new forms to fetch here, including the Kobo form id, tag, name, and owner ==//\n      { id: 'aijj9FSpuCzMTRnMPGike8', tag: 'nrgt_historical', name: 'NRGT Makira 2017 - Test OpenFn', owner: 'bns' }, // example\n      //consider listing multiple forms\n      // =========================================================================\n     \n    ].map(survey => ({\n      formId: survey.id,\n      tag: survey.tag,\n      name: survey.name, \n      owner: survey.owner,\n      url: `https://kf.kobotoolbox.org/api/v2/assets/${survey.id}/data/?format=json`,\n    })),\n  };\n  console.log(`Fetching data for ${state.data.surveys.length} surveys.`);\n  return state;\n});\n\neach(dataPath('surveys[*]'), state => {\n  const { url, tag, formId, name, owner } = state.data;\n  return get(url, {}, state => {\n    state.data.submissions = state.data.results.map((submission, i) => {\n      return {\n        i,\n        // Here we append the tags defined above to the Kobo form submission data\n        form: tag,\n        formName: name, \n        formOwner: owner,\n        body: submission,\n      };\n    });\n    const count = state.data.submissions.length;\n    console.log(`Fetched ${count} submissions from ${formId} (${tag}).`);\n    //Once we fetch the data, we want to post each individual Kobo survey\n    //back to the OpenFn inbox to run through the jobs\n    return each(dataPath('submissions[*]'), state => {\n      console.log(`Posting ${state.data.i + 1} of ${count}...`);\n       // =========================================================================\n       //== TODO: replace openfnInboxUrl with your OpenFn Project Inbox URL ====//\n      return post(openfnInboxUrl, { body: state => state.data })(state);\n    })(state);\n    // =========================================================================\n  })(state);\n});\n\nalterState(state => {\n  console.log(`Finished at: ${new Date().toISOString()}`);\n  return {\n    data: {\n      message: \"No cursor required. Job fetches all submission for given forms.\"\n    },\n    references: []\n  };\n});\n\n")))}c.isMDXComponent=!0}}]);