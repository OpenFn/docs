// To properly use a timeout, wrap it in a promise. This job has two operations
// and it executes the get(...) operation after the fn(...) operation
// waits for 4000ms.
fn(state => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log('wait, and then resolve');
      resolve(state);
    }, 4000);
  });
});

get('https://jsonplaceholder.typicode.com/todos/1');
