import React, { Component } from 'react'
import {API_ROOT} from '../../constants'
import Conversation from './conversationList'
import MessageContainer from './messageContainer';
import current_user from '../../helper/current_user';

export default class inbox extends Component {
    state = {
       "is_typing?": false,
       conversations: [],
       current_message: "",
       messages: [],
       activeConversation: null,
       convo: null

    }

   
  

    componentDidMount = () => {
        fetch(`${API_ROOT}/conversations`)
          .then(res => res.json())
          .then(json=> this.setState({conversations: json.conversations }))
      }

      handleClick = id => {
    
      const conversation = this.state.conversations.find(e => e.data.id === id)
      this.setState({messages: conversation.data.attributes.messages})       
       this.setState({ activeConversation: id, convo: conversation})


      }
  

      handleReceivedMessage = response => {
          console.log("this is the response")
          console.log(response)
          const message =response.data.attributes
        const conversations = [...this.state.conversations];
        const conversation = conversations.find( conversation => conversation.data.id === message.conversation_id )
        if( !conversation.data.attributes.messages.includes(message)){
            conversation.data.attributes.messages = [...conversation.data.attributes.messages, message]

        }
        console.log(conversation.data.attributes.messages)
          this.setState({convo: conversation})
      }

     
  send_message = () => {
   
    if(this.state.current_message != "" && this.state.activeConversation){
         fetch(`${API_ROOT}/messages`, {
      method: 'POST',
      headers:  {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
      body: JSON.stringify({message_content: this.state.current_message,conversation_id: this.state.activeConversation, current_user: current_user().id})
    });
    this.setState({ current_message: ''});
    }
   
  };

    handleChange = (event) => this.setState({current_message: event.target.value, "is_typing?": true})
    render() {
        return (
            <div className="PageConteneur">
                <br></br>
                <Conversation conversations={this.state.conversations} activeConversation={this.state.activeConversation} handleClick={this.handleClick} handleReceivedMessage={this.handleReceivedMessage}/>
                
              {this.state.convo ? 
                  <MessageContainer convo={this.state.convo} handleChange={this.handleChange} activeConversation={this.state.activeConversation} current_message={this.state.current_message} send_message ={this.send_message}/> : 
                  null }

                <div>
                    <a>Message(unread messages)</a>
                    {this.state["is_typing?"] ? <p>typing...</p>: null}
                </div>
            </div>
        )
    }
}
