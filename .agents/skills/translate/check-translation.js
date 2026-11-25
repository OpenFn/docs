#!/usr/bin/env node
// Checks translated pages against the English they were translated from.
//
//   node .agents/skills/translate/check-translation.js es docs/get-started
//
// Lists blocks where a fixed glossary term appears fewer times in the
// translation than in the English, which can mean it was translated. It also
// lists blocks that may break a rule for the locale in translation-rules.yml,
// or use a word from the "Not" column in <locale>.md. And it lists where the
// code, links, headings, anchors, callouts, images, or tables differ from the
// English, or the front matter is incomplete or out of date.
//
// A block is a run of lines between blank lines, after formatting with
// Prettier, and a fenced code block is one block. Both sides go through
// Prettier so wrapping differences don't count as changes.
const fs = require('fs');
const { execFileSync } = require('child_process');
const prettier = require('prettier');
const yaml = require('js-yaml'); // installed with Docusaurus

const FENCE_MARKERS = [
  '<!-- do-not-retranslate -->',
  '<!-- /do-not-retranslate -->',
];

// Terms that must stay in English, unless `locales` gives the locale a word.
// Product nouns like "run" are left out, since their ordinary-English uses get
// translated.
const FIXED = yaml
  .load(fs.readFileSync('glossary.yml', 'utf8'))
  .terms.filter(t => !t.translate && !t.product_noun)
  .map(t => ({
    term: t.term,
    locales: t.locales || {},
    re: new RegExp(
      `\\b${t.term.replace(/ /g, '\\s+')}s?\\b`,
      t.case_sensitive ? 'g' : 'gi'
    ),
  }));

// Heading anchors and link targets are copied unchanged, so count only prose.
const prose = s => s.replace(/\{#[^}]*\}/g, '').replace(/\]\([^)]*\)/g, ']');

// A higher count in the translation is harmless; a lower one is worth a look.
const termDrops = (locale, english, translation) =>
  FIXED.filter(t => !t.locales[locale])
    .map(({ term, re }) => ({
      term,
      en: (prose(english).match(re) || []).length,
      es: (prose(translation).match(re) || []).length,
    }))
    .filter(c => c.es < c.en)
    .map(c => `"${c.term}" ${c.en} in English, ${c.es} in translation`);

// Phrase matching for the locale's rules. Accents and case are ignored, and
// inline code is skipped. "a / b" matches either. A word may take a plural, so
// "feature" finds "features" and "función" finds "funciones" but not
// "funcionalidad". An English phrase also matches its -d, -ed, and -ing forms,
// so "enable" finds "enabled" and "enabling". A one-word Spanish verb matches
// its conjugations, so "mejorar" finds "mejora" and "mejorado" but not "mejor".
const fold = s =>
  s.normalize('NFD').replace(/\p{M}/gu, '').toLowerCase().replace(/\s+/g, ' ');
const has = (text, phrase, english = false) => {
  const t = fold(prose(text).replace(/`[^`]*`/g, ''));
  return phrase.split('/').some(alt => {
    const p = fold(alt.replace(/\s*\(.*?\)/g, '').trim());
    const verb = !english && !p.includes(' ') && /(ar|er|ir)$/.test(p);
    const stem = english
      ? p.replace(/e$/, '')
      : verb
        ? p.replace(/(ar|er|ir)$/, '')
        : p;
    const end = english
      ? '(?:e|es|s|ed|d|ing)?(?!\\p{L})'
      : verb
        ? '[aeio]\\p{L}*'
        : '(?:e?s)?(?!\\p{L})';
    const escaped = stem.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
    return new RegExp(`(?<!\\p{L})${escaped}${end}`, 'u').test(t);
  });
};

// Rules for one locale: translation-rules.yml, and the "Not" column of the
// word table in <locale>.md. Each returns the problems in one block. A rule
// whose source names its context, like "upgrade (a plan)", is left out: only a
// reader can tell which uses it covers. So is a rule missing source or target.
function rulesFor(locale) {
  const rules = (
    yaml.load(fs.readFileSync('translation-rules.yml', 'utf8')).rules || []
  ).filter(
    r =>
      (r.locale === locale || r.locale === '*') &&
      r.source &&
      r.target &&
      !r.source.includes('(')
  );
  const styleFile = `.agents/skills/translate/${locale}.md`;
  const banned = fs.existsSync(styleFile)
    ? fs
        .readFileSync(styleFile, 'utf8')
        .split('\n')
        .map(l => l.match(/^\|([^|]+)\|([^|]+)\|$/))
        .filter(m => m && !/^[\s-]+$/.test(m[2]) && m[2].trim() !== 'Not')
        .map(m => ({ use: m[1].trim(), not: m[2].trim() }))
    : [];
  return (english, translation) => [
    ...rules
      .filter(r =>
        r.kind === 'avoid'
          ? has(english, r.source, true) && has(translation, r.target)
          : has(english, r.source, true) && !has(translation, r.target)
      )
      .map(r => `rule "${r.source}": ${r.instruction.replace(/\s+/g, ' ')}`),
    ...banned
      .filter(b => has(translation, b.not))
      .map(b => `${locale}.md: use "${b.use}", not "${b.not}"`),
  ];
}

// What a translation copies unchanged or keeps in step with the English:
// code, links, heading levels and anchors, callouts, images, and tables.
// Each difference is a candidate, like the rule checks.
const { writeMarkdownHeadingId } = require('@docusaurus/utils');
const { url, frontMatter, walk } = require('./status.js');

const outsideCode = s => s.replace(/^(```|~~~)[\s\S]*?^\1/gm, '');
// The site's anchors come from the rendered heading, so drop emphasis first:
// "See _Now_" is "see-now", not "see-_now_".
const anchors = text =>
  writeMarkdownHeadingId(
    splitFrontMatter(text).body.replace(/^##.*$/gm, h => {
      if (h.includes('{#')) return h;
      const emphasis = /(^|[^\w`])(\*\*|\*|_)([^*_`]+)\2(?=[^\w`]|$)/g;
      while (emphasis.test(h)) h = h.replace(emphasis, '$1$3');
      return h;
    })
  )
    .split('\n')
    .filter(l => /^##/.test(l))
    .map(l => (l.match(/\{#([^}]+)\}$/) || [])[1]);
const parts = {
  'code blocks': s => s.match(/^(```|~~~)[\s\S]*?^\1/gm) || [],
  'inline code': s => outsideCode(s).match(/`[^`\n]+`/g) || [],
  links: s => [...outsideCode(s).matchAll(/\]\(\s*([^)\s]+)/g)].map(m => m[1]),
  headings: s => outsideCode(s).match(/^#+(?= )/gm) || [],
  callouts: s => outsideCode(s).match(/^:::\w*/gm) || [],
  images: s =>
    [
      ...outsideCode(s).matchAll(
        /!\[[^\]]*\]\(\s*([^)\s]+)|<img [^>]*src="([^"]+)/g
      ),
    ].map(m => m[1] || m[2]),
  'table rows': s => outsideCode(s).match(/^\|/gm) || [],
};
const sameList = (a, b) =>
  a.length === b.length && a.every((x, i) => x === b[i]);
const sorted = a => [...a].sort();

function structure(english, translation, current, previous) {
  const en = splitFrontMatter(english).body;
  const tr = splitFrontMatter(translation).body.replace(/\\\{#/g, '{#');
  const found = Object.entries(parts)
    .filter(([name, get]) =>
      name === 'headings' || name === 'code blocks'
        ? !sameList(get(en), get(tr))
        : !sameList(sorted(get(en)), sorted(get(tr)))
    )
    .map(([name, get]) => {
      const missing = get(en).filter(x => !get(tr).includes(x));
      const added = get(tr).filter(x => !get(en).includes(x));
      return `${name} differ from the English (${get(en).length} in English, ${get(tr).length} in translation)${missing.length ? `; missing: ${missing.slice(0, 5).join(' ')}` : ''}${added.length ? `; not in English: ${added.slice(0, 5).join(' ')}` : ''}`;
    });
  const want = anchors(english);
  // A heading left in English needs no {#id}: its own text gives the anchor.
  const got = anchors(tr);
  if (!sameList(want, got))
    found.push(
      `heading anchors should be, in order: ${want.join(', ')}; translation has: ${got.join(', ')}`
    );
  const fm = frontMatter(translation);
  if (!fm.translation_review_status)
    found.push('front matter has no translation_review_status');
  if (fm.translation_source_hash !== current)
    found.push(
      `translation_source_hash is not the current English (${current}): update the page, or the hash if the translation already matches`
    );
  // Every fenced block on main must still be here, word for word.
  const fenced = s =>
    [
      ...s.matchAll(
        /<!-- do-not-retranslate -->([\s\S]*?)<!-- \/do-not-retranslate -->/g
      ),
    ].map(m => m[1].trim());
  if (previous !== null) {
    const now = fenced(translation);
    const lost = fenced(previous).filter(f => !now.includes(f));
    if (lost.length)
      found.push(
        `do-not-retranslate text was removed or changed since main: ${lost.map(f => f.slice(0, 60)).join(' | ')}`
      );
  }
  return found;
}

function splitFrontMatter(text) {
  const m = text.match(/^---\n([\s\S]*?)\n---\n/);
  return m
    ? { fm: m[1], body: text.slice(m[0].length) }
    : { fm: '', body: text };
}

// do-not-retranslate markers are dropped so the blocks line up.
async function blocks(text, filepath) {
  const options = {
    ...(await prettier.resolveConfig(filepath)),
    parser: 'markdown',
  };
  const formatted = await prettier.format(splitFrontMatter(text).body, options);
  const out = [];
  let cur = [];
  let inCode = false;
  const flush = () => {
    if (cur.length) out.push(cur.join('\n'));
    cur = [];
  };
  for (const line of formatted.split('\n')) {
    if (!inCode && FENCE_MARKERS.includes(line.trim())) {
      flush();
      continue;
    }
    if (/^\s*(```|~~~)/.test(line)) inCode = !inCode;
    if (!inCode && line.trim() === '') flush();
    else cur.push(line);
  }
  flush();
  return out;
}

async function page(locale, enPath) {
  const rel = enPath.replace(/^docs\//, '');
  const esPath = `i18n/${locale}/docusaurus-plugin-content-docs/current/${rel}`;
  if (!fs.existsSync(esPath))
    return { page: rel, error: 'No translation yet.' };

  // Check against the English the page was translated from.
  const esText = fs.readFileSync(esPath, 'utf8');
  const hash = (splitFrontMatter(esText).fm.match(
    /^translation_source_hash: *(.*)$/m
  ) || [])[1];
  if (!hash)
    return {
      page: rel,
      error: 'No translation_source_hash in the front matter.',
    };
  // Git only stores the English once it is staged or committed, so an
  // uncommitted English fix is read from disk.
  let enBlocks, english;
  try {
    const onDisk = fs.readFileSync(enPath, 'utf8');
    english =
      execFileSync('git', ['hash-object', enPath], {
        encoding: 'utf8',
      }).trim() === hash
        ? onDisk
        : execFileSync('git', ['cat-file', '-p', hash], {
            encoding: 'utf8',
            stdio: ['ignore', 'pipe', 'ignore'],
          });
    enBlocks = await blocks(english, enPath);
  } catch {
    return {
      page: rel,
      error: `The English it was translated from (${hash}) is not in the repo.`,
    };
  }
  const esBlocks = await blocks(esText, esPath);

  // Compare block by block where the blocks line up, otherwise the whole page.
  const pairs =
    enBlocks.length === esBlocks.length
      ? enBlocks.map((english, i) => ({ english, translation: esBlocks[i] }))
      : [
          {
            english: enBlocks.join('\n\n'),
            translation: esBlocks.join('\n\n'),
          },
        ];
  const ruleBreaks = rulesFor(locale);
  const git = (...a) => {
    try {
      return execFileSync('git', a, {
        encoding: 'utf8',
        stdio: ['ignore', 'pipe', 'ignore'],
      }).trim();
    } catch {
      return null;
    }
  };
  return {
    page: rel,
    url: url(locale, rel, frontMatter(fs.readFileSync(enPath, 'utf8'))),
    structure: structure(
      english,
      esText,
      git('hash-object', enPath),
      git('show', `origin/main:${esPath}`)
    ),
    problems: pairs
      .map(r => ({
        ...r,
        found: [
          ...termDrops(locale, r.english, r.translation),
          ...ruleBreaks(r.english, r.translation),
        ],
      }))
      .filter(r => r.found.length),
  };
}

async function main() {
  const args = process.argv.slice(2);
  const [locale, ...files] = args;
  if (!locale || !files.length) {
    console.error('Usage: check-translation.js <locale> <docs/page.md>...');
    process.exit(1);
  }
  const bad = files.filter(f => !f.startsWith('docs') || !fs.existsSync(f));
  if (bad.length) {
    console.error(`Not found: ${bad.join(', ')}. Pass a path under docs/.`);
    process.exit(1);
  }
  const flat = s => s.replace(/\s+/g, ' ');
  let found = 0;
  for (const f of files.flatMap(walk)) {
    const p = await page(locale, f);
    if (p.error) {
      found++;
      console.log(`${p.page}: ${p.error}`);
    }
    for (const s of p.structure || []) {
      found++;
      console.log(`${p.page}: ${s}\n  ${p.url}\n`);
    }
    for (const r of p.problems || []) {
      found++;
      console.log(
        `${p.page}: ${r.found.join('; ')}\n  en: ${flat(r.english)}\n  ${locale}: ${flat(r.translation)}\n`
      );
    }
  }
  if (!found)
    console.log(
      'No glossary terms missing, no rules broken, and the structure matches.'
    );
}

main();
