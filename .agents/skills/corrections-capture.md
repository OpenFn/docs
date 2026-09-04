# Skill: Corrections capture

When a human overrides something the agent produced, turn the override into a
rule so the same correction never has to be made twice. Capture the general
pattern, not the specific fix.

## Triggers

Run this skill when any of these happen:

| Trigger                                                             | Where you see it                                                                                     | Likely rule file            |
| ------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- | --------------------------- |
| A human edits a machine-translated page                             | A commit or PR touching `i18n/**` by a human author, or a review comment changing translated text    | `glossary.yml` or `translation-rules.yml` |
| A human sets `translation_review_status: human-reviewed`            | Front matter change in `i18n/**`                                                                     | `translation-rules.yml` (mine the diff between machine and reviewed versions) |
| A human reverts or rejects a lint fix                               | A review comment on a lint commit, a follow-up commit undoing it, or a "won't fix" on a suggestion   | `style-exceptions.yml`      |
| A human rewrites a section the fresh-user eval flagged              | A commit changing lines the eval reported, in a way different from the eval's proposal              | `style-exceptions.yml` (if the eval's pattern should not be flagged) or a note in the PR |
| A human rejects an accuracy fix                                     | Revert or review comment                                                                             | Usually a **question** for the product owner, not a rule |

## Inputs

- The agent's original output: the commit, PR diff, or finding text.
- The human's override: the later commit, the review comment, or the edited
  file.
- The three rule files at the repo root.

Find candidates with:

```bash
# Human commits to translated pages since the last agent commit
git log --format='%H %an %s' --no-merges -- i18n/ | grep -v -i 'docs-agent\|translate(' | head

# Reverts of agent commits
git log --format='%H %s' --grep='Revert' --grep='revert' -i | head

# PR review threads: use the GitHub tools to list review comments on the
# agent's PRs and filter for "changes requested" or comments on lines the
# agent changed.
```

## Process

### 1. Pair the agent output with the human edit

For each candidate, produce a minimal before/after:

```bash
git diff <agent-commit> <human-commit> -- <file>
```

Discard pairs where the human change is unrelated to what the agent did
(a new paragraph, an unrelated typo fix).

### 2. Extract the general rule

Ask, in order:

1. **Is it terminology?** The human replaced one word or short phrase with
   another, and the same replacement would apply anywhere the phrase occurs.
   - In an English page: add or extend a `glossary.yml` entry. If the human
     restored a spelling the lint changed, the lint's target was wrong;
     correct `variants` and `term` accordingly.
   - In a translated page where the human restored an English term: add the
     term to `glossary.yml` with `translate: false`.
   - In a translated page where the human changed how a phrase is rendered
     and the phrase is not a product term: add a `translation-rules.yml`
     entry with `kind: term`.

2. **Is it a translation pattern?** The change is about register (tú/usted,
   vous/tu), punctuation, how UI labels are rendered, how admonition titles
   are handled, sentence structure, or a rendering to avoid. Add a
   `translation-rules.yml` entry with the matching `kind`. Write the
   `instruction` so a translator who has never seen the example would apply
   it correctly.

3. **Is it a rejected lint finding?** The human undid a lint change or said
   "no" to a suggestion. Add a `style-exceptions.yml` entry. Scope it as
   narrowly as the evidence supports: one page if the rejection was about
   that page's content, a directory if the reviewer said "we do this
   throughout X", the whole repo only if they said so.

4. **Is it a style or phrasing preference** that is not a lint rule (the
   human prefers "select" to "click", or wants imperative headings)? Add it
   to `style-exceptions.yml` under the rule id `terminology` or
   `heading-case` with a `match`, and also record the preferred form in
   `glossary.yml` if it is a word-level preference. If it fits neither
   schema, add a `# NOTE:` comment at the top of `style-exceptions.yml`
   describing the preference and open a **question** to extend the schema.

5. **Is it a disagreement about facts** (the human reverted an accuracy
   fix)? Do not write a rule. Record a **question** in the PR: "Accuracy
   check found X at repo/path:line, reviewer restored Y. Which is right?"
   Product questions go to Brandon's team.

A single human edit can yield more than one rule. A single rule should cover
every future instance of the pattern, so prefer "UI button labels match the
French UI strings in OpenFn/lightning" over "Save and Run → Enregistrer et
exécuter" alone. Record the specific example in `example_source` and
`example_target` and the general rule in `instruction`.

### 3. Write the rule

Append to the relevant file following its header schema. Always fill in:

- `reason`: one sentence, in your words, of why the human made the change.
  If the human left a review comment, quote it.
- `added_by`: the human's GitHub handle (the person whose edit you are
  capturing, not you).
- `added_on`: today's date, ISO format.
- `source_pr`: the PR or commit where the override happened.

Do not add PII beyond a GitHub handle. Do not paste support-ticket text.

Check the file still parses:

```bash
node -e 'const y=require("js-yaml"); for (const f of ["glossary.yml","style-exceptions.yml","translation-rules.yml"]) y.load(require("fs").readFileSync(f,"utf8")); console.log("ok")'
```

(`js-yaml` ships with Docusaurus, so it is in `node_modules`.)

### 4. Check for conflicts

- A new `glossary.yml` entry must not duplicate an existing `term` or
  appear in another entry's `variants`. Merge instead.
- A new `style-exceptions.yml` entry must not silence a rule so broadly that
  the lint stops working (`rule: internal-link`, `scope: "**"`, no `match`
  is never acceptable). If the human asked for that, record it as a
  **question**.
- A new `translation-rules.yml` entry must not contradict an existing rule
  for the same locale and `source`. If it does, keep the newer one and
  record the conflict in the PR for the reviewer to confirm.

### 5. Apply retroactively where cheap

- New glossary term: grep `docs/` for variants and fix them (that is a normal
  lint fix). Grep `i18n/` for translated occurrences of a now-protected term
  and list them under "Also touched" or as a follow-up if the count is
  large.
- New style exception: nothing to apply.
- New translation rule: do not retranslate other pages now. The next
  translate run will pick up the rule.

### 6. Open a PR

One PR per capture run, titled `rules: capture corrections from <PR or
commit>`. Body:

```markdown
## What was overridden

- <agent commit or PR> changed <file> L<line>: "<agent text>"
- <human> changed it to: "<human text>" (<commit or review link>)

## Rules added

- glossary.yml: `<term>` ...
- translation-rules.yml: <locale> <kind> "<instruction>"
- style-exceptions.yml: <rule> on <scope> — <reason>

## Retroactive changes

- <files touched, if any>

## Questions

- <anything that looked like a factual disagreement>
```

Tick "I have used Claude Code" in the AI Usage section of the PR template.
Rules take effect only after this PR is merged; do not rely on them in the
same run.

## Do not

- Do not capture a one-off (a typo the human fixed, a rewording specific to
  one sentence) as a rule. If you cannot state the rule in a form that
  would apply to at least one other page, skip it.
- Do not edit the human's change itself.
- Do not mark anything `human-reviewed`. Only humans set that field.
