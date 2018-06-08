import React, { Component } from 'react'

class Link extends Component {
   constructor(props){
       super(props)
        this.state={}
   }
   render(){
       return (<li>{this.props.children}</li>)
   }
}
export default Link