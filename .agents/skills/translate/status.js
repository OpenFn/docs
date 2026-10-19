#!/usr/bin/env node
// Runs the checks before translating, then says what each page needs.
//
//   node .agents/skills/translate/status.js es                 # every page
//   node .agents/skills/translate/status.js es docs/build      # a folder
//   node .agents/skills/translate/status.js es docs/build/triggers.md
//
// Each page is one of: missing, up to date, rules changed (a `machine` page
// whose rules have changed since it was committed), stale (the English has
// changed), or orphaned (a translation with no English page). It prints the
// English hash to record and the page's local URL.
const fs = require('fs');
const path = require('path');
const { execFileSync } = require('child_process');
const yaml = require('js-yaml'); // installed with Docusaurus

const git = (...args) => {
  try {
    return execFileSync('git', args, {
      encoding: 'utf8',
      stdio: ['ignore', 'pipe', 'ignore'],
    }).trim();
  } catch {
    return null;
  }
};

const frontMatter = text =>
  yaml.load((text.match(/^---\n([\s\S]*?)\n---\n/) || [])[1] || '') || {};

// The URL Docusaurus gives a docs page: an absolute slug wins, then a
// relative slug or id in place of the file name. A file named index, README,
// or after its folder is the folder's page.
const url = (locale, rel, fm) => {
  const dir = path.posix.dirname(rel);
  const file = path.posix.basename(rel).replace(/\.mdx?$/, '');
  const name = ['index', 'README', path.posix.basename(dir)].includes(file)
    ? ''
    : fm.id || file;
  const route = fm.slug?.startsWith('/')
    ? fm.slug
    : `/${dir === '.' ? '' : dir + '/'}${fm.slug || name}`.replace(/\/$/, '');
  return `http://localhost:3000${locale === 'en' ? '' : '/' + locale}/documentation${route}`;
};

function preChecks(locale) {
  const config = fs.readFileSync('docusaurus.config.js', 'utf8');
  const locales = (config.match(/locales:\s*\[([^\]]*)\]/) || [])[1] || '';
  let yamlOk = true;
  for (const f of ['glossary.yml', 'translation-rules.yml']) {
    try {
      yaml.load(fs.readFileSync(f, 'utf8'));
    } catch (e) {
      yamlOk = `${f}: ${e.message.split('\n')[0]}`;
    }
  }
  const fetched = git('fetch', '-q', 'origin', 'main') !== null;
  return [
    ['fetched origin/main', fetched],
    [
      `"${locale}" is enabled in docusaurus.config.js`,
      locales.includes(`'${locale}'`),
    ],
    [
      'i18n/ is not ignored by git',
      git('check-ignore', '-q', `i18n/${locale}/x.md`) === null,
    ],
    ['glossary.yml and translation-rules.yml are valid YAML', yamlOk],
    [
      `.agents/skills/translate/${locale}.md exists`,
      fs.existsSync(`.agents/skills/translate/${locale}.md`),
    ],
    [
      'the branch has everything on origin/main',
      git('merge-base', '--is-ancestor', 'origin/main', 'HEAD') !== null,
    ],
  ];
}

const walk = p =>
  fs.statSync(p).isDirectory()
    ? fs.readdirSync(p).flatMap(f => walk(path.join(p, f)))
    : /\.mdx?$/.test(p)
      ? [p]
      : [];

function main() {
  const [locale, ...scope] = process.argv.slice(2);
  if (!locale) {
    console.error('Usage: status.js <locale> [docs/page.md | docs/folder]...');
    process.exit(1);
  }
  const root = `i18n/${locale}/docusaurus-plugin-content-docs/current`;
  const rules = [
    'glossary.yml',
    'translation-rules.yml',
    `.agents/skills/translate/${locale}.md`,
  ];

  let failed = false;
  for (const [name, ok] of preChecks(locale)) {
    console.log(
      `${ok === true ? 'ok  ' : 'FAIL'} ${name}${typeof ok === 'string' ? ` (${ok})` : ''}`
    );
    if (ok !== true) failed = true;
  }
  console.log();

  const scopes = scope.length ? scope : ['docs'];
  const bad = scopes.filter(s => !s.startsWith('docs') || !fs.existsSync(s));
  if (bad.length) {
    console.error(`Not found: ${bad.join(', ')}. Pass a path under docs/.`);
    process.exit(1);
  }
  const english = scopes.flatMap(walk).map(f => path.relative('docs', f));
  const translated = scopes
    .map(s => path.join(root, path.relative('docs', s)))
    .filter(fs.existsSync)
    .flatMap(walk)
    .map(f => path.relative(root, f));

  const groups = {};
  const add = (group, line) => (groups[group] ||= []).push(line);
  for (const rel of english) {
    const en = `docs/${rel}`;
    const tr = `${root}/${rel}`;
    const hash = git('hash-object', en);
    const fm = frontMatter(fs.readFileSync(en, 'utf8'));
    const where = `${en}  ${url(locale, rel, fm)}`;
    if (!fs.existsSync(tr)) {
      add('Missing: translate the whole page', `${where}\n    hash ${hash}`);
      continue;
    }
    const t = frontMatter(fs.readFileSync(tr, 'utf8'));
    const status = t.translation_review_status || 'machine';
    if (t.translation_source_hash === hash) {
      const last = git('log', '-1', '--format=%H', '--', tr);
      const changed =
        status === 'machine' &&
        last &&
        git('log', '--oneline', `${last}..HEAD`, '--', ...rules);
      if (changed)
        add(
          'Rules changed since the page was committed: fix only what breaks them',
          `${where}\n    git diff ${last} -- ${rules.join(' ')}`
        );
      else add('Up to date', en);
    } else if (status === 'human-reviewed') {
      add(
        `Stale and human-reviewed: separate PR for the reviewer`,
        `${where}  (${t.translation_reviewer || 'no reviewer named'})\n    git diff --word-diff ${t.translation_source_hash} HEAD:${en}\n    new hash ${hash}`
      );
    } else {
      const known =
        git('cat-file', '-e', t.translation_source_hash || 'x') !== null;
      add(
        'Stale: update the changed blocks',
        `${where}\n    ${known ? `git diff --word-diff ${t.translation_source_hash} HEAD:${en}` : 'recorded English is not in the repo: retranslate the whole page'}\n    new hash ${hash}`
      );
    }
  }
  for (const rel of translated)
    if (!fs.existsSync(`docs/${rel}`))
      add('Orphaned: the English page moved or was deleted', `${root}/${rel}`);

  for (const [group, lines] of Object.entries(groups)) {
    console.log(`${group} (${lines.length})`);
    // With no scope, every page is in scope; listing the up-to-date ones is noise.
    if (group === 'Up to date' && !scope.length) continue;
    for (const l of lines) console.log(`  ${l}`);
    console.log();
  }

  // Interface text: has anything it comes from changed since it was last
  // committed? The config check is loose; most config changes are not text.
  if (!scope.length) {
    const json = [
      `i18n/${locale}/code.json`,
      `i18n/${locale}/docusaurus-theme-classic`,
      `i18n/${locale}/docusaurus-plugin-content-docs/current.json`,
    ];
    const last = git('log', '-1', '--format=%H', '--', ...json);
    const changed =
      last &&
      git(
        'diff',
        '--stat',
        `${last}..HEAD`,
        '--',
        'sidebars-main.js',
        'docusaurus.config.js',
        'src'
      );
    console.log(
      !last
        ? '\nThe interface has never been translated for this locale. Run /translate interface.'
        : changed
          ? `\nInterface sources changed since the interface was last translated:\n${changed}\nCheck whether /translate interface is needed.`
          : '\nInterface sources unchanged.'
    );
  }
  process.exit(failed ? 1 : 0);
}

module.exports = { url, frontMatter, walk };
if (require.main === module) main();
