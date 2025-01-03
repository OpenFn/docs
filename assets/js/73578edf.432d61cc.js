"use strict";(self.webpackChunk_openfn_docs=self.webpackChunk_openfn_docs||[]).push([[80614],{32464:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>i,contentTitle:()=>s,default:()=>d,frontMatter:()=>o,metadata:()=>l,toc:()=>u});var a=n(58168),r=(n(96540),n(15680));const o={title:"WF4-1 Bulk get Referral Cases",sidebar_label:"\u2728 WF4-1 Bulk get Referral Cases",id:"WF4-1-Bulk-get-Referral-Cases-2023-05-19",keywords:["library","job","expression","http","each","get","map"]},s=void 0,l={unversionedId:"library/jobs/auto/WF4-1-Bulk-get-Referral-Cases-2023-05-19",id:"library/jobs/auto/WF4-1-Bulk-get-Referral-Cases-2023-05-19",title:"WF4-1 Bulk get Referral Cases",description:"This job was provided by an OpenFn.org user via the job library API.",source:"@site/adaptors/library/jobs/auto/WF4-1-Bulk-get-Referral-Cases-2023-05-19.md",sourceDirName:"library/jobs/auto",slug:"/library/jobs/auto/WF4-1-Bulk-get-Referral-Cases-2023-05-19",permalink:"/adaptors/library/jobs/auto/WF4-1-Bulk-get-Referral-Cases-2023-05-19",draft:!1,tags:[],version:"current",frontMatter:{title:"WF4-1 Bulk get Referral Cases",sidebar_label:"\u2728 WF4-1 Bulk get Referral Cases",id:"WF4-1-Bulk-get-Referral-Cases-2023-05-19",keywords:["library","job","expression","http","each","get","map"]},sidebar:"adaptors",previous:{title:"\u2728 WF1-1 Bulk get HH cases",permalink:"/adaptors/library/jobs/auto/WF1-1-Bulk-get-HH-cases-2023-05-19"},next:{title:"no return",permalink:"/adaptors/library/jobs/auto/no-return-2023-01-06"}},i={},u=[{value:"Metadata",id:"metadata",level:2},{value:"Key Functions",id:"key-functions",level:2},{value:"Expression",id:"expression",level:2}],c={toc:u},p="wrapper";function d(e){let{components:t,...n}=e;return(0,r.yg)(p,(0,a.A)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,r.yg)("em",null,"This job was provided by an OpenFn.org user via the job library API."),(0,r.yg)("h2",{id:"metadata"},"Metadata"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},"Name: WF4-1 Bulk get Referral Cases"),(0,r.yg)("li",{parentName:"ul"},"Adaptor: ",(0,r.yg)("a",{parentName:"li",href:"https://www.github.com/openfn/language-http"},(0,r.yg)("inlineCode",{parentName:"a"},"@openfn/language-http"))),(0,r.yg)("li",{parentName:"ul"},"Adaptor Version: ",(0,r.yg)("a",{parentName:"li",href:"https://www.github.com/openfn/language-http/releases/tag/v4.2.8"},(0,r.yg)("inlineCode",{parentName:"a"},"v4.2.8"))),(0,r.yg)("li",{parentName:"ul"},"Created over 1 year ago"),(0,r.yg)("li",{parentName:"ul"},"Updated 10 months ago"),(0,r.yg)("li",{parentName:"ul"},"Score: ",(0,r.yg)("b",null,"92")," (an ",(0,r.yg)("a",{parentName:"li",href:"/adaptors/library/#library-scores"},"indicator")," of how useful this job may be)")),(0,r.yg)("h2",{id:"key-functions"},"Key Functions"),(0,r.yg)("p",null,(0,r.yg)("inlineCode",{parentName:"p"},"each"),", ",(0,r.yg)("inlineCode",{parentName:"p"},"get"),", ",(0,r.yg)("inlineCode",{parentName:"p"},"map")),(0,r.yg)("h2",{id:"expression"},"Expression"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-js"},"fn(state => {\n  const { baseUrl } = state.configuration;\n\n  const caseTypes = ['Case'];\n\n  //NOTE: You can use 'limit' to modify this batch size as desired\n  const limit = 1000; //E.g., change to 10 to process records in smaller batch sizes\n\n  //NOTE: indexedOnStart is the default sync start data the FIRST time the job runs\n  const indexedOnStart = '2024-01-17T00:00:00';\n\n  //NOTE: After first job run, OpenFn will check the job sync data (\"lastRunAt\") to set as the indexedOnStart\n  const lastRunAt =\n    typeof state.lastRunAt !== 'undefined' ? state.lastRunAt : indexedOnStart;\n  console.log('Filtering cases with indexed_on_start > than ::', lastRunAt);\n\n  const queries = caseTypes.map(\n     t => `?type=${t}&indexed_on_start=${lastRunAt}&limit=${limit}`\n    //NOTE: If for testing, you want to fetch data for a specific historical range (e.g., between April 23 and 24)...\n    //...then use the query string below instead of the one above on L16, and custom adjust the index_on start/end dates\n    //t => `?type=${t}&indexed_on_start=2024-01-14T00:00:00&limit=${limit}&indexed_on_end=2024-01-16T23:59:59`\n  );\n\n  return { ...state, queries, baseUrl, payloads: [] };\n});\n\n// create a \"recursiveGet\" which will call itself if CommCare tells us there's\n// more data to fetch for the same form\nfn(state => {\n  const recursiveGet = url =>\n    get(\n      url,\n      {\n        headers: { 'content-type': 'application/json' },\n      },\n      nextState => {\n        const now = new Date();\n        const { baseUrl, data, payloads } = nextState;\n\n        const { meta, objects } = data;\n        console.log('Metadata in CommCare response:', meta);\n\n        const finalState = {\n          ...nextState,\n          payloads: [...payloads, ...objects],\n        };\n\n        if (meta.next) {\n          console.log('Next query detected, recursing...');\n          return recursiveGet(`${baseUrl}${meta.next}`)(finalState);\n        }\n        finalState.lastRunAt = now.toISOString().slice(0, 19);\n        return finalState;\n      }\n    );\n\n  return { ...state, recursiveGet };\n});\n\n// for each initial query, fetch data recursively\neach(\n  '$.queries[*]',\n  fn(state => {\n    return state.recursiveGet(`${state.baseUrl}${state.data}`)(state);\n  })\n);\n// log the total number of payloads returned\nfn(state => {\n  console.log('Count of payloads', state.payloads.length);\n  return { ...state, references: [], data: {} };\n});\n")))}d.isMDXComponent=!0},15680:(e,t,n)=>{n.d(t,{xA:()=>c,yg:()=>f});var a=n(96540);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var i=a.createContext({}),u=function(e){var t=a.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},c=function(e){var t=u(e.components);return a.createElement(i.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},y=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,i=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),p=u(n),y=r,f=p["".concat(i,".").concat(y)]||p[y]||d[y]||o;return n?a.createElement(f,s(s({ref:t},c),{},{components:n})):a.createElement(f,s({ref:t},c))}));function f(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,s=new Array(o);s[0]=y;var l={};for(var i in t)hasOwnProperty.call(t,i)&&(l[i]=t[i]);l.originalType=e,l[p]="string"==typeof e?e:r,s[1]=l;for(var u=2;u<o;u++)s[u]=n[u];return a.createElement.apply(null,s)}return a.createElement.apply(null,n)}y.displayName="MDXCreateElement"}}]);