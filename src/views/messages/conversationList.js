import React, { Component } from 'react'

export default class conversationList extends Component {

      display_list = () =>{
        console.log(this.props)
        return this.props.conversations.map(conversation => {
          return (
            <React.Fragment>
              <li onClick={() =>this.props.handleClick(conversation.data.id)}>new_convo </li>
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
