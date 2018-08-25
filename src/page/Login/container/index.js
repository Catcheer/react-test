import React, { Component } from 'react'
import { connect } from "react-redux";
import Form from '../components/Form'

import {submitLogin} from '../actions/index.js'

const mapStateToProps = (state, ownProps) => {
    return {
        state: state
    }
        
  };
  const mapDispatchToProps=(dispatch)=>({
    handlerLogin:(value)=>{
          dispatch(submitLogin(value))
      }
  })
  

class App extends Component {

    handlerLogin=value=>{
        this.props.handlerLogin(value)
    }
    render(){
        console.log(this.props)
        return <Form handlerLogin={this.handlerLogin} />
    }
}

const Login=connect(mapStateToProps,mapDispatchToProps)(App)
export default Login