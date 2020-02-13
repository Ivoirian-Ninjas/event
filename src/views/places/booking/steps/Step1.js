import React, { Component } from 'react'

export default class Step1 extends Component {
    render() {
        return (
            <div>
                <h1>Acknoledge Rules</h1>
                {console.log(this.props)}
                <br />
                {this.props.booking.attributes ? <h2>{parseInt(this.props.booking.attributes.duration)} hours in {this.props.booking.attributes.place.name}</h2> : null}
                {/**Display message based on place activities and analytics */}
                <div className='dynamicMessage'>
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                </div>
                {/** Display the owner's rules */}
                <h2>Things to keep in mind</h2>
                <div class="rules">
                    { this.props.booking.attributes ? <p>{this.props.booking.attributes.place.name} has a maximum capacity of {this.props.booking.attributes.place.capacity} people</p> : null } 
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                    <button>Read more</button>
                </div>

               <div className="nextSection">
               {this.props.booking.attributes ? <p><strong> $ {this.props.booking.attributes.price}</strong>  for {this.props.booking.attributes.duration} hours</p> : null}
               <a>Show details</a>
               <p><button onClick={this.props.nextStep}>Agree</button></p>

               </div>
            </div>
        )
    }
}
