import React, { Component } from 'react';
import Todos from './Todos';
import { connect } from 'react-redux';
import addTodo from '../actionCreators/addTodo';
import textChanged from '../actionCreators/textChanged';
import toggleComplete from '../actionCreators/toggleComplete';
import undo from '../actionCreators/undo';
import redo from '../actionCreators/redo';

class TodosContainer extends Component {
  onInputChange(text) {
    this.props.dispatch(textChanged(text));
  }

  onInputKeyPress(event) {
    if (event.key === 'Enter') {
      this.props.dispatch(addTodo(this.props.text));
    }
  }

  onTodoClick(id) {
    this.props.dispatch(toggleComplete(id));
  }

  render() {
    return <Todos
      todos={this.props.todos}
      text={this.props.text}
      onInputChange={this.onInputChange.bind(this)}
      onInputKeyPress={this.onInputKeyPress.bind(this)}
      onTodoClick={this.onTodoClick.bind(this)}
      onUndo={() => this.props.dispatch(undo())}
      onRedo={() => this.props.dispatch(redo())}
      canUndo={this.props.canUndo}
      canRedo={this.props.canRedo}
    />
  }
}

const mapStateToProps = (state) => {
  return {
    todos: state.todos.present,
    text: state.input.text,
    canUndo: state.todos.past.length > 0,
    canRedo: state.todos.future.length > 0,
  };
}

export default connect(mapStateToProps)(TodosContainer);
