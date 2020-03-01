import React, { Component } from 'react'
import '../../../helper/Countries_list'
import Countries_list from '../../../helper/Countries_list';
export default class Step2 extends Component {
    render() {
        return (
            <div>
            <h1>Where are you located?</h1>
            <p>Guests will only get your exact address once they've booked a reservation.</p>
            <button>Use current location</button>
                <small>or enter your address</small>
            <div>
                <div>
                     <label>Country / Region</label>
                     <select name="country"  onChange={this.props.handleChange}>
                        <Countries_list />
                    </select>
                </div>
                <div>
                    <label>Street address</label>
                    <script type="text/javascript" src="https://maps.googleapis.com/maps/api/js?key=AIzaSyCdKNMjsiDMW07_NEEBlzhRlArElUUFRXQ&libraries=places"></script>

                    <input name="street"  onChange={this.props.handleChange}/>
                </div>
                <div>
                    <label>Apt, suite. (optional)</label>
                    <input name="aptNumber"  onChange={this.props.handleChange}/>
                </div>
                <div>
                    <label>City</label>
                    <input name="city"  onChange={this.props.handleChange}/>
                </div>
                <div>
                    <label>State</label>
                    <input name="state"  onChange={this.props.handleChange}/>
                </div>
                <div>
                    <label>Zip code</label>
                    <input name="zipCode"  onChange={this.props.handleChange}/>
                </div>
            </div>
            <h1>Is the pin in the right place?</h1>
            {/**Add a map here showing the pin */}


            <p><button onClick={this.props.previousStep}>Back</button></p>
            <p><button onClick={this.props.nextStep}>Next</button></p>
            </div>
        )
    }
}
