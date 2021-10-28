import React, { Component } from 'react'

import Child from './Child'

export default class Parent extends Component {
    constructor(props) {
        super(props)
        this.state = {
            hasError: "",
        }
    }

    static getDerivedStateFromError(error) {
        console.log(error)
        return { hasError: error }
    }

    render() {
        return (
            <div>
                <h2>parent</h2>
                {this.state.hasError ? <h2>error</h2> : <Child />}
            </div>
        )
    }
}
