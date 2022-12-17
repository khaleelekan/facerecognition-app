import React from "react";
import './navigation.css'


const Navigation = ({onRouteChange, isSignedIn}) => {
    if(isSignedIn){
        return(
        <div className="nav">
        <nav onClick={()=> onRouteChange('signout')}> Sign Out </nav>
     </div>)
    }else{
        return(
            <div className="nav">
        <nav onClick={()=> onRouteChange('signin')}>Sign In</nav>
        <nav onClick={()=> onRouteChange('register')}> Register</nav>
     </div>
            )  
    }
    
}

export default Navigation;