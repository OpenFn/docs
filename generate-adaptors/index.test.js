const test = require('node:test');
const assert = require('node:assert');

const {
  escapeMdx,
  collectAnchors,
  fixFunctionLinks,
  slugify,
} = require('./index.js');

// Silence the drop warnings, and let tests assert on them
function captureWarnings(fn) {
  const original = console.warn;
  const warnings = [];
  console.warn = message => warnings.push(message);
  try {
    return { result: fn(), warnings };
  } finally {
    console.warn = original;
  }
}

const fix = (content, name = 'test') =>
  captureWarnings(() => fixFunctionLinks(content, name)).result;

test('slugify matches the ids docusaurus derives from headings', () => {
  assert.equal(slugify('get'), 'get');
  assert.equal(slugify('  Submit Birth Notification  '), 'submit-birth-notification');
  assert.equal(slugify('http.get'), 'httpget');
});

test('collectAnchors finds explicit {#id} anchors', () => {
  const anchors = collectAnchors('### http.get {#http_get}');
  assert.ok(anchors.has('http_get'));
});

test('collectAnchors finds ids docusaurus generates for plain headings', () => {
  const anchors = collectAnchors('### get\n\nsome prose\n\n## Post Request');
  assert.ok(anchors.has('get'));
  assert.ok(anchors.has('post-request'));
});

test('collectAnchors ignores headings inside code blocks', () => {
  const anchors = collectAnchors('```sh\n# not-a-heading\n```\n\n### real');
  assert.ok(anchors.has('real'));
  assert.ok(!anchors.has('not-a-heading'));
});

test('rewrites a namespaced function link to its explicit anchor', () => {
  const content = 'Use [http.get](http.get) instead.\n\n### http.get {#http_get}';
  assert.match(fix(content), /\[http\.get\]\(#http_get\)/);
});

// regression: `### get` renders as id="get", so this link works and must survive
test('keeps a link that targets a plain heading', () => {
  const content = 'See [get](get) for details.\n\n### get\n\nMake a GET request.';
  assert.match(fix(content), /\[get\]\(#get\)/);
});

test('drops a link with no matching anchor, and warns', () => {
  const content = 'See [missing](missing) for details.\n\n### get';
  const { result, warnings } = captureWarnings(() =>
    fixFunctionLinks(content, 'commcare')
  );

  assert.match(result, /See missing for details\./);
  assert.equal(warnings.length, 1);
  assert.match(warnings[0], /commcare/);
  assert.match(warnings[0], /\[missing\]\(missing\)/);
});

test('leaves links that already resolve untouched', () => {
  const untouched = [
    '[docs](https://openfn.org)',
    '[docs](http://openfn.org)',
    '[docs](/adaptors/packages/commcare-docs)',
    '[docs](#http_get)',
    '[docs](./sibling)',
    '[docs](../parent)',
    // a hyphen is not part of a bare identifier, so sibling pages are safe
    '[docs](commcare-docs)',
  ];

  for (const link of untouched) {
    assert.equal(fix(link), link, `expected ${link} to be left alone`);
  }
});

test('leaves bare links inside code samples alone', () => {
  const fenced = '```js\n[http.get](http.get)\n```\n\n### http.get {#http_get}';
  assert.equal(fix(fenced), fenced);

  const inline = 'Call `[http.get](http.get)` here.\n\n### http.get {#http_get}';
  assert.equal(fix(inline), inline);
});

test('rewrites prose around a code sample in the same document', () => {
  const content = [
    'Use [http.get](http.get) instead.',
    '',
    '```js',
    'http.get("case/v1");',
    '```',
    '',
    '### http.get {#http_get}',
  ].join('\n');

  const result = fix(content);
  assert.match(result, /Use \[http\.get\]\(#http_get\) instead\./);
  assert.match(result, /http\.get\("case\/v1"\);/);
});

// the shape that broke the build
test('handles the commcare deprecation notices', () => {
  const content = [
    '### get',
    '',
    "~~***This function only works against CommCare's legacy v0.5 API.",
    'For current CommCare APIs, use [http.get](http.get) instead.***',
    '',
    '### http.get {#http_get}',
    '',
    '### http.post {#http_post}',
    '',
    'Also see [http.post](http.post) and [get](get).',
  ].join('\n');

  const result = fix(content, 'commcare');
  assert.match(result, /\[http\.get\]\(#http_get\)/);
  assert.match(result, /\[http\.post\]\(#http_post\)/);
  assert.match(result, /\[get\]\(#get\)/);
});

// should not silently stop finding anchors if the transform order ever changes
test('finds explicit anchors whether or not the braces are escaped', () => {
  const raw = 'Use [http.get](http.get).\n\n### http.get {#http_get}';
  const escaped = 'Use [http.get](http.get).\n\n### http.get \\{#http_get\\}';

  assert.match(fix(raw), /\[http\.get\]\(#http_get\)/);
  assert.match(fix(escaped), /\[http\.get\]\(#http_get\)/);
});

test('escapeMdx still escapes braces outside code blocks only', () => {
  assert.equal(escapeMdx('a {b} c'), 'a \\{b\\} c');
  assert.equal(escapeMdx('`{b}`'), '`{b}`');
  assert.equal(escapeMdx('```\n{b}\n```'), '```\n{b}\n```');
});
