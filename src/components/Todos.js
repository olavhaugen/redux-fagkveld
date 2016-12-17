import React, { Component } from 'react';
import Todo from './Todo';

class Todos extends Component {
  render() {
    return (
      <div>
        <input
          className="form-control"
          type="text"
          placeholder="What do you want to fail at this year?"
          value={this.props.text}
          onKeyPress={event => this.props.onInputKeyPress(event)}
          onChange={event => this.props.onInputChange(event.target.value)}
        />
        <button
          className="btn btn-info"
          disabled={!this.props.canUndo}
          onClick={() => this.props.onUndo()}>
          Undo
        </button>
        <button
          className="btn btn-info"
          disabled={!this.props.canRedo}
          onClick={() => this.props.onRedo()}>
          Redo
        </button>
        <br />
        <div className="list-group">
          {this.props.todos.map(todo =>
            <Todo
              key={todo.id}
              text={todo.text}
              completed={todo.completed}
              onClick={() => this.props.onTodoClick(todo.id)}
            />
          )}
        </div>
      </div>
    );
  }
}

export default Todos;
