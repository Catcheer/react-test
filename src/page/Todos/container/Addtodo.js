import React, { Component } from "react";

import { connect } from "react-redux";
import { addTodo } from "../action";

class Addtodo extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    const { dispatch } = this.props;
    let input;
    return (
      <div>
        <h3>todolist</h3>
        <input
          onKeyDown={e => {
            if (input.value && e.keyCode === 13) {
              dispatch(addTodo(input.value));
              input.value = "";
            }
          }}
          ref={node => (input = node)}
          placeholder="请输入"
        />
      </div>
    );
  }
}

Addtodo=connect()(Addtodo)

export default Addtodo;
