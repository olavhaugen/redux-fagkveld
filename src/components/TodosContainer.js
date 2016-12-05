import React, { Component } from 'react';
import Todos from './Todos';
import { connect } from 'react-redux';
import addTodo from '../actionCreators/addTodo';
import textChanged from '../actionCreators/textChanged';
import toggleComplete from '../actionCreators/toggleComplete';

class TodosContainer extends Component {
  onInputChange(text) {
    this.props.dispatch(textChanged(text));
  }

  onInputKeyPress(event) {
    if (event.key === 'Enter') {
      this.props.dispatch(addTodo());
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
    />
  }
}

const mapStateToProps = (state) => {
  return {
    todos: state.todos,
    text: state.text,
  };
}

export default connect(mapStateToProps)(TodosContainer);
