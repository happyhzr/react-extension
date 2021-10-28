import React, { Component } from 'react'

import "./Context.css"

const MyContext = React.createContext()

export default class A extends Component {
    constructor(props) {
        super(props)
        this.state = { username: "happy" }
    }

    render() {
        console.log(this.state)
        console.log({ username: this.state.username })
        return (
            <div className="parent">
                <h3>A</h3>
                <h4>username: {this.state.username}</h4>
                <MyContext.Provider value={this.state}>
                    <B />
                </MyContext.Provider>
            </div>
        )
    }
}

class B extends Component {
    render() {
        return (
            <div className="child">
                <h3>B</h3>
                <h4>username from A: </h4>
                <C />
            </div>
        )
    }
}

// class C extends Component {
//     static contextType = MyContext

//     render() {
//         return (
//             <div className="grand">
//                 <h3>C</h3>
//                 <h4>username from A: {this.context.username}</h4>
//             </div>
//         )
//     }
// }

function C() {
    return (
        <div className="grand">
            <h3>C</h3>
            <h4>username from A: 
                <MyContext.Consumer>
                    {
                        (value)=>{
                            return value.username
                        }
                    }
                </MyContext.Consumer>
            </h4>
        </div>
    )
}