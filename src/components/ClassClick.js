import React, { Component } from "react"

class ClassClick extends Component {
    render() {
        function onclick() {
            console.log("Button Clickedd")
        }
        return (
            <div>
                <button onClick={this.onclick}>Click</button>
            </div>
        )
    }
}

export default ClassClick

