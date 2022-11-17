import React from "react";
import './logo.styles.css'
import Tilt from 'react-parallax-tilt';


const Logo = () => {
    return(
           <Tilt className="tilt">      
            <div className="logo">
           <img src="/images/face.png" alt="logo" width="100" height="100" />
            </div>
             </Tilt>
     
    )
}

export default Logo;