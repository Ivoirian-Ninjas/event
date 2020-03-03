import React, { Component } from 'react'
import DatePicker from 'react-date-picker'
import TimeRangePicker from '@wojtekmaj/react-timerange-picker';




export default class Step6 extends Component {

    render() {
        return (
            <div>
              <h1>Pricing & Availability</h1>
                    <div>
                        {/**Based on analitycs and region we should suggest a price for a listing */}
                       <label>Price</label>
                        <input type= 'number' name='price' placeholder='0.00' onChange={this.props.handleChange} />
                    </div>

                    <div>
                        <label>Availability</label>
                        <small>Please set up your schedule here.</small>   
                        <input placeholder="Monday" name="s_day"  onChange={this.props.handleChange}/> - <input placeholder="Sunday" name="e_day"  onChange={this.props.handleChange}/>
                        <TimeRangePicker
                            onChange={this.props.onTimeChange}
                            value={this.props.time}
                             
                        />
                    </div>
                    
                
                 <p><button onClick={this.props.previousStep}>Back</button></p>
                <p><button onClick={this.props.nextStep}>Next</button></p>
            </div> 
        )
    }
}
