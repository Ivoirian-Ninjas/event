import React, { Component } from 'react'
import {API_ROOT,API_WS_ROOT} from '../../constants'
import actioncable from "actioncable"
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
        fetch(`${API_ROOT}/conversations?current_user=${current_user().id}`)
          .then(res => res.json())
          .then(json=> this.setState({conversations: json.conversations }))
          this.cable = actioncable.createConsumer(API_WS_ROOT)

      }

      handleClick = id => {
    
      const conversation = this.state.conversations.find(e => e.data.id === id)
      this.setState({activeConversation: id,messages: conversation.data.attributes.messages})  
    this.conversationChannel =  this.cable.subscriptions.create({
        channel: `ConversationsChannel`, 
        id: id
    },{
        connected: () => {
            console.log("connected!")
        },
        disconnected: () => {},
        received: data => {
          console.log("=============================")
          console.log(data)
          console.log("=============================")


          this.handleReceivedMessage(data)

        }
    })
    console.log(this.conversationChannel)

     
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
          this.setState({messages: conversation.data.attributes.messages, conversations: conversations})
      }

     
  send_message = () => {
   
    if(this.state.current_message != "" && this.state.activeConversation){
      this.conversationChannel.send({message_content: this.state.current_message,conversation_id: this.state.activeConversation, current_user: current_user().id})
    this.setState({ current_message: '', "is_typing?": false});
    }
   
  };

    handleChange = (event) => this.setState({current_message: event.target.value, "is_typing?": true})
    render() {
        return (
            <div className="PageConteneur">
                <br></br>
                {this.cable &&  this.state.conversations ?
                   <Conversation 
                   conversations={this.state.conversations} 
                   handleClick={this.handleClick} 
                  /> :
                  <div>
                      <h3>You have 0  Conversation</h3>
                      {this.state["is_typing?"] ? <p>typing...</p>: null}
                  </div>

                }
                
              {this.state.activeConversation &&
                  <MessageContainer 
                    messages={this.state.messages} 
                    handleChange={this.handleChange} 
                    activeConversation={this.state.activeConversation} 
                    current_message={this.state.current_message} 
                    send_message ={this.send_message}/> 
                     }

                <div>
                    <a>Message(unread messages)</a>
                    {this.state["is_typing?"] ? <p>typing...</p>: null}
                </div>
            </div>
        )
    }
}
