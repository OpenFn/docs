// List customers in Stripe
list('customers');

fn(state => {
  state.customers = state.data.data;
  return state;
});
