// Get subscription data
fn(state => {
  state.subscriptions = state.data;
  state.subscriptionsData = [];
  return state;
});

each(
  '$.subscriptions',
  get('subscriptions', $.data).then(state => {
    state.subscriptionsData.push(state.data.data);
    return state;
  })
);
