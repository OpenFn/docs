# House style

These rules apply to every page in `docs/`. Follow them when you write or edit a
page, and check against them when you review one.

## Pages and headings

- Every page has a `title` in its front matter.
- Start a page's sections at `##` and don't skip levels. Don't make heading text
  bold, and don't repeat the page title as the first heading.

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
- Code examples must be valid code. Check them before publishing.

## Wording and spelling

- Do not write plans with dates, like "will be sunsetted in 2025" unless asked
  for. They go out of date. Say what is true now.
- Put "the" before the name of a button, page or menu: "click the `Save`
  button", not "click `Save` button".
- Use American English spelling: "organization", "color", "behavior".
- It is spelled **adaptor**, never "adapter".
- Write these names with this capitalization in prose, headings and alt text:
  **JavaScript**, **Node.js**, **GitHub**, **OAuth**, **CommCare**, **Docker**,
  **Linux**, **Unix**, **macOS**. Leave code and file paths as they are.
- Use "e.g." to introduce an example and "i.e." to restate, never "ie". Put a
  comma after both, like "(e.g., a form submission)".
- Use the approved terms in `glossary.yml`. If a page uses one of the listed
  `variants`, replace it.
