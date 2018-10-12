const defaultStore = {
  value: 0,
};

const decrementReducer = (store = defaultStore, action) => {
  switch (action.type) {
    case 'DECREMENT':
      return store.value - 1;
    default:
      return store;
  }
};

export default decrementReducer;
