 import React, { Component } from 'react';
 import './App.css'
 import Navigation from '../src/components/navigation/navigation' 
 import SignIn from '../src/components/Signin/Signin' 
 import Register from '../src/components/Register/register'
 import Logo from './components/logo/logo.component';
 import Rank from './components/Rank/rank.component'
 import ImageLinkForm from './components/imagelinkform/imagelinkform';

class App extends Component{
  constructor(){
    super();

    this.state={
      input : '',
      route: 'signin',
      isSignedIn: false
    }
  
  }
   onInputChange = (event) => {
   console.log(event.target.value)

 }

 onRouteChange = (route)=>{
  if(route === 'signout'){
    this.setState({isSignedIn: false})
  }else if(route === 'home'){
    this.setState({isSignedIn: true})
  }
   this.setState({route: route})
 }
  onSubmit = () => {
    console.log('just clicked')
    
const raw = JSON.stringify({
  "user_app_id": {
    "user_id": "clarifai",
    "app_id": "main"
  },
  "inputs": [
      {
          "data": {
              "image": {
                //  "url": {IMAGE_URL}
              }
          }
      }
  ]
});

const requestOptions = {
    method: 'POST',
    headers: {
        'Accept': 'application/json',
        'Authorization': 'Key ' //+ {1b2c4e57a4e14a97a6ef5c5da55ce1cc}
    },
    body: raw
};

// NOTE: MODEL_VERSION_ID is optional, you can also call prediction with the MODEL_ID only
// https://api.clarifai.com/v2/models/{YOUR_MODEL_ID}/outputs
// this will default to the latest version_id

fetch(`https://api.clarifai.com/v2/models/face-detection/versions/6dc7e46bc9124c5c8824be4822abe105/outputs`, requestOptions)
    .then(response => response.text())
    .then(result => console.log(result))
    .catch(error => console.log('error', error));
  
  }

  render(){
    const {isSignedIn, route } = this.state;
    return(
    <div>
       <Navigation isSignedIn={isSignedIn} onRouteChange={this.onRouteChange}/>
       {route === 'home'
       ? <div>
       <Logo />
       <Rank />
       <ImageLinkForm onInputChange={this.onInputChange} onSubmit={this.onSubmit} /> 
      </div>
      :( route === 'signin' ? <SignIn onRouteChange={this.onRouteChange}/>:
       <Register onRouteChange={this.onRouteChange}/>)
      
      }
    </div>
    )
  }
}

export default App;