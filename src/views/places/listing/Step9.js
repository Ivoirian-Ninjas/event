import React, { Component } from 'react'

export default class Step9 extends Component {
    render() {
        return (
            <div className="ConteneurStepOne">
                <div style={{...this.props.setting}}>
                    <div style={{...this.props.parameters, width: "100%", background:"#C41FFF"}}></div>
                </div>
                <h1 className="hOneStepOne">Review & Agree</h1>
                <h2 className = "hTwoStepOne" > Step 9 </h2>
                    <div className="ContenuStepOne">
                        <div className="DivStepOne"></div>
                <p className="ButtonStepOne">
                    <button onClick={this.props.previousStep} className="PrevOne"> 
                        <i className="fa fa-angle-left"></i> Back 
                    </button>
                    <button onClick={this.props.handleSubmit} className="SaveOne">
                        Save <i className="fa fa-save"></i>
                    </button>
                </p>
                </div>
            </div>
        )
    }
}
