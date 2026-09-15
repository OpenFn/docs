---
title: Using the AI Assistant
sidebar_label: AI Assistant
---

The OpenFn AI Assistant provides a chat interface with an AI Model to help you
build workflows. **Check out
[this video](https://www.youtube.com/watch?v=3L_cGl9tWRc&ab_channel=OpenFn.org)
for an introduction on how it works.**

You can use it to draft, proofread and debug job code, diagnose errors, and
understand the capabilities of the platform.

:::info Build AI-Driven Workflows on OpenFn

Check out OpenFn [adaptors](/adaptors) to build OpenFn workflows that
orchestrate interactions with LLMs (like ChatGPT and Claude) and turn AI-powered
decision-making into action and automated execution.

:::

<img src="/img/ai-assistant.webp" width="427" />

:::caution Assistant Unavailable? Can't find it?

For local deployments of OpenFn, the instance administrator needs to configure
the AI Assistant before it is available. See
[deployment docs](https://github.com/OpenFn/lightning/blob/main/DEPLOYMENT.md#ai-chat)
here for help or contact the super user of your instance.

The Assistant is available on app.openfn.org, with usage credits subject to your
project's plan. See [openfn.org/pricing](https://www.openfn.org/pricing) or
contact [support@openfn.org](mailto:support@openfn.org) for more information on
paid plans for usage of OpenFn's cloud-hosted platform.

:::

## About the Assistant

The AI Assistant is a custom multi-agent system. It has access to OpenFn
documentation and implementation best practices, so it can answer your questions 
in the context of the platform.

All chat sessions are shared between all users of the project. You can start a
new chat session at any time, or open an old one.

You can configure whether your workflow code, run logs and input/output data are
sent to the model. Sharing this context allows the Assistant to give a more
contextually relevant answer, but consider carefully whether the data is
confidential or sensitive before sending it.

## A Note on Responsible AI Usage

The AI Assistant leverages Large Language Models. Like other
chatbots, its capabilities are impressive, but imperfect.

Remember that ultimately, all responses are automatically generated and YOU,
the human in charge, are responsible for how its output is used. You should
consider all responses critically and verify the output where possible.

**You can read more about our approach to AI in our
[Responsible AI Policy](https://www.openfn.org/ai).**

## How to access the AI Assistant

You can access the AI Assistant from either the workflow canvas or an individual
job step, by clicking on the speech bubble icon in the top right corner.

If there has been a prior chat session, you'll be presented with a list of them.
Click on one to open up that chat history.

To start a new session, type a question in the text area at the bottom of the
Assistant. Click on the `Send` button to send your question. The Assistant will
return a response in the chat interface.

You can close a chat session by clicking the `(X)` button on the top right of
the chat interface, which will take you back to the list of sessions.

## Data scrubbing

If you choose to send the Assistant your run input/output data, the Assistant is
sent the shape of your data, not the data itself. Every value is replaced by the
kind of thing it was. Field names are kept, because the Assistant needs them to
talk about your data usefully. Note that run logs and code are not scrubbed.

So if a step ran on this:

```json
{
  "patient": {
    "name": "Amina Yusuf",
    "dob": "2000-01-01",
    "phone": "+123456789",
    "visits": 3,
    "consented": true,
    "notes": null
  },
  "records": [
    { "id": "R-001", "weight": 61.5 },
    { "id": "R-002", "weight": 58.0 },
    { "id": "R-003", "weight": 70.2 },
    { "id": "R-004", "weight": 64.1 }
  ]
}
```

this is what the Assistant receives:

```json
{
  "patient": {
    "consented": "boolean",
    "dob": "string",
    "name": "string",
    "notes": "null",
    "phone": "string",
    "visits": "number"
  },
  "records": [
    { "id": "string", "weight": "number" },
    { "id": "string", "weight": "number" },
    "...2 more"
  ]
}
```

The name, the date of birth and the phone number never leave OpenFn. The
Assistant can still see that there is a patient with a phone number and four
records, which is usually all it needs to help you fix your job code.

### A few other things it does

- Long lists are cut to two examples. The rest are counted, as `"...2 more"`
  above.
- Very wide records are cut to 50 fields. The rest are counted under a `"..."`
  field.
- If a step's data was already deleted by your project's retention policy, the
  Assistant is told `[erased by this project's retention policy]` instead. It is
  told when data was skipped rather than left to assume it saw everything.
- Very large data is not sent. You will see `[too large to summarise]`.

### The one thing to know

Field names are sent exactly as they are. If your data uses a person's name or a
national ID number as a field name, that name or number will be sent. Values are
safe; keys are not.

:::caution Feedback or Questions about the Assistant?

We welcome your questions or feedback on
[community.openfn.org](https://community.openfn.org/), or contact
[support@openfn.org](mailto:support@openfn.org) with private queries.

:::
