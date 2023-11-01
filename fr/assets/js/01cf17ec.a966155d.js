"use strict";(self.webpackChunk_openfn_docs=self.webpackChunk_openfn_docs||[]).push([[8393],{3905:(e,n,t)=>{t.d(n,{Zo:()=>p,kt:()=>f});var s=t(67294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);n&&(s=s.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,s)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function a(e,n){if(null==e)return{};var t,s,r=function(e,n){if(null==e)return{};var t,s,r={},o=Object.keys(e);for(s=0;s<o.length;s++)t=o[s],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(s=0;s<o.length;s++)t=o[s],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var u=s.createContext({}),l=function(e){var n=s.useContext(u),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},p=function(e){var n=l(e.components);return s.createElement(u.Provider,{value:n},e.children)},c="mdxType",d={inlineCode:"code",wrapper:function(e){var n=e.children;return s.createElement(s.Fragment,{},n)}},m=s.forwardRef((function(e,n){var t=e.components,r=e.mdxType,o=e.originalType,u=e.parentName,p=a(e,["components","mdxType","originalType","parentName"]),c=l(t),m=r,f=c["".concat(u,".").concat(m)]||c[m]||d[m]||o;return t?s.createElement(f,i(i({ref:n},p),{},{components:t})):s.createElement(f,i({ref:n},p))}));function f(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var o=t.length,i=new Array(o);i[0]=m;var a={};for(var u in n)hasOwnProperty.call(n,u)&&(a[u]=n[u]);a.originalType=e,a[c]="string"==typeof e?e:r,i[1]=a;for(var l=2;l<o;l++)i[l]=t[l];return s.createElement.apply(null,i)}return s.createElement.apply(null,t)}m.displayName="MDXCreateElement"},92154:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>u,contentTitle:()=>i,default:()=>d,frontMatter:()=>o,metadata:()=>a,toc:()=>l});var s=t(87462),r=(t(67294),t(3905));const o={title:"Questions fr\xe9quemment pos\xe9es",sidebar_label:"FAQs"},i=void 0,a={unversionedId:"faqs",id:"faqs",title:"Questions fr\xe9quemment pos\xe9es",description:"L'int\xe9gration des donn\xe9es, l'interop\xe9rabilit\xe9 et l'automatisation des flux de travail peuvent \xeatre des sujets d\xe9routants. Sans mentionner le fait qu'il existe de nombreux termes et mani\xe8res de parler des m\xeames concepts. Nous l'avons compris. Voici quelques questions qui reviennent souvent.",source:"@site/i18n/fr/docusaurus-plugin-content-docs/current/faqs.md",sourceDirName:".",slug:"/faqs",permalink:"/fr/documentation/next/faqs",draft:!1,editUrl:"https://github.com/openfn/docs/edit/main/docs/faqs.md",tags:[],version:"current",frontMatter:{title:"Questions fr\xe9quemment pos\xe9es",sidebar_label:"FAQs"},sidebar:"docs",previous:{title:"OpenHIE",permalink:"/fr/documentation/next/standards/openhie"},next:{title:"OpenFn Roadmap",permalink:"/fr/documentation/next/openfn-roadmap"}},u={},l=[{value:"Qu&#39;est-ce que OpenFn ?",id:"quest-ce-que-openfn-",level:2},{value:"Qui utilise OpenFn ?",id:"qui-utilise-openfn-",level:2},{value:"Qu&#39;est-ce qu&#39;une t\xe2che `` ?",id:"quest-ce-quune-t\xe2che--",level:2},{value:"Qu&#39;est ce qu&#39;une <code>ex\xe9cution</code> ?",id:"quest-ce-quune-ex\xe9cution-",level:2},{value:"OpenFn est-il open-source ?",id:"openfn-est-il-open-source-",level:2},{value:"Quel est le co\xfbt de OpenFn ?",id:"quel-est-le-co\xfbt-de-openfn-",level:2},{value:"Conception &amp; co\xfbts de mise en \u0153uvre",id:"conception--co\xfbts-de-mise-en-\u0153uvre",level:3},{value:"Co\xfbts permanents",id:"co\xfbts-permanents",level:3},{value:"Est-ce que je peux tester la plateforme ?",id:"est-ce-que-je-peux-tester-la-plateforme-",level:2},{value:"Quelle est la fiabilit\xe9 du service h\xe9berg\xe9 ?",id:"quelle-est-la-fiabilit\xe9-du-service-h\xe9berg\xe9-",level:2},{value:"OpenFn peut-il s&#39;int\xe9grer \xe0 mon application personnalis\xe9e ?",id:"openfn-peut-il-sint\xe9grer-\xe0-mon-application-personnalis\xe9e-",level:2},{value:"OpenFn supporte-t-il la synchronisation bidirectionnelle ?",id:"openfn-supporte-t-il-la-synchronisation-bidirectionnelle-",level:2},{value:"Ai-je besoin de savoir coder ?",id:"ai-je-besoin-de-savoir-coder-",level:2},{value:"O\xf9 sont stock\xe9es mes donn\xe9es ?",id:"o\xf9-sont-stock\xe9es-mes-donn\xe9es-",level:2},{value:"Mes donn\xe9es sont-elles en s\xe9curit\xe9 ?",id:"mes-donn\xe9es-sont-elles-en-s\xe9curit\xe9-",level:2},{value:"Que faire si j&#39;ai d&#39;autres questions ?",id:"que-faire-si-jai-dautres-questions-",level:2}],p={toc:l},c="wrapper";function d(e){let{components:n,...t}=e;return(0,r.kt)(c,(0,s.Z)({},p,t,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"L'int\xe9gration des donn\xe9es, l'interop\xe9rabilit\xe9 et l'automatisation des flux de travail peuvent \xeatre des sujets d\xe9routants. Sans mentionner le fait qu'il existe de nombreux termes et mani\xe8res de parler des m\xeames concepts. Nous l'avons compris. Voici quelques questions qui reviennent souvent."),(0,r.kt)("h2",{id:"quest-ce-que-openfn-"},"Qu'est-ce que OpenFn ?"),(0,r.kt)("p",null,"OpenFn est une ",(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("em",{parentName:"strong"},"plateforme d'int\xe9gration en tant que service")),". Cela signifie que notre principale directive est de d\xe9placer les donn\xe9es rapidement et en toute s\xe9curit\xe9 entre diff\xe9rents syst\xe8mes logiciels. Dans la plupart des cas :"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Une application source envoie des ",(0,r.kt)("strong",{parentName:"p"},"messages")," dans la ",(0,r.kt)("strong",{parentName:"p"},"bo\xeete de r\xe9ception")," votre proje quand quelque chose se produit.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Les ",(0,r.kt)("strong",{parentName:"p"},"t\xe2ches")," seront d\xe9clench\xe9s, en fonction de vos ",(0,r.kt)("strong",{parentName:"p"},"filtres"),", et utiliser les donn\xe9es de ces messages pour tenter des actions sp\xe9cifiques dans les syst\xe8mes de destination.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Les ",(0,r.kt)("strong",{parentName:"p"},"logs")," sont enregistr\xe9s pour que vous puissiez voir exactement ce qui s'est pass\xe9 et quand et o\xf9 il s'est produit une action en cas de tentative \xe9chou\xe9e, comme \xe9diter la t\xe2che ou m\xeame le message source et essayer \xe0 nouveau."))),(0,r.kt)("h2",{id:"qui-utilise-openfn-"},"Qui utilise OpenFn ?"),(0,r.kt)("p",null,"OpenFn est utilis\xe9 par les grandes et petites organisations, mais les individus qui interagissent avec la plate-forme comprennent des administrateurs syst\xe8me et les d\xe9veloppeurs Javascript. Avec une compr\xe9hension de base de Javascript, la flexibilit\xe9 de la plate-forme est presque illimit\xe9e."),(0,r.kt)("h2",{id:"quest-ce-quune-t\xe2che--"},"Qu'est-ce qu'une t\xe2che `` ?"),(0,r.kt)("p",null,"L'automatisation d'OpenFn est centr\xe9e sur les t\xe2ches, qui d\xe9finissent la s\xe9rie sp\xe9cifique de t\xe2ches ou d'actions de base de donn\xe9es qu'OpenFn doit effectuer. Ils peuvent \xeatre configur\xe9s pour \xeatre activ\xe9s (d\xe9clench\xe9s) \xe0 certains intervalles de temps ou lorsque des donn\xe9es correspondant \xe0 des crit\xe8res sp\xe9cifi\xe9s sont re\xe7ues. Vous pouvez consid\xe9rer les emplois comme un ensemble d'instructions que vous pourriez donner \xe0 un membre du personnel de saisie de donn\xe9es (par exemple, cr\xe9er un nouveau dossier patient dans OpenMRS lorsqu'un formulaire contenant un client nouvellement enregistr\xe9 est re\xe7u de CommCare, exporter les donn\xe9es vers DHIS2 chaque semaine le vendredi 23 heures), envoyez un SMS avec le num\xe9ro de confirmation de paiement lorsque le message de confirmation de paiement est re\xe7u, etc.)."),(0,r.kt)("p",null,":::remarque"),(0,r.kt)("p",null,"Les t\xe2ches sont enti\xe8rement configurables et r\xe9utilisables. Ils peuvent \xe9galement \xeatre encha\xeen\xe9s ensemble pour cr\xe9er le ",(0,r.kt)("a",{parentName:"p",href:"jobs/multiple-operations"},"flux d'automatisation multi-\xe9tapes")," , des synchronisations bidirectionnelles. et pour garder les donn\xe9es coh\xe9rentes entre plusieurs applications (en utilisant des mod\xe8les Saga multi-applications). Vous pouvez en savoir plus sur la synchronisation bidirectionnelle ci-dessous."),(0,r.kt)("p",null,":::"),(0,r.kt)("h2",{id:"quest-ce-quune-ex\xe9cution-"},"Qu'est ce qu'une ",(0,r.kt)("inlineCode",{parentName:"h2"},"ex\xe9cution")," ?"),(0,r.kt)("p",null,"Une ex\xe9cution correspond \xe0 chaque ex\xe9cution d'un job. Imaginez qu'un job est configur\xe9 pour cr\xe9er un nouveau patient dans OpenMRS chaque fois qu'un dossier est ouvert dans CommCare. Au cours de la semaine prochaine, si 5 cas sont ouverts dans CommCare, vous verrez 5 ex\xe9cutions diff\xe9rentes de ce job dans OpenFn. Si 4 courses sont r\xe9ussies et qu'une a \xe9chou\xe9, vous verrez 4 nouveaux patients dans OpenMRS, et votre administrateur syst\xe8me aura \xe9t\xe9 averti que l'un de ces patients n'a pas pu \xeatre cr\xe9\xe9 (ou tout autre traitement des erreurs plus robuste que vous avez configur\xe9 aura lieu.)"),(0,r.kt)("p",null,"Sachez qu'il n'y a pas toujours une cartographie de 1 \xe0 1 entre les ex\xe9cutions et les \xe9l\xe9ments r\xe9els avec lesquelles vous travaillez. Je pourrais d\xe9finir un job qui r\xe9cup\xe8re toutes les donn\xe9es d'\xe9v\xe9nement mises \xe0 jour \xe0 partir de DHIS2 depuis les 2 derni\xe8res semaines et les publier sur une carte publique en utilisant CartoDB. Ce job d\xe9clench\xe9e \xe0 des intervalles de temps sp\xe9cifi\xe9s, toutes les 2 semaines dans ce cas, et apr\xe8s un mois, nous ne verrons que 2 ex\xe9cutions dans OpenFn (soit une ex\xe9cution toutes les deux semaines). Chaque ex\xe9cution aura r\xe9ussi ou \xe9chou\xe9, et chacun peut avoir trait\xe9 des milliers d'\xe9v\xe9nements depuis DHIS2."),(0,r.kt)("p",null,":::remarque"),(0,r.kt)("p",null,"Pour un dernier exemple, une seule soumission de formulaire dans Open Data Kit peut d\xe9clencher un job qui cr\xe9e de nouveaux contacts et enregistre la pr\xe9sence dans Salesforce. Dans ce cas, vous trouverez une ex\xe9cution pour chaque soumission de formulaire ODK, mais chaque ex\xe9cution cr\xe9era de nombreux enregistrements diff\xe9rents dans Salesforce, notamment, au moins un contact et un nombre N d'enregistrements de pr\xe9sence, correspondant au nombre d'\xe9l\xe9ments dans votre formulaire ODK \xab groupe de r\xe9p\xe9tition de pr\xe9sence \xbb."),(0,r.kt)("p",null,":::"),(0,r.kt)("h2",{id:"openfn-est-il-open-source-"},"OpenFn est-il open-source ?"),(0,r.kt)("p",null,"OpenFn est une suite de diff\xe9rentes technologies avec diff\xe9rentes licences. Nous avons cr\xe9e et maintenons des dizaines de paquets logiciels de transformation de donn\xe9es open-source et de gestion d'API. Celles-ci, pour la plupart, sont sous licence ",(0,r.kt)("strong",{parentName:"p"},"LGPL")," et peuvent \xeatre utilis\xe9es librement pour extraire, transformer, et charger les donn\xe9es \xe0 partir d'une ligne de commande, ou dans le cadre d'une autre application logicielle."),(0,r.kt)("p",null,"OpenFn h\xe9berge \xe9galement une application web propri\xe9taire qui relie ces outils (",(0,r.kt)("a",{parentName:"p",href:"http://www.openfn.org"},"www.openfn.org"),") \xe0 une plate-forme de gestion d'int\xe9gration pr\xeate \xe0 l'emploi. Cette plate-forme est open-core, fournissant les puissants outils ETL qui sont au c\u0153ur de l'iPaaS propri\xe9taire OpenFn.org en tant que logiciel libre et open-source (FOSS). Tous les jobs ex\xe9cut\xe9s sur OpenFn.org, ainsi que tous les adaptateurs sous-jacents, peuvent \xeatre ex\xe9cut\xe9s hors ligne \xe0 l'aide de nos outils FOSS."),(0,r.kt)("admonition",{type:"note"},(0,r.kt)("p",{parentName:"admonition"},"Prochainement, OpenFn offrira \xe9galement une option d'impl\xe9mentation FOSS am\xe9lior\xe9e appel\xe9e ",(0,r.kt)("a",{parentName:"p",href:"https://openfn.github.io/microservice/"},"OpenFn/microservice"),". Cette approche de microservices FOSS est actuellement en cours de d\xe9veloppement avec le financement du ",(0,r.kt)("a",{parentName:"p",href:"https://www.osc.dial.community/"},"centre DIAL Open Source"),", de ",(0,r.kt)("a",{parentName:"p",href:"https://digitalsquare.org/"},"Digital Square"),", et du",(0,r.kt)("a",{parentName:"p",href:"https://www.gov.uk/government/organisations/foreign-commonwealth-development-office"},"FCDO")," (anciennement DFID)."),(0,r.kt)("p",{parentName:"admonition"},"Veuillez noter que ce chemin ne fournit pas toute la plate-forme OpenFn en tant que logiciel libre et open source (FOSS). Dans les situations o\xf9 un partenaire ou un gouvernement particulier est incapable d'utiliser la plate-forme propri\xe9taire (bien qu'elle puisse \xeatre d\xe9ploy\xe9e sur des serveurs locaux avec une licence d'utilisation illimit\xe9e), cette approche garantit que tous les jobs, les triggers et la configuration de projet peuvent \xeatre export\xe9s \xe0 partir d'OpenFn.org et utilis\xe9, en conjonction avec les outils FOSS ETL d'OpenFn, pour d\xe9ployer une impl\xe9mentation de type microservices qui n'entra\xeene aucun co\xfbt de licence et fournit le traitement de donn\xe9es de base effectu\xe9 par la plate-forme OpenFn. Alors qu'au d\xe9part, il n'y aura pas d'interface Web ni de possibilit\xe9 de retraiter les messages, etc., ces fonctionnalit\xe9s pourraient avec le temps \xeatre cr\xe9\xe9es par des partenaires pour remplacer les fonctionnalit\xe9s de la plate-forme OpenFn. C'est-\xe0-dire qu'aucun investissement initial dans OpenFn ne sera perdu si les partenaires choisissent de cr\xe9er leur propre plate-forme d'int\xe9gration enti\xe8rement open-source bas\xe9e sur nos puissants outils ETL open-source.")),(0,r.kt)("h2",{id:"quel-est-le-co\xfbt-de-openfn-"},"Quel est le co\xfbt de OpenFn ?"),(0,r.kt)("h3",{id:"conception--co\xfbts-de-mise-en-\u0153uvre"},"Conception & co\xfbts de mise en \u0153uvre"),(0,r.kt)("p",null,"OFG propose une gamme de paquets pour assurer des impl\xe9mentations r\xe9ussies pour la premi\xe8re fois, qui incluent le conseil d'int\xe9gration, la conception, la configuration et le renforcement des capacit\xe9s. Les engagements typiques prennent 1 \xe0 5 jours, et notre paquetle plus populaire est le QuickStart d'int\xe9gration, dans lequel nous passons une semaine \xe0 concevoir et configurer ~ 5 flux d'int\xe9gration de bout en bout et \xe0 fournir une formation administrative \xe0 votre personnel pour 5000 USD."),(0,r.kt)("h3",{id:"co\xfbts-permanents"},"Co\xfbts permanents"),(0,r.kt)("p",null,"OpenFn.org propose un plan gratuit pour les utilisateurs souhaitant tester la plate-forme ou mettre en \u0153uvre des projets traitant de faibles volumes de donn\xe9es (jusqu'\xe0 100 ex\xe9cutions / mois). L'utilisation d'OpenFn.org, la plate-forme d'int\xe9gration en tant que service propri\xe9taire (iPaaS), entra\xeene des co\xfbts permanents, qui d\xe9pendent largement des volumes de donn\xe9es \xe0 traiter. OpenFn propose des abonnements mensuels, des licences d'entreprise pour les accords annuels et pluriannuels, ainsi que des options de d\xe9ploiement illimit\xe9es et locales. Contactez ",(0,r.kt)("a",{parentName:"p",href:"mailto:enterprise@openfn.org"},"enterprise@openfn.org")," pour en savoir plus et pour une estimation des co\xfbts sur mesure."),(0,r.kt)("p",null,"Il y a \xe9galement des options DIY disponibles, ainsi que des services de formation sur mesure pour d\xe9velopper votre capacit\xe9 \xe0 impl\xe9menter et g\xe9rer OpenFn de mani\xe8re ind\xe9pendante."),(0,r.kt)("h2",{id:"est-ce-que-je-peux-tester-la-plateforme-"},"Est-ce que je peux tester la plateforme ?"),(0,r.kt)("p",null,"Oui. En fait, vous pouvez l'utiliser gratuitement, pour toujours."),(0,r.kt)("p",null,"OpenFn.org offre un plan gratuit \xe0 tous les utilisateurs (",(0,r.kt)("a",{parentName:"p",href:"https://www.openfn.org/signup"},"inscrivez-vous ici"),"). Essayez avec OpenFn Docs, ou contactez notre \xe9quipe pour une consultation gratuite et de l'aide pour commencer. Changez votre plan OpenFn \xe0 tout moment (pas de verrouillage !), ou contactez ",(0,r.kt)("a",{parentName:"p",href:"mailto:enterprise@openfn.org"},"enterprise@openfn.org")," pour en savoir plus sur les licences annuelles, d'entreprise et illimit\xe9es."),(0,r.kt)("p",null,":::astuce"),(0,r.kt)("p",null,"\xc0 faible volume, ou pour le prototypage, vous pouvez utiliser la plate-forme h\xe9berg\xe9e gratuitement pour toujours."),(0,r.kt)("p",null,":::"),(0,r.kt)("h2",{id:"quelle-est-la-fiabilit\xe9-du-service-h\xe9berg\xe9-"},"Quelle est la fiabilit\xe9 du service h\xe9berg\xe9 ?"),(0,r.kt)("p",null,"OpenFn a exploit\xe9 l'extr\xeame stabilit\xe9 et l'\xe9volutivit\xe9 d'Erlang pour coordonner ces actions et fournir aux utilisateurs des alertes par e-mail, des outils de gestion de projet et un IDE de r\xe9daction de travaux en ligne."),(0,r.kt)("p",null,"Nous surveillons constamment notre propre statut avec une infrastructure ind\xe9pendante sur ",(0,r.kt)("a",{parentName:"p",href:"https://status.openfn.org"},"status.openfn.org"),". Vous pouvez vous y abonner aux notifications ou suivre ",(0,r.kt)("a",{parentName:"p",href:"https://twitter.com/openfnstatus"},"@openfnstatus"),"."),(0,r.kt)("p",null,"Nous fournissons ce service en permanence depuis 2014."),(0,r.kt)("h2",{id:"openfn-peut-il-sint\xe9grer-\xe0-mon-application-personnalis\xe9e-"},"OpenFn peut-il s'int\xe9grer \xe0 mon application personnalis\xe9e ?"),(0,r.kt)("p",null,"Oui, OpenFn peut s'int\xe9grer avec ",(0,r.kt)("em",{parentName:"p"},"n'importe")," quelle application."),(0,r.kt)("p",null,"Si votre technologie dispose d'un point de terminaison REST ou d'un service de webhooks, cela fonctionnera probablement imm\xe9diatement. Ceci couvre la plupart des applications web (par exemple, CommCare, Kobo, ODK, DHIS2, Salesforce, MS Dynamics, MPesa, etc.). OpenFn peut \xe9galement s'int\xe9grer \xe0 la plupart des bases de donn\xe9es, telles que Postgres, MySql et Mongo, des applications personnalis\xe9es, des syst\xe8mes gouvernementaux h\xe9rit\xe9s, et peut m\xeame analyser les fichiers CSV, \xe0 condition qu'ils soient accessibles \xe0 partir d'un emplacement en ligne. En savoir plus sur la ",(0,r.kt)("a",{parentName:"p",href:"source-apps"},"connexion des applications sources"),", ou consultez la page Apps pour applications largement impl\xe9ment\xe9es."),(0,r.kt)("p",null,"Nous proposons des connecteurs pr\xe9d\xe9finis (appel\xe9s \xab adaptateurs \xbb) pour les applications les plus populaires de nos utilisateurs afin de rendre la configuration de l'int\xe9gration plus rapide et plus conviviale lors de la connexion avec ces outils. Par exemple, les utilisateurs peuvent impl\xe9menter language-http pour envoyer des requ\xeates HTTP de base \xe0 n'importe quelle application web, ou impl\xe9menter language-dhis2 pour g\xe9rer automatiquement l'authentification DHIS2 et acc\xe9der aux fonctions d'assistance telles que fetchData () pour exporter les ensembles de donn\xe9es DHIS2."),(0,r.kt)("h2",{id:"openfn-supporte-t-il-la-synchronisation-bidirectionnelle-"},"OpenFn supporte-t-il la synchronisation bidirectionnelle ?"),(0,r.kt)("p",null,"Oui, OpenFn peut prendre en charge la synchronisation bidirectionnelle des applications. Gr\xe2ce aux ",(0,r.kt)("a",{parentName:"p",href:"build/triggers#flow-triggers"},"d\xe9clencheurs de flux"),", les t\xe2ches OpenFn peuvent \xeatre encha\xeen\xe9es ensemble pour faciliter la synchronisation bidirectionnelle en temps r\xe9el, ",(0,r.kt)("a",{parentName:"p",href:"jobs/multiple-operations"},"les processus d'automatisation en plusieurs \xe9tapes")," et de nettoyage des donn\xe9es, ainsi qu'une logique de branchement complexe. Les utilisateurs peuvent \xe9galement impl\xe9menter des synchronisations de donn\xe9es bidirectionnelles, ainsi que des mod\xe8les Saga complexes pour impl\xe9menter une transaction qui couvre plusieurs applications en configurant des webhooks dans leurs applications de point de terminaison et en effectuant des mises \xe0 jour dans les deux syst\xe8mes lorsque des \xe9v\xe9nements se produisent dans l'un ou l'autre."),(0,r.kt)("h2",{id:"ai-je-besoin-de-savoir-coder-"},"Ai-je besoin de savoir coder ?"),(0,r.kt)("p",null,"Non, mais cela aide d'avoir \xe9crit une formule dans MS Excel ! De nombreux utilisateurs d'OpenFn sont familiers avec les donn\xe9es, pas avec le d\xe9veloppement, et se familiarisent rapidement avec les t\xe2ches OpenFn."),(0,r.kt)("p",null,"Si votre projet utilise un adaptateur OpenFn (par exemple, ",(0,r.kt)("inlineCode",{parentName:"p"},"language-dhis2"),"), vous avez acc\xe8s aux fonctions d'aide pr\xe9-compil\xe9es (par ex. ",(0,r.kt)("inlineCode",{parentName:"p"},"getPatient"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"mis \xe0 jour"),") pour que vous n'ayez pas besoin d'\xe9crire du code personnalis\xe9, et que vous puissiez plut\xf4t utiliser la documentation OpenFn ou des scripts de t\xe2ches existants pour \xe9crire votre propre job. Voir OpenFn Github pour l'inspiration et le code de t\xe2che open-source partag\xe9 par les utilisateurs d'OpenFn. Vous remarquerez que ces fonctions fonctionnent de la m\xeame mani\xe8re que les fonctions dans Excel\u2026 ",(0,r.kt)("inlineCode",{parentName:"p"},"sum(A1, A2, A3)")),(0,r.kt)("p",null,"Les jobs peuvent \xeatre \xe9crits et \xe9tendus \xe0 l'aide de Javascript brut pour un nettoyage et une manipulation avanc\xe9s des donn\xe9es. Par cons\xe9quent, vous voudrez peut-\xeatre impl\xe9menter Javascript pour r\xe9pondre \xe0 des exigences sp\xe9cifiques ou pour \xe9tendre les adaptateurs OpenFn existants, qui sont open-source !"),(0,r.kt)("h2",{id:"o\xf9-sont-stock\xe9es-mes-donn\xe9es-"},"O\xf9 sont stock\xe9es mes donn\xe9es ?"),(0,r.kt)("p",null,"OpenFn est un fournisseur de middleware plut\xf4t qu'un syst\xe8me de stockage de donn\xe9es. Nous transf\xe9rons les informations du syst\xe8me A au syst\xe8me B, et les int\xe9grations peuvent \xeatre configur\xe9es pour \xeatre conformes au RGPD, HIPAA et d'autres politiques. Pour faciliter l'audit et le retraitement, OpenFn stocke temporairement les donn\xe9es des messages et job run history, mais nous ne sommes pas la seule source de v\xe9rit\xe9 ni le point de repos final de ces donn\xe9es. Lorsque les organisations choisissent d'utiliser notre plate-forme h\xe9berg\xe9e OpenFn sur OpenFn.org, aucune donn\xe9e trait\xe9e par OpenFn n'est stock\xe9e localement et notre plate-forme fonctionne sur Google Cloud Platform (GCP). En savoir plus sur notre page ",(0,r.kt)("a",{parentName:"p",href:"https://www.openfn.org/compliance"},"Conformit\xe9"),"."),(0,r.kt)("p",null,"OpenFn.org propose actuellement un h\xe9bergement sur des serveurs cloud bas\xe9s aux \xc9tats-Unis et en Suisse. Les d\xe9ploiements cloud locaux et nationaux d'OpenFn sont \xe9galement disponibles sur demande. Contactez ",(0,r.kt)("a",{parentName:"p",href:"mailto:enterprise@openfn.org"},"enterprise@openfn.org")," pour en savoir plus."),(0,r.kt)("h2",{id:"mes-donn\xe9es-sont-elles-en-s\xe9curit\xe9-"},"Mes donn\xe9es sont-elles en s\xe9curit\xe9 ?"),(0,r.kt)("p",null,"Oui, OpenFn privil\xe9gie la s\xe9curit\xe9, la stabilit\xe9 et l'\xe9volutivit\xe9 (ce que nous appelons ",(0,r.kt)("a",{parentName:"p",href:"https://www.openfn.org/trust#s3"},"S3"),") avant tout le reste, et beaucoup de nos utilisateurs impl\xe9mentent OpenFn pour se conformer aux politiques RGPD, HIPAA, et autres. En savoir plus sur nos pages ",(0,r.kt)("a",{parentName:"p",href:"https://www.openfn.org/trust"},"Confiance"),", ",(0,r.kt)("a",{parentName:"p",href:"https://www.openfn.org/compliance"},"Conformit\xe9"),"et ",(0,r.kt)("a",{parentName:"p",href:"https://www.openfn.org/privacy"},"Confidentialit\xe9"),"."),(0,r.kt)("p",null,"OpenFn.org fonctionne sur Google Cloud Platform, une infrastructure prot\xe9g\xe9e par plus de 500 experts de premier plan en mati\xe8re de s\xe9curit\xe9 des informations, des applications et des r\xe9seaux. Pour les organisations ayant des exigences de conformit\xe9 et de gouvernance des donn\xe9es sp\xe9cifiques, OpenFn peut \xe9galement \xeatre d\xe9ploy\xe9 sur une infrastructure locale ou cloud d\xe9sign\xe9e."),(0,r.kt)("h2",{id:"que-faire-si-jai-dautres-questions-"},"Que faire si j'ai d'autres questions ?"),(0,r.kt)("p",null,"Open Function Group est une \xe9quipe de sp\xe9cialistes ICT4D et d'int\xe9gration, en attente de vous aider \xe0 commencer. Cliquez sur l'ic\xf4ne de chat dans le coin inf\xe9rieur droit de cette page pour parler maintenant. Ou envoyez un email \xe0 notre \xe9quipe \xe0 ",(0,r.kt)("a",{parentName:"p",href:"mailto:admin@openfn.org"},"admin@openfn.org"),", discutez avec nous sur OpenFn.org, ou postez une question dans notre ",(0,r.kt)("a",{parentName:"p",href:"https://community.openfn.org"},"Forum de la communaut\xe9"),"."))}d.isMDXComponent=!0}}]);