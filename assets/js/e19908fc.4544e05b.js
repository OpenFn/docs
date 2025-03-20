"use strict";(self.webpackChunk_openfn_docs=self.webpackChunk_openfn_docs||[]).push([[64922],{49383:(e,a,t)=>{t.r(a),t.d(a,{assets:()=>y,contentTitle:()=>g,default:()=>u,frontMatter:()=>r,metadata:()=>p,toc:()=>o});var n=t(58168),l=(t(96540),t(15680));const r={title:"asana@4.0.9",id:"asana-docs",keywords:["adaptor","asana","createTask","createTaskStory","getTask","getTasks","request","updateTask","upsertTask"]},g=void 0,p={unversionedId:"packages/asana-docs",id:"packages/asana-docs",title:"asana@4.0.9",description:"createTask(params, callback)",source:"@site/adaptors/packages/asana-docs.md",sourceDirName:"packages",slug:"/packages/asana-docs",permalink:"/adaptors/packages/asana-docs",draft:!1,tags:[],version:"current",frontMatter:{title:"asana@4.0.9",id:"asana-docs",keywords:["adaptor","asana","createTask","createTaskStory","getTask","getTasks","request","updateTask","upsertTask"]},sidebar:"adaptors",previous:{title:"Asana Adaptor",permalink:"/adaptors/asana"},next:{title:"Config for asana",permalink:"/adaptors/packages/asana-configuration-schema"}},y={},o=[{value:"Functions",id:"functions",level:2},{value:"createTask",id:"createtask",level:3},{value:"createTaskStory",id:"createtaskstory",level:3},{value:"getTask",id:"gettask",level:3},{value:"getTasks",id:"gettasks",level:3},{value:"request",id:"request",level:3},{value:"updateTask",id:"updatetask",level:3},{value:"upsertTask",id:"upserttask",level:3},{value:"Interfaces",id:"interfaces",level:2},{value:"RequestOptions",id:"requestoptions",level:3},{value:"StoryOptions",id:"storyoptions",level:3}],s={toc:o},i="wrapper";function u(e){let{components:a,...t}=e;return(0,l.yg)(i,(0,n.A)({},s,t,{components:a,mdxType:"MDXLayout"}),(0,l.yg)("dl",null,(0,l.yg)("dt",null,(0,l.yg)("a",{href:"#createtask"},"createTask(params, callback)")),(0,l.yg)("dt",null,(0,l.yg)("a",{href:"#createtaskstory"},"createTaskStory(taskGid, params, callback)")),(0,l.yg)("dt",null,(0,l.yg)("a",{href:"#gettask"},"getTask(taskGid, params, callback)")),(0,l.yg)("dt",null,(0,l.yg)("a",{href:"#gettasks"},"getTasks(projectGid, params, callback)")),(0,l.yg)("dt",null,(0,l.yg)("a",{href:"#request"},"request(path, params, callback)")),(0,l.yg)("dt",null,(0,l.yg)("a",{href:"#updatetask"},"updateTask(taskGid, params, callback)")),(0,l.yg)("dt",null,(0,l.yg)("a",{href:"#upserttask"},"upsertTask(projectGid, params, callback)"))),(0,l.yg)("h2",{id:"functions"},"Functions"),(0,l.yg)("h3",{id:"createtask"},"createTask"),(0,l.yg)("p",null,(0,l.yg)("code",null,"createTask(params, callback) \u21d2 Operation")),(0,l.yg)("p",null,"Create a task."),(0,l.yg)("table",null,(0,l.yg)("thead",{parentName:"table"},(0,l.yg)("tr",{parentName:"thead"},(0,l.yg)("th",{parentName:"tr",align:null},"Param"),(0,l.yg)("th",{parentName:"tr",align:null},"Type"),(0,l.yg)("th",{parentName:"tr",align:null},"Description"))),(0,l.yg)("tbody",{parentName:"table"},(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"params"),(0,l.yg)("td",{parentName:"tr",align:null},(0,l.yg)("code",null,"object")),(0,l.yg)("td",{parentName:"tr",align:null},"Body parameters")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"callback"),(0,l.yg)("td",{parentName:"tr",align:null},(0,l.yg)("code",null,"function")),(0,l.yg)("td",{parentName:"tr",align:null},"(Optional) callback function")))),(0,l.yg)("p",null,(0,l.yg)("strong",{parentName:"p"},"Example")),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre",className:"language-js"},'createTask({\n  name: "test",\n  approval_status: "pending",\n  assignee: "12345",\n  projects: ["1206933955023739"],\n});\n')),(0,l.yg)("hr",null),(0,l.yg)("h3",{id:"createtaskstory"},"createTaskStory"),(0,l.yg)("p",null,(0,l.yg)("code",null,"createTaskStory(taskGid, params, callback) \u21d2 Operation")),(0,l.yg)("p",null,"Create a story to a specific task."),(0,l.yg)("table",null,(0,l.yg)("thead",{parentName:"table"},(0,l.yg)("tr",{parentName:"thead"},(0,l.yg)("th",{parentName:"tr",align:null},"Param"),(0,l.yg)("th",{parentName:"tr",align:null},"Type"),(0,l.yg)("th",{parentName:"tr",align:null},"Description"))),(0,l.yg)("tbody",{parentName:"table"},(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"taskGid"),(0,l.yg)("td",{parentName:"tr",align:null},(0,l.yg)("code",null,"string")),(0,l.yg)("td",{parentName:"tr",align:null},"Globally unique identifier for the task")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"params"),(0,l.yg)("td",{parentName:"tr",align:null},(0,l.yg)("a",{parentName:"td",href:"#storyoptions"},(0,l.yg)("code",null,"StoryOptions"))),(0,l.yg)("td",{parentName:"tr",align:null},"Story parameters")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"callback"),(0,l.yg)("td",{parentName:"tr",align:null},(0,l.yg)("code",null,"function")),(0,l.yg)("td",{parentName:"tr",align:null},"(Optional) callback function")))),(0,l.yg)("p",null,(0,l.yg)("strong",{parentName:"p"},"Example:")," Create a plain text comment"),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre",className:"language-js"},'createTaskStory("1206933955023739", {\n  text: "This is a comment",\n});\n')),(0,l.yg)("p",null,(0,l.yg)("strong",{parentName:"p"},"Example:")," Create a HTML formatted text comment"),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre",className:"language-js"},'createTaskStory("1206933955023739", {\n  html_text: "<body>This is a comment</body>",\n});\n')),(0,l.yg)("hr",null),(0,l.yg)("h3",{id:"gettask"},"getTask"),(0,l.yg)("p",null,(0,l.yg)("code",null,"getTask(taskGid, params, callback) \u21d2 Operation")),(0,l.yg)("p",null,"Get a single task of a given project."),(0,l.yg)("table",null,(0,l.yg)("thead",{parentName:"table"},(0,l.yg)("tr",{parentName:"thead"},(0,l.yg)("th",{parentName:"tr",align:null},"Param"),(0,l.yg)("th",{parentName:"tr",align:null},"Type"),(0,l.yg)("th",{parentName:"tr",align:null},"Description"))),(0,l.yg)("tbody",{parentName:"table"},(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"taskGid"),(0,l.yg)("td",{parentName:"tr",align:null},(0,l.yg)("code",null,"string")),(0,l.yg)("td",{parentName:"tr",align:null},"Globally unique identifier for the task")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"params"),(0,l.yg)("td",{parentName:"tr",align:null},(0,l.yg)("code",null,"object")),(0,l.yg)("td",{parentName:"tr",align:null},"Query params to include.")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"callback"),(0,l.yg)("td",{parentName:"tr",align:null},(0,l.yg)("code",null,"function")),(0,l.yg)("td",{parentName:"tr",align:null},"(Optional) callback function")))),(0,l.yg)("p",null,(0,l.yg)("strong",{parentName:"p"},"Example")),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre",className:"language-js"},'getTask("1206933955023739", {\n  opt_fields: "name,notes,assignee",\n});\n')),(0,l.yg)("hr",null),(0,l.yg)("h3",{id:"gettasks"},"getTasks"),(0,l.yg)("p",null,(0,l.yg)("code",null,"getTasks(projectGid, params, callback) \u21d2 Operation")),(0,l.yg)("p",null,"Get the list of tasks for a given project."),(0,l.yg)("table",null,(0,l.yg)("thead",{parentName:"table"},(0,l.yg)("tr",{parentName:"thead"},(0,l.yg)("th",{parentName:"tr",align:null},"Param"),(0,l.yg)("th",{parentName:"tr",align:null},"Type"),(0,l.yg)("th",{parentName:"tr",align:null},"Description"))),(0,l.yg)("tbody",{parentName:"table"},(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"projectGid"),(0,l.yg)("td",{parentName:"tr",align:null},(0,l.yg)("code",null,"string")),(0,l.yg)("td",{parentName:"tr",align:null},"Globally unique identifier for the project")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"params"),(0,l.yg)("td",{parentName:"tr",align:null},(0,l.yg)("code",null,"object")),(0,l.yg)("td",{parentName:"tr",align:null},"Query params to include.")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"callback"),(0,l.yg)("td",{parentName:"tr",align:null},(0,l.yg)("code",null,"function")),(0,l.yg)("td",{parentName:"tr",align:null},"(Optional) callback function")))),(0,l.yg)("p",null,(0,l.yg)("strong",{parentName:"p"},"Example")),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre",className:"language-js"},'getTasks("1206933955023739", {\n  opt_fields: "name,notes,assignee",\n});\n')),(0,l.yg)("hr",null),(0,l.yg)("h3",{id:"request"},"request"),(0,l.yg)("p",null,(0,l.yg)("code",null,"request(path, params, callback) \u21d2 Operation")),(0,l.yg)("p",null,"Make a HTTP request against the Asana API."),(0,l.yg)("table",null,(0,l.yg)("thead",{parentName:"table"},(0,l.yg)("tr",{parentName:"thead"},(0,l.yg)("th",{parentName:"tr",align:null},"Param"),(0,l.yg)("th",{parentName:"tr",align:null},"Type"),(0,l.yg)("th",{parentName:"tr",align:null},"Description"))),(0,l.yg)("tbody",{parentName:"table"},(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"path"),(0,l.yg)("td",{parentName:"tr",align:null},(0,l.yg)("code",null,"string")),(0,l.yg)("td",{parentName:"tr",align:null},"Path to resource (excluding api/version)")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"params"),(0,l.yg)("td",{parentName:"tr",align:null},(0,l.yg)("a",{parentName:"td",href:"#requestoptions"},(0,l.yg)("code",null,"RequestOptions"))),(0,l.yg)("td",{parentName:"tr",align:null},"(Optional) Query, body and method parameters")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"callback"),(0,l.yg)("td",{parentName:"tr",align:null},(0,l.yg)("code",null,"function")),(0,l.yg)("td",{parentName:"tr",align:null},"(Optional) Callback function")))),(0,l.yg)("p",null,(0,l.yg)("strong",{parentName:"p"},"Example")),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre",className:"language-js"},'Get a task by id\nrequest("/tasks/1234");\n')),(0,l.yg)("p",null,(0,l.yg)("strong",{parentName:"p"},"Example")),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre",className:"language-js"},'Query for tasks in a given project\nrequest("/tasks", {\n  query: { project: "abc" },\n});\n')),(0,l.yg)("p",null,(0,l.yg)("strong",{parentName:"p"},"Example")),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre",className:"language-js"},'Create a new task\nrequest("/tasks", {\n  method: "POST",\n  body: { data: { name: "do the thing", completed: false } },\n});\n')),(0,l.yg)("hr",null),(0,l.yg)("h3",{id:"updatetask"},"updateTask"),(0,l.yg)("p",null,(0,l.yg)("code",null,"updateTask(taskGid, params, callback) \u21d2 Operation")),(0,l.yg)("p",null,"Update a specific task."),(0,l.yg)("table",null,(0,l.yg)("thead",{parentName:"table"},(0,l.yg)("tr",{parentName:"thead"},(0,l.yg)("th",{parentName:"tr",align:null},"Param"),(0,l.yg)("th",{parentName:"tr",align:null},"Type"),(0,l.yg)("th",{parentName:"tr",align:null},"Description"))),(0,l.yg)("tbody",{parentName:"table"},(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"taskGid"),(0,l.yg)("td",{parentName:"tr",align:null},(0,l.yg)("code",null,"string")),(0,l.yg)("td",{parentName:"tr",align:null},"Globally unique identifier for the task")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"params"),(0,l.yg)("td",{parentName:"tr",align:null},(0,l.yg)("code",null,"object")),(0,l.yg)("td",{parentName:"tr",align:null},"Body parameters")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"callback"),(0,l.yg)("td",{parentName:"tr",align:null},(0,l.yg)("code",null,"function")),(0,l.yg)("td",{parentName:"tr",align:null},"(Optional) callback function")))),(0,l.yg)("p",null,(0,l.yg)("strong",{parentName:"p"},"Example")),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre",className:"language-js"},'updateTask("1206933955023739", {\n  name: "test",\n  approval_status: "pending",\n  assignee: "12345",\n});\n')),(0,l.yg)("hr",null),(0,l.yg)("h3",{id:"upserttask"},"upsertTask"),(0,l.yg)("p",null,(0,l.yg)("code",null,"upsertTask(projectGid, params, callback) \u21d2 Operation")),(0,l.yg)("p",null,"Update or create a task."),(0,l.yg)("table",null,(0,l.yg)("thead",{parentName:"table"},(0,l.yg)("tr",{parentName:"thead"},(0,l.yg)("th",{parentName:"tr",align:null},"Param"),(0,l.yg)("th",{parentName:"tr",align:null},"Type"),(0,l.yg)("th",{parentName:"tr",align:null},"Description"))),(0,l.yg)("tbody",{parentName:"table"},(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"projectGid"),(0,l.yg)("td",{parentName:"tr",align:null},(0,l.yg)("code",null,"string")),(0,l.yg)("td",{parentName:"tr",align:null},"Globally unique identifier for the project")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"params"),(0,l.yg)("td",{parentName:"tr",align:null},(0,l.yg)("code",null,"object")),(0,l.yg)("td",{parentName:"tr",align:null},"an object with an externalId and some task data.")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"callback"),(0,l.yg)("td",{parentName:"tr",align:null},(0,l.yg)("code",null,"function")),(0,l.yg)("td",{parentName:"tr",align:null},"(Optional) callback function")))),(0,l.yg)("p",null,(0,l.yg)("strong",{parentName:"p"},"Example")),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre",className:"language-js"},'upsertTask("1201382240880", {\n  externalId: "name",\n  data: {\n    name: "test",\n    approval_status: "pending",\n    projects: ["1201382240880"],\n    assignee: "12345",\n  },\n});\n')),(0,l.yg)("hr",null),(0,l.yg)("h2",{id:"interfaces"},"Interfaces"),(0,l.yg)("h3",{id:"requestoptions"},"RequestOptions"),(0,l.yg)("p",null,"Options provided to the Asana API request"),(0,l.yg)("p",null,(0,l.yg)("strong",{parentName:"p"},"Properties")),(0,l.yg)("table",null,(0,l.yg)("thead",{parentName:"table"},(0,l.yg)("tr",{parentName:"thead"},(0,l.yg)("th",{parentName:"tr",align:null},"Name"),(0,l.yg)("th",{parentName:"tr",align:null},"Type"),(0,l.yg)("th",{parentName:"tr",align:null},"Description"))),(0,l.yg)("tbody",{parentName:"table"},(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"body"),(0,l.yg)("td",{parentName:"tr",align:null},(0,l.yg)("code",null,"object")),(0,l.yg)("td",{parentName:"tr",align:null},"Body data to append to the request.")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"query"),(0,l.yg)("td",{parentName:"tr",align:null},(0,l.yg)("code",null,"object")),(0,l.yg)("td",{parentName:"tr",align:null},"An object of query parameters to be encoded into the URL.")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"method"),(0,l.yg)("td",{parentName:"tr",align:null},(0,l.yg)("code",null,"string")),(0,l.yg)("td",{parentName:"tr",align:null},"The HTTP method to use. Defaults to ",(0,l.yg)("inlineCode",{parentName:"td"},"GET"))))),(0,l.yg)("hr",null),(0,l.yg)("h3",{id:"storyoptions"},"StoryOptions"),(0,l.yg)("p",null,"Options provided to the createTaskStory request"),(0,l.yg)("p",null,(0,l.yg)("strong",{parentName:"p"},"Properties")),(0,l.yg)("table",null,(0,l.yg)("thead",{parentName:"table"},(0,l.yg)("tr",{parentName:"thead"},(0,l.yg)("th",{parentName:"tr",align:null},"Name"),(0,l.yg)("th",{parentName:"tr",align:null},"Type"),(0,l.yg)("th",{parentName:"tr",align:null},"Description"))),(0,l.yg)("tbody",{parentName:"table"},(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"text"),(0,l.yg)("td",{parentName:"tr",align:null},(0,l.yg)("code",null,"string")),(0,l.yg)("td",{parentName:"tr",align:null},"The plain text of the comment to add. Cannot be used with html_text.")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"html_text"),(0,l.yg)("td",{parentName:"tr",align:null},(0,l.yg)("code",null,"string")),(0,l.yg)("td",{parentName:"tr",align:null},"Opt In. HTML formatted text for a comment. This will not include the name of the creator.")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"is_pinned"),(0,l.yg)("td",{parentName:"tr",align:null},(0,l.yg)("code",null,"boolean")),(0,l.yg)("td",{parentName:"tr",align:null},"Default to ",(0,l.yg)("inlineCode",{parentName:"td"},"false"),". Whether the story should be pinned on the resource.")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"sticker_name"),(0,l.yg)("td",{parentName:"tr",align:null},(0,l.yg)("code",null,"string")),(0,l.yg)("td",{parentName:"tr",align:null},"The name of the sticker in this story. ",(0,l.yg)("inlineCode",{parentName:"td"},"null")," if there is no sticker.")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"opt_fields"),(0,l.yg)("td",{parentName:"tr",align:null},(0,l.yg)("code",null,"array")),(0,l.yg)("td",{parentName:"tr",align:null},"Opt In. This endpoint returns a compact resource, which excludes some properties by default. To include those optional properties, set this query parameter to a comma-separated list of the properties you wish to include.")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"opt_pretty"),(0,l.yg)("td",{parentName:"tr",align:null},(0,l.yg)("code",null,"boolean")),(0,l.yg)("td",{parentName:"tr",align:null},"Defaults to ",(0,l.yg)("inlineCode",{parentName:"td"},"false"),". Provides the response in a \u201cpretty\u201d format. In the case of JSON this means doing proper line breaking and indentation to make it readable. This will take extra time and increase the response size so it is advisable only to use this during debugging.")))),(0,l.yg)("hr",null))}u.isMDXComponent=!0},15680:(e,a,t)=>{t.d(a,{xA:()=>s,yg:()=>m});var n=t(96540);function l(e,a,t){return a in e?Object.defineProperty(e,a,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[a]=t,e}function r(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);a&&(n=n.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,n)}return t}function g(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?r(Object(t),!0).forEach((function(a){l(e,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))}))}return e}function p(e,a){if(null==e)return{};var t,n,l=function(e,a){if(null==e)return{};var t,n,l={},r=Object.keys(e);for(n=0;n<r.length;n++)t=r[n],a.indexOf(t)>=0||(l[t]=e[t]);return l}(e,a);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)t=r[n],a.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(l[t]=e[t])}return l}var y=n.createContext({}),o=function(e){var a=n.useContext(y),t=a;return e&&(t="function"==typeof e?e(a):g(g({},a),e)),t},s=function(e){var a=o(e.components);return n.createElement(y.Provider,{value:a},e.children)},i="mdxType",u={inlineCode:"code",wrapper:function(e){var a=e.children;return n.createElement(n.Fragment,{},a)}},d=n.forwardRef((function(e,a){var t=e.components,l=e.mdxType,r=e.originalType,y=e.parentName,s=p(e,["components","mdxType","originalType","parentName"]),i=o(t),d=l,m=i["".concat(y,".").concat(d)]||i[d]||u[d]||r;return t?n.createElement(m,g(g({ref:a},s),{},{components:t})):n.createElement(m,g({ref:a},s))}));function m(e,a){var t=arguments,l=a&&a.mdxType;if("string"==typeof e||l){var r=t.length,g=new Array(r);g[0]=d;var p={};for(var y in a)hasOwnProperty.call(a,y)&&(p[y]=a[y]);p.originalType=e,p[i]="string"==typeof e?e:l,g[1]=p;for(var o=2;o<r;o++)g[o]=t[o];return n.createElement.apply(null,g)}return n.createElement.apply(null,t)}d.displayName="MDXCreateElement"}}]);