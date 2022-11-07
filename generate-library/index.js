const fs = require('fs');
const axios = require('axios');

var formatDistanceToNow = require('date-fns/formatDistanceToNow');
var parseISO = require('date-fns/parseISO');

async function loadPublicLibrary(apiUrl) {
  console.log('Loading job library from OpenFn...');
  return await axios.get(`${apiUrl}/jobs`).then(function (response) {
    console.log('Done ✓');
    const jobs = response.data;
    return jobs;
  });
}

function hDate(str) {
  if (str) {
    return str.substring(0, 10);
  }
  return 'unknown';
}

function relative(str) {
  if (str) {
    return `${formatDistanceToNow(parseISO(str))} ago`;
  }
  return 'date unknown';
}

const otherKeywords = ['async', 'await'];
const jsGlobals = ['Math', 'Array', 'String', 'Promise', 'Number', 'JSON'];

function getKeywords(expression) {
  return [
    ...masterKeywords.filter(word => expression.includes(`${word}(`)),
    ...otherKeywords.filter(word => expression.includes(`${word}`)),
    ...jsGlobals.filter(word => expression.includes(`${word}.`)),
  ];
}

function generateBody(j, uniqueName, keywords, official) {
  const title = official ? `📜 ${j.name}` : j.name;
  const score = Math.round(j.score);
  const githubLink = `https://www.github.com/openfn/language-${j.adaptor}`;
  const versionLink = j.adaptor_version
    ? `https://www.github.com/openfn/language-${j.adaptor}/releases/tag/${j.adaptor_version}`
    : githubLink;

  return `---
title: ${j.name}
sidebar_label: ${score > 75 ? '✨ ' : ''}${title}
id: ${uniqueName}
keywords:
  - library
  - job
  - expression
  - ${j.adaptor}
${keywords.map(kw => `  - ${kw}\n`).join('')}---

${
  official
    ? '📜 <em>This job is an official example from OpenFn.</em>'
    : '<em>This job was provided by an OpenFn.org user via the job library API.</em>'
}

## Metadata

- Name: ${j.name}
- Adaptor: [\`@openfn/language-${j.adaptor}\`](${githubLink})
- Adaptor Version: [\`${j.adaptor_version || 'latest'}\`](${versionLink})
- Created ${relative(j.inserted_at)}
- Updated ${relative(j.updated_at)}
- Score: <b>${
    isNaN(score) ? 100 : score
  }</b> (an [indicator](/library/#library-scores) of how useful this job may be)

## Key Functions

${keywords.map(kw => `\`${kw}\``).join(', ')}

## Expression

\`\`\`js
${j.expression}
\`\`\``;
}

function pushToPaths(j, uniqueName) {
  filePaths.push({
    adaptor: j.adaptor,
    id: `jobs/auto/${uniqueName}`,
    name: j.name,
  });
}

const masterKeywords = JSON.parse(
  fs.readFileSync('./generate-library/master.temp.json')
);

const filePaths = [];

const cleanUp = string => {
  return string
    .trim()
    .replace(':', '/')
    .replace(/^[-,\[]/, '');
};

module.exports = function (context, { apiUrl }) {
  return {
    name: 'library',
    extendCli(cli) {
      cli
        .command('generate-library')
        .description('Generate OpenFn.org Public Job Library')
        .action(async () => {
          fs.existsSync('./library/jobs/auto') ||
            fs.mkdirSync('./library/jobs/auto');

          const jobs = (await loadPublicLibrary(apiUrl)).map(j => {
            const name = cleanUp(j.name);

            return {
              ...j,
              name,
            };
          });

          console.log('Parsing static examples...');
          const staticExamples = JSON.parse(
            fs.readFileSync('./library/staticExamples.json')
          )
            .map(j => ({
              ...j,
              expression: fs.readFileSync(`./library/${j.expressionPath}.js`),
            }))
            .map(j => {
              const keywords = getKeywords(j.expression);
              const uniqueName = j.expressionPath.substring(5);
              const body = generateBody(j, uniqueName, keywords, true);

              pushToPaths(j, uniqueName);
              fs.writeFileSync(`./library/jobs/auto/${uniqueName}.md`, body);
            });
          console.log('Done ✓');

          console.log('Parsing public jobs API data...');
          jobs.map(j => {
            const uniqueName = `${j.name.trim()}-${hDate(j.inserted_at)}`
              .replace(/[^a-z0-9_-]/gi, '-')
              .replace(/-{2,}/g, '-')
              .replace(/^[-,\[]/, '');

            const keywords = getKeywords(j.expression);
            const body = generateBody(j, uniqueName, keywords);

            pushToPaths(j, uniqueName);
            fs.writeFileSync(`./library/jobs/auto/${uniqueName}.md`, body);
          });
          console.log('Done ✓');

          console.log('Creating sidebar paths...');
          fs.writeFileSync(
            './library/jobs/auto/publicPaths.json',
            JSON.stringify(filePaths, null, 2)
          );
          console.log('Done ✓');
        });
    },
  };
};
