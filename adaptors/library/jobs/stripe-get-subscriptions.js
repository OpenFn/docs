// Get subscription data
fn(state => ({
  ...state,
  subscriptions: state.data,
  subscriptionsData: [],
}));

each(
  $.subscriptions,
  get('subscriptions', { id: $.data })
);

fn(state => ({
  ...state,
  subscriptionsData: [...state.subscriptionsData, state.data.data],
}));
