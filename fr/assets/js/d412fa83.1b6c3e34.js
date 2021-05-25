(self.webpackChunk_openfn_docs=self.webpackChunk_openfn_docs||[]).push([[2249],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return c},kt:function(){return f}});var r=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var l=r.createContext({}),u=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},c=function(e){var t=u(e.components);return r.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),d=u(n),f=i,m=d["".concat(l,".").concat(f)]||d[f]||p[f]||o;return n?r.createElement(m,a(a({ref:t},c),{},{components:n})):r.createElement(m,a({ref:t},c))}));function f(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,a=new Array(o);a[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:i,a[1]=s;for(var u=2;u<o;u++)a[u]=n[u];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},78879:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return a},metadata:function(){return s},toc:function(){return l},default:function(){return c}});var r=n(22122),i=n(19756),o=(n(67294),n(3905)),a={title:"Salesforce"},s={unversionedId:"apps/salesforce",id:"apps/salesforce",isDocsHomePage:!1,title:"Salesforce",description:"Options d'int\xe9gration Salesforce",source:"@site/i18n/fr/docusaurus-plugin-content-docs/current/apps/salesforce.md",sourceDirName:"apps",slug:"/apps/salesforce",permalink:"/fr/documentation/apps/salesforce",editUrl:"https://github.com/openfn/docs/edit/main/docs/apps/salesforce.md",version:"current",frontMatter:{title:"Salesforce"},sidebar:"docs",previous:{title:"Power BI",permalink:"/fr/documentation/apps/powerbi"},next:{title:"SurveyCTO",permalink:"/fr/documentation/apps/survey-cto"}},l=[{value:"Options d&#39;int\xe9gration Salesforce",id:"options-dint\xe9gration-salesforce",children:[]},{value:"Identifiants Salesforce",id:"identifiants-salesforce",children:[{value:"R\xe9initialisation de votre jeton de s\xe9curit\xe9",id:"r\xe9initialisation-de-votre-jeton-de-s\xe9curit\xe9",children:[]}]}],u={toc:l};function c(e){var t=e.components,a=(0,i.Z)(e,["components"]);return(0,o.kt)("wrapper",(0,r.Z)({},u,a,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"options-dint\xe9gration-salesforce"},"Options d'int\xe9gration Salesforce"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"API : Salesforce dispose d'un ensemble robuste d'API RESTful qui prennent en charge une large gamme d'op\xe9rations. Voir l'adaptateur d'API OpenFn ",(0,o.kt)("a",{parentName:"li",href:"https://github.com/OpenFn/language-salesforce"},(0,o.kt)("inlineCode",{parentName:"a"},"language-salesforce")),"."),(0,o.kt)("li",{parentName:"ol"},"Webhook: En utilisant ",(0,o.kt)("a",{parentName:"li",href:"https://developer.salesforce.com/docs/atlas.en-us.api.meta/api/sforce_api_om_outboundmessaging_understanding.htm"},(0,o.kt)("inlineCode",{parentName:"a"},"Outbound Messages"))," et l'automatisation des flux de travail, les administrateurs peuvent configurer les notifications \xe0 envoyer \xe0 OpenFn lorsqu'un \xe9v\xe9nement sp\xe9cifique se produit.")),(0,o.kt)("h2",{id:"identifiants-salesforce"},"Identifiants Salesforce"),(0,o.kt)("p",null,"Salesforce n\xe9cessite un nom d'utilisateur, un mot de passe, une URL de connexion et un jeton de s\xe9curit\xe9 pour s'authentifier via un utilisateur. ",(0,o.kt)("strong",{parentName:"p"},"Chaque fois que vous r\xe9initialisez le mot de passe de l'utilisateur, le jeton de s\xe9curit\xe9 est aussi r\xe9initialis\xe9. Par cons\xe9quent, vous devez mettre \xe0 jour l'enregistrement de l'identifiant utilis\xe9 dans votre job OpenFn.")),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Menu des identifiants",src:n(49290).Z})),(0,o.kt)("p",null,"Un enregistrement d'identifiant \xab\xa0Salesforce\xa0\xbb devrait inclure\xa0:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Nom d'utilisateur"),(0,o.kt)("li",{parentName:"ul"},"Mot de passe"),(0,o.kt)("li",{parentName:"ul"},"Jeton de s\xe9curit\xe9 (Salesforce vous l'enverra par courriel lorsque vous d\xe9finissez votre mot de passe. Si vous ne trouvez pas de \xab\xa0jeton de s\xe9curit\xe9\xa0\xbb dans votre bo\xeete de r\xe9ception, voyez ci-dessous comment le r\xe9initialiser .)"),(0,o.kt)("li",{parentName:"ul"},"URL de connexion\xa0: S'il s'agit d'un syst\xe8me de production, utilisez ",(0,o.kt)("inlineCode",{parentName:"li"},"https://login.salesforce.com/")," (\xe0 moins que vous ayez un domaine personnalis\xe9 ",(0,o.kt)("inlineCode",{parentName:"li"},"https://domainName.salesforce.com/"),"). Pour les environnements sandbox , ",(0,o.kt)("inlineCode",{parentName:"li"},"https://test.salesforce.com/"),".")),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Identifiant Salesforce",src:n(23980).Z})),(0,o.kt)("p",null,"Pour ",(0,o.kt)("strong",{parentName:"p"},"OpenFn/devtools")," ou ",(0,o.kt)("strong",{parentName:"p"},"OpenFn/engine")," le JSON brut de l'identifiant pour l'inclusion dans ",(0,o.kt)("inlineCode",{parentName:"p"},"state")," devrait ressembler \xe0 ceci :"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'"configuration": {\n  "loginUrl": "https://login.salesforce.com/",\n  "username": "openfn@salesforce.org",\n  "password": "testing123",\n  "securityToken": "Mh4gkye9BVZA9dDjD61Fnd1ba"\n},\n')),(0,o.kt)("h3",{id:"r\xe9initialisation-de-votre-jeton-de-s\xe9curit\xe9"},"R\xe9initialisation de votre jeton de s\xe9curit\xe9"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://help.salesforce.com/articleView?id=sf.user_security_token.htm&type=5"},"Voir les instructions ici")," ou en-dessous de la capture d'\xe9cran. Une fois r\xe9initialis\xe9, vous recevrez un courriel de Salesforce. Veuillez enregistrer ce ",(0,o.kt)("inlineCode",{parentName:"p"},"security token")," (jeton de s\xe9curit\xe9) dans votre ",(0,o.kt)("inlineCode",{parentName:"p"},"Credential")," OpenFn."),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"R\xe9initialisation du jeton",src:n(69920).Z})))}c.isMDXComponent=!0},49290:function(e,t,n){"use strict";t.Z=n.p+"assets/images/credentials-864839c91f9940b590649a47da35fc00.png"},23980:function(e,t,n){"use strict";t.Z=n.p+"assets/images/salesforce-cred-5d5b9ada850c8a58fc99d009ab4835a4.png"},69920:function(e,t,n){"use strict";t.Z=n.p+"assets/images/security-token-67feb0a8803f27c60871f43472947981.png"}}]);