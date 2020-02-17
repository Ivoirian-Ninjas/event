import React, { Component } from 'react'
import {connect} from 'react-redux'
import add_place from '../../actions/add_place'
import StepWizard from 'react-step-wizard';
import Step1 from './listing/Step1'
import Step2 from './listing/Step2'
import Step3 from './listing/Step3'
import Step4 from './listing/Step4'
import Step5 from './listing/Step5'
import Step6 from './listing/Step6'
import Step7 from './listing/Step7'

 class New extends Component {
    constructor(){
        super()
        this.state = {
            name: '',
            address: '',
            capacity: '',
            price: '',
            images: [],
            amnesty: [],
            cardName: "",
            cardNumber: "",
            country: ''

        }
        this.div_ref = React.createRef()
        this.div_img = React.createRef()

    }


    handleChange = (event) => {
       this.setState({ [event.target.name]: event.target.value }) 
    }

    handleFileChange = event => {
        // console.log(event.target.files[0])
        event.persist()
        
        this.setState(state => ({images: [...state.images,event.target.files[0]]}) )
console.log(event.target.files[0])
      if (event.target.files[0]) {
        // this function will display all the images selected
       this.preview_image(event.target.files[0])
      } 



    }

    preview_image = (file) =>{
        const img = document.createElement('img')
        const  reader = new FileReader();
        const divImage = document.createElement("div.newImage")
        const spanX= document.createElement("span")
        spanX.classList.add("deleteImage")
        spanX.innerHTML = "X"
        //read the file
        reader.readAsDataURL(file);
        img.className="imgPrev"
        reader.addEventListener("load", function() {
            img.src = reader.result;
          }, false);
          this.div_img.current.appendChild(img)

          divImage.appendChild(img)
          divImage.appendChild(spanX)
          spanX.addEventListener("click", () => {
            divImage.remove() 
            const inputs = document.querySelectorAll(`input[type="file"]`)
           inputs.forEach(e => {
                console.log(e.value)
                if ( e.value.includes(file.name) ){
                    console.log(e)
                    e.value = ""
                }
            })

          })
          document.querySelector("div.imgDisplayer").appendChild(divImage)

    }

    handleSubmit = (event) => {
        console.log(this.state)
        this.props.send_place_info(this.state)

        event.preventDefault()

    }

    add_input = () => {
        const div = document.querySelector("div.inputImg")
        const input  =  document.createElement('input')
        console.log(input)
        input.type = 'file'
        input.name = 'images'

        input.addEventListener ('change',event =>{
            console.log(event.target.files[0])
                this.setState(state => ({images: [...state.images,event.target.files[0]]}) )
                this.preview_image(event.target.files[0])

        })
        input.accept = "image/x-png,image/gif,image/jpeg"
        div.appendChild(input)
    }
    render() {
        return (
            // <div className="PlaceNews">
            //     <form onSubmit={this.handleSubmit} encType="multipart/form-data" className="FormPlace">
            //         <h1 className="ClassAdd">New Place</h1>
            //         <div className="DivAddPlace">
            //             <label className="labelAdd">Name</label>
            //             <input type= 'text' name='name' className="inputAdd" placeholder='Name...' onChange={this.handleChange}/>
            //         </div>

            //         <div className="DivAddPlace">
            //             <label className="labelAdd">Address</label>
            //             <input type= 'text' name='address' className="inputAdd" placeholder='Adress...' onChange={this.handleChange}/>
            //         </div>

            //         <div className="DivAddPlace">
            //             <label className="labelAdd">Capacity</label>
            //             <input type= 'number' name='capacity' className="inputAdd" placeholder='500 people...' onChange={this.handleChange}/>
            //         </div>

            //         <div className="DivAddPlace">
            //             <label className="labelAdd">Price</label>
            //             <input type= 'number' name='price' className="inputAdd" placeholder='0.00' onChange={this.handleChange} />
            //         </div>


            //         <div className='images' ref={this.div_ref}>
            //             {/**This button will add another field for file input */}
            //             <div className="Capteur" ref={this.div_img}></div>
            //            <input type= 'file' name='images' className="inputImg" onChange={this.handleFileChange} accept="image/x-png,image/gif,image/jpeg" />
            //         </div>
            //         <div className ="DivAddPlace">
            //             <span onClick={this.add_input} className="AddImage">More image <i className="fas fa-plus modif"></i></span>
            //         </div>
                        
            //         <div className ="DivAddPlace">
            //             <button className="ButtonPlace">Validate <i className="fas fa-check-circle"></i> </button>
            //         </div>
            //     </form>

            <div className="PageConteneur">
                <StepWizard>
                        <Step1 {...this.state} handleChange={this.handleChange} handleFileChange={this.handleFileChange} add_input={this.add_input}/>
                        <Step2 {...this.state}  handleChange={this.handleChange}/>
                        <Step3 {...this.state}  handleChange={this.handleChange} handleSubmit={this.handleSubmit}/>  
                       < Step4  {...this.state}  handleFileChange={this.handleFileChange} add_input={this.add_input}/>
                       <Step5  {...this.state}  handleChange={this.handleChange} />
                        <Step6  {...this.state}  handleChange={this.handleChange} />
                        <Step7   {...this.state}  handleChange={this.handleChange}/>
                </StepWizard>
            </div>
        )
    }
}

const mapToDispatch = dispatch  => ({
    send_place_info: place => dispatch(add_place(place))
})
export default connect(null, mapToDispatch)(New)
