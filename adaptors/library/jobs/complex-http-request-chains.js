// Chain multiple HTTP requests per array item using async/await inside fn().
// Avoid nesting operations as callbacks — use sequential awaits instead.
each(
  $.data.someArray,
  fn(async state => {
    // Step 1: POST the current item
    state = await post('https://en7a5l7u3izq6.x.pipedream.net/', {
      body: { name: $.data.surname, age: $.data.age },
    })(state);
    console.log('posted:', state.data);

    // Step 2: GET a resource using the POST result
    state = await get('https://en7a5l7u3izq6.x.pipedream.net/', {})(state);
    console.log('got:', state.data);

    // Step 3: PUT using the GET result
    return put('https://en7a5l7u3izq6.x.pipedream.net/')(state);
  })
);
