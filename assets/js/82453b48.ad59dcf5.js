"use strict";(self.webpackChunk_openfn_docs=self.webpackChunk_openfn_docs||[]).push([[56683],{96624:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>r,default:()=>d,frontMatter:()=>s,metadata:()=>i,toc:()=>p});var a=t(58168),o=(t(96540),t(15680));const s={title:"CLI walkthrough",sidebar_label:"CLI walkthrough",slug:"/cli-walkthrough"},r=void 0,i={unversionedId:"build-for-developers/cli-walkthrough",id:"build-for-developers/cli-walkthrough",title:"CLI walkthrough",description:"1. Getting started with the CLI",source:"@site/docs/build-for-developers/cli-walkthrough.md",sourceDirName:"build-for-developers",slug:"/cli-walkthrough",permalink:"/documentation/cli-walkthrough",draft:!1,editUrl:"https://github.com/openfn/docs/edit/main/docs/build-for-developers/cli-walkthrough.md",tags:[],version:"current",frontMatter:{title:"CLI walkthrough",sidebar_label:"CLI walkthrough",slug:"/cli-walkthrough"},sidebar:"docs",previous:{title:"Basic usage",permalink:"/documentation/cli-usage"},next:{title:"CLI challenges",permalink:"/documentation/cli-challenges"}},l={},p=[{value:"1. Getting started with the CLI",id:"1-getting-started-with-the-cli",level:3},{value:"2. Using adaptor helper functions",id:"2-using-adaptor-helper-functions",level:3},{value:"Basic usage:",id:"basic-usage",level:4},{value:"Tasks:",id:"tasks",level:4},{value:"3. Understanding <code>state</code>",id:"3-understanding-state",level:3},{value:"<code>state.configuration</code>",id:"stateconfiguration",level:4},{value:"<code>state.data</code>",id:"statedata",level:4},{value:"How can we use state?",id:"how-can-we-use-state",level:4},{value:"Tasks:",id:"tasks-1",level:4},{value:"4. Clean &amp; Transform Data",id:"4-clean--transform-data",level:3},{value:"JavaScript Demo: <code>Array.reduce()</code>",id:"javascript-demo-arrayreduce",level:5},{value:"5. Debugging errors",id:"5-debugging-errors",level:3},{value:"Create <strong>debug.js</strong> and paste the code below",id:"create-debugjs-and-paste-the-code-below",level:5},{value:"Run <strong>openfn debug.js -a http</strong>",id:"run-openfn-debugjs--a-http",level:5},{value:"6. Each and array iteration",id:"6-each-and-array-iteration",level:3},{value:"Modify getPosts.js to group posts by user-ID",id:"modify-getpostsjs-to-group-posts-by-user-id",level:5},{value:"Run <strong>openfn getPosts.js -a http -s tmp/state.json -o tmp/output.json</strong>",id:"run-openfn-getpostsjs--a-http--s-tmpstatejson--o-tmpoutputjson",level:5},{value:"7. Running Workflows",id:"7-running-workflows",level:3},{value:"Workflow",id:"workflow",level:5},{value:"Example of a workflow",id:"example-of-a-workflow",level:6}],u={toc:p},g="wrapper";function d(e){let{components:n,...t}=e;return(0,o.yg)(g,(0,a.A)({},u,t,{components:n,mdxType:"MDXLayout"}),(0,o.yg)("h3",{id:"1-getting-started-with-the-cli"},"1. Getting started with the CLI"),(0,o.yg)("admonition",{title:"To get started with @openfn/cli",type:"info"},(0,o.yg)("ol",{parentName:"admonition"},(0,o.yg)("li",{parentName:"ol"},(0,o.yg)("p",{parentName:"li"},"Create a new folder for the repository you'll be working on by running the\nfollowing command: ",(0,o.yg)("inlineCode",{parentName:"p"},"mkdir devchallenge && cd devchallenge"))),(0,o.yg)("li",{parentName:"ol"},(0,o.yg)("p",{parentName:"li"},"While you can keep your job scripts anywhere, it's a good practice to store\n",(0,o.yg)("inlineCode",{parentName:"p"},"state.json")," and ",(0,o.yg)("inlineCode",{parentName:"p"},"output.json")," in a ",(0,o.yg)("inlineCode",{parentName:"p"},"tmp")," folder. To do this, create a new\ndirectory called ",(0,o.yg)("inlineCode",{parentName:"p"},"tmp")," within your ",(0,o.yg)("inlineCode",{parentName:"p"},"devchallenge")," folder: ",(0,o.yg)("inlineCode",{parentName:"p"},"mkdir tmp"))),(0,o.yg)("li",{parentName:"ol"},(0,o.yg)("p",{parentName:"li"},"Since ",(0,o.yg)("inlineCode",{parentName:"p"},"state.json")," and ",(0,o.yg)("inlineCode",{parentName:"p"},"output.json")," may contain sensitive configuration\ninformation and project data, it's important to never upload them to GitHub.\nTo ensure that GitHub ignores these files, add the ",(0,o.yg)("inlineCode",{parentName:"p"},"tmp")," directory to your\n",(0,o.yg)("inlineCode",{parentName:"p"},".gitignore")," file: ",(0,o.yg)("inlineCode",{parentName:"p"},'echo "tmp" >> .gitignore'))),(0,o.yg)("li",{parentName:"ol"},(0,o.yg)("p",{parentName:"li"},"(Optional) Use the ",(0,o.yg)("inlineCode",{parentName:"p"},"tree")," command to check that your directory structure\nlooks correct. Running ",(0,o.yg)("inlineCode",{parentName:"p"},"tree -a")," in your ",(0,o.yg)("inlineCode",{parentName:"p"},"devchallenge")," folder should display\na structure like this:"),(0,o.yg)("pre",{parentName:"li"},(0,o.yg)("code",{parentName:"pre",className:"language-bash"}," devchallenge\n \u251c\u2500\u2500 .gitignore\n \u2514\u2500\u2500 tmp\n     \u251c\u2500\u2500 state.json\n     \u2514\u2500\u2500 output.json\n"))))),(0,o.yg)("ol",null,(0,o.yg)("li",{parentName:"ol"},(0,o.yg)("p",{parentName:"li"},"Create a job file called ",(0,o.yg)("inlineCode",{parentName:"p"},"hello.js")," and write the following code."),(0,o.yg)("pre",{parentName:"li"},(0,o.yg)("code",{parentName:"pre",className:"language-js"},"console.log('Hello World!');\n")),(0,o.yg)("details",null,(0,o.yg)("summary",null,"What is a job?"),"A job is Javascript code which follows a particular set of conventions. Typically a job has one or more ",(0,o.yg)("i",null,"operations")," which perform a particular task (like pulling information from a database, creating a record, etc.) and return state for the next operation to use."),(0,o.yg)("details",null,(0,o.yg)("summary",null,"What is console.log?"),(0,o.yg)("code",null,"console.log")," is a core JavaScript language function which lets us send messages to the terminal window.")),(0,o.yg)("li",{parentName:"ol"},(0,o.yg)("p",{parentName:"li"},"Run the job using the CLI"),(0,o.yg)("pre",{parentName:"li"},(0,o.yg)("code",{parentName:"pre",className:"language-bash"},"openfn hello.js -o tmp/output.json\n")),(0,o.yg)("details",null,(0,o.yg)("summary",null,"View expected output"),(0,o.yg)("pre",{parentName:"li"},(0,o.yg)("code",{parentName:"pre",className:"language-bash"},"[CLI] \u26a0 WARNING: No adaptor provided!\n[CLI] \u26a0 This job will probably fail. Pass an adaptor with the -a flag, eg:\n          openfn job.js -a common\n[CLI] \u2714 Compiled from hello.js\n[R/T] \u2666 Starting job job-1\n[JOB] \u2139 Hello World!\n[R/T] \u2714 Completed job job-1 in 1ms\n[CLI] \u2714 State written to tmp/output.json\n[CLI] \u2714 Finished in 17ms \u2728\n\n"))))),(0,o.yg)("p",null,"Note that our ",(0,o.yg)("inlineCode",{parentName:"p"},"console.log")," statement was printed as ",(0,o.yg)("inlineCode",{parentName:"p"},"[JOB] Hello world!"),". Using\nthe console like this is helpful for debugging and/or understanding what's\nhappening inside our steps."),(0,o.yg)("h3",{id:"2-using-adaptor-helper-functions"},"2. Using adaptor helper functions"),(0,o.yg)("p",null,"Adaptors are Javascript or Typescript modules that provide OpenFn users with a\nset of helper functions for simplifying communication with a specific external\nsystem. Learn more about adaptors here: ",(0,o.yg)("a",{parentName:"p",href:"/adaptors/"},"docs.openfn.org/adaptors")),(0,o.yg)("h4",{id:"basic-usage"},"Basic usage:"),(0,o.yg)("p",null,"Let\u2019s use\n",(0,o.yg)("a",{parentName:"p",href:"https://www.npmjs.com/package/@openfn/language-http"},"@openfn/language-http"),"\nadaptor to fetch a list of forms from\n",(0,o.yg)("a",{parentName:"p",href:"https://jsonplaceholder.typicode.com/"},"https://jsonplaceholder.typicode.com/")),(0,o.yg)("admonition",{title:"Understanding CLI arguments",type:"info"},(0,o.yg)("p",{parentName:"admonition"},"Use ",(0,o.yg)("inlineCode",{parentName:"p"},"-a")," to specify the adaptor; use ",(0,o.yg)("inlineCode",{parentName:"p"},"-i")," to auto-install the necessary adaptor"),(0,o.yg)("p",{parentName:"admonition"},"Run ",(0,o.yg)("inlineCode",{parentName:"p"},"openfn help")," to see the full list of CLI arguments.")),(0,o.yg)("h4",{id:"tasks"},"Tasks:"),(0,o.yg)("ol",null,(0,o.yg)("li",{parentName:"ol"},(0,o.yg)("p",{parentName:"li"},"Create a file called ",(0,o.yg)("inlineCode",{parentName:"p"},"getPosts.js")," and write the following code"),(0,o.yg)("pre",{parentName:"li"},(0,o.yg)("code",{parentName:"pre",className:"language-jsx",metastring:"title=getPosts.js",title:"getPosts.js"},"get('https://jsonplaceholder.typicode.com/posts');\nfn(state => {\n  console.log(state.data[0]);\n  return state;\n});\n"))),(0,o.yg)("li",{parentName:"ol"},(0,o.yg)("p",{parentName:"li"},"Run the job by running"))),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre",className:"language-bash"},"openfn getPosts.js -i -a http -o tmp/output.json\n")),(0,o.yg)("p",null,"Since it is our first time using the ",(0,o.yg)("inlineCode",{parentName:"p"},"http")," adaptor, we are installing the\nadaptor using ",(0,o.yg)("inlineCode",{parentName:"p"},"-i")," argument"),(0,o.yg)("details",null,(0,o.yg)("summary",null,"3. Expand to see expected CLI logs"),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre",className:"language-bash"},"  [CLI] \u2714 Installing packages...\n  [CLI] \u2714 Installed @openfn/language-http@4.2.8\n  [CLI] \u2714 Installation complete in 14.555s\n  [CLI] \u2714 Compiled from getPosts.js\n  [R/T] \u2666 Starting job job-1\n  GET request succeeded with 200 \u2713\n  [JOB] \u2139 {\n    userId: 1,\n    id: 1,\n    title: 'sunt aut facere repellat provident occaecati excepturi optio reprehenderit',\n    body: 'quia et suscipit\\n' +\n      'suscipit recusandae consequuntur expedita et cum\\n' +\n      'reprehenderit molestiae ut ut quas totam\\n' +\n      'nostrum rerum est autem sunt rem eveniet architecto'\n  }\n  [R/T] \u2714 Completed job job-1 in 872ms\n  [CLI] \u2714 State written to tmp/output.json\n  [CLI] \u2714 Finished in 15.518s \u2728\n\n"))),(0,o.yg)("admonition",{title:"Placeholder Data",type:"warning"},(0,o.yg)("p",{parentName:"admonition"},"The data displayed in this CLI logs is generated from a\n",(0,o.yg)("a",{parentName:"p",href:"https://jsonplaceholder.typicode.com/"},"JSONPlaceholder")," API and does not\nrepresent real-world information. It is intended for testing and development\npurposes only."),(0,o.yg)("p",{parentName:"admonition"},"For accurate testing, consider using real data from your API or service.")),(0,o.yg)("h3",{id:"3-understanding-state"},"3. Understanding ",(0,o.yg)("inlineCode",{parentName:"h3"},"state")),(0,o.yg)("p",null,"If a job expression is a set of instructions for a chef (a recipe?) then the\ninitial state is all of the ingredients they need tied up in a perfect little\nbundle. See\n",(0,o.yg)("a",{parentName:"p",href:"/articles/2021/07/05/wrapping-my-head-around-jobs/#it-all-starts-with-state"},'"It all starts with state\u200b"'),"\nin the knowledge base for extra context."),(0,o.yg)("details",null,(0,o.yg)("summary",null,"It usually looks something like this"),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre",className:"language-json"},'{\n  "configuration": {\n    "hostUrl": "https://moh.kenya.gov.ke/dhis2",\n    "username": "someone",\n    "password": "something-secret"\n  },\n  "data": {\n    "type": "registration",\n    "patient": {\n      "age": 24,\n      "gender": "M",\n      "nationalId": "321cs7"\n    }\n  }\n}\n'))),(0,o.yg)("h4",{id:"stateconfiguration"},(0,o.yg)("inlineCode",{parentName:"h4"},"state.configuration")),(0,o.yg)("p",null,"This key is where we put credentials which are used to authorize connections to\nany authenticated system that the job will interact with. (Note that this part\nof ",(0,o.yg)("inlineCode",{parentName:"p"},"state"),' is usually overwritten at runtime with a real "credential" when using\nthe OpenFn platform, rather than the CLI.)'),(0,o.yg)("admonition",{title:"Important",type:"warning"},(0,o.yg)("p",{parentName:"admonition"},"Note that ",(0,o.yg)("inlineCode",{parentName:"p"},"console.log(state)")," will display the whole state, including\n",(0,o.yg)("inlineCode",{parentName:"p"},"state.configuration")," elements such as ",(0,o.yg)("strong",{parentName:"p"},"username and password"),". Remove this\nlog whenever you're done debugging to avoid accidentally exposing sensitive\ninformation when the job is successfully deployed on production."),(0,o.yg)("p",{parentName:"admonition"},"The OpenFn platform has built in protections to \"scrub\" state from the logs, but\nwhen you're using the CLI directly you're on your own!")),(0,o.yg)("h4",{id:"statedata"},(0,o.yg)("inlineCode",{parentName:"h4"},"state.data")),(0,o.yg)("p",null,"This key is where we put data related to a specific job run. On the platform,\nit's the work-order-specific data from a triggering HTTP request or some bit of\ninformation that's passed from one job to another."),(0,o.yg)("p",null,"Using CLI, ",(0,o.yg)("inlineCode",{parentName:"p"},"state.json")," will be loaded automatically from the current directory"),(0,o.yg)("p",null,"Or you can specify the path to the state file by passing the option -s,\n--state-path"),(0,o.yg)("p",null,"Specify a path to your ",(0,o.yg)("inlineCode",{parentName:"p"},"state.json")," file with this command:"),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre",className:"language-bash"},"openfn hello.js -a http -s tmp/state.json -o tmp/output.json\n")),(0,o.yg)("details",null,(0,o.yg)("summary",null,"Expand to see expected CLI logs"),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre"},"[CLI] \u2714 Compiled job from hello.js\nGET request succeeded with 200 \u2713\n[R/T] \u2714 Operation 1 complete in 876ms\n[R/T] \u2714 Operation 2 complete in 0ms\n[CLI] \u2714 Writing output to tmp/output.json\n[CLI] \u2714 Done in 1.222s! \u2728\n"))),(0,o.yg)("h4",{id:"how-can-we-use-state"},"How can we use state?"),(0,o.yg)("p",null,"Each adaptor has a configuration schema that's recommended for use in your\n",(0,o.yg)("inlineCode",{parentName:"p"},"state.json"),". ",(0,o.yg)("a",{parentName:"p",href:"/adaptors/packages/http-configuration-schema"},"Here is an example"),"\nof how to set up ",(0,o.yg)("inlineCode",{parentName:"p"},"state.configuration")," for ",(0,o.yg)("inlineCode",{parentName:"p"},"language-http"),"."),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre",className:"language-json"},'{\n  "username": "name@email",\n  "password": "supersecret",\n  "baseUrl": "https://jsonplaceholder.typicode.com"\n}\n')),(0,o.yg)("h4",{id:"tasks-1"},"Tasks:"),(0,o.yg)("ol",null,(0,o.yg)("li",{parentName:"ol"},(0,o.yg)("p",{parentName:"li"},"Update your ",(0,o.yg)("inlineCode",{parentName:"p"},"state.json")," to look like this:"),(0,o.yg)("details",null,(0,o.yg)("summary",null,"Expand to see state.json"),(0,o.yg)("pre",{parentName:"li"},(0,o.yg)("code",{parentName:"pre",className:"language-json",metastring:"title=state.json",title:"state.json"},'{\n  "configuration": {\n    "baseUrl": "https://jsonplaceholder.typicode.com"\n  }\n}\n'))))),(0,o.yg)("p",null,"Since we have update our configuration in our ",(0,o.yg)("inlineCode",{parentName:"p"},"state.json")," we can now use\n",(0,o.yg)("inlineCode",{parentName:"p"},"get()")," helper function without the need to specify the ",(0,o.yg)("strong",{parentName:"p"},"baseUrl"),"\u2014i.e\n",(0,o.yg)("inlineCode",{parentName:"p"},"get('posts')")),(0,o.yg)("ol",{start:2},(0,o.yg)("li",{parentName:"ol"},(0,o.yg)("p",{parentName:"li"},"Update your ",(0,o.yg)("inlineCode",{parentName:"p"},"getPosts.js")," job to look like this:"),(0,o.yg)("details",null,(0,o.yg)("summary",null,"Expand to see getPosts.js"),(0,o.yg)("pre",{parentName:"li"},(0,o.yg)("code",{parentName:"pre",className:"language-js",metastring:'title="getPosts.js"',title:'"getPosts.js"'},"// Get all posts\nget('posts');\n\nfn(state => {\n  const posts = state.data;\n  console.log(posts[0]);\n  return state;\n});\n")))),(0,o.yg)("li",{parentName:"ol"},(0,o.yg)("p",{parentName:"li"},"Now run the job using the following command"),(0,o.yg)("pre",{parentName:"li"},(0,o.yg)("code",{parentName:"pre",className:"language-bash"},"openfn getPosts.js -a http -s tmp/state.json -o tmp/output.json\n")),(0,o.yg)("details",null,(0,o.yg)("summary",null,"And validate that you see the expected CLI logs:"),(0,o.yg)("pre",{parentName:"li"},(0,o.yg)("code",{parentName:"pre",className:"language-bash"},"[CLI] \u2714 Compiled job from getPosts.js\nGET request succeeded with 200 \u2713\n[R/T] \u2714 Operation 1 complete in 120ms\n[JOB] \u2139 {\n  userId: 1,\n  id: 1,\n  title: 'sunt aut facere repellat provident occaecati excepturi optio reprehenderit',\n  body: 'quia et suscipit\\n' +\n    'suscipit recusandae consequuntur expedita et cum\\n' +\n    'reprehenderit molestiae ut ut quas totam\\n' +\n    'nostrum rerum est autem sunt rem eveniet architecto'\n}\n[R/T] \u2714 Operation 2 complete in 0ms\n[CLI] \u2714 Writing output to tmp/output.json\n[CLI] \u2714 Done in 470ms! \u2728\n\n"))))),(0,o.yg)("h3",{id:"4-clean--transform-data"},"4. Clean & Transform Data"),(0,o.yg)("p",null,"In most cases you need to manipulate, clean, or transform data at some step in\nyour workflow. For example after we get data from the\n",(0,o.yg)("inlineCode",{parentName:"p"},"https://jsonplaceholder.typicode.com")," registry we might need to group the posts\nby user id. The example below shows how we can:"),(0,o.yg)("ol",null,(0,o.yg)("li",{parentName:"ol"},"get all posts and return them in ",(0,o.yg)("inlineCode",{parentName:"li"},"state.data")),(0,o.yg)("li",{parentName:"ol"},"group returned posts by ",(0,o.yg)("inlineCode",{parentName:"li"},"userId")),(0,o.yg)("li",{parentName:"ol"},"log posts with userId ",(0,o.yg)("inlineCode",{parentName:"li"},"1"))),(0,o.yg)("details",null,(0,o.yg)("summary",null,"Expand to see example:"),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre",className:"language-js",metastring:'title="getPosts.js"',title:'"getPosts.js"'},"// Get all posts\nget('posts');\n\n// Group posts by user id\nfn(state => {\n  const posts = state.data;\n\n  // Group posts by userId\n  const groupPostsByUserId = posts.reduce((acc, post) => {\n    const existingValue = acc[post.userId] || [];\n    return {\n      ...acc,\n      [post.userId]: [...existingValue, post],\n    };\n  }, {});\n\n  console.log(groupPostsByUserId);\n\n  return { ...state, groupPostsByUserId };\n});\n\n// Log posts where userId = 1\nfn(state => {\n  const { groupPostsByUserId } = state;\n  console.log('Post with userId 1', groupPostsByUserId[1]);\n  return state;\n});\n"))),(0,o.yg)("details",null,(0,o.yg)("summary",null,"What is ",(0,o.yg)("code",null,"array.reduce"),"?"),"The ",(0,o.yg)("code",null,"reduce()")," method applies a function against an accumulator and each value of the array (from left-to-right) to reduce it to a single value.",(0,o.yg)("p",null,"Perhaps the easiest-to-understand case for ",(0,o.yg)("code",null,"reduce()")," is to return\nthe sum of all the elements in an array:"),(0,o.yg)("h5",{id:"javascript-demo-arrayreduce"},"JavaScript Demo: ",(0,o.yg)("inlineCode",{parentName:"h5"},"Array.reduce()")),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre"},"\nconst array1 = [1, 2, 3, 4];\n\n// 0 + 1 + 2 + 3 + 4 const initialValue = 0; const sumWithInitial =\narray1.reduce( (accumulator, currentValue) => accumulator + currentValue,\ninitialValue );\n\nconsole.log(sumWithInitial); // Expected output: 10\n\n")),(0,o.yg)("p",null,"You can learn more about ",(0,o.yg)("inlineCode",{parentName:"p"},"array.reduce")," from\n",(0,o.yg)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/Reduce"},"this article"))),(0,o.yg)("blockquote",null),(0,o.yg)("details",null,(0,o.yg)("summary",null,"Expand to see expected CLI logs"),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre"},"\n[CLI] \u2714 Compiled job from getPosts.js GET request succeeded with 200 \u2713 [R/T] \u2714\nOperation 1 complete in 825ms [R/T] \u2714 Operation 2 complete in 0ms [JOB] \u2139 Post\nwith userId 1 [ //All of posts for userId 1 ] [R/T] \u2714 Operation 3 complete in\n12ms [CLI] \u2714 Writing output to tmp/output.json [CLI] \u2714 Done in 1.239s! \u2728\n\n"))),(0,o.yg)("h3",{id:"5-debugging-errors"},"5. Debugging errors"),(0,o.yg)("p",null,"When debugging, it\u2019s interesting to use log to have a visual representation of\nthe content of the manipulated objects (such as state)."),(0,o.yg)("p",null,"When you want to inspect the content of state in between operations, add an\n",(0,o.yg)("inlineCode",{parentName:"p"},"fn()")," block with a ",(0,o.yg)("inlineCode",{parentName:"p"},"console.log"),":"),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre",className:"language-js"},"// firstOperation(...);\n\nfn(state => {\n  console.log(state);\n  return state;\n});\n\n// secondOperation(...);\n")),(0,o.yg)("h5",{id:"create-debugjs-and-paste-the-code-below"},"Create ",(0,o.yg)("strong",{parentName:"h5"},"debug.js")," and paste the code below"),(0,o.yg)("details",null,(0,o.yg)("summary",null,"Expand to see debug.js"),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre",className:"language-jsx",metastring:'title="debug.js"',title:'"debug.js"'},"// Get all posts\nget('posts');\n\n// Get post by index helper function\nfn(state => {\n  // const getPostbyIndex = (index) => dataValue(index)(state);\n  console.log(dataValue(1));\n\n  return { ...state };\n});\n"))),(0,o.yg)("h5",{id:"run-openfn-debugjs--a-http"},"Run ",(0,o.yg)("strong",{parentName:"h5"},"openfn debug.js -a http")),(0,o.yg)("details",null,(0,o.yg)("summary",null,"Expected CLI logs"),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre",className:"language-bash"},"[CLI] \u2718 TypeError: path.match is not a function\n    at dataPath (/tmp/openfn/repo/node_modules/@openfn/language-common/dist/index.cjs:258:26)\n    at dataValue (/tmp/openfn/repo/node_modules/@openfn/language-common/dist/index.cjs:262:22)\n    at getPostbyIndex (vm:module(0):5:37)\n    at vm:module(0):18:36\n    at /tmp/openfn/repo/node_modules/@openfn/language-common/dist/index.cjs:241:12\n    at file:///home/openfn/.asdf/installs/nodejs/18.12.0/lib/node_modules/@openfn/cli/node_modules/@openfn/runtime/dist/index.js:288:26\n    at process.processTicksAndRejections (node:internal/process/task_queues:95:5)\n    at async run (file:///home/openfn/.asdf/installs/nodejs/18.12.0/lib/node_modules/@openfn/cli/node_modules/@openfn/runtime/dist/index.js:269:18)\n    at async executeHandler (file:///home/openfn/.asdf/installs/nodejs/18.12.0/lib/node_modules/@openfn/cli/dist/process/runner.js:388:20)\n"))),(0,o.yg)("p",null,"As you can see from our logs that helper function ",(0,o.yg)("inlineCode",{parentName:"p"},"dataValue")," has a TypeError,\nTo troubleshoot this you can go to the documentation for ",(0,o.yg)("strong",{parentName:"p"},"dataValue ->\n",(0,o.yg)("a",{parentName:"strong",href:"/adaptors/packages/common-docs/#datavaluepath--operation"},"docs.openfn.org/adaptors/packages/common-docs/#datavaluepath--operation"))),(0,o.yg)("p",null,"According to the docs, dataValue take path which is a string type. But in our\noperation we were passing an integer, that\u2019s why we have a ",(0,o.yg)("em",{parentName:"p"},"TypeError"),". You can\nfix the error by passing a string in dataValue i.e ",(0,o.yg)("inlineCode",{parentName:"p"},"console.log(dataValue(\u201c1\u201d))")),(0,o.yg)("details",null,(0,o.yg)("summary",null,"Expected CLI logs"),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre",className:"language-bash"},"[CLI] \u2714 Compiled job from debug.js\nGET request succeeded with 200 \u2713\n[R/T] \u2714 Operation 1 complete in 722ms\n[JOB] \u2139 [Function (anonymous)]\n[R/T] \u2714 Operation 2 complete in 1ms\n[CLI] \u2714 Writing output to tmp/output.json\n[CLI] \u2714 Done in 1.102s \u2728\n"))),(0,o.yg)("p",null,"If you need more information for debugging you can pass -l debug which will give\nall information about the run"),(0,o.yg)("p",null,"i.e ",(0,o.yg)("inlineCode",{parentName:"p"},"openfn debug.js -a http -l debug")),(0,o.yg)("h3",{id:"6-each-and-array-iteration"},"6. Each and array iteration"),(0,o.yg)("p",null,"We often have to perform the same operation multiple times for items in an\narray. Most of the helper functions for data manipulation are inherited from\n@openfn/language-common and are available in most of the adaptors."),(0,o.yg)("h5",{id:"modify-getpostsjs-to-group-posts-by-user-id"},"Modify getPosts.js to group posts by user-ID"),(0,o.yg)("details",null,(0,o.yg)("summary",null,"Expand to see getPosts.js"),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre",className:"language-js",metastring:'title="getPosts.js"',title:'"getPosts.js"'},"// Get all posts\nget('posts');\n\n// Group posts by user\nfn(state => {\n  const posts = state.data;\n\n  // Group posts by userId\n  const groupPostsByUserId = posts.reduce((acc, post) => {\n    const existingValue = acc[post.userId] || [];\n    return { ...acc, [post.userId]: [...existingValue, post] };\n  }, {});\n\n  // console.log(groupPostsByUserId);\n  return { ...state, groupPostsByUserId };\n});\n\n// Log posts where userId = 1\nfn(state => {\n  const { groupPostsByUserId } = state;\n  const posts = groupPostsByUserId[1];\n\n  // console.log(\"Post with userId 1\", groupPostsByUserId[1]);\n  return { ...state, posts };\n});\n\neach('posts[*]', state => {\n  console.log('Post', JSON.stringify(state.data, null, 2));\n  return state;\n});\n"))),(0,o.yg)("p",null,"Notice how this code uses the ",(0,o.yg)("inlineCode",{parentName:"p"},"each")," function, a helper function defined in\n",(0,o.yg)("a",{parentName:"p",href:"/adaptors/packages/common-docs/#eachdatasource-operation--operation"},"language-common"),"\nbut accessed from this job that is using language-http. Most adaptors import and\nexport many functions from ",(0,o.yg)("inlineCode",{parentName:"p"},"language-common"),"."),(0,o.yg)("h5",{id:"run-openfn-getpostsjs--a-http--s-tmpstatejson--o-tmpoutputjson"},"Run ",(0,o.yg)("strong",{parentName:"h5"},"openfn getPosts.js -a http -s tmp/state.json -o tmp/output.json")),(0,o.yg)("details",null,(0,o.yg)("summary",null,"Expand to see expected CLI logs"),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre",className:"language-bash"},"[CLI] \u2714 Compiled job from getPosts.js\nGET request succeeded with 200 \u2713\n[R/T] \u2714 Operation 1 complete in 730ms\n[R/T] \u2714 Operation 2 complete in 0ms\n[R/T] \u2714 Operation 3 complete in 0ms\n[JOB] \u2139 Posts [\n// Posts\n]\n[R/T] \u2714 Operation 4 complete in 10ms\n[CLI] \u2714 Writing output to tmp/output.json\n[CLI] \u2714 Done in 1.091s! \u2728\n"))),(0,o.yg)("h3",{id:"7-running-workflows"},"7. Running Workflows"),(0,o.yg)("p",null,"Running a workflow allows you to define a list of steps and rules for executing\nthem. You can use a workflow to orchestrate the flow of data between systems in\na structured and automated way."),(0,o.yg)("p",null,(0,o.yg)("em",{parentName:"p"},"For example, if you have two steps in your workflow (GET users from system A &\nPOST users to system B), you can set up your workflow to run all steps in\nsequence from start to finish. This imitates the\n",(0,o.yg)("a",{parentName:"em",href:"/documentation/build/triggers#flow-triggers"},"flow trigger patterns")," on the\nOpenFn platform where a second job should run after the first one succeeds,\nrespectively, using the data returned from the first job. \u201c")),(0,o.yg)("admonition",{title:"tl;dr",type:"info"},(0,o.yg)("p",{parentName:"admonition"},"You won't have to assemble the initial state of the next job, the final state of\nthe upstream job will automatically be passed down to the downstream job as the\ninitial state.")),(0,o.yg)("h5",{id:"workflow"},"Workflow"),(0,o.yg)("p",null,"A workflow is the execution plan for running several steps in a sequence. It is\ndefined as a JSON object that consists of the following properties:"),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre",className:"language-json"},'{\n  "options": {\n    "start": "a" // optionally specify the start node (defaults to steps[0])\n  },\n  "workflow": {\n    "steps": [\n      {\n        "id": "a",\n        "expression": "fn((state) => state)", // code or a path\n        "adaptor": "@openfn/language-common@1.75", // specifiy the adaptor to use (version optional)\n        "state": {\n          "data": {} // optionally pre-populate the data object (this will be overriden by keys in in previous state)\n        },\n        "configuration": {}, // Use this to pass credentials\n        "next": {\n          // This object defines which steps to call next\n          // All edges returning true will run\n          // If there are no next edges, the workflow will end\n          "b": true,\n          "c": {\n            "condition": "!state.error" // Note that this is an expression, not a function\n          }\n        }\n      }\n    ]\n  }\n}\n')),(0,o.yg)("h6",{id:"example-of-a-workflow"},"Example of a workflow"),(0,o.yg)("details",null,(0,o.yg)("summary",null,"Here's an example of a simple workflow that consists of three steps:"),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre",className:"language-json",metastring:'title="workflow.json"',title:'"workflow.json"'},'{\n  "options": {\n    "start": "getPatients"\n  },\n  "workflow": {\n    "steps": [\n      {\n        "id": "getPatients",\n        "adaptor": "http",\n        "expression": "getPatients.js",\n        "configuration": "tmp/http-creds.json",\n        "next": {\n          "getGlobalOrgUnits": true\n        }\n      },\n      {\n        "id": "getGlobalOrgUnits",\n        "adaptor": "common",\n        "expression": "getGlobalOrgUnits.js",\n        "next": {\n          "createTEIs": true\n        }\n      },\n      {\n        "id": "createTEIs",\n        "adaptor": "dhis2",\n        "expression": "createTEIs.js",\n        "configuration": "tmp/dhis2-creds.json"\n      }\n    ]\n  }\n}\n'))),(0,o.yg)("details",null,(0,o.yg)("summary",null,"tmp/http-creds.json"),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre",className:"language-json",metastring:'title="tmp/http-creds.json"',title:'"tmp/http-creds.json"'},'{\n  "baseUrl": "https://jsonplaceholder.typicode.com"\n}\n'))),(0,o.yg)("details",null,(0,o.yg)("summary",null,"tmp/dhis2-creds.json"),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre",className:"language-json",metastring:'title="tmp/dhis2-creds.json"',title:'"tmp/dhis2-creds.json"'},'{\n  "hostUrl": "https://play.im.dhis2.org/dev",\n  "password": "district",\n  "username": "admin"\n}\n'))),(0,o.yg)("details",null,(0,o.yg)("summary",null,"getPatients.js"),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre",className:"language-js",metastring:'title="getPatients.js"',title:'"getPatients.js"'},"// Get users from jsonplaceholder\nget('users');\n\n// Prepare new users as new patients\nfn(state => {\n  const newPatients = state.data;\n  return { ...state, newPatients };\n});\n"))),(0,o.yg)("details",null,(0,o.yg)("summary",null,"getGlobalOrgUnits.js"),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre",className:"language-js",metastring:'title="getGlobalOrgUnits.js"',title:'"getGlobalOrgUnits.js"'},"// Globals: orgUnits\nfn(state => {\n  const globalOrgUnits = [\n    {\n      label: 'Njandama MCHP',\n      id: 'g8upMTyEZGZ',\n      source: 'Gwenborough',\n    },\n    {\n      label: 'Njandama MCHP',\n      id: 'g8upMTyEZGZ',\n      source: 'Wisokyburgh',\n    },\n    {\n      label: 'Njandama MCHP',\n      id: 'g8upMTyEZGZ',\n      source: 'McKenziehaven',\n    },\n    {\n      label: 'Njandama MCHP',\n      id: 'g8upMTyEZGZ',\n      source: 'South Elvis',\n    },\n    {\n      label: 'Ngelehun CHC',\n      id: 'IpHINAT79UW',\n      source: 'Roscoeview',\n    },\n    {\n      label: 'Ngelehun CHC',\n      id: 'IpHINAT79UW',\n      source: 'South Christy',\n    },\n    {\n      label: 'Ngelehun CHC',\n      id: 'IpHINAT79UW',\n      source: 'Howemouth',\n    },\n    {\n      label: 'Ngelehun CHC',\n      id: 'IpHINAT79UW',\n      source: 'Aliyaview',\n    },\n    {\n      label: 'Baoma Station CHP',\n      id: 'jNb63DIHuwU',\n      source: 'Bartholomebury',\n    },\n    {\n      label: 'Baoma Station CHP',\n      id: 'jNb63DIHuwU',\n      source: 'Lebsackbury',\n    },\n  ];\n\n  return { ...state, globalOrgUnits };\n});\n"))),(0,o.yg)("details",null,(0,o.yg)("summary",null,"createTEIs.js"),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre",className:"language-js",metastring:'title="createTEIs.js"',title:'"createTEIs.js"'},"fn(state => {\n  const { newPatients, globalOrgUnits } = state;\n\n  const getOrgUnit = city =>\n    globalOrgUnits.find(orgUnit => orgUnit.source === city).id;\n\n  const mappedEntities = newPatients.map(patient => {\n    const [firstName = 'Patient', lastName = 'Test'] = (\n      patient.name || ''\n    ).split(' ');\n\n    const orgUnit = getOrgUnit(patient.address.city);\n\n    const attributes = [\n      { attribute: 'w75KJ2mc4zz', value: firstName },\n      { attribute: 'zDhUuAYrxNC', value: lastName },\n      { attribute: 'cejWyOfXge6', value: 'Male' },\n    ];\n\n    return { ...patient, attributes: attributes, orgUnit: orgUnit };\n  });\n\n  return { ...state, mappedEntities };\n});\n\neach(\n  'mappedEntities[*]',\n  create('trackedEntityInstances', {\n    orgUnit: dataValue('orgUnit'),\n    trackedEntityType: 'nEenWmSyUEp',\n    attributes: dataValue('attributes'),\n  })\n);\n"))),(0,o.yg)("p",null,"Run ",(0,o.yg)("inlineCode",{parentName:"p"},"openfn [path/to/workflow.json]")," to execute the workflow."),(0,o.yg)("details",null,(0,o.yg)("summary",null,"For example if you created ",(0,o.yg)("code",null,"workflow.json")," in the root of your project directory, This is how your project will look like"),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre",className:"language-bash"},"    devchallenge\n    \u251c\u2500\u2500 .gitignore\n    \u251c\u2500\u2500 getPatients.js\n    \u251c\u2500\u2500 createTEIs.js\n    \u251c\u2500\u2500 getGlobalOrgUnits.js\n    \u251c\u2500\u2500 workflow.json\n    \u2514\u2500\u2500 tmp\n        \u251c\u2500\u2500 http-creds.json\n        \u251c\u2500\u2500 dhis2-creds.json\n        \u2514\u2500\u2500 output.json\n"))),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre",className:"language-bash"},"openfn workflow.json -o tmp/output.json\n")),(0,o.yg)("p",null,"On execution, this workflow will first run the ",(0,o.yg)("inlineCode",{parentName:"p"},"getPatients.js")," job. If is\nsuccessful, ",(0,o.yg)("inlineCode",{parentName:"p"},"getGlobalOrgUnits.js")," will run using the final state of\n",(0,o.yg)("inlineCode",{parentName:"p"},"getPatients.js"),". If ",(0,o.yg)("inlineCode",{parentName:"p"},"getGlobalOrgUnits.js")," is successful, ",(0,o.yg)("inlineCode",{parentName:"p"},"createTEIs.js")," will\nrun using the final state of ",(0,o.yg)("inlineCode",{parentName:"p"},"getGlobalOrgUnits.js"),"."),(0,o.yg)("p",null,"Note that adaptors specified in the ",(0,o.yg)("inlineCode",{parentName:"p"},"workflow.json")," will be auto-installed when\nyou execute the workflow. To execute the workflow run this command:"),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre",className:"language-bash"},"openfn workflow.json -o tmp/output.json\n")),(0,o.yg)("p",null,"On execution, this workflow will first auto-install the adaptors then run the\nworkflow"),(0,o.yg)("admonition",{title:"Important",type:"danger"},(0,o.yg)("p",{parentName:"admonition"},"When working with the ",(0,o.yg)("inlineCode",{parentName:"p"},"workflow.json")," file, it is important to handle sensitive\ninformation, such as credentials and initial input data, in a secure manner. To\nensure the protection of your sensitive data, please follow the guidelines\noutlined below:"),(0,o.yg)("ol",{parentName:"admonition"},(0,o.yg)("li",{parentName:"ol"},(0,o.yg)("p",{parentName:"li"},"Configuration Key: In the ",(0,o.yg)("inlineCode",{parentName:"p"},"workflow.json")," file, specify a path to a git\nignored configuration file that will contain necessary credentials that will\nbe used to access the destination system. For example:"),(0,o.yg)("pre",{parentName:"li"},(0,o.yg)("code",{parentName:"pre",className:"language-json"},'{\n   ...\n   "configuration": "tmp/openMRS-credentials.json"\n },\n'))),(0,o.yg)("li",{parentName:"ol"},(0,o.yg)("p",{parentName:"li"},"Data Key: Incase you need to pass initial data to your job, specify a path to\na gitignored data file"),(0,o.yg)("pre",{parentName:"li"},(0,o.yg)("code",{parentName:"pre",className:"language-json"},'{\n...\n "state": {\n   "data": "tmp/initial-data.json",\n }\n}\n'))))))}d.isMDXComponent=!0},15680:(e,n,t)=>{t.d(n,{xA:()=>u,yg:()=>m});var a=t(96540);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function s(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function r(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?s(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):s(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function i(e,n){if(null==e)return{};var t,a,o=function(e,n){if(null==e)return{};var t,a,o={},s=Object.keys(e);for(a=0;a<s.length;a++)t=s[a],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(a=0;a<s.length;a++)t=s[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var l=a.createContext({}),p=function(e){var n=a.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):r(r({},n),e)),t},u=function(e){var n=p(e.components);return a.createElement(l.Provider,{value:n},e.children)},g="mdxType",d={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},c=a.forwardRef((function(e,n){var t=e.components,o=e.mdxType,s=e.originalType,l=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),g=p(t),c=o,m=g["".concat(l,".").concat(c)]||g[c]||d[c]||s;return t?a.createElement(m,r(r({ref:n},u),{},{components:t})):a.createElement(m,r({ref:n},u))}));function m(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var s=t.length,r=new Array(s);r[0]=c;var i={};for(var l in n)hasOwnProperty.call(n,l)&&(i[l]=n[l]);i.originalType=e,i[g]="string"==typeof e?e:o,r[1]=i;for(var p=2;p<s;p++)r[p]=t[p];return a.createElement.apply(null,r)}return a.createElement.apply(null,t)}c.displayName="MDXCreateElement"}}]);