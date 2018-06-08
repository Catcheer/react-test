import React, { Component } from 'react'

class Addtodo extends Component {
    constructor(props){
        super(props)
        this.state={}
    }
    render(){
        return (<div>
            <h3>todolist</h3>
            <input placeholder="请输入" />
        </div>)
    }
}

export default Addtodo