import { combineReducers } from 'redux';
import todos from './todos';
import input from './input';

export default combineReducers({
  todos,
  input,
});
