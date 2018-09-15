import React,{Component} from 'react'
import Dialog from './Dialog'
// import SplitPane from './SplitPane'

class WelcomeDialog extends Component{
    constructor(props){
        super(props)
        this.state={
            login:''
        }
        this.handleChange=this.handleChange.bind(this)
        this.singUp=this.singUp.bind(this)
    }

    handleChange(e){
        this.setState({
            login:e.target.value
        })
    }
    singUp(){
        alert('welcome '+this.state.login)
    }
    render(){
        return (
        <div>
           <Dialog
           title="WelcomeDialog"
           text="this is context"
           >
           <input value={this.state.login} 
                onChange={this.handleChange}
           />
           <button onClick={this.singUp}>
               sing up
           </button>
           </Dialog>
            {/* <SplitPane 
                left={<p>left</p>}
                right={<p>right</p>}
            /> */}
        </div>
        )
    }
}

export default WelcomeDialog