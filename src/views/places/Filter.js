import React, { Component } from 'react'

export default class Filter extends Component {
    render() {
        return (
            <div>
                <button className="buttonFilter">Dates</button>
                <button className="buttonFilter">Guests</button>
                <button className="buttonFilter">Work trip</button>
                <button className="buttonFilter">Entire place</button>
                <button className="buttonFilter">Price</button>
                <button className="buttonFilter">Security guards</button>
            </div>
        )
    }
}
