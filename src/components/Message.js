import React, { Component } from "react"

// program to change text when clicked on button

class Message extends Component {
    constructor() {
        super()
        this.state = {
            message: "Welcome Visitor"           // 1st declared noraml state which will be render as message
        }
    }

    changetext() {                               // changed state value using setState, of message, on click of button.
        this.setState({
            message: "Thank you for subscribing"
        })
    }



    render() {
        return (
            <div>
                <h1>{this.state.message}</h1>
                <button onClick={() => { this.changetext() }}>Subscribe</button>
            </div>
        )
    }
}

export default Message