# Fresh-user evaluation

Read one page as if you had never heard of OpenFn, then try to do what it
says. The point is to find where a newcomer would get lost. Run this after the
accuracy check, so the facts are already right.

## Steps

1. **Read it cold.** Pretend you know what an API, a webhook, JSON, and a
   terminal are, and nothing else. Do not follow links. Do not look at the
   page's history. When you finish, write one sentence saying what the page
   teaches and who it is for. If you cannot, that is your first finding.

2. **Try to do it.**
   - If it is a how-to, follow the steps. For anything in the web app, check
     the button or screen really exists in the Lightning code. For CLI steps,
     run the commands.
   - If it explains a concept, explain it back in two sentences. Then think of
     three questions a newcomer would ask and see if the page answers them.
   - If it is a reference table, pick three rows and see if you could use each
     one from its description alone.

   Every time you have to guess what a word means, cannot find what the page
   points at, read a sentence two ways, need something the page assumed you
   had, find the steps in the wrong order, or cannot tell whether you
   succeeded, write it down.

3. **Check your guesses** against the code or nearby pages. If you guessed
   wrong, the page definitely needs that information. If you guessed right, it
   probably still does.

## Sorting the findings

- **Fix**: one missing fact that fits in one sentence and that you have
  verified. Add it.
- **Suggestion**: anything bigger, such as a new subsection, an example, or a
  rewrite. Propose the text but do not add it.
- **Question**: you could not find the answer, or it depends on who the page
  is for.

Do not touch the tone or voice.

## Scores

Give two scores from 1 to 5, each with a one-sentence reason.

- **Readability.** 5: understood everything on one read. 3: got the gist but
  had to work at it. 1: could not follow it without outside knowledge.
- **Completeness.** 5: could finish the task from this page alone and knew
  when I was done. 3: got there, but only by following links or guessing.
  1: the page does not actually say how to do it.

## What to report

What the page teaches, who it is for, what you tried, your findings in the
standard format, and the two scores.

Do not evaluate the generated adaptor pages. Do not write a new page; if the
page a user needs does not exist, that is a job for gap analysis.
