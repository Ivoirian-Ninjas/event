import React, { Component } from 'react'
// import StepZilla from "react-stepzilla";
import StepWizard from 'react-step-wizard';


import Step1 from './steps/Step1'
import Step2 from './steps/Step2'
import Step3 from './steps/Step3'






const apiBaseUrl = require('../../../../package.json').apiBaseUrl

export default class booking_show extends Component {
    state = {
        booking: {},
        images: [],
        host: {},
        guestCount: "",
        activity: "",
        message: "",
        paymentOption: "",
        cardName: "",
        cardNumber: ""
    }
     handleChange  = (event) =>{
         this.setState({[event.target.name]: event.target.value})
    }

    handleSubmit = () => {
        console.log(this.state)
        console.log(apiBaseUrl)
        const params = {
            method: 'POST',
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json"
            },
           body: JSON.stringify(this.state)
        }
        console.log(params)
        fetch(`${apiBaseUrl}bookings/${this.props.match.params.id}/confirm`,params)
        .then(resp => resp.json())
        .then(json => console.log(json))
    }
   
    componentWillMount(){
        const id  = this.props.match.params.id
        fetch(`http://localhost:3000/bookings/${id}`)
        .then(resp => resp.json())
        .then(json => {
            console.log(json)
            this.setState(state =>( {booking: json.booking.data, images: json.images, host: json.host} ) )  
        }) 
    }
    render() {
        return (
            <div className='PageConteneur' >
                    {/**StepWizard will allow us to send state to the step and even include transitions */}
                    <StepWizard  >
                        <Step1 {...this.state} handleChange={this.handleChange}/>
                        <Step2 {...this.state}  handleChange={this.handleChange}/>
                        <Step3 {...this.state}  handleChange={this.handleChange} handleSubmit={this.handleSubmit}/>  
                    </StepWizard>
            </div>
        )
    }
}
