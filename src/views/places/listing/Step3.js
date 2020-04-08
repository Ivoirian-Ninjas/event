import React, { Component } from 'react'
import Creatable from 'react-select/creatable';


export default class Step3 extends Component {


    options = [
        { value: 'one', label: 'One' },
        { value: 'two', label: 'Two' }
      ]
    render() {
     
        return (
            <div className="ConteneurStepOne">
            <div style={{...this.props.setting}}>
                <div style={{...this.props.parameters, width: "33%", background:"#650488"}}></div>
            </div>
            <h1 className="hOneStepOne">Tell us more about your space.</h1>
            <h2 className = "hTwoStepOne" > Step 3 </h2> 
            <div className="ContenuStepTwo">
                <div className="DivStepOne">
                     <label className = "LabelStepOne">What's the name of your place ?</label>
                    <input type= 'text' className="InputStepOne" name='name' placeholder='e.g. GraphicArt' onChange={this.props.handleChange}/>
                </div>
                <div className="DivStepOne">
                     <label className = "LabelStepOne">Description of your place</label>
                     <div className="DescriptionSteps">
                        <p className="TextHelps">Include details about your space to attract more guest</p>
                        <ul className="Helps">
                            <h3 className="hThreeHelps">Use these questions to guide you</h3>
                            <li className="liHelps">What activities are better suited for your space?</li>
                            <li className="liHelps">What features or amenities does your space have?</li>
                            <li className="liHelps">What makes your space unique?</li>
                        </ul>
                        <ul className="Helps">
                            <h3 className="hThreeHelps"> Do not include: </h3>
                            <li className="liHelps">
                                Please do not include your  
                                <strong className="StrongHelps"> contact information </strong> 
                                as the description will be publicly displayed on our platform.
                            </li>
                        </ul>
                     </div>
                    <textarea name='placeDesc' className="TextAreaStepOne" placeholder='Show how amazing your place is.' onChange={this.props.handleChange}/>
                </div>

                <div className="DivStepOne">
                    <label className = "LabelStepOne">Choose the activities that you would most likely host.</label> <br/>
                    
                    {/* https://react-select.com/styles */}
                      <Creatable
                        isMulti
                        name="form-field-name"
                        options={this.options}
                        onChange={this.props.handleActivities}
                        
                        />
                </div>

                {/**Use js for that */}
                <div className="DivStepOne">
                    <label className = "LabelStepOne">Does you place have a parking option ? </label> <br/>
                    <button className="YesStepThree" name="parking_available" value="yes" onClick={this.props.handleChange}>Yes</button> <button className="NoStepThree"  name="parking_available" value="no" onClick={this.props.handleChange}>No</button>
                </div>
                
                {/**Only display this div if there is a parking option */}
                <div className="DivStepOne" id="parking" style={{ display: this.props.parking_available === "no" ? "none" : "block" }} >
                    <label className="LabelStepOne">Describe your parking</label>
                    <div className="DescriptionSteps">
                    <div className="TextHelps">
                        Things to consider: 
                        <ul className="Helps">
                            <li className="liHelps">Is it a free parking</li>
                            <li className="liHelps">If it is not, please let the guests know its price per hour</li>
                            <li className="liHelps">What is the parking towing policy if there is any?</li>
                        </ul>
                    </div>
                    </div>
                    <textarea name="parkDesc" className="TextAreaStepOne" placeholder='Describe your parking here !' onChange={this.props.handleChange}></textarea>
                </div>

                <p className="ButtonStepOne">
                <button onClick={this.props.previousStep} className="PrevOne"> <i className="fa fa-angle-left"></i> Back </button>
                <button onClick={this.props.nextStep} className="NextOne">Next <i className="fa fa-angle-right"></i> </button>
                </p>
                </div>
                
            </div>
        )
    }
}
