import React from 'react'
import image from '../../assets/img/Better/shardayyy-photography-fJzmPe-a0eU-unsplash.jpg'
export default function MessageContainer(props) {
    console.log(props)
    const display_messages = () => props.messages.map(e => 
        <div key={e.id} className="message_contain">
            <div className='div_img_sms'>
                <img src={image} className="image_sms" alt="img" />
            </div>
            <p className="message_content">
                <p>{e.content}</p>
                <p className="time_info_inbox">Tues, May 8, 2020 9:21 AM</p>
            </p>
        </div>
        )
    return (
        <div className='message_part'>
            <div className="message_container">
                {display_messages()}
                <div className="send_part">
                    <div className='div_img_sms'>
                        <img src={image} className="image_sms" alt="img" />
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
            </div>
            
          </div>
    )
}

