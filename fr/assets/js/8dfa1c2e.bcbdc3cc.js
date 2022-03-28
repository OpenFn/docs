"use strict";(self.webpackChunk_openfn_docs=self.webpackChunk_openfn_docs||[]).push([[5935],{3905:function(e,r,t){t.d(r,{Zo:function(){return d},kt:function(){return m}});var n=t(67294);function o(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function i(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function s(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?i(Object(t),!0).forEach((function(r){o(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function a(e,r){if(null==e)return{};var t,n,o=function(e,r){if(null==e)return{};var t,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)t=i[n],r.indexOf(t)>=0||(o[t]=e[t]);return o}(e,r);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)t=i[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var l=n.createContext({}),u=function(e){var r=n.useContext(l),t=r;return e&&(t="function"==typeof e?e(r):s(s({},r),e)),t},d=function(e){var r=u(e.components);return n.createElement(l.Provider,{value:r},e.children)},p={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},c=n.forwardRef((function(e,r){var t=e.components,o=e.mdxType,i=e.originalType,l=e.parentName,d=a(e,["components","mdxType","originalType","parentName"]),c=u(t),m=o,v=c["".concat(l,".").concat(m)]||c[m]||p[m]||i;return t?n.createElement(v,s(s({ref:r},d),{},{components:t})):n.createElement(v,s({ref:r},d))}));function m(e,r){var t=arguments,o=r&&r.mdxType;if("string"==typeof e||o){var i=t.length,s=new Array(i);s[0]=c;var a={};for(var l in r)hasOwnProperty.call(r,l)&&(a[l]=r[l]);a.originalType=e,a.mdxType="string"==typeof e?e:o,s[1]=a;for(var u=2;u<i;u++)s[u]=t[u];return n.createElement.apply(null,s)}return n.createElement.apply(null,t)}c.displayName="MDXCreateElement"},50991:function(e,r,t){t.r(r),t.d(r,{frontMatter:function(){return a},contentTitle:function(){return l},metadata:function(){return u},toc:function(){return d},default:function(){return c}});var n=t(83117),o=t(80102),i=(t(67294),t(3905)),s=["components"],a={title:"Codes de sortie et erreurs"},l=void 0,u={unversionedId:"jobs/errors",id:"jobs/errors",title:"Codes de sortie et erreurs",description:"\xc0 propos des erreurs",source:"@site/i18n/fr/docusaurus-plugin-content-docs/current/jobs/errors.md",sourceDirName:"jobs",slug:"/jobs/errors",permalink:"/fr/documentation/jobs/errors",editUrl:"https://github.com/openfn/docs/edit/main/docs/jobs/errors.md",tags:[],version:"current",frontMatter:{title:"Codes de sortie et erreurs"},sidebar:"docs",previous:{title:"D\xe9pannage",permalink:"/fr/documentation/trouble-shooting"},next:{title:"Limites",permalink:"/fr/documentation/jobs/limits"}},d=[{value:"\xc0 propos des erreurs",id:"\xe0-propos-des-erreurs",children:[],level:2},{value:"Codes de sortie standard",id:"codes-de-sortie-standard",children:[{value:"0\xa0: Success",id:"0-success",children:[],level:3},{value:"1\xa0: Error",id:"1-error",children:[],level:3},{value:"2\xa0: Timeout",id:"2-timeout",children:[],level:3},{value:"10\xa0: Core Error",id:"10-core-error",children:[],level:3},{value:"134\xa0: Out of memory",id:"134-out-of-memory",children:[],level:3}],level:2},{value:"Codes de sortie sp\xe9ciaux (Plateforme)",id:"codes-de-sortie-sp\xe9ciaux-plateforme",children:[{value:"3\xa0: Failed to start",id:"3-failed-to-start",children:[],level:3},{value:"4\xa0: The NodeVM is unresponsive",id:"4-the-nodevm-is-unresponsive",children:[],level:3},{value:"5: Elixir/ErlangVM Error",id:"5-elixirerlangvm-error",children:[],level:3},{value:"6: Aborted by project administrator",id:"6-aborted-by-project-administrator",children:[],level:3},{value:"11: Node.js Error",id:"11-nodejs-error",children:[],level:3}],level:2},{value:"Limites",id:"limites",children:[{value:"NodeVM memory limits",id:"nodevm-memory-limits",children:[],level:3},{value:"Job state limits",id:"job-state-limits",children:[],level:3}],level:2}],p={toc:d};function c(e){var r=e.components,t=(0,o.Z)(e,s);return(0,i.kt)("wrapper",(0,n.Z)({},p,t,{components:r,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"\xe0-propos-des-erreurs"},"\xc0 propos des erreurs"),(0,i.kt)("p",null,"Les erreurs sont vos amis. La chose la plus importante que vous pouvez faire lorsque vous rencontrez une erreur \xe0 n'importe quelle \xe9tape d'un projet d'int\xe9gration de donn\xe9es est de ",(0,i.kt)("em",{parentName:"p"},"lire")," ce qui s'affiche \xe0 l'\xe9cran. Bien que cela puisse para\xeetre \xe9vident, il est tr\xe8s facile de voir un grand bloc de langage technique et de se d\xe9connecter."),(0,i.kt)("p",null,"Souvent, l'\xe9chec d'un run est d\xfb \xe0 des raisons commerciales simples qui peuvent \xeatre identifi\xe9es \xe0 partir des messages d'erreur affich\xe9s dans les logs par @openfn/core."),(0,i.kt)("h2",{id:"codes-de-sortie-standard"},"Codes de sortie standard"),(0,i.kt)("h3",{id:"0-success"},"0\xa0: Success"),(0,i.kt)("p",null,"Le code de sortie ",(0,i.kt)("inlineCode",{parentName:"p"},"0")," est un succ\xe8s (run r\xe9ussie, p. ex. un syst\xe8me de destination a r\xe9pondu avec un ",(0,i.kt)("inlineCode",{parentName:"p"},"200"),")"),(0,i.kt)("h3",{id:"1-error"},"1\xa0: Error"),(0,i.kt)("p",null,"Le code de sortie ",(0,i.kt)("inlineCode",{parentName:"p"},"1")," est une erreur normalement g\xe9r\xe9e (run a \xe9chou\xe9 normalement, par exemple, un syst\xe8me de destination a r\xe9pondu avec un ",(0,i.kt)("inlineCode",{parentName:"p"},"4XX"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"5XX"),", ou toute autre erreur sp\xe9cialis\xe9e ",(0,i.kt)("inlineCode",{parentName:"p"},"RequiredFieldMissing"),".)"),(0,i.kt)("h3",{id:"2-timeout"},"2\xa0: Timeout"),(0,i.kt)("p",null,"Le code de sortie ",(0,i.kt)("inlineCode",{parentName:"p"},"2")," signifie que votre run a expir\xe9. Il a d\xe9pass\xe9 le d\xe9lai que vous avez d\xe9fini pour votre job, ou si vous utilisez la plateforme h\xe9berg\xe9e sur une offre non-entreprise, il a d\xe9pass\xe9 ",(0,i.kt)("inlineCode",{parentName:"p"},"100")," secondes."),(0,i.kt)("h3",{id:"10-core-error"},"10\xa0: Core Error"),(0,i.kt)("p",null,"Le code de sortie ",(0,i.kt)("inlineCode",{parentName:"p"},"10")," signifie qu'il y a eu une erreur dans ",(0,i.kt)("inlineCode",{parentName:"p"},"@openfn/core/cli.js execute"),". C'est possible que votre job ne puisse pas \xeatre ex\xe9cut\xe9 tel qu'il est r\xe9dig\xe9, mais que diverses validations de contr\xf4les n'ont pas pu vous avertir plus t\xf4t."),(0,i.kt)("h3",{id:"134-out-of-memory"},"134\xa0: Out of memory"),(0,i.kt)("p",null,"Il s'agit d'une erreur standard de m\xe9moire insuffisante de NodeVM. Voir ",(0,i.kt)("a",{parentName:"p",href:"#nodevm-limits"},"NodeVM memory limits")," ci-dessous."),(0,i.kt)("h2",{id:"codes-de-sortie-sp\xe9ciaux-plateforme"},"Codes de sortie sp\xe9ciaux (Plateforme)"),(0,i.kt)("p",null,"La plate-forme OpenFn contr\xf4le l'ex\xe9cution de tous vos jobs via l'ErlangVM. (D\xe9couvrez Erlang ",(0,i.kt)("a",{parentName:"p",href:"https://www.erlang.org/"},"ici"),".) Les codes de sortie suivants sont appliqu\xe9s au niveau de cette VM de contr\xf4le, plut\xf4t que vers le bas \xe0 l'int\xe9rieur de votre run de NodeVM."),(0,i.kt)("h3",{id:"3-failed-to-start"},"3\xa0: Failed to start"),(0,i.kt)("p",null,"Le code de sortie ",(0,i.kt)("inlineCode",{parentName:"p"},"3")," signifie que le run n'a pas pu \xeatre lanc\xe9 en raison d'une erreur Erlang. Ce pourrait \xeatre li\xe9 au trafic r\xe9seau, mais tr\xe8s rare comme erreur qui se produit ",(0,i.kt)("em",{parentName:"p"},"avant")," le d\xe9but du run\xa0; une nouvelle tentative sera effectu\xe9e, avec une interruption exponentielle, pour une dur\xe9e tr\xe8s longue."),(0,i.kt)("h3",{id:"4-the-nodevm-is-unresponsive"},"4\xa0: The NodeVM is unresponsive"),(0,i.kt)("p",null,"Le code de sortie ",(0,i.kt)("inlineCode",{parentName:"p"},"4")," signifie que le NodeVM qui run votre job ne r\xe9pond plus. Il a tent\xe9 de quitter apr\xe8s l'expiration du d\xe9lai mais n'a pas pu le faire, donc nous avons arr\xeat\xe9 le processus depuis le bloc contr\xf4le de ErlangVM."),(0,i.kt)("h3",{id:"5-elixirerlangvm-error"},"5: Elixir/ErlangVM Error"),(0,i.kt)("p",null,"Le code de sortie ",(0,i.kt)("inlineCode",{parentName:"p"},"5")," signifie que nous avons rencontr\xe9 une erreur inattendue lors de l'ex\xe9cution de votre job qui ne pouvait \xeatre captur\xe9 que par le bloc contr\xf4le de ErlangVM. Des erreurs comme ceci sont tr\xe8s rares et d\xe9clenchent un audit interne par l'\xe9quipe d'ing\xe9nierie de OpenFN."),(0,i.kt)("h3",{id:"6-aborted-by-project-administrator"},"6: Aborted by project administrator"),(0,i.kt)("p",null,"Exit code ",(0,i.kt)("inlineCode",{parentName:"p"},"6")," means that a run created and queued for execution but then subsequently aborted by request of an administrator or owner of that project."),(0,i.kt)("h3",{id:"11-nodejs-error"},"11: Node.js Error"),(0,i.kt)("p",null,"Exit code ",(0,i.kt)("inlineCode",{parentName:"p"},"11")," means that there was an error in the NodeVM execution but the exit code itself couldn't be captured by our application."),(0,i.kt)("h2",{id:"limites"},"Limites"),(0,i.kt)("p",null,"We've shifted this content to a dedicated ",(0,i.kt)("a",{parentName:"p",href:"/documentation/jobs/limits"},"limits")," page."),(0,i.kt)("h3",{id:"nodevm-memory-limits"},(0,i.kt)("a",{parentName:"h3",href:"/documentation/jobs/limits#nodevm-memory-limits"},"NodeVM memory limits")),(0,i.kt)("h3",{id:"job-state-limits"},(0,i.kt)("a",{parentName:"h3",href:"/documentation/jobs/limits#job-state-limits"},"Job state limits")))}c.isMDXComponent=!0}}]);