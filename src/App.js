import React, { Component } from "react"
// import logo from './logo.svg';
import './App.css';
import Greet from './components/Greet';
import Message from "./components/Message";
import Welcome from "./components/Welcome"



function App() {
  return (
    <div className="App">
      {/* <Greet name="Veer" heroname="SuperMan" >
        <p>I am Superhero</p>
      </Greet>
      <Greet name="Kunal" heroname="Thor" >
        <button>Click Me</button>
      </Greet>
      <Greet heroname="Mothers of all Superheros" name="Mom" />
      <Welcome name="Adarsh"></Welcome> */}
      <Message />
    </div>
  );
}

export default App;
