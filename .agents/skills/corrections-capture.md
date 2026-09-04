# Skill: Corrections capture

When a human overrides agent output, record the general rule, not the fix.

| A human...                                  | Add to                                    |
| ------------------------------------------- | ----------------------------------------- |
| edits a machine translation                 | `glossary.yml` (restored English term) or `translation-rules.yml` (phrasing, register, punctuation, UI labels) |
| rejects or reverts a lint fix or suggestion | `style-exceptions.yml`, scoped to one page unless told otherwise |
| rewrites a section fresh-user eval flagged  | `style-exceptions.yml` if the pattern should not be flagged again |
| reverts an accuracy fix                     | nothing; raise a *question* for the product team |

Find candidates via human commits to `i18n/`, `git log --grep=revert -i`, and
review comments on agent PRs.

1. Diff the agent's change against the human's. Drop unrelated pairs.
2. State the rule so it applies to at least one other page. If you cannot,
   it is a one-off: skip it.
3. Write it per the file's header schema, with `reason` (quote the review
   comment if any), `added_by` (their GitHub handle), `added_on`, `source_pr`.
4. Check conflicts: no duplicate glossary terms, no repo-wide exception that
   disables a rule, no contradicting translation rules (keep the newer, flag
   it).
5. Apply cheap retroactive fixes (new glossary variants across `docs/`).
   Leave other translations for the next translate run.
6. Open a PR `rules: capture corrections from <source>` listing overrides,
   rules added, and questions. Rules apply only after merge.

Never edit the human's change. Never set `human-reviewed`.
