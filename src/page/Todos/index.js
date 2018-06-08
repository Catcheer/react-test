import React, { Component } from "react";
import Addtodo from './component/Addtodo'

class Todos extends Component {
    constructor(props) {
      super(props);
      this.state = {};
    }
    render(){
        return (<div>
            <Addtodo />
        </div>)
    }
  }
  
  export default Todos