import React, { Component } from 'react';


class Todo extends Component {
  render() {
    return (
      <a className="list-group-item" onClick={this.props.onClick}>
        {this.props.completed ? <s>{this.props.text}</s> : this.props.text}
      </a>
    );
  }
}

export default Todo;
