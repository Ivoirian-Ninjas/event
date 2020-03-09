import React, { Component } from 'react'

export default class Step4 extends Component {
    render() {
        return (
            <div>
                <h1>What amensties do you offer?</h1>
                <small>Note that these amnesties are the most common the guests are expecting to see.You can always add your own after this is made public</small>
                <div>
                    <label>Wifi</label>
                    <input type="checkbox" name="wifi" onChange={this.props.handleAmen}/>
                </div>
                <div>
                    <label>Lightning</label>
                    <input type="checkbox"  name="lightning" onChange={this.props.handleAmen}/>
                </div>
                <div>
                    <label>Dj</label>
                    <input type="checkbox"  name="dj" onChange={this.props.handleAmen} />
                </div>
                <div>
                    <label>Air conditioning</label>
                    <input type="checkbox"  name="A/C" onChange={this.props.handleAmen}/>
                </div>
                <div>
                    <label>Heat</label>
                    <input type="checkbox"  name="heat" onChange={this.props.handleAmen}/>
                </div>
                <h4>Safety & Security amenities</h4>
                <div>
                    <label>Fire extinguisher</label>
                    <input type="checkbox"   name="extinguisher" onChange={this.props.handleAmen}/>
                </div>
                <div>
                    <label>Smoke detector</label>
                    <input type="checkbox"  name="smoke_detector" onChange={this.props.handleAmen}/>
                </div>
                <div>
                    <label>First aid kit</label>
                    <input type="checkbox"   name="first_aid" onChange={this.props.handleAmen}/>
                </div>
                <div>
                    <label>Security guards</label>
                    <input type="checkbox"  name="guard" onChange={this.props.handleAmen}/>
                </div>
                 <p><button onClick={this.props.previousStep}>Back</button></p>
                <p><button onClick={this.props.nextStep}>Next</button></p>

            </div>
           
        )
    }
}
