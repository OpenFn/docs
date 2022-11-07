const fs = require('fs');

const adaptorsFile = fs.readFileSync('./adaptors/packages/publicPaths.json');
const adaptors = JSON.parse(adaptorsFile);

const items = adaptors.sort().map(a => {
  return {
    type: 'category',
    label: a.name,
    items: [
      {
        type: 'doc',
        label: 'Docs',
        id: a.docsId,
      },
      {
        type: 'doc',
        label: 'Readme',
        id: a.readmeId,
      },
      {
        type: 'doc',
        label: 'Changelog',
        id: a.changelogId,
      },
    ],
  };
});

module.exports = {
  library: [{ type: 'doc', id: 'adaptors-intro' }, ...items],
};
