import React, { Component, useState} from 'react'
import current_user from '../../helper/current_user'
import '../../assets/calendar.css'
import 'react-day-picker/lib/style.css'

import '../../assets/Home.css'
import DatePicker from 'react-date-picker'

import TimePicker from 'react-time-picker'



import {API_ROOT, HEADERS, ROOT} from '../../constants'
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";

let timestyle = {
    width:"100%",
    height:"42px",
    border:"1px solid gray",
    outline:"none",

}
let show_modal_styles = {
  width: "85%",
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
  boxShadow: "0px 0px 0px 400px rgba(0, 0, 0, 0.70)",
}
export default class show extends Component {
    componentDidMount(){
        console.log(this.props.match.params.id)
        const place_id = this.props.match.params.id
        fetch(`${API_ROOT}/places/${place_id}`)
        .then(resp => resp.json() )
        .then(json => {
            console.log(json.place.data)
            this.setState({place: json.place.data, disabled_days: json.disabled_days}) } )     
    }

    display_amen =() => {
        if(this.state.place.attributes){
            return this.state.place.attributes.amenities.map(e => <li className="show_services" key={e.title}>{e.title}</li>)

        }
    }

    // contactHost = () => {
    //     if(this.state.current_message != ""){
    //         fetch(`${API_ROOT}/messages`, {
    //             method: 'POST',
    //             headers: HEADERS,
    //             body: JSON.stringify( {current_message: this.state.current_message, host_id: this.state.host.id, current_user: current_user().id})
    //           })
    //           this.setState({current_message: ''})

    //     }
    // }

    handleChange = (e) =>  this.setState({current_message: e.target.value})
   
    state = {
        place: {},
        current_message: "",
        disabled_days: [],
        date: new Date,
        start_time: '',
        end_time: '',
        ShowOpen:false,
      }
      s_change_time = time => this.setState({start_time: time})
      e_change_time = time => this.setState({end_time: time})


    change = date => this.setState({date: date})
                
        book = () => {
            console.log(this.state.place)
            const start = this.state.start_time
            const end = this.state.end_time 
            const place_id = this.state.place.id
            const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric', hour12: false, timeZone: 'UTC'  };
            const string_date =this.state.date.toLocaleString([], options)
            console.log(string_date)
            if(start !== '' && end !== '' && this.state.place)  {
                console.log(this.state.place)
                document.location.href = `${ROOT}/bookings/${place_id}?s_time=${start}&e_time=${end}&date=${string_date}`
            }
        }
      
        display_img = () =>
        <React.Fragment>
            { this.state.place.attributes && this.state.place.attributes.images.map(e =>
                <div className="show_div_top_img" key={e.id}> 
                    <img src={e.url} className="show_top_img"/>
                    <p className="legend">Legend 1</p>
                </div>
            )}
        </React.Fragment>
        display_img2 = () =>
        <React.Fragment>
            {this.state.place.attributes && this.state.place.attributes.images.map(e =>
                <div className="show_div_top_img2" key={e.id}> 
                    <img src={e.url} className="show_top_img_2"/>
                    <p className="legend">Legend 1</p>
                </div>
            )}
        </React.Fragment>
        
    handleClick = () => {
        this.setState({
            ShowOpen: true
        })
    }
    close_modal = () =>{
        this.setState({ ShowOpen: false })
    }
    render() {
        let show_modal = (
            <div style={show_modal_styles} className="div_modal">
                <button onClick={this.close_modal} className="close_modal_show">
                   Close
                </button>
                <div SubOpen={this.state.SubOpen} className="modal_container_show">
                    <div className="modal_container_img">
                        <Carousel showArrows={true} infiniteLoop={true} className="show_carousel">
                            <div className="modal_img">
                                {this.display_img2()}
                            </div>
                        </Carousel>
                    </div>
                </div>
            </div>
            //onChange={onChange} onClickItem={onClickItem} onClickThumb={onClickThumb}
        )
        if (!this.state.ShowOpen) {
            show_modal = null;
        }
        return (
        <div className='PageConteneur'>
        <div>{show_modal}</div>
            <div className="show_div_top" onClick={this.handleClick}>
                {this.display_img()}
                <div className="show_div_top_btn">
                    <button className="btn_view_all" onClick={this.handleClick}>View Photos</button>
                </div>
            </div>
           <div className="show_div_left">
                <h1 className="show_title">{this.state.place.attributes && this.state.place.attributes.name }</h1>
                <address className="show_address">
                    {this.state.place.attributes && this.state.place.attributes.address.city }, {this.state.place.attributes && this.state.place.attributes.address.country }.
                </address>

                

                <div className="show_div"> 
                    <h4 className="show_element_title">About </h4>
                    <p className="show_contain">{this.state.place.attributes && this.state.place.attributes.description}</p>
                </div>

                <div className="show_div"> 
                    <h4 className = "show_element_title">Amenities</h4>
                    <ul className="show_menu_services">
                        {this.display_amen()}
                    </ul>
                </div>

                <div className="show_div">
                    <h4 className = "show_element_title">Availability</h4>
                    <p className="show_contain">{ this.state.place.attributes && this.state.place.attributes.schedule.s_day} to {this.state.place.attributes && this.state.place.attributes.schedule.e_day}</p>
                    <p className="show_contain"><i className="far fa-clock show_open"></i> Open : {this.state.place.attributes && (new Date(this.state.place.attributes.schedule.s_Time) ).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })} </p>
                    <p className="show_contain"><i className="far fa-clock show_close"></i> Close : {this.state.place.attributes && (new Date(this.state.place.attributes.schedule.e_Time)).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }) } </p>
                </div>
                <div className="show_div">
                    <h4 className = "show_element_title">Parking</h4>
                    <p className="show_contain"> {this.state.place.attributes && this.state.place.attributes.parking.description}</p>
                </div>
                <div className="show_div">
                    <h4 className = "show_element_title">Host rules </h4>
                    <p className="show_contain">{this.state.place.attributes && this.state.place.attributes.rule.content } </p>        
                </div>

                <div className="show_div">
                    <h4 className = "show_element_title">Location </h4>
                          
                    <p className="show_contain">
                      <i className="far fa-flag show_icon_locate"></i> Country : {this.state.place.attributes ? this.state.place.attributes.address.country : null}
                    </p>
                    <p className="show_contain"> 
                      <i className="fa fa-city show_icon_locate"></i> City : 
                        {this.state.place.attributes && this.state.place.attributes.address.state }, {this.state.place.attributes && this.state.place.attributes.address.city }
                    </p>

                    {/**Add map here */}
                </div>

                <div className="show_div"> 
                    <h4 className = "show_element_title">Cancellation Policy</h4>
                    <p className="show_contain">{this.state.place.attributes? this.state.place.attributes.cancelation_policy.genre : null}</p>
                    <p className="show_contain">{ this.state.place.attributes ? this.state.place.attributes.cancelation_policy.content: null}</p>
                </div>

                <div className="show_div">   
                    <h4 className = "show_element_title">Reviews</h4>
                    <p className="show_contain"><i className="fa fa-star show_star"></i> <b>4.93</b>  | <b>330</b> reviews</p>
                {/* show the first 5 reviews */}
                </div>
          
{/*                 
                <div className="show_div">
                    {
                    this.state.place.attributes && ( this.state.place.attributes.user.id != current_user().id )? 
                    (<div><button onClick={this.contactHost}>Contact {this.state.place.attributes.user.name}</button>
                    <TextArea value={this.state.current_message} onChange={this.handleChange}></TextArea></div>)
                    :  null
                    }
                </div> */}
                
           </div>
           <div className="show_div_right">
                <div className="show_book">
                    <div className="show_book_info">
                        <p className="show_book_text"> <b className="show_book_bolder">${this.state.place.attributes && this.state.place.attributes.price} </b> / hour</p>
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

                        />
                </div>
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
