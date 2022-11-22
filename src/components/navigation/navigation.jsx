import React from "react";
import './navigation.css'


const Navigation = ({onRouteChange}) => {
    return(
        <div className="nav">
            <nav onClick={()=> onRouteChange('signin')}>Sign Out</nav>
        </div>
    )
}

export default Navigation;