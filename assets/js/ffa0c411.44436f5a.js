"use strict";(self.webpackChunk_openfn_docs=self.webpackChunk_openfn_docs||[]).push([[7031],{15680:(e,n,t)=>{t.d(n,{xA:()=>d,yg:()=>f});var o=t(96540);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function r(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);n&&(o=o.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,o)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?r(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,o,a=function(e,n){if(null==e)return{};var t,o,a={},r=Object.keys(e);for(o=0;o<r.length;o++)t=r[o],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)t=r[o],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var s=o.createContext({}),p=function(e){var n=o.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},d=function(e){var n=p(e.components);return o.createElement(s.Provider,{value:n},e.children)},c="mdxType",u={inlineCode:"code",wrapper:function(e){var n=e.children;return o.createElement(o.Fragment,{},n)}},g=o.forwardRef((function(e,n){var t=e.components,a=e.mdxType,r=e.originalType,s=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),c=p(t),g=a,f=c["".concat(s,".").concat(g)]||c[g]||u[g]||r;return t?o.createElement(f,i(i({ref:n},d),{},{components:t})):o.createElement(f,i({ref:n},d))}));function f(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var r=t.length,i=new Array(r);i[0]=g;var l={};for(var s in n)hasOwnProperty.call(n,s)&&(l[s]=n[s]);l.originalType=e,l[c]="string"==typeof e?e:a,i[1]=l;for(var p=2;p<r;p++)i[p]=t[p];return o.createElement.apply(null,i)}return o.createElement.apply(null,t)}g.displayName="MDXCreateElement"},48807:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>s,contentTitle:()=>i,default:()=>u,frontMatter:()=>r,metadata:()=>l,toc:()=>p});var o=t(58168),a=(t(96540),t(15680));const r={title:"Portability"},i=void 0,l={unversionedId:"deploy/portability",id:"deploy/portability",title:"Portability",description:"Intent",source:"@site/docs/deploy/portability.md",sourceDirName:"deploy",slug:"/deploy/portability",permalink:"/documentation/deploy/portability",draft:!1,editUrl:"https://github.com/openfn/docs/edit/main/docs/deploy/portability.md",tags:[],version:"current",frontMatter:{title:"Portability"},sidebar:"docs",previous:{title:"Requirements",permalink:"/documentation/deploy/requirements"},next:{title:"Versions of the Portability Proposal",permalink:"/documentation/deploy/portability-versions"}},s={},p=[{value:"Intent",id:"intent",level:2},{value:"&quot;Projects as code&quot;",id:"projects-as-code",level:2},{value:"The project &quot;spec&quot;",id:"the-project-spec",level:3},{value:"The project &quot;state&quot;",id:"the-project-state",level:3},{value:"Using the CLI to deploy or describe projects projects as code",id:"using-the-cli-to-deploy-or-describe-projects-projects-as-code",level:3},{value:"<code>openfn pull</code> to generate a project spec and state",id:"openfn-pull-to-generate-a-project-spec-and-state",level:3},{value:"<code>openfn deploy</code> to create a project on a Lightning instance",id:"openfn-deploy-to-create-a-project-on-a-lightning-instance",level:3},{value:"<code>openfn deploy</code> to update an existing project",id:"openfn-deploy-to-update-an-existing-project",level:3},{value:"Getting Help with the cli",id:"getting-help-with-the-cli",level:3},{value:"Other Versions",id:"other-versions",level:2}],d={toc:p},c="wrapper";function u(e){let{components:n,...t}=e;return(0,a.yg)(c,(0,o.A)({},d,t,{components:n,mdxType:"MDXLayout"}),(0,a.yg)("h2",{id:"intent"},"Intent"),(0,a.yg)("p",null,'The portability specification allows for the representations of entire workflow\nprojects "as code", lets user move between various deployment pathways (cloud,\nlocal, DIY, etc.) and proposes a globally-applicable way of ',(0,a.yg)("strong",{parentName:"p"},(0,a.yg)("em",{parentName:"strong"},"specifying\nworkflow automation"))," and ",(0,a.yg)("strong",{parentName:"p"},(0,a.yg)("em",{parentName:"strong"},"systems integration"))," that might be applied\nacross workflow-engines/integration platforms across the sector. Nothing about\nthe spec ",(0,a.yg)("em",{parentName:"p"},"must")," be specific to OpenFn or any one of our individual products. We\nenvision a future in which software built with Lightning, the OpenFn Integration\nToolkit, and entirely new and different integration/workflow tools can adopt\nthis specification."),(0,a.yg)("p",null,"If you're interested in contributing to the specification, reach out to OpenFn\nvia the ",(0,a.yg)("a",{parentName:"p",href:"https://community.openfn.org"},"community forum"),", write to us, or suggest\nchanges by submitting a pull request here."),(0,a.yg)("h2",{id:"projects-as-code"},'"Projects as code"'),(0,a.yg)("p",null,"The portability specification v4 defines how entire projects (groups of\nworkflows with their associated triggers, edges, credentials and jobs) can be\nrepresented as code. It improves the OpenFn developer experience, allowing\nworkflows to be built and tested locally; (b) enables project version control\nand an audit trail of project changes; and (c) allows users to port existing\nworkflows from OpenFn v1 to v2, as well as between instances or deployments of\nLightning."),(0,a.yg)("h3",{id:"the-project-spec"},'The project "spec"'),(0,a.yg)("p",null,'The project specification (or "spec") is often saved as a ',(0,a.yg)("inlineCode",{parentName:"p"},"project.yaml")," file."),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-yaml"},"name: openhie-project\ndescription: Some sample\n# credentials:\n# globals:\nworkflows:\n  OpenHIE-Workflow:\n    name: OpenHIE Workflow\n    jobs:\n      FHIR-standard-Data-with-change:\n        name: FHIR-standard-Data-with-change\n        adaptor: '@openfn/language-http@latest'\n        enabled: true\n        # credential:\n        # globals:\n        body: |\n          fn(state => {\n            console.log(\"hello github integration\")\n            return state\n        });\n\n      Send-to-OpenHIM-to-route-to-SHR:\n        name: Send-to-OpenHIM-to-route-to-SHR\n        adaptor: '@openfn/language-http@latest'\n        enabled: true\n        # credential:\n        # globals:\n        body: |\n          fn(state => state);\n\n      Notify-CHW-upload-successful:\n        name: Notify-CHW-upload-successful\n        adaptor: '@openfn/language-http@latest'\n        enabled: true\n        # credential:\n        # globals:\n        body: |\n          fn(state => state);\n\n      Notify-CHW-upload-failed:\n        name: Notify-CHW-upload-failed\n        adaptor: '@openfn/language-http@latest'\n        enabled: true\n        # credential:\n        # globals:\n        body: |\n          fn(state => state);\n\n    triggers:\n      webhook:\n        type: webhook\n    edges:\n      webhook->FHIR-standard-Data-with-change:\n        source_trigger: webhook\n        target_job: FHIR-standard-Data-with-change\n        condition: always\n      FHIR-standard-Data-with-change->Send-to-OpenHIM-to-route-to-SHR:\n        source_job: FHIR-standard-Data-with-change\n        target_job: Send-to-OpenHIM-to-route-to-SHR\n        condition: on_job_success\n      Send-to-OpenHIM-to-route-to-SHR->Notify-CHW-upload-successful:\n        source_job: Send-to-OpenHIM-to-route-to-SHR\n        target_job: Notify-CHW-upload-successful\n        condition: on_job_success\n      Send-to-OpenHIM-to-route-to-SHR->Notify-CHW-upload-failed:\n        source_job: Send-to-OpenHIM-to-route-to-SHR\n        target_job: Notify-CHW-upload-failed\n        condition: on_job_failure\n")),(0,a.yg)("h3",{id:"the-project-state"},'The project "state"'),(0,a.yg)("p",null,"The project state is a representation of a particular project as ",(0,a.yg)("em",{parentName:"p"},"on a specific\nLightning instance"),". It is often saved as ",(0,a.yg)("inlineCode",{parentName:"p"},"projectState.json")," and contains UUIDs\nfor resources on a particular Lightning deployment."),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-json"},'{\n  "workflows": {\n    "OpenHIE-Workflow": {\n      "id": "27ae2937-0959-48b8-a597-b1646aae8c14",\n      "name": "OpenHIE Workflow",\n      "jobs": {\n        "Transform-data-to-FHIR-standard": {\n          "id": "e44f65bb-5038-4e17-8d93-b63cbe95254a",\n          "delete": true\n        },\n        "Send-to-OpenHIM-to-route-to-SHR": {\n          "id": "977b87ff-f347-42b5-832f-6ae2ca726f32",\n          "name": "Send-to-OpenHIM-to-route-to-SHR",\n          "adaptor": "@openfn/language-http@latest",\n          "body": "fn(state => state);\\n",\n          "enabled": true\n        },\n        "Notify-CHW-upload-successful": {\n          "id": "86b743a3-fd00-4629-b9fb-d5f38fb56d0b",\n          "name": "Notify-CHW-upload-successful",\n          "adaptor": "@openfn/language-http@latest",\n          "body": "fn(state => state);\\n",\n          "enabled": true\n        },\n        "Notify-CHW-upload-failed": {\n          "id": "be85df30-0abd-4f8e-be17-501f67e18b8d",\n          "name": "Notify-CHW-upload-failed",\n          "adaptor": "@openfn/language-http@latest",\n          "body": "fn(state => state);\\n",\n          "enabled": true\n        },\n        "FHIR-standard-Data": {\n          "id": "55016dda-42e3-4ee1-8a9c-24e3f23d42f1",\n          "delete": true\n        },\n        "FHIR-standard-Data-with-change": {\n          "id": "28dd0846-a6ae-40c0-8ab4-3e0a6b487afe",\n          "name": "FHIR-standard-Data-with-change",\n          "adaptor": "@openfn/language-http@latest",\n          "body": "fn(state => state);\\n",\n          "enabled": true\n        }\n      },\n      "triggers": {\n        "webhook": {\n          "id": "530cde0b-0de4-4f68-8834-0a4356a2fe53",\n          "type": "webhook"\n        }\n      },\n      "edges": {\n        "webhook->Transform-data-to-FHIR-standard": {\n          "id": "b2c7407b-0ae9-4ca5-9d6b-ee624976fa54",\n          "delete": true\n        },\n        "Transform-data-to-FHIR-standard->Send-to-OpenHIM-to-route-to-SHR": {\n          "id": "d22ed6f4-26a2-4c85-b261-cc110a6851e6",\n          "delete": true\n        },\n        "Send-to-OpenHIM-to-route-to-SHR->Notify-CHW-upload-successful": {\n          "id": "26c12f7f-7806-4008-87cd-6747998f95f4",\n          "condition": "on_job_success",\n          "source_job_id": "977b87ff-f347-42b5-832f-6ae2ca726f32",\n          "source_trigger_id": null,\n          "target_job_id": "86b743a3-fd00-4629-b9fb-d5f38fb56d0b"\n        },\n        "Send-to-OpenHIM-to-route-to-SHR->Notify-CHW-upload-failed": {\n          "id": "0630ac96-4f67-4de7-8c3d-0bf3f89f80d9",\n          "condition": "on_job_failure",\n          "source_job_id": "977b87ff-f347-42b5-832f-6ae2ca726f32",\n          "source_trigger_id": null,\n          "target_job_id": "be85df30-0abd-4f8e-be17-501f67e18b8d"\n        },\n        "webhook->FHIR-standard-Data": {\n          "id": "5ce3a8ed-b9eb-464a-a2cd-ba55adc393c2",\n          "delete": true\n        },\n        "FHIR-standard-Data->Send-to-OpenHIM-to-route-to-SHR": {\n          "id": "5f459cd9-2882-4a61-a2cc-ec45e58d4837",\n          "delete": true\n        },\n        "webhook->FHIR-standard-Data-with-change": {\n          "id": "75e7f7d8-274b-410d-9600-730bbd535229",\n          "condition": "always",\n          "source_job_id": null,\n          "source_trigger_id": "530cde0b-0de4-4f68-8834-0a4356a2fe53",\n          "target_job_id": "28dd0846-a6ae-40c0-8ab4-3e0a6b487afe"\n        },\n        "FHIR-standard-Data-with-change->Send-to-OpenHIM-to-route-to-SHR": {\n          "id": "1e5ba385-2c49-4241-8cd2-042c99a810ec",\n          "condition": "on_job_success",\n          "source_job_id": "28dd0846-a6ae-40c0-8ab4-3e0a6b487afe",\n          "source_trigger_id": null,\n          "target_job_id": "977b87ff-f347-42b5-832f-6ae2ca726f32"\n        }\n      }\n    }\n  },\n  "id": "8deff39d-8189-4bd7-9dc7-f9f08e7f2c60",\n  "name": "openhie-project"\n}\n')),(0,a.yg)("h3",{id:"using-the-cli-to-deploy-or-describe-projects-projects-as-code"},"Using the CLI to deploy or describe projects projects as code"),(0,a.yg)("p",null,"The project spec and project state can be used for a variety of reasons, e.g.\none could generate the state and spec as backups of the project or one could\ngenerate these files and use them for auditing and record keeping, etc. The\nOpenFn ",(0,a.yg)("a",{parentName:"p",href:"https://github.com/OpenFn/kit/tree/main/packages/cli"},"CLI")," comes with\ncommands that can be used to pull project configurations down from a running\nLightning server, and to deploy or push updates to existing projects on a\nLightning server. To learn more about automated version control via pull and deploy, head over to our ",(0,a.yg)("a",{parentName:"p",href:"/documentation/link-to-GitHub"},"Version Control")," docs."),(0,a.yg)("admonition",{title:"Don't have the CLI yet?",type:"info"},(0,a.yg)("p",{parentName:"admonition"},"Install it by running ",(0,a.yg)("inlineCode",{parentName:"p"},"npm install -g @openfn/cli"))),(0,a.yg)("p",null,"Before using the CLI, configure it either by passing in environment variables:"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre"},"OPENFN_ENDPOINT=https://app.openfn.org\nOPENFN_API_KEY=yourSecretApiToken\n")),(0,a.yg)("p",null,"Or through a ",(0,a.yg)("inlineCode",{parentName:"p"},"config.json")," file:"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-json"},'{\n  // Required, can be overridden or set with `OPENFN_API_KEY` env var\n  "apiKey": "***",\n\n  // Optional: can be set using the -p, defaults to project.yaml\n  "specPath": "project.yaml",\n\n  // Optional: can be set using -s, defaults to .state.json\n  "statePath": ".state.json",\n\n  // Optional: defaults to OpenFn.org\'s API, can be overridden or set with\n  // `OPENFN_ENDPOINT` env var\n  "endpoint": "https://app.openfn.org"\n}\n')),(0,a.yg)("p",null,"More details on the CLI can be found\n",(0,a.yg)("a",{parentName:"p",href:"https://github.com/OpenFn/kit/tree/main/packages/cli#basic-usage"},"here"),"."),(0,a.yg)("h3",{id:"openfn-pull-to-generate-a-project-spec-and-state"},(0,a.yg)("inlineCode",{parentName:"h3"},"openfn pull")," to generate a project spec and state"),(0,a.yg)("p",null,"To generate the spec and state files for an existing project, use:"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-sh"},"openfn pull {YOUR-PROJECT-UUID} -c ./config.json\n")),(0,a.yg)("p",null,"This command will save (or overwrite) a project spec and state file based on the\npath you've set in your configuration."),(0,a.yg)("h3",{id:"openfn-deploy-to-create-a-project-on-a-lightning-instance"},(0,a.yg)("inlineCode",{parentName:"h3"},"openfn deploy")," to create a project on a Lightning instance"),(0,a.yg)("p",null,"To deploy a new project to a Lightning instance from a project spec (without a\nproject state) file use:"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-sh"},"openfn deploy -c config.json\n")),(0,a.yg)("h3",{id:"openfn-deploy-to-update-an-existing-project"},(0,a.yg)("inlineCode",{parentName:"h3"},"openfn deploy")," to update an existing project"),(0,a.yg)("p",null,"With a valid project state defined in your ",(0,a.yg)("inlineCode",{parentName:"p"},"config.json"),", the same\n",(0,a.yg)("inlineCode",{parentName:"p"},"openfn deploy")," command will beam up your changes as described by a difference\nbetween your project spec and what's found on the server."),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-sh"},'openfn deploy -c config.json\nChecking https://demo.openfn.org/api/provision/4adf2644-ed4e-4f97-a24c-ab35b3cb1efa for existing project.\nProject found.\n[CLI] \u2666 Changes:\n {\n   workflows: [\n     {\n       jobs: [\n         {\n-          body: "fn(state => {\\n  console.log(\\"ok\\")\\n  return state\\n});"\n+          body: "fn(state => {\\n  console.log(\\"some changes here!\\")\\n  return state\\n});\\n"\n         }\n         ...\n         ...\n         ...\n       ]\n     }\n   ]\n }\n\n? Deploy? yes\n[CLI] \u2666 Deployed.\n')),(0,a.yg)("h3",{id:"getting-help-with-the-cli"},"Getting Help with the cli"),(0,a.yg)("p",null,"The cli package comes with an inbuilt ",(0,a.yg)("inlineCode",{parentName:"p"},"help"),". Adding ",(0,a.yg)("inlineCode",{parentName:"p"},"--help")," to a command such\nas ",(0,a.yg)("inlineCode",{parentName:"p"},"openfn deploy --help")," will result in a help message describing the command\nand the options available when using this command. See an example below"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-sh"},"openfn deploy --help\nopenfn deploy\n\nDeploy a project's config to a remote Lightning instance\n\nOptions:\n      --version                Show version number                                                                                                                     [boolean]\n      --help                   Show help                                                                                                                               [boolean]\n  -c, --config, --config-path  The location of your config file                                                                                      [default: \"./.config.json\"]\n      --no-confirm             Skip confirmation prompts (e.g. 'Are you sure?')                                                                                        [boolean]\n      --describe               Downloads the project yaml from the specified instance                                                                                  [boolean]\n  -l, --log                    Set the log level                                                                                                                        [string]\n      --log-json               Output all logs as JSON objects                                                                                                         [boolean]\n  -p, --project-path           The location of your project.yaml file                                                                                                   [string]\n  -s, --state-path             Path to the state file\n")),(0,a.yg)("h2",{id:"other-versions"},"Other Versions"),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("a",{parentName:"li",href:"portability-versions#proposal-v4"},"Portability Proposal v4")),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("a",{parentName:"li",href:"portability-versions#proposal-v3"},"Portability Proposal v3")),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("a",{parentName:"li",href:"portability-versions#proposal-v2"},"Portability Proposal v2")," (",(0,a.yg)("inlineCode",{parentName:"li"},"@latest")," for\nplatform-app/microservice compatibility.)"),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("a",{parentName:"li",href:"portability-versions#proposal-v1"},"Portability Proposal v1"))))}u.isMDXComponent=!0}}]);