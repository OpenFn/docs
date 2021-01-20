```js
each(
  dataPath('someArray[*]'),
  post(
    'https://en7a5l7u3izq6.x.pipedream.net/',
    {
      body: state => {
        return { name: state.data.surname, age: state.data.age };
      },
    },
    state => {
      console.log('in the callback');
      console.log(state.data);
      get(
        'https://en7a5l7u3izq6.x.pipedream.net/',
        {},
        // Note how we don't use: `put(args)(state)` because state is already
        // provided by the parent operation, get(), to its callback...
        put('https://en7a5l7u3izq6.x.pipedream.net/')
        // ...but since we've called get() INSIDE an anonymous function, we'll
        // need to pass state to it manually: get(args)(state)...
      )(state);
      return state;
    }
  )
);
```
