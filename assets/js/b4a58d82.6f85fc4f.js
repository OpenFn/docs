"use strict";(self.webpackChunk_openfn_docs=self.webpackChunk_openfn_docs||[]).push([[98646],{85162:(e,t,n)=>{n.d(t,{Z:()=>l});var a=n(67294),o=n(86010);const i="tabItem_Ymn6";function l(e){let{children:t,hidden:n,className:l}=e;return a.createElement("div",{role:"tabpanel",className:(0,o.Z)(i,l),hidden:n},t)}},65488:(e,t,n)=>{n.d(t,{Z:()=>m});var a=n(87462),o=n(67294),i=n(86010),l=n(72389),s=n(67392),r=n(7094),p=n(12466);const d="tabList__CuJ",u="tabItem_LNqP";function c(e){const{lazy:t,block:n,defaultValue:l,values:c,groupId:m,className:h}=e,k=o.Children.map(e.children,(e=>{if((0,o.isValidElement)(e)&&"value"in e.props)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})),g=c??k.map((e=>{let{props:{value:t,label:n,attributes:a}}=e;return{value:t,label:n,attributes:a}})),f=(0,s.l)(g,((e,t)=>e.value===t.value));if(f.length>0)throw new Error(`Docusaurus error: Duplicate values "${f.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`);const v=null===l?l:l??k.find((e=>e.props.default))?.props.value??k[0].props.value;if(null!==v&&!g.some((e=>e.value===v)))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${v}" but none of its children has the corresponding value. Available values are: ${g.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);const{tabGroupChoices:b,setTabGroupChoices:N}=(0,r.U)(),[y,w]=(0,o.useState)(v),C=[],{blockElementScrollPositionUntilNextRender:j}=(0,p.o5)();if(null!=m){const e=b[m];null!=e&&e!==y&&g.some((t=>t.value===e))&&w(e)}const T=e=>{const t=e.currentTarget,n=C.indexOf(t),a=g[n].value;a!==y&&(j(t),w(a),null!=m&&N(m,String(a)))},x=e=>{let t=null;switch(e.key){case"Enter":T(e);break;case"ArrowRight":{const n=C.indexOf(e.currentTarget)+1;t=C[n]??C[0];break}case"ArrowLeft":{const n=C.indexOf(e.currentTarget)-1;t=C[n]??C[C.length-1];break}}t?.focus()};return o.createElement("div",{className:(0,i.Z)("tabs-container",d)},o.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,i.Z)("tabs",{"tabs--block":n},h)},g.map((e=>{let{value:t,label:n,attributes:l}=e;return o.createElement("li",(0,a.Z)({role:"tab",tabIndex:y===t?0:-1,"aria-selected":y===t,key:t,ref:e=>C.push(e),onKeyDown:x,onClick:T},l,{className:(0,i.Z)("tabs__item",u,l?.className,{"tabs__item--active":y===t})}),n??t)}))),t?(0,o.cloneElement)(k.filter((e=>e.props.value===y))[0],{className:"margin-top--md"}):o.createElement("div",{className:"margin-top--md"},k.map(((e,t)=>(0,o.cloneElement)(e,{key:t,hidden:e.props.value!==y})))))}function m(e){const t=(0,l.Z)();return o.createElement(c,(0,a.Z)({key:String(t)},e))}},11663:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>d,default:()=>k,frontMatter:()=>p,metadata:()=>u,toc:()=>m});var a=n(87462),o=(n(67294),n(3905)),i=n(90814),l=n(22004),s=n(65488),r=n(85162);const p={title:"Devtools"},d=void 0,u={unversionedId:"devtools/home",id:"devtools/home",title:"Devtools",description:"OpenFn/Devtools is a set of tools for writing &amp; testing job expressions,",source:"@site/docs/devtools/home.md",sourceDirName:"devtools",slug:"/devtools/home",permalink:"/documentation/devtools/home",draft:!1,editUrl:"https://github.com/openfn/docs/edit/main/docs/devtools/home.md",tags:[],version:"current",frontMatter:{title:"Devtools"},sidebar:"docs",previous:{title:"Generic Sources",permalink:"/documentation/source-apps"},next:{title:"CLI (v2, beta)",permalink:"/documentation/cli"}},c={},m=[{value:"Up and running",id:"up-and-running",level:2},{value:"Usage",id:"usage",level:2},{value:"Run a job using bash",id:"run-a-job-using-bash",level:3},{value:"More on Devtools",id:"more-on-devtools",level:3},{value:"Install a specific adaptor version",id:"install-a-specific-adaptor-version",level:3},{value:"The <code>--test</code> option",id:"the---test-option",level:3},{value:"<code>.FakeAdaptor</code>",id:"fakeadaptor",level:4},{value:"Offline testing for other adaptors",id:"offline-testing-for-other-adaptors",level:4},{value:"Hands-on with devtools and the command line",id:"hands-on-with-devtools-and-the-command-line",level:2},{value:"Configure an OpenFn project",id:"configure-an-openfn-project",level:2},{value:"Pre-Requisites",id:"pre-requisites",level:2},{value:"Scripts",id:"scripts",level:2},{value:"bootstrap",id:"bootstrap",level:3},{value:"generate-project.js",id:"generate-projectjs",level:3},{value:"generate-doclets",id:"generate-doclets",level:3},{value:"analyse-doclets",id:"analyse-doclets",level:3},{value:"Building adaptors for platform",id:"building-adaptors-for-platform",level:2},{value:"Troubleshooting",id:"troubleshooting",level:3},{value:"Git config issues",id:"git-config-issues",level:3},{value:"SSH key issues",id:"ssh-key-issues",level:3},{value:"Github token sharing",id:"github-token-sharing",level:3},{value:"Using a new adaptor in an OpenFn/platform instance",id:"using-a-new-adaptor-in-an-openfnplatform-instance",level:2}],h={toc:m};function k(e){let{components:t,...p}=e;return(0,o.kt)("wrapper",(0,a.Z)({},h,p,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"OpenFn/Devtools is a set of tools for writing ","&"," testing job expressions,\nmanaging OpenFn projects, and developing new adaptors. It's how most people work\nwith OpenFn from their own command lines, outside of OpenFn.org, Microservice,\nor Lightning."),(0,o.kt)("admonition",{title:"Are you a developer?",type:"info"},(0,o.kt)("p",{parentName:"admonition"},"The ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/OpenFn/devtools"},"Devtools")," repo is a collection of bash\nand Node scripts, as well as a ",(0,o.kt)("em",{parentName:"p"},"suggested")," (but not necessary) directory\nstructure for working with OpenFn jobs and adaptors."),(0,o.kt)("p",{parentName:"admonition"},"To run OpenFn jobs locally, you only need ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/OpenFn/core"},"Core"),"\nand at least one adaptor, e.g.\n",(0,o.kt)("a",{parentName:"p",href:"https://github.com/OpenFn/language-http"},"language-http")," and you may prefer to\ninstall core globally via ",(0,o.kt)("inlineCode",{parentName:"p"},"npm install -g @openfn/core"))),(0,o.kt)("h2",{id:"up-and-running"},"Up and running"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Install ",(0,o.kt)("a",{parentName:"p",href:"https://git-scm.com/downloads"},"git")," and\n",(0,o.kt)("a",{parentName:"p",href:"https://nodejs.org/en/download/"},"Node.js")," (version 14 or greater)")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Clone and install devtools to setup core, language-common, and language-http\nusing either SSH or HTTPS:"))),(0,o.kt)(s.Z,{defaultValue:"ssh",values:[{label:"SSH",value:"ssh"},{label:"HTTPS",value:"https"}],mdxType:"Tabs"},(0,o.kt)(r.Z,{value:"ssh",mdxType:"TabItem"},(0,o.kt)(i.Z,{mdxType:"CodeBlock"},"git clone git@github.com:OpenFn/devtools.git","\n","cd devtools","\n","./install.sh ssh")),(0,o.kt)(r.Z,{value:"https",mdxType:"TabItem"},(0,o.kt)(i.Z,{mdxType:"CodeBlock"},"git clone https://github.com/OpenFn/devtools.git","\n","cd devtools","\n","./install.sh https"))),(0,o.kt)("p",null,(0,o.kt)("em",{parentName:"p"},'Note: If you get a "permission denied" message when running ',(0,o.kt)("inlineCode",{parentName:"em"},"./install.sh"),", try\n",(0,o.kt)("inlineCode",{parentName:"em"},"run chmod +x ./install.sh ")," then retry the install command.")),(0,o.kt)("h2",{id:"usage"},"Usage"),(0,o.kt)("p",null,"Execute takes:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("inlineCode",{parentName:"li"},"-l [language-package].Adaptor"),": The adaptor being used"),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("inlineCode",{parentName:"li"},"-e [expression.js]:")," The expression being tested"),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("inlineCode",{parentName:"li"},"-s [state.json]"),": The message ",(0,o.kt)("inlineCode",{parentName:"li"},"data: {...}")," and credential\n",(0,o.kt)("inlineCode",{parentName:"li"},"configuration: {...}")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("inlineCode",{parentName:"li"},"-o [output.json]"),": The file to which the output will be written")),(0,o.kt)("h3",{id:"run-a-job-using-bash"},"Run a job using bash"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},"~/devtools/core/bin/core execute \\\n  -l ~/devtools/adaptors/language-http \\\n  -s ./tmp/state.json \\\n  -o ./tmp/output.json \\\n  -e ./tmp/expression.js\n")),(0,o.kt)("h3",{id:"more-on-devtools"},"More on Devtools"),(0,o.kt)(l.Z,{url:"https://www.youtube.com/watch?v=fkGI5YLp18s",mdxType:"ReactPlayer"}),(0,o.kt)("h3",{id:"install-a-specific-adaptor-version"},"Install a specific adaptor version"),(0,o.kt)("p",null,"To install specific adaptors, run\n",(0,o.kt)("inlineCode",{parentName:"p"},"./install.sh ${ssh || https} language-${name}")),(0,o.kt)("p",null,"When you install a new adaptor, the latest version will be enabled by default.\nTo switch the adaptor version when running jobs locally, in the root of the\nadaptor directory, run:"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"git checkout tags/v2.4.15")," (substitute ",(0,o.kt)("inlineCode",{parentName:"p"},"2.4.15")," with the adaptor version you\nwant)"),(0,o.kt)("h3",{id:"the---test-option"},"The ",(0,o.kt)("inlineCode",{parentName:"h3"},"--test")," option"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},"~/devtools/core/bin/core execute \\\n  -l ~/devtools/adaptors/language-http \\\n  -s ./tmp/state.json \\\n  -o ./tmp/output.json \\\n  -e ./tmp/expression.js \\\n  --test\n")),(0,o.kt)("p",null,"This intercepts all HTTP requests and displays the request information for\ndebugging."),(0,o.kt)("h4",{id:"fakeadaptor"},(0,o.kt)("inlineCode",{parentName:"h4"},".FakeAdaptor")),(0,o.kt)("p",null,"Adaptors may provide dummy modules for testing. ",(0,o.kt)("inlineCode",{parentName:"p"},"language-salesforce")," has a\nbuilt-in ",(0,o.kt)("inlineCode",{parentName:"p"},".FakeAdaptor")," which allows a user to test expressions on data without\nsending them to a real Salesforce server."),(0,o.kt)("p",null,"Instead of using ",(0,o.kt)("inlineCode",{parentName:"p"},"-l ./language-salesforce.Adaptor"),", use\n",(0,o.kt)("inlineCode",{parentName:"p"},"-l./language-salesforce.FakeAdaptor")," to test expressions offline:\n",(0,o.kt)("inlineCode",{parentName:"p"},"./core/bin/core execute -l ./language-salesforce.FakeAdaptor -s ./tmp/state.json -o ./tmp/output.json -e ./tmp/expression.js")),(0,o.kt)("h4",{id:"offline-testing-for-other-adaptors"},"Offline testing for other adaptors"),(0,o.kt)("p",null,"For most standard adaptors which make use of HTTP requests, you can add ",(0,o.kt)("inlineCode",{parentName:"p"},"--test"),"\nto the execute command to intercept all HTTP requests and return a ",(0,o.kt)("inlineCode",{parentName:"p"},"200"),"."),(0,o.kt)("h2",{id:"hands-on-with-devtools-and-the-command-line"},"Hands-on with devtools and the command line"),(0,o.kt)("admonition",{type:"tip"},(0,o.kt)("p",{parentName:"admonition"},"Check out this example workflow for using devtools in your day-to-day.")),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("inlineCode",{parentName:"li"},"cd")," in the folder containing the repo you're working on."),(0,o.kt)("li",{parentName:"ol"},"You can keep your job scripts anywhere, but store ",(0,o.kt)("inlineCode",{parentName:"li"},"state.json")," and\n",(0,o.kt)("inlineCode",{parentName:"li"},"output.json")," in a ",(0,o.kt)("inlineCode",{parentName:"li"},"tmp")," folder. In our repos we always add the ",(0,o.kt)("inlineCode",{parentName:"li"},"tmp"),"\ndirectory in our ",(0,o.kt)("inlineCode",{parentName:"li"},".gitignore")," file that tells Github to ignore the specified\npaths. Make sure you have your ",(0,o.kt)("inlineCode",{parentName:"li"},".gitignore")," file and you know what's tracked\nby Github and what's not. ",(0,o.kt)("inlineCode",{parentName:"li"},"state")," and ",(0,o.kt)("inlineCode",{parentName:"li"},"config")," may contain sensitive\nconfiguration information and project data so never upload them to Github!"),(0,o.kt)("li",{parentName:"ol"},"The devtools command is a mouthful. You can search your command line history\nwith ",(0,o.kt)("inlineCode",{parentName:"li"},"Ctl-r")," and typing core to pull it up the devtools command. Notice that\nit\u2019s got line breaks and a flag for all the important bits\u2026 ",(0,o.kt)("inlineCode",{parentName:"li"},"-l")," for\nlanguage-package (adaptor), ",(0,o.kt)("inlineCode",{parentName:"li"},"-s")," for state, ",(0,o.kt)("inlineCode",{parentName:"li"},"-o")," for output, and ",(0,o.kt)("inlineCode",{parentName:"li"},"-e")," for\nexpression. You can also save your frequently used devtools commands in a\ndocument and just copy-paste."),(0,o.kt)("li",{parentName:"ol"},"It's quick the change job names or the adaptor in the command. If you put all\nyour adaptors in the same folder ",(0,o.kt)("inlineCode",{parentName:"li"},"~/devtools/adaptors/language-_________")," you\ncan quickly swap them in the command, as you can see in the video below. The\nBackspace key deletes characters behind your cursor, Delete deletes them in\nfront."),(0,o.kt)("li",{parentName:"ol"},"You can use the TAB key to auto-complete the file path as you search for a\njob."),(0,o.kt)("li",{parentName:"ol"},"Once you've changed a couple of characters for the adaptor and expression (in\nthe video ",(0,o.kt)("inlineCode",{parentName:"li"},"state")," and ",(0,o.kt)("inlineCode",{parentName:"li"},"output")," stayed the same because we're using the ",(0,o.kt)("inlineCode",{parentName:"li"},"tmp"),"\nconvention) press enter and see the results.")),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"devtools",src:n(47644).Z,width:"1678",height:"796"})),(0,o.kt)("h2",{id:"configure-an-openfn-project"},"Configure an OpenFn project"),(0,o.kt)("p",null,"You can use YAML project configuration files to define projects both on the\n",(0,o.kt)("a",{parentName:"p",href:"/documentation/deploy/platform"},"OpenFn platform")," and in\n",(0,o.kt)("a",{parentName:"p",href:"https://openfn.github.io/microservice/readme.html#content"},"OpenFn microservice"),".\nRunning ",(0,o.kt)("inlineCode",{parentName:"p"},"./scripts/generate-project.js")," helps you build a project config YAML\ninteractively, adding your triggers, credentials and jobs to the config. You can\nread more about the config file\n",(0,o.kt)("a",{parentName:"p",href:"https://openfn.github.io/microservice/readme.html#sample-configuration"},"here")),(0,o.kt)("p",null,"If you choose ",(0,o.kt)("inlineCode",{parentName:"p"},"monolith")," mode, all your job code will be included in the YAML.\nIn ",(0,o.kt)("inlineCode",{parentName:"p"},"URI")," mode, you\u2019ll get a config file with URI-s to your defined jobs."),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Generate Project",src:n(78018).Z,width:"720",height:"550"})),(0,o.kt)("h2",{id:"pre-requisites"},"Pre-Requisites"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("a",{parentName:"p",href:"https://nodejs.org/en/download/"},"Node")," is required to run jobs and use many\nof the scripts in Devtools (e.g., ",(0,o.kt)("inlineCode",{parentName:"p"},"npm run build")," is required after changes\nto adaptors).")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"A basic working knowledge of NodeJs, promises and asynchronous functions is\nessential for writing adaptors."))),(0,o.kt)("h2",{id:"scripts"},"Scripts"),(0,o.kt)("p",null,"Devtools comes with a collection of scripts to aid in setting up a development\nenvironment for adaptor work, and include commands to quickly clone a large\nnumber of adaptors, create tarballs of adaptors with only production\ndependencies included, etc."),(0,o.kt)("p",null,"For the kitchen sink, run:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},"./install ssh\n./scripts/bootstrap npm-install\n")),(0,o.kt)("p",null,"In order to run the scripts, ensure you have cd'd into the project directory and\nenter ",(0,o.kt)("inlineCode",{parentName:"p"},"./scripts/<script-name>")),(0,o.kt)("h3",{id:"bootstrap"},"bootstrap"),(0,o.kt)("p",null,"Installs all adaptors in ",(0,o.kt)("inlineCode",{parentName:"p"},"repos")," file to the ",(0,o.kt)("inlineCode",{parentName:"p"},"/adaptors")," directory and prepares\nthe working directory. This needs to be run before running any of the other\nscripts. Pass ",(0,o.kt)("inlineCode",{parentName:"p"},"npm-install")," to run npm install for each adaptor also."),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"./scripts/bootstrap npm-install")," - to clone, set up hooks and npm install in\neach ",(0,o.kt)("inlineCode",{parentName:"p"},"./scripts/bootstrap"),"- to clone and set up hooks in each"),(0,o.kt)("h3",{id:"generate-projectjs"},"generate-project.js"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"./scripts/generate-project.js")," interactively generates a YAML project\nconfiguration file that can be used both on the OpenFn platform and in OpenFn\nmicroservice to define projects."),(0,o.kt)("h3",{id:"generate-doclets"},"generate-doclets"),(0,o.kt)("p",null,"Iterates overs all language pack folder names found in the ",(0,o.kt)("inlineCode",{parentName:"p"},"repos")," list and\ncreates a doclet json file in the ",(0,o.kt)("inlineCode",{parentName:"p"},"doclets")," directory."),(0,o.kt)("h3",{id:"analyse-doclets"},"analyse-doclets"),(0,o.kt)("p",null,"Iterates overs all doclets found in ",(0,o.kt)("inlineCode",{parentName:"p"},"doclets")," and gives a tree view of the\ndoclet structure using ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/OpenFn/jsdoc-query"},"jsdoc-query"),"."),(0,o.kt)("h2",{id:"building-adaptors-for-platform"},"Building adaptors for platform"),(0,o.kt)("p",null,"All adaptor releases are built inside a ",(0,o.kt)("inlineCode",{parentName:"p"},"docker container"),". The importance of\nrunning the build and release process through a container is to standardize the\nbuild environment across the team. While adaptors can be built and run on lots\nof different operating systems and architectures, when we run the platform on\nKubernetes it expects linux boxes running x86... so that's where we build these\nofficial releases."),(0,o.kt)("p",null,"Here's how to build and release adaptors:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Reopen your package in ",(0,o.kt)("strong",{parentName:"li"},"dev-container")," by typing ",(0,o.kt)("inlineCode",{parentName:"li"},"ctrl+shift+p")," (or\n",(0,o.kt)("inlineCode",{parentName:"li"},"cmd+shift+p")," on mac) and choosing ",(0,o.kt)("strong",{parentName:"li"},"Remote-Container: Rebuild and Reopen in\nContainer"),"."),(0,o.kt)("li",{parentName:"ol"},"After the build is finished, open a terminal in vscode and run\n",(0,o.kt)("inlineCode",{parentName:"li"},"openfn-devtools release .")," to build, tag, and push to\n",(0,o.kt)("a",{parentName:"li",href:"https://www.npmjs.com/"},"npm"),"."),(0,o.kt)("li",{parentName:"ol"},"Run ",(0,o.kt)("inlineCode",{parentName:"li"},"openfn-devtools package-release .")," to package everything with production\ndependencies and push to ",(0,o.kt)("a",{parentName:"li",href:"https://github.com/openfn"},"Github"),".")),(0,o.kt)("p",null,"Depending on how you've configured your local environment and your VSCode\ninstallation, you might encounter access issues preventing connections to NPM\nand GitHub."),(0,o.kt)("h3",{id:"troubleshooting"},"Troubleshooting"),(0,o.kt)("p",null,"There are a number of issues that you may encounter related to sharing settings\nthat are responsible for passing ssh keys and local configurations from your\nhost machine into the VSCode container."),(0,o.kt)("h3",{id:"git-config-issues"},"Git config issues"),(0,o.kt)("p",null,"An issue can pop up about git config not set, To solve this, you should probably\nset your email and name globally using the commands below:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},'git config --global user.email "youremail@something.com"\ngit config --global user.name "Your Name"\n')),(0,o.kt)("h3",{id:"ssh-key-issues"},"SSH key issues"),(0,o.kt)("p",null,"You may find that you are unable to access your ",(0,o.kt)("inlineCode",{parentName:"p"},"ssh")," keys from inside the\ncontainer."),(0,o.kt)("admonition",{title:"Error",type:"warning"},(0,o.kt)("p",{parentName:"admonition"},"permission denied (publickey)")),(0,o.kt)("p",null,"To solve this, first make sure the ",(0,o.kt)("inlineCode",{parentName:"p"},"ssh agent")," is\n",(0,o.kt)("a",{parentName:"p",href:"https://code.visualstudio.com/docs/remote/containers#_sharing-git-credentials-with-your-container"},"up and running"),".\nIn MacOS, it is running by default. On Linux you can start the agent using the\ncommand"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},"eval $(ssh-agent -s)\n")),(0,o.kt)("p",null,"Then you can add these line your ",(0,o.kt)("inlineCode",{parentName:"p"},"~/.bash_profile")," or ",(0,o.kt)("inlineCode",{parentName:"p"},"~/.zprofile")," (for Zsh) to\nmake it run by default."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},'if [ -z "$SSH_AUTH_SOCK" ]; then\n   RUNNING_AGENT="`ps -ax | grep \'ssh-agent -s\' | grep -v grep | wc -l | tr -d \'[:space:]\'`"\n   if [ "$RUNNING_AGENT" = "0" ]; then\n      # Launch a new instance of the agent\n      ssh-agent -s &> $HOME/.ssh/ssh-agent\n   fi\n   eval `cat $HOME/.ssh/ssh-agent`\nfi\n')),(0,o.kt)("p",null,"Next, run the command below to add your identity to the ssh agent:"),(0,o.kt)(s.Z,{defaultValue:"linux",values:[{label:"Linux",value:"linux"},{label:"MacOS",value:"macos"}],mdxType:"Tabs"},(0,o.kt)(r.Z,{value:"linux",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"  ssh-add <path-to-your-ssh-file>\n"))),(0,o.kt)(r.Z,{value:"macos",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"  ssh-add -A\n")))),(0,o.kt)("p",null,"Finally, configure VSCode to share your local ssh keys with the dev container.\nIn VSCode, go to ",(0,o.kt)("inlineCode",{parentName:"p"},"Settings"),", and in the search bar, type\n",(0,o.kt)("inlineCode",{parentName:"p"},"terminal.integrated.inherit"),". You should see the option in the image below and\ncheck it if it's unchecked."),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"vscode settings",src:n(78697).Z,width:"2688",height:"418"})),(0,o.kt)("h3",{id:"github-token-sharing"},"Github token sharing"),(0,o.kt)("p",null,"Our release process relies on a ",(0,o.kt)("inlineCode",{parentName:"p"},"GH_TOKEN")," variable. Set up an\n",(0,o.kt)("a",{parentName:"p",href:"https://docs.github.com/en/authentication/keeping-your-account-and-data-secure/creating-a-personal-access-token"},"access token"),"\nin Github."),(0,o.kt)("p",null,"In your ",(0,o.kt)("inlineCode",{parentName:"p"},"~/.bash_profile")," or ",(0,o.kt)("inlineCode",{parentName:"p"},"~/.zshrc")," file, export the newly created token by\nadding this line:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},"export GH_TOKEN=<TOKEN>\n")),(0,o.kt)("h2",{id:"using-a-new-adaptor-in-an-openfnplatform-instance"},"Using a new adaptor in an OpenFn/platform instance"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Add your release to the ",(0,o.kt)("inlineCode",{parentName:"li"},"scripts/install-lp")," script."),(0,o.kt)("li",{parentName:"ol"},"Add the version number to ",(0,o.kt)("inlineCode",{parentName:"li"},"priv/adaptors.json"),"."),(0,o.kt)("li",{parentName:"ol"},"Add the ",(0,o.kt)("inlineCode",{parentName:"li"},"bodySchema")," to ",(0,o.kt)("inlineCode",{parentName:"li"},"CredentialView.js"),".")))}k.isMDXComponent=!0},47644:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/devtools-d9d74f314be912295da4d6ff02b9112a.gif"},78018:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/generate-project-40444c4a75e8e0b63a1cbe1e02d7f49d.gif"},78697:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/vscode-settings-41387d833ade3295b22b17fbd500c692.png"}}]);