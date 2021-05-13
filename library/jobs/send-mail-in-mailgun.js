send(
  fields(
    field('from', 'you@domain.com'),
    field('to', dataValue('form.submission.respondantEmail')),
    field('subject', 'Thanks for completing our survey.'),
    field('text', 'Your message goes here.')
  )
);
