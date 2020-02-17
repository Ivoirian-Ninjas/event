import React, { Component } from 'react'

export default class Step6 extends Component {
    render() {
        return (
            <div>
                <p><button onClick={this.props.previousStep}>Back</button></p>
                <p><button onClick={this.props.handleSubmit}>Submit</button></p>
            </div>
        )
    }
}
