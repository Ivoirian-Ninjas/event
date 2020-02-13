import React, { Component } from 'react'

export default class Step3 extends Component {
    render() {
        return (
            <div>
            <p><button onClick={this.props.previousStep}>Previous Step</button></p>
            <p><button onClick={this.props.handleSubmit}>Submit</button></p>
            </div>
        )
    }
}
