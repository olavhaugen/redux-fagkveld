import React, { Component } from 'react';
import Todo from './Todo';

class Todos extends Component {
  constructor() {
    super();

    this.onInputKeyPress = this.onInputKeyPress.bind(this);
    this.onInputChange = this.onInputChange.bind(this);
    this.onTodoClick = this.onTodoClick.bind(this);

    this.state = {
      nextTodoId: 0,
      todos: [],
      text: '',
    }
  }

  onInputChange(text) {
    this.setState({
      text
    });
  }

  onInputKeyPress(event) {
    if (event.key === 'Enter') {
      const nextTodoId = this.state.nextTodoId + 1;
      this.setState({
        nextTodoId,
        todos: [
          ...this.state.todos,
          { id: nextTodoId, completed: false, text: this.state.text }
        ],
      });
    }
  }

  onTodoClick(id) {
    const todo = this.state.todos.find(todo => todo.id === id);
    this.setState({
      todos: this.state.todos.map(todo => {
        if (todo.id === id) {
          todo.completed = !todo.completed;
        }
        return todo;
      })
    })
  }

  render() {
    return (
      <div>
        <input
          className="form-control"
          type="text"
          placeholder="What do you want to fail at this year?"
          value={this.state.text}
          onKeyPress={this.onInputKeyPress}
          onChange={e => this.onInputChange(e.target.value)}
        />
        <br />
        <div className="list-group">
          {this.state.todos.map(todo =>
            <Todo
              key={todo.id}
              text={todo.text}
              completed={todo.completed}
              onClick={() => this.onTodoClick(todo.id)}
            />
          )}
        </div>
      </div>
    );
  }
}

export default Todos;
