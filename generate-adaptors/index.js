const axios = require('axios');
const fs = require('fs');

async function loadAdaptorsDocs(apiUrl) {
  console.log('Loading adaptors docst from OpenFn/adaptors');
  return await axios.get(apiUrl).then(function (response) {
    console.log('Done ✓');
    const docs = response.data;
    return docs;
  });
}

const filePaths = [];

function pushToPaths(name) {
  filePaths.push({
    name: name,
    docsId: `packages/${name}-docs`,
    readmeId: `packages/${name}-readme`,
    changelogId: `packages/${name}-changelog`,
  });
}

function generateJsDoc(a) {
  return `---
title: ${a.name}
id: ${a.name}-docs
keywords:
  - adaptor
  - ${a.name}
---
${JSON.parse(a.docs)}`;
}

function generateChangelog(a) {
  return `---
title: ${a.name} changelog
id: ${a.name}-changelog
keywords:
  - adaptor
  - changelog
  - ${a.name}
---

# Changelog for the ${a.name} adaptor

${JSON.parse(a.changelog)}`;
}

function generateReadme(a) {
  return `---
title: ${a.name} developer readme
id: ${a.name}-readme
keywords:
  - adaptor
  - readme
  - ${a.name}
---

# Developer README for the ${a.name} adaptor

Source: https://github.com/OpenFn/adaptors/tree/main/packages/${a.name}

${JSON.parse(a.readme)}`;
}

module.exports = function (context, { apiUrl }) {
  return {
    name: 'adaptors',
    extendCli(cli) {
      cli
        .command('generate-adaptors')
        .description('Generate documentation for OpenFn adaptors')
        .action(async () => {
          fs.existsSync('./adaptors/packages') ||
            fs.mkdirSync('./adaptors/packages');

          // const adaptors = [{ name: 'http' }, { name: 'primero' }];
          const adaptors = await loadAdaptorsDocs(apiUrl);
          console.log('Generating adaptors docs via JSDoc...');

          adaptors.map(a => {
            const docsBody = generateJsDoc(a);
            const readmeBody = generateReadme(a);
            const changelogBody = generateChangelog(a);

            pushToPaths(a.name);

            fs.writeFileSync(`./adaptors/packages/${a.name}-docs.md`, docsBody);
            fs.writeFileSync(
              `./adaptors/packages/${a.name}-readme.md`,
              readmeBody
            );
            fs.writeFileSync(
              `./adaptors/packages/${a.name}-changelog.md`,
              changelogBody
            );
          });
          console.log('Done ✓');

          console.log('Creating sidebar paths...');
          fs.writeFileSync(
            './adaptors/packages/publicPaths.json',
            JSON.stringify(filePaths, null, 2)
          );
          console.log('Done ✓');
        });
    },
  };
};
