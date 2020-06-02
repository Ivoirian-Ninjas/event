import React, { Component } from 'react'
import current_user from '../../helper/current_user';
import cover from '../../assets/img/Better/marc-babin-ecGZWPOvya0-unsplash.jpg'
import picture from '../../assets/img/Better/maxwell-young-dfvsyAwdzcE-unsplash.jpg'
export default class conversationList extends Component {

      display_list = () =>{
        console.log(this.props)
        return this.props.conversations.map(conversation => {
          return (
            <React.Fragment key={conversation.data.id}>
              <div onClick={() =>this.props.handleClick(conversation.data.id)} className="inbox_conversation_message" 
                   style={{display: ""+this.props.display+""}}>
                {current_user().id ===  conversation.data.attributes.host.id ?
                  <div className="conversation_start">
                    <div className="div_cover">
                      <img src={cover} className="cover_inbox" alt="The_cover"/>
                    </div>
                    <div className="div_picture">
                      <img src={picture} className="picture_inbox" alt="The_picture"/>
                    </div>
                      <p className="name_inbox">
                        <p>{conversation.data.attributes.client.name}</p>
                        <p className="time_info_inbox">Tues, May 8, 2020 9:21 AM</p>
                      </p>
                  </div>
                  :<div className="conversation_start">
                    <div className="div_cover">
                      <img src={cover} className="cover_inbox" alt="The_cover"/>
                    </div>
                    <div className="div_picture">
                      <img src={picture} className="picture_inbox" alt="The_picture"/>
                    </div>
                      <p className="name_inbox">
                        <p>{conversation.data.attributes.host.name}</p>
                        <p className="time_info_inbox">Tues, May 8, 2020 9:21 AM</p>
                      </p>
                  </div>
                }
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
