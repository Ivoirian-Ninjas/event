import React, { Component } from 'react'

export default class Step3 extends Component {
    render() {
        return (
            <div>
            <h1>Review and pay</h1>
            <h2>Booking Details</h2>
             <div className="bookingDetails">
                <p>Host</p>
                    {this.props.place.attributes ? <div className="hostSection">
                                            {this.props.place.attributes.user.name}
                                         </div> : null}
                <h3>Date & Time</h3>
                {this.props.s_time && <div>
                                                       <p> date: {this.props.string_date}</p>
                                                       <p> Time: {this.props.s_time} - {this.props.e_time} </p>
                                                       <p>Duration: {this.props.duration} hours </p>


                                              </div> }
                <div>                        
                    <h3>Attendees</h3>
                    {this.props.guestCount}
                </div>
                <div>
                    <h3>Activity</h3>
                    {this.props.activity}
                </div>
                <h3>Space</h3>
                {this.props.place.attributes && this.props.place.attributes.name  }

 
             </div>

             <div className = "bookingPricing" >
                 <h2>Price</h2>
                 <p>Space rate ${this.props.place.attributes && this.props.place.attributes.price } /hr</p>
                 <p>Subtotal: ${this.props.price && this.props.price} </p>
                 <p>Processing <span>?</span> ${this.props.process_fee && this.props.process_fee }</p>
                 <p>Total ${this.props.total && this.props.total}</p>
             </div>

             <div className="cancellationPolicy">
                    <h2>Canellation Policy</h2>
                    <strong>{this.props.place.attributes && this.props.place.attributes.cancelation_policy.genre}</strong>

                    <p>
                        {this.props.place.attributes && this.props.place.attributes.cancelation_policy.content}
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
 

         