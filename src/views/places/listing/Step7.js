import React, { Component } from 'react'

export default class Step7 extends Component {
    render() {
        return (
            <div className="ConteneurStepOne">
                {/*<div style={{...this.props.setting}}>
                    <div style={{...this.props.parameters, width: "77%", background:"#260432"}}></div>
        </div>*/}
                <h1 className = "hOneStepOne">Rules of the house</h1>
                {/*<h2 className = "hTwoStepOne" > Step 7 </h2>*/}
                <div className = "ContenuStepOne" >
                    <div className="DivStepOne">
                        
                        <label className="LabelStepOne">Please let your guests know what are your rules. </label>
                        <textarea name="rules" onChange={this.props.handleChange} className="TextAreaStepOne"></textarea>
                    </div>
                    <p className="ButtonStepOne">
                    <button onClick={this.props.previousStep} className="PrevOne"> 
                        <i className="fa fa-angle-left"></i> Back 
                    </button>
                    <button onClick={() =>  (this.props.rules != '')  && this.props.nextStep()} className="NextOne">
                        Next <i className="fa fa-angle-right"></i> 
                    </button>
                </p>
                </div>
            </div>
        )
    }
}
