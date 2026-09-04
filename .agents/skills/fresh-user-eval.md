# Skill: Fresh-user evaluation

Read a page as a new user would and try to do what it says. Report every place
you had to guess. Run this after the accuracy check so you are evaluating a
page whose facts are already right.

## Inputs

- One page at a time.
- Read access to the product repos, only for pass 3.

## Process

**Pass 1: read cold.** Assume you know what webhooks, APIs, JSON, and a
terminal are, and nothing about OpenFn. Read the page once without following
links. Write down in one sentence what it teaches and who it is for. If you
cannot, that is your first finding.

**Pass 2: do the task.** Follow the page literally.

- Procedural pages: perform each step. For web app steps, confirm the named
  button or page exists in `OpenFn/lightning` (`lib/lightning_web/live/`).
  For CLI steps, run the commands.
- Conceptual pages: explain the concept back in two sentences, then answer
  three questions a new user would ask, using only the page.
- Reference pages: pick three entries and check you could use each from its
  description alone.

Record a finding each time you: had to guess a term or path the page never
defined; got stuck because a step depends on something the page did not say;
hit a sentence with two readings; needed a prerequisite the page assumes;
found steps in an order that does not work; could not tell what success looks
like.

**Pass 3: verify your guesses.** Check the code or neighbouring pages. A
wrong guess is strong evidence the page needs the information. A right guess
is still a finding.

## Classify

- *Fix*: a single verified fact that fits in one sentence at a specific line.
- *Suggestion*: a new subsection, example, screenshot, or rewrite of more
  than a couple of sentences. Propose the text; do not apply.
- *Question*: you could not find the answer, or the fix depends on the
  intended audience.

Do not fix tone or voice. Do not add beyond what the finding needs.

## Scores

**Readability (1 to 5)**: 5 means understood on one read; 3 means got the
gist despite undefined terms; 1 means unintelligible without outside
knowledge.

**Completeness (1 to 5)**: could a new user finish the task with only this
page? 5 yes, including knowing they are done; 3 yes after following links or
guessing more than once; 1 the page does not describe how to do the task.

One sentence per score naming what cost points.

## Output

```
Page: docs/<path>.md
Teaches: <one sentence>. Audience: <phrase>.
Attempted: <two sentences>

[fix] docs/<path>.md:<line> — <what was missing> — added "<text>"
[suggestion] docs/<path>.md:<line> — <what was missing> — propose <text>
[question] docs/<path>.md:<line> — <ambiguity> — <options>

Readability: N/5 — <why>
Completeness: N/5 — <why>
```

## Do not

- Read the page's git history before pass 1.
- Evaluate generated adaptor pages. Evaluate `adaptors/<name>.md` instead.
- Edit human-reviewed translations. Suggested diffs only.
- Write a new page. A task with no page is a gap for `gap-analysis.md`.
