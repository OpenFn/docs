# Skill: Fresh-user evaluation

Read a docs page the way a new user would, with no prior knowledge of OpenFn,
and try to do what the page says. Report every place you had to guess.

This skill is about the reader's experience, not correctness. Correctness is
the accuracy-check skill (`.agents/skills/accuracy-check.md`). Run this skill
after accuracy so you are evaluating a page whose claims are already known
to be true.

## Inputs

- One docs page (markdown source). Evaluate one page at a time even when the
  section has many.
- Read access to the relevant product repo(s) for verifying that what you
  eventually figured out is actually right. Use the repo map in
  `.agents/skills/accuracy-check.md` to find the right one.
- Nothing else. In particular, do not read neighbouring pages during the
  first pass.

## Process

### Pass 1: read cold

1. Clear your assumptions. You know what a webhook, an API, JSON, and a
   terminal are. You do not know what a Step, a work order, a dataclip, an
   adaptor, or the Canvas is unless this page tells you.
2. Read the page top to bottom once, without following any links.
3. Write down, in one sentence, what task or concept the page is teaching.
   If you cannot, that is your first finding.
4. Write down who the page seems to be for (non-technical project manager,
   implementer building a workflow in the web app, developer using the CLI,
   self-hoster). If the page switches audience halfway, note where.

### Pass 2: attempt the task

Follow the page as literally as you can.

- For procedural pages ("Configure a Step", "Deploy with the CLI"): perform
  each step. Where it needs the web app, walk the route in the Lightning
  source (`lib/lightning_web/live/`) or use a local instance if one is
  available, and confirm the named button or menu exists where the page says.
  Where it needs the CLI, run the commands.
- For conceptual pages ("State", "Key Concepts"): after reading, try to
  explain the concept back in two sentences and then answer three questions a
  new user would ask. If you cannot answer them from the page, record what is
  missing.
- For reference pages (tables of options, status codes): pick three entries
  and check you could use each one from the description alone.

At every point where you had to stop, record a finding. Triggers:

- **Guess**: the page uses a term, path, or name it never defined, and you
  had to infer it. Record the term and what you inferred.
- **Stuck**: the next step depends on something the page did not tell you
  (where a button is, what value to enter, which page to be on first).
- **Ambiguity**: a sentence has two readings and they lead to different
  actions.
- **Missing prerequisite**: you needed an account, a credential, an installed
  tool, or an earlier setup step the page assumes.
- **Order**: the steps are listed in an order that does not work if followed
  literally.
- **Unverifiable outcome**: the page tells you to do something but not what
  success looks like.
- **Dead end**: a link you needed to follow to continue (after Pass 1 you may
  follow links) went to a page that does not answer the question.

### Pass 3: verify your guesses

For each Guess and Ambiguity, check the code or a neighbouring page to learn
the right answer. Record whether your guess was right. A wrong guess is
strong evidence the page needs the information; a right guess is weaker but
still a finding.

## Classify findings

- **fix**: the missing information is a single fact you have now verified
  (the menu path, the default value, the prerequisite command), and it fits in
  one sentence or one list item at a specific line. Apply it.
- **suggestion**: the page needs restructuring, a new subsection, an example,
  a screenshot, or a rewrite of more than a couple of sentences. Propose the
  text in the PR description. Do not apply.
- **question**: you could not determine the right answer from code, or the
  fix depends on which audience the page is for. Ask.

Do not "fix" tone or voice. Do not add content beyond what the finding needs.

## Scores

Give two scores after the findings. Whole numbers only.

**Readability (1 to 5)**: how easy the prose was to follow on the first pass.

- 5: read it once, understood everything, no re-reading.
- 4: one or two sentences needed re-reading; terminology mostly defined.
- 3: understood the gist but several undefined terms or long detours.
- 2: had to reconstruct the meaning from context repeatedly.
- 1: could not tell what the page was about without outside knowledge.

**Completeness (1 to 5)**: could a new user accomplish the task with only
this page?

- 5: yes, start to finish, including knowing when they are done.
- 4: yes, with one small guess that turned out right.
- 3: yes, but only after following links or guessing more than once.
- 2: no, a required step, prerequisite, or value is missing.
- 1: no, the page does not actually describe how to do the task.

Justify each score in one sentence that names the specific thing that cost
points.

## Output

```
Page: docs/<path>.md
Teaches: <one sentence>
Audience: <one phrase>; switches at L<line> if applicable
Attempted: <what you did, two or three sentences>

Findings:
[fix] docs/<path>.md:L<line> — guess — "<term>" never defined; inferred "<meaning>"; verified at <repo/path:line> — added "<sentence>"
[suggestion] docs/<path>.md:L<line> — stuck — step 4 says "select the credential" but no credential exists yet — propose inserting a "Before you begin" list: ...
[question] docs/<path>.md:L<line> — ambiguity — "the run" could mean the Run or the manual run button — which?

Readability: N/5 — <one sentence>
Completeness: N/5 — <one sentence>
```

Apply fixes, run Prettier on changed files, and confirm `yarn build` passes.
Put scores in the PR "Scores" table, suggestions and questions in their
sections.

## Do not

- Do not read the page's git history or the PR that introduced it before
  Pass 1. That is prior context a user would not have.
- Do not evaluate generated adaptor reference pages (`adaptors/packages/**`).
  Their readability is a JSDoc concern; if a hand-written overview page
  (`adaptors/<name>.md`) exists, evaluate that instead.
- Do not edit pages with `translation_review_status: human-reviewed`. Record
  suggested diffs.
- Do not write a new page. If the task cannot be done because the page does
  not exist, that is a finding for the gap analysis skill.
