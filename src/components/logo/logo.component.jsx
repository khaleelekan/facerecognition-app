import React from "react";
import './logo.styles.css'
import Tilt from 'react-parallax-tilt';


const Logo = () => {
    return(
           <Tilt>
            
        <div className="logo">
           <img src="/images/face.png" alt="logo" width="150" height="150" />
           </div>
  
    </Tilt>
     
    )
}

export default Logo;