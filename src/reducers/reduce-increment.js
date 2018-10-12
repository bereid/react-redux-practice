const defaultStore = {
  value: 0,
};

const incrementReducer = (store = defaultStore, action) => {
  switch (action.type) {
    case 'INCREMENT':
      return store.value + 1;
    default:
      return store;
  }
};

export default incrementReducer;
