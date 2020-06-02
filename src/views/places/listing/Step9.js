import React, { Component } from 'react'

export default class Step9 extends Component {
    handleChange = (event) => { this.setState({ [event.target.name]: event.target.value })  }
    image_reader = (file) => {
        const img = document.createElement('img')
        img.classList.add("previewImg")
        const divImage = document.createElement("div")
        divImage.classList.add("newImage")
        
        const  reader = new FileReader()
        reader.readAsDataURL(file);
        reader.addEventListener("load", function() {
            img.src = reader.result;
            img.height = 200
            img.width = 200
            
          }, false);
          divImage.appendChild(img)
          const div_review = document.querySelector('div.img_review')
          div_review.appendChild(divImage)
         
    }
    componentDidMount(){
        this.props.images.map(e => this.image_reader(e) )
    }
    render() {
        return (
            <div className="ConteneurStepOne">
                {/*<div style={{...this.props.setting}}>
                    <div style={{...this.props.parameters, width: "100%", background:"#C41FFF"}}></div>
        </div>*/}
                <h1 className="hOneStepOne">Review & Agree</h1>
                {/*<h2 className = "hTwoStepOne" > Step 9 </h2>*/}
                    <div className="ContenuStepTwo">
                        <div className="DivStepOne">
                            <h3  className="h3_review">Step1</h3>
                            <p className="text_review">Space Type: { this.props.typeOfSpace}</p>
                            <p className="text_review">capacity: {this.props.capacity}</p>
                            <button onClick={()=>this.props.goToStep(1)} className="edit_review">
                                Edit <i className="fa fa-edit"></i>
                            </button>
                        </div>
                        <div className="DivStepOne">
                            <h3 className="h3_review">Step2</h3>
                            <p className="text_review">Country: {this.props.country}</p>
                            <p className="text_review">State: {this.props.state}</p>
                            <p className="text_review">City: {this.props.city}</p>
                            <p className="text_review">Street: {this.props.street}</p>
                            <p className="text_review">Zip Code: {this.props.zipCode}</p>
                            <button onClick={()=>this.props.goToStep(2)} className="edit_review">
                                Edit <i className="fa fa-edit"></i>
                            </button>
                        </div>
                        <div className="DivStepOne">
                            <h3 className="h3_review">Step3</h3>
                            <p className="text_review">Name: {this.props.name}</p>
                            <p className="text_review">Description: {this.props.placeDesc}</p>
                            <p className="text_review">
                                Activities{this.props.activities.map(e => <li key={e.value}>{e.value}</li>)}
                            </p>
                            <p className="text_review">Parking Info: {this.props.parkDesc}</p>
                            <button onClick={()=>this.props.goToStep(3)} className="edit_review">
                                Edit <i className="fa fa-edit"></i>
                            </button>
                        </div>
                        <div className="DivStepOne">
                            <h3 className="h3_review">Step4</h3>
                            <ul className="Helps">
                            Amenities:
                            {this.props.amenities.map(e => <li className="liHelps" key={e}>{e}</li>)}
                            </ul>
                            <button onClick={()=>this.props.goToStep(4)} className="edit_review">
                                Edit <i className="fa fa-edit"></i>
                            </button>
                        </div> 
                        <div className="DivStepOne">
                            <h3 className="h3_review">Step5</h3>
                            <div className="img_review"> </div>
                            <button onClick={()=>this.props.goToStep(5)} className="edit_review">
                                    Edit <i className="fa fa-edit"></i>
                            </button>
                        </div>
                        <div className="DivStepOne">
                            <h3 className="h3_review">Step6</h3>
                            <p className="text_review">Price: {this.props.price}</p>
                            <p className="text_review">Availability: {this.props.s_day} - {this.props.e_day}</p>
                            <p className="text_review">Time: {this.props.time[0]} - {this.props.time[1]}</p>
                            <button onClick={()=>this.props.goToStep(6)} className="edit_review">
                                Edit <i className="fa fa-edit"></i>
                            </button>
                        </div>
                        <div className="DivStepOne">
                            <h3 className="h3_review">Step7</h3>
                            <p className="text_review">Rules: {this.props.rules}</p>
                            <button onClick={()=>this.props.goToStep(7)} className="edit_review">
                                Edit <i className="fa fa-edit"></i>
                            </button>
                        </div>
                        <div className="DivStepOne">
                            <h3 className="h3_review">Step8</h3>
                            <p className="text_review">Policy: {this.props.policy}</p>
                            <button onClick={()=>this.props.goToStep(8)} className="edit_review">
                                Edit <i className="fa fa-edit"></i>
                            </button>
                        </div>
                        <p className="ButtonStepOne">
                            <button onClick={this.props.previousStep} className="PrevOne">
                                <i className="fa fa-angle-left"></i> Back
                            </button>
                            <button onClick={this.props.handleSubmit} className="SaveOne">
                                Save <i className="fa fa-save"></i>
                            </button>
                        </p>
                </div>
            </div>
        )
    }
}
// this.state = 
//     name: '',
//     capacity: '',
//     price: '',
//     images: [],
//     cardName: "",
//     cardNumber: "",
//     country: '',
//     region: "",
//     state: "", 
//     city: "",
//     longitude: 0,
//     latitude: 0,
//     zipCode: 0,
//     parkDesc: "", 
//     placeDesc: "",
//     street: "",
//     rules: "",
//     aptNumber: "",
//     typeOfSpace: "",
//     parkDesc: "",
//     placeDesc: "",
//     time: ["08:00", "22:00"],
//     s_day:"",
//     e_day: "", 
//     amenities: [],
//     policy: '',