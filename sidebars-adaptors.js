const fs = require('fs');

const adaptorsFile = fs.readFileSync('./adaptors/packages/publicPaths.json');
const adaptors = JSON.parse(adaptorsFile);

const items = adaptors.sort().map(a => {
  return {
    type: 'doc',
    label: a.name,
    id: `packages/${a.name}`,
  };
});

module.exports = {
  library: [{ type: 'doc', id: 'adaptors-intro' }, ...items],
};
