import React, { Component } from 'react'

const scaleNames = {
    c: 'Celsius',
    f: 'Fahrenheit'
}


class TemperatureInput extends Component {
    constructor(prop) {
        super(prop)
        this.state = {
            temperature: '0'
        }
        this.handleChange = this.handleChange.bind(this)
    }
    handleChange(event) {
        this.setState({
            temperature: event.target.value
        })
    }
    render() {
        const temperature = this.state.temperature
        const scale=this.props.scale
        return (<div>
            <fieldset>
                <legend>Enter your tempauter in {scaleNames[scale]}</legend>
                <input value={temperature} onChange={this.handleChange} />
            </fieldset>
        </div>)
    }
}
export default TemperatureInput