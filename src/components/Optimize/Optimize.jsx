import React, { PureComponent } from 'react'

import "./Optimize.css"

export default class Parent extends PureComponent {
    constructor(props) {
        super(props)
        this.state = { carName: "benz" }
        this.changeCar = this.changeCar.bind(this)
    }

    changeCar() {
        this.setState({ carName: "ae86" })
    }

    render() {
        return (
            <div className="parent">
                <h3>parent</h3>
                <span>car name: {this.state.carName}</span><br />
                <button onClick={this.changeCar}>change car</button>
                <Child carName={this.state.carName}/>
            </div>
        )
    }
}

class Child extends PureComponent {
    render() {
        return (
            <div className="child">
                <h3>child</h3>
                <span>get car name from parent: {this.props.carName}</span>
            </div>
        )
    }
}