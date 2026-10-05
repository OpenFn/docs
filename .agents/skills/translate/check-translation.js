#!/usr/bin/env node
// Checks translated pages against the English they were translated from.
//
//   node .agents/skills/translate/check-translation.js es docs/get-started/*.md
//
// Lists blocks where a fixed glossary term appears fewer times in the
// translation than in the English, which can mean it was translated. It also
// lists blocks that may break a rule for the locale in translation-rules.yml,
// or use a word from the "Not" column in <locale>.md.
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
  let enBlocks;
  try {
    const english = execFileSync('git', ['cat-file', '-p', hash], {
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
  return {
    page: rel,
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
  const flat = s => s.replace(/\s+/g, ' ');
  let found = 0;
  for (const f of files) {
    const p = await page(locale, f);
    if (p.error) console.log(`${p.page}: ${p.error}`);
    for (const r of p.problems || []) {
      found++;
      console.log(
        `${p.page}: ${r.found.join('; ')}\n  en: ${flat(r.english)}\n  ${locale}: ${flat(r.translation)}\n`
      );
    }
  }
  if (!found) console.log('No glossary terms missing and no rules broken.');
}

main();
