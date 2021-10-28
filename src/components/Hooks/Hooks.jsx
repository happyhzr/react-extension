import React from 'react'
import ReactDOM from 'react-dom';

// export default class Hooks extends Component {
//     constructor(props) {
//         super(props)
//         this.state = { count: 0 }
//         this.add = this.add.bind(this)
//     }

//     add() {
//         this.setState((state) => {
//             return { count: state.count + 1 }
//         })
//     }

//     render() {
//         return (
//             <div>
//                 <h2>sum: {this.state.count}</h2>
//                 <button onClick={this.add}>add</button>
//             </div>
//         )
//     }
// }

function Hooks() {
    const [count, setCount] = React.useState(0)
    const myRef = React.useRef()

    React.useEffect(() => {
        const timer = setInterval(() => {
            setCount((count) => {
                return count + 1
            })
        }, 1000);
        return () => {
            clearInterval(timer)
        }
    }, [])

    function add() {
        setCount((count) => {
            return count + 1
        })
    }

    function show() {
        alert(myRef.current.value)
    }

    function unmount() {
        ReactDOM.unmountComponentAtNode(document.getElementById("root"))
    }

    return (
        <div>
            <input type="text" ref={myRef} />
            <h2>sum: {count}</h2>
            <button onClick={add}>add</button>
            <button onClick={unmount}>unmount</button>
            <button onClick={show}>show</button>
        </div>
    )
}

export default Hooks