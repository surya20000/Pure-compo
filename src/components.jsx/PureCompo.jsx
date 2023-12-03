import React, { PureComponent } from 'react'

class PureCompo extends PureComponent {
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
        this.setState({count: this.state.count +1})
    }
    render() {
        console.log("Pure Components");
        return (
            <>
                <div>
                    <p>Pure Components</p>
                    <h2>{this.state.count}</h2>
                </div>
                <div>
                    <button onClick={this.handleToggle}>Toggle</button>
                    <button onClick={this.state.toggle ? this.handelClick : null}>Count</button>
                </div>
            </>
        )
    }
}

export default PureCompo
