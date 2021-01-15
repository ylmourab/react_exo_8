
import './App.css';

import React, { Component } from 'react'

export class App extends Component {

  bonjour = () =>{
    console.log("bonjour")
  }

  hover = () =>{
    console.log("tu as hover le titre")
  }

  copy = () =>{
    console.log("tu ne peux pas copier le titre !")
  }


  render() {

    
    return (
      <div>
        <h1 onMouseOver={this.hover} onCopy={this.copy}>Exercice 8</h1>
        <button onClick={this.bonjour}>click</button>
        
      </div>
    )
  }
}

export default App
