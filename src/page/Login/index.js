import React, { Component } from 'react'

import Login from './container/index'

class App extends Component {
    render(){
        console.log(this.props)
        return <Login />
    }
}

export default App