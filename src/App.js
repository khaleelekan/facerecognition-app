 import React from 'react';
 import './App.css'
 import Navigation from '../src/components/navigation/navigation' 
import Logo from './components/logo/logo.component';
import ImageLinkForm from './components/imagelinkform/imagelinkform';


const App = ()=>{
  return(
    <div>
       <Navigation />
       <Logo />
       <ImageLinkForm />
    </div>
  )
}

export default App;
