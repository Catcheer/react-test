import React, { Component } from 'react'
import BoilingVerdict from './BoilingVerdict'
import TemperatureInput from './TemperatureInput'



function toCelsius(fahrenheit) {
    return (fahrenheit - 32) * 5 / 9;
  }
  
  function toFahrenheit(celsius) {
    return (celsius * 9 / 5) + 32;
  }


  function tryConvert(temperature,convert){
    const input=parseFloat(temperature)
    if(Number.isNaN(input)){
        return ''
    }
    const out=convert(input)
    const rounded=Math.round(out*1000)/1000
    return rounded.toString()
  }

class Calculator extends Component {
    constructor(prop) {
        super(prop)
        this.state = {
            scale:'c',
            temperature: '37'
        }
        this.hanleCelsiusChange=this.hanleCelsiusChange.bind(this)
        this.hanleFahrenheitChange=this.hanleFahrenheitChange.bind(this)
    }

    hanleFahrenheitChange(temperature){
        this.setState({
            scale:'f',
            temperature
        })
    }

    hanleCelsiusChange(temperature){
        this.setState({
            scale:'c',
            temperature
        })
    }


    render() {
        const scale=this.state.scale
        const temperature=this.state.temperature
        const celsius=scale==='c'?temperature:tryConvert(temperature,toCelsius)
        const fahrenheit=scale==='f'?temperature:tryConvert(temperature,toFahrenheit)
        
        return (
            <div>
                <TemperatureInput onTemplateChang={this.hanleCelsiusChange} temperature={celsius} scale='c' />
                <TemperatureInput onTemplateChang={this.hanleFahrenheitChange}  temperature={fahrenheit}  scale='f' />
                <BoilingVerdict temperature={parseFloat(temperature)} />
            </div>
        )
    }
}

export default Calculator