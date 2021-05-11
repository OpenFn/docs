const axios = require('axios');

module.exports = function (context, { apiUrl }) {
  // ...
  return {
    name: 'public-library',
    async loadContent() {
      /* ... */
      console.log('loading job library');
      return await axios.get(`${apiUrl}/jobs`).then(function (response) {
        // handle success
        const jobs = response.data;
        return jobs;
      });
    },
    async contentLoaded({ content, actions }) {
      const { setGlobalData, createData, addRoute } = actions;
      setGlobalData({ jobs: content });

      //   const friends = ['Yangshun', 'Sebastien'];
      //   const friendsJsonPath = await createData(
      //     'friends.json',
      //     JSON.stringify(friends)
      //   );

      //   // Add the '/friends' routes, and ensure it receives the friends props
      //   addRoute({
      //     path: '/friends',
      //     component: '@site/src/components/Friends.js',
      //     modules: {
      //       // propName -> JSON file path
      //       friends: friendsJsonPath,
      //     },
      //     exact: true,
      //   });
    },
    /* other lifecycle API */
  };
};
