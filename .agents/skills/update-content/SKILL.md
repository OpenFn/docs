---
name: update-content
description:
  Edits English docs pages and opens a PR, working from direct instructions or
  from an identify-gaps report. Use when asked to fix, update, or improve the
  docs.
disable-model-invocation: true
---

# Update content

Change docs pages and open a PR.

## What to change

- **You were given instructions.** Do what they say.
- **You were given a report from `identify-gaps/SKILL.md`.** Make every Must
  change. Make Should changes where the right text is clear. Leave Could changes
  unless someone asked for them. Anything you did not do goes in the PR
  description with a reason.
- **You were only told to improve the docs.** Run `identify-gaps/SKILL.md`
  first, then work from its report here. One loop, one PR.

## How to change it

- Follow the house style in `AGENTS.md`.
- Keep each edit small. Match the page's voice and structure. Do not rewrite a
  page and call it a fix.
- Only write a new page or section if the report or the person asked for it.
- If the docs and the code disagree and you cannot tell which is right, ask.

## Finish

Stop when you are done or reach 20 changed files. If work is left, list it in
the PR for the next run. Run Prettier on the files you changed, then build the
site as CI does, which fails on broken links:

```bash
yarn generate-library
yarn generate-adaptors
yarn build
```

Open a PR using the template in `.github/` and tick "I have used Claude Code".
Say what changed, what you left and why, and any questions. If the work came
from a report, paste the report in, collapsed.

Translations are separate. See `translate/SKILL.md`.
