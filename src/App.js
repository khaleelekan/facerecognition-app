 import React, { Component } from 'react';
 import './App.css'
 import Navigation from '../src/components/navigation/navigation' 
 import Logo from './components/logo/logo.component';
 import Rank from './components/Rank/rank.component'
 import ImageLinkForm from './components/imagelinkform/imagelinkform';

class App extends Component{
  constructor(){
    super();

    this.state={
      input : '',
    }
  
  }
   onInputChange = (event) => {
   console.log(event.target.value)
 }
  onSubmit = () => {
    console.log('just clicked')
  }

  render(){
    return(
    <div>
       <Navigation />
       <Logo />
       <Rank />
    <ImageLinkForm onInputChange={this.onInputChange} onSubmit={this.onSubmit} /> 
    </div>
    )
  }
}

export default App;