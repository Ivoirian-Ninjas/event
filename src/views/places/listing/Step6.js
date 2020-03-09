import React, { Component } from 'react'
import DatePicker from 'react-date-picker'
import TimeRangePicker from '@wojtekmaj/react-timerange-picker';




export default class Step6 extends Component {

    render() {
        return (
            <div className="ConteneurStepOne">
            <div style={{...this.props.setting}}>
                <div style={{...this.props.parameters, width: "66%", background:"#340047"}}></div>
            </div>
              <h1 className = "hOneStepOne" >Pricing & Availability</h1>
              <h2 className = "hTwoStepOne" > Step 6 </h2>
                <div className="ContenuStepOne">
                    <div className="DivStepOne">
                        {/**Based on analitycs and region we should suggest a price for a listing */}
                       <label className = "LabelStepOne">Price</label>
                        <input type= 'number' className="InputStepOne" name='price' placeholder='0.00' onChange={this.props.handleChange} />
                    </div>

                    <div className="DivStepOne">
                        <label className = "LabelStepOne">Availability</label><br/>
                        <small className="SmallText">Please set up your schedule here.</small>   <br/>
                        <input placeholder="Monday" className="InputStepSix" name="s_day"/> to &nbsp;
                        <input placeholder="Sunday" className="InputStepSix" name="e_day"/>
                        
                    </div>
                    <div className="DivStepOne">
                    <TimeRangePicker
                            onChange={this.props.onTimeChange}
                            value={this.props.time} 
                            className="TimeRange" 
                            
                        />
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
