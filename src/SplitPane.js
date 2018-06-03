import React,{Component} from 'react'

class SplitPane extends Component{
    constructor(props){
        super(props)
        this.state={

        }
    }

    render(){
       return(
                <div className="SplitPane">
                <div className="SplitPane-left">
                    {this.props.left}
                </div>
                <div className="SplitPane-right">
                    {this.props.right}
                </div>
        </div>
       )
    }
}

export default SplitPane