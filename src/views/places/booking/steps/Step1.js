import React, { Component } from 'react'

export default class Step1 extends Component {
    render() {
        return (
            <div className='PageConteneur' >
                <div className="show_div_left"  style={{width: "50%"}}>

                    <h1>Acknoledge Rules</h1>
                    <br />
                    <h2>{parseInt(this.props.duration)} hours in {this.props.place.attributes && this.props.place.attributes.name}</h2> 
                    <h3> Date: {this.props.string_date}</h3>
                    {/**Display message based on place activities and analytics */}
                    <div className='dynamicMessage'>
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                    </div>
                    {/** Display the owner's rules */}
                    <h2>Things to keep in mind</h2>
                    <div class="rules" style={{width: "65%"}}>
                        <h3>Capacity</h3>
                        { this.props.place.attributes && <p> {this.props.place.attributes.name} has a maximum capacity of {this.props.place.attributes.capacity} people</p> } 
                        <h3>Rules</h3>
                        <p>{ this.props.place.attributes && this.props.place.attributes.rule.content}</p>                   
                        <button>Read more</button>
                    </div>
                 </div>

                 <div className="show_div_right" style={{width: "35%"}}>
                    <div className="show_div_left"  style={{width: "60%"}}>
                     {this.props.place.attributes && <h3>{this.props.place.attributes.name}</h3>}
                     <address>
                         <span>{this.props.place.attributes && <h3>{this.props.place.attributes.address.city}</h3>}</span>
                         <span>{this.props.place.attributes && <h3>{this.props.place.attributes.address.state}</h3>}</span>
                     </address>
                     
                     <div className="pricing">
                         <div className="show_div_left">
                            {this.props.place.attributes && <div> <p> ${this.props.place.attributes.price} x {this.props.duration} hours </p>
                                                                  <p>Processing</p>  
                                                                  <p>Total</p> </div>}
                            
                         </div>

                         <div className="show_div_right">
                            {this.props.price && <div> <p> ${parseFloat(this.props.price).toFixed(2)}  </p> 
                                                        <p> ${this.props.process_fee && this.props.process_fee}</p> 
                                                        <p>${this.props.total && this.props.total }</p>  </div>}
                         </div>

                     </div>


                    <p><button onClick={this.props.nextStep}>Agree</button></p>
                    </div> 

                     <div className="show_div_right"  style={{width: "20%", height: "20%"}}>
                     {this.props.place.attributes && <img src={this.props.place.attributes.images[0].url}/>}
                     </div> 

                     
              </div>
               
            </div>
        )
    }
}
