import React, { Component } from "react";
import Todo from "./Todo";

class TodoList extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    console.log(this.props);
    const { todos ,onTodoClick} = this.props;
    return (
      <ul>
        {todos.map((item, index) => {
          return <Todo
            onClick={()=>{
                console.log(item.id)
                onTodoClick(item.id)
            }}
            {...item}
           key={"" + index} 
           />;
        })}
      </ul>
    );
  }
}

export default TodoList;
