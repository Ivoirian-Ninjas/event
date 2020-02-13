import React, { Component } from 'react'
import {connect} from 'react-redux'
import add_place from '../../actions/add_place'
import StepWizard from 'react-step-wizard';
import Step1 from './listing/Step1'
import Step2 from './listing/Step2'
import Step3 from './listing/Step3'

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
            cardNumber: ""

        }
        this.div_ref = React.createRef()

    }


    handleChange = (event) => {
       this.setState({ [event.target.name]: event.target.value }) 
    }
    handleFileChange = event => {
        // console.log(event.target.files[0])
        event.persist()
        this.setState(state => ({images: [...state.images,event.target.files[0]]}) )

      if (event.target.files[0]) {
        // this function will display all the images selected
       this.preview_image(event.target.files[0])
      } 



    }

    preview_image = (file) =>{
        const img = document.createElement('img')
        const  reader = new FileReader();
        //read the file
        reader.readAsDataURL(file);

        reader.addEventListener("load", function() {
            img.src = reader.result;
            img.height = 100
            img.width = 100
          }, false);
          this.div_ref.current.appendChild(img)

    }

    handleSubmit = (event) => {
        console.log(this.state)
        this.props.send_place_info(this.state)

        event.preventDefault()

    }

    add_input = () => {
        const div = this.div_ref.current
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
            <div className="PageConteneur">
                <StepWizard>
                        <Step1 {...this.state} handleChange={this.handleChange} handleFileChange={this.handleFileChange} add_input={this.add_input}/>
                        <Step2 {...this.state}  handleChange={this.handleChange}/>
                        <Step3 {...this.state}  handleChange={this.handleChange} handleSubmit={this.handleSubmit}/>  
                </StepWizard>
            </div>
        )
    }
}

const mapToDispatch = dispatch  => ({
    send_place_info: place => dispatch(add_place(place))
})
export default connect(null, mapToDispatch)(New)
