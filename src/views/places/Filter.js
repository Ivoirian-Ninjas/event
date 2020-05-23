import React, { Component } from 'react'

export default class Filter extends Component {
    render() {
        return (
            <div>
                <button className="buttonFilter">Dates</button>
                <button className="buttonFilter willHide">Guests</button>
                <button className="buttonFilter">Work trip</button>
                <button className="buttonFilter willHide">Entire place</button>
                <button className="buttonFilter willHide">Price</button>
                <button className="buttonFilter willHide">Security guards</button>
            </div>
        )
    }
}
