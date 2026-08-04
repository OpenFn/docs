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

![AI Assistant](/img/ai-assistant.webp)

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

:::caution Feedback or Questions about the Assistant?

We welcome your questions or feedback on
[community.openfn.org](https://community.openfn.org/), or contact
[support@openfn.org](mailto:support@openfn.org) with private queries.

:::
