// Destruced props in class component

import React, { Component } from "react"

class Destructured extends Component {
    render() {
        const { name } = this.props
        return (
            <div>
                <h1>I am {name}</h1>
            </div>
        )
    }
}

export default Destructured


// syntax for destructuring state
// const {state, state1} = this.state