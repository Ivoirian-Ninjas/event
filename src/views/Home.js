import React, { Component } from 'react'
import current_user from '../helper/current_user'
import '../assets/Home.css'
import img1 from '../assets/img/first-img.jpg'
export default class Home extends Component {
    componentDidMount(){
       let user = current_user()
        console.log(user)
    }
    render() {
        return (
            <div className="PageConteneur">
                <div className="partieSearch">
                    <div className="searchContenu">
                        <h1 className="h1Home">Find your <br/> place anywhere</h1>
                        <h3 className="h3Home">A very easy platform to search some locals to do your <br/> event</h3>
                        <input type='text' placeholder="What are your planing" className="TypeEvent"/>
                        <input type='text' placeholder="Where?" className="LocateEvent"/>
                        <input type='date' placeholder="When?" className="LocateEvent"/>
                        <input type='time' placeholder="Time start" className="TimeEvent"/>
                        <input type='time' placeholder="Time end" className="TimeEvent"/>
                        <input type='number' placeholder="Numbers of people" className="NumberEvent"/>
                        <button className="searchEvent">Search <i className="fas fa-search"></i></button>
                    </div>
                    
                </div>
        
                <div className="imageHome">
                    <img src={img1}/>
                </div>
            </div>
        )
    }
}
