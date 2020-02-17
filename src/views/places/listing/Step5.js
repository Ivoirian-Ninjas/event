import React, { Component } from 'react'

export default class Step5 extends Component {
    render() {
        return (
            <div>
                <h1>Pricing & Availability</h1>
                <div>
                        <label>Price</label>
                        <input type= 'number' name='price' placeholder='0.00' onChange={this.props.handleChange} />
                    </div>
                
                 <p><button onClick={this.props.previousStep}>Back</button></p>
                <p><button onClick={this.props.nextStep}>Next</button></p>
                
            </div>
        )
    }
}
