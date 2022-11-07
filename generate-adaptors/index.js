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

function generateBody(a, docType) {
  const docId = `${a.name}-${docType}`;
  return `---
title: ${a.name}
id: ${docId}
keywords:
  - adaptor
  - ${docType}
  - ${a.name}
---
## Metadata
- Name: ${a.name}
- Adaptor: ${a.adaptor}
- Adaptor Version: ${a.version}
${JSON.parse(a[docType])}`;
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
            const docsBody = generateBody(a, 'docs');
            const readmeBody = generateBody(a, 'readme');
            const changelogBody = generateBody(a, 'changelog');

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
