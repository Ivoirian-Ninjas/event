import React, { Component } from 'react'
export default class Step2 extends Component {


    render() {
        return (
            <div className="FirstDiv">
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

