import React, { Component } from 'react'

export default class Step3 extends Component {
    render() {
        return (
            <div className="FirstDiv">
                <div className="div_book_step3">
                <h1 className='title_book_step'>Review and pay</h1>
                <h2 className="booking_details">Booking Details</h2>
                <div className="bookingDetails">
                    <p className='review_host'>Host : {this.props.place.attributes ? this.props.place.attributes.user.name : null}</p>
                    <h3 className="review_title">Date & Time</h3>
                    {this.props.s_time && 
                        <div className="bookingDetails">
                            <p className="text_review"> date : {this.props.string_date}</p>
                            <p className="text_review"> Time : {this.props.s_time} - {this.props.e_time} </p>
                            <p className="text_review"> duration : {this.props.duration} hours </p>
                        </div>
                    }
                    <h3 className="review_title">Attendees</h3>
                    <p>{this.props.guestCount}</p>
                    <h3 className="review_title">Activity</h3>
                    <p>{this.props.activity}</p>
                    <p className="review_host">
                        Space : {this.props.place.attributes && this.props.place.attributes.name }
                    </p>
                </div>
                <div className = "bookingDetails" >
                    <h2 className="review_title">Price</h2>
                    <p className="text_review">Space rate : ${this.props.place.attributes && this.props.place.attributes.price } /hr</p>
                    <p className="text_review">Subtotal : ${this.props.price && this.props.price} </p>
                    <p className="text_review">Processing <span>?</span> : ${this.props.process_fee && this.props.process_fee }</p>
                    <p className="text_review">Total : ${this.props.total && this.props.total}</p>
                </div>
                <div className="bookingDetails">
                    <h2 className="review_title">Cancellation Policy</h2>
                    <strong className="texts_reviews">
                        {this.props.place.attributes && this.props.place.attributes.cancelation_policy.genre}
                    </strong>
                    <p className="text_reviews">
                        {this.props.place.attributes && this.props.place.attributes.cancelation_policy.content}
                    </p>
                </div>
                <div className="bookingDetails">
                    <div className="payCard">
                        <button name="paymentOption" value="card" 
                                onClick={this.props.handleChange} className="review_btn">
                            Add new card <i className="far fa-credit-card"></i>
                        </button>
                    </div>
                    <div className="payCard">
                        <input name="cardName" className="card_review" />
                        <input name="cardNumber" className="card_review" />
                    </div>
                    <div className="payCard"> 
                        <button name="paymentOption" value="cash" 
                                onClick={this.props.handleChange} className="review_btn">
                            Pay with cash <i className="far fa-money-bill-alt"></i>
                        </button>
                    </div>
                    <p className="text_reviews">
                        By choosing the cash option you agree to the term&policy concerning this method payment
                    </p>
                </div>
                <p>
                    <button onClick={this.props.previousStep} className="switch_book_step"> 
                        <i className="fa fa-chevron-left"></i> Previous Step
                    </button>
                    <button onClick={this.props.handleSubmit} className="confirm_btn">
                        Confirm <i className="fa fa-check-circle"></i> 
                    </button> 
                </p>

                </div>
            </div>
        )
    }
}
