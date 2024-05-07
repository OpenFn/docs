"use strict";(self.webpackChunk_openfn_docs=self.webpackChunk_openfn_docs||[]).push([[49183],{15680:(e,n,t)=>{t.d(n,{xA:()=>c,yg:()=>d});var o=t(96540);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);n&&(o=o.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,o)}return t}function r(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function p(e,n){if(null==e)return{};var t,o,a=function(e,n){if(null==e)return{};var t,o,a={},i=Object.keys(e);for(o=0;o<i.length;o++)t=i[o],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)t=i[o],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var l=o.createContext({}),s=function(e){var n=o.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):r(r({},n),e)),t},c=function(e){var n=s(e.components);return o.createElement(l.Provider,{value:n},e.children)},u="mdxType",g={inlineCode:"code",wrapper:function(e){var n=e.children;return o.createElement(o.Fragment,{},n)}},y=o.forwardRef((function(e,n){var t=e.components,a=e.mdxType,i=e.originalType,l=e.parentName,c=p(e,["components","mdxType","originalType","parentName"]),u=s(t),y=a,d=u["".concat(l,".").concat(y)]||u[y]||g[y]||i;return t?o.createElement(d,r(r({ref:n},c),{},{components:t})):o.createElement(d,r({ref:n},c))}));function d(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var i=t.length,r=new Array(i);r[0]=y;var p={};for(var l in n)hasOwnProperty.call(n,l)&&(p[l]=n[l]);p.originalType=e,p[u]="string"==typeof e?e:a,r[1]=p;for(var s=2;s<i;s++)r[s]=t[s];return o.createElement.apply(null,r)}return o.createElement.apply(null,t)}y.displayName="MDXCreateElement"},38219:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>r,default:()=>g,frontMatter:()=>i,metadata:()=>p,toc:()=>s});var o=t(58168),a=(t(96540),t(15680));const i={title:"Version Control",sidebar_label:"Version Control (GitHub Sync)",slug:"/link-to-GitHub"},r=void 0,p={unversionedId:"manage-projects/link-to-gh",id:"manage-projects/link-to-gh",title:"Version Control",description:"You can link your OpenFn projects to GitHub to benefit from industry-standard",source:"@site/docs/manage-projects/link-to-gh.md",sourceDirName:"manage-projects",slug:"/link-to-GitHub",permalink:"/documentation/link-to-GitHub",draft:!1,editUrl:"https://github.com/openfn/docs/edit/main/docs/manage-projects/link-to-gh.md",tags:[],version:"current",frontMatter:{title:"Version Control",sidebar_label:"Version Control (GitHub Sync)",slug:"/link-to-GitHub"},sidebar:"docs",previous:{title:"Email Notifications",permalink:"/documentation/notifications"},next:{title:"Webhook Security",permalink:"/documentation/webhook-security"}},l={},s=[{value:"Setting up your GitHub connection",id:"setting-up-your-github-connection",level:3},{value:"Managing GitHub Permissions",id:"managing-github-permissions",level:2},{value:"Using Version Control",id:"using-version-control",level:2},{value:"OpenFn to GitHub Sync",id:"openfn-to-github-sync",level:3},{value:"GitHub to OpenFn Sync",id:"github-to-openfn-sync",level:3},{value:"Considerations for Change Management on Github",id:"considerations-for-change-management-on-github",level:4},{value:"How It Works",id:"how-it-works",level:2},{value:"Repository Structure (Advanced Configuration)",id:"repository-structure-advanced-configuration",level:2},{value:"Standard",id:"standard",level:3},{value:"Production &amp; Test",id:"production--test",level:3},{value:"Monorepo",id:"monorepo",level:3}],c={toc:s},u="wrapper";function g(e){let{components:n,...i}=e;return(0,a.yg)(u,(0,o.A)({},c,i,{components:n,mdxType:"MDXLayout"}),(0,a.yg)("p",null,"You can link your OpenFn projects to GitHub to benefit from industry-standard\nbest-practices for version control and code promotion. This article walks you\nthrough the configuration steps."),(0,a.yg)("h3",{id:"setting-up-your-github-connection"},"Setting up your GitHub connection"),(0,a.yg)("p",null,"You can connect your OpenFn project to a GitHub repository that you have\nadministrator access to. This enables a 2-way sync: you can sync changes made to\nyour project on OpenFn to GitHub, and you can deploy changes you've made to your\nproject on GitHub to OpenFn."),(0,a.yg)("ol",null,(0,a.yg)("li",{parentName:"ol"},(0,a.yg)("p",{parentName:"li"},"Navigate to ",(0,a.yg)("inlineCode",{parentName:"p"},"Project Settings > Sync to GitHub")," .")),(0,a.yg)("li",{parentName:"ol"},(0,a.yg)("p",{parentName:"li"},"If you have not already connected your OpenFn user account to GitHub, do so\nby clicking the ",(0,a.yg)("strong",{parentName:"p"},'"Connect your OpenFn account to GitHub"')," button."))),(0,a.yg)("p",null,(0,a.yg)("img",{alt:"Configure",src:t(29939).A,width:"1330",height:"286"})),(0,a.yg)("ol",{start:3},(0,a.yg)("li",{parentName:"ol"},(0,a.yg)("p",{parentName:"li"},"Choose which GitHub Installation to use for this connection or\n",(0,a.yg)("a",{parentName:"p",href:"#managing-github-instllations"},"manage your GitHub installations"),"."),(0,a.yg)("admonition",{parentName:"li",type:"tip"},(0,a.yg)("p",{parentName:"admonition"},"If you don't see any installations, or those installations don't have access\nto the repositories you want, click the ",(0,a.yg)("strong",{parentName:"p"},'"Create/update GitHub installations\nor modify permissions"')," link to manage the OpenFn Installation on GitHub.\nWhen you're done, you can come back here and refresh the lists with the \ud83d\udd04\nbutton next to the dropdown lists."))),(0,a.yg)("li",{parentName:"ol"},(0,a.yg)("p",{parentName:"li"},"Choose which repository you'd like to connect.")),(0,a.yg)("li",{parentName:"ol"},(0,a.yg)("p",{parentName:"li"},"Choose which branch you'd like to connect."))),(0,a.yg)("p",null,(0,a.yg)("img",{alt:"Configure",src:t(10677).A,width:"1416",height:"752"})),(0,a.yg)("ol",{start:6},(0,a.yg)("li",{parentName:"ol"},(0,a.yg)("p",{parentName:"li"},(0,a.yg)("strong",{parentName:"p"},(0,a.yg)("em",{parentName:"strong"},"Optionally"))," add a filepath to an existing project ",(0,a.yg)("inlineCode",{parentName:"p"},"config.json")," file."),(0,a.yg)("admonition",{parentName:"li",title:'Most users leave "Path to config" blank.',type:"caution"},(0,a.yg)("p",{parentName:"admonition"},"This advanced feature allows you to connect to a GitHub repo that ",(0,a.yg)("em",{parentName:"p"},"already"),"\nhas an OpenFn ",(0,a.yg)("inlineCode",{parentName:"p"},"project.yaml")," and ",(0,a.yg)("inlineCode",{parentName:"p"},"config.json"),". (Most people can skip this\nstep.) It's useful when you want the first sync to pull data from GitHub into\nOpenFn. Most users opt to have the first sync come ",(0,a.yg)("em",{parentName:"p"},"from")," OpenFn and let the\napp set up the required ",(0,a.yg)("inlineCode",{parentName:"p"},"config.json")," and ",(0,a.yg)("inlineCode",{parentName:"p"},"project.yaml")," files for them."))),(0,a.yg)("li",{parentName:"ol"},(0,a.yg)("p",{parentName:"li"},"Choose the ",(0,a.yg)("strong",{parentName:"p"},"direction")," of the very ",(0,a.yg)("em",{parentName:"p"},"first")," sync action. I.e., when this\nconnection is established, do you want the integration to ",(0,a.yg)("em",{parentName:"p"},"first")," send a copy\nof your OpenFn project to GitHub, or ",(0,a.yg)("em",{parentName:"p"},"first")," overwrite your existing OpenFn\nproject with an existing ",(0,a.yg)("inlineCode",{parentName:"p"},"project.yaml")," from GitHub?"),(0,a.yg)("admonition",{parentName:"li",type:"warning"},(0,a.yg)("mdxAdmonitionTitle",{parentName:"admonition"},"Choosing to ",(0,a.yg)("em",{parentName:"mdxAdmonitionTitle"},"first"),' deploy from "GitHub to OpenFn" is destructive'),(0,a.yg)("p",{parentName:"admonition"},"By default, we take what you've got in your current OpenFn project and send\nit to GitHub to start the version control process. If you choose to instead\ntake an existing ",(0,a.yg)("inlineCode",{parentName:"p"},"project.yaml")," file from GitHub and overwrite your current\nOpenFn project, you won't be able to recover your existing workflows on\nOpenFn. This is feature that covers certain advanced use-cases, and unless\nyou know what you're doing you should start by syncing from \"OpenFn to\nGitHub\"."))),(0,a.yg)("li",{parentName:"ol"},(0,a.yg)("p",{parentName:"li"},"Click ",(0,a.yg)("strong",{parentName:"p"},'"Connect Branch & Initiate First Sync"')," to finish. When you've done\nthis, you can head over to GitHub (via the link provided) to view (and start\nworking with) your OpenFn project as code."))),(0,a.yg)("h2",{id:"managing-github-permissions"},"Managing GitHub Permissions"),(0,a.yg)("p",null,"Granting the OpenFn app access to your GitHub repositories happens ",(0,a.yg)("em",{parentName:"p"},"in GitHub"),",\nnot in OpenFn. We provide a link to install/manage these permissions via the\ninterface. After clicking that link, you can follow the steps below:"),(0,a.yg)("ol",null,(0,a.yg)("li",{parentName:"ol"},"Click ",(0,a.yg)("strong",{parentName:"li"},'"Configure"')," or ",(0,a.yg)("strong",{parentName:"li"},'"Install"'),".")),(0,a.yg)("p",null,(0,a.yg)("img",{alt:"Configure",src:t(54440).A,width:"1263",height:"768"})),(0,a.yg)("ol",{start:2},(0,a.yg)("li",{parentName:"ol"},"Then select the GitHub account that owns the repository you want to connect\nto.")),(0,a.yg)("p",null,(0,a.yg)("img",{alt:"Install",src:t(99806).A,width:"797",height:"490"})),(0,a.yg)("ol",{start:3},(0,a.yg)("li",{parentName:"ol"},"Select the repository to sync with and hit ",(0,a.yg)("strong",{parentName:"li"},'"Save"'),".")),(0,a.yg)("p",null,(0,a.yg)("img",{alt:"Permissions",src:t(22800).A,width:"902",height:"852"})),(0,a.yg)("ol",{start:4},(0,a.yg)("li",{parentName:"ol"},"When you're done making changes on GitHub, head back to OpenFn and refresh\nthe connection lists with the the \ud83d\udd04 button next to the drop down list of\navailable installations.")),(0,a.yg)("h2",{id:"using-version-control"},"Using Version Control"),(0,a.yg)("h3",{id:"openfn-to-github-sync"},"OpenFn to GitHub Sync"),(0,a.yg)("p",null,"Each time you want to sync between your project and GitHub, click the\n",(0,a.yg)("inlineCode",{parentName:"p"},"Initiate Sync to Branch")," button on the ",(0,a.yg)("inlineCode",{parentName:"p"},"Version Control")," page in ",(0,a.yg)("strong",{parentName:"p"},"Project\nSettings")," and the OpenFn GitHub app will run a ",(0,a.yg)("inlineCode",{parentName:"p"},"openfn pull")," action to update\nthe versioned representation of your project as code."),(0,a.yg)("h3",{id:"github-to-openfn-sync"},"GitHub to OpenFn Sync"),(0,a.yg)("p",null,"Any time there are changes made to the specified branch in your GitHub repo,\nthose changes will be pushed to your OpenFn project. Note that your entire\nproject is represented in your ",(0,a.yg)("inlineCode",{parentName:"p"},"project.yaml")," file. In order to deploy any\nchanges to OpenFn, you have to add them to this file in order for them to be\ndeployed when syncing."),(0,a.yg)("h4",{id:"considerations-for-change-management-on-github"},"Considerations for Change Management on Github"),(0,a.yg)("p",null,"With the OpenFn v2 Github sync, if you make any changes to individual job\nexpression files (e.g., ",(0,a.yg)("inlineCode",{parentName:"p"},"getPatients.js"),"), you must copy them to the ",(0,a.yg)("inlineCode",{parentName:"p"},"jobs"),"\nsection of the ",(0,a.yg)("inlineCode",{parentName:"p"},"project.yaml")," file for them to be synced to the OpenFn app.\n",(0,a.yg)("strong",{parentName:"p"},"Any job changes made to individual ",(0,a.yg)("inlineCode",{parentName:"strong"},".js")," files will not be auto-synced. Only\nchanges to the ",(0,a.yg)("inlineCode",{parentName:"strong"},"project.yaml")," file will be synced to the OpenFn app.")),(0,a.yg)("p",null,"For example, see the sample ",(0,a.yg)("inlineCode",{parentName:"p"},"project.yaml")," file below. If you wanted to make a\nchange to the code for job ",(0,a.yg)("inlineCode",{parentName:"p"},"FHIR-standard-Data-with-change"),", you would need to\npaste your updated job code after that job's ",(0,a.yg)("inlineCode",{parentName:"p"},"body:")," key."),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-yaml"},"name: openhie-project\ndescription: Some sample\n# credentials:\n# globals:\nworkflows:\n  OpenHIE-Workflow:\n    name: OpenHIE Workflow\n    jobs:\n      FHIR-standard-Data-with-change:\n        name: FHIR-standard-Data-with-change\n        adaptor: '@openfn/language-http@latest'\n        enabled: true\n        # credential:\n        # globals:\n        body: | //TODO: PASTE UPDATED JOB CODE IN THE BODY KEY HERE\n          fn(state => {\n            console.log(\"hello github integration\")\n            return state\n        });\n\n      Send-to-OpenHIM-to-route-to-SHR:\n        name: Send-to-OpenHIM-to-route-to-SHR\n        adaptor: '@openfn/language-http@latest'\n        enabled: true\n        # credential:\n        # globals:\n        body: |\n          fn(state => state);\n\n      Notify-CHW-upload-successful:\n        name: Notify-CHW-upload-successful\n        adaptor: '@openfn/language-http@latest'\n        enabled: true\n        # credential:\n        # globals:\n        body: |\n          fn(state => state);\n\n      Notify-CHW-upload-failed:\n        name: Notify-CHW-upload-failed\n        adaptor: '@openfn/language-http@latest'\n        enabled: true\n        # credential:\n        # globals:\n        body: |\n          fn(state => state);\n\n    triggers:\n      webhook:\n        type: webhook\n    edges:\n      webhook->FHIR-standard-Data-with-change:\n        source_trigger: webhook\n        target_job: FHIR-standard-Data-with-change\n        condition: always\n      FHIR-standard-Data-with-change->Send-to-OpenHIM-to-route-to-SHR:\n        source_job: FHIR-standard-Data-with-change\n        target_job: Send-to-OpenHIM-to-route-to-SHR\n        condition: on_job_success\n      Send-to-OpenHIM-to-route-to-SHR->Notify-CHW-upload-successful:\n        source_job: Send-to-OpenHIM-to-route-to-SHR\n        target_job: Notify-CHW-upload-successful\n        condition: on_job_success\n      Send-to-OpenHIM-to-route-to-SHR->Notify-CHW-upload-failed:\n        source_job: Send-to-OpenHIM-to-route-to-SHR\n        target_job: Notify-CHW-upload-failed\n        condition: on_job_failure\n")),(0,a.yg)("h2",{id:"how-it-works"},"How It Works"),(0,a.yg)("p",null,"Your whole OpenFn project can be represented as a ",(0,a.yg)("inlineCode",{parentName:"p"},"project.yaml")," file."),(0,a.yg)("p",null,"The ",(0,a.yg)("inlineCode",{parentName:"p"},"Sync to GitHub")," feature makes use of GitHub actions to automatically deploy\n(after a commit on GitHub) or pull (when ",(0,a.yg)("strong",{parentName:"p"},'"Initiate Sync to Branch"')," button is\nclicked on OpenFn) to keep a repository in sync with your OpenFn project."),(0,a.yg)("p",null,"Using our Command Line Interface, the ",(0,a.yg)("a",{parentName:"p",href:"/documentation/deploy/portability"},"@openfn/cli"),"\nyou can pull a project config from OpenFn to a folder or repo on your computer,\nand you can deploy a change in your ",(0,a.yg)("inlineCode",{parentName:"p"},"project.yaml")," file from that directory or\nrepo to OpenFn."),(0,a.yg)("p",null,"For more detailed information on representing your project as code and using the\n@openfn/cli, head over to our documentation on\n",(0,a.yg)("a",{parentName:"p",href:"/documentation/deploy/portability"},"Portability"),"."),(0,a.yg)("h2",{id:"repository-structure-advanced-configuration"},"Repository Structure (Advanced Configuration)"),(0,a.yg)("p",null,"Here you can do pretty much what you want, so long as you've got a ",(0,a.yg)("inlineCode",{parentName:"p"},"config.json"),"\npointing to your project spec, state, and OpenFn endpoint. That config file\nlooks like this:"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-json"},'{\n  "endpoint": "https://app.openfn.org",\n  "statePath": "./path-to-project-state.json",\n  "specPath": "./path-to-project.yaml"\n}\n')),(0,a.yg)("p",null,"By default, OpenFn will name all your synchronization artifacts with your\nproject UUID on OpenFn, so you'll see files that look like this:"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-json"},'{\n  "endpoint": "https://app.openfn.org",\n  "specPath": "openfn-fdfdf286-aa8e-4c9e-a1d2-89c1e6928a2a-spec.yaml",\n  "statePath": "openfn-fdfdf286-aa8e-4c9e-a1d2-89c1e6928a2a-state.json"\n}\n')),(0,a.yg)("p",null,"Below, here are three common patterns used to structure OpenFn projects inside\ngit repositories:"),(0,a.yg)("h3",{id:"standard"},"Standard"),(0,a.yg)("p",null,"Use this approach if you've got one OpenFn project connected to one git\nrepository."),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre"},"your-git-repo\n\u251c\u2500\u2500 config.json\n\u251c\u2500\u2500 projectState.json\n\u2514\u2500\u2500 projectSpec.yaml\n")),(0,a.yg)("h3",{id:"production--test"},"Production & Test"),(0,a.yg)("p",null,"Use this approach if you've got two OpenFn projects that use the ",(0,a.yg)("em",{parentName:"p"},"same\nworklows"),". Here, you're connecting two projects (prod and test) to a single git\nrepo and a single ",(0,a.yg)("inlineCode",{parentName:"p"},"project.yaml")," file."),(0,a.yg)("p",null,"This will allow you to keep two projects in sync when changes are merged from\none branch to another. You might choose to sync:"),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},"Your production project with the ",(0,a.yg)("inlineCode",{parentName:"li"},"main")," branch"),(0,a.yg)("li",{parentName:"ul"},"Your test project with the ",(0,a.yg)("inlineCode",{parentName:"li"},"staging")," branch")),(0,a.yg)("p",null,"After a merge, your repo would look like this:"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre"},"your-git-repo\n\u251c\u2500\u2500 projectSpec.yaml ## works both\n\u2502\n\u251c\u2500\u2500 prod-config.json\n\u251c\u2500\u2500 prod-projectState.json\n\u2502\n\u251c\u2500\u2500 test-config.json\n\u2514\u2500\u2500 test-projectState.json\n")),(0,a.yg)("h3",{id:"monorepo"},"Monorepo"),(0,a.yg)("p",null,"Sometimes, it's helpful to have multiple OpenFn projects all stored in the same\nrepo, even if they don't use the same workflows (i.e., even if they don't share\na ",(0,a.yg)("inlineCode",{parentName:"p"},"project.yaml")," file.)"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre"},"your-git-monorepo\n\u251c\u2500\u2500 project-a\n\u2502    \u251c\u2500\u2500 config.json\n\u2502    \u251c\u2500\u2500 projectState.json\n\u2502    \u2514\u2500\u2500 projectSpec.yaml\n\u2514\u2500\u2500 project-b\n     \u251c\u2500\u2500 config.json\n     \u251c\u2500\u2500 projectState.json\n     \u2514\u2500\u2500 projectSpec.yaml\n")))}g.isMDXComponent=!0},29939:(e,n,t)=>{t.d(n,{A:()=>o});const o=t.p+"assets/images/connect-account-to-github-5fb6decfd1d14c0d00c9dd0f7ad3ce8c.png"},10677:(e,n,t)=>{t.d(n,{A:()=>o});const o=t.p+"assets/images/github-options-11104702560852b3321c5c6e0c55b8fa.png"},54440:(e,n,t)=>{t.d(n,{A:()=>o});const o=t.p+"assets/images/lightning_gh_configure-5cfed046cf265d2b905d42edcefc7c24.png"},99806:(e,n,t)=>{t.d(n,{A:()=>o});const o=t.p+"assets/images/lightning_gh_install_openfn-c1ace5102a6d1d214ec5e7e1ed9085a5.png"},22800:(e,n,t)=>{t.d(n,{A:()=>o});const o=t.p+"assets/images/lightning_gh_permissions-c34aeca93227893baee325e33a1f56e7.png"}}]);