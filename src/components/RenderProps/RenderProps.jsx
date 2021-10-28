import React, { Component } from 'react'

import "./RenderProps.css"
import C from "../SetState/SetState"

export default class Parent extends Component {
    render() {
        return (
            <div className="parent">
                <h3>parent</h3>
                <A render={(name) => { return <C name={name} /> }} />
            </div>
        )
    }
}

class A extends Component {
    constructor(props) {
        super(props)
        this.state = { name: "tom" }
    }

    render() {
        return (
            <div className="a">
                <h3>A</h3>
                {this.props.render(this.state.name)}
            </div>
        )
    }
}

class B extends Component {
    render() {
        return (
            <div className="b">
                <h3>B</h3>
                {this.props.name}
            </div>
        )
    }
}
