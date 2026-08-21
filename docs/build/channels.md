---
title: Channels
sidebar_label: Channels
---

Channels turn OpenFn into a **reverse proxy**: a secure middleman between two
systems. Instead of connecting a client application directly to a destination
service, the client sends its requests to OpenFn, and OpenFn forwards them on,
handling authentication and logging every request along the way.

```
Mobile App  →  OpenFn Channel  →  Health Registry
(client)       (the middleman)    (destination)
```

You get instant visibility into everything that flows through, without writing
any workflow code. Unlike workflows, Channels are a pure _pass-through_: OpenFn
does not transform the data, it routes, secures, and observes it.

Channels are designed for organisations that need a proxy layer for security,
observability, and access control on data exchanges, such as health information
exchanges that have historically used a standalone tool like OpenHIM for this
purpose. Channels provide that core reverse proxy functionality natively inside
OpenFn.

:::tip Experimental Feature

Channels are currently an experimental feature. To use them, enable
**Experimental Features** on your
[user profile](../manage-users/user-profile.md) page. If you don't see a
`Channels` item in your project sidebar, this flag is the reason.

:::

## How it works

When a client sends an HTTP request to your channel's proxy URL, OpenFn:

1. Receives the request at `/channels/{channel-id}/{path}`
2. Looks up the channel and checks that it is enabled
3. Authenticates the client, if client credentials are configured
4. Forwards the request to `{destination-url}/{path}`, preserving the method,
   body, headers, and query parameters
5. Adds `x-forwarded-for`, `x-forwarded-host`, `x-forwarded-proto`, and
   `x-request-id` headers so the destination can trace the request
6. Attaches an `Authorization` header for the destination, if a destination
   credential is configured
7. Streams the destination's response directly back to the client
8. Logs the request under `History` → `Channel Logs`

All standard HTTP methods are supported: `GET`, `POST`, `PUT`, `PATCH`,
`DELETE`, and more.

For security, OpenFn never forwards cookies to the destination, and any
credentials the client used to authenticate _to OpenFn_ (the `Authorization`
header for Basic Auth, or the `x-api-key` header for API keys) are stripped
before the request is passed on.

## Before you start

You need:

- The **Experimental Features** flag enabled on your user profile
- A **project** where you have the `Owner`, `Admin`, or `Editor`
  [role](../manage-projects/user-roles-permissions.md) (Viewers can see channels
  and their logs, but cannot create or change them)
- The **URL of the destination service** you want to proxy to (a public API like
  `https://hacker-news.firebaseio.com/v0` works great for testing)

## Step 1: Set up credentials (optional)

Channels use two kinds of credentials, and both are optional:

- **Client credentials** control who can send requests _to your channel_. They
  are the same [webhook auth methods](../manage-projects/webhook-auth.md) used
  to secure webhook triggers (Basic HTTP Authentication or API Key
  Authentication) and are managed under `Webhook Security` in your project
  settings.
- A **destination credential** is how OpenFn authenticates _to the destination
  service_. It is a regular [project credential](./credentials.md), and OpenFn
  uses it to build the `Authorization` header on every forwarded request.
  Channels currently support these credential types:

| Credential type | Header sent to the destination                        |
| --------------- | ----------------------------------------------------- |
| HTTP            | `Bearer` token, or Basic Auth (username and password) |
| DHIS2           | `ApiToken`, or Basic Auth (username and password)     |
| OAuth           | `Bearer` token, refreshed automatically by OpenFn     |

:::tip

Skip this step entirely if you just want to test against a public endpoint; no
credentials needed.

:::

## Step 2: Create a channel

1. Go to your project
2. Click `Channels` in the left sidebar
3. Click `New Channel`
4. Fill in the form:

| Field                  | What to put                                                                                                                            |
| ---------------------- | -------------------------------------------------------------------------------------------------------------------------------------- |
| Name                   | A label so you can identify this channel (must be unique within the project)                                                           |
| Enabled                | Must be toggled on for the channel to accept requests                                                                                  |
| Destination URL        | The base URL of the service OpenFn will forward requests to                                                                            |
| Destination Credential | How OpenFn authenticates with the destination service (leave as `None` if the destination is public)                                   |
| Client Credentials     | Tick the webhook auth methods clients can use to access this channel (leave unticked to allow unauthenticated requests during testing) |

5. Click `Save`

Once saved, your channel appears in the Channels list with its **proxy URL**.
Click the URL to copy it to your clipboard. It looks like:

```
https://your-openfn-instance.com/channels/{channel-id}
```

## Step 3: Send a request through the channel

Send an HTTP request to your channel's proxy URL, appending whatever path you
want to hit on the destination:

```
https://your-openfn-instance.com/channels/{channel-id}/{path}
```

OpenFn forwards it to `{destination-url}/{path}`.

### Example using curl

Say your channel's destination URL is `https://hacker-news.firebaseio.com/v0`.
To fetch a Hacker News story through your channel:

```bash
curl https://app.openfn.org/channels/{channel-id}/item/8863.json
```

OpenFn receives the request, forwards it to
`https://hacker-news.firebaseio.com/v0/item/8863.json`, and returns the response
back to you.

### More examples

**POST with a body:**

```bash
curl -X POST https://app.openfn.org/channels/{channel-id}/patients \
  -H "Content-Type: application/json" \
  -d '{"patient_id": "123", "status": "admitted"}'
```

**With query parameters:**

```bash
curl "https://app.openfn.org/channels/{channel-id}/patients?status=admitted"
```

**With a client credential** (if you configured one):

```bash
# Basic Auth
curl -u username:password https://app.openfn.org/channels/{channel-id}/patients

# API key
curl -H "x-api-key: your-api-key" https://app.openfn.org/channels/{channel-id}/patients
```

## Step 4: View the logs

Every request through a channel is logged.

1. Go to your project's `History` page
2. Click the `Channel Logs` tab
3. You'll see each request listed with its Request ID, request path, channel
   name, start time, status, and any error message

Click a request to open its full detail page, showing the request and response
headers and body previews, timing information, and the channel configuration
that was in effect when the request was made. Sensitive headers (like
`Authorization`) are redacted in the logs.

Each request has one of these statuses:

| Status  | Meaning                                                      |
| ------- | ------------------------------------------------------------ |
| Pending | The request is still in flight                               |
| Success | The destination responded with a `2xx` status code           |
| Failed  | The destination responded with a `4xx` or `5xx` status code  |
| Timeout | The destination did not respond in time                      |
| Error   | The request could not be completed (e.g. a connection error) |

If you have multiple channels, use the **Channel** filter to narrow the list to
one channel. You can also jump straight to a channel's filtered logs by clicking
its **Requests** count or **Last Activity** on the Channels page.

:::info

Whether request and response payloads are stored follows your project's
[Data Storage](../manage-projects/io-data-storage.md) settings. If your project
doesn't store I/O data, channel request metadata is still logged, but the
payloads are wiped.

:::

## Security considerations

- The proxy endpoint is **publicly reachable**. If no client credentials are
  configured, anyone who knows the channel URL can send requests through it.
  Always configure client credentials for production channels.
- Toggling a channel to **disabled** immediately stops it accepting requests
  (clients receive a `404`).
- Every request is recorded against a snapshot of the channel's configuration at
  the time, so you have an audit trail even after the channel changes.
- A channel with request history cannot be deleted, because its history must be
  retained; disable it instead.

## Limitations

- Channels proxy HTTP(S) traffic only; raw TCP or TLS passthrough is not
  supported
- The request path is forwarded as-is; path transformation is not supported
- ATNA auditing is not supported

## Troubleshooting

| Problem                                         | Likely cause                                                                   | Fix                                                                                    |
| ----------------------------------------------- | ------------------------------------------------------------------------------ | -------------------------------------------------------------------------------------- |
| `404` on the channel URL                        | The channel is disabled, or the channel ID is wrong                            | Check that the channel is enabled and the ID matches                                   |
| `401` on the channel URL                        | Client credentials are configured and your request doesn't match any           | Send the right credentials with your request, or untick the client credentials to test |
| `502` on the channel URL                        | OpenFn couldn't use the destination credential (e.g. it needs reauthorization) | Check the destination credential, and the error message in `Channel Logs`              |
| Request goes through but the destination errors | The destination URL or path is wrong                                           | Double-check the destination URL and the path you're appending                         |
| No `Channels` item in the sidebar               | The Experimental Features flag is off                                          | Enable `Experimental Features` on your user profile                                    |

## Quick reference

| Thing                         | Where to find it                                          |
| ----------------------------- | --------------------------------------------------------- |
| Create/manage channels        | `Project` → `Channels`                                    |
| Proxy URL                     | Click to copy from the Channels list, or open the channel |
| Proxy endpoint pattern        | `https://{instance}/channels/{channel-id}/{path}`         |
| View logs                     | `Project` → `History` → `Channel Logs` tab                |
| Filtered logs for one channel | Click the `Requests` count on the Channels page           |
| Client credentials            | `Project Settings` → `Webhook Security`                   |
| Destination credentials       | `Project Settings` → `Credentials`                        |
