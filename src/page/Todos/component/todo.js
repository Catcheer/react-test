import React, { Component } from "react";

class Todo extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    const { content, done, onClick } = this.props;
    return (
      <li style={{ color: done ? "red" : "" }}>
        <input
          onChange={onClick}
          className="toggle"
          type="checkbox"
          checked={done ? "checked" : ""}
        />
        <label href="/#">{content}</label>
      </li>
    );
  }
}
export default Todo;