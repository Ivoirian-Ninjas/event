import React, { Component } from 'react'

export default class Step8 extends Component {
    render() {
        return (
            <div>
                <div>
                    <h4>Enter your payment info</h4>
                    <small>
                        Notice that this step is not required. We will give you the possibility to accept cash from you guests. 
                        However, by choosing this option we will not be able to back you up in case of incidence.
                    </small>
                    <input name="cardName" onChange={this.props.handleChange}/>
                    <input name="cardNumber" onChange={this.props.handleChange}/>
                    
                </div>
                {/** Only show this when the user start typing info for the credit card */}
                <div>
                    <h4>Choose you cancelation policy</h4>
                </div>
                <p><button onClick={this.props.previousStep}>Back</button></p>
                <p><button onClick={this.props.nextStep}>Next</button></p>
            </div>
        )
    }
}
