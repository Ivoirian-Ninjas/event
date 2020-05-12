import React, { Component } from 'react'
export default class Step2 extends Component {


    render() {
        return (
            <div>
                <h1>Who's comming?</h1>
            <div className="">
                <label>Activity</label>
                <input name="activity" placeholder="e.g. Birthday"  onChange={this.props.handleChange} value={this.props.activity}  />
                <label>How many guest will you have?</label>
                { this.props.place.attributes && <input name="guestCount" placeholder={this.props.place.attributes.capacity}   onChange={this.props.handleChange}  value={this.props.guestCount} />}
                <div>
                    <label>Message your host</label>
                    <br />
                    <small>Say Hello to {this.props.place.attributes && this.props.place.attributes.user.name } and describe what you're planning.</small>
                { this.props.place.attributes ? 
                    <textarea name="message" placeholder={`Hello ${this.props.place.attributes.user.name}! Can't wait to spend ${this.props.duration} hours at ${this.props.place.attributes.name}`} onChange={this.props.handleChange} value={this.props.message}></textarea> : null

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

