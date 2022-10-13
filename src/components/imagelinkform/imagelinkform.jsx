import React from "react";
import './imagelinkform.css'



const ImageLinkForm= () => {
    return(
        <div>
            <p className="message">This app detects faces in your pictures. Give it a try</p>
            <div className="search-area">
                <input type='text' />
                <button>Detect</button>
            </div>
        </div>
    )
}

export default ImageLinkForm;