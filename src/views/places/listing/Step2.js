import React, { Component } from 'react'

export default class Step2 extends Component {
    render() {
        return (
            <div>
                <p><button onClick={this.props.previousStep}>Previous Step</button></p>
                <p><button onClick={this.props.nextStep}>Next Step</button></p>
            </div>
        )
    }
}
