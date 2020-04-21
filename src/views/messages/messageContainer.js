import React from 'react'

export default function MessageContainer(props) {
    console.log(props)
    const display_messages = () => props.convo.data.attributes.messages.map(e => <div key={e.id}>{e.content}</div>)
    return (
        <div>
       

            {display_messages()}
            <div>
                <input  value={props.current_message} name="current_message" onChange={props.handleChange} placeholder="type a message" />
                <button onClick={props.send_message}>Send</button>
            </div>
              
          </div>
    )
}

