# Corrections capture

When a human changes something the agent did, do not treat it as a one-off.
Work out the general rule behind it and write that rule down, so the agent
gets it right next time.

## When to run this

- A human edited a machine translation.
- A human marked a translation as human-reviewed.
- A human undid or rejected a lint fix or suggestion.
- A human rewrote a section that the fresh-user evaluation flagged.

Look for these in commits to `i18n/` by humans, in reverts, and in review
comments on the agent's PRs.

## Steps

1. **Put the two versions side by side**: what the agent wrote and what the
   human changed it to. Ignore changes that have nothing to do with the
   agent's work.

2. **Find the rule.** Ask: would this same correction apply somewhere else?
   If you cannot describe it in a way that would apply to at least one other
   page, it is a one-off. Skip it.

3. **Put the rule in the right file.**
   - The human changed a word or phrase, and would want it changed everywhere:
     `glossary.yml`. If they put an English term back into a translation, add
     that term with `translate: false`.
   - The human changed how something is phrased in a translation (tone,
     punctuation, how button names are handled): `translation-rules.yml`.
   - The human rejected a lint finding: `style-exceptions.yml`. Scope it to
     the one page unless they said it applies more widely.
   - The human reverted an accuracy fix: no rule. That is a factual dispute.
     Raise it as a question for the product team.

   Each file explains its own format at the top. Always record why the human
   made the change (quote their review comment if there is one), their GitHub
   handle, the date, and the PR.

4. **Check for clashes.** Do not add a glossary term that already exists. Do
   not add an exception so broad it switches a lint rule off everywhere. If a
   new translation rule contradicts an old one, keep the new one and flag it.

5. **Apply it where cheap.** A new glossary spelling can be fixed across
   `docs/` right away. Leave other translations for the next translate run.

6. **Open a PR** listing what was overridden, the rules you added, and any
   questions. Rules only take effect once it is merged.

Never edit the human's change. Never mark anything human-reviewed yourself.
