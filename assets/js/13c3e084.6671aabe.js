"use strict";(self.webpackChunk_openfn_docs=self.webpackChunk_openfn_docs||[]).push([[98230],{73604:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>l,contentTitle:()=>s,default:()=>c,frontMatter:()=>r,metadata:()=>i,toc:()=>p});var n=o(58168),a=(o(96540),o(15680));const r={title:"Google Forms/Google Sheets"},s=void 0,i={unversionedId:"googlesheets",id:"googlesheets",title:"Google Forms/Google Sheets",description:"Google Sheets Adaptor Overview",source:"@site/adaptors/googlesheets.md",sourceDirName:".",slug:"/googlesheets",permalink:"/adaptors/googlesheets",draft:!1,tags:[],version:"current",frontMatter:{title:"Google Forms/Google Sheets"},sidebar:"adaptors",previous:{title:"googlehealthcare developer readme",permalink:"/adaptors/packages/googlehealthcare-readme"},next:{title:"googlesheets@3.0.1",permalink:"/adaptors/packages/googlesheets-docs"}},l={},p=[{value:"Google Sheets Adaptor Overview",id:"google-sheets-adaptor-overview",level:2},{value:"Authentication and Authorization",id:"authentication-and-authorization",level:3},{value:"Permissions (Scopes)",id:"permissions-scopes",level:4},{value:"Integration Options",id:"integration-options",level:3},{value:"1. Pushing Data to OpenFn via Google App Scripts",id:"1-pushing-data-to-openfn-via-google-app-scripts",level:4},{value:"2. Pulling Data from Google Sheets using OpenFn",id:"2-pulling-data-from-google-sheets-using-openfn",level:4},{value:"3. Pushing Data to Google Sheets via OpenFn",id:"3-pushing-data-to-google-sheets-via-openfn",level:4},{value:"Helpful Resources",id:"helpful-resources",level:3}],g={toc:p},u="wrapper";function c(e){let{components:t,...o}=e;return(0,a.yg)(u,(0,n.A)({},g,o,{components:t,mdxType:"MDXLayout"}),(0,a.yg)("h2",{id:"google-sheets-adaptor-overview"},"Google Sheets Adaptor Overview"),(0,a.yg)("p",null,"Google Sheets adaptor provides seamless integration between Google Forms, Google\nSheets, and the OpenFn platform, enabling robust data flow management."),(0,a.yg)("h3",{id:"authentication-and-authorization"},"Authentication and Authorization"),(0,a.yg)("p",null,"This adaptor requires OAuth authorization to connect with Google Sheets. This\nauthorization can be achieved by a user or organization admin consenting to an\nOAuth client to access resources. Users can request authorization via the\ndefault OpenFn Google OAuth client or choose to\n",(0,a.yg)("inlineCode",{parentName:"p"},"Add new (generic) OAuth client(s)")," for their account and projects."),(0,a.yg)("p",null,"To authorize Google Sheets for your OpenFn workflows, read our documentation on\n",(0,a.yg)("a",{parentName:"p",href:"/documentation/build/credentials#use-oauth2-credentials"},"using OAuth credentials"),"."),(0,a.yg)("admonition",{title:"Google Oauth Client Setup Tips for Super Users",type:"info"},(0,a.yg)("p",{parentName:"admonition"},"Setting up your own generic OAuth client requires that you have an OAuth\napplication set up. If you are a super user configuring a new Google OAuth\nclient for your OpenFn deployment, then please refer to Google's documentation\nto\n",(0,a.yg)("a",{parentName:"p",href:"https://developers.google.com/identity/protocols/oauth2/javascript-implicit-flow"},"configure an OAuth Client ID"),",\nas well as see the standard\n",(0,a.yg)("a",{parentName:"p",href:"https://accounts.google.com/.well-known/openid-configuration"},"openid-configuration"),"\nfor how to complete the OAuth Client Setup form on OpenFn.")),(0,a.yg)("h4",{id:"permissions-scopes"},"Permissions (Scopes)"),(0,a.yg)("p",null,"Permissions and access in an OAuth instance are defined by scopes which are\nnamed differently by providers based on their functions within their platform."),(0,a.yg)("p",null,"For GoogleSheets, your super user will likely need to add the following scopes\nto the Oauth Client Setup configured for Google in your OpenFn deployment. That\nsaid, please refer to\n",(0,a.yg)("a",{parentName:"p",href:"https://developers.google.com/identity/protocols/oauth2/scopes"},"Google's documentation on Oauth scopes"),"\nfor the latest information."),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("inlineCode",{parentName:"li"},"openid")),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("inlineCode",{parentName:"li"},"email")),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("inlineCode",{parentName:"li"},"profile")),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("inlineCode",{parentName:"li"},"https://www.googleapis.com/auth/spreadsheets"))),(0,a.yg)("h3",{id:"integration-options"},"Integration Options"),(0,a.yg)("p",null,"There are a couple of primary ways to integrate with this app, each catering to\ndifferent use cases."),(0,a.yg)("h4",{id:"1-pushing-data-to-openfn-via-google-app-scripts"},"1. Pushing Data to OpenFn via Google App Scripts"),(0,a.yg)("p",null,"With this method, data from Google Forms or Google Sheets is automatically\npushed to an OpenFn webhook trigger workflow whenever new entries are made. This\nreal-time approach ensures that your data processing pipelines are continuously\nfed with the latest information."),(0,a.yg)("p",null,(0,a.yg)("strong",{parentName:"p"},"Use Cases:")," - Monitoring survey responses in real-time. - Triggering\nimmediate actions based on form submissions. - Enabling timely data\nsynchronization between Google Forms/Sheets and external systems."),(0,a.yg)("p",null,"To push data to OpenFn in real-time we will have to configure a ",(0,a.yg)("em",{parentName:"p"},"trigger")," on a\nGoogle App Script as demonstrated in the example below.\n",(0,a.yg)("img",{parentName:"p",src:"https://github.com/OpenFn/docs/assets/167166847/4680c12b-ad57-497e-9073-37e287624f42",alt:"image"})),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-js"},"function sendToOpenFn(data) {\n  var payload = JSON.stringify(data);\n  var url = 'https://app.openfn.org/i/your-workorder-id';\n  var options = {\n    method: 'post',\n    contentType: 'application/json',\n    payload: payload,\n  };\n  var response = UrlFetchApp.fetch(url, options);\n  Logger.log(response);\n}\n\nfunction onFormSubmit(e) {\n  var headers = Object.keys(e.namedValues); // Get column headers from form responses\n\n  // Create the survey form entry object dynamically\n  var surveyFormEntry = { formId: 'surveyForm', data: {} };\n\n  // Iterate over each row of form responses\n  for (var i = 1; i < e.values.length; i++) {\n    // Start from index 1 to skip header row\n    var formData = {};\n\n    // Iterate over each column header and assign corresponding value from form response\n    for (var j = 0; j < headers.length; j++) {\n      var value = e.namedValues[headers[j]][i - 1]\n        ? e.namedValues[headers[j]][i - 1].toString()\n        : ''; // Convert value to string, handle empty values\n      if (value.trim() !== '') {\n        // Check if the value is not empty\n        formData[headers[j]] = value;\n      }\n    }\n    if (Object.keys(formData).length > 0) {\n      surveyFormEntry.data = formData;\n      // Send the survey form entry to OpenFn and log the workorder id back on Google sheet\n      sendToOpenFn(surveyFormEntry); // Sending data to OpenFn and getting the response\n    }\n  }\n}\n")),(0,a.yg)("h4",{id:"2-pulling-data-from-google-sheets-using-openfn"},"2. Pulling Data from Google Sheets using OpenFn"),(0,a.yg)("p",null,"Alternatively, you can pull data from Google Sheets at specific intervals or\non-demand using a ",(0,a.yg)("inlineCode",{parentName:"p"},"cron")," workflow in OpenFn, allowing for more controlled data\nretrieval processes. This method is particularly useful when you need to fetch\nhistorical data or perform periodic data updates."),(0,a.yg)("p",null,"Check out the docs on available ",(0,a.yg)("a",{parentName:"p",href:"./packages/googlesheets-docs"},"functions")," to\nlearn how to configure a workflow step to use this OpenFn adaptor to\n",(0,a.yg)("inlineCode",{parentName:"p"},"getValues()")," and fetch data from a target Google Sheet."),(0,a.yg)("p",null,(0,a.yg)("strong",{parentName:"p"},"Use Cases:")," - Aggregating data for periodic reporting or analysis. -\nImplementing batch processing for efficiency and resource optimization."),(0,a.yg)("h4",{id:"3-pushing-data-to-google-sheets-via-openfn"},"3. Pushing Data to Google Sheets via OpenFn"),(0,a.yg)("p",null,"The Google Sheets adaptor can also be used to push data to Google Sheets from\nother systems via OpenFn. This allows for seamless integration between external\napplications and Google Sheets, leveraging OpenFn as the integrator."),(0,a.yg)("p",null,(0,a.yg)("strong",{parentName:"p"},"Use Cases:")," - Importing data from CRM systems into Google Sheets for sales\nanalysis. - Updating inventory levels in a Google Sheets spreadsheet from an\ne-commerce platform. - Automatically populating project management data from\ntask tracking systems into Google Sheets for reporting purposes."),(0,a.yg)("p",null,"A step by step guide is found\n",(0,a.yg)("a",{parentName:"p",href:"https://docs.openfn.org/documentation/tutorials/http-to-googlesheets"},"in this tutorial"),"\nthat shows us how to get data via a REST API and push it to Google Sheet."),(0,a.yg)("h3",{id:"helpful-resources"},"Helpful Resources"),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("a",{parentName:"li",href:"https://developers.google.com/sheets/api/guides/concepts"},"Google Sheets API Overview")),(0,a.yg)("li",{parentName:"ul"},"OpenFn Workflow Tutorial:\n",(0,a.yg)("a",{parentName:"li",href:"https://docs.openfn.org/documentation/tutorials/http-to-googlesheets"},"HTTP-to-GoogleSheets"))))}c.isMDXComponent=!0},15680:(e,t,o)=>{o.d(t,{xA:()=>g,yg:()=>d});var n=o(96540);function a(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function r(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,n)}return o}function s(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?r(Object(o),!0).forEach((function(t){a(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):r(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function i(e,t){if(null==e)return{};var o,n,a=function(e,t){if(null==e)return{};var o,n,a={},r=Object.keys(e);for(n=0;n<r.length;n++)o=r[n],t.indexOf(o)>=0||(a[o]=e[o]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)o=r[n],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(a[o]=e[o])}return a}var l=n.createContext({}),p=function(e){var t=n.useContext(l),o=t;return e&&(o="function"==typeof e?e(t):s(s({},t),e)),o},g=function(e){var t=p(e.components);return n.createElement(l.Provider,{value:t},e.children)},u="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},h=n.forwardRef((function(e,t){var o=e.components,a=e.mdxType,r=e.originalType,l=e.parentName,g=i(e,["components","mdxType","originalType","parentName"]),u=p(o),h=a,d=u["".concat(l,".").concat(h)]||u[h]||c[h]||r;return o?n.createElement(d,s(s({ref:t},g),{},{components:o})):n.createElement(d,s({ref:t},g))}));function d(e,t){var o=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=o.length,s=new Array(r);s[0]=h;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i[u]="string"==typeof e?e:a,s[1]=i;for(var p=2;p<r;p++)s[p]=o[p];return n.createElement.apply(null,s)}return n.createElement.apply(null,o)}h.displayName="MDXCreateElement"}}]);