import React, { Component } from 'react'
// import StepZilla from "react-stepzilla";
import StepWizard from 'react-step-wizard';


import Step1 from './steps/Step1'
import Step2 from './steps/Step2'
import Step3 from './steps/Step3'
import { API_ROOT, HEADERS } from '../../../constants';
import { duration } from '../../../helper/duration';
import '../../../assets/Home.css'
import current_user from '../../../helper/current_user';








export default class booking_show extends Component {
     
        state = {
       place: {},
        duration: duration ,
        client: current_user().id,
        total: "",
        price: "",
        guestCount: "",
        activity: "",
        message: "",
        paymentOption: "",
        cardName: "",
        cardNumber: "",
        s_time: "",
        e_time: "",
        date: "",
        string_date: ""
    }
    
    
     handleChange  = (event) =>{
         this.setState({[event.target.name]: event.target.value})
    }

    handleSubmit = () => {
        console.log(this.state)
        this.setState({string_date: this.state.string_date })
        const params = {
            method: 'POST',
            headers: HEADERS,
           body: JSON.stringify(this.state)
        }
        console.log(params)
        fetch(`${API_ROOT}/bookings`,params)
        .then(resp => resp.json())
        .then(json => console.log(json))
    }
   
    componentDidMount(){
        const splitted_search = window.location.search.split("&")
        let s_time = splitted_search[0].replace("?s_time=","")
        let e_time = splitted_search[1].replace("e_time=","")
        const string_date = splitted_search[2].replace("date=","").replace(/%20/g, " ")
        console.log(string_date)
      
        if(s_time && e_time){
       
        const id  = this.props.match.params.id
        fetch(`${API_ROOT}/places/${id}`)
        .then(resp => resp.json())
        .then(json => {
            console.log(json)
            const process_fee = parseFloat(json.place.data.attributes.price *  duration(s_time, e_time) * 0.08).toFixed(2)
            const price = parseFloat(json.place.data.attributes.price *  duration(s_time, e_time).toFixed(2))
            const total =  (parseFloat(process_fee) + parseFloat(price)).toFixed(2)

            this.setState({place: json.place.data,duration:  parseFloat(duration(s_time, e_time).toFixed(2)), 
                            price:price, 
                            process_fee:process_fee,
                            total: total,
                            s_time: s_time,
                            e_time: e_time,
                            string_date: string_date
                         })  

        }) 
        }
        
    }
    render() {
        return (
            <div className='PageConteneur' >
                    { console.log(this.state.place)}
                    <StepWizard  >
                        <Step1 {...this.state} handleChange={this.handleChange}/>
                        <Step2 {...this.state}  handleChange={this.handleChange}/>
                        <Step3 {...this.state}  handleChange={this.handleChange} handleSubmit={this.handleSubmit}/>  
                    </StepWizard>
            </div>
        )
    }
}
