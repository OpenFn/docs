(window.webpackJsonp=window.webpackJsonp||[]).push([[135],{208:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return s})),n.d(t,"toc",(function(){return c})),n.d(t,"default",(function(){return l}));var a=n(3),r=n(7),o=(n(0),n(243)),i={title:"The Inbox",sidebar_label:"Your Inbox"},s={unversionedId:"build/inbox",id:"build/inbox",isDocsHomePage:!1,title:"The Inbox",description:"How it works",source:"@site/docs/build/inbox.md",slug:"/build/inbox",permalink:"/documentation/build/inbox",editUrl:"https://github.com/openfn/docs/edit/main/docs/build/inbox.md",version:"current",sidebar_label:"Your Inbox",sidebar:"docs",previous:{title:"Triggers",permalink:"/documentation/build/triggers"},next:{title:"Generic Data Sources",permalink:"/documentation/source-apps"}},c=[{value:"How it works",id:"how-it-works",children:[]},{value:"<code>202/Accepted vs 201/Created</code>",id:"202accepted-vs-201created",children:[]},{value:"Synchronous vs. Asynchronous Processing",id:"synchronous-vs-asynchronous-processing",children:[]}],p={toc:c};function l(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(o.b)("wrapper",Object(a.a)({},p,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("h2",{id:"how-it-works"},"How it works"),Object(o.b)("p",null,"On the platform, each project has their own unique inbox URL, something like\n",Object(o.b)("inlineCode",{parentName:"p"},"https://www.openfn.org/inbox/54804f1a-4a70-4392-97cb-1f350e98e9c8"),". That big\nstring of numbers and letters is called a ",Object(o.b)("inlineCode",{parentName:"p"},"UUID"),'. It\'s your address, and the\n"place" on the web that you\'ll send data for processing by OpenFn if you\'re\ndoing real-time or "event-based" integration.'),Object(o.b)("p",null,"Your project will always be listening, and whenever an HTTP request is received\nat that URL, we'll respond with a ",Object(o.b)("inlineCode",{parentName:"p"},"202/Accepted")," and start processing the data\nsent either in the ",Object(o.b)("inlineCode",{parentName:"p"},"body")," or the ",Object(o.b)("inlineCode",{parentName:"p"},"parameters")," of that request."),Object(o.b)("h2",{id:"202accepted-vs-201created"},Object(o.b)("inlineCode",{parentName:"h2"},"202/Accepted vs 201/Created")),Object(o.b)("p",null,"You've probably heard of ",Object(o.b)("inlineCode",{parentName:"p"},"200/OK"),' or other common "status codes", but the\ndifference between a ',Object(o.b)("inlineCode",{parentName:"p"},"201")," and a ",Object(o.b)("inlineCode",{parentName:"p"},"202")," is very interesting from an integration\nperspective."),Object(o.b)("p",null,"The ",Object(o.b)("inlineCode",{parentName:"p"},"201/Created")," means that we've completed processing whatever data was sent\nto us by the requester. Usually, this response is accompanied by a payload with\na new ",Object(o.b)("inlineCode",{parentName:"p"},"id")," for whatever resource what created. This is ",Object(o.b)("em",{parentName:"p"},"not")," what OpenFn does,\ninstead we send a ",Object(o.b)("inlineCode",{parentName:"p"},"202/Accepted")," indicating that your request was acceptable and\nwe'll get to work."),Object(o.b)("div",{className:"admonition admonition-tip alert alert--success"},Object(o.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-heading"}),Object(o.b)("h5",{parentName:"div"},Object(o.b)("span",Object(a.a)({parentName:"h5"},{className:"admonition-icon"}),Object(o.b)("svg",Object(a.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"}),Object(o.b)("path",Object(a.a)({parentName:"svg"},{fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"})))),"tip")),Object(o.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-content"}),Object(o.b)("p",{parentName:"div"},"OpenFn sends a ",Object(o.b)("inlineCode",{parentName:"p"},"202/Accepted")," indicating that your request has passed our\ninitial validation (i.e. the data is valid ",Object(o.b)("inlineCode",{parentName:"p"},"JSON")," or parseable ",Object(o.b)("inlineCode",{parentName:"p"},"XML")," and the\ninbox URL exists) and that we've enqueued it for processing."))),Object(o.b)("p",null,"Behind the scenes, we've now a system of simple, durable queues that ensure we\ndon't \"drop\" this event at any point in time from here on forward."),Object(o.b)("ol",null,Object(o.b)("li",{parentName:"ol"},'We\'ll load it into the database and soon it will appear as a new "message"\nrecord in your "Inbox" page.'),Object(o.b)("li",{parentName:"ol"},"We'll check the triggers for all the active jobs in your project and if it\nmatches one of those triggers we'll send it to another queue for job running."),Object(o.b)("li",{parentName:"ol"},"We'll make sure your project is configured properly and that you haven't\nexceeded your usage limits."),Object(o.b)("li",{parentName:"ol"},"We'll start executing a job run, which may itself may hundreds of unique HTTP\nrequests to other endpoints."),Object(o.b)("li",{parentName:"ol"},'And finally we\'ll report back on the status of that run and soon it will\nappear as a new "run" in your "Activity History" page.')),Object(o.b)("p",null,"Depending on how many requests your job makes, how much data is being processed,\nand the response time of your other systems, all of this could take quite some\ntime\u2014anywhere from ",Object(o.b)("inlineCode",{parentName:"p"},"200ms")," to ",Object(o.b)("inlineCode",{parentName:"p"},"20 minutes"),"!"),Object(o.b)("p",null,"If the system that sends the data to OpenFn needs to know whether all the\noperations in step 4 completed successfully (what do you count as a success with\nthese various custom actions, by the way?) you should consider implementing a\nSAGA pattern, whereby after all this processing is complete you trigger another\nrequest back to the initial system reporting on the downstream tasks. This can\nbe done in OpenFn with ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"/documentation/jobs/multiple-operations"}),"Flow Triggers"),"."),Object(o.b)("h2",{id:"synchronous-vs-asynchronous-processing"},"Synchronous vs. Asynchronous Processing"),Object(o.b)("p",null,"In ",Object(o.b)("strong",{parentName:"p"},"OpenFn/engine"),", we've created a way to set up inbox endpoints as\n\"synchronous\", meaning they'll actually hold a connection open ",Object(o.b)("em",{parentName:"p"},"until")," all of\nthe processing above is completed, and then respond with a ",Object(o.b)("inlineCode",{parentName:"p"},"2XX"),", ",Object(o.b)("inlineCode",{parentName:"p"},"4xx"),", or\n",Object(o.b)("inlineCode",{parentName:"p"},"5XX"),". This is not recommended for high volume systems, but may be a requirement\nfor some implementations; the sprit of ",Object(o.b)("strong",{parentName:"p"},"OpenFn/engine")," is to give as much\ncontrol as possible to whoever is deploying it on their servers."))}l.isMDXComponent=!0},243:function(e,t,n){"use strict";n.d(t,"a",(function(){return b})),n.d(t,"b",(function(){return m}));var a=n(0),r=n.n(a);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p=r.a.createContext({}),l=function(e){var t=r.a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},b=function(e){var t=l(e.components);return r.a.createElement(p.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},u=r.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,i=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),b=l(n),u=a,m=b["".concat(i,".").concat(u)]||b[u]||d[u]||o;return n?r.a.createElement(m,s(s({ref:t},p),{},{components:n})):r.a.createElement(m,s({ref:t},p))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=u;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:a,i[1]=s;for(var p=2;p<o;p++)i[p]=n[p];return r.a.createElement.apply(null,i)}return r.a.createElement.apply(null,n)}u.displayName="MDXCreateElement"}}]);