import React, { Component } from 'react'

export default class Step4 extends Component {
    render() {
        return (
            <div className="ConteneurStepOne">
            <div style={{...this.props.setting}}>
                <div style={{...this.props.parameters, width: "44%", background:"#5c047c"}}></div>
            </div>
                <h1 className="hOneStepOne">What amensties do you offer?</h1>
                <h2 className = "hTwoStepOne" > Step 4 </h2>
                <div className="ContenuStepTwo">
                <div className="DivStepOne">
                    <p className = "LabelStepFour">
                        Note that these amnesties are the most common the guests are expecting to see.
                        You can always add your own after this is made public.
                    </p>
                </div>
                    
                    <div className="DivStepOne">
                        <input type="checkbox" id="cbwifi" name="amensties[][wifi]" onChange={this.props.handleChange}/> 
                        <label htmlFor="cbwifi" className="InfoStepFour"> Wifi </label>
                    </div>
                    <div className="DivStepOne">
                        <input type="checkbox" id="cblight" name="amensties[][lightning]" onChange={this.props.handleChange}/>
                        <label htmlFor="cblight" className="InfoStepFour">Lightning</label>
                    </div>
                    <div className="DivStepOne">
                        <input type="checkbox" id="cbdj" name="amensties[][dj]" onChange={this.props.handleChange} />
                        <label htmFor="cbdj" className="InfoStepFour">Dj</label>
                    </div>
                    <div className="DivStepOne">
                        <input type="checkbox" id="cbcdt" name="amensties[][A/C]" onChange={this.props.handleChange}/>
                        <label htmFor="cbcdt" className="InfoStepFour">Air conditioning</label>
                    </div>
                    <div className="DivStepOne">
                        <input type="checkbox" id="cbheat" name="amensties[][heat]" onChange={this.props.handleChange}/>
                        <label htmFor="cbheat" className="InfoStepFour">Heat</label>
                    </div>
                    <h2>Safety & Security amenities</h2>
                    <div className="DivStepOne">
                        <input type="checkbox" id="cbfire" name="amensties[][extinguisher]" onChange={this.props.handleChange}/>
                        <label htmFor="cbfire" className="InfoStepFour">Fire extinguisher</label>
                    </div>
                    <div className="DivStepOne">
                        <input type="checkbox" id="cbsmoke" name="amensties[][smoke_detector]" onChange={this.props.handleChange}/>
                        <label htmFor="cbsmoke" className="InfoStepFour">Smoke detector</label>
                    </div>
                    <div className="DivStepOne">
                        <input type="checkbox" id="cbfak"  name="amensties[][first_aid]" onChange={this.props.handleChange}/>
                        <label htmFor="cbfak" className="InfoStepFour">First aid kit</label>
                    </div>
                    <div className="DivStepOne">
                        <input type="checkbox" id="cbsec" name="amensties[][guard]" onChange={this.props.handleChange}/>
                        <label htmFor="cbsec" className="InfoStepFour">Security guards</label>
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
