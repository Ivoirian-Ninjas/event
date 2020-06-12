import React, { Component, useState} from 'react'
import current_user from '../../helper/current_user'
import '../../assets/calendar.css'
import 'react-day-picker/lib/style.css'
import DatePicker from 'react-date-picker'
import TimePicker from 'react-time-picker'
import {API_ROOT, HEADERS, ROOT} from '../../constants'
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import Slider from "react-slick"
import Footer from '../../components/footer'
import img_host from "./../../assets/img/Better/markus-spiske-UCbMZ0S-w28-unsplash.jpg"
import img_reviews from "./../../assets/img/Better/k-i-l-i-a-n-Nle65lXSY-I-unsplash.jpg"
import img_reviews2 from "./../../assets/img/Better/sarah-gotze-ODua_Pc7VQY-unsplash.jpg"

let timestyle = {
    width:"100%",
    height:"42px",
    border:"1px solid gray",
    outline:"none",
}


export default class show extends Component {
    componentDidMount(){
        window.addEventListener('scroll', this.handleScroll, true)
        console.log(this.props.match.params.id)
        const place_id = this.props.match.params.id
        fetch(`${API_ROOT}/places/${place_id}?current_user=${current_user().id}`)
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

 
    handleChange = (e) =>  this.setState({current_message: e.target.value})

    contactHost = () => {
        if(this.state.place.attributes && this.state.current_message !== ""){
            const options = {
                headers: HEADERS,
                method: 'POST',
                body: JSON.stringify( {message: this.state.current_message } )
             }
             fetch(`${API_ROOT}/messages?current_user=${current_user().id}&host_id=${this.state.place.attributes.user.id}&conversation_id=${this.state.place.id}`, options)
             .then(resp => resp.json())
             .then(json => json.sent && this.setState({current_message: ""}))
        }
       
    }
   
    state = {
        place: {},
        current_message: "",
        disabled_days: [],
        date: new Date,
        start_time: '',
        end_time: '',
        ShowOpen:false,
        Position: "fixed",
        Top:"90%",
        BookOpen : false
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


        <Carousel>
            {this.state.place.attributes && this.state.place.attributes.images.map(e =>
                <div className = "show_div_top_img" key={e.id}>
                    <img src={e.url} className="show_top_img"/>
                </div>
            )}
        </Carousel>
        display_img2 = () =>


        <Carousel showArrows={true} infiniteLoop={true} autoPlay={true} className="show_carousel">
            {this.state.place.attributes && this.state.place.attributes.images.map(e =>
                <div className="show_div_top_img2"  key={e.id}> 
                    <img src={e.url} className="show_top_img_2"/>
                    <p className="legend">Legend 1</p>
                </div>
            )}
        </Carousel>
        
    handleClick = () => {
        this.setState({
            ShowOpen: true
        })
    }
    close_modal = () =>{
        this.setState({ ShowOpen: false })
    }
    openBooking = () => {
        this.setState({
            BookOpen: true
        })
    }
    closeBooking = () =>{
        this.setState({ BookOpen: false })
    }
    componentWillUnmount() {
        window.removeEventListener('scroll', this.handleScroll);
    }
        handleScroll = () => {
            var pageHeight = this.refs.myContainer
            var infoHeight = this.refs.myInfo
            var scrollHeight = window.scrollY;

            if (scrollHeight > pageHeight.clientHeight && scrollHeight < (infoHeight.clientHeight+100)) {
                console.log(scrollHeight, pageHeight.clientHeight)
                this.setState({
                    Position: "fixed",
                    Top:"10%"
                })
            }
            else {
                this.setState({
                    Position: "absolute",
                    Top:"90%"
                })

            }
        }
    render() {
        let show_modal = (
            <div className="div_modal_show">
                <button onClick={this.close_modal} className="close_modal_show">
                   Close
                </button>
                <div ShowOpen={this.state.ShowOpen} className="modal_container_show">
                    <div className="modal_container_img">
                        {this.display_img2()}
                    </div>
                </div>
            </div>
        )
        if (!this.state.ShowOpen) {
            show_modal = null;
        }
        let modal_book = (
            <div className="div_modal_book">
                <button onClick={this.closeBooking} className="close_modal_book">
                   X
                </button>
                <div BookOpen={this.state.BookOpen} className="modal_container_book">
                    <div className="show_book">
                        <div className="show_book_info">
                            <p className="show_book_text"> 
                                <b className="show_book_bolder">
                                    ${this.state.place.attributes && this.state.place.attributes.price} 
                                </b> / hour
                            </p>
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
                                className="show_book_date_contain" />
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
        if(!this.state.BookOpen){
            modal_book = null;
        }
        return (
        <div className='PageConteneur'>
        <div>{show_modal}</div>
        <div>{modal_book}</div>
            <div className="show_div_top" onClick={this.handleClick} ref="myContainer">
                    {this.display_img()}
                <div className="show_div_top_btn">
                    <button className="btn_view_all" onClick={this.handleClick}>View All Photos</button>
                </div>
            </div>

           <div className="show_div_left" ref="myInfo">
                <div className="show_div">
                    <div className="show_div_info">
                        <h1 className="show_title">{this.state.place.attributes ? this.state.place.attributes.name : null}</h1>
                        <address className="show_address">
                            {this.state.place.attributes ? this.state.place.attributes.address.city : null}, 
                            {this.state.place.attributes ? this.state.place.attributes.address.country : null}.
                        </address>
                    </div>
                    <div className="show_div_info_img" onClick={() => {
                        window.location.href = `/profile_show`}}>
                        <img src={this.state.place.attributes && this.state.place.attributes.user.profile_pic} className="img_host"/>
                        <p className="show_address">{this.state.place.attributes && this.state.place.attributes.user.name}</p>
                    </div>
                    
                </div>

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
                    <div className="show_reviews">
                        <div className="reviews_img">
                            <img src={img_reviews} className="img_reviews"/>
                            <p className="info_reviews">
                                <b>John</b> <br />
                                June 2020
                            </p>
                        </div>
                        <p className="show_contain">
                        Sed ut perspiciatis, unde omnis iste natus error sit
                        voluptatem accusantium doloremque laudantium, totam rem aperiam eaque ipsa,
                        quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt.
                        </p>
                    </div>
                    <div className="show_reviews">
                        <div className="reviews_img">
                            <img src={img_reviews2} className="img_reviews"/>
                            <p className="info_reviews">
                                <b>Mary</b> <br />
                                July 2020
                            </p>
                        </div>
                        <p className="show_contain">
                        Sed ut perspiciatis, unde omnis iste natus error sit
                        voluptatem accusantium doloremque laudantium, totam rem aperiam eaque ipsa,
                        quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt.
                        </p>
                    </div>
                </div>

                <div>
                    {
                    this.state.place.attributes && (this.state.place.attributes.user.id != current_user().id)? 
                    (
                    <div className="show_div">
                        <div className="show_div_info">
                            <h4 className = "show_element_title_big">Hosted by {this.state.place.attributes && this.state.place.attributes.user.name}</h4>
                            <address className="show_address">
                                {this.state.place.attributes ? this.state.place.attributes.address.city : null}, 
                                {this.state.place.attributes ? this.state.place.attributes.address.country : null}.
                            </address>
                        </div>
                        <div className="show_div_info_img">
                            <img src={this.state.place.attributes && this.state.place.attributes.user.profile_pic} className="img_host"/>
                            <p className="show_address">{this.state.place.attributes && this.state.place.attributes.user.name}</p>
                        </div>
                        <textarea value={this.state.current_message} onChange={this.handleChange} 
                                className="TextAreaStepOne"></textarea>
                        <button onClick={this.contactHost} className="show_contact_host">Contact host</button>
                    </div>
                    )
                    :  null
                    }
                </div>

                
           </div>
           <div className="show_div_right" style={{position: ""+this.state.Position+"", top:""+this.state.Top+""}}>
                <div className="show_book">
                    <div className="show_book_info">
                        <p className="show_book_text"> 
                            <b className="show_book_bolder">
                                ${this.state.place.attributes && this.state.place.attributes.price} 
                            </b> / hour
                        </p>
                        <p className="show_book_text"><i className="fa fa-star show_star"></i> 4.93 (330)</p>
                    </div>
                    { (this.state.place.attributes && current_user().id != this.state.place.attributes.user.id) && 
                        (<div>
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
                        </div>)}
                </div>              

           </div>

           <div className="bookMobile">
                <div className="bookInfoMobile">
                    <p className="book_text_mobile"> 
                        <b className="book_bolder_mobile">
                            ${this.state.place.attributes && this.state.place.attributes.price} 
                        </b> / hour
                    </p>
                    <p className="book_text_mobile"><i className="fa fa-star show_star"></i> 4.93 (330)</p>
                </div>
                <div className="bookBtnMobile">
                    <button className="book_btn_mobile" onClick={this.openBooking}>Book</button>
                </div>
           </div>
            <div className="footerIllusion">
            </div>
           <footer className="footer searchPlace">
                <Footer/>
            </footer>
       </div>
        )
    }
}
