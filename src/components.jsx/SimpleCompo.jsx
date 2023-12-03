import React, { Component } from 'react'

class SimpleCompo extends Component {
    constructor(props) {
        super(props)

        this.state = {
            count: 0,
            toggle: false
        }
    }
    handleToggle = () => {
        this.setState({toggle: !this.state.toggle})
    }
    handelClick = () => {
        if(this.state.toggle){
            this.setState({count: this.state.count +1})
        }
    }
    render() {
        console.log("Simple Components");
        return (
            <>
                <div>
                    <p>Simple Components</p>
                    <h2>{this.state.count}</h2>
                </div>
                <div>
                    <button onClick={this.handleToggle}>Toggle</button>
                    <button onClick={this.handelClick}>Count</button>
                </div>
            </>
        )
    }
}

export default SimpleCompo
