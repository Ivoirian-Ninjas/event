import React, { Component } from 'react'
import current_user from '../../helper/current_user';

export default class conversationList extends Component {

      display_list = () =>{
        console.log(this.props)
        return this.props.conversations.map(conversation => {
          return (
            <React.Fragment key={conversation.data.id}>
              <div  onClick={() =>this.props.handleClick(conversation.data.id)}>{current_user().id ===  conversation.data.attributes.host.id ? <div>{conversation.data.attributes.client.name}</div>:<div>{conversation.data.attributes.host.name}</div>}</div>

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
