import React from "react";
import './imagelinkform.css'



const ImageLinkForm= ({ onInputChange }) => {
    return(
        <div>
            <p className="message">This app detects faces in your pictures. Give it a try</p>
            <div className="search-area">
                <input type='text'  onChange={onInputChange}/>
                <button>Detect</button>
            </div>
        </div>
    )
}

export default ImageLinkForm;