import React ,{Component} from 'react'

import FullRoster from './FullRoster'
import Player from './Player'
import {  Route,  Switch } from "react-router-dom";

class TestRouter extends Component {
    constructor(props){
        super(props)
        this.state={}
    }

    render(){
        return (<div>
            <Switch>
                <Route exact path='/roster' component={FullRoster} />
                <Route  path='/roster/:number' component={Player} />
            </Switch>
        </div>)
    }
}
export default TestRouter 