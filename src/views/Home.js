import React, { Component } from 'react'
import current_user from '../helper/current_user'
export default class Home extends Component {
    componentDidMount(){
       let user = current_user()
        console.log(user)
    }
    render() {
        return (
            <div>
                <h1>This is the home</h1>
            </div>
        )
    }
}
