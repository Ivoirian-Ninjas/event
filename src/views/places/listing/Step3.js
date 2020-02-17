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
                     
                    <textarea name='description' placeholder='Show how amazing your place is.' onChange={this.props.handleChange}/>
                </div>
                </div>

                <p><button onClick={this.props.previousStep}>Back</button></p>
                <p><button onClick={this.props.nextStep}>Next</button></p>
            </div>
        )
    }
}
