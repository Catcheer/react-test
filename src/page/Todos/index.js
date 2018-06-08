import React, { Component } from "react";
import Addtodo from "./container/Addtodo";
// import TodoList from "./component/TodoList";
import Footer from "./component/Footer";
// import mockTodolist from "../../mock/TodoList";
import VisibilityState from './container/VisibleTodoList'


class Todos extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
     <div>
        
        <Addtodo />
        <VisibilityState />
        <Footer />
     
     </div>
    );
  }
}

export default Todos;
