// Fetching all events with pagination
// Requires DHIS2 server v2.41+

// First call fetches page 1 (up to 10,000 records) and, via totalPages: true,
// returns pagination details (state.data.pager) describing how many pages remain.
tracker.export('events', { totalPages: true, pageSize: 1e4 });

fn(state => {
  state.results = state.data.events;
  const { page, pageSize, pageCount, total } = state.data.pager;
  const remainingPages = pageCount - page;

  state.pages = Array.from({ length: remainingPages }, (_, i) => page + i + 1);
  state.pageSize = pageSize;
  return state;
});

// Second call uses the remaining page numbers computed above to fetch the
// rest of the records in batches, one tracker.export per page.
each(
  $.pages,
  tracker
    .export('events', { pageSize: $.pageSize, page: $.data })
    .then(state => {
      state.results = state.results.concat(state.data.events);
      return state;
    })
);
