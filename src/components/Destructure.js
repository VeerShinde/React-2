// how can we destructure props.
// 2 ways of destructuring

import React, { Component } from "react"

const Destructure = ({ name, superhero }) => {
    return (
        <h1>Hello {name} a.k.a {superhero}</h1>
    )
}

export default Destructure

// import React, { Component } from "react"

// const Destructure = (props) => {
//     const { name, superhero } = props
//     return (
//         <h1>Hello {name} a.k.a {superhero}</h1>
//     )
// }

// export default Destructure