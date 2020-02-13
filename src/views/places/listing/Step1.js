import React, { Component } from 'react'

export default class Step1 extends Component {
    render() {
        return (
            <div>
                <h1>This is to add a place</h1>
                <div >
                    <div>
                        <label>Name</label>
                        <input type= 'text' name='name' placeholder='name' onChange={this.props.handleChange}/>
                    </div>

                    <div>
                        <label>Address</label>
                        <input type= 'text' name='address' placeholder='address' onChange={this.props.handleChange}/>
                    </div>

                    <div>
                        <label>Capacity</label>
                        <input type= 'number' name='capacity' placeholder='500 people...' onChange={this.props.handleChange}/>
                    </div>

                    <div>
                        <label>Price</label>
                        <input type= 'number' name='price' placeholder='0.00' onChange={this.props.handleChange} />
                    </div>


                    <div class='images' ref={this.div_ref}>
                        <label>Images</label>
                        {/**This button will add another field for file input */}
                        <span onClick={this.props.add_input}>Add more images</span>
                        <input type= 'file'  name='images' onChange={this.props.handleFileChange} accept="image/x-png,image/gif,image/jpeg" />
                    </div>


                </div>
                <p><button onClick={this.props.nextStep}>Continue</button></p>


            </div>
        )
    }
}
