import React, { Component } from 'react'
import { API_ROOT } from '../../../constants';
import current_user from '../../../helper/current_user';
import Analytics_modal from './Analytics_modal'
import '../../../assets/analytics.css'

export default class Analytics extends Component {
    componentDidMount(){
        fetch(API_ROOT + `/places?user_id=${current_user().id}`)
        .then(resp => resp.json())
        .then(json => this.setState({places: json.places}))
    }
    state={
        places: [],
        selectedPlace: null,
        openModal: false
    }


    display_places = () => {
        console.log(this.state.places)
       return  ( this.state.places.map(e => 
            <div className="analytics_div" 
            onClick={() => this.setState({openModal: true, selectedPlace: e.data.attributes})}>
                <div className="analytics_blocPicture">
                    <img src={e.data.attributes.images[0].url} className="analytics_Picture" alt="" />
                </div>
                <h3 className="analytics_name">{e.data.attributes.name}</h3>
                <p className="show_contain">
                    <i className="fa fa-star show_star"></i> <strong>4.93</strong>  | <strong>330</strong> reviews
                </p>
            </div>
            )
        )

    }

    close_modal = () => this.setState({openModal: false})
    
    render() {
        return (
            <div className='PageConteneur'>
                <h1 className="analytics_title">ANALYTICS</h1>
                <div>{this.state.openModal && this.state.selectedPlace && <Analytics_modal close_modal={this.close_modal} place={this.state.selectedPlace}/>}</div>
                {   this.state.places.length != 0?
                   <div className="analytics_contain"> {this.display_places()} </div> : 
                    <div className="no_analytics">
                        <p>You did not list a place yet. <a href='/new_places'>Would you like to start hosting?</a></p>
                    </div>}

            </div>
        )
    }
}
