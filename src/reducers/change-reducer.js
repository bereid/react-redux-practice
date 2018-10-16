const defaultStore = {
  value: 0,
};

const changeReducer = (store = defaultStore, action) => {
  switch (action.type) {
    case 'DECREMENT':
      return Object.assign({}, store, { value: store.value > 0 ? store.value - action.count : 0 });
    case 'INCREMENT':
      return Object.assign({}, store, { value: store.value + action.count });
    default:
      return store;
  }
};

export default changeReducer;
