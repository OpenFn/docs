# House style

These rules apply to every page in `docs/`. Follow them when you write or edit a
page, and check against them when you review one.

## Writing

- Be concise. Say a thing once, clearly, then move on. Don't restate a point in
  a later section, a summary, or a second example.
- Start from what the reader wants to do, not from how the product works inside.
  Explain the mechanism only as far as the reader needs it.
- Explain a term before you use it, or don't use it. Prefer the reader's words
  ("step code") to internal ones ("source file", "stripping").
- Keep each page to its topic. If the reader needs another concept, give one
  sentence at most and link to the page that explains it.
- Document what users should do today. Leave out internal team processes,
  workarounds for features that don't work yet, and edge cases few users hit.
- Don't add sections for the sake of structure. Skip troubleshooting entries,
  reference tables, and "Next steps" lists unless each item earns its place. A
  list of related pages is "Related pages", not "Next steps".
- Don't copy lists that live in the product, like CLI flags. They go out of
  date. Point to the source instead, like `openfn compile --help`.
- Be confident. Write "You can install a new version over the old one", not "You
  should be able to".
- Avoid the habits of AI-generated text:
  - runs of short punchy sentences
  - claims about the page itself ("This is the most important thing on this
    page")
  - words that cheer the result ("Both exports survived")
  - filler before the point: "It's important to note", "Note that", "Keep in
    mind". Delete it and start with the point.
  - marketing words: "seamless", "powerful", "robust", "leverage", "streamline",
    "comprehensive"
  - "not just X, but Y", "Whether you're X or Y", and lists of three where two
    items would do
  - headings written as questions, like "What are cron jobs?"
  - bullet lists where a sentence would read better

## Pages and headings

- Every page has a `title` in its front matter.
- Start a page's sections at `##` and don't skip levels. Don't make heading text
  bold, and don't repeat the page title as the first heading.
- A heading says what the section covers without the reader needing the UI in
  front of them: "Async mode responds before start", not "Async (Before Start)".
- Don't open a page with a paragraph that lists its sections. The sidebar and
  table of contents already do that.

## Links

- Link to another docs page by its file path from the top of `docs/`, like
  `/deploy/portability.md`. Link to adaptor pages and articles by URL, starting
  with `/adaptors/` or `/articles/`. Never use relative links like
  `../deploy/portability.md`; they break the build once only one of the two
  pages is translated.
- Never link with the old site URLs, `/documentation/...` or
  `https://docs.openfn.org/...`. Use the file path. Remove tracking strings such
  as `?_gl=` from any URL.
- When the text names another docs page or section, make the name a link to it,
  like `[Manage Projects](/manage-projects/platform-mgmt.md)`. Do not format it
  as code; code formatting is for code and literal values.
- Link text names the page or section it goes to. Do not put quotes around it,
  and do not use "here" or "this" as link text.
- An email address in the text does not have to be a link. When it is one, use
  `mailto:support@openfn.org`, not `mailto://support@openfn.org`.

## Images

- Images live in `static/img/` and are linked as `/img/filename`, with alt text
  that says what the image shows. "Screenshot" does not count.
- Use as few screenshots as the page needs. Each one goes out of date when the
  app changes. Show the panel you're talking about, not the whole app.

## Formatting

- Leave a blank line after an admonition's opening line (`:::tip`, `:::note`,
  and so on) and before its closing `:::`. Without them, Prettier merges the
  text into the opening line and Docusaurus shows it as the title. Close an
  admonition with a bare `:::`, never `:::note` or similar, which opens a new
  one instead.
- Write the admonition type straight after the colons: `:::tip` or
  `:::tip Your title`, never `::: tip`. With a space there, Docusaurus does not
  make a callout and the page shows the colons as text.
- Emphasis markers sit right against the text: `**_like this_**`, not
  `**_like this _**`. With a space inside, the formatting does not show and the
  page prints the markers.
- Use admonitions sparingly, and keep the tone calm. Don't use `:::danger` or
  `:::caution` to make a point sound urgent. Give an admonition a title that
  says what it's about, like `:::warning There's no redirect on edit`.
- Don't make a list of one item. Write it as a sentence.
- Don't use em-dashes (—). Use a spaced hyphen ( - ), a comma, or two sentences.
- Don't use `<Tabs>` to show content the reader needs to compare, like job code
  and its output. Show them one after the other.

## Code examples

- Code examples must be valid code. Check them before publishing.
- Use realistic data. Don't name things "Test", and make sample keys and IDs
  look like the real format. Put the sample value in the code, not in a comment.
  Say when data is made up.
- Name variables for what they hold: `state.conditions`, not
  `state.conditionMappedData`; `diagnosis`, not `item`.
- Add a short comment above each operation that says what it does and why. Put
  notes about a line of code in a comment next to it, not in the prose.
- Keep examples to the point. One test shows how to write a test; five show
  nothing more.
- Job examples should tell a story the function reference can't: fetch some
  data, reshape it, send it on. A one-line example belongs in the function's own
  docs.

## Wording and spelling

- Do not write plans with dates, like "will be sunsetted in 2025" unless asked
  for. They go out of date. Say what is true now.
- Put "the" before the name of a button, page or menu: "click the `Save`
  button", not "click `Save` button".
- Use American English spelling: "organization", "color", "behavior".
- It is spelled **adaptor**, never "adapter".
- Write these names with this capitalization in prose, headings and alt text:
  **JavaScript**, **TypeScript**, **Node.js**, **GitHub**, **OAuth**,
  **CommCare**, **Docker**, **Linux**, **Unix**, **macOS**. Leave code and file
  paths as they are.
- "Set up" is the verb, "setup" the noun: "set up a credential", "check your
  setup".
- Use product names in full and the same way each time: "the AI Assistant", "the
  Responsible AI Policy". Call a part of the app by the name the rest of the
  docs use for it.
- Use "e.g." to introduce an example and "i.e." to restate, never "ie". Put a
  comma after both, like "(e.g., a form submission)".
- Use the approved terms in `glossary.yml`. If a page uses one of the listed
  `variants`, replace it.
