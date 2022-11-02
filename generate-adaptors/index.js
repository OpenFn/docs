// TODO: Mtuchi to build
// TODO: test this with: `yarn run generate-adaptors && yarn run start-offline`
// Understand and implement these key components:
// --------------
// [ ] - index.js (1) copies files from github to this local directory and (2) creates a list of paths for the sidebar file.
// [ ] - pathsToAdaptors.json is an array of the filepaths and names of the new markdown files we got from github
// [ ] - sidebars-adaptors.js gerenates a "sidebar" based on the pathsToAdaptors.json file
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
    id: `adaptors/packages/${name}`,
  });
}

function generateBody(a) {
  return `---
title: ${a.name}
id: ${a.name}
keywords:
  - adaptor
  - ${a.name}
---

${JSON.parse(a.docs)}`;
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
            const body = generateBody(a);
            pushToPaths(a.name);
            fs.writeFileSync(`./adaptors/packages/${a.name}.md`, body);
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
