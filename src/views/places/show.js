import React, { Component} from 'react'
import current_user from '../../helper/current_user';
import '../../assets/calendar.css'


import place from './place';


import Calendar from 'react-calendar'
import moment from 'moment'
import '../../assets/Home.css'
import DatePicker from 'react-date-picker';
import TimePicker from 'react-time-picker'
import TimeRange from 'react-time-range';




export default class show extends Component {
    componentDidMount(){
        console.log(this.props.match.params.id)
        const place_id = this.props.match.params.id
        fetch(`http://localhost:3000/places/${place_id}`)
        .then(resp => resp.json() )
        .then(json => this.setState({place: json.place}) )
    }
   
    state = {
        place: {},
        date: new Date(),
        start_time: '',
        end_time: ''
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
           
           <h1>This is the show page</h1>
            <h1>About {this.state.place ? this.state.place.name : null} </h1>
           <div height='700' width='700'>
                <DatePicker
                    onChange={this.change} value={this.state.date} 
                    disabledDate={date => (date === new Date())} 
                    minDate={new Date()}

                />

                <TimePicker  onChange={this.s_change_time} value={this.state.start_time}/> <TimePicker  onChange={this.e_change_time} value={this.state.end_time}/>
                <button onClick={this.book}>Book this place</button>
                
           </div>
            <h1>Location </h1>
            <h1> Rules </h1>
              {/**Add pagination for reviews */}  
           <h1>Reviews</h1>
              4.93  | 330 reviews
       </div>
        )
    }
}
