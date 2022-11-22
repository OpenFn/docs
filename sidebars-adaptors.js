const fs = require('fs');

const adaptorsFile = fs.readFileSync('./adaptors/packages/publicPaths.json');
const adaptors = JSON.parse(adaptorsFile);

const publicFile = fs.readFileSync(
  './adaptors/library/jobs/auto/publicPaths.json'
);
const publicJobs = JSON.parse(publicFile);

// Note: we can include out own examples here.
const jobs = [...publicJobs];

const groupedJobs = jobs.reduce((r, a) => {
  r[a.adaptor] = r[a.adaptor] || [];
  r[a.adaptor].push(a);
  return r;
}, Object.create(null));

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
      groupedJobs[a.name] && groupedJobs[a.name].length > 0
        ? {
            type: 'category',
            label: 'Examples',
            items: groupedJobs[a.name].map(j => ({
              type: 'doc',
              label: j.name,
              id: `library/${j.id}`,
            })),
          }
        : {},
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
  .filter(id => id !== 'adaptors')
  .filter(id => id !== 'library')
  .filter(id => id !== 'packages');

const extras = overviews
  .filter(id => !adaptors.map(a => `${a.name}`).includes(id))
  .map(id => ({ type: 'doc', id, label: id }));

const list = [...items, ...extras].sort((a, b) =>
  a.label.localeCompare(b.label)
);

module.exports = {
  adaptors: [
    { type: 'doc', id: 'adaptors-intro' },
    { type: 'doc', id: 'library-intro' },
    ...list,
  ],
};
