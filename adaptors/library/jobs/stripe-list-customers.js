// List customers in Stripe

list('customers').then(state => {
  state.customers = state.data.data;
  return state;
});
