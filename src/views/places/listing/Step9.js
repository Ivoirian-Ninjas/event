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
                <div style={{...this.props.setting}}>
                    <div style={{...this.props.parameters, width: "100%", background:"#C41FFF"}}></div>
                </div>
                <h1 className="hOneStepOne">Review & Agree</h1>
                <h2 className = "hTwoStepOne" > Step 9 </h2>
                    <div>
                        <h3>Step1</h3>
                        <p>Space Type: { this.props.typeOfSpace}</p>
                        <p>capacity: {this.props.capacity}</p>
                        <button onClick={()=>this.props.goToStep(1)}>Edit</button>
                        
                    </div>
                    <div>
                        <h3>Step2</h3>
                        <p>Country: {this.props.country}</p>
                        <p>State: {this.props.state}</p>
                        <p>City: {this.props.city}</p>
                        <p>Street: {this.props.street}</p>
                        <p>Zip Code: {this.props.zipCode}</p>
                        <button onClick={()=>this.props.goToStep(2)}>Edit</button>

                    </div>

                    <div>
                        <h3>Step3</h3>
                        <p>Name: {this.props.name}</p>
                        <p>Description: {this.props.placeDesc}</p>
                        <p>Activities{this.props.activities.map(e => <li key={e.value}>{e.value}</li>)}</p>
                        <p>Parking Info: {this.props.parkDesc}</p>
                        <button onClick={()=>this.props.goToStep(3)}>Edit</button>

                    </div>
                    <div>
                        <h3>Step4</h3>
                        <ul>
                           Amenities: 
                           {this.props.amenities.map(e => <li key={e}>{e}</li>)}
                        </ul>
                        <button onClick={()=>this.props.goToStep(4)}>Edit</button>

                    </div> 

                    <div>
                        <h3>Step5</h3>
                        <div className="img_review"> </div>
                            <button onClick={()=>this.props.goToStep(5)}>Edit</button>

                    </div>
                    <div>
                        <h3>Step6</h3>
                        <p>Price: {this.props.price}</p>
                        <p>Availability: {this.props.s_day} - {this.props.e_day}</p>
                        <p>Time: {this.props.time[0]} - {this.props.time[1]}</p>
                        <button onClick={()=>this.props.goToStep(6)}>Edit</button>

                        
                    </div>
                    <div>
                        <h3>Step7</h3>
                        
                        <p>Rules: {this.props.rules}</p>
                        <button onClick={()=>this.props.goToStep(7)}>Edit</button>

                    </div>
                    <div>
                        <h3>Step8</h3>
                        <p>Policy: {this.props.policy}</p>
                        <button onClick={()=>this.props.goToStep(8)}>Edit</button>


                    </div>
                 
                    <div className="ContenuStepOne">
                        <div className="DivStepOne"></div>
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