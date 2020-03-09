import React, { Component } from 'react'
import "../../../assets/newplace.css"
import {Progress} from "semantic-ui-react";
export default class Step1 extends Component {
    render() {
        return (
            <div className="ConteneurStepOne">
                <div style={{...this.props.setting}}>
                    <div style={{...this.props.parameters, width: "11%", background:"#BF54E6"}}></div>
                </div>
                <h1 className="hOneStepOne">Let's get you started.</h1>
                <h2 className = "hTwoStepOne" > Step 1 </h2> 
                <div className="ContenuStepOne">                
                
                    <div className="DivStepOne">
                    <label className = "LabelStepOne" > What type of space do you have ? </label>
                        <input type= 'text' name='typeOfSpace' className="InputStepOne" placeholder="Enter a type of space" list="typeOfSpace" onChange={this.props.handleChange}/>
                        <datalist id="typeOfSpace">
                            <option value="Cafe"/>
                            <option value="Photography Gallery"/>
                            <option value="Bus"/>
                            <option value="Private Dinning Room"/>
                            <option value="Private Work office"/>
                            <option value="Community Space"/>
                        </datalist>
                    </div>

 

                    <div className="DivStepOne">
                        <label className="LabelStepOne">How many guests can you receice ? </label><br/>
                        <input type= 'number' name='capacity' className="InputStepOne" placeholder='e.g : 30 guests' onChange={this.props.handleChange}/>
                    </div> 

                    <div className="DivStepOne" >
                        <label className="LabelStepOne">Where is your loaclisation ? </label><br/>
                        <input name='region' className="InputStepOne" placeholder='Enter the region' onChange={this.props.handleChange}/>
                    </div> 
                    {/**Later on let's add info based on the region that the user entered, e.g: how many customer a day a user can get. */}
                    <p className="ButtonStepOne"><button onClick={this.props.nextStep} className="NextOne">Next <i className="fa fa-angle-right"></i> </button></p>
                   
                </div>
                


            </div>
        )
    }
}
