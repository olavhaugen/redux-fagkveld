import { combineReducers } from 'redux';
import undoable, { includeAction } from 'redux-undo';
import todos from './todos';
import input from './input';

export default combineReducers({
  todos: undoable(todos, {
    undoType: 'UNDO',
    redoType: 'REDO',
    filter: includeAction(['ADD_TODO', 'TOGGLE_COMPLETE'])
  }),
  input,
});
