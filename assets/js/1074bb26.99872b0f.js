"use strict";(self.webpackChunk_openfn_docs=self.webpackChunk_openfn_docs||[]).push([[48721],{47834:(e,a,t)=>{t.r(a),t.d(a,{assets:()=>s,contentTitle:()=>i,default:()=>u,frontMatter:()=>o,metadata:()=>l,toc:()=>p});var n=t(58168),r=(t(96540),t(15680));const o={title:"CKAN"},i=void 0,l={unversionedId:"ckan",id:"ckan",title:"CKAN",description:"App Overview",source:"@site/adaptors/ckan.md",sourceDirName:".",slug:"/ckan",permalink:"/adaptors/ckan",draft:!1,tags:[],version:"current",frontMatter:{title:"CKAN"},sidebar:"adaptors",previous:{title:"cht developer readme",permalink:"/adaptors/packages/cht-readme"},next:{title:"CommCare Adaptor",permalink:"/adaptors/commcare"}},s={},p=[{value:"App Overview",id:"app-overview",level:2},{value:"Helpful Features &amp; Plug-ins",id:"helpful-features--plug-ins",level:3},{value:"Integration Use Cases",id:"integration-use-cases",level:2},{value:"Example user stories:",id:"example-user-stories",level:3},{value:"APIs &amp; Integration Options",id:"apis--integration-options",level:2},{value:"Webhook/webservice for CKAN",id:"webhookwebservice-for-ckan",level:2},{value:"Getting Started with CKAN",id:"getting-started-with-ckan",level:2},{value:"API Notes",id:"api-notes",level:3},{value:"JSONP support",id:"jsonp-support",level:4},{value:"App Installation",id:"app-installation",level:3},{value:"OpenFn Adaptor",id:"openfn-adaptor",level:2},{value:"Implementation Examples",id:"implementation-examples",level:2}],c={toc:p},d="wrapper";function u(e){let{components:a,...t}=e;return(0,r.yg)(d,(0,n.A)({},c,t,{components:a,mdxType:"MDXLayout"}),(0,r.yg)("h2",{id:"app-overview"},"App Overview"),(0,r.yg)("p",null,"CKAN (Comprehensive Knowledge Archive Network) is the world\u2019s leading\nopen-source data portal platform. CKAN makes it easy to publish, share and work\nwith data. It's a data management system that provides a powerful platform for\ncataloging, storing and accessing datasets with a rich front-end, full API (for\nboth data and catalog), visualization tools and more."),(0,r.yg)("p",null,"CKAN is a tool for making open data websites. It helps you manage and publish\ncollections of data. It is used by national and local governments, research\ninstitutions, and other organizations who collect a lot of data. See the public\ndocumentation for more:"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("a",{parentName:"li",href:"https://ckan.org/"},"https://ckan.org/")),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("a",{parentName:"li",href:"https://docs.ckan.org/en/2.9/user-guide.html#what-is-ckan"},"https://docs.ckan.org/en/2.9/user-guide.html#what-is-ckan"))),(0,r.yg)("h3",{id:"helpful-features--plug-ins"},"Helpful Features & Plug-ins"),(0,r.yg)("p",null,"See\n",(0,r.yg)("a",{parentName:"p",href:"https://docs.ckan.org/en/2.9/extensions/index.html"},"https://docs.ckan.org/en/2.9/extensions/index.html")),(0,r.yg)("p",null,"Helpful features include:"),(0,r.yg)("ol",null,(0,r.yg)("li",{parentName:"ol"},"The CKAN DataStore extension provides an ad hoc database for storage of\nstructured data from CKAN resources."),(0,r.yg)("li",{parentName:"ol"},"Advanced geospatial features, covering data preview, search, and discovery."),(0,r.yg)("li",{parentName:"ol"},"An intuitive web interface that allows you to easily register, update and\nrefine datasets."),(0,r.yg)("li",{parentName:"ol"},"Completely customizable with themes to match your brand."),(0,r.yg)("li",{parentName:"ol"},"Creation of a federated network of data portals which share data between each\nother."),(0,r.yg)("li",{parentName:"ol"},"Rich search experience which allows for quick \u2018Google-style\u2019 keyword search\nand filtering."),(0,r.yg)("li",{parentName:"ol"},"Create data-visualisation views and expose data as line, bar and pie charts."),(0,r.yg)("li",{parentName:"ol"},"Upload media and image files. Stores files either on the server or in the\ncloud using extensions."),(0,r.yg)("li",{parentName:"ol"},"CKAN allows you to pick and choose which features you want to use for your\ndata portal. Or, you can easily develop your own by following the extending\nguide!")),(0,r.yg)("h2",{id:"integration-use-cases"},"Integration Use Cases"),(0,r.yg)("p",null,"CKAN has been adopted by enterprise organisations in sectors such as resources,\nenergy, pharmaceuticals and finance to publish and manage internal data assets.\nIn addition, CKAN is widely used, mainly in the field of open government data,\nwhere it has become a de facto standard software package. CKAN powers the\nnational open data portals of the UK, the USA, Australia or the EU, to name only\na few well-known examples."),(0,r.yg)("p",null,"Using the API you can do things like:"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},"Access any bit of information in CKAN (if you are authorized!)"),(0,r.yg)("li",{parentName:"ul"},"Edit any piece of information in CKAN"),(0,r.yg)("li",{parentName:"ul"},"Create a whole new web front-end for CKAN (if you want!)")),(0,r.yg)("h3",{id:"example-user-stories"},"Example user stories:"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},"As a data collector, I want to create a data portal to easily publish and\nshare datasets with my community/peers/hub, so that they can leverage my data\nfor further research.")),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},"As a researcher, I want a way to search for datasets related to my research\ndomain, so that I can run analyses and incorporate other datasets into my\nstudies.")),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},"As a data hub, I want to create a web portal where researchers can easily\nbrowse, share, download, and discuss datasets and research activites, so that\nI can enhance communication, collaboration, and exchange across partners."))),(0,r.yg)("p",null,"See ",(0,r.yg)("a",{parentName:"p",href:"https://docs.ckan.org/en/ckan-1.8/user-stories-list.html"},"https://docs.ckan.org/en/ckan-1.8/user-stories-list.html")," for more\napp-specific user stories."),(0,r.yg)("h2",{id:"apis--integration-options"},"APIs & Integration Options"),(0,r.yg)("p",null,"The APIs available depend on the CKAN version you're using. See API docs:\n",(0,r.yg)("a",{parentName:"p",href:"https://docs.ckan.org/en/2.9/api/index.html"},"https://docs.ckan.org/en/2.9/api/index.html")),(0,r.yg)("p",null,"All of a CKAN website\u2019s core functionality (everything you can do with the web\ninterface and more) can be used by external code that calls the CKAN API. The\nCKAN API follows the RESTful (Representational State Transfer) style and uses\nJSON by default."),(0,r.yg)("p",null,"For example, using the CKAN API your app can:"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},"Get JSON-formatted lists of a site\u2019s datasets, groups or other CKAN objects:\n",(0,r.yg)("a",{parentName:"li",href:"http://demo.ckan.org/api/3/action/package_list"},"http://demo.ckan.org/api/3/action/package_list")),(0,r.yg)("li",{parentName:"ul"},"Get a full JSON representation of a dataset, resource or other object:\n",(0,r.yg)("a",{parentName:"li",href:"http://demo.ckan.org/api/3/action/package_show?id=adur_district_spending"},"http://demo.ckan.org/api/3/action/package_show?id=adur_district_spending")),(0,r.yg)("li",{parentName:"ul"},"Search for packages or resources matching a query:\n",(0,r.yg)("a",{parentName:"li",href:"http://demo.ckan.org/api/3/action/package_search?q=spending"},"http://demo.ckan.org/api/3/action/package_search?q=spending")),(0,r.yg)("li",{parentName:"ul"},"Create, update and delete datasets, resources and other objects"),(0,r.yg)("li",{parentName:"ul"},"Get an activity stream of recently changed datasets on a site:\n",(0,r.yg)("a",{parentName:"li",href:"http://demo.ckan.org/api/3/action/recently_changed_packages_activity_list"},"http://demo.ckan.org/api/3/action/recently_changed_packages_activity_list"))),(0,r.yg)("p",null,"Beyond using OpenFn to connect with the API, you can access the API using one\nthe dedicated tools or libraries written specifically for CKAN. The following\nclients are available:"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},"dpm (data package manager): command-line client and Python library (maintained\nby core CKAN team)"),(0,r.yg)("li",{parentName:"ul"},"ckanclient - CKAN Python Client: Python client maintained by the core CKAN\nteam"),(0,r.yg)("li",{parentName:"ul"},"CKAN Ruby: Ruby Client"),(0,r.yg)("li",{parentName:"ul"},"Ckan_client-PHP: PHP client"),(0,r.yg)("li",{parentName:"ul"},"Ckan_client-J: Java client"),(0,r.yg)("li",{parentName:"ul"},"net-ckan: PERL client"),(0,r.yg)("li",{parentName:"ul"},"ckanjs: sophisticated Javascript client built on Backbone."),(0,r.yg)("li",{parentName:"ul"},"Google Refine CKAN Extension: Google Refine client which allows you to get and\npush data to and from a CKAN instance using Google Refine.")),(0,r.yg)("h2",{id:"webhookwebservice-for-ckan"},"Webhook/webservice for CKAN"),(0,r.yg)("p",null,"See documentation on:"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},"ckanext-webhooks: ",(0,r.yg)("a",{parentName:"li",href:"https://github.com/datacats/ckanext-webhooks"},"https://github.com/datacats/ckanext-webhooks")),(0,r.yg)("li",{parentName:"ul"},"ckanext-geopusher : ",(0,r.yg)("a",{parentName:"li",href:"https://github.com/datacats/ckanext-geopusher"},"https://github.com/datacats/ckanext-geopusher"))),(0,r.yg)("h2",{id:"getting-started-with-ckan"},"Getting Started with CKAN"),(0,r.yg)("p",null,"CKAN offers robust, public documentation. See the\n",(0,r.yg)("a",{parentName:"p",href:"https://docs.ckan.org/en/2.9/user-guide.html"},"CKAN User Guide"),"."),(0,r.yg)("h3",{id:"api-notes"},"API Notes"),(0,r.yg)("p",null,"CKAN exposes all core features to its API. See the API guide:\n",(0,r.yg)("a",{parentName:"p",href:"https://docs.ckan.org/en/2.9/api/"},"https://docs.ckan.org/en/2.9/api/")),(0,r.yg)("p",null,"CKAN\u2019s ",(0,r.yg)("inlineCode",{parentName:"p"},"FileStore")," and ",(0,r.yg)("inlineCode",{parentName:"p"},"DataStore")," have their own APIs, see:"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},"FileStore and file uploads:\n",(0,r.yg)("a",{parentName:"li",href:"https://docs.ckan.org/en/2.9/maintaining/filestore.html"},"https://docs.ckan.org/en/2.9/maintaining/filestore.html")),(0,r.yg)("li",{parentName:"ul"},"DataStore extension: ",(0,r.yg)("a",{parentName:"li",href:"https://docs.ckan.org/en/2.9/maintaining/datastore.html"},"https://docs.ckan.org/en/2.9/maintaining/datastore.html"))),(0,r.yg)("p",null,"Note that some API functions require authorization. The API uses the same\nauthorization functions and configuration as the web interface, so if a user is\nauthorized to do something in the web interface they\u2019ll be authorized to do it\nvia the API as well."),(0,r.yg)("p",null,"To call the CKAN API, post a JSON dictionary in an HTTP POST request to one of\nCKAN\u2019s API URLs. The parameters for the API function should be given in the JSON\ndictionary. CKAN will also return its response in a JSON dictionary."),(0,r.yg)("p",null,"One way to post a JSON dictionary to a URL is using the command-line client\nCurl. For example, to get a list of the names of all the datasets in the\ndata-explorer group on demo.ckan.org, install curl and then call the group_list\nAPI function by running this command in a terminal:"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre"},"curl https://demo.ckan.org/api/3/action/group_list\n")),(0,r.yg)("p",null,"The response from CKAN will look like this:"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre"},'{\n    "help": "...",\n    "result": [\n        "data-explorer",\n        "department-of-ricky",\n        "geo-examples",\n        "geothermal-data",\n        "reykjavik",\n        "skeenawild-conservation-trust"\n    ],\n    "success": true\n}\n')),(0,r.yg)("h4",{id:"jsonp-support"},"JSONP support"),(0,r.yg)("p",null,"To cater for scripts from other sites that wish to access the API, the data can\nbe returned in JSONP format, where the JSON data is \u2018padded\u2019 with a function\ncall. The function is named in the \u2018callback\u2019 parameter. For example:"),(0,r.yg)("p",null,(0,r.yg)("a",{parentName:"p",href:"http://demo.ckan.org/api/3/action/package_show?id=adur_district_spending&callback=myfunction"},"http://demo.ckan.org/api/3/action/package_show?id=adur_district_spending&callback=myfunction")),(0,r.yg)("p",null,"CKAN's source code can be found at github."),(0,r.yg)("p",null,"Example normal request:"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre"},"GET /api/rest/dataset/pollution_stats\n")),(0,r.yg)("p",null,"but now with the callback parameter:"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre"},'GET /api/rest/dataset/pollution_stats?callback=name-of-callback-function\nreturns: jsoncallback({"name": "pollution_stats", ... });\n')),(0,r.yg)("p",null,"This parameter can apply to all POST requests to the Action API and GET requests\nto the Search API and v1/v2/v3 APIs."),(0,r.yg)("h3",{id:"app-installation"},"App Installation"),(0,r.yg)("p",null,"See the ",(0,r.yg)("a",{parentName:"p",href:"https://docs.ckan.org/en/2.9/sysadmin-guide.html"},"System Admin guide"),"."),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},"To install CKAN see:\n",(0,r.yg)("a",{parentName:"li",href:"https://docs.ckan.org/en/2.9/maintaining/installing/index.html?highlight=install%20CKAN"},"https://docs.ckan.org/en/2.9/maintaining/installing/index.html?highlight=install%20CKAN")),(0,r.yg)("li",{parentName:"ul"},"To upgrade CKAN see:\n",(0,r.yg)("a",{parentName:"li",href:"https://docs.ckan.org/en/2.9/maintaining/upgrading/index.html?highlight=configure%20CKAN"},"https://docs.ckan.org/en/2.9/maintaining/upgrading/index.html?highlight=configure%20CKAN"))),(0,r.yg)("p",null,"To provide your API token in an HTTP request, include it in either an\nAuthorization or ",(0,r.yg)("inlineCode",{parentName:"p"},"X-CKAN-API-Key")," header. (The name of the HTTP header can be\nconfigured with the ",(0,r.yg)("inlineCode",{parentName:"p"},"apikey_header_name")," option in your CKAN configuration\nfile.)"),(0,r.yg)("h2",{id:"openfn-adaptor"},"OpenFn Adaptor"),(0,r.yg)("p",null,"Currently no CKAN-specific adaptor exists, but\n",(0,r.yg)("a",{parentName:"p",href:"https://www.github.com/openfn/language-http"},"language-http")," can be implemented\nto access the web API."),(0,r.yg)("h2",{id:"implementation-examples"},"Implementation Examples"),(0,r.yg)("p",null,"CKAN has been implemented in ",(0,r.yg)("a",{parentName:"p",href:"https://catalog.data.gov"},"catalog.data.gov"),",\n",(0,r.yg)("a",{parentName:"p",href:"https://open.canada.ca/data"},"open.canada.ca/data"),", and\n",(0,r.yg)("a",{parentName:"p",href:"https://data.humdata.org"},"data.humdata.org"),"."))}u.isMDXComponent=!0},15680:(e,a,t)=>{t.d(a,{xA:()=>c,yg:()=>h});var n=t(96540);function r(e,a,t){return a in e?Object.defineProperty(e,a,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[a]=t,e}function o(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);a&&(n=n.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,n)}return t}function i(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?o(Object(t),!0).forEach((function(a){r(e,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))}))}return e}function l(e,a){if(null==e)return{};var t,n,r=function(e,a){if(null==e)return{};var t,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)t=o[n],a.indexOf(t)>=0||(r[t]=e[t]);return r}(e,a);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)t=o[n],a.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var s=n.createContext({}),p=function(e){var a=n.useContext(s),t=a;return e&&(t="function"==typeof e?e(a):i(i({},a),e)),t},c=function(e){var a=p(e.components);return n.createElement(s.Provider,{value:a},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var a=e.children;return n.createElement(n.Fragment,{},a)}},g=n.forwardRef((function(e,a){var t=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),d=p(t),g=r,h=d["".concat(s,".").concat(g)]||d[g]||u[g]||o;return t?n.createElement(h,i(i({ref:a},c),{},{components:t})):n.createElement(h,i({ref:a},c))}));function h(e,a){var t=arguments,r=a&&a.mdxType;if("string"==typeof e||r){var o=t.length,i=new Array(o);i[0]=g;var l={};for(var s in a)hasOwnProperty.call(a,s)&&(l[s]=a[s]);l.originalType=e,l[d]="string"==typeof e?e:r,i[1]=l;for(var p=2;p<o;p++)i[p]=t[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,t)}g.displayName="MDXCreateElement"}}]);