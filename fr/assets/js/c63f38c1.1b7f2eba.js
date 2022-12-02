"use strict";(self.webpackChunk_openfn_docs=self.webpackChunk_openfn_docs||[]).push([[107],{3905:(e,n,t)=>{t.d(n,{Zo:()=>u,kt:()=>f});var r=t(67294);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function s(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?s(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):s(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function a(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},s=Object.keys(e);for(r=0;r<s.length;r++)t=s[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(r=0;r<s.length;r++)t=s[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var l=r.createContext({}),p=function(e){var n=r.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},u=function(e){var n=p(e.components);return r.createElement(l.Provider,{value:n},e.children)},c="mdxType",d={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},m=r.forwardRef((function(e,n){var t=e.components,o=e.mdxType,s=e.originalType,l=e.parentName,u=a(e,["components","mdxType","originalType","parentName"]),c=p(t),m=o,f=c["".concat(l,".").concat(m)]||c[m]||d[m]||s;return t?r.createElement(f,i(i({ref:n},u),{},{components:t})):r.createElement(f,i({ref:n},u))}));function f(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var s=t.length,i=new Array(s);i[0]=m;var a={};for(var l in n)hasOwnProperty.call(n,l)&&(a[l]=n[l]);a.originalType=e,a[c]="string"==typeof e?e:o,i[1]=a;for(var p=2;p<s;p++)i[p]=t[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,t)}m.displayName="MDXCreateElement"},2725:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>i,default:()=>c,frontMatter:()=>s,metadata:()=>a,toc:()=>p});var r=t(87462),o=(t(67294),t(3905));const s={title:"Deploiements du Do-it-yourself",sidebar_label:"DIY"},i=void 0,a={unversionedId:"deploy/diy",id:"deploy/diy",title:"Deploiements du Do-it-yourself",description:"\xcates-vous s\xfbr de vouloir construire une nouvelle application en utilisant core ou engine\xa0? L'offre microservice, d'OpenFn enti\xe8rement gratuite et open-source, constitue une assez bonne base dans le cas o\xf9 vous voudriez \xe9tendre nos fonctionnalit\xe9s existantes pour vos propres besoins.",source:"@site/i18n/fr/docusaurus-plugin-content-docs/current/deploy/diy.md",sourceDirName:"deploy",slug:"/deploy/diy",permalink:"/fr/documentation/deploy/diy",draft:!1,editUrl:"https://github.com/openfn/docs/edit/main/docs/deploy/diy.md",tags:[],version:"current",frontMatter:{title:"Deploiements du Do-it-yourself",sidebar_label:"DIY"},sidebar:"docs",previous:{title:"OpenHIE instantan\xe9",permalink:"/fr/documentation/instant-openhie"},next:{title:"Gestion de projet",permalink:"/fr/documentation/manage/platform-mgmt"}},l={},p=[{value:"Utilisation directe de <code>core</code> et <code>engine</code>",id:"utilisation-directe-de-core-et-engine",level:2},{value:"Par o\xf9 commencer",id:"par-o\xf9-commencer",level:3},{value:"State.json",id:"statejson",level:4},{value:"Exemple de fichiers pour d\xe9marrer DIY",id:"exemple-de-fichiers-pour-d\xe9marrer-diy",level:3},{value:"message.json",id:"messagejson",level:4},{value:"expression.js",id:"expressionjs",level:4},{value:"config.json",id:"configjson",level:4}],u={toc:p};function c(e){let{components:n,...t}=e;return(0,o.kt)("wrapper",(0,r.Z)({},u,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("p",null,":::avertissement"),(0,o.kt)("p",null,"\xcates-vous s\xfbr de vouloir construire une nouvelle application en utilisant ",(0,o.kt)("strong",{parentName:"p"},"core")," ou ",(0,o.kt)("strong",{parentName:"p"},"engine"),"\xa0? L'offre ",(0,o.kt)("strong",{parentName:"p"},(0,o.kt)("a",{parentName:"strong",href:"/documentation/microservice/home"},"microservice")),", d'OpenFn enti\xe8rement gratuite et open-source, constitue une assez bonne base dans le cas o\xf9 vous voudriez \xe9tendre nos fonctionnalit\xe9s existantes pour vos propres besoins."),(0,o.kt)("p",null,":::"),(0,o.kt)("p",null,":::remarque"),(0,o.kt)("p",null,"Nous sommes en train de migrer la documentation pour ",(0,o.kt)("strong",{parentName:"p"},"OpenFn/core")," et ",(0,o.kt)("strong",{parentName:"p"},"OpenFn/engine")," ici."),(0,o.kt)("p",null,"Entre-temps, consultez\xa0:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/OpenFn/core"},"https://github.com/OpenFn/core")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/OpenFn/engine"},"https://github.com/OpenFn/engine"))),(0,o.kt)("p",null,":::"),(0,o.kt)("h2",{id:"utilisation-directe-de-core-et-engine"},"Utilisation directe de ",(0,o.kt)("inlineCode",{parentName:"h2"},"core")," et ",(0,o.kt)("inlineCode",{parentName:"h2"},"engine")),(0,o.kt)("h3",{id:"par-o\xf9-commencer"},"Par o\xf9 commencer"),(0,o.kt)("p",null,"Les outils OpenFn core ETL sont tous open-source, et ici nous allons expliquer comment ces outils peuvent \xeatre utilis\xe9s pour effectuer des op\xe9rations ETL depuis votre ligne de commande. Vous pouvez m\xeame aller plus loin et les regrouper dans votre propre service h\xe9berg\xe9\xa0!"),(0,o.kt)("p",null,"Pour cr\xe9er un service d'int\xe9gration comme ",(0,o.kt)("inlineCode",{parentName:"p"},"platform")," ou ",(0,o.kt)("inlineCode",{parentName:"p"},"microservice"),", vous devrez construire un point de terminaison REST qui permet de poster des messages JSON ou XML, renvoyant un ",(0,o.kt)("inlineCode",{parentName:"p"},"2XX")," et v\xe9rifiant le corps de ce message pour voir s'il correspond \xe0 certains crit\xe8res. Si les crit\xe8res correspondent \xe0 ce message, vous devez proc\xe9der \xe0 ",(0,o.kt)("inlineCode",{parentName:"p"},"execute")," depuis ",(0,o.kt)("inlineCode",{parentName:"p"},"core"),", en utilisant les donn\xe9es du message et une certaine configuration stock\xe9e comme state. Voir un exemple de state.json ci-dessous\xa0:"),(0,o.kt)("h4",{id:"statejson"},"State.json"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "data": {\n    "word_count": 284,\n    "last_update": "2016-11-10 13:58:47",\n    "folder_name": "Civil Disobedience",\n    "file_owner": "student@school.org.za",\n    "file_name": "Mock Journal Article"\n  },\n  "configuration": {\n    "host": "109.XXX.11X.2XX",\n    "port": "5432",\n    "database": "data-warehouse",\n    "user": "postgres",\n    "password": "secret-password",\n    "ssl": true\n  }\n}\n')),(0,o.kt)("p",null,"Assurez-vous de stocker vos logs. Si vous souhaitez pouvoir relancer des transactions, conservez les donn\xe9es du message et fournissez une interface pour manipuler ces donn\xe9es \xe0 la main, ou r\xe9ex\xe9cuter certaines transactions apr\xe8s que l'expression du job ait \xe9t\xe9 modifi\xe9e."),(0,o.kt)("p",null,"Veillez \xe0 ce qu'un seul message entrant puisse lancer l'ex\xe9cution de plusieurs jobs."),(0,o.kt)("p",null,"Pour commencer, ou ex\xe9cutez simplement fn-lang manuellement \xe0 partir de votre ligne de commande, consultez ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/OpenFn/openfn-devtools"},"openfn-devtools"),". Avec des scripts d'installation pour Windows et Linux, c'est le moyen le plus rapide de mettre en place et de faire fonctionner OpenFn sur votre machine locale."),(0,o.kt)("h3",{id:"exemple-de-fichiers-pour-d\xe9marrer-diy"},"Exemple de fichiers pour d\xe9marrer DIY"),(0,o.kt)("p",null,"Vous trouverez ci-dessous un exemple de code pour remplir les 3 fichiers n\xe9cessaires \xe0 l'ex\xe9cution de fn-lang - ",(0,o.kt)("inlineCode",{parentName:"p"},"message.json"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"expression.js")," et ",(0,o.kt)("inlineCode",{parentName:"p"},"config.json"),"."),(0,o.kt)("h4",{id:"messagejson"},"message.json"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "xform_ids": [],\n  "version": null,\n  "user_id": "user1",\n  "server_date_opened": null,\n  "server_date_modified": null,\n  "properties": {\n    "prop_c": "2013-05-18",\n    "prop_b": "Female",\n    "prop_a": 99,\n    "owner_id": null,\n    "external_id": null,\n    "date_opened": null,\n    "date": "2013-05-17",\n    "case_type": "case_type",\n    "case_name": "Demo"\n  },\n  "indices": {}\n}\n')),(0,o.kt)("h4",{id:"expressionjs"},"expression.js"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"event(\n  fields(\n    field('program', 'eBAyeGv0exc'),\n    field('orgUnit', 'DiszpKrYNg8'),\n    field('eventDate', dataValue('properties.date')),\n    field('status', 'COMPLETED'),\n    field('storedBy', 'admin'),\n    field('coordinate', {\n      latitude: '59.8',\n      longitude: '10.9',\n    }),\n    field('dataValues', function (state) {\n      return [\n        {\n          dataElement: 'qrur9Dvnyt5',\n          value: dataValue('properties.prop_a')(state),\n        },\n        {\n          dataElement: 'oZg33kd9taw',\n          value: dataValue('properties.prop_b')(state),\n        },\n        {\n          dataElement: 'msodh3rEMJa',\n          value: dataValue('properties.prop_c')(state),\n        },\n      ];\n    })\n  )\n);\n")),(0,o.kt)("h4",{id:"configjson"},"config.json"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "username": "admin",\n  "password": "district",\n  "apiUrl": "https://play.dhis2.org/demo"\n}\n')))}c.isMDXComponent=!0}}]);