import React from "react"

const Greet = (props) => {
    console.log(props)
    return (
        <div>
            <h1>Good Morning, {props.name} a.k.a {props.heroname}</h1>
            {props.children}
        </div>
    )
}

export default Greet;