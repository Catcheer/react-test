import React ,{Component} from 'react'
import Button from 'antd/lib/button';

class Random extends Component{
    constructor(props){
        super(props)
        this.state={

        }
    }
    render(){
        return (<Button onClick={this.props.randomNum} >{this.props.btnDes}</Button>)
    }
}
export default Random