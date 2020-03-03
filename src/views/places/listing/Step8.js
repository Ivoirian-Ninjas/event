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
                    <input name="cardName" onChange={this.props.handleChange} placeholder="Name on Card"/>
                    <input name="cardNumber" onChange={this.props.handleChange} placeholder="Card Number"/>
                    
                </div>
                {/** Only show this when the user start typing info for the credit card */}
                <div>
                    <h4>Choose you cancelation policy</h4>
                    <div className="cancellationPolicy">
                        <div>
                            <input type="checkbox" name="cancelFlex" onChange={this.props.handleChange}/>
                            <h4>Flexible:</h4>
                            <ul>
                                <li>If the guest has paid in full and the booking is canceled more than five days prior to booking start date, a full refund (minus fees) is issued.</li>
                                <li>If canceled less than five days prior to booking start date, a partial refund of 75 percent of the full cost (minus fees) is issued, but the reservation deposit is non-refundable.</li>
                            </ul>

                        </div>
                        <div>
                            <input type="checkbox" name="cancelModerate" onChange={this.props.handleChange}/>

                            <h4>Moderate:</h4>

                            <ul>
                           <li> If the guest has paid in full and the booking is canceled more than seven days prior to booking start date, a partial refund of 75 percent of the full cost (minus fees) is issued</li>
                            <li>If canceled less than seven days prior to booking start date, a partial refund of 50% of the total rental amount (minus fees) is issued</li>
                            </ul>


        
                        </div>

                        <div>
                            <input type="checkbox" name="cancelStrict" onChange={this.props.handleChange}/>

                            <h4>Strict:</h4>

                            <ul>
                                <li>If the guest has paid in full and the booking is canceled more than 14 days prior to booking start date, a partial refund of 50% of the full rental amount (minus fees) is issued</li>
                                <li> If canceled less than 14 days prior to booking start date, no refund is issued</li>
                            </ul>
                                    
                        </div>
                    </div>
                </div>
                <p><button onClick={this.props.previousStep}>Back</button></p>
                <p><button onClick={this.props.nextStep}>Next</button></p>
            </div>
        )
    }
}
