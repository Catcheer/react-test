import React,{Component} from 'react'

class FancyBorder extends Component{
    constructor(props){
        super(props)
        this.state={

        }
    }

    render(){
        const color=this.props.color
        return (
            <div className={'fancyBorder fancyBorder-'+color}>
                {this.props.children}
            </div>
        )
    }
}

export default FancyBorder