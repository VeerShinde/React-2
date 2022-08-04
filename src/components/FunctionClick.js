import React from "react"

function FunctionClick() {

    function onclick() {
        console.log("Button Clicked")
    }

    return (
        <div>
            <button onClick={onclick}>Click me</button>
        </div>
    )
}

export default FunctionClick