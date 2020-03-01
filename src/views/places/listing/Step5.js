import React, { Component } from 'react'

export default class Step5 extends Component {
    render() {
        return (
             <div>
                <h1>Add your place's most beautiful pictures</h1>
                <div className="imgDisplayer"></div>
                <div className='imgContainer' >              
                    <span onClick={this.props.add_input}>Add more images</span>

                    <h1>Images</h1>
                        {/**This button will add another field for file input */}
                        <div className="imgInput">
                            <input type='file'  name='images' onChange={this.props.handleFileChange} accept="image/x-png,image/gif,image/jpeg" />
                        </div>


                </div>


                <p><button onClick={this.props.previousStep}>Back</button></p>
                <p><button onClick={this.props.nextStep}>Next</button></p>
            </div>
        )
    }
}
