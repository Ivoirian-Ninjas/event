import React, { Component } from 'react'

export default class Step3 extends Component {
    render() {
        return (
            <div>
            <h1>Review and pay</h1>
            
            <h2>Booking Details</h2>
             <div className="bookingDetails">
                <p>Host</p>
                    {this.props.host ? <div className="hostSection">
                                            {this.props.host.name}
                                         </div> : null}
                <h3>Date & Time</h3>
                {this.props.booking.attributes ? <div>
                                                       <p> {this.props.booking.attributes.date}</p>
                                                       <p>{this.props.booking.attributes.start_time} - {this.props.booking.attributes.end_time} </p>
                                                       <p>{this.props.booking.attributes.duration} </p>


                                              </div> : null }
                <div>                        
                    <h3>Attendees</h3>
                    {this.props.guestCount}
                </div>
                <div>
                    <h3>Activity</h3>
                    {this.props.activity}
                </div>
                <h3>Space</h3>
                {this.props.booking.attributes ? this.props.booking.attributes.place.name : null }

 
             </div>

             <div className = "bookingPricing" >
                 <h2>Price</h2>
                 <p>Space rate {this.props.booking.attributes ? this.props.booking.attributes.place.price: null}/hr</p>
                 <p>Subtotal: {this.props.booking.attributes ? this.props.booking.attributes.price : null} </p>
                 <p>Processing <span>?</span> ${this.props.booking.attributes ? this.props.booking.attributes.process_fee : null}</p>
                 <p>Total ${this.props.booking.attributes ? this.props.booking.attributes.total : null} </p>
             </div>

             <div className="cancellationPolicy">
                    <h2>Canellation Policy</h2>
                    <p>
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.

                    </p>
             </div>

             <div className="paymentMethod">
                   <div> <button name="paymentOption" value="card" onClick={this.props.handleChange}>Add new card</button> <span>?</span> </div>
                   <div className="payCard">
                       <input name="cardName" />
                       <input name="cardNumber"/>
                   </div>

                   <div> <button name="paymentOption" value="cash"  onClick={this.props.handleChange}>Pay with cash</button> <span>?</span> </div>
                   <div className="payCash">
                       <p>By choosing the cash option you agree to the term&policy concerning this method payment</p>
                   </div>

             </div>

            <p><button onClick={this.props.previousStep}>Previous Step</button> </p>
            <p><button onClick={this.props.handleSubmit}>Confirm</button> </p>

            </div>
        )
    }
}
