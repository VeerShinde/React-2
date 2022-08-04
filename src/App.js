import React, { Component } from "react"
// import logo from './logo.svg';
import './App.css';
import Greet from './components/Greet';
import Message from "./components/Message";
import Welcome from "./components/Welcome"
import Counter from "./components/Counter"
import Destructure from "./components/Destructure";
import Destructured from "./components/DestructureinClass";
import FunctionClick from "./components/FunctionClick";
import ClassClick from "./components/ClassClick";




function App() {
  return (
    <div className="App">
      {/* <Greet name="Veer" heroname="SuperMan" >
        <p>I am Superhero</p>
      </Greet> */}
      {/* <Greet name="Kunal" heroname="Thor" >
        <button>Click Me</button>
      </Greet> */}
      {/* <Greet heroname="Mother of all Superheros" name="Mom" /> */}
      {/* <Destructure name="Veer" superhero="Superman" /> */}
      {/* <Destructured name="Vidya" /> */}
      {/* <Welcome name="Adarsh"></Welcome> */}
      {/* <Message /> */}
      {/* <Counter /> */}
      {/* <FunctionClick /> */}
      <ClassClick />
    </div>
  );
}

export default App;
