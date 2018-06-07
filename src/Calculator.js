import React, { Component } from 'react'
import BoilingVerdict from './BoilingVerdict'
import TemperatureInput from './TemperatureInput'

class Calculator extends Component {
    constructor(prop) {
        super(prop)
        this.state = {
            temperature: '0'
        }

    }



    render() {
        const temperature=this.state.temperature
        return (
            <div>
                <TemperatureInput scale='c' />
                <TemperatureInput scale='f' />
                <BoilingVerdict celsius={temperature} />
            </div>
        )
    }
}

export default Calculator