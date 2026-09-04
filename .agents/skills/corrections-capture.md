# Skill: Corrections capture

When a human overrides agent output, turn the override into a rule so the same
correction is never needed twice. Capture the pattern, not the one-off.

## Triggers

| A human...                                          | Rule file                                    |
| --------------------------------------------------- | -------------------------------------------- |
| edits a machine-translated page                     | `glossary.yml` or `translation-rules.yml`    |
| marks a translation `human-reviewed`                | `translation-rules.yml` (mine the diff)      |
| reverts or rejects a lint fix or suggestion         | `style-exceptions.yml`                       |
| rewrites a section the fresh-user eval flagged      | `style-exceptions.yml`, if the pattern should not be flagged again |
| reverts an accuracy fix                             | No rule. Raise a *question* for the product team. |

Find candidates with `git log --no-merges -- i18n/` filtered to human
authors, `git log --grep=revert -i`, and review comments on the agent's PRs.

## Process

1. **Pair** the agent's change with the human's change
   (`git diff <agent-commit> <human-commit> -- <file>`). Discard pairs where
   the human change is unrelated.
2. **Extract the rule.** Ask in order:
   - Terminology? A word or phrase replaced in a way that applies everywhere.
     English page: add or correct a `glossary.yml` entry. Translated page
     where an English term was restored: add it with `translate: false`.
     Translated page where a non-product phrase was re-rendered: a
     `translation-rules.yml` entry with `kind: term`.
   - Translation pattern? Register, punctuation, UI label handling, a
     rendering to avoid: `translation-rules.yml` with the matching `kind`.
     Write the `instruction` so it applies without seeing the example.
   - Rejected lint finding? `style-exceptions.yml`, scoped as narrowly as the
     evidence supports: one page unless the reviewer said otherwise.
   - Factual disagreement? No rule. Record a *question*.

   If you cannot state the rule so that it applies to at least one other
   page, skip it.
3. **Write the rule** following the file's header schema. Fill `reason`
   (quote the review comment if there is one), `added_by` (the human's
   GitHub handle), `added_on`, and `source_pr`. No other personal data.
4. **Check for conflicts.** No duplicate glossary terms. No exception broad
   enough to disable a rule repo-wide. No contradictory translation rules
   for the same locale and phrase; keep the newer and flag the conflict.
5. **Apply retroactively where cheap.** New glossary variant: fix it across
   `docs/`. New translation rule: leave other pages for the next translate
   run.
6. **Open a PR** titled `rules: capture corrections from <PR or commit>`
   listing what was overridden, the rules added, and any questions. Rules
   take effect only after merge.

## Do not

- Capture typos or one-sentence rewordings as rules.
- Edit the human's change.
- Set `human-reviewed` on anything.
