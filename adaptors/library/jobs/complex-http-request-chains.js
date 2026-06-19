// Chain multiple HTTP requests per array item. The first request runs as a
// top-level operation, then we use .then() to run the follow-up requests.
each(
  $.data.someArray,
  post('https://en7a5l7u3izq6.x.pipedream.net/', {
    name: $.data.surname,
    age: $.data.age,
  }).then(async state => {
    console.log('posted:', state.data);

    // Step 2: GET a resource using the POST result
    state = await get('https://en7a5l7u3izq6.x.pipedream.net/', {})(state);
    console.log('got:', state.data);

    // Step 3: PUT using the GET result
    return put('https://en7a5l7u3izq6.x.pipedream.net/')(state);
  })
);
