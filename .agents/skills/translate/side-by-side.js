#!/usr/bin/env node
// Lines up an English page with its translation, block by block.
//
//   node .agents/skills/translate/side-by-side.js es docs/build/triggers.md --json
//   node .agents/skills/translate/side-by-side.js es docs/get-started/*.md --check
//
// --json lists the blocks of the current English, each with the translation
// that can be reused for it, or null where the English is new or changed. A
// changed block also gets the old English and translation it replaced, with a
// word diff, under previous. See "Updating a page" in pages.md.
//
// --check lists blocks where a fixed glossary term appears fewer times in the
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

const FENCE_OPEN = '<!-- do-not-retranslate -->';
const FENCE_CLOSE = '<!-- /do-not-retranslate -->';

// Terms that must stay in English. Product nouns like "run" are left out,
// since their ordinary-English uses get translated.
const FIXED = yaml
  .load(fs.readFileSync('glossary.yml', 'utf8'))
  .terms.filter(t => !t.translate && !t.product_noun)
  .map(t => ({
    term: t.term,
    re: new RegExp(
      `\\b${t.term.replace(/ /g, '\\s+')}s?\\b`,
      t.case_sensitive ? 'g' : 'gi'
    ),
  }));

// Heading anchors and link targets are copied unchanged, so count only prose.
const prose = s => s.replace(/\{#[^}]*\}/g, '').replace(/\]\([^)]*\)/g, ']');

// A higher count in the translation is harmless; a lower one is worth a look.
const termDrops = (english, translation) =>
  FIXED.map(({ term, re }) => ({
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
// reader can tell which uses it covers.
function rulesFor(locale) {
  const rules = (
    yaml.load(fs.readFileSync('translation-rules.yml', 'utf8')).rules || []
  ).filter(
    r => (r.locale === locale || r.locale === '*') && !r.source.includes('(')
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

// Word diff in git's --word-diff=plain style: [-removed-]{+added+}.
function wordDiff(a, b) {
  const x = a.split(/\s+/);
  const y = b.split(/\s+/);
  const lcs = x.map(() => Array(y.length + 1).fill(0));
  lcs.push(Array(y.length + 1).fill(0));
  for (let i = x.length - 1; i >= 0; i--)
    for (let j = y.length - 1; j >= 0; j--)
      lcs[i][j] =
        x[i] === y[j]
          ? lcs[i + 1][j + 1] + 1
          : Math.max(lcs[i + 1][j], lcs[i][j + 1]);
  const out = [];
  let i = 0;
  let j = 0;
  while (i < x.length || j < y.length) {
    if (i < x.length && j < y.length && x[i] === y[j]) {
      out.push(x[i++]);
      j++;
    } else if (
      i < x.length &&
      (j === y.length || lcs[i + 1][j] >= lcs[i][j + 1])
    )
      out.push(`[-${x[i++]}-]`);
    else out.push(`{+${y[j++]}+}`);
  }
  return out
    .join(' ')
    .replace(/-\] \[-/g, ' ')
    .replace(/\+\} \{\+/g, ' ');
}

const git = (...args) =>
  execFileSync('git', args, {
    encoding: 'utf8',
    stdio: ['ignore', 'pipe', 'ignore'],
  });

function splitFrontMatter(text) {
  const m = text.match(/^---\n([\s\S]*?)\n---\n/);
  return m
    ? { fm: m[1], body: text.slice(m[0].length) }
    : { fm: '', body: text };
}

const field = (fm, key) =>
  (fm.match(new RegExp(`^${key}: *(.*)$`, 'm')) || [])[1];

// Blocks inside do-not-retranslate fences are flagged, and the markers dropped.
async function blocks(text, filepath) {
  const options = {
    ...(await prettier.resolveConfig(filepath)),
    parser: 'markdown',
  };
  const formatted = await prettier.format(splitFrontMatter(text).body, options);
  const out = [];
  let cur = [];
  let inCode = false;
  let fenced = false;
  const flush = () => {
    if (cur.length) out.push({ text: cur.join('\n'), fenced });
    cur = [];
  };
  for (const line of formatted.split('\n')) {
    if (!inCode && line.trim() === FENCE_OPEN) {
      flush();
      fenced = true;
      continue;
    }
    if (!inCode && line.trim() === FENCE_CLOSE) {
      flush();
      fenced = false;
      continue;
    }
    if (/^\s*(```|~~~)/.test(line)) inCode = !inCode;
    if (!inCode && line.trim() === '') flush();
    else cur.push(line);
  }
  flush();
  return out;
}

// The English the translation at esPath (or esText) was made from, as blocks.
async function sourceOf(esText, enPath) {
  const hash = field(splitFrontMatter(esText).fm, 'translation_source_hash');
  if (!hash)
    return { hash, error: 'No translation_source_hash in the front matter.' };
  try {
    return { hash, blocks: await blocks(git('cat-file', '-p', hash), enPath) };
  } catch {
    return {
      hash,
      error: `The English it was translated from (${hash}) is not in the repo.`,
    };
  }
}

async function page(locale, enPath) {
  const rel = enPath.replace(/^docs\//, '');
  const esPath = `i18n/${locale}/docusaurus-plugin-content-docs/current/${rel}`;
  const result = { page: rel, notes: [] };
  if (!fs.existsSync(esPath))
    return { ...result, error: 'No translation yet.' };

  const esText = fs.readFileSync(esPath, 'utf8');
  const source = await sourceOf(esText, enPath);
  if (source.error) return { ...result, error: source.error };
  const esBlocks = await blocks(esText, esPath);
  const current = await blocks(fs.readFileSync(enPath, 'utf8'), enPath);

  result.aligned = source.blocks.length === esBlocks.length;
  if (!result.aligned)
    result.notes.push(
      `The blocks don't line up: ${source.blocks.length} in the English, ${esBlocks.length} in the translation.`
    );
  if (source.hash !== git('hash-object', enPath).trim())
    result.notes.push('The English has changed since this was translated.');

  // Translation to reuse for each English block, keyed by the block's text.
  const reuse = new Map();
  if (result.aligned)
    source.blocks.forEach((b, i) => reuse.set(b.text, { ...esBlocks[i], i }));
  const used = new Set();
  result.blocks = current.map(b => {
    const t = reuse.get(b.text);
    if (t) used.add(t.i);
    return {
      english: b.text,
      translation: t ? t.text : null,
      fenced: t ? t.fenced : false,
    };
  });
  // Pair each changed block with the old block it replaced: a run of changed
  // blocks between two reused ones takes the old blocks in the same gap, when
  // the counts match. Otherwise the block is new, or the pairing is unclear.
  if (result.aligned) {
    // Repeated blocks like ":::" match in order, so the next unused one.
    let last = -1;
    const at = current.map(b => {
      const i = source.blocks.findIndex(
        (s, k) => k > last && s.text === b.text
      );
      if (i !== -1) last = i;
      return i === -1 ? undefined : i;
    });
    for (let i = 0; i < current.length;) {
      if (at[i] !== undefined) {
        i++;
        continue;
      }
      let j = i;
      while (j < current.length && at[j] === undefined) j++;
      const from = i === 0 ? 0 : at[i - 1] + 1;
      const to = j === current.length ? source.blocks.length : at[j];
      if (to - from === j - i)
        for (let k = 0; k < j - i; k++) {
          const old = source.blocks[from + k].text;
          result.blocks[i + k].previous = {
            english: old,
            translation: esBlocks[from + k].text,
            diff: wordDiff(old, current[i + k].text),
          };
        }
      i = j;
    }
  }
  result.unusedFenced = esBlocks
    .filter((b, i) => b.fenced && !used.has(i))
    .map(b => b.text);

  // Compare the source English with the translation block by block where the
  // blocks line up, otherwise the whole page.
  const toCheck = result.aligned
    ? source.blocks.map((b, i) => ({
        english: b.text,
        translation: esBlocks[i].text,
      }))
    : [
        {
          english: source.blocks.map(b => b.text).join('\n\n'),
          translation: esBlocks.map(b => b.text).join('\n\n'),
        },
      ];
  const ruleBreaks = rulesFor(locale);
  result.problems = toCheck
    .map(r => ({
      ...r,
      found: [
        ...termDrops(r.english, r.translation),
        ...ruleBreaks(r.english, r.translation),
      ],
    }))
    .filter(r => r.found.length);
  return result;
}

async function main() {
  const args = process.argv.slice(2);
  const json = args.includes('--json');
  const check = args.includes('--check');
  const [locale, ...files] = args.filter(a => !a.startsWith('--'));
  if (!locale || !files.length || json === check) {
    console.error(
      'Usage: side-by-side.js <locale> <docs/page.md>... --json | --check'
    );
    process.exit(1);
  }
  const pages = [];
  for (const f of files) pages.push(await page(locale, f));
  if (check) {
    const flat = s => s.replace(/\s+/g, ' ');
    let found = 0;
    for (const p of pages) {
      if (p.error) console.log(`${p.page}: ${p.error}`);
      for (const r of p.problems || []) {
        found++;
        console.log(
          `${p.page}: ${r.found.join('; ')}\n  en: ${flat(r.english)}\n  ${locale}: ${flat(r.translation)}\n`
        );
      }
    }
    if (!found) console.log('No glossary terms missing and no rules broken.');
  } else {
    const out = pages.map(({ problems, ...p }) => p);
    console.log(JSON.stringify(out, null, 2));
  }
}

main();
