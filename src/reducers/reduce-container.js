import { combineReducers } from 'redux';
import decrementReducer from './reduce-decrement';
import incrementReducer from './reduce-increment';

const allReducers = combineReducers({
  decrementReducer,
  incrementReducer,
});

export default allReducers;
