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
                    <div className="ContenuStepOne">
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
