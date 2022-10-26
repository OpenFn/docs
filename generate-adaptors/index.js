const fs = require('fs');

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

## Test

hello world`;
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

          const adaptors = [{ name: 'http' }, { name: 'primero' }];

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
