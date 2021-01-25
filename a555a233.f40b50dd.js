(window.webpackJsonp=window.webpackJsonp||[]).push([[46],{115:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return o})),n.d(t,"metadata",(function(){return s})),n.d(t,"toc",(function(){return l})),n.d(t,"default",(function(){return c}));var a=n(3),r=n(7),i=(n(0),n(145)),o={title:"Release Notes"},s={unversionedId:"release-notes",id:"release-notes",isDocsHomePage:!1,title:"Release Notes",description:"Version 1.75.0 (2020-07-14)",source:"@site/docs/release-notes.md",slug:"/release-notes",permalink:"/documentation/release-notes",editUrl:"https://github.com/openfn/docs/edit/main/docs/release-notes.md",version:"current",sidebar:"docs",previous:{title:"Snippets & Sample Code",permalink:"/documentation/appendix"},next:{title:"Off-Platform (DIY)",permalink:"/documentation/diy"}},l=[{value:"Version 1.75.0 (2020-07-14)",id:"version-1750-2020-07-14",children:[]},{value:"Version 1.72.17 (2020-06-21)",id:"version-17217-2020-06-21",children:[]},{value:"Version 1.37.0 (2019-10-21)",id:"version-1370-2019-10-21",children:[]},{value:"Version 1.36.0 (2019-10-01)",id:"version-1360-2019-10-01",children:[]},{value:"Version 1.35.0 (2019-10-01)",id:"version-1350-2019-10-01",children:[]},{value:"Version 1.22.0 (2019-03-10)",id:"version-1220-2019-03-10",children:[]},{value:"Version 1.21.0 (2019-03-09)",id:"version-1210-2019-03-09",children:[]},{value:"Version 1.20.0 (2019-03-07)",id:"version-1200-2019-03-07",children:[]},{value:"Version 1.10.0 (2017-05-04)",id:"version-1100-2017-05-04",children:[]},{value:"Version 1.9.0 (2017-03-07)",id:"version-190-2017-03-07",children:[]},{value:"Version 1.75.0 (2016-12-08)",id:"version-1750-2016-12-08",children:[]},{value:"Version 1.7.0 (2016-12-05)",id:"version-170-2016-12-05",children:[]},{value:"Version 1.6.0 (2016-11-24)",id:"version-160-2016-11-24",children:[]},{value:"Version 1.5.0 (2016-10-05)",id:"version-150-2016-10-05",children:[]},{value:"Version 1.4.0 (2016-09-26)",id:"version-140-2016-09-26",children:[]},{value:"Version 1.3.0 (2016-09-20)",id:"version-130-2016-09-20",children:[]},{value:"Version 1.2.0 (2016-09-15)",id:"version-120-2016-09-15",children:[]},{value:"Version 1.1.0 (2016-08-29)",id:"version-110-2016-08-29",children:[]}],b={toc:l};function c(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(i.b)("wrapper",Object(a.a)({},b,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)("h2",{id:"version-1750-2020-07-14"},"Version 1.75.0 (2020-07-14)"),Object(i.b)("p",null,"New features:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},"Scheduled jobs replace timer jobs:"),' In the past "interval trigger." behaved\nlike sand timers, executing your jobs every ',Object(i.b)("inlineCode",{parentName:"li"},"x")," seconds. This functionality\nhas been completely overhauled, giving users much greater control over when\njobs get executed by introducing ",Object(i.b)("inlineCode",{parentName:"li"},"cron")," expressions. Learn about ",Object(i.b)("inlineCode",{parentName:"li"},"cron")," via\nthe OpenFn UI, or at",Object(i.b)("a",{href:"https://crontab.guru",target:"_blank"},"crontab.guru"),".")),Object(i.b)("h2",{id:"version-17217-2020-06-21"},"Version 1.72.17 (2020-06-21)"),Object(i.b)("p",null,"New features:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},"Credential sharing:")," Users can now share credentials across multiple\nprojects ",Object(i.b)("em",{parentName:"li"},"and")," transfer credential ownership to other users."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},"Enhanced credential security:")," Project owners can now ",Object(i.b)("em",{parentName:"li"},"disable")," ",Object(i.b)("inlineCode",{parentName:"li"},"console"),"\nfor particular jobs in their projects. This can be used to stop unintentional\nor malicious printing of credential data to the logs."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},"Test mode for HTTP jobs:"),' Users can turn on "test mode" for jobs, which\nwill intercept all outbound HTTP requests, print the request parameters to the\nlog, and provide a 200 OK response. This can be used to test integrations for\nsystems that are still in development.'),Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},"Enhanced debugging/open-source integration:")," Now using a new version of\nOpenFn/core which displays the current langauge-package version and Node JS\nversion for better debugging and a tighter integration between our\noffline/open-source tools and the platform."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},"Enhanced monitoring:")," Queue size monitor allows users to see approximately\nhow many runs are in their queue\u2014this is useful for estimating time to\ncompleting for big bulk reprocessing jobs.")),Object(i.b)("h2",{id:"version-1370-2019-10-21"},"Version 1.37.0 (2019-10-21)"),Object(i.b)("p",null,"New features:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"Submit ODK Collect forms (or any OpenRosa compliant form) directly to an\nOpenFn inbox, rather than to ODK Aggregate or some other server before\nforwarding.")),Object(i.b)("h2",{id:"version-1360-2019-10-01"},"Version 1.36.0 (2019-10-01)"),Object(i.b)("p",null,"New features:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},'Allow messages to be deleted (in accordance with plan retention periods)\ndespite having more recent runs related to them. We set the message to "null"\nfor these younger runs, but the run logs will still be available until they\'re\npast the retention period. This allows sensitive data in the initial message\npayload to be purged with the retention period, while less sensitive data in\nthe run logs is still kept.'),Object(i.b)("li",{parentName:"ul"},"Added more specific exit codes to runs for non-standard exits. Note that exit\ncodes above 2 are ",Object(i.b)("em",{parentName:"li"},"very")," rare. See below for new codes from ",Object(i.b)("inlineCode",{parentName:"li"},"v1.36.0")," onwards.")),Object(i.b)("p",null,"Enhanced Error Codes:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"0"),": success (run succeeded, e.g. a destination system responded with a ",Object(i.b)("inlineCode",{parentName:"li"},"200"),")"),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"1"),": error (run failed normally, e.g. a destination system responded with a\n",Object(i.b)("inlineCode",{parentName:"li"},"4XX"),", ",Object(i.b)("inlineCode",{parentName:"li"},"5XX"),", or some specialized ",Object(i.b)("inlineCode",{parentName:"li"},"RequiredFieldMissing")," error.)"),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"2"),": run timed out (runs >100s only supported in enterprise plans)"),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"3"),": run could not start due to error (could relate to network traffic, but\nvery rare as an error ",Object(i.b)("em",{parentName:"li"},"before")," the run is started will be retried from Redis\nwith an exponential backoff for a very long time)"),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"5"),": unexpected error during job execution"),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"10"),": error in ",Object(i.b)("inlineCode",{parentName:"li"},"core/cli.js execute"))),Object(i.b)("h2",{id:"version-1350-2019-10-01"},"Version 1.35.0 (2019-10-01)"),Object(i.b)("p",null,"New features:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"Default navigation drawer to open and grouped nav items for easier access"),Object(i.b)("li",{parentName:"ul"},"Various UI bug-fixes"),Object(i.b)("li",{parentName:"ul"},"Added new indexes on messages and runs for faster search and filter\nperformance."),Object(i.b)("li",{parentName:"ul"},"Enhanced bulk-retry feature for runs"),Object(i.b)("li",{parentName:"ul"},"Enhanced bulk-reprocess feature for messages"),Object(i.b)("li",{parentName:"ul"},"Added user-warning when connecting a job to a GitHub filepath: the contents at\nthat filepath will overwrite your current OpenFn job on the next GitHub commit"),Object(i.b)("li",{parentName:"ul"},"Added historical project usage view"),Object(i.b)("li",{parentName:"ul"},"Added activity cleaning, as per ",Object(i.b)("a",Object(a.a)({parentName:"li"},{href:"http://www.openfn.org/pricing#plans"}),"www.openfn.org/pricing#plans")," to better comply\nwith data protection regulations and improve UI performance")),Object(i.b)("h2",{id:"version-1220-2019-03-10"},"Version 1.22.0 (2019-03-10)"),Object(i.b)("p",null,"New features:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"Allow ",Object(i.b)("strong",{parentName:"li"},"filtering by run status (any, success, failed) for bulk retrying\nruns")," in the Run Retry modal."),Object(i.b)("li",{parentName:"ul"},"Hovering over a message/run ",Object(i.b)("strong",{parentName:"li"},"displays the full date-time")," at which it was\nreceived/started as well as the relative time (i.e., how long ago) of that\naction.")),Object(i.b)("h2",{id:"version-1210-2019-03-09"},"Version 1.21.0 (2019-03-09)"),Object(i.b)("p",null,"New features:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"Added buttons to the Job, Run, and Activity History pages that allow a user to\n",Object(i.b)("strong",{parentName:"li"},"run a time triggered job on demand")," so that they don't have to wait for the\ntimer to expire to test.")),Object(i.b)("h2",{id:"version-1200-2019-03-07"},"Version 1.20.0 (2019-03-07)"),Object(i.b)("p",null,"New features:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},"We've been busy, but negligent on release notes. To explain all that's\nchanged we've broken the new features list into multiple sections."))),Object(i.b)("p",null,'Messages & the "Inbox" view:'),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},"Filter messages by body text"),". (Be patient, doing ",Object(i.b)("inlineCode",{parentName:"li"},"tsvector")," searching\nacross millions of payloads.)"),Object(i.b)("li",{parentName:"ul"},"Filter by date. (Default inbox view shows last 30 days.)"),Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},"Export messages")," as a CSV, based on your currently applied filters."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},"Bulk reprocess messages")," in a series."),Object(i.b)("li",{parentName:"ul"},"All projects on paid plans now have their own job running queues."),Object(i.b)("li",{parentName:"ul"},'Partial loading to address inbox view performance issues: messages are loaded\nfirst on the inbox view, and then their related "run states" are calculated\nand loaded in a second action.')),Object(i.b)("p",null,'Runs & the "Activity History" view:'),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},"Filter runs by log text"),". (This is a full text search and may take some\ntime.)"),Object(i.b)("li",{parentName:"ul"},"Filter by date. (Default activity history view shows last 30 days.)"),Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},"Bulk retry runs")," in a series. (With the ability to limit retries to a\ncertain job.)"),Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},"Export runs")," as a CSV, based on your currently applied filters.")),Object(i.b)("p",null,"Authentication & Security:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"Require basic auth or token auth to make HTTP requests to a project inbox.")),Object(i.b)("p",null,"Project Settings:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},'View the "inbox URL" as text with a click-to-reveal button.'),Object(i.b)("li",{parentName:"ul"},'Show "pace" of estimated usage to determine when a plan upgrade will be\nnecessary.')),Object(i.b)("p",null,"Jobs:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},'Ability to create a job, and a trigger all from the same "Wizard" view.')),Object(i.b)("p",null,"Triggers:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},'Ability to create "success" and "failure" triggers so that jobs can be run\nbased on the success or failure of another job run.')),Object(i.b)("h2",{id:"version-1100-2017-05-04"},"Version 1.10.0 (2017-05-04)"),Object(i.b)("p",null,"New features:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"GitHub integration now generally available for enterprise users. Self-setup\ninterface completed.")),Object(i.b)("h2",{id:"version-190-2017-03-07"},"Version 1.9.0 (2017-03-07)"),Object(i.b)("p",null,"New features:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"View matching messages in the job writing interface when a message filter\ntrigger is selected."),Object(i.b)("li",{parentName:"ul"},'"Tree view" exposed for job expression viewing. With valid syntax, you\'re able\nto see your expression as a syntax tree as we step slowly towards a more\npoint-and-click interface.')),Object(i.b)("h2",{id:"version-1750-2016-12-08"},"Version 1.75.0 (2016-12-08)"),Object(i.b)("p",null,"New features:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"Hold control while clicking on navigation buttons to open the target in a new\nwindow."),Object(i.b)("li",{parentName:"ul"},"Filter messages in your inbox by their content by selecting a message-filter\ntrigger.")),Object(i.b)("h2",{id:"version-170-2016-12-05"},"Version 1.7.0 (2016-12-05)"),Object(i.b)("h4",{id:"17-is-all-about-user-experience"},Object(i.b)("em",{parentName:"h4"},"1.7 is all about user experience!")),Object(i.b)("p",null,"New features:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"Material design\u2014more whitespace and cleaner lines."),Object(i.b)("li",{parentName:"ul"},"Goto page on inbox and activity tables\u2014save time when processing errors."),Object(i.b)("li",{parentName:"ul"},"Change number of items per page on inbox and activity table\u2014care with this one\non slow connections!"),Object(i.b)("li",{parentName:"ul"},"Go to next or previous message or run\u2014makes working through an audit trail\neasier"),Object(i.b)("li",{parentName:"ul"},"Change user profile settings without changing password"),Object(i.b)("li",{parentName:"ul"},"Select syntax style for code editors in user settings\u2014clouds midnight is my\nnew favorite"),Object(i.b)("li",{parentName:"ul"},"Filter projects, jobs, triggers by name\u2014on the fly for quick navigation"),Object(i.b)("li",{parentName:"ul"},"Add adaptor logos to credentials list\u2014quick identification"),Object(i.b)("li",{parentName:"ul"},'Specify connection types on "Apps" list\u2014seems there was some confusion about\nthis. I know we\'re missing plenty of apps that have good APIs. Will consider\nlogging API documentation as well.'),Object(i.b)("li",{parentName:"ul"},'Shift second top-nav to a collapseable "side nav"\u2014better use of screen\nreal-esate.'),Object(i.b)("li",{parentName:"ul"},"Use 'masonry' packing module for jobs, triggers, credentials, and project\nsettings boxes\u2014more efficient use of space"),Object(i.b)("li",{parentName:"ul"},"Add material design to ",Object(i.b)("em",{parentName:"li"},"this")," documentation page!")),Object(i.b)("h2",{id:"version-160-2016-11-24"},"Version 1.6.0 (2016-11-24)"),Object(i.b)("p",null,"New features:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"Updated payment receipts to include project names."),Object(i.b)("li",{parentName:"ul"},"Added ",Object(i.b)("inlineCode",{parentName:"li"},"update(...)")," to Salesforce adaptor v0.3.0"),Object(i.b)("li",{parentName:"ul"},"Added ",Object(i.b)("inlineCode",{parentName:"li"},"fetchWithErrors")," to HTTP adaptor v0.3.1")),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},"New Salesforce helper function ",Object(i.b)("inlineCode",{parentName:"strong"},"update(...)"),":"),' It takes an object and, so\nlong as you\'re using the "Id" only updates.'),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),'update("Patient__c", fields(\n  field("Id", dataValue("pathToSalesforceId"),\n  field("Name__c", dataValue("patient.first_name")),\n  field(...)\n))\n')),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},"New http helper function ",Object(i.b)("inlineCode",{parentName:"strong"},"fetchWithErrors(...)"),":")," This function will perform\na get request on an endpoint and return the response to another endpoint,\nregardless of whether the first GET suceeded or failed. It's currently being\nused to send message receipt confirmations back to a system of origin that uses\nOpenFn as an intermediary between it and an SMS gateway. If the SMS message\ndoesn't get delivered because the phone number is invalid, we'd like that\ninformation the return all the way to Salesforce, rather than erroring out and\nstaying in OpenFn."),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),'// =============\n// We use "fetchWithErrors(...)" so that when the\n// SMS gateway returns an error the run does not "fail".\n// It "succeeds" and then delivers that error message\n// back to Salesforce with the "Update SMS Status" job.\n// =============\nfetchWithErrors({\n  getEndpoint: \'send_to_contact\',\n  query: function (state) {\n    return {\n      msisdn:\n        state.data.Envelope.Body.notifications.Notification.sObject\n          .SMS__Phone_Number__c,\n      message:\n        state.data.Envelope.Body.notifications.Notification.sObject\n          .SMS__Message__c,\n      api_key: \'some-secret-key\',\n    };\n  },\n  externalId: state.data.Envelope.Body.notifications.Notification.sObject.Id,\n  postUrl: \'https://www.openfn.org/inbox/another-secret-key\',\n});\n')),Object(i.b)("h2",{id:"version-150-2016-10-05"},"Version 1.5.0 (2016-10-05)"),Object(i.b)("p",null,"New features:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"Delete credentials"),Object(i.b)("li",{parentName:"ul"},"Delete triggers"),Object(i.b)("li",{parentName:"ul"},"Archive jobs"),Object(i.b)("li",{parentName:"ul"},"Continual testing from status.openfn.org")),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},"Delete credentials and triggers:")," Users can now delete credentials and\ntriggers."),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},"Archive jobs:"),' Users can now archive jobs, rendering them inactive. Click\n"view archived jobs" to see and restore old jobs.'),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},"status.openfn.org"),": is now live, providing continual testing of key OpenFn\nservices. We run both message-filter-based and timer-trigger-based jobs every\nfive minutes to ensure availability, as well as measuring the round-trip time\n(in ms) that it takes for a server in a different geographical location to send\nvalid JSON to OpenFn then receive and process the 200 response. (This time will\nvary according to the location of your servers, but it's important to note that\nwe test the full round trip. Our servers typically send out 200s in about 5-6ms,\nbut you can expect the round trip to complete in closer to 750ms.)"),Object(i.b)("h2",{id:"version-140-2016-09-26"},"Version 1.4.0 (2016-09-26)"),Object(i.b)("p",null,"New features:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},'Run "matches" directly from your inbox view.'),Object(i.b)("li",{parentName:"ul"},"Always display the latest notification, dismiss to scroll back in time."),Object(i.b)("li",{parentName:"ul"},"Login and signup server responses")),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},'Run "matches" from inbox:'),' Users can now run matches in a single click from\ntheir inbox, getting notifications that runs have successfully started without\nhaving to navigate to the Message Inspector page for a given message. Look for\nthe blue "play" button next to each match. Simply click to start running that\njob with the message in question.'),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},"Latest notifications:")," User notifications will now be displayed\n",Object(i.b)("em",{parentName:"p"},"newest-on-top"),' and when there are multiple stacked notifications users will\nbe... well... notified. Click the small "x" to dismiss the latest notification,\nmoving backwards in time until all have been read.'),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},"Login/signup errors:"),' Until now, invalid login messages and duplicate singup\nemails had been only displayed in your brower\'s logs. (That\'s our fault.) You\'ll\nnow see a handy "invalid credentials" or "email already registered" message when\ntrying to log in or sign up.'),Object(i.b)("h2",{id:"version-130-2016-09-20"},"Version 1.3.0 (2016-09-20)"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"New version of language-salesforce allows users to ",Object(i.b)("inlineCode",{parentName:"li"},"alterState")," with a custom\nfunction.")),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},"alterState:"),"\n",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"https://github.com/OpenFn/docs/blob/master/job-library/alter-state-before-operations.js"}),"documentation")),Object(i.b)("h2",{id:"version-120-2016-09-15"},"Version 1.2.0 (2016-09-15)"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"Users can now select specific adaptor versions for their jobs."),Object(i.b)("li",{parentName:"ul"},'Jobs will "auto-upgrade" unless locked to a specific version.')),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},"Adaptor versions:")," This means that the code beneath your job, once saved with\na specific adaptor version, will never change. This is an important step forward\nfor the whole community, as it enables more rapid progress\u2014especially\nconsidering the growing number of outside contributors\u2014without risking\nintroducing instability to existing jobs."),Object(i.b)("p",null,"Each new version of an adaptor will have release notes introducing the new\nfeatures or changes to helper functions. To allow easy upgrades, we will still\nmandate that all new versions are backwards compatible."),Object(i.b)("h2",{id:"version-110-2016-08-29"},"Version 1.1.0 (2016-08-29)"),Object(i.b)("p",null,"New features:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"Users can now run jobs based on ",Object(i.b)("strong",{parentName:"li"},"timers")," as well as filters."),Object(i.b)("li",{parentName:"ul"},"Users can now view logs for all runs, not just the most recent."),Object(i.b)("li",{parentName:"ul"},'Jobs are "aware" of their last running state.'),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"get(...)")," and ",Object(i.b)("inlineCode",{parentName:"li"},"post(...)")," are now supported using the language-http adaptor,\nallowing users to make their own HTTP calls in jobs.")),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},"Timer triggers:"),' On the triggers tab, users can set the trigger type to\n"timer" and input a whole number of seconds for the "interval". Any "active"\njobs associated with this trigger will run periodically after the interval\nelapses.'),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},"View logs for all runs:")," By clicking on an individual run from either the\nActivity tab or the Message Inspector, users can view the full logs for that\nrun, regardless of whether or not a more recent run took place with the same job\nand message."),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},"Job state:"),' When a job runs based on a timer, not an incoming message, it\nwill preserve it\'s state for the next run. This feature is commonly used by\nlanguage packs like language-surveycto, language-odk, and others to create a\n"cursor" to offset or limit database queries.'),Object(i.b)("blockquote",null,Object(i.b)("p",{parentName:"blockquote"},"For example, ",Object(i.b)("inlineCode",{parentName:"p"},"fetchSubmissions(...)")," in the language-surveycto adaptor takes\nthree arguments: ",Object(i.b)("inlineCode",{parentName:"p"},"formId"),", ",Object(i.b)("inlineCode",{parentName:"p"},"afterDate"),", and ",Object(i.b)("inlineCode",{parentName:"p"},"postUrl"),". The first time this job\nruns it will only fetch submissions ",Object(i.b)("em",{parentName:"p"},"after")," the ",Object(i.b)("inlineCode",{parentName:"p"},"afterDate"),". If any\nsubmissions are received, it will take the last submission from the array (by\ndate) and persist it in the ",Object(i.b)("inlineCode",{parentName:"p"},"job_state")," as ",Object(i.b)("inlineCode",{parentName:"p"},"lastSubmissionDate"),". The next time\nthis job runs, say, 300 seconds (5 minutes) later, it will ignore ",Object(i.b)("inlineCode",{parentName:"p"},"afterDate"),"\nand instead fetch submissions after ",Object(i.b)("inlineCode",{parentName:"p"},"lastSubmissionDate"),". While this\nparticular helper function is very abstract (it does this one thing well) it's\npossible to write a job that simply alters the final \"state\" before\ncompleting, passing whatever data you'd like from ",Object(i.b)("em",{parentName:"p"},"THIS RUN")," to the ",Object(i.b)("em",{parentName:"p"},"NEXT RUN"),"\nof the job.")),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},"get(...) and post(...):")," Have a look at this complex job using language-http.\nSee how it is possible to provide a query and a callback for ",Object(i.b)("inlineCode",{parentName:"p"},"get")," while ",Object(i.b)("inlineCode",{parentName:"p"},"post"),"\ntakes a url and a body object. At the end, the user is setting\nstate.lastSubmissionDate to ",Object(i.b)("inlineCode",{parentName:"p"},"submissions[submissions.length-1].SubmissionDate"),"."),Object(i.b)("p",null,"See the functions themselves at\n",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"https://github.com/OpenFn/language-http/blob/master/src/Adaptor.js"}),"language-http"),"."),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),"get('forms/data/wide/json/someForm', {\n  query: function (state) {\n    return { date: state.lastSubmissionDate || 'Aug 29, 2016 4:44:26 PM' };\n  },\n  callback: function (state) {\n    // Pick submissions out in order to avoid `post` overwriting `response`.\n    var submissions = state.response.body;\n    // return submissions\n    return submissions\n      .reduce(function (acc, item) {\n        // tag submissions as part of the \"someForm\" form\n        item.formId = 'someForm';\n        return acc.then(\n          post('https://www.openfn.org/inbox/some-inbox-uuid', { body: item })\n        );\n      }, Promise.resolve(state))\n      .then(function (state) {\n        if (submissions.length) {\n          state.lastSubmissionDate =\n            submissions[submissions.length - 1].SubmissionDate;\n        }\n        return state;\n      })\n      .then(function (state) {\n        delete state.response;\n        return state;\n      });\n  },\n});\n")))}c.isMDXComponent=!0},145:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return m}));var a=n(0),r=n.n(a);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var b=r.a.createContext({}),c=function(e){var t=r.a.useContext(b),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},u=function(e){var t=c(e.components);return r.a.createElement(b.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},d=r.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,o=e.parentName,b=l(e,["components","mdxType","originalType","parentName"]),u=c(n),d=a,m=u["".concat(o,".").concat(d)]||u[d]||p[d]||i;return n?r.a.createElement(m,s(s({ref:t},b),{},{components:n})):r.a.createElement(m,s({ref:t},b))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:a,o[1]=s;for(var b=2;b<i;b++)o[b]=n[b];return r.a.createElement.apply(null,o)}return r.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"}}]);