import React from 'react'
import image from '../../assets/img/Better/shardayyy-photography-fJzmPe-a0eU-unsplash.jpg'
import 'react-day-picker/lib/style.css'
import DatePicker from 'react-date-picker'
import TimePicker from 'react-time-picker'
import current_user from '../../helper/current_user';

let timeStyle = {
    width: "100%",
    height: "42px",
    border: "1px solid gray",
    outline: "none",
}

export default function MessageContainer(props) {
    const display_messages = () => props.messages.map(e => {
        console.log(props)
        const user = props.users.find(user => user.id === `${e.user_id}`)
        const options = {year: 'numeric', month: 'long', day: 'numeric', hour12: false, timeZone: 'UTC'  };
        const normalizedDate =  new Date( Date.parse(e.created_at) )
        const date =normalizedDate.toLocaleDateString(undefined, options) 
        const time = `${normalizedDate.getHours()} : ${normalizedDate.getMinutes()} `

       return (<div key={e.id} className="message_contain">
            {user.id === `${current_user().id}` ? 
            <React.Fragment>
            <div className='div_img_sms'>
                <img src={user.profile_pic} className="image_sms" alt="img" />
            </div>
            <p className="message_content">
                <p>{e.content}</p>
                <p className="time_info_inbox">By {user.name} On {date} At {time}</p>
            </p>
            </React.Fragment>
            :
            <React.Fragment>
            <p className="message_content">
                <p>{e.content}</p>
                <p className="time_info_inbox">By {user.name} On {date} At {time}</p>
            </p>
            <div className='div_img_sms'>
                <img src={user.profile_pic} className="image_sms" alt="img" />
            </div>
            </React.Fragment>
            
            }
         
          
        </div>)
    })
    return (
        <div className='message_part' style={{display: ""+props.show_conversation+""}}>
            <div className="back_btn">
                <button className="btn_back" onClick={() =>props.goBack()}> <i className="fa fa-chevron-left"></i> Back</button>
            </div>
            <div className="message_container">
                {display_messages()}
                <div className="send_part">
                    <div className='div_img_sms'>
                        <img src={current_user().profile_pic} className="image_sms" alt="img" />
                    </div>
                    <div className="div_input_send">
                        <input  value={props.current_message} name="current_message" onChange={props.handleChange}
                                placeholder="Type a message..." className="input_message" />
                    </div>
                </div>
                <button onClick={props.send_message} className="btn_send_message">
                        Send <i className="fab fa-telegram-plane"></i>
                </button>
            </div>
            <div className="book_part">
                <div className="show_book_info">
                    <p className="show_book_text"> 
                        <b className="show_book_bolder">
                            Price
                        </b> / hour
                    </p>
                    <p className="show_book_text"><i className="fa fa-star show_star"></i> 4.93 (330)</p>
                </div>
                <div className="show_book_date">
                    <label className="show_book_label">Dates</label>
                    <input type="date" className="date_book_message" />
                </div>
                <div className="show_book_time">
                    <label className="show_book_label">Times</label>
                    <input type="time" className="time_book_message" />
                    <input type="time" className="time_book_message" />
                </div>
                <button className="show_book_btn">Book this place</button> 
            </div>
          </div>
    )
}

