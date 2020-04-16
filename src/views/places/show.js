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


let timestyle = {
    width:"100%",
    height:"42px",
    border:"1px solid gray",
    outline:"none",

}

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

    display_amen =() => this.state.amenities.map(e => <li className="show_services" key={e.title}>{e.title}</li>)

   
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
        //  show_customStyles = {
        //      control: (provided, state) => ({
        //          ...provided,
        //          width: "100%",
        //          height: "40px",
        //          border: "1px solid  #343840"
        //      })
        //  }
    render() {
        return (
        <div className='PageConteneur'>
           <div className="show_div_left">
                <h1 className="show_title">{this.state.place ? this.state.place.name : null}</h1>
                <address className="show_address">
                    {this.state.address ? this.state.address.city : null}, {this.state.address ? this.state.address.country : null}.
                </address>

                

                <div className="show_div"> 
                    <h4 className="show_element_title">About </h4>
                    <p className="show_contain">{this.state.place.description}</p>
                </div>

                <div className="show_div"> 
                    <h4 className = "show_element_title">Amenities</h4>
                    <ul className="show_menu_services">
                        {this.display_amen()}
                    </ul>
                </div>

                <div className="show_div">
                    <h4 className = "show_element_title">Availability</h4>
                    <p className="show_contain">{this.state.schedule.s_day} to {this.state.schedule.e_day}</p>
                    <p className="show_contain"><i className="far fa-clock show_open"></i> Open : {this.state.schedule.s_Time} </p>
                    <p className="show_contain"><i className="far fa-clock show_close"></i> Close : {this.state.schedule.e_Time} </p>
                </div>
                <div className="show_div">
                    <h4 className = "show_element_title">Parking</h4>
                    <p className="show_contain"> {this.state.parking ? this.state.parking.description : null}</p>
                </div>
                <div className="show_div">
                    <h4 className = "show_element_title">Host rules </h4>
                    <p className="show_contain">{this.state.rule ? this.state.rule.content : null} </p>        
                </div>

                <div className="show_div">
                    <h4 className = "show_element_title">Location </h4>
                          
                    <p className="show_contain">
                      <i className="far fa-flag show_icon_locate"></i> Country : {this.state.address ? this.state.address.country : null}
                    </p>
                    <p className="show_contain"> 
                      <i className="fa fa-city show_icon_locate"></i> City : 
                        {this.state.address ? this.state.address.state : null}, {this.state.address ? this.state.address.city : null}
                    </p>

                    {/**Add map here */}
                </div>

                <div className="show_div"> 
                    <h4 className = "show_element_title">Cancellation Policy</h4>
                    <p className="show_contain">{this.state.cancelation ? this.state.cancelation.genre : null}</p>
                    <p className="show_contain">{ this.state.cancelation ? this.state.cancelation.content: null}</p>
                </div>

                <div className="show_div">   
                    <h4 className = "show_element_title">Reviews</h4>
                    <p className="show_contain"><i className="fa fa-star show_star"></i> <b>4.93</b>  | <b>330</b> reviews</p>
                {/* show the first 5 reviews */}
                </div>
          
                <div className="show_div">
                    <h4 className = "show_element_title">Similar places</h4>
                    {/* {show similar places} */}
                </div>
           </div>
           <div className="show_div_right">
                <div className="show_book">
                    <div className="show_book_info">
                        <p className="show_book_text"> <b className="show_book_bolder">${this.state.place.price} </b> / hour</p>
                        <p className="show_book_text"><i className="fa fa-star show_star"></i> 4.93 (330)</p>
                    </div>
                    <div className="show_book_date">
                    <label className="show_book_label">Dates</label>
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
                    style ={timestyle}
                    className="show_book_date_contain"
                    // styles={this.show_customStyles}
                    // theme = {
                    //     theme => ({
                    //         ...theme,
                    //         borderRadius: 0,
                    //         colors: {
                    //             ...theme.colors,
                    //             primary25: "#9400d3", //the hover color
                    //             primary: "#9400d3", //the main color 
                    //             neutral10: "#9400d3", //the color of the block when the option has been selected
                    //             neutral20: "#9400d3", //the color of the block when the option has been selected
                    //             primary50: "#9400d3" //the color when the user click on an option
                    //         },
                    //     })
                    // }

                />
                </div >
                <div className="show_book_time">
                    <label className="show_book_label">Times</label>
                    <TimePicker className="show_book_time_contain" onChange={this.s_change_time} value={this.state.start_time}/> 
                    <TimePicker className="show_book_time_contain" onChange={this.e_change_time} value={this.state.end_time}/>
                </div>
                <button onClick={this.book} className="show_book_btn">Book this place</button>
                
                </div>
           </div>
           
       </div>
        )
    }
}
