import React,{Component} from 'react'
import FancyBorder from './FancyBorder'


class Dialog extends Component{
    constructor(props){
        super(props)
        this.state={

        }
    }

    render(){
        return (
        <div>
            <FancyBorder color="red">
                <h1>{this.props.title}</h1>
                <p>{this.props.text}</p>
                {this.props.children}
            </FancyBorder>
           
        </div>
        )
    }
}

export default Dialog