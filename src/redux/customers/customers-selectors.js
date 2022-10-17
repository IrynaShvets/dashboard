export const getCustomers = (state) => state.customers.items;
export const getFilter = (state) => state.customers.filter;

export const getVisibleCustomers = (state) => {
  const items = getCustomers(state);
  const filter = getFilter(state);
  const normalizedFilter = filter.toLowerCase();

  return items.filter(({ customerName }) =>
    customerName.toLowerCase().includes(normalizedFilter)
  );
};
