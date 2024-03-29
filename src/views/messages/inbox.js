import React, { Component } from 'react'
import {API_ROOT,API_WS_ROOT} from '../../constants'
import actioncable from "actioncable"
import Conversation from './conversationList'
import MessageContainer from './messageContainer';
import current_user from '../../helper/current_user';
import "../../assets/inbox.css"
export default class inbox extends Component {
  constructor(){
    super()
    this.state = {
       "is_typing?": false,
       conversations: [],
       current_message: "",
       messages: [],
       users: [],
       activeConversation: null,
       convo: null,
       display:"block",
       show_conversation:"block",
       current_place: {}
    }
  }


    componentDidMount = () => {
      this.setState({display:"block"})
        fetch(`${API_ROOT}/conversations?current_user=${current_user().id}`)
          .then(res => res.json())
          .then(json=> this.setState({conversations: json.conversations }, () => console.log(this.state.conversations)))
          this.cable = actioncable.createConsumer(API_WS_ROOT)

      }

      handleClick = id => {
      this.setState({display:"none",show_conversation:"block"})
      const conversation = this.state.conversations.find(e => e.data.id === id)
      const users = conversation.included.map(e=> e.type === 'user' && ({name: e.attributes.name, profile_pic: e.attributes.profile_pic, id: e.id}) )
      this.setState({activeConversation: id,messages: conversation.data.attributes.messages, users: users, current_place: conversation.data.attributes.place})  
    this.conversationChannel =  this.cable.subscriptions.create({
        channel: `ConversationsChannel`, 
        id: id
    },{
        connected: () => {
            console.log("connected!")
        },
        disconnected: () => {},
        received: data => {
          this.handleReceivedMessage(data)
        }
    })
    console.log(this.conversationChannel)

     
      }
  

      handleReceivedMessage = response => {

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
   
    if(this.state.current_message !== "" && this.state.activeConversation){
      this.conversationChannel.send({message_content: this.state.current_message,conversation_id: this.state.activeConversation, current_user: current_user().id})
    this.setState({ current_message: '', "is_typing?": false});
    }
   
  };

    handleChange = (event) => this.setState({current_message: event.target.value, "is_typing?": true})
    goBack = () =>{
      this.setState({
        display:"block",
        show_conversation:"none"
      })
    }
    render() {
        return (
            <div className="PageConteneur">
                <br></br>
                {this.cable &&  this.state.conversations ?
                   <Conversation 
                   conversations={this.state.conversations} 
                   handleClick={this.handleClick}
                   display={this.state.display}
                  /> :
                  <div className="inbox_conversation">
                      <p><i className="fas fa-envelope icon_inbox"></i></p>
                      <p className="no_message_text"><h3 >You have 0 conversation.</h3></p>
                      {this.state["is_typing?"] ? <p>typing...</p>: null}
                  </div>

                }
                
              {this.state.activeConversation &&
                  <MessageContainer 
                    place = {this.state.current_place}
                    users = {this.state.users}
                    messages={this.state.messages} 
                    handleChange={this.handleChange} 
                    activeConversation={this.state.activeConversation} 
                    current_message={this.state.current_message} 
                    send_message ={this.send_message}
                    goBack = {this.goBack}
                    show_conversation={this.state.show_conversation}/> 
                     }

                <div className="unread_inbox" style={{display: ""+this.state.display+""}}>
                    <p>Message(unread messages)</p>
                    {this.state["is_typing?"] ? <p>typing...</p>: null}
                </div>
            </div>
        )
    }
}
