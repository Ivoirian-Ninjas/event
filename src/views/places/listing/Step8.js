import React, { Component } from 'react'

export default class Step8 extends Component {
    render() {
        return (
            <div className="ConteneurStepOne">
                <div style={{...this.props.setting}}>
                    <div style={{...this.props.parameters, width: "88%", background:"#221626"}}></div>
                </div>

                    <h1 className="hOneStepOne">Enter your payment info</h1>
                    <h2 className = "hTwoStepOne" > Step 8 </h2>
                    <div className="ContenuStepTwo">
                        <div className="DivStepOne">
                            <label className="LabelStepOne">
                                Notice that this step is not required. We will give you the possibility to accept cash from you guests. 
                                However, by choosing this option we will not be able to back you up in case of incidence.
                            </label>
                            <input name="cardName"  className="InputStepOne" placeholder="e.g. VISA" onChange={this.props.handleChange}/>
                            <input name="cardNumber" className="InputStepOne" placeholder="e.g. XX-XX-XX-XX" onChange={this.props.handleChange}/>
                        
                        </div>
                {/** Only show this when the user start typing info for the credit card */}
                        <div className="DivStepOne">
                            <label className="LabelStepOne">Choose you cancelation policy</label>
                            <div className="">
                                <div className="">
                                    <input type="checkbox" id="cancelFlex" name="cancelFlex" onChange={this.props.handleChange}/>
                                    <label htmlFor="cancelFlex" className="InfoStepFour">
                                        <h4 className="TextHelps">Flexible:</h4>
                                        <ul className="Helps">
                                            <li className="liHelps">
                                                If the guest has paid in full and the booking is canceled more than five 
                                                days prior to booking start date, a full refund (minus fees) is issued.
                                            </li>
                                            <li className="liHelps">
                                                If canceled less than five days prior to booking start date, a partial refund 
                                                of 75 percent of the full cost (minus fees) is issued, but the reservation 
                                                deposit is non-refundable.
                                            </li>
                                        </ul>
                                    </label> 
                                </div>
                                <div className="">
                                    <input type="checkbox" id="cancelModerate" name="cancelModerate" onChange={this.props.handleChange}/>
                                    <label htmlFor="cancelModerate" className="InfoStepFour"> 
                                        <h4 className="TextHelps">Moderate:</h4>
                                        <ul className="Helps">
                                            <li className="liHelps"> 
                                                If the guest has paid in full and the booking is canceled more than seven days 
                                                prior to booking start date, a partial refund of 75 percent of the full cost 
                                                (minus fees) is issued
                                            </li>
                                            <li className="liHelps">
                                                If canceled less than seven days prior to booking start date, a partial refund 
                                                of 50% of the total rental amount (minus fees) is issued
                                            </li>
                                        </ul>
                                    </label>
                                </div>
                                <div>
                                    <input type="checkbox" id="cancelStrict" name="cancelStrict" onChange={this.props.handleChange}/>
                                    <label htmlFor="cancelStrict" className="InfoStepFour"> 
                                        <h4 className="TextHelps">Strict:</h4>
                                        <ul className="Helps">
                                            <li className="liHelps">
                                                If the guest has paid in full and the booking is canceled more than 14 days 
                                                prior to booking start date, a partial refund of 50% of the full rental amount 
                                                (minus fees) is issued
                                            </li>
                                            <li className="liHelps"> 
                                                If canceled less than 14 days prior to booking start date, no refund is issued
                                            </li>
                                        </ul>
                                    </label>
                                </div>
                     </div>
                        </div>
                <p className="ButtonStepOne">
                    <button onClick={this.props.previousStep} className="PrevOne"> 
                        <i className="fa fa-angle-left"></i> Back 
                    </button>
                    <button onClick={this.props.nextStep} className="NextOne">
                        Next <i className="fa fa-angle-right"></i> 
                    </button>
                </p>
                </div>

            </div>
        )
    }
}
