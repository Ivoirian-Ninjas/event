import React, { Component } from 'react'

export default class Step1 extends Component {
    render() {
        return (
            <div>
                <h1>Let's get you started.</h1>
                <h2>STEP 1</h2>
                <h3>What type of space do you have?</h3>
                <div >
                    <div>
                        <input type= 'text' name='typeOfSpace' placeholder="Enter a type of space" list="typeOfSpace" onChange={this.props.handleChange}/>
                        <datalist id="typeOfSpace">
                            <option value="Cafe"/>
                            <option value="Photography Gallery"/>
                            <option value="Bus"/>
                            <option value="Private Dinning Room"/>
                            <option value="Private Work office"/>
                            <option value="Community Space"/>
                        </datalist>
                    </div>

 

                    <div>
                        <label>Capacity</label>
                        <input type= 'number' name='capacity' placeholder='for 30 guests' onChange={this.props.handleChange}/>
                    </div> 

                    <div>
                        <label>Region</label>
                        <input name='region' placeholder='Enter the region' onChange={this.props.handleChange}/>
                    </div> 
                    {/**Later on let's add info based on the region that the user entered, e.g: how many customer a day a user can get. */}

                   
                </div>
                <p><button onClick={this.props.nextStep}>Continue</button></p>


            </div>
        )
    }
}
