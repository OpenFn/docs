"use strict";(self.webpackChunk_openfn_docs=self.webpackChunk_openfn_docs||[]).push([[64098],{3905:(e,t,n)=>{n.d(t,{Zo:()=>m,kt:()=>h});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),l=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},m=function(e){var t=l(e.components);return r.createElement(s.Provider,{value:t},e.children)},u="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,m=p(e,["components","mdxType","originalType","parentName"]),u=l(n),d=a,h=u["".concat(s,".").concat(d)]||u[d]||c[d]||o;return n?r.createElement(h,i(i({ref:t},m),{},{components:n})):r.createElement(h,i({ref:t},m))}));function h(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=d;var p={};for(var s in t)hasOwnProperty.call(t,s)&&(p[s]=t[s]);p.originalType=e,p[u]="string"==typeof e?e:a,i[1]=p;for(var l=2;l<o;l++)i[l]=n[l];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},15207:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>u,frontMatter:()=>o,metadata:()=>p,toc:()=>l});var r=n(87462),a=(n(67294),n(3905));const o={title:"OpenHIE instantan\xe9"},i=void 0,p={unversionedId:"instant-openhie",id:"instant-openhie",title:"OpenHIE instantan\xe9",description:"Aper\xe7u",source:"@site/i18n/fr/docusaurus-plugin-content-docs/current/instant-openhie.md",sourceDirName:".",slug:"/instant-openhie",permalink:"/fr/documentation/instant-openhie",draft:!1,editUrl:"https://github.com/openfn/docs/edit/main/docs/instant-openhie.md",tags:[],version:"current",frontMatter:{title:"OpenHIE instantan\xe9"},sidebar:"docs",previous:{title:"Microservice",permalink:"/fr/documentation/microservice/home"},next:{title:"DIY",permalink:"/fr/documentation/deploy/diy"}},s={},l=[{value:"Aper\xe7u",id:"aper\xe7u",level:2},{value:"Cas d&#39;utilisation pour l&#39;impl\xe9mentation du prototype",id:"cas-dutilisation-pour-limpl\xe9mentation-du-prototype",level:2},{value:"R\xe9cits utilisateur",id:"r\xe9cits-utilisateur",level:3},{value:"Conception de la mise en \u0153uvre",id:"conception-de-la-mise-en-\u0153uvre",level:2},{value:"Explorer l\u2019impl\xe9mentation",id:"explorer-limpl\xe9mentation",level:2},{value:"\xc0 propos de la configuration de l&#39;impl\xe9mentation",id:"\xe0-propos-de-la-configuration-de-limpl\xe9mentation",level:2},{value:"Processus",id:"processus",level:3},{value:"\xc9tapes de configuration du projet",id:"\xe9tapes-de-configuration-du-projet",level:3},{value:"Notes sur l&#39;\xe9criture des t\xe2ches",id:"notes-sur-l\xe9criture-des-t\xe2ches",level:2},{value:"\xc9tapes de d\xe9ploiement du syst\xe8me",id:"\xe9tapes-de-d\xe9ploiement-du-syst\xe8me",level:2}],m={toc:l};function u(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"aper\xe7u"},"Aper\xe7u"),(0,a.kt)("p",null,"En partenariat avec ",(0,a.kt)("a",{parentName:"p",href:"https://digitalsquare.org/"},"Digital Square")," et ",(0,a.kt)("em",{parentName:"p"},"FCDO COVIDaction"),", ",(0,a.kt)("strong",{parentName:"p"},"OpenFn a investi dans sa bo\xeete \xe0 outils d'int\xe9gration open source")," pour fournir des solutions d'int\xe9gration robustes qui peuvent connecter ",(0,a.kt)("em",{parentName:"p"},"n'importe quel syst\xe8me de sant\xe9 num\xe9rique")," et \xeatre rapidement impl\xe9ment\xe9es sur n'importe quel serveur, dans n'importe quel pays, par n'importe quelle organisation."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("a",{parentName:"strong",href:"/documentation/microservice/home/"},"OpenFn/microservice"))," est une composante enti\xe8rement compatible avec ",(0,a.kt)("a",{parentName:"p",href:"https://wiki.ohie.org/display/resources/Instant+OpenHIE"},"Instant OpenHIE")," qui peut \xeatre utilis\xe9e pour piloter le flux de travail, se conformer aux normes et int\xe9grer les composants de la pile ",(0,a.kt)("a",{parentName:"p",href:"https://openhim.readthedocs.io/en/latest/implementations/openhie.html"},"OpenHIE"),"."),(0,a.kt)("p",null,"Nous cherchons \xe0 am\xe9liorer la valeur du projet ",(0,a.kt)("a",{parentName:"p",href:"https://wiki.ohie.org/display/resources/Instant+OpenHIE"},"Instant OpenHIE")," en d\xe9veloppant un paquet qui inclura ",(0,a.kt)("a",{parentName:"p",href:"https://openfn.org/"},"OpenFn")," comme voie d'int\xe9gration pour se connecter \xe0 l'architecture ",(0,a.kt)("a",{parentName:"p",href:"https://wiki.ohie.org/pages/viewpage.action?pageId=8454157"},"OpenHIE"),"."),(0,a.kt)("p",null,"Ce paquet vise \xe0 am\xe9liorer la valeur de ",(0,a.kt)("a",{parentName:"p",href:"https://wiki.ohie.org/display/resources/Instant+OpenHIE"},"Instant OpenHIE")," en fournissant une autre option pour un traitement d'informations robuste, l'int\xe9gration et l'automatisation des processus m\xe9tier (flux de travail). Lors du d\xe9ploiement de ",(0,a.kt)("a",{parentName:"p",href:"https://wiki.ohie.org/display/resources/Instant+OpenHIE"},"Instant OpenHIE"),", les impl\xe9mentateurs ont maintenant l'option d'inclure ",(0,a.kt)("a",{parentName:"p",href:"https://openfn.org/"},"OpenFn")," en tant que composant."),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://openfn.org/"},"OpenFn")," peut \xe9galement \xeatre utilis\xe9 comme moteur de flux de travail pour automatiser une logique de travail complexe \xe0 c\xf4t\xe9 de ",(0,a.kt)("a",{parentName:"p",href:"http://openhim.org/"},"OpenHIM")," et de la ",(0,a.kt)("a",{parentName:"p",href:"https://openhim.readthedocs.io/en/latest/implementations/openhie.html"},"pile OpenHIE"),". Les ",(0,a.kt)("a",{parentName:"p",href:"/documentation/build/jobs/"},"t\xe2ches ")," individuelles dans ",(0,a.kt)("a",{parentName:"p",href:"https://openfn.org/"},"OpenFn"),", parfois nombreuses dans un seul d\xe9ploiement de microservice, peut \xeatre utilis\xe9 comme ",(0,a.kt)("em",{parentName:"p"},"\xab m\xe9diateurs \xbb")," (",(0,a.kt)("a",{parentName:"p",href:"http://openhim.org/mediator-library/"},"voir la biblioth\xe8que OpenHIE de m\xe9diateurs existants"),") pour transformer rapidement et cartographier les donn\xe9es \xe0 l'architecture ",(0,a.kt)("a",{parentName:"p",href:"https://wiki.ohie.org/pages/viewpage.action?pageId=8454157"},"OpenHIE"),"."),(0,a.kt)("p",null,"Pour d\xe9montrer un cas d'utilisation r\xe9el de la fa\xe7on dont ",(0,a.kt)("a",{parentName:"p",href:"https://openfn.org/"},"OpenFn")," pourrait \xeatre impl\xe9ment\xe9 dans l'architecture ",(0,a.kt)("a",{parentName:"p",href:"https://wiki.ohie.org/pages/viewpage.action?pageId=8454157"},"OpenHIE"),", nous avons rencontr\xe9 plusieurs membres de la communaut\xe9 pour identifier des cas d'utilisation cl\xe9s pour une impl\xe9mentation de prototype de r\xe9f\xe9rence."),(0,a.kt)("p",null,"Visitez le ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/OpenFn/instant-demo"},"d\xe9p\xf4t de d\xe9mo ici"),"."),(0,a.kt)("h2",{id:"cas-dutilisation-pour-limpl\xe9mentation-du-prototype"},"Cas d'utilisation pour l'impl\xe9mentation du prototype"),(0,a.kt)("p",null,"Nous avons vu que le cas d\u2019utilisation de l\u2019int\xe9gration le plus courant est que les prestataires de services de sant\xe9, en particulier les grands agents de sant\xe9 communautaires (\xab ASC \xbb), doivent int\xe9grer leurs donn\xe9es et leur programmation dans des architectures nationales de cybersant\xe9."),(0,a.kt)("h3",{id:"r\xe9cits-utilisateur"},"R\xe9cits utilisateur"),(0,a.kt)("blockquote",null,(0,a.kt)("ol",{parentName:"blockquote"},(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("em",{parentName:"li"},"En tant que responsable de la mise en \u0153uvre de la sant\xe9 communautaire, je souhaite int\xe9grer mon application de gestion de cas CommCare utilis\xe9e par les ASC au registre national des patients, afin de pouvoir d\xe9velopper un dossier de sant\xe9 partag\xe9 et automatiser les pipelines de rapports.")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("em",{parentName:"li"},"En tant que prestataire de services de sant\xe9, je souhaite int\xe9grer mon application existante au SIH national, mais je veux appliquer la norme FHIR \xe0 mes donn\xe9es collect\xe9es avant le partage pour adh\xe9rer aux exigences de conformit\xe9 et de rapport.")))),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Nous avons donc d\xe9cid\xe9 de cr\xe9er une solution d'int\xe9gration qui d\xe9montre comment les applications ",(0,a.kt)("strong",{parentName:"li"},"ASC")," existantes peuvent \xeatre int\xe9gr\xe9es \xe0 l'infrastructure nationale de sant\xe9 et tirer parti d'un travail simple sur ",(0,a.kt)("a",{parentName:"li",href:"https://openfn.org/"},"OpenFn")," en tant que m\xe9diateur ",(0,a.kt)("a",{parentName:"li",href:"http://openhim.org/mediator-library/"})," pour appliquer la norme de donn\xe9es FHIR ",(0,a.kt)("a",{parentName:"li",href:"https://fhir.org/"})," et d'autres manipulations de donn\xe9es n\xe9cessaires pour s'int\xe9grer \xe0 ",(0,a.kt)("a",{parentName:"li",href:"https://hapifhir.io/"},"HAPI FHIR"),".")),(0,a.kt)("h2",{id:"conception-de-la-mise-en-\u0153uvre"},"Conception de la mise en \u0153uvre"),(0,a.kt)("p",null,"En r\xe9sum\xe9, le prototype envoie les donn\xe9es d'enregistrement des cas de patients depuis les applications mobiles de collecte de donn\xe9es (",(0,a.kt)("a",{parentName:"p",href:"https://www.commcarehq.org/"},"CommCare"),", ",(0,a.kt)("a",{parentName:"p",href:"https://www.kobotoolbox.org/"},"KoboToolbox"),") \xe0 ",(0,a.kt)("a",{parentName:"p",href:"/documentation/microservice/home/"},"OpenFn/microservice"),". ",(0,a.kt)("a",{parentName:"p",href:"https://openfn.org/"},"OpenFn")," transforme ensuite les donn\xe9es et s'assure qu'elles adh\xe8rent aux normes de donn\xe9es ",(0,a.kt)("a",{parentName:"p",href:"https://fhir.org/"},"FHIR")," ",(0,a.kt)("a",{parentName:"p",href:"https://www.hl7.org/fhir/patient-example.json.html"},"patient")," et ",(0,a.kt)("a",{parentName:"p",href:"https://www.hl7.org/fhir/encounter-example.json.html"},"r\xe9pondent ")," aux normes de donn\xe9es, vant de l'envoyer vers un ",(0,a.kt)("a",{parentName:"p",href:"https://fhir.org/"},"FHIR canal")," dans ",(0,a.kt)("a",{parentName:"p",href:"http://openhim.org/"},"OpenHIM"),". ",(0,a.kt)("a",{parentName:"p",href:"http://openhim.org/"},"OpenHIM")," est utilis\xe9 ici comme un ","_","\xab canal \xbb","_"," pour l'architecture ",(0,a.kt)("a",{parentName:"p",href:"https://wiki.ohie.org/pages/viewpage.action?pageId=8454157"},"OpenHIE")," afin de valider les demandes et les transmettre \xe0 d'autres syst\xe8mes dans l'architecture ",(0,a.kt)("strong",{parentName:"p"},"nationale de cybersant\xe9"),". Dans ce cas, nous transf\xe9rons les donn\xe9es du cas vers pour que le patient soit enregistrer dans un serveur ",(0,a.kt)("a",{parentName:"p",href:"https://hapifhir.io/"},"HAPI FHIR"),"."),(0,a.kt)("p",null,"Cette conception d'impl\xe9mentation a \xe9t\xe9 jug\xe9e la plus \xe9lev\xe9e / la plus demand\xe9e car elle exploite les fonctionnalit\xe9s de base d'",(0,a.kt)("a",{parentName:"p",href:"http://openhim.org/"},"OpenHIM")," (fournissant un proxy invers\xe9 et g\xe9n\xe9rant une piste d'audit) sans obliger les int\xe9grateurs \xe0 cr\xe9er un nouveau ",(0,a.kt)("a",{parentName:"p",href:"http://openhim.org/mediator-library/"},"m\xe9diateur, un")," processus plus complexe que de configurer une ",(0,a.kt)("a",{parentName:"p",href:"/documentation/build/jobs/"},"t\xe2che")," dans un ",(0,a.kt)("a",{parentName:"p",href:"/documentation/build/example-build/"},"projet OpenFn"),"."),(0,a.kt)("p",null,"Ce prototype inclut les composants suivants :"),(0,a.kt)("p",null,"Une instance ",(0,a.kt)("a",{parentName:"p",href:"https://wiki.ohie.org/display/resources/Instant+OpenHIE"},"Instant OpenHIE")," peut \xeatre cr\xe9\xe9e, contenant ",(0,a.kt)("a",{parentName:"p",href:"https://hapifhir.io/"},"HAPI FHIR"),", ",(0,a.kt)("a",{parentName:"p",href:"http://openhim.org/"},"OpenHIM"),", et un seul ",(0,a.kt)("a",{parentName:"p",href:"/documentation/microservice/home/"},"d\xe9ploiement OpenFn/microservice")," (un fichier ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/OpenFn/microservice/blob/main/project.yaml.example"},"projet.aml"),", export\xe9 \xe0 partir de ",(0,a.kt)("a",{parentName:"p",href:"https://openfn.org/"},"OpenFn/platform"),") avec 2 taches diff\xe9rentes ",(0,a.kt)("a",{parentName:"p",href:"/documentation/build/jobs/"}),". Lorsque les donn\xe9es sont transf\xe9r\xe9es \xe0 ",(0,a.kt)("a",{parentName:"p",href:"/documentation/microservice/home/"},"OpenFn/microservice")," \xe0 partir de deux soumissions de formulaire distinctes sur ",(0,a.kt)("a",{parentName:"p",href:"https://www.commcarehq.org/"},"CommCare")," et ",(0,a.kt)("a",{parentName:"p",href:"https://www.kobotoolbox.org/"},"Kobo"),", elles sont trait\xe9es et cr\xe9ent des ressources ",(0,a.kt)("a",{parentName:"p",href:"https://fhir.org/"},"FHIR")," des patient via ",(0,a.kt)("a",{parentName:"p",href:"http://openhim.org/"},"OpenHIM")," et ",(0,a.kt)("a",{parentName:"p",href:"https://hapifhir.io/"},"HAPI FHIR"),". Nous avons opt\xe9 pour un seul \xab projet \xbb ",(0,a.kt)("a",{parentName:"p",href:"/documentation/microservice/home/"},"OpenFn/microservice")," avec deux ",(0,a.kt)("a",{parentName:"p",href:"/documentation/build/jobs/"},"t\xe2ches")," et ",(0,a.kt)("a",{parentName:"p",href:"/documentation/build/triggers/"},"d\xe9clencheurs")," l\xe9g\xe8rement diff\xe9rents pour mettre en \xe9vidence la polyvalence des ",(0,a.kt)("a",{parentName:"p",href:"/documentation/build/example-build/"},"projects OpenFn"),"."),(0,a.kt)("h2",{id:"explorer-limpl\xe9mentation"},"Explorer l\u2019impl\xe9mentation"),(0,a.kt)("p",null,"Actuellement, il y a deux fa\xe7ons diff\xe9rentes d'explorer cette d\xe9mo. La premi\xe8re (la m\xe9thode ",(0,a.kt)("em",{parentName:"p"},"\xab Instant \xbb")," ) la plus traditionnelle consiste \xe0 ",(0,a.kt)("strong",{parentName:"p"},"cloner le d\xe9p\xf4t OpenFn/Instant-demo"),". Une fois \xe0 l'int\xe9rieur, les utilisateurs tapent sur ",(0,a.kt)("em",{parentName:"p"},"\xab configuration du fil \xbb")," pour tout mettre en marche. L'ex\xe9cution d'un ",(0,a.kt)("em",{parentName:"p"},"\xab test de fil \xbb")," d\xe9montrera ensuite le flux ",(0,a.kt)("a",{parentName:"p",href:"https://www.kobotoolbox.org/"},"Kobo"),"/",(0,a.kt)("a",{parentName:"p",href:"https://www.commcarehq.org/"},"CommCare")," \xe0 ",(0,a.kt)("a",{parentName:"p",href:"https://openfn.org/"},"OpenFn")," \xe0 ",(0,a.kt)("a",{parentName:"p",href:"http://openhim.org/"},"OpenHIM")," \xe0 ",(0,a.kt)("a",{parentName:"p",href:"https://fhir.org/"},"FHIR"),"."),(0,a.kt)("p",null,"Ils peuvent explorer les diff\xe9rents ",(0,a.kt)("a",{parentName:"p",href:"/documentation/build/jobs/"},"taches"),", exemples de charges utiles, points de terminaison, et publier des donn\xe9es aux diff\xe9rents terminaux en utilisant soit les param\xe8tres de transfert de donn\xe9es dans ",(0,a.kt)("a",{parentName:"p",href:"https://www.commcarehq.org/"},"CommCare")," et ",(0,a.kt)("a",{parentName:"p",href:"https://www.kobotoolbox.org/"},"Kobo")," ou via ",(0,a.kt)("a",{parentName:"p",href:"https://curl.se/"},"CURL")," (ou leur requ\xeate HTTP agent de choix.)"),(0,a.kt)("p",null,"Une fois ex\xe9cut\xe9, les utilisateurs peuvent voir comment les soumissions standard ",(0,a.kt)("a",{parentName:"p",href:"https://www.commcarehq.org/"},"CommCare")," et ",(0,a.kt)("a",{parentName:"p",href:"https://www.kobotoolbox.org/"},"Kobo")," sont transform\xe9es par l'",(0,a.kt)("a",{parentName:"p",href:"/documentation/microservice/home/"},"OpenFn/microservice")," pour adh\xe9rer aux sp\xe9cifications ",(0,a.kt)("a",{parentName:"p",href:"https://fhir.org/"},"FHIR")," pour les ",(0,a.kt)("a",{parentName:"p",href:"https://www.hl7.org/fhir/patient-example.json.html"},"patients")," et les ",(0,a.kt)("a",{parentName:"p",href:"https://www.hl7.org/fhir/encounter-example.json.html"},"rencontres"),", et ensuite que ces ressources suivantes sont cr\xe9\xe9es sur le serveur ",(0,a.kt)("a",{parentName:"p",href:"https://hapifhir.io/"},"HAPI FHIR")," via un canal sur l'",(0,a.kt)("a",{parentName:"p",href:"http://openhim.org/"},"OpenHIM"),"."),(0,a.kt)("p",null,"La seconde (l\xe9g\xe8rement moins conventionnelle) pour explorer la ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/OpenFn/instant-demo"},"d\xe9mo"),", est via ",(0,a.kt)("a",{parentName:"p",href:"https://openfn.org/"},"OpenFn.org"),". Puisque ",(0,a.kt)("a",{parentName:"p",href:"/documentation/build/example-build/"},"les projets OpenFn")," peuvent \xeatre ex\xe9cut\xe9s dans un",(0,a.kt)("a",{parentName:"p",href:"/documentation/microservice/home/"},"microservice")," ou sur la ",(0,a.kt)("a",{parentName:"p",href:"https://openfn.org/"},"plate-forme h\xe9berg\xe9e"),", nous avons fourni une instance de projet sur ",(0,a.kt)("a",{parentName:"p",href:"https://openfn.org/"},"OpenFn.org")," qui permet aux utilisateurs d'explorer la configuration requise pour int\xe9grer ",(0,a.kt)("a",{parentName:"p",href:"https://openfn.org/"},"OpenFn")," dans un projet ",(0,a.kt)("a",{parentName:"p",href:"https://wiki.ohie.org/display/resources/Instant+OpenHIE"},"Instant OpenHIE"),". Il y a trois ",(0,a.kt)("a",{parentName:"p",href:"https://openfn.org/projects/p5pqx3/jobs"},"taches")," accessibles avec un ",(0,a.kt)("strong",{parentName:"p"},"utilisateur de d\xe9monstration")," avec un",(0,a.kt)("em",{parentName:"p"},"nom d'utilisateur : ",(0,a.kt)("a",{parentName:"em",href:"mailto:demo@openfn.org"},"demo@openfn.org"))," et ",(0,a.kt)("em",{parentName:"p"},"un mot de passe : guest123"),"."),(0,a.kt)("p",null,"Les trois t\xe2ches montreront :"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Comment une soumission de ",(0,a.kt)("a",{parentName:"li",href:"https://www.commcarehq.org/"},"CommCare")," est transform\xe9e et envoy\xe9e \xe0 ",(0,a.kt)("a",{parentName:"li",href:"https://hapifhir.io/"},"HAPI FHIR")," ;"),(0,a.kt)("li",{parentName:"ul"},"Comment une soumission ",(0,a.kt)("a",{parentName:"li",href:"https://www.kobotoolbox.org/"},"Kobo")," est transform\xe9e et envoy\xe9e \xe0 ",(0,a.kt)("a",{parentName:"li",href:"https://hapifhir.io/"},"HAPI FHIR")," ;"),(0,a.kt)("li",{parentName:"ul"},"Et \xe0 quoi ressemblent les ressources finales qui seraient envoy\xe9es \xe0 ",(0,a.kt)("a",{parentName:"li",href:"https://hapifhir.io/"},"HAPI FHIR"),".")),(0,a.kt)("p",null,"Nous esp\xe9rons que cela fournira un point d'entr\xe9e pr\xe9cieux pour la configuration d'",(0,a.kt)("a",{parentName:"p",href:"https://wiki.ohie.org/display/resources/Instant+OpenHIE"},"Instant d'OpenHIE")," avec ",(0,a.kt)("a",{parentName:"p",href:"/documentation/microservice/home/"},"OpenFn/microservices"),"."),(0,a.kt)("h2",{id:"\xe0-propos-de-la-configuration-de-limpl\xe9mentation"},"\xc0 propos de la configuration de l'impl\xe9mentation"),(0,a.kt)("h3",{id:"processus"},"Processus"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"Nous avons rencontr\xe9 des ",(0,a.kt)("a",{parentName:"p",href:"https://ohie.org/tag/community/"},"membres de la communaut\xe9 OpenHIE")," pour comprendre les cas d'utilisation, et avec ",(0,a.kt)("a",{parentName:"p",href:"https://www.jembi.org/"},"Jembi Health Systems")," pour en savoir plus sur les paquets, les sp\xe9cifications et les exigences de conformit\xe9 ",(0,a.kt)("a",{parentName:"p",href:"https://wiki.ohie.org/display/resources/Instant+OpenHIE"},"Instant OpenHIE"),".")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"\xc9chantillon de sources de donn\xe9es identifi\xe9es (vraies formulaires d'enregistrement de cas",(0,a.kt)("a",{parentName:"p",href:"https://www.commcarehq.org/"},"CommCare")," et ",(0,a.kt)("a",{parentName:"p",href:"https://www.kobotoolbox.org/"},"Kobo - voic ici)")," que nous pourrions utiliser pour envoyer des donn\xe9es \xe0 l'",(0,a.kt)("strong",{parentName:"p"},"'architecture nationale de cybersant\xe9"),". Voici un ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/OpenFn/instant-demo/blob/main/fixtures/commcare_sample.json"},"exemple de charge utile de soumission de CommCare")," Voici un ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/OpenFn/instant-demo/blob/main/fixtures/koboCaseRegistration.json"},"exemple de charge utile de soumission de Kobo"))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"R\xe9vision de la documentation ",(0,a.kt)("a",{parentName:"p",href:"https://fhir.org/"},"FHIR-HL7")," pour d\xe9terminer les exigences des normes de donn\xe9es pour les donn\xe9es des patients et les donn\xe9es de rencontre. Voir ",(0,a.kt)("a",{parentName:"p",href:"https://www.hl7.org/fhir/patient-example.json.html"},"la sp\xe9cification du patient FHIR")," et ",(0,a.kt)("a",{parentName:"p",href:"https://www.hl7.org/fhir/encounter-example.json.html"},"la sp\xe9cification de rencontre FHIR"),".")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"\xc9valuation des capacit\xe9s",(0,a.kt)("a",{parentName:"p",href:"https://openfn.org/"},"OpenFn")," vs. ",(0,a.kt)("a",{parentName:"p",href:"http://openhim.org/"},"OpenHIM")," pour d\xe9terminer comment utiliser. Nous avons d\xe9termin\xe9 que l'utilisation d'un ",(0,a.kt)("a",{parentName:"p",href:"http://openhim.org/"},"canal OpenHIM")," tirera parti de la fonctionnalit\xe9 d'audit principale d'",(0,a.kt)("a",{parentName:"p",href:"http://openhim.org/"},"OpenHIM"),", mais pas nous obliger \xe0 cr\xe9er un ",(0,a.kt)("a",{parentName:"p",href:"http://openhim.org/mediator-library/"},"nouveau m\xe9diateur"),"."))),(0,a.kt)("h3",{id:"\xe9tapes-de-configuration-du-projet"},"\xc9tapes de configuration du projet"),(0,a.kt)("p",null,"Il y a deux fa\xe7ons de configurer un ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/OpenFn/microservice/blob/main/project.yaml.example"},"project.yaml")," pour s'ex\xe9cuter en tant que ",(0,a.kt)("a",{parentName:"p",href:"/documentation/microservice/home/"},"microservice"),". La premi\xe8re est d'utiliser la ",(0,a.kt)("a",{parentName:"p",href:"https://openfn.org/"},"plateforme OpenFn.org "),", et la seconde est d'utiliser ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/OpenFn/devtools"},"OpenFn/devtools"),"."),(0,a.kt)("p",null,"Ces deux m\xe9thodes sont d\xe9taill\xe9es ci-dessous :"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("strong",{parentName:"p"},"Configurer un projet en utilisant la plate-forme OpenFn.org")),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"Cette option permet aux organisations d\u2019exploiter les fonctionnalit\xe9s int\xe9gr\xe9es d'",(0,a.kt)("a",{parentName:"p",href:"https://openfn.org/"},"OpenFn.org")," pour faciliter la configuration du ",(0,a.kt)("a",{parentName:"p",href:"/documentation/build/example-build/"},"projet")," , ",(0,a.kt)("a",{parentName:"p",href:"/documentation/build/jobs/"},"l'\xe9criture de t\xe2ches")," et la gestion du code source.")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"Le fichier ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/OpenFn/microservice/blob/main/project.yaml.example"},"projet.yaml")," g\xe9n\xe9r\xe9 \xe0 partir de cette configuration de projet sera alors utilis\xe9 comme structure de base pour l' ",(0,a.kt)("a",{parentName:"p",href:"/documentation/microservice/home/"},"OpenFn Microservice"),".")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"Les \xe9tapes pour configurer le projet ",(0,a.kt)("a",{parentName:"p",href:"/documentation/microservice/home/"},"OpenFn Microservice")," en utilisant la ",(0,a.kt)("a",{parentName:"p",href:"https://openfn.org/"},"plate-forme OpenFn.org")," sont les suivantes :"),(0,a.kt)("p",{parentName:"li"},(0,a.kt)("strong",{parentName:"p"},"A. Ajoutez ",(0,a.kt)("a",{parentName:"strong",href:"/documentation/build/credentials/"},"les identifiants")," au projet qui seront utilis\xe9es pour connecter le Microservice OpenFn \xe0 OpenHIM.")),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"C'est \xe9galement l'occasion d'ajouter des ",(0,a.kt)("a",{parentName:"li",href:"/documentation/build/credentials/"},"identifiants ")," qu' ",(0,a.kt)("a",{parentName:"li",href:"/documentation/microservice/home/"},"OpenFn Microservice")," peut utiliser pour se connecter aux syst\xe8mes sources (comme ",(0,a.kt)("a",{parentName:"li",href:"https://www.commcarehq.org/"},"CommCare")," ou ",(0,a.kt)("a",{parentName:"li",href:"https://www.kobotoolbox.org/"},"KoBotoolbox"),").")),(0,a.kt)("p",{parentName:"li"},(0,a.kt)("strong",{parentName:"p"},"B. Ajouter les ",(0,a.kt)("a",{parentName:"strong",href:"/documentation/build/triggers/"},"d\xe9clencheurs")," au projet qui serontutilis\xe9s par ",(0,a.kt)("a",{parentName:"strong",href:"/documentation/microservice/home/"},"OpenFn Microservice")," pour faire correspondre les charges des syst\xe8mes sources aux ",(0,a.kt)("a",{parentName:"strong",href:"/documentation/build/jobs/"},"OpenFn Microservice Jobs"),".")),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"Notez que le ",(0,a.kt)("a",{parentName:"p",href:"/documentation/microservice/home/"},"Microservice")," est configur\xe9 pour ex\xe9cuter une t\xe2che ",(0,a.kt)("a",{parentName:"p",href:"/documentation/build/jobs/"})," en fonction de la forme de la charge utile entrante.")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"Par exemple, un d\xe9clencheur ",(0,a.kt)("a",{parentName:"p",href:"/documentation/build/triggers/"})," peut \xeatre configur\xe9 pour correspondre aux charges utiles, \xe0 partir de ",(0,a.kt)("a",{parentName:"p",href:"https://www.commcarehq.org/"},"CommCare"),", qui contiennent le message ",(0,a.kt)("inlineCode",{parentName:"p"},"{\xab @name \xbb : \xab Inscrire un nouveau patient \xbb}")," dans le corps de leur message.")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"Une ",(0,a.kt)("a",{parentName:"p",href:"/documentation/build/jobs/"},"t\xe2che")," donn\xe9e correspondra alors \xe0 ce message, et sera utilis\xe9 par le ",(0,a.kt)("a",{parentName:"p",href:"/documentation/microservice/home/"},"Microservice OpenFn")," pour (a) cr\xe9er un une charge utile dans le ",(0,a.kt)("a",{parentName:"p",href:"https://fhir.org/"},"standard FHIR")," contenant une",(0,a.kt)("a",{parentName:"p",href:"https://www.hl7.org/fhir/encounter-example.json.html"},"ressource de rencontre")," et (b) envoyer la charge utile",(0,a.kt)("a",{parentName:"p",href:"https://www.hl7.org/fhir/patient-example.json.html"},"standard FHIR ")," \xe0 ",(0,a.kt)("a",{parentName:"p",href:"http://openhim.org/"},"OpenHIM")," avec des instructions pour le charger sur ",(0,a.kt)("a",{parentName:"p",href:"https://hapifhir.io/"},"HAPI FHIR"),"."))),(0,a.kt)("p",{parentName:"li"},(0,a.kt)("strong",{parentName:"p"},"C. Exporter le fichier ",(0,a.kt)("a",{parentName:"strong",href:"https://github.com/OpenFn/microservice/blob/main/project.yaml.example"},"project.yaml")," en utilisant l'assistant d'exportation d'",(0,a.kt)("a",{parentName:"strong",href:"https://openfn.org/"},"OpenFn.org"))),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"Le fichier ",(0,a.kt)("a",{parentName:"li",href:"https://github.com/OpenFn/microservice/blob/main/project.yaml.example"},"YAML g\xe9n\xe9r\xe9")," sera ensuite utilis\xe9 par ",(0,a.kt)("a",{parentName:"li",href:"/documentation/microservice/home/"},"OpenFn Microservice")," pour ex\xe9cuter les ",(0,a.kt)("a",{parentName:"li",href:"/documentation/build/jobs/"},"t\xe2ches")," pour les charges utiles correspondantes."))))),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("strong",{parentName:"p"},"Configurer un projet en utilisant ",(0,a.kt)("a",{parentName:"strong",href:"https://github.com/OpenFn/devtools"},"OpenFn/devtools"))),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"Cette option permet aux organisations de configurer les fichiers source du",(0,a.kt)("a",{parentName:"p",href:"/documentation/build/example-build/"},"project")," et de l' ",(0,a.kt)("a",{parentName:"p",href:"/documentation/build/jobs/#a-basic-expression"},"expression de t\xe2che"),", pour ",(0,a.kt)("a",{parentName:"p",href:"/documentation/build/example-build/"},"les projects OpenFn Microservice"),", sans utiliser la",(0,a.kt)("a",{parentName:"p",href:"https://openfn.org/"},"plateforme OpenFn"),".")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"Avec cette option, il est recommand\xe9 aux organisations d'utiliser des outils et des plates-formes de gestion des versions de source tels que ",(0,a.kt)("inlineCode",{parentName:"p"},"git")," et ",(0,a.kt)("inlineCode",{parentName:"p"},"github")," pour g\xe9rer le code / les fichiers source du",(0,a.kt)("a",{parentName:"p",href:"/documentation/build/example-build/"},"projet")," et l'",(0,a.kt)("a",{parentName:"p",href:"/documentation/build/jobs/#a-basic-expression"},"expression de travail"),".")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"Pour configurer le projet ",(0,a.kt)("a",{parentName:"p",href:"/documentation/microservice/home/"},"OpenFn Microservice")," \xe0 l'aide d'",(0,a.kt)("a",{parentName:"p",href:"https://github.com/OpenFn/devtools"},"OpenFn/devtools"),", cr\xe9ez un dossier local ou un d\xe9p\xf4t github pour h\xe9berger vos fichiers de configuration de projet. \xc0 l'int\xe9rieur de ce dossier, on effectuerait alors les actions suivantes :"),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"Cr\xe9er un fichier identifiant.json")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"Ajouter des identifiants comme indiqu\xe9 dans l'",(0,a.kt)("a",{parentName:"p",href:"https://github.com/OpenFn/instant-demo/blob/main/openfn/docker/config/project.yaml#L165-L167"},"\xe9chantillon d'authentification ici"))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"Cr\xe9ez les ",(0,a.kt)("a",{parentName:"p",href:"/documentation/build/jobs/#a-basic-expression"}," expressions de travail"),". Dans ce cas, on cr\xe9erait les expressions ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/OpenFn/instant-demo/tree/main/expressions"},"CommCare-to-OpenHIM")," et ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/OpenFn/instant-demo/tree/main/expressions"},"Kobo-to-OpenHIM")," comme indiqu\xe9 dans les expressions de d\xe9monstration ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/OpenFn/instant-demo/tree/main/expressions"},"ici"))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"Ex\xe9cutez l' ",(0,a.kt)("a",{parentName:"p",href:"/documentation/devtools/home/#configure-an-openfn-project"},"OpenFn CLI")," pour configurer le reste du projet. La CLI",(0,a.kt)("a",{parentName:"p",href:"/documentation/devtools/home/#configure-an-openfn-project"})," assemblera le fichier ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/OpenFn/microservice/blob/main/project.yaml.example"},"project.yaml")," \xe0 partir des diff\xe9rents artefacts tels que fournis. Voir les \xe9tapes d\xe9taill\xe9es dans le site de documentation ",(0,a.kt)("a",{parentName:"p",href:"/documentation/devtools/home/#configure-an-openfn-project"},"ici"),".")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"La derni\xe8re \xe9tape de l'invite ",(0,a.kt)("a",{parentName:"p",href:"/documentation/devtools/home/#configure-an-openfn-project"},"CLI")," permettra d'exporter le ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/OpenFn/microservice/blob/main/project.yaml.example"},"fichier du project YAML"),", qui sera ensuite utilis\xe9 par ",(0,a.kt)("a",{parentName:"p",href:"/documentation/microservice/home/"},"Microservice OpenFn")," pour ex\xe9cuter les ",(0,a.kt)("a",{parentName:"p",href:"/documentation/build/jobs/"},"t\xe2ches")," pour les charges utiles correspondantes."))))))),(0,a.kt)("h2",{id:"notes-sur-l\xe9criture-des-t\xe2ches"},"Notes sur l'\xe9criture des t\xe2ches"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://openfn.org/"},"OpenFn")," fournit deux fa\xe7ons d'\xe9crire les t\xe2ches :"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Utiliser le ",(0,a.kt)("a",{parentName:"li",href:"/documentation/jobs/job-studio/"},"Job Studio d'OpenFn.org")," comme d\xe9taill\xe9 dans le site de documentation ",(0,a.kt)("a",{parentName:"li",href:"/documentation/build/jobs/"},"ici"),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"Avec cette option, si vous modifiez une ",(0,a.kt)("a",{parentName:"li",href:"/documentation/build/jobs/#a-basic-expression"},"expression de travail"),"existante, une devrait utiliser le ",(0,a.kt)("a",{parentName:"li",href:"https://openfn.org/"},"service d'exportation de projet OpenFn.org")," pour r\xe9g\xe9n\xe9rer le fichier du ",(0,a.kt)("a",{parentName:"li",href:"https://github.com/OpenFn/microservice/blob/main/project.yaml.example"},"Projet YAML")," pour l'",(0,a.kt)("a",{parentName:"li",href:"/documentation/microservice/home/"},"OpenFn Microservice"),"."))),(0,a.kt)("li",{parentName:"ul"},"En utilisant ",(0,a.kt)("a",{parentName:"li",href:"https://github.com/OpenFn/devtools"},"OpenFn/devtools"),".",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"Cette option permet aussi aux organisations d'\xe9crire des ",(0,a.kt)("a",{parentName:"li",href:"/documentation/build/jobs/#a-basic-expression"},"expressions de travail")," sans utiliser le ",(0,a.kt)("a",{parentName:"li",href:"https://openfn.org/"},"service h\xe9berg\xe9 d'OpenFn"),". Voir la documentation d\xe9taill\xe9e ",(0,a.kt)("a",{parentName:"li",href:"https://github.com/OpenFn/devtools"},"ici")),(0,a.kt)("li",{parentName:"ul"},"Avec cette option, si vous modifiez une ",(0,a.kt)("a",{parentName:"li",href:"/documentation/build/jobs/#a-basic-expression"},"expression de travail"),"existante, on s'attend \xe0 ce que vous ex\xe9cutiez l' ",(0,a.kt)("a",{parentName:"li",href:"/documentation/devtools/home/#configure-an-openfn-project"},"OpenFn CLI"),", pour r\xe9g\xe9n\xe9rer le ",(0,a.kt)("a",{parentName:"li",href:"https://github.com/OpenFn/microservice/blob/main/project.yaml.example"},"fichier du Projet YAML")," pour l'",(0,a.kt)("a",{parentName:"li",href:"/documentation/microservice/home/"},"OpenFn Microservice"),".")))),(0,a.kt)("h2",{id:"\xe9tapes-de-d\xe9ploiement-du-syst\xe8me"},"\xc9tapes de d\xe9ploiement du syst\xe8me"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://openfn.org/"},"OpenFn")," fournit un script de d\xe9ploiement automatis\xe9 qui permet aux administrateurs syst\xe8me de configurer et d'ex\xe9cuter ",(0,a.kt)("a",{parentName:"li",href:"/documentation/microservice/home/"},"OpenFn Microservice"),"."),(0,a.kt)("li",{parentName:"ul"},"Par exemple, pour ex\xe9cuter le ",(0,a.kt)("a",{parentName:"li",href:"https://github.com/OpenFn/instant-demo"},"Microservice de d\xe9monstration instantan\xe9e"),", les \xe9tapes suivantes sont recommand\xe9es :",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"Cloner ",(0,a.kt)("a",{parentName:"li",href:"https://github.com/OpenFn/instant-demo"},"le d\xe9p\xf4t OpenFn/Instant-demo")),(0,a.kt)("li",{parentName:"ul"},"\xc9craser le fichier ",(0,a.kt)("a",{parentName:"li",href:"https://github.com/OpenFn/instant-demo/blob/main/openfn/docker/config/project.yaml"},"exemple \xab project.yaml \xbb ")," avec votre nouveau ",(0,a.kt)("a",{parentName:"li",href:"https://github.com/OpenFn/microservice/blob/main/project.yaml.example"},"fichier project.yaml "),", g\xe9n\xe9r\xe9 ou utilisez le",(0,a.kt)("a",{parentName:"li",href:"https://github.com/OpenFn/microservice/blob/main/project.yaml.example"},"fichier YAML")," existant pour d\xe9ployer le projet de d\xe9monstration. Ex\xe9cutez la commande de configuration comme d\xe9crite dans la documentation ",(0,a.kt)("a",{parentName:"li",href:"https://github.com/OpenFn/instant-demo"},"ici")),(0,a.kt)("li",{parentName:"ul"},"V\xe9rifiez que le syst\xe8me fonctionne en ",(0,a.kt)("a",{parentName:"li",href:"https://curl.se/"},"roulant")," les donn\xe9es (ou en soumettant des formulaires le ",(0,a.kt)("a",{parentName:"li",href:"https://www.commcarehq.org/"},"CommCare"),"/",(0,a.kt)("a",{parentName:"li",href:"https://www.kobotoolbox.org/"},"Kobo"),") faisant correspondre leurs ",(0,a.kt)("a",{parentName:"li",href:"/documentation/build/triggers/"},"d\xe9clencheurs")," au ",(0,a.kt)("a",{parentName:"li",href:"/documentation/microservice/home/"},"point de terminaison du")," microservice",(0,a.kt)("inlineCode",{parentName:"li"},"(localhost:4001/inbox)")," et v\xe9rifiant que les ressources sont cr\xe9\xe9es dans ",(0,a.kt)("a",{parentName:"li",href:"https://hapifhir.io/"},"HAPI FHIR"),"."),(0,a.kt)("li",{parentName:"ul"},"Notez comment ",(0,a.kt)("a",{parentName:"li",href:"https://github.com/OpenFn/instant-demo/blob/main/test.js"},"le fichier test.js")," g\xe8re cette v\xe9rification avec ",(0,a.kt)("a",{parentName:"li",href:"https://github.com/OpenFn/instant-demo/blob/main/openfn/docker/config/project.yaml"},"l'\xe9chantillon du project.yaml"))))))}u.isMDXComponent=!0}}]);