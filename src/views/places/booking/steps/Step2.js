import React, { Component } from 'react'
export default class Step2 extends Component {


    render() {
        return (
        

            <div>
                <h1>Who's comming?</h1>
                {console.log(this.props.activity)}
                <div className="">
                    <label>Activity</label>
                    <input name="activity" placeholder="e.g. Birthday"  onChange={this.props.handleChange} value={this.props.activity}  />
                    <label>How many guest will you have?</label>
                    { this.props.booking.attributes ? <input name="guestCount" placeholder={`Max ${this.props.booking.attributes.place.capacity}`}   onChange={this.props.handleChange}  value={this.props.guestCount} /> : null }
                    <div>
                        <label>Message your host</label>
                        <small>Say Hello to {this.props.host.name} and describe what you're planning.</small>
                      { this.props.booking.attributes ? 
                         <textarea name="message" placeholder={`Hello ${this.props.host.name}! Can't wait to spend ${this.props.booking.attributes.duration} hours at ${this.props.booking.attributes.place.name}`} onChange={this.props.handleChange} value={this.props.message}></textarea> : null

                         }
                    </div>
                
                </div>
                <div className="nextSection">
                    <p><button onClick={this.props.previousStep}>Previous Step</button></p>
                    <p><button onClick={this.props.nextStep}>Next Step</button></p>
                </div>
                
            </div>
        )
    }
}
