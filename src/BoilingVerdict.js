  import React, { Component } from 'react'

class BoilingVerdict extends Component {
    constructor(props) {
        super(props)
        this.state = {
            celsius: props.celsius
        }
    }

   

    render() {
        const celsius=this.props.temperature
        console.log(celsius)
        if (celsius >= 100) {
            return (<p>the water will boil</p>)
        } else {
            return (<p>the water will not boil</p>)
        }
    }
}

export default BoilingVerdict 

 

/* import React from 'react'
function BoilingVerdict(props) {
    if (props.celsius >= 100) {
        return <p>The water would boil.</p>;
    }
    return <p>The water would not boil.</p>;
}

export default BoilingVerdict */