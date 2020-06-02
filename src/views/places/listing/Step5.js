import React, { Component } from 'react'

export default class Step5 extends Component {
    handleClick = (event) => {
        event.persist()
        event.target.parentNode.querySelector("input").click()
    }
    render() {
        return (
             <div className="ConteneurStepOne">
                {/*<div style={{...this.props.setting}}>
                    <div style={{...this.props.parameters, width: "55%", background:"#4B0365"}}></div>
        </div>*/}
                <h1 className = "hOneStepOne" > Add your place's most beautiful pictures</h1>
                {/*<h2 className = "hTwoStepOne" > Step 5 </h2>*/}
                <div className="ContenuStepTwo">
                <div className="images">
                    <div className="inputImg">
                        {/*<div className="imgDisplayer"></div>*/} 
                            <div className='imgContainer'>
                                {/**This button will add another field for file input */}
                                <div className="imgInput">
                                    <button className="UploadFile" onClick={this.handleClick}>Select image <i className="fa fa-image"></i></button>
                                    <input type='file'  name='images' style={{height:"0px", width:"0px"}} onChange={this.props.handleFileChange} accept="image/x-png,image/gif,image/jpeg" /> 
                                </div>
                            </div>
                    </div>
                </div>
                <span onClick={this.props.add_input} className="AddImages">Add more images <i className="fa fa-plus"></i></span>

                <p className="ButtonStepOne">
                    <button onClick={this.props.previousStep} className="PrevOne"> 
                        <i className="fa fa-angle-left"></i> Back 
                    </button>
                    <button onClick={this.props.nextStep} className="NextOne">
                        Next <i className="fa fa-angle-right"></i> 
                    </button>
                </p>
                </div>
            </div>
        )
    }
}
