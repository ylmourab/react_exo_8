
import './App.css';

import React, { Component } from 'react'

export class App extends Component {

  state = {
    nombre : 1
  }

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

    console.log(this.state.nombre)

    
    return (
      <div>
        <h1 onMouseOver={e =>{ console.log(e.target.innerHTML)}} onCopy={this.copy}>Exercice 8</h1>
        <button onClick={this.bonjour}>click</button>
        
      </div>
    )
  }
}

export default App
