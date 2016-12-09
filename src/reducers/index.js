import { combineReducers } from 'redux';
import currentDate from './currentDate';

const rootReducer = combineReducers({
  currentDate,
});

export default rootReducer;
