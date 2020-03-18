import React, { Component} from 'react'
import current_user from '../../helper/current_user'
import '../../assets/calendar.css'
import 'react-day-picker/lib/style.css'


import place from './place';
import DayPicker from 'react-day-picker'


import Calendar from 'react-calendar'
import moment from 'moment'
import '../../assets/Home.css'
import DatePicker from 'react-date-picker'

import TimePicker from 'react-time-picker'
import TimeRange from 'react-time-range'




export default class show extends Component {
    componentDidMount(){
        console.log(this.props.match.params.id)
        const place_id = this.props.match.params.id
        fetch(`http://localhost:3000/places/${place_id}`)
        .then(resp => resp.json() )
        .then(json => {
            console.log(json)
            this.setState({place: json.place, disabled_days: json.disabled_days, address:json.address, rule: json.rule, schedule: json.schedule, amenities: json.amenities, parking: json.parking, cancelation: json.cancelation }) } )     
    }

    display_amen =() => this.state.amenities.map(e => <li key={e.title}>{e.title}</li>)

   
    state = {
        disabled_days: [],
        place: {},
        address: {},
        date: new Date(),
        start_time: '',
        end_time: '',
        rule: '',
        schedule: '',
        amenities: [],
        parking: {},
        cancelation: {}

      }
      s_change_time = time => this.setState({start_time: time})
      e_change_time = time => this.setState({end_time: time})

    change = date =>{ 
        // console.log(this.state.place.name)
        // console.log(date)
                    this.setState( {date: date} )
                    
                }
        book = () => {
            const start = this.state.start_time
            const end = this.state.end_time 
            const body = JSON.stringify({...this.state, user_id: current_user().id})
           const params ={ method: 'POST',
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json"
            },
           body: body
        }
            if(start !== '' && end !== '' && this.state.place)  {
                console.log(this.state.place)
                fetch(`http://localhost:3000/places/${this.state.place.id}/book`,params)
                .then(resp => resp.json())
                .then(json => {
                    if(json.booked){
                        document.location.href = `http://localhost:3001/bookings/${json.booking_id}`
                    }else{
                        console.log(json.message)
                    }
                } )
            }
        }
    render() {
        return (
        <div className='PageConteneur'>
           
           <h1>{this.state.place ? this.state.place.name : null}</h1>
           <address>
                    {this.state.address ? this.state.address.country : null} {this.state.address ? this.state.address.state : null}  {this.state.address ? this.state.address.city : null} 
            </address>

           <div>   
            <h4>Reviews</h4>
                4.93  | 330 reviews
                {/* show the first 5 reviews */}
            </div>


            <div> 
                <h4>About </h4>
                <p>{this.state.place.description}</p>
            </div>

            <div> 
                <h4>Amenities</h4>
                <ul>
                     {this.display_amen()}
                </ul>
            </div>

            <div>
                <h4>Availability</h4>
                <p>{this.state.schedule.s_day} - {this.state.schedule.e_day}</p>
                <p>From {this.state.schedule.s_Time} to {this.state.schedule.e_Time} </p>
            </div>
           <div height='700' width='700'>
    
                <DatePicker onClick={() => {
             
                    const dates = document.querySelectorAll('button.react-calendar__tile')
                    dates.forEach(e=>{
                        this.state.disabled_days.forEach(disabled_day =>{
                    
                            if(Date.parse(e.querySelector('abbr').getAttribute('aria-label') ) === Date.parse(`${disabled_day}`) ){
                                console.log(e)
                                e.disabled = true
                                e.style.pointerEvents = "none"
                            } 
                        })
                    
                             
                             })

                    }}
                    onChange={this.change} value={this.state.date} 
                    dayClassName={date => date.getTime() === new Date('2/25/2020').getTime() ? 'disabled-date' : undefined}
                    minDate={new Date() }

                />
                <br />

                <TimePicker  onChange={this.s_change_time} value={this.state.start_time}/> <TimePicker  onChange={this.e_change_time} value={this.state.end_time}/>
                <button onClick={this.book}>Book this place</button>
                
           </div>
            <div>
                <h4>Parking</h4>
                {this.state.parking ? this.state.parking.description : null}
            </div>
           <div>
                <h4>Host rules </h4>
                {this.state.rule ? this.state.rule.content : null}          
            </div>

           <div>
            <h4>Location </h4>
                          
                <p>
                    {this.state.address ? this.state.address.country : null} {this.state.address ? this.state.address.state : null} 
                    {this.state.address ? this.state.address.city : null}
                </p>

                    {/**Add map here */}
            </div>

            <div> 
                <h4>Cancellation Policy</h4>
                {this.state.cancelation ? this.state.cancelation.genre : null}
                <p>{ this.state.cancelation ? this.state.cancelation.content: null}</p>
            </div>

          
            <div>
                <h4>Similar places</h4>
                {/* {show similar places} */}
            </div>
       </div>
        )
    }
}
