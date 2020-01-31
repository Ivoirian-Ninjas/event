import React from 'react'
import '../assets/errors.css'

export default function Errors() {
    return (
        // {/** Create a file in the css for error class */}
        <div className='error'>
            <div className="titre">
                <h1> <i className="fa fa-exclamation-circle"></i> Errors</h1> 
            </div>
            <div className="contenu">
                <ul className='errors-content' >
                    <li></li>
                </ul>
            </div>
            
        </div>
    )
}
