const fs = require('fs');

const publicFile = fs.readFileSync('./library/jobs/auto/publicPaths.json');
const publicJobs = JSON.parse(publicFile);

// Note: we can include out own examples here.
const jobs = [...publicJobs];

const groupedJobs = jobs.reduce((r, a) => {
  r[a.adaptor] = r[a.adaptor] || [];
  r[a.adaptor].push(a);
  return r;
}, Object.create(null));

const items = Object.keys(groupedJobs)
  .sort()
  .map(a => {
    return {
      type: 'category',
      label: a,
      items: groupedJobs[a]
        .map(j => ({
          type: 'doc',
          id: j.id,
        }))
        .sort((a, b) => {
          if (a.id < b.id) {
            return -1;
          }
          if (a.id > b.id) {
            return 1;
          }
          return 0;
        }),
    };
  });

module.exports = {
  library: [
    { type: 'doc', id: 'library-intro' },
    // {
    //   type: 'category',
    //   label: 'Jobs',
    ...items,
    // },
    // {
    //   type: 'category',
    //   label: 'Triggers',
    //   items: ['triggers/xmlns'],
    // },
  ],
};
