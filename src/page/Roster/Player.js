import React,{Component} from 'react'

class Player extends Component{
    constructor(props){
        super(props)
        this.state={}
    }
    render(){
       const {match:{params:{number}}}=this.props
        return <div>{`palyer ${number}`}</div>
    }
}

export default Player