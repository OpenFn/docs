const fs = require('fs');

// Note that we'd like a way to start the docs site even if the
// generate-adaptors code has not yet been run. This if/else is not very elegent
// but does the trick.
let list = [];
if (fs.existsSync('./adaptors/packages/publicPaths.json')) {
  const adaptorsFile = fs.readFileSync('./adaptors/packages/publicPaths.json');
  const adaptors = JSON.parse(adaptorsFile);

  // Every adaptor repeats the same item labels ('Functions', 'Overview', ...).
  // Docusaurus derives a sidebar item's translation key from `key ?? label`,
  // so without an explicit `key` those labels collide and the build throws
  // `Multiple docs sidebar items produce the same translation key` for any
  // non-default locale. Namespacing each key by adaptor keeps them unique.
  const items = adaptors.sort().map(a => {
    const base = {
      type: 'category',
      label: a.name,
      key: a.name,
      items: [
        {
          type: 'doc',
          label: 'Functions',
          key: `${a.name}-functions`,
          id: a.docsId,
        },
        {
          type: 'doc',
          label: 'Configuration',
          key: `${a.name}-configuration`,
          id: a.configurationSchemaId,
        },
        {
          type: 'doc',
          label: 'Changelog',
          key: `${a.name}-changelog`,
          id: a.changelogId,
        },
        {
          type: 'doc',
          label: 'README.md',
          key: `${a.name}-readme`,
          id: a.readmeId,
        },
      ],
    };

    const path = `./adaptors/${a.name}.md`;

    if (fs.existsSync(path)) {
      base.items.unshift({
        type: 'doc',
        label: 'Overview',
        key: `${a.name}-overview`,
        id: a.name,
      });
    }

    return base;
  });

  const overviews = fs
    .readdirSync(`./adaptors/`)
    .map(file => file.replace(/\.[^/.]+$/, ''))
    .filter(id => id !== 'intro')
    .filter(id => id !== 'adaptors')
    .filter(id => id !== 'packages');

  const extras = overviews
    .filter(id => !adaptors.map(a => `${a.name}`).includes(id))
    .map(id => ({ type: 'doc', id, label: id, key: id }));

  list = [...items, ...extras].sort((a, b) => a.label.localeCompare(b.label));
} else {
  console.log('Skipping adaptor sidebar because artifact generation failed:');
  console.log(
    "  Adaptors 'publicPaths.json':",
    fs.existsSync('./adaptors/packages/publicPaths.json')
      ? 'found'
      : 'NOT FOUND! (Maybe `yarn generate-adaptors` failed.)'
  );
  list = [];
}

module.exports = {
  adaptors: [{ type: 'doc', id: 'adaptors-intro' }, ...list],
};
