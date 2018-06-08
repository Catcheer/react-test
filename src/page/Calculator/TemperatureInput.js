import React, { Component } from 'react'

const scaleNames = {
    c: 'Celsius',
    f: 'Fahrenheit'
}


class TemperatureInput extends Component {
    constructor(props) {
        super(props)
        // this.state = {
        //     temperature: '0'
        // }
        this.handleChange = this.handleChange.bind(this)
    }
    handleChange(event) {
       this.props.onTemplateChang(event.target.value)
    }
    render() {
        const temperature = this.props.temperature
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