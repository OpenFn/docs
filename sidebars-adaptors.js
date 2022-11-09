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
        label: 'API',
        id: a.docsId,
      },
      {
        type: 'doc',
        label: 'Changelog',
        id: a.changelogId,
      },
      {
        type: 'doc',
        label: 'Development',
        id: a.readmeId,
      },
    ],
  };
});

module.exports = {
  library: [{ type: 'doc', id: 'adaptors-intro' }, ...items],
};
