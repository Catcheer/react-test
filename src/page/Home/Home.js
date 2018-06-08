import React ,{Component} from 'react'
import Welcome from './WelcomeDialog'

class Home extends Component{
    constructor(props){
        super(props)
        this.state={}
    }

    render(){
        return <Welcome />
    }
}
export default Home