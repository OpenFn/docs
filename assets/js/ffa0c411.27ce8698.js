"use strict";(self.webpackChunk_openfn_docs=self.webpackChunk_openfn_docs||[]).push([[7031],{41139:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>i,default:()=>u,frontMatter:()=>r,metadata:()=>s,toc:()=>p});var o=t(58168),a=(t(96540),t(15680));const r={title:"Portability"},i=void 0,s={unversionedId:"deploy/portability",id:"deploy/portability",title:"Portability",description:"Intent",source:"@site/docs/deploy/portability.md",sourceDirName:"deploy",slug:"/deploy/portability",permalink:"/documentation/deploy/portability",draft:!1,editUrl:"https://github.com/openfn/docs/edit/main/docs/deploy/portability.md",tags:[],version:"current",frontMatter:{title:"Portability"},sidebar:"docs",previous:{title:"Requirements",permalink:"/documentation/deploy/requirements"},next:{title:"Migration Steps",permalink:"/documentation/migration-steps"}},l={},p=[{value:"Intent",id:"intent",level:2},{value:"Projects &quot;as code&quot;",id:"projects-as-code",level:2},{value:"Directory structure",id:"directory-structure",level:3},{value:"The project <strong><em>spec</em></strong>",id:"the-project-spec",level:3},{value:"The project <strong><em>state</em></strong>",id:"the-project-state",level:3},{value:"Using the CLI interact with projects",id:"using-the-cli-interact-with-projects",level:2},{value:"<code>openfn pull</code> to generate spec &amp; state",id:"openfn-pull-to-generate-spec--state",level:3},{value:"<code>openfn deploy</code> to create new projects",id:"openfn-deploy-to-create-new-projects",level:3},{value:"<code>openfn deploy</code> to update existing projects",id:"openfn-deploy-to-update-existing-projects",level:3},{value:"Getting Help with the cli",id:"getting-help-with-the-cli",level:2},{value:"Other Versions",id:"other-versions",level:2}],d={toc:p},c="wrapper";function u(e){let{components:n,...t}=e;return(0,a.yg)(c,(0,o.A)({},d,t,{components:n,mdxType:"MDXLayout"}),(0,a.yg)("h2",{id:"intent"},"Intent"),(0,a.yg)("p",null,'The portability specification allows for the representations of entire workflow\nprojects "as code", lets user move between various deployment pathways (cloud,\nlocal, DIY, etc.) and proposes a globally-applicable way of ',(0,a.yg)("strong",{parentName:"p"},(0,a.yg)("em",{parentName:"strong"},"specifying\nworkflow automation"))," and ",(0,a.yg)("strong",{parentName:"p"},(0,a.yg)("em",{parentName:"strong"},"systems integration"))," that might be applied\nacross workflow-engines/integration platforms across the sector. Nothing about\nthe spec ",(0,a.yg)("em",{parentName:"p"},"must")," be specific to OpenFn or any one of our individual products. We\nenvision a future in which software built with Lightning, the OpenFn Integration\nToolkit, and entirely new and different integration/workflow tools can adopt\nthis specification."),(0,a.yg)("p",null,"If you're interested in contributing to the specification, reach out to OpenFn\nvia the ",(0,a.yg)("a",{parentName:"p",href:"https://community.openfn.org"},"community forum"),", write to us, or suggest\nchanges by submitting a pull request here."),(0,a.yg)("h2",{id:"projects-as-code"},'Projects "as code"'),(0,a.yg)("p",null,"Entire projects (groups of workflows with their associated triggers, edges,\ncredentials and jobs) can be represented as code. This improves the OpenFn\ndeveloper experience by (a) allowing workflows to be built and tested locally;\n(b) enabling project version control and an audit trail of project changes; and\n(c) allowing users to port existing projects between different instances (i.e.,\ndeployments) of Lightning."),(0,a.yg)("h3",{id:"directory-structure"},"Directory structure"),(0,a.yg)("p",null,"Many users keep OpenFn projects in git repositories, and this is a common\nstructure:"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre"},"myProject/\n\u251c\u2500\u2500 workflow-a/\n\u2502   \u251c\u2500\u2500 job-1.js\n\u2502   \u251c\u2500\u2500 job-2.js\n\u2502   \u2514\u2500\u2500 job-3.js\n\u251c\u2500\u2500 workflow-b/\n\u2502   \u2514\u2500\u2500 job-4.js\n\u251c\u2500\u2500 project.yaml\n\u251c\u2500\u2500 projectState.json\n\u2514\u2500\u2500 config.json\n")),(0,a.yg)("admonition",{title:"Directory Structure",type:"info"},(0,a.yg)("p",{parentName:"admonition"},"There are commonly used 3 directory structure for OpenFn projects namely:\nstandard, production & test, and monorepo. To learn more, please see the OpenFn\n",(0,a.yg)("a",{parentName:"p",href:"/documentation/link-to-GitHub#structuring-your-github-repository"},"GitHub configuration documentation"),".")),(0,a.yg)("h3",{id:"the-project-spec"},"The project ",(0,a.yg)("strong",{parentName:"h3"},(0,a.yg)("em",{parentName:"strong"},"spec"))),(0,a.yg)("p",null,'The project specification (or "spec") is often saved as a ',(0,a.yg)("inlineCode",{parentName:"p"},"project.yaml")," file.\nWhile most of the spec is written inline, many developers prefer to track their\njob bodies in separate ",(0,a.yg)("inlineCode",{parentName:"p"},".js")," files and they then reference them with a relative\npath."),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-yaml"},"name: openhie-project\ndescription: Some sample\ncredentials:\n  jane-smith@test.com-HAPI-FHIR:\n    owner: jane-smith@test.com\n    name: HAPI FHIR\nworkflows:\n  OpenHIE-Workflow:\n    name: OpenHIE Workflow\n    jobs:\n      FHIR-standard-Data-with-change:\n        name: FHIR-standard-Data-with-change\n        adaptor: '@openfn/language-http@latest'\n        enabled: true\n        credential: null\n        body:\n          path: ./jobs/my-fancy-script.js\n\n      Send-to-OpenHIM-to-route-to-SHR:\n        name: Send-to-OpenHIM-to-route-to-SHR\n        adaptor: '@openfn/language-http@latest'\n        enabled: true\n        credential: jane-smith@test.com-HAPI-FHIR\n        body: |\n          fn(state => {\n            console.log(\"hello github integration\")\n            return state\n          });\n\n      Notify-CHW-upload-successful:\n        name: Notify-CHW-upload-successful\n        adaptor: '@openfn/language-http@latest'\n        enabled: true\n        credential: null\n        body: fn(state => state);\n\n      Notify-CHW-upload-failed:\n        name: Notify-CHW-upload-failed\n        adaptor: '@openfn/language-http@latest'\n        enabled: true\n        credential: null\n        body:\n          path: ./jobs/notify-failure.js\n\n    triggers:\n      webhook:\n        type: webhook\n    edges:\n      webhook->FHIR-standard-Data-with-change:\n        source_trigger: webhook\n        target_job: FHIR-standard-Data-with-change\n        condition: always\n      FHIR-standard-Data-with-change->Send-to-OpenHIM-to-route-to-SHR:\n        source_job: FHIR-standard-Data-with-change\n        target_job: Send-to-OpenHIM-to-route-to-SHR\n        condition: on_job_success\n      Send-to-OpenHIM-to-route-to-SHR->Notify-CHW-upload-successful:\n        source_job: Send-to-OpenHIM-to-route-to-SHR\n        target_job: Notify-CHW-upload-successful\n        condition: on_job_success\n      Send-to-OpenHIM-to-route-to-SHR->Notify-CHW-upload-failed:\n        source_job: Send-to-OpenHIM-to-route-to-SHR\n        target_job: Notify-CHW-upload-failed\n        condition: on_job_failure\n")),(0,a.yg)("p",null,"In this spec, you can see the different ways of defining a job's body:"),(0,a.yg)("ol",null,(0,a.yg)("li",{parentName:"ol"},(0,a.yg)("p",{parentName:"li"},"Inline body: Used in the ",(0,a.yg)("inlineCode",{parentName:"p"},"FHIR-standard-Data-with-change")," and\n",(0,a.yg)("inlineCode",{parentName:"p"},"Send-to-OpenHIM-to-route-to-SHR")," jobs. The body is directly written in the\nYAML file.")),(0,a.yg)("li",{parentName:"ol"},(0,a.yg)("p",{parentName:"li"},"External file reference: Used in both ",(0,a.yg)("inlineCode",{parentName:"p"},"Notify-CHW-upload-successful")," and\n",(0,a.yg)("inlineCode",{parentName:"p"},"Notify-CHW-upload-failed")," jobs. The body is stored in separate files,\nreferenced by the path key. This allows for better organization of complex\njob logic."))),(0,a.yg)("p",null,"When using file paths:"),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},"Paths are relative to the location of the ",(0,a.yg)("inlineCode",{parentName:"li"},"project.yaml")," file."),(0,a.yg)("li",{parentName:"ul"},"Ensure that the referenced files exist and contain valid job body code."),(0,a.yg)("li",{parentName:"ul"},"This method is particularly useful for complex jobs or when you want to reuse\njob bodies across different projects.")),(0,a.yg)("h3",{id:"the-project-state"},"The project ",(0,a.yg)("strong",{parentName:"h3"},(0,a.yg)("em",{parentName:"strong"},"state"))),(0,a.yg)("p",null,"The project state is a representation of a particular project as ",(0,a.yg)("em",{parentName:"p"},"on a specific\nLightning instance"),". It is often saved as ",(0,a.yg)("inlineCode",{parentName:"p"},"projectState.json")," and contains UUIDs\nfor resources on a particular Lightning deployment."),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-json"},'{\n  "id": "8deff39d-8189-4bd7-9dc7-f9f08e7f2c60",\n  "name": "openhie-project",\n  "description": null,\n  "inserted_at": "2023-08-25T08:57:31",\n  "updated_at": "2023-08-25T08:57:31",\n  "scheduled_deletion": null,\n  "requires_mfa": false,\n  "project_credentials": {\n    "jane-smith@test.com-HAPI-FHIR": {\n      "id": "25f48989-d349-4eb8-99c3-923ebba5b116",\n      "name": "HAPI FHIR",\n      "owner": "jane-smith@test.com"\n    }\n  },\n  "workflows": {\n    "OpenHIE-Workflow": {\n      "id": "27ae2937-0959-48b8-a597-b1646aae8c14",\n      "name": "OpenHIE Workflow",\n      "jobs": {\n        "Transform-data-to-FHIR-standard": {\n          "id": "e44f65bb-5038-4e17-8d93-b63cbe95254a",\n          "delete": true\n        },\n        "Send-to-OpenHIM-to-route-to-SHR": {\n          "id": "977b87ff-f347-42b5-832f-6ae2ca726f32",\n          "name": "Send-to-OpenHIM-to-route-to-SHR",\n          "adaptor": "@openfn/language-http@latest",\n          "body": "fn(state => state);\\n",\n          "enabled": true\n        },\n        "Notify-CHW-upload-successful": {\n          "id": "86b743a3-fd00-4629-b9fb-d5f38fb56d0b",\n          "name": "Notify-CHW-upload-successful",\n          "adaptor": "@openfn/language-http@latest",\n          "body": "fn(state => state);\\n",\n          "enabled": true\n        },\n        "Notify-CHW-upload-failed": {\n          "id": "be85df30-0abd-4f8e-be17-501f67e18b8d",\n          "name": "Notify-CHW-upload-failed",\n          "adaptor": "@openfn/language-http@latest",\n          "body": "fn(state => state);\\n",\n          "enabled": true\n        },\n        "FHIR-standard-Data": {\n          "id": "55016dda-42e3-4ee1-8a9c-24e3f23d42f1",\n          "delete": true\n        },\n        "FHIR-standard-Data-with-change": {\n          "id": "28dd0846-a6ae-40c0-8ab4-3e0a6b487afe",\n          "name": "FHIR-standard-Data-with-change",\n          "adaptor": "@openfn/language-http@latest",\n          "body": "fn(state => state);\\n",\n          "enabled": true\n        }\n      },\n      "triggers": {\n        "webhook": {\n          "id": "530cde0b-0de4-4f68-8834-0a4356a2fe53",\n          "type": "webhook"\n        }\n      },\n      "edges": {\n        "webhook->Transform-data-to-FHIR-standard": {\n          "id": "b2c7407b-0ae9-4ca5-9d6b-ee624976fa54",\n          "delete": true\n        },\n        "Transform-data-to-FHIR-standard->Send-to-OpenHIM-to-route-to-SHR": {\n          "id": "d22ed6f4-26a2-4c85-b261-cc110a6851e6",\n          "delete": true\n        },\n        "Send-to-OpenHIM-to-route-to-SHR->Notify-CHW-upload-successful": {\n          "id": "26c12f7f-7806-4008-87cd-6747998f95f4",\n          "condition": "on_job_success",\n          "source_job_id": "977b87ff-f347-42b5-832f-6ae2ca726f32",\n          "source_trigger_id": null,\n          "target_job_id": "86b743a3-fd00-4629-b9fb-d5f38fb56d0b"\n        },\n        "Send-to-OpenHIM-to-route-to-SHR->Notify-CHW-upload-failed": {\n          "id": "0630ac96-4f67-4de7-8c3d-0bf3f89f80d9",\n          "condition": "on_job_failure",\n          "source_job_id": "977b87ff-f347-42b5-832f-6ae2ca726f32",\n          "source_trigger_id": null,\n          "target_job_id": "be85df30-0abd-4f8e-be17-501f67e18b8d"\n        },\n        "webhook->FHIR-standard-Data": {\n          "id": "5ce3a8ed-b9eb-464a-a2cd-ba55adc393c2",\n          "delete": true\n        },\n        "FHIR-standard-Data->Send-to-OpenHIM-to-route-to-SHR": {\n          "id": "5f459cd9-2882-4a61-a2cc-ec45e58d4837",\n          "delete": true\n        },\n        "webhook->FHIR-standard-Data-with-change": {\n          "id": "75e7f7d8-274b-410d-9600-730bbd535229",\n          "condition": "always",\n          "source_job_id": null,\n          "source_trigger_id": "530cde0b-0de4-4f68-8834-0a4356a2fe53",\n          "target_job_id": "28dd0846-a6ae-40c0-8ab4-3e0a6b487afe"\n        },\n        "FHIR-standard-Data-with-change->Send-to-OpenHIM-to-route-to-SHR": {\n          "id": "1e5ba385-2c49-4241-8cd2-042c99a810ec",\n          "condition": "on_job_success",\n          "source_job_id": "28dd0846-a6ae-40c0-8ab4-3e0a6b487afe",\n          "source_trigger_id": null,\n          "target_job_id": "977b87ff-f347-42b5-832f-6ae2ca726f32"\n        }\n      }\n    }\n  }\n}\n')),(0,a.yg)("h2",{id:"using-the-cli-interact-with-projects"},"Using the CLI interact with projects"),(0,a.yg)("p",null,"The project spec and project state can be used for a variety of reasons, e.g.\none could generate the state and spec as backups of the project or one could\ngenerate these files and use them for auditing and record keeping, etc. The\nOpenFn ",(0,a.yg)("a",{parentName:"p",href:"https://github.com/OpenFn/kit/tree/main/packages/cli"},"CLI")," comes with\ncommands that can be used to pull project configurations down from a running\nLightning server, and to deploy or push updates to existing projects on a\nLightning server. To learn more about automated version control via pull and\ndeploy, head over to our ",(0,a.yg)("a",{parentName:"p",href:"/documentation/link-to-GitHub"},"Version Control"),"\ndocs."),(0,a.yg)("admonition",{title:"Don't have the CLI yet?",type:"info"},(0,a.yg)("p",{parentName:"admonition"},"Install it by running ",(0,a.yg)("inlineCode",{parentName:"p"},"npm install -g @openfn/cli"))),(0,a.yg)("p",null,"Before using the CLI, configure it either by passing in environment variables:"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre"},"OPENFN_ENDPOINT=https://app.openfn.org\nOPENFN_API_KEY=yourSecretApiToken\n")),(0,a.yg)("p",null,"Or through a ",(0,a.yg)("inlineCode",{parentName:"p"},"config.json")," file:"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-json"},'{\n  // Required, can be overridden or set with `OPENFN_API_KEY` env var\n  "apiKey": "***",\n\n  // Optional: can be set using the -p, defaults to project.yaml\n  "specPath": "project.yaml",\n\n  // Optional: can be set using -s, defaults to .state.json\n  "statePath": ".state.json",\n\n  // Optional: defaults to OpenFn.org\'s API, can be overridden or set with\n  // `OPENFN_ENDPOINT` env var\n  "endpoint": "https://app.openfn.org"\n}\n')),(0,a.yg)("p",null,"More details on the CLI can be found\n",(0,a.yg)("a",{parentName:"p",href:"https://github.com/OpenFn/kit/tree/main/packages/cli#basic-usage"},"here"),"."),(0,a.yg)("h3",{id:"openfn-pull-to-generate-spec--state"},(0,a.yg)("inlineCode",{parentName:"h3"},"openfn pull")," to generate spec & state"),(0,a.yg)("p",null,"To generate the spec and state files for an existing project, use:"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-sh"},"openfn pull {YOUR-PROJECT-UUID} -c ./config.json\n")),(0,a.yg)("p",null,"This command will save (or overwrite) a project spec and state file based on the\npath you've set in your configuration."),(0,a.yg)("h3",{id:"openfn-deploy-to-create-new-projects"},(0,a.yg)("inlineCode",{parentName:"h3"},"openfn deploy")," to create new projects"),(0,a.yg)("p",null,"To deploy a new project to a Lightning instance from a project spec (without a\nproject state) file use:"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-sh"},"openfn deploy -c config.json\n")),(0,a.yg)("h3",{id:"openfn-deploy-to-update-existing-projects"},(0,a.yg)("inlineCode",{parentName:"h3"},"openfn deploy")," to update existing projects"),(0,a.yg)("p",null,"With a valid project state defined in your ",(0,a.yg)("inlineCode",{parentName:"p"},"config.json"),", the same\n",(0,a.yg)("inlineCode",{parentName:"p"},"openfn deploy")," command will beam up your changes as described by a difference\nbetween your project spec and what's found on the server."),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-sh"},'openfn deploy -c config.json\nChecking https://demo.openfn.org/api/provision/4adf2644-ed4e-4f97-a24c-ab35b3cb1efa for existing project.\nProject found.\n[CLI] \u2666 Changes:\n {\n   workflows: [\n     {\n       jobs: [\n         {\n-          body: "fn(state => {\\n  console.log(\\"ok\\")\\n  return state\\n});"\n+          body: "fn(state => {\\n  console.log(\\"some changes here!\\")\\n  return state\\n});\\n"\n         }\n         ...\n         ...\n         ...\n       ]\n     }\n   ]\n }\n\n? Deploy? yes\n[CLI] \u2666 Deployed.\n')),(0,a.yg)("h2",{id:"getting-help-with-the-cli"},"Getting Help with the cli"),(0,a.yg)("p",null,"The cli package comes with an inbuilt ",(0,a.yg)("inlineCode",{parentName:"p"},"help"),". Adding ",(0,a.yg)("inlineCode",{parentName:"p"},"--help")," to a command such\nas ",(0,a.yg)("inlineCode",{parentName:"p"},"openfn deploy --help")," will result in a help message describing the command\nand the options available when using this command. See an example below"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-sh"},"openfn deploy --help\nopenfn deploy\n\nDeploy a project's config to a remote Lightning instance\n\nOptions:\n      --version                Show version number                                                                                                                     [boolean]\n      --help                   Show help                                                                                                                               [boolean]\n  -c, --config, --config-path  The location of your config file                                                                                      [default: \"./.config.json\"]\n      --no-confirm             Skip confirmation prompts (e.g. 'Are you sure?')                                                                                        [boolean]\n      --describe               Downloads the project yaml from the specified instance                                                                                  [boolean]\n  -l, --log                    Set the log level                                                                                                                        [string]\n      --log-json               Output all logs as JSON objects                                                                                                         [boolean]\n  -p, --project-path           The location of your project.yaml file                                                                                                   [string]\n  -s, --state-path             Path to the state file\n")),(0,a.yg)("h2",{id:"other-versions"},"Other Versions"),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("a",{parentName:"li",href:"portability-versions#v2"},"Portability Spec v2")),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("a",{parentName:"li",href:"portability-versions#v1"},"Portability Spec v1"))))}u.isMDXComponent=!0},15680:(e,n,t)=>{t.d(n,{xA:()=>d,yg:()=>f});var o=t(96540);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function r(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);n&&(o=o.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,o)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?r(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,o,a=function(e,n){if(null==e)return{};var t,o,a={},r=Object.keys(e);for(o=0;o<r.length;o++)t=r[o],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)t=r[o],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var l=o.createContext({}),p=function(e){var n=o.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},d=function(e){var n=p(e.components);return o.createElement(l.Provider,{value:n},e.children)},c="mdxType",u={inlineCode:"code",wrapper:function(e){var n=e.children;return o.createElement(o.Fragment,{},n)}},g=o.forwardRef((function(e,n){var t=e.components,a=e.mdxType,r=e.originalType,l=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),c=p(t),g=a,f=c["".concat(l,".").concat(g)]||c[g]||u[g]||r;return t?o.createElement(f,i(i({ref:n},d),{},{components:t})):o.createElement(f,i({ref:n},d))}));function f(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var r=t.length,i=new Array(r);i[0]=g;var s={};for(var l in n)hasOwnProperty.call(n,l)&&(s[l]=n[l]);s.originalType=e,s[c]="string"==typeof e?e:a,i[1]=s;for(var p=2;p<r;p++)i[p]=t[p];return o.createElement.apply(null,i)}return o.createElement.apply(null,t)}g.displayName="MDXCreateElement"}}]);