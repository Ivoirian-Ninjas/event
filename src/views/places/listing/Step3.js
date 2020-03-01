import React, { Component } from 'react'

export default class Step3 extends Component {
    render() {
        return (
            <div>
            <h1>Tell us more about your space</h1>
                <div>
                <div>
                     <label>Name</label>
                    <input type= 'text' name='name' placeholder='name' onChange={this.props.handleChange}/>
                </div>
                <div>
                     <label>Description</label>
                     <p>Include details about your space to attract more guest</p>
                     <ul>
                        <h3>Use these questions to guide you</h3>
                        <li>What activities are better suited for your space?</li>
                        <li>What features or amenities does your space have?</li>
                        <li>What makes your space unique?</li>
                    </ul>
                    <ul>
                        <h3> Do not include: </h3>
                        <li>Please do not include your <strong>contact information</strong> as the description will be publicly displayed on our platform.</li>

                    </ul>
                     
                    <textarea name='placeDesc' placeholder='Show how amazing your place is.' onChange={this.props.handleChange}/>
                </div>
                </div>
                {/**Use js for that */}
                <h4>Does you place have a parking option?</h4>
                <button>yes</button> <button>No</button>
                {/**Only display this div if there is a parking option */}
                <div>
                    <h4>Describe your parking</h4>
                    <p>
                        Things to consider: 
                        <ul>
                            <li>Is it a free parking</li>
                            <li>If it is not, please let the guests know its price per hour</li>
                            <li>What is the parking towing policy if there is any?</li>
                        </ul>
                    </p>
                    <textarea name="parkDesc"  onChange={this.props.handleChange}></textarea>
                </div>

                <p><button onClick={this.props.previousStep}>Back</button></p>
                <p><button onClick={this.props.nextStep}>Next</button></p>
            </div>
        )
    }
}
