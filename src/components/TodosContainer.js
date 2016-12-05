import React, { Component } from 'react';
import Todos from './Todos';
import { connect } from 'react-redux';

class TodosContainer extends Component {
  onInputChange(text) {
    this.props.dispatch({
      type: 'TEXT_CHANGED',
      text,
    });
  }

  onInputKeyPress(event) {
    if (event.key === 'Enter') {
      this.props.dispatch({
        type: 'ADD_TODO'
      });
    }
  }

  onTodoClick(id) {
    this.props.dispatch({
      type: 'TOGGLE_COMPLETE',
      id
    });
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
