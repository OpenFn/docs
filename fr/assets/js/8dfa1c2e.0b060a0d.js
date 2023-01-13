"use strict";(self.webpackChunk_openfn_docs=self.webpackChunk_openfn_docs||[]).push([[75935],{3905:(e,r,t)=>{t.d(r,{Zo:()=>d,kt:()=>v});var o=t(67294);function n(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function i(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);r&&(o=o.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,o)}return t}function s(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?i(Object(t),!0).forEach((function(r){n(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function a(e,r){if(null==e)return{};var t,o,n=function(e,r){if(null==e)return{};var t,o,n={},i=Object.keys(e);for(o=0;o<i.length;o++)t=i[o],r.indexOf(t)>=0||(n[t]=e[t]);return n}(e,r);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)t=i[o],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(n[t]=e[t])}return n}var l=o.createContext({}),u=function(e){var r=o.useContext(l),t=r;return e&&(t="function"==typeof e?e(r):s(s({},r),e)),t},d=function(e){var r=u(e.components);return o.createElement(l.Provider,{value:r},e.children)},p="mdxType",c={inlineCode:"code",wrapper:function(e){var r=e.children;return o.createElement(o.Fragment,{},r)}},m=o.forwardRef((function(e,r){var t=e.components,n=e.mdxType,i=e.originalType,l=e.parentName,d=a(e,["components","mdxType","originalType","parentName"]),p=u(t),m=n,v=p["".concat(l,".").concat(m)]||p[m]||c[m]||i;return t?o.createElement(v,s(s({ref:r},d),{},{components:t})):o.createElement(v,s({ref:r},d))}));function v(e,r){var t=arguments,n=r&&r.mdxType;if("string"==typeof e||n){var i=t.length,s=new Array(i);s[0]=m;var a={};for(var l in r)hasOwnProperty.call(r,l)&&(a[l]=r[l]);a.originalType=e,a[p]="string"==typeof e?e:n,s[1]=a;for(var u=2;u<i;u++)s[u]=t[u];return o.createElement.apply(null,s)}return o.createElement.apply(null,t)}m.displayName="MDXCreateElement"},50991:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>l,contentTitle:()=>s,default:()=>p,frontMatter:()=>i,metadata:()=>a,toc:()=>u});var o=t(87462),n=(t(67294),t(3905));const i={title:"Codes de sortie et erreurs"},s=void 0,a={unversionedId:"jobs/errors",id:"jobs/errors",title:"Codes de sortie et erreurs",description:"\xc0 propos des erreurs",source:"@site/i18n/fr/docusaurus-plugin-content-docs/current/jobs/errors.md",sourceDirName:"jobs",slug:"/jobs/errors",permalink:"/fr/documentation/jobs/errors",draft:!1,editUrl:"https://github.com/openfn/docs/edit/main/docs/jobs/errors.md",tags:[],version:"current",frontMatter:{title:"Codes de sortie et erreurs"},sidebar:"docs",previous:{title:"troubleshooting-tips-on-platform",permalink:"/fr/documentation/manage/troubleshooting-tips-on-platform"},next:{title:"Limites",permalink:"/fr/documentation/jobs/limits"}},l={},u=[{value:"\xc0 propos des erreurs",id:"\xe0-propos-des-erreurs",level:2},{value:"Codes de sortie standard",id:"codes-de-sortie-standard",level:2},{value:"0\xa0: Success",id:"0-success",level:3},{value:"1\xa0: Error",id:"1-error",level:3},{value:"2\xa0: Timeout",id:"2-timeout",level:3},{value:"10\xa0: Core Error",id:"10-core-error",level:3},{value:"134\xa0: Out of memory",id:"134-out-of-memory",level:3},{value:"Codes de sortie sp\xe9ciaux (Plateforme)",id:"codes-de-sortie-sp\xe9ciaux-plateforme",level:2},{value:"3\xa0: Failed to start",id:"3-failed-to-start",level:3},{value:"4\xa0: The NodeVM is unresponsive",id:"4-the-nodevm-is-unresponsive",level:3},{value:"5: Elixir/ErlangVM Error",id:"5-elixirerlangvm-error",level:3},{value:"6: Aborted by project administrator",id:"6-aborted-by-project-administrator",level:3},{value:"11: Node.js Error",id:"11-nodejs-error",level:3},{value:"Limites",id:"limites",level:2},{value:"NodeVM memory limits",id:"nodevm-memory-limits",level:3},{value:"Job state limits",id:"job-state-limits",level:3}],d={toc:u};function p(e){let{components:r,...t}=e;return(0,n.kt)("wrapper",(0,o.Z)({},d,t,{components:r,mdxType:"MDXLayout"}),(0,n.kt)("h2",{id:"\xe0-propos-des-erreurs"},"\xc0 propos des erreurs"),(0,n.kt)("p",null,"Les erreurs sont vos amis. La chose la plus importante que vous pouvez faire lorsque vous rencontrez une erreur \xe0 n'importe quelle \xe9tape d'un projet d'int\xe9gration de donn\xe9es est de ",(0,n.kt)("em",{parentName:"p"},"lire")," ce qui s'affiche \xe0 l'\xe9cran. Bien que cela puisse para\xeetre \xe9vident, il est tr\xe8s facile de voir un grand bloc de langage technique et de se d\xe9connecter."),(0,n.kt)("p",null,"Souvent, l'\xe9chec d'un run est d\xfb \xe0 des raisons commerciales simples qui peuvent \xeatre identifi\xe9es \xe0 partir des messages d'erreur affich\xe9s dans les logs par @openfn/core."),(0,n.kt)("h2",{id:"codes-de-sortie-standard"},"Codes de sortie standard"),(0,n.kt)("h3",{id:"0-success"},"0\xa0: Success"),(0,n.kt)("p",null,"Le code de sortie ",(0,n.kt)("inlineCode",{parentName:"p"},"0")," est un succ\xe8s (run r\xe9ussie, p. ex. un syst\xe8me de destination a r\xe9pondu avec un ",(0,n.kt)("inlineCode",{parentName:"p"},"200"),")"),(0,n.kt)("h3",{id:"1-error"},"1\xa0: Error"),(0,n.kt)("p",null,"Le code de sortie ",(0,n.kt)("inlineCode",{parentName:"p"},"1")," est une erreur normalement g\xe9r\xe9e (run a \xe9chou\xe9 normalement, par exemple, un syst\xe8me de destination a r\xe9pondu avec un ",(0,n.kt)("inlineCode",{parentName:"p"},"4XX"),", ",(0,n.kt)("inlineCode",{parentName:"p"},"5XX"),", ou toute autre erreur sp\xe9cialis\xe9e ",(0,n.kt)("inlineCode",{parentName:"p"},"RequiredFieldMissing"),".)"),(0,n.kt)("h3",{id:"2-timeout"},"2\xa0: Timeout"),(0,n.kt)("p",null,"Le code de sortie ",(0,n.kt)("inlineCode",{parentName:"p"},"2")," signifie que votre run a expir\xe9. Il a d\xe9pass\xe9 le d\xe9lai que vous avez d\xe9fini pour votre job, ou si vous utilisez la plateforme h\xe9berg\xe9e sur une offre non-entreprise, il a d\xe9pass\xe9 ",(0,n.kt)("inlineCode",{parentName:"p"},"100")," secondes."),(0,n.kt)("h3",{id:"10-core-error"},"10\xa0: Core Error"),(0,n.kt)("p",null,"Le code de sortie ",(0,n.kt)("inlineCode",{parentName:"p"},"10")," signifie qu'il y a eu une erreur dans ",(0,n.kt)("inlineCode",{parentName:"p"},"@openfn/core/cli.js execute"),". C'est possible que votre job ne puisse pas \xeatre ex\xe9cut\xe9 tel qu'il est r\xe9dig\xe9, mais que diverses validations de contr\xf4les n'ont pas pu vous avertir plus t\xf4t."),(0,n.kt)("h3",{id:"134-out-of-memory"},"134\xa0: Out of memory"),(0,n.kt)("p",null,"Il s'agit d'une erreur standard de m\xe9moire insuffisante de NodeVM. Voir ",(0,n.kt)("a",{parentName:"p",href:"#nodevm-limits"},"NodeVM memory limits")," ci-dessous."),(0,n.kt)("h2",{id:"codes-de-sortie-sp\xe9ciaux-plateforme"},"Codes de sortie sp\xe9ciaux (Plateforme)"),(0,n.kt)("p",null,"La plate-forme OpenFn contr\xf4le l'ex\xe9cution de tous vos jobs via l'ErlangVM. (D\xe9couvrez Erlang ",(0,n.kt)("a",{parentName:"p",href:"https://www.erlang.org/"},"ici"),".) Les codes de sortie suivants sont appliqu\xe9s au niveau de cette VM de contr\xf4le, plut\xf4t que vers le bas \xe0 l'int\xe9rieur de votre run de NodeVM."),(0,n.kt)("h3",{id:"3-failed-to-start"},"3\xa0: Failed to start"),(0,n.kt)("p",null,"Le code de sortie ",(0,n.kt)("inlineCode",{parentName:"p"},"3")," signifie que le run n'a pas pu \xeatre lanc\xe9 en raison d'une erreur Erlang. Ce pourrait \xeatre li\xe9 au trafic r\xe9seau, mais tr\xe8s rare comme erreur qui se produit ",(0,n.kt)("em",{parentName:"p"},"avant")," le d\xe9but du run\xa0; une nouvelle tentative sera effectu\xe9e, avec une interruption exponentielle, pour une dur\xe9e tr\xe8s longue."),(0,n.kt)("h3",{id:"4-the-nodevm-is-unresponsive"},"4\xa0: The NodeVM is unresponsive"),(0,n.kt)("p",null,"Le code de sortie ",(0,n.kt)("inlineCode",{parentName:"p"},"4")," signifie que le NodeVM qui run votre job ne r\xe9pond plus. Il a tent\xe9 de quitter apr\xe8s l'expiration du d\xe9lai mais n'a pas pu le faire, donc nous avons arr\xeat\xe9 le processus depuis le bloc contr\xf4le de ErlangVM."),(0,n.kt)("h3",{id:"5-elixirerlangvm-error"},"5: Elixir/ErlangVM Error"),(0,n.kt)("p",null,"Le code de sortie ",(0,n.kt)("inlineCode",{parentName:"p"},"5")," signifie que nous avons rencontr\xe9 une erreur inattendue lors de l'ex\xe9cution de votre job qui ne pouvait \xeatre captur\xe9 que par le bloc contr\xf4le de ErlangVM. Des erreurs comme ceci sont tr\xe8s rares et d\xe9clenchent un audit interne par l'\xe9quipe d'ing\xe9nierie de OpenFN."),(0,n.kt)("h3",{id:"6-aborted-by-project-administrator"},"6: Aborted by project administrator"),(0,n.kt)("p",null,"Exit code ",(0,n.kt)("inlineCode",{parentName:"p"},"6")," means that a run created and queued for execution but then subsequently aborted by request of an administrator or owner of that project."),(0,n.kt)("h3",{id:"11-nodejs-error"},"11: Node.js Error"),(0,n.kt)("p",null,"Exit code ",(0,n.kt)("inlineCode",{parentName:"p"},"11")," means that there was an error in the NodeVM execution but the exit code itself couldn't be captured by our application."),(0,n.kt)("h2",{id:"limites"},"Limites"),(0,n.kt)("p",null,"We've shifted this content to a dedicated ",(0,n.kt)("a",{parentName:"p",href:"/documentation/jobs/limits"},"limits")," page."),(0,n.kt)("h3",{id:"nodevm-memory-limits"},(0,n.kt)("a",{parentName:"h3",href:"/documentation/jobs/limits#nodevm-memory-limits"},"NodeVM memory limits")),(0,n.kt)("h3",{id:"job-state-limits"},(0,n.kt)("a",{parentName:"h3",href:"/documentation/jobs/limits#job-state-limits"},"Job state limits")))}p.isMDXComponent=!0}}]);