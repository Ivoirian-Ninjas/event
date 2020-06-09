import React, { Component } from 'react'
import current_user from '../../helper/current_user';
import cover from '../../assets/img/Better/marc-babin-ecGZWPOvya0-unsplash.jpg'
import picture from '../../assets/img/Better/maxwell-young-dfvsyAwdzcE-unsplash.jpg'
export default class conversationList extends Component {

      display_list = () =>{
        return this.props.conversations.map(conversation => {
        // this user is the correspont of the current user 

        const image  = conversation.included[0].attributes.url // find the first image of the place
         const user = current_user().id === conversation.data.attributes.client.id ? conversation.data.attributes.host : conversation.data.attributes.client
         const normalizedDate =  new Date( Date.parse(conversation.data.attributes.created_at) )
         const options = {year: 'numeric', month: 'long', day: 'numeric', hour12: false, timeZone: 'UTC'  }
         const date =normalizedDate.toLocaleDateString(undefined, options) 
         const time = `${normalizedDate.getHours()} : ${normalizedDate.getMinutes()} `

          return (
            <React.Fragment key={conversation.data.id}>
              <div onClick={() =>this.props.handleClick(conversation.data.id)} className="inbox_conversation_message" 
                   style={{display: ""+this.props.display+""}}>
                  <div className="conversation_start">
                    <div className="div_cover">
                      <img src={image} className="cover_inbox" alt="The_cover"/>
                    </div>
                    <div className="div_picture">
                      <img src={user.profile_pic} className="picture_inbox" alt="The_picture"/>
                    </div>
                      <p className="name_inbox">
                        <p>{user.name}</p>
                        <p className="time_info_inbox">{date}, {time}</p>
                      </p>
                  </div>
           
              </div>

          </React.Fragment>
          )
        }) 
      } 
    render() {
        return (
            <div>     
                {this.display_list()}
            </div>
        )
    }
}
