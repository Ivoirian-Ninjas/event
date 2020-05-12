import React, { Component } from 'react'
import Calendar from '@toast-ui/react-calendar';
import 'tui-calendar/dist/tui-calendar.css';
import { API_ROOT } from '../../../constants';
import current_user from '../../../helper/current_user';

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

      modal_styles = {
        width: "60%",
        maxWidth: "100%",
        margin: "0 auto",
        position: "fixed",
        left: "50%",
        top: "50%",
        transform: "translate(-50%, -50%)",
        zIndex: "29999",
        backgroundColor: "#fff",
        display: "flex",
        flexDirection: "column",
        boxShadow: "0px 0px 0px 400px rgba(0, 0, 0, 0.40)",
    }

    modal_per_case = () => {
        let options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric', hour12: false, timeZone: 'UTC'  };
console.log(this.state.event)
                let modal= null
        if(this.state.openModal  ){
            const s_date =this.state.event.schedule.start._date
            const s_time= `${s_date.getHours()}: ${s_date.getMinutes()}`
            const e_date=this.state.event.schedule.end._date
            const e_time = `${e_date.getHours()}: ${e_date.getMinutes()}`
             modal = (
            <div style={this.modal_styles} className="div_modal">
                <button onClick={this.close_modal} className="close_modal">
                    <i className="far fa-times-circle"></i> 
                </button>
                <div className="modal_container">
                    <h1>Type: {this.state.event.calendar.name}</h1>
                    <h1>{this.state.event.schedule.title}</h1>
                    <p>start: { this.state.event.schedule && this.state.event.schedule.end._date.toLocaleDateString(undefined, options) } <span>{this.state.event.schedule && s_time}</span></p>
                    <p>end: {this.state.event.schedule && this.state.event.schedule.start._date.toLocaleDateString(undefined, options)} <span>{this.state.event.schedule && e_time}</span></p>
                    <p>Duration: {this.state.event.schedule && this.state.event.schedule.goingDuration} hours</p>
                    <div>
                        <h3>Attendees</h3>
                        {this.state.event.schedule && this.state.event.schedule.attendees.map(e =>(
                            <div>
                                <p>{e.name} </p>
                                {/* <div style={{width: "1 px",height: "1 px"}}>                    
                                    <img src={e.profile_pic} className="profile_file" />

                                </div> */}
                            </div>
                        ))}
                        <h3>Details</h3>
                        {this.state.event.schedule && <p>{this.state.event.schedule.body}</p>}
                    </div>
                   
                </div>
            </div>
        )
        return modal
        }
       

        return modal
    }
    handleDbClick = (event) => {
        this.setState({event: event})
        console.log(event.schedule.start._date)
        this.modal_per_case(event)
        this.setState({openModal: true})
    }
    render() {

        return (
            <div className="PageConteneur">
                <h1>bookings</h1>         
                <button onClick={this.handleClickPrevButton}>Previous month</button>
                <button onClick={this.handleClickNextButton}>Next month</button>
                <button onClick={this.scrollTotoday}>Today</button>
                <span>{this.calendarRef && this.display_date()}</span>

                <div>{this.modal_per_case()}</div>
                <Calendar
                visibleWeeksCount={4}
                ref={this.calendarRef}
                usageStatistics={true}
                useCreationPopup={true}
                useDetailPopup={true}
                disableClick={true}
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
        )
    }
}
