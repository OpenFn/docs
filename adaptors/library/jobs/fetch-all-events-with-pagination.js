// Fetching all events with pagination
// Requires DHIS2 server v2.41+
tracker.export('events', { totalPages: true, pageSize: 1e4 });
fn(state => {
  state.results = state.data.events;
  const { page, pageSize, pageCount, total } = state.data.pager;
  const remainingPages = pageCount - page;

  state.pages = Array.from({ length: remainingPages }, (_, i) => page + i + 1);
  state.pageSize = pageSize;
  return state;
});

each(
  $.pages,
  tracker
    .export('events', { pageSize: $.pageSize, page: $.data })
    .then(state => {
      state.results = state.results.concat(state.data.events);
      return state;
    })
);
