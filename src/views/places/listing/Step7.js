import React, { Component } from 'react'

export default class Step7 extends Component {
    render() {
        return (
            <div>
                <div>
                    <h4>Rules of the house</h4>
                    <small>Please let your guests know what are your rules. </small>
                    <textArea name="rules" onChange={this.props.handleChange}></textArea>
                </div>
                <p><button onClick={this.props.previousStep}>Back</button></p>
                <p><button onClick={this.props.nextStep}>Next</button></p>
            </div>
        )
    }
}
