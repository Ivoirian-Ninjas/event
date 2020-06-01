import React, { Component } from 'react'
import { API_ROOT } from '../../../constants';
import current_user from '../../../helper/current_user';


export default class Analytics extends Component {
    componentDidMount(){
        fetch(API_ROOT + `/places?user_id=${current_user().id}`)
    }
    state={
        selectedPlace: null,
        openModal: false
    }
     
    render() {
        return (
            <div className='PageConteneur'>
                <h1>Analytics</h1>

            </div>
        )
    }
}
