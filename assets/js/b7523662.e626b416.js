"use strict";(self.webpackChunk_openfn_docs=self.webpackChunk_openfn_docs||[]).push([[32976],{47358:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>s,contentTitle:()=>l,default:()=>c,frontMatter:()=>a,metadata:()=>i,toc:()=>p});var o=t(58168),r=(t(96540),t(15680));const a={title:"Workflows API",sidebar_label:"Workflows API"},l=void 0,i={unversionedId:"build/workflows-api",id:"build/workflows-api",title:"Workflows API",description:"The Workflows API allows you to programmatically create and modify Workflows.",source:"@site/docs/build/workflows-api.md",sourceDirName:"build",slug:"/build/workflows-api",permalink:"/documentation/build/workflows-api",draft:!1,editUrl:"https://github.com/openfn/docs/edit/main/docs/build/workflows-api.md",tags:[],version:"current",frontMatter:{title:"Workflows API",sidebar_label:"Workflows API"},sidebar:"docs",previous:{title:"Workflow Snapshots",permalink:"/documentation/workflow-snapshots"},next:{title:"History & Search",permalink:"/documentation/monitor-history/activity-history"}},s={},p=[{value:"Authentication",id:"authentication",level:2},{value:"REST API",id:"rest-api",level:2},{value:"Workflow Structure",id:"workflow-structure",level:2},{value:"HTTP Adaptor Examples",id:"http-adaptor-examples",level:2}],d={toc:p},u="wrapper";function c(e){let{components:n,...t}=e;return(0,r.yg)(u,(0,o.A)({},d,t,{components:n,mdxType:"MDXLayout"}),(0,r.yg)("p",null,"The Workflows API allows you to programmatically create and modify Workflows."),(0,r.yg)("p",null,"You can use the Workflows API with the ",(0,r.yg)("inlineCode",{parentName:"p"},"http")," adaptor or curl."),(0,r.yg)("admonition",{title:"Version Compatibility",type:"info"},(0,r.yg)("p",{parentName:"admonition"},"The Workflows API was introduced in version 2.10.10, January 2025")),(0,r.yg)("h2",{id:"authentication"},"Authentication"),(0,r.yg)("p",null,"All requests must be Authenticated."),(0,r.yg)("p",null,"Authentication uses the Authorization header with a Personal Access Token (PAT)\nfrom the app."),(0,r.yg)("p",null,"If you're using the http adaptor, set the ",(0,r.yg)("inlineCode",{parentName:"p"},"access_token")," on the credential to\nyour PAT."),(0,r.yg)("p",null,"If you are using curl, add the bearer token (in the example below the token\nwill be expanded from an env var):"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre"},'curl -H "Authorization: Bearer $OPENFN_PAT" https://app.openfn.org/api/projects/<project-id>/workflows\n')),(0,r.yg)("h2",{id:"rest-api"},"REST API"),(0,r.yg)("p",null,"The Workflow API has the following RESTful structure:"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("inlineCode",{parentName:"li"},"GET /api/projects/:projectId/workflows")," - get a list of workflows for a\nproject. Returns an array of Workflows."),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("inlineCode",{parentName:"li"},"GET /api/projects/:projectId/workflows/:workflowId")," - get a single workflow\nby id. Returns a single Workflow."),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("inlineCode",{parentName:"li"},"PUT /api/projects/:projectId/workflows")," - create a new Workflow. Include\nworkflow JSON in the body. Returns the updated Workflow JSON."),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("inlineCode",{parentName:"li"},"PUT /api/projects/:projectId/workflows/:workflowId")," - update a Workflow. This\nwill replace the existing workflow with the JSON in the body. Returns the\nupdated Workflow JSON."),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("inlineCode",{parentName:"li"},"PATCH /api/projects/:projectId/workflows/:workflowId")," - partially update a\nWorkflow. The existing workflow will be updated with the JSON in the body.")),(0,r.yg)("h2",{id:"workflow-structure"},"Workflow Structure"),(0,r.yg)("p",null,"A Workflow has the following structure:"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre"},'{\n  "name": "My Workflow",\n  "id": "a414cb3b-e387-4c4f-b8de-70d51f1160da",\n  "project_id": "79efba60-072a-4d4f-8d6c-22dfd3852176",\n  "edges": [\n    {\n      "id": "759fe475-ed23-4914-8a6d-155968bc0aa1"\n      "condition_type": "always",\n      "enabled": true,\n      "source_job_id": null,\n      "source_trigger_id": "c79ce46c-ab0f-4f5b-bf2d-fed52aef2a41",\n      "target_job_id": "26304a1e-267b-4bc9-940f-171db1905885",\n    }\n  ],\n  "jobs": [\n    {\n      "id": "26304a1e-267b-4bc9-940f-171db1905885",\n      "body": "/* job code goes here */",\n      "name": "my-job",\n      "adaptor": "@openfn/language-common@latest",\n    }\n  ],\n  "triggers": [\n    {\n      "id": "c79ce46c-ab0f-4f5b-bf2d-fed52aef2a41",\n      "comment": null,\n      "custom_path": null,\n      "cron_expression": null,\n      "type": "webhook",\n      "enabled": true\n    }\n  ],\n}\n')),(0,r.yg)("p",null,"When creating a new Workflow, the server will generate UUIDs for the workflow\nand all steps and edges. You can use any id string you like in the creation of\nnew nodes and edges - so long as id usage is consistent."),(0,r.yg)("p",null,"When matching a PUT or PATCH request, new steps and edges MUST be assigned\nUUIDs. If using the ",(0,r.yg)("inlineCode",{parentName:"p"},"http")," adaptor, you can use ",(0,r.yg)("inlineCode",{parentName:"p"},"util.uuid()")," for this (see the\nexample below)."),(0,r.yg)("p",null,"You MUST ensure that any steps and triggers referenced by an edge are defined\nwithin the same workflow."),(0,r.yg)("h2",{id:"http-adaptor-examples"},"HTTP Adaptor Examples"),(0,r.yg)("p",null,"You will need to create a credential with ",(0,r.yg)("inlineCode",{parentName:"p"},"access_token")," set to your Personal\nAccess Token (PAT) and ",(0,r.yg)("inlineCode",{parentName:"p"},"baseUrl")," set to your OpenFn instance (ie,\n",(0,r.yg)("inlineCode",{parentName:"p"},'"https://app.openfn.org"'),")"),(0,r.yg)("p",null,"Create new Workflow:"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-js"},"post(`/api/projects/${$.projectId}/workflows`, {\n  body: {\n    name: 'My Workflow',\n    edges: [\n      {\n        source_trigger_id: 'trigger-1',\n        target_job_id: 'job-1',\n        condition_type: 'always',\n      },\n    ],\n    jobs: [\n      {\n        id: 'job-1',\n        name: 'My Job',\n        body: '/* job code goes here */',\n        adaptor: '@openfn/language-common@latest',\n      },\n    ],\n    triggers: [\n      {\n        id: 'trigger-1',\n        type: 'webhook',\n        enabled: true,\n      },\n    ],\n  },\n  headers: { 'content-type': 'application/json' },\n});\n")),(0,r.yg)("p",null,"The resulting workflow with updated UUIDs and metadata will be written to\n",(0,r.yg)("inlineCode",{parentName:"p"},"state.data.workflow"),"."),(0,r.yg)("p",null,"Add a new step and edge to an existing Workflow:"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-js"},"fn(state => {\n  const jobId = util.uuid();\n  state.diff = {\n    edges: [\n      {\n        id: util.uuid(),\n        source_job_id: 'c79ce46c-ab0f-4f5b-bf2d-fed52aef2a41',\n        target_job_id: jobId,\n        condition_type: 'always',\n      },\n    ],\n    jobs: [\n      {\n        id: jobId,\n        body: '/* job code goes here */',\n        adaptor: '@openfn/language-common@latest',\n      },\n    ],\n  };\n  return state;\n});\npatch(`/api/projects/${$.projectId}/workflows/${$.workflowId}`, {\n  body: $.diff,\n  headers: { 'content-type': 'application/json' },\n});\n")),(0,r.yg)("p",null,"The resulting workflow will be written to ",(0,r.yg)("inlineCode",{parentName:"p"},"state.data.workflow"),"."))}c.isMDXComponent=!0},15680:(e,n,t)=>{t.d(n,{xA:()=>d,yg:()=>w});var o=t(96540);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);n&&(o=o.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,o)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function i(e,n){if(null==e)return{};var t,o,r=function(e,n){if(null==e)return{};var t,o,r={},a=Object.keys(e);for(o=0;o<a.length;o++)t=a[o],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)t=a[o],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var s=o.createContext({}),p=function(e){var n=o.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},d=function(e){var n=p(e.components);return o.createElement(s.Provider,{value:n},e.children)},u="mdxType",c={inlineCode:"code",wrapper:function(e){var n=e.children;return o.createElement(o.Fragment,{},n)}},f=o.forwardRef((function(e,n){var t=e.components,r=e.mdxType,a=e.originalType,s=e.parentName,d=i(e,["components","mdxType","originalType","parentName"]),u=p(t),f=r,w=u["".concat(s,".").concat(f)]||u[f]||c[f]||a;return t?o.createElement(w,l(l({ref:n},d),{},{components:t})):o.createElement(w,l({ref:n},d))}));function w(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var a=t.length,l=new Array(a);l[0]=f;var i={};for(var s in n)hasOwnProperty.call(n,s)&&(i[s]=n[s]);i.originalType=e,i[u]="string"==typeof e?e:r,l[1]=i;for(var p=2;p<a;p++)l[p]=t[p];return o.createElement.apply(null,l)}return o.createElement.apply(null,t)}f.displayName="MDXCreateElement"}}]);