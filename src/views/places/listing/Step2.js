import React, { Component } from 'react'
import '../../../helper/Countries_list'
import Countries_list from '../../../helper/Countries_list';
export default class Step2 extends Component {
    render() {
        return (
            <div className="ConteneurStepOne">
            <div style={{...this.props.setting}}>
                <div style={{...this.props.parameters, width: "22%", background:"#A007D8"}}></div>
            </div>
            <h1 className = "hOneStepOne"> Where are you located ? </h1>
            <h2 className = "hTwoStepOne" > Step 2 </h2> 
            <div className="ContenuStepTwo">
                <div className="DivStepOne">
                    <p className="TextStepOne">
                        Guests will only get your exact address once they've booked a reservation.
                    </p>
                    <button className="ButtonLocal"> <i className="fas fa-map-marked"></i> Current location </button>
                    <small className="SmallText"> or enter your address.</small>
                </div>
            
                <div className="DivStepOne">
                     <label className = "LabelStepOne"> Country / Region</label>
                     <select name="country"  onChange={this.props.handleChange} className="InputStepOne">
                        <Countries_list />
                    </select>
                </div>
                <div className="DivStepOne">
                    <label className = "LabelStepOne">Street address</label>
                    <script type="text/javascript" src="https://maps.googleapis.com/maps/api/js?key=AIzaSyCdKNMjsiDMW07_NEEBlzhRlArElUUFRXQ&libraries=places"></script>

                    <input name="street" className="InputStepOne" placeholder="e.g. 158 Main Street" onChange={this.props.handleChange}/>
                </div>
                <div className="DivStepOne">
                    <label className = "LabelStepOne">Apt, suite. (optional)</label>
                    <input name="aptNumber" className="InputStepOne" placeholder="e.g. Apt #8" onChange={this.props.handleChange}/>
                </div>
                <div className="DivStepOne">
                    <label className = "LabelStepOne">City</label>
                    <input name="city" className="InputStepOne" placeholder="e.g. New York" onChange={this.props.handleChange}/>
                </div>
                <div className="DivStepOne">
                    <label className = "LabelStepOne">State</label>
                    <input name="state" className="InputStepOne" placeholder="e.g MI" onChange={this.props.handleChange}/>
                </div>
                <div className="DivStepOne">
                    <label className = "LabelStepOne">Zip code</label>
                    <input name="zipCode" placeholder="e.g. 94256" className="InputStepOne" onChange={this.props.handleChange}/>
                </div>
                
                <label className="LabelStepOne">Is the pin in the right place?</label>
                {/**Add a map here showing the pin */}


            <p className="ButtonStepOne">
                <button onClick={this.props.previousStep} className="PrevOne"> <i className="fa fa-angle-left"></i> Back </button>
                <button onClick={this.props.nextStep} className="NextOne">Next <i className="fa fa-angle-right"></i> </button>
            </p>
            </div>
            
            </div>
        )
    }
}
