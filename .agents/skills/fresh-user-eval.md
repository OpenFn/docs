# Skill: Fresh-user evaluation

Read one page as a new user and try to do what it says. Run after the
accuracy check.

1. **Read cold.** Assume you know webhooks, APIs, JSON, and a terminal, and
   nothing about OpenFn. Do not follow links or read git history. Write one
   sentence on what the page teaches and for whom. If you cannot, that is a
   finding.
2. **Do the task.** Procedural page: perform each step, confirming web app
   elements exist in `OpenFn/lightning` and running CLI commands. Conceptual
   page: explain it back in two sentences and answer three likely user
   questions from the page alone. Reference page: use three entries from their
   descriptions. Record a finding wherever you guessed an undefined term, got
   stuck, hit an ambiguous sentence, needed an unstated prerequisite, found
   steps out of order, or could not tell what success looks like.
3. **Verify guesses** against code or neighbouring pages. Wrong guesses are
   strong findings; right guesses still count.

Classify: *fix* for a single verified fact that fits one sentence;
*suggestion* for a new subsection, example, or rewrite; *question* when the
answer depends on audience or is unknown. Do not fix tone.

Score, whole numbers, one sentence each:

- **Readability 1 to 5**: 5 understood in one read; 3 gist only; 1 needs
  outside knowledge.
- **Completeness 1 to 5**: 5 task done from this page alone; 3 done after
  links or guesses; 1 page does not describe the task.

Output: teaches, audience, what you attempted, findings in the shared format,
both scores. Do not evaluate generated adaptor pages or write new pages.
