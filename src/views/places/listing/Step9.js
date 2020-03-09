import React, { Component } from 'react'

export default class Step9 extends Component {
    render() {
        return (
            <div>
                <div>
                    <h4>Review & Agree</h4>
                    

                </div>
                <p><button onClick={this.props.previousStep}>Back</button></p>
                <p><button onClick={this.props.handleSubmit}>Save</button></p>
            </div>
        )
    }
}
