#!/usr/bin/env node

const fs = require('fs');
const axios = require('axios');
const apiUrl = 'https://www.openfn.org/api/public';

fs.existsSync('./library/jobs/auto') || fs.mkdirSync('./library/jobs/auto');

function hDate(str) {
  return str.substring(0, 10);
}

async function loadContent() {
  /* ... */
  console.log('Loading job library from OpenFn.');
  return await axios.get(`${apiUrl}/jobs`).then(function (response) {
    // handle success
    const jobs = response.data;
    return jobs;
  });
}

const filePaths = [];

(async () => {
  const jobs = await loadContent();

  jobs.map(j => {
    const uniqueName = `${j.name}-${hDate(j.inserted_at)}`.replace(/[()]/g, '');
    filePaths.push({ adaptor: j.adaptor, id: `jobs/auto/${uniqueName}` });

    const masterKeywords = JSON.parse(
      fs.readFileSync('./job-library/master.temp.json')
    );

    const keywords = masterKeywords.filter(word =>
      j.expression.includes(`${word}(`)
    );

    const content = `---
title: ${j.name} with ${j.adaptor}
sidebar_label: ${j.name}
id: ${uniqueName}
keywords:
  - library
  - job
  - expression
${keywords.map(kw => `  - ${kw}\n`).join('')}---

## Metadata

- Name: ${j.name}
- Adaptor: \`@openfn/language-${j.adaptor}\`
- Adaptor Version: \`${j.adaptor_version || 'latest'}\`
- Created at: ${hDate(j.inserted_at)}
- Last modified at: ${hDate(j.updated_at)}

## Key Functions

${keywords.map(kw => `\`${kw}\``).join(', ')}

## Expression

\`\`\`js
${j.expression}
\`\`\``;

    fs.writeFileSync(`./library/jobs/auto/${uniqueName}.md`, content);
  });

  fs.writeFileSync(
    './library/jobs/auto/publicPaths.json',
    JSON.stringify(filePaths, null, 2)
  );
})();
