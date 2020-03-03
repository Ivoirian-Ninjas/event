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
import Step8 from './listing/Step8'
import Step9 from './listing/Step9'


 class New extends Component {
    constructor(){
        super()
        this.state = {
            name: '',
            capacity: '',
            price: '',
            images: [],
            cardName: "",
            cardNumber: "",
            country: '',
            region: "",
            state: "", 
            zipCode: "",
            parkDesc: "", 
            placeDesc: "",
            street: "",
            rules: "",
            aptNumber: "",
            street: "",
            typeOfSpace: "",
            parkDesc: "",
            placeDesc: "",
            time: ["08:00", "22:00"],
            s_day:"",
            e_day: ""
            
    

        }

          
        this.div_ref = React.createRef()

    }


    handleChange = (event) => {
       this.setState({ [event.target.name]: event.target.value }) 
    }

    handleFileChange = event => {
        // console.log(event.target.files[0])
        event.persist()
       const images = document.querySelectorAll("img.previewImg")
       const inputs = document.querySelectorAll("input[type='file']")

        this.setState(state => ({images: [...state.images,event.target.files[0]]}) )
console.log(event.target.files[0])
      if (event.target.files[0]) {
        // this function will display all the images selected
       this.preview_image(event.target.files[0],event.target.parentNode)
    console.log(event.target.parentNode)
      } 



    }

    preview_image = (file,parent) =>{
       if( parent.querySelector("img") ){
           parent.querySelector("img").parentNode.remove()
       }
        const img = document.createElement('img')
        img.classList.add("previewImg")
        const  reader = new FileReader();
        const divImage = document.createElement("div")
        divImage.classList.add("newImage")
        const spanX= document.createElement("span")
        spanX.classList.add("deleteImage")
        spanX.innerHTML = "X"
        //read the file
        reader.readAsDataURL(file);

        reader.addEventListener("load", function() {
            img.src = reader.result;
            img.height = 100
            img.width = 100
          }, false);

          divImage.appendChild(img)
          divImage.appendChild(spanX)
          spanX.addEventListener("click", () => {
            divImage.parentNode.remove() 
            const inputs = document.querySelectorAll(`input[type="file"]`)
           inputs.forEach(e => {
                console.log(e.value)
                if ( e.value.includes(file.name) ){
                    console.log(e)
                    e.value = ""
                }
            })

          })
          parent.appendChild(divImage)

    }

    handleSubmit = (event) => {
        console.log(this.state)
        // this.props.send_place_info(this.state)

        event.preventDefault()

    }
    onTimeChange = time => this.setState({ time })

    add_input = () => {
        const div = document.querySelector("div.imgContainer")
        const direct_div = document.createElement("div")
        direct_div.classList.add("imgInput")
        
        const input  =  document.createElement('input')
    
        console.log(input)
        input.type = 'file'
        input.name = 'images'

        input.addEventListener ('change',event =>{
            console.log(event.target.files[0])
                this.setState(state => ({images: [...state.images,event.target.files[0]]}) )
                this.preview_image(event.target.files[0],event.target.parentNode)

        })
        input.accept = "image/x-png,image/gif,image/jpeg"
        direct_div.appendChild(input)
        div.appendChild(direct_div)
    }
    render() {
        return (
            <div className="PageConteneur">
                <StepWizard>
                        <Step1 {...this.state} handleChange={this.handleChange} />
                        <Step2 {...this.state}  handleChange={this.handleChange}/>
                        <Step3 {...this.state}  handleChange={this.handleChange} />  
                        <Step4  {...this.state} handleChange={this.handleChange} />
                        <Step5  {...this.state}   handleFileChange={this.handleFileChange} add_input={this.add_input} />
                        <Step6  {...this.state}  handleChange={this.handleChange} />
                        <Step7   {...this.state}  handleChange={this.handleChange}/>
                        <Step8   {...this.state}  handleChange={this.handleChange}/>
                        <Step9   {...this.state}  handleChange={this.handleChange} handleSubmit={this.handleSubmit}/>
                </StepWizard>
            </div>
        )
    }
}

const mapToDispatch = dispatch  => ({
    send_place_info: place => dispatch(add_place(place))
})
export default connect(null, mapToDispatch)(New)