import React, { Component } from 'react'
import Calendar from '@toast-ui/react-calendar'
import 'tui-calendar/dist/tui-calendar.css'
import { API_ROOT, HEADERS } from '../../../constants'
import current_user from '../../../helper/current_user'
import '../../../assets/booking.css'

export default class index extends Component {
    calendarRef = React.createRef();

    state={date: "",openModal: false, eventType: "", event: {}, schedules: {} }

    componentDidMount() {

       const url = `${API_ROOT}/bookings?current_user=${current_user().id}`
       fetch(url)
       .then(resp => resp.json())
       .then(json => {
        // [{
        //     id: '1',
        //     calendarId: '2',
        //     title: 'my schedule',
        //     category: 'time',
        //     start: Date.now(),
        //     end: Date.now()
        // }]
        console.log(json.bookings)
        if(json.bookings){
           const normalized_array = json.bookings.map(e => ({calendarId: '2', 
                                    attendees: [ e.data.attributes.host, e.data.attributes.client],
                                    id: e.data.attributes.id, 
                                    title: e.data.attributes.title,
                                    body: `${e.data.attributes.client.name} booked ${e.data.attributes.place.name} for the price of $${e.data.attributes.price}`,
                                    category: "time", 
                                    start: new Date(e.data.attributes.date + ` ${e.data.attributes.s_time}`), 
                                    end: new Date(e.data.attributes.date + ` ${e.data.attributes.e_time}`),
                                    goingDuration: e.data.attributes.duration
           })  )
           console.log(normalized_array)
           this.setState({schedules: normalized_array})
        }

       })
       

       console.log(this.calendarRef.current.calendarInst)
       this.setState({date: new Date (this.calendarRef.current.calendarInst._renderDate._date)  })
  

    }

    display_date = () => {
        if(this.state.date != ""){
            const options = {  year: 'numeric', month: 'long' };
            
            return this.state.date.toLocaleDateString(undefined, options) 
        }   
     
    }

    handleClickNextButton = () => {
        if(this.state.date != ""){
            const calendarInstance = this.calendarRef.current.getInstance();
            const date = this.state.date

            date.setMonth(date.getMonth() + 1)
        
            this.setState({date: date })

            calendarInstance.next();
        }
       
      };
      handleClickPrevButton = () => {
        if(this.state.date != ""){
            const calendarInstance = this.calendarRef.current.getInstance();

            const date = this.state.date
            date.setMonth(date.getMonth() - 1)

            this.setState({date: date })

            calendarInstance.prev()
        }
      

      };
      scrollTotoday = () =>{
           const calendarInstance = this.calendarRef.current.getInstance();
           const date = this.state.date
           const today = new Date(calendarInstance._renderDate._date)
            date.setMonth(today.getMonth())
             this.setState({date: date} , () => calendarInstance.today() )        

      }
     close_modal = () => this.setState({ openModal: false })

    cancel_booking = (id) => {
        const options = {
            method: 'DELETE',
            headers: HEADERS    
        }
        console.log("======================" + id)
        fetch(API_ROOT + `/bookings/${id}`,options)
        .then(resp => resp.json())
        .then(json => console.log(json))
    }

    modal_per_case = () => {
        let options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric', hour12: false, timeZone: 'UTC'  };
console.log(this.state.event)
                let modal= null
        if(this.state.openModal){
            const s_date =this.state.event.schedule.start._date
            const s_time= `${s_date.getHours()} : ${s_date.getMinutes()}`
            const e_date=this.state.event.schedule.end._date
            const e_time = `${e_date.getHours()} : ${e_date.getMinutes()}`
             modal = (
            <div className="div_modal_booking">
                <button onClick={this.close_modal} className="close_modal_booking">
                    X
                </button>
                <div openModal={this.state.openModal} className="modal_container_booking">
                    <p className="book_modal_title">Book' information</p>
                    {/*<h1>Type: Coming Event</h1>*/}
                    <h1 className="book_modal_type">Type of event : {this.state.event.schedule.title}</h1>
                    <p className="book_modal_time">
                        <i className="far fa-clock clock_start"></i> Start: { this.state.event.schedule && 
                        this.state.event.schedule.end._date.toLocaleDateString(undefined, options) } 
                        <span> {this.state.event.schedule && s_time}</span>
                    </p>
                    <p className="book_modal_time">
                        <i className="far fa-clock clock_end"></i> End: {this.state.event.schedule && 
                        this.state.event.schedule.start._date.toLocaleDateString(undefined, options)} 
                        <span> {this.state.event.schedule && e_time}</span>
                    </p>
                    <p className="book_modal_time">Duration: {this.state.event.schedule && this.state.event.schedule.goingDuration} hours</p>
                    <div className="book_modal_attendee">
                        <h3 className="book_modal_step">Attendees</h3>
                        {this.state.event.schedule && this.state.event.schedule.attendees.map(e =>(
                            <div className="book_modal_userInfo">
                                <div className="modal_userPicture">                    
                                    <img src={e.profile_pic} className="userPicture" alt="UserPicture" />
                                </div>
                                <p className="userName">{e.name} </p>
                            </div>
                        ))}
                        <h3 className="book_modal_step">Details</h3>
                        {this.state.event.schedule && <p className="book_modal_time">{this.state.event.schedule.body}</p>}
                    </div>
                   <button className="cancel_booking" onClick={() => this.cancel_booking(this.state.event.schedule.id)}>Cancel booking</button>
                </div>
            </div>
        )
        return modal
        }
        return modal
    }
    handleDbClick = (event) => {
        this.setState({event: event})
        this.modal_per_case(event)
        this.setState({openModal: true})
    }
    render() {

        return (
            <div className="FirstDiv">
            <div className="PageConteneur">
                <h1 className="booking_title">Start booking</h1>
                <div className="booking_div_btn">
                    <button onClick={this.handleClickPrevButton} className="booking_btn"> 
                       <i className="fa fa-chevron-left"></i> Previous month 
                    </button>
                    <span className="today_date_booking"> {this.calendarRef && this.display_date()} </span>
                    <button onClick={this.handleClickNextButton} className="booking_btn"> 
                        Next month <i className="fa fa-chevron-right"></i>
                    </button>
                </div>
                <button onClick={this.scrollTotoday} className="booking_btn move_class">Today</button>       
                <div>{this.modal_per_case()}</div>
                <Calendar visibleWeeksCount={4} ref={this.calendarRef} usageStatistics={true}
                          useCreationPopup={true} useDetailPopup={false} disableClick={true}
                          onClickSchedule={this.handleDbClick}
                          calendars={[
                            {
                                id: '0',
                                name: 'Not available',
                                bgColor: '#9e5fff',
                                borderColor: '#9e5fff'
                            },  
                            {
                                id: '1',
                                name: 'Past Event',
                                bgColor: '#FF0000',
                                borderColor: '#FF0000'
                            },
                            {
                                id: '2',
                                name: 'Event',
                                bgColor: '#d229e8',
                                borderColor: '#d229e8'
                            }
                        ]}
                        schedules={this.state.schedules}
                        view="month"
                        template={{
                            milestone(schedule) {
                                return `<span style="color:#fff;background-color: ${schedule.bgColor};">${
                                schedule.title
                                }</span>`;
                            },
                            milestoneTitle() {
                                return 'Milestone';
                            },
                            allday(schedule) {
                                return `${schedule.title}<i class="fa fa-refresh"></i>`;
                            },
                            alldayTitle() {
                                return 'All Day';
                            }
                        }}
                />
            </div>
        </div>
        )
    }
}
