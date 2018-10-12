import { combineReducers } from 'redux';
import changeReducer from './change-reducer';

const indexReducer = combineReducers({
  changeReducer,
});

export default indexReducer;
