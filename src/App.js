 import React from 'react';
 import './App.css'
 import Navigation from '../src/components/navigation/navigation' 
import Logo from './components/logo/logo.component';
import Rank from './components/Rank/rank.component'
import ImageLinkForm from './components/imagelinkform/imagelinkform';


const App = ()=>{
  return(
    <div>
       <Navigation />
       <Logo />
       <Rank />
       <ImageLinkForm />
    </div>
  )
}

export default App;
