"use strict";(self.webpackChunk_openfn_docs=self.webpackChunk_openfn_docs||[]).push([[15478],{14538:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>d,frontMatter:()=>i,metadata:()=>o,toc:()=>m});var n=a(58168),r=(a(96540),a(15680));const i={title:"gmail developer readme",id:"gmail-readme",keywords:["adaptor","readme","gmail"]},l="gmail Adaptor developer README.md",o={unversionedId:"packages/gmail-readme",id:"packages/gmail-readme",title:"gmail developer readme",description:"Source//github.com/OpenFn/adaptors/tree/main/packages/gmail",source:"@site/adaptors/packages/gmail-readme.md",sourceDirName:"packages",slug:"/packages/gmail-readme",permalink:"/adaptors/packages/gmail-readme",draft:!1,tags:[],version:"current",frontMatter:{title:"gmail developer readme",id:"gmail-readme",keywords:["adaptor","readme","gmail"]},sidebar:"adaptors",previous:{title:"gmail changelog",permalink:"/adaptors/packages/gmail-changelog"},next:{title:"Go.Data",permalink:"/adaptors/godata"}},s={},m=[{value:"How It Works",id:"how-it-works",level:2},{value:"Usage",id:"usage",level:2},{value:"Extracting Message Contents",id:"extracting-message-contents",level:2},{value:"Metadata",id:"metadata",level:3},{value:"Attachment: basic file",id:"attachment-basic-file",level:3},{value:"Attachment: archived file",id:"attachment-archived-file",level:3},{value:"Query Setup",id:"query-setup",level:2},{value:"Example",id:"example",level:2},{value:"Sample Output",id:"sample-output",level:2}],c={toc:m},p="wrapper";function d(e){let{components:t,...a}=e;return(0,r.yg)(p,(0,n.A)({},c,a,{components:t,mdxType:"MDXLayout"}),(0,r.yg)("h1",{id:"gmail-adaptor-developer-readmemd"},"gmail Adaptor developer README.md"),(0,r.yg)("p",null,"Source: ",(0,r.yg)("a",{parentName:"p",href:"https://github.com/OpenFn/adaptors/tree/main/packages/gmail"},"https://github.com/OpenFn/adaptors/tree/main/packages/gmail")),(0,r.yg)("h1",{id:"gmail-message-content-extraction"},"Gmail Message Content Extraction"),(0,r.yg)("p",null,'This adaptor is used to extract specific content from Gmail messages using\ncustom "desiredContent" configurations. The sample code specifies how to query\nGmail for messages and identify desired attachments and metadata.'),(0,r.yg)("h2",{id:"how-it-works"},"How It Works"),(0,r.yg)("ol",null,(0,r.yg)("li",{parentName:"ol"},"Gmail Query: Constructs a Gmail query string to filter relevant messages."),(0,r.yg)("li",{parentName:"ol"},"Desired Content Matching: Uses the desiredContents array to identify and\nextract:",(0,r.yg)("ul",{parentName:"li"},(0,r.yg)("li",{parentName:"ul"},"Metadata files"),(0,r.yg)("li",{parentName:"ul"},"Archive files and their contents"),(0,r.yg)("li",{parentName:"ul"},"Message metadata (subject, date, from, body)"))),(0,r.yg)("li",{parentName:"ol"},"Output: Returns a structured collection of matched content.")),(0,r.yg)("h2",{id:"usage"},"Usage"),(0,r.yg)("p",null,"The adaptor's primary function is ",(0,r.yg)("inlineCode",{parentName:"p"},"getContentsFromMessages")),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-js"},"getContentsFromMessages(userId, query, desiredContents, callback);\n")),(0,r.yg)("ol",null,(0,r.yg)("li",{parentName:"ol"},"Set userId with the Gmail account to query."),(0,r.yg)("li",{parentName:"ol"},"Customize the query to contain filters as needed. This is the same format a\nthe query in the Gmail UI."),(0,r.yg)("li",{parentName:"ol"},"Specify what content to retrieve from messages (body, subject, attachments,\netc)")),(0,r.yg)("h2",{id:"extracting-message-contents"},"Extracting Message Contents"),(0,r.yg)("p",null,"The ",(0,r.yg)("inlineCode",{parentName:"p"},"desiredContents")," array should list what content to retrieve from each\nmessage. Each item should be a string (ie, ",(0,r.yg)("inlineCode",{parentName:"p"},'"body"')," or an object describing an\nattachment)"),(0,r.yg)("h3",{id:"metadata"},"Metadata"),(0,r.yg)("p",null,"The following strings can be extracted:"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("inlineCode",{parentName:"li"},"body"),": Extracts the message body."),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("inlineCode",{parentName:"li"},"subject"),": Extracts the email subject."),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("inlineCode",{parentName:"li"},"date"),": Extracts the timestamp of the email."),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("inlineCode",{parentName:"li"},"from"),": Extracts the sender's information.")),(0,r.yg)("h3",{id:"attachment-basic-file"},"Attachment: basic file"),(0,r.yg)("p",null,"Extract the content from a file attachment. Specify the file name with a regular\nexpression on the ",(0,r.yg)("inlineCode",{parentName:"p"},"file")," key."),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-js"},'{\n  type: "file",\n  name: "metadata",\n  file: /^summary\\.txt$/,\n}\n')),(0,r.yg)("h3",{id:"attachment-archived-file"},"Attachment: archived file"),(0,r.yg)("p",null,"Extract the content from a file embedded in an archive attachment."),(0,r.yg)("p",null,"Specify the archive with a regular expression on the ",(0,r.yg)("inlineCode",{parentName:"p"},"archive")," key. Extract a\nfile within the archive with the ",(0,r.yg)("inlineCode",{parentName:"p"},"file")," key."),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-js"},'{\n  type: "archive",\n  name: "data",\n  archive: /_device_data\\.zip$/,\n  file: /_CURRENT_DATA_\\w*?\\.json$/,\n}\n')),(0,r.yg)("h2",{id:"query-setup"},"Query Setup"),(0,r.yg)("p",null,"The query variable is constructed to filter Gmail messages:"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},'Inbox messages with the subject containing "30DTR Data".'),(0,r.yg)("li",{parentName:"ul"},"Messages sent within the last 31 days.")),(0,r.yg)("h2",{id:"example"},"Example"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-js"},"const userId = 'tester@gmail.com';\n\nconst querySubject = encodeURIComponent('device data summary');\n\n// All messages newer than 30 days ago\nconst MILLISECONDS_PER_DAY = 1000 * 60 * 60 * 24;\nconst queryAfterDate = new Date(Date.now() - 30 * MILLISECONDS_PER_DAY)\n  .toISOString()\n  .split('T')[0];\n\nconst query = `in:inbox subject:${querySubject} after:${queryAfterDate}`;\n\nconst metadataFile = {\n  type: 'file',\n  name: 'metadata',\n  file: /^summary\\.txt$/,\n};\n\nconst dataFile = {\n  type: 'archive',\n  name: 'data',\n  archive: /_device_data\\.zip$/,\n  file: /_CURRENT_DATA_\\w*?\\.json$/,\n};\n\nconst desiredContents = [\n  'body',\n  'subject',\n  'date',\n  'from',\n  metadataFile,\n  dataFile,\n];\n\ngetContentsFromMessages(userId, query, desiredContents, state =>\n  console.log(state.data)\n);\n")),(0,r.yg)("h2",{id:"sample-output"},"Sample Output"),(0,r.yg)("p",null,"For each matched message, the extracted content is returned in a collection of\ncontent blocks. Here's an example for a single match message:"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-js"},'[\n  {\n    messageId: \'1934c017c1752c01\',\n    contents: [\n      {\n        name: \'subject\',\n        value: \'Fwd: FW: Facility Temperature Report (Summary Data)\',\n      },\n      {\n        name: \'date\',\n        value: \'2024-11-20T23:56:08.000Z\',\n      },\n      {\n        name: \'from\',\n        value: \'Friendly Sender <sender@gmail.com>\',\n      },\n      {\n        name: \'metadata\',\n        value:\n          \'{\\n  "appInfo": {\\n    "isAutomaticTime": true,\\n    "isTrueTime": true,\\n    "os": "Android",\\n    "osVe" }\',\n        path: \'004800123457501820383131_20241115T102926Z.json\',\n      },\n      {\n        name: \'data\',\n        value:\n          \'{\\n "AMOD": "VL45",\\n "AMFR": "ICECO",\\n "ASER": "BJBC 08 30",\\n "ADOP": "2024-04-01",\\n "APQS": "E003/XX" }\',\n        path: \'004800123457501820383131_CURRENT_DATA_P100DT9H45M46S_20241115T102926Z.json\',\n      },\n    ],\n  },\n];\n')),(0,r.yg)("p",null,"Each content block represents a specific piece of information extracted:"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("strong",{parentName:"li"},"subject"),": Contains the email subject."),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("strong",{parentName:"li"},"date"),": The timestamp when the email was sent."),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("strong",{parentName:"li"},"from"),": Sender's email and name."),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("strong",{parentName:"li"},"metadata"),": Metadata file content, with its file path."),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("strong",{parentName:"li"},"data"),": Data file content, with its file path.")))}d.isMDXComponent=!0},15680:(e,t,a)=>{a.d(t,{xA:()=>c,yg:()=>u});var n=a(96540);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var s=n.createContext({}),m=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},c=function(e){var t=m(e.components);return n.createElement(s.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},g=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),p=m(a),g=r,u=p["".concat(s,".").concat(g)]||p[g]||d[g]||i;return a?n.createElement(u,l(l({ref:t},c),{},{components:a})):n.createElement(u,l({ref:t},c))}));function u(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=a.length,l=new Array(i);l[0]=g;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o[p]="string"==typeof e?e:r,l[1]=o;for(var m=2;m<i;m++)l[m]=a[m];return n.createElement.apply(null,l)}return n.createElement.apply(null,a)}g.displayName="MDXCreateElement"}}]);