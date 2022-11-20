const fs = require('fs');

const adaptorsFile = fs.readFileSync('./adaptors/packages/publicPaths.json');
const adaptors = JSON.parse(adaptorsFile);

const items = adaptors.sort().map(a => {
  const base = {
    type: 'category',
    label: a.name,
    items: [
      {
        type: 'doc',
        label: 'Functions',
        id: a.docsId,
      },
      {
        type: 'doc',
        label: 'Changelog',
        id: a.changelogId,
      },
      {
        type: 'doc',
        label: 'Contributing',
        id: a.readmeId,
      },
    ],
  };

  const path = `./adaptors/${a.name}.md`;

  if (fs.existsSync(path)) {
    base.items.unshift({
      type: 'doc',
      label: 'Overview',
      id: a.name,
    });
  }

  return base;
});

const overviews = fs
  .readdirSync(`./adaptors/`)
  .map(file => file.replace(/\.[^/.]+$/, ''))
  .filter(id => id !== 'intro')
  .filter(id => id !== 'packages');

const extras = overviews
  .filter(id => !adaptors.map(a => `${a.name}`).includes(id))
  .map(id => ({ type: 'doc', id, label: id }));

const list = [...items, ...extras].sort((a, b) =>
  a.label.localeCompare(b.label)
);

module.exports = {
  library: [{ type: 'doc', id: 'adaptors-intro' }, ...list],
};
