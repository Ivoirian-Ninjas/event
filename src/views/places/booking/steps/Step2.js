import React, { Component } from 'react'
export default class Step2 extends Component {


    render() {
        return (
            <div>
                <div className="div_book_step2">
                    <h1 className='title_book_step'>Who's comming?</h1>
                    <label className="label_book_step2">Activity</label>
                    <input  name="activity" placeholder="e.g. Birthday"
                            onChange={this.props.handleChange}
                            value={this.props.activity}
                            className="input_book_step2" />
                    <label className="label_book_step2">How many guest will you have?</label>
                    { this.props.place.attributes && 
                        <input  name="guestCount" placeholder={this.props.place.attributes.capacity}
                                onChange={this.props.handleChange}  value={this.props.guestCount}
                                className="input_book_step2" />
                    }
                    {/*`Hello ${this.props.place.attributes.user.name}! Can't wait to spend ${this.props.duration} 
                        hours at ${this.props.place.attributes.name}`*/}
                    <label className="label_book_step2">Message your host</label>
                    { this.props.place.attributes ? 
                        <textarea name="message"
                            placeholder={`Say Hello to ${this.props.place.attributes && this.props.place.attributes.user.name } and describe what you're planning.`}
                            onChange={this.props.handleChange} value={this.props.message}
                            className="text_area_book_step">
                        </textarea> 
                    : null}
                    {/*<small className="text_advice">
                        
                    </small>*/}
                    <button onClick={this.props.previousStep} className="switch_book_step">
                        <i className="fa fa-chevron-left"></i> Previous Step
                    </button>
                    <button onClick={this.props.nextStep} className="switch_book_step">
                        Next Step <i className="fa fa-chevron-right"></i> 
                    </button>
                </div>
            </div>
        )
    }
}

