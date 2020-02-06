import React, { Component } from 'react'

export default class booking_show extends Component {
    state = {}
    componentDidMount(){
        const id  = this.props.match.params.id
        fetch(`http://localhost:3000/bookings/${id}`)
        .then(resp => resp.json())
        .then(json => console.log(json))
    }
    render() {
        return (
            <div className='PageConteneur'>
                <h1>This is the booking show</h1>
            </div>
        )
    }
}
