send({
  from: 'you@domain.com',
  to: $.data.form.submission.respondantEmail,
  subject: 'Thanks for completing our survey.',
  text: 'Your message goes here.',
});
