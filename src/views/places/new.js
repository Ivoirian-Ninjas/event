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
import "../../assets/newplace.css"
import { isArray } from 'util';
import ProgressBar from './listing/ProgressBar';
import { enumBooleanBody } from '@babel/types';

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
            city: "",
            longitude: 0,
            latitude: 0,
            zipCode: 0,
            parkDesc: "", 
            placeDesc: "",
            street: "",
            rules: "",
            aptNumber: "",
            typeOfSpace: "",
            parkDesc: "",
            placeDesc: "",
            time: ["08:00", "22:00"],
            s_day:"",
            e_day: "", 
            amenities: [],
            policy: '',
            setting : {
                width: "100%",
                background: "#fff",
                height: "10px",
                border: "1px solid lightgrey",
            },
            parameters : {
                color: "#fff",
                height: "100%",
                transition: "ease-in-out 0.3s"
            },
            parking_available: "no",

            activities: []


        }

          

    }

    handleSelect = (place,name) => {
        console.log(place)
        if(name != "street"){
            this.setState({[name]: place.address_components[0].long_name})
        }else{
           
            this.setState({
            country: place.address_components[5].long_name,
            state: place.address_components[4].long_name, 
            city: place.address_components[2].long_name,
            longitude: place.geometry.location.lng(),
            latitude: place.geometry.location.lat(),
            zipCode: place.address_components[6].long_name,
            street: `${place.address_components[0].long_name} ${place.address_components[1].long_name} ${place.address_components[2].long_name} ${place.address_components[4].long_name}`

            }, () => {console.log(this.state)})
            

        }
    }


    handleChange = (event) => {
       this.setState({ [event.target.name]: event.target.value }) 

       if(this.state.parking_available === "yes"){
        document.querySelector("div#parking") && ( document.querySelector("div#parking").style.display= "block")
        }else{
            document.querySelector("div#parking") &&   (document.querySelector("div#parking").style.display= "none")

        }
    }

    handleFileChange = event => {
        event.dispatchConfig && event.persist()   
        const parent = event.target.parentNode
        
        if (event.target.files[0]) {
         const file = event.target.files[0]
         if( parent.querySelector('img') ){
            //this code replaces the file in the state.images
             const img_to_replace = parent.querySelector('img')
             const index = this.state.images.findIndex(e => e.name === img_to_replace.name)
             const copy = [...this.state.images]
             copy.splice(index,1)
          this.setState({images: [...copy, file]}, () =>   parent.querySelector('img').parentNode.remove() )

          
         }else{
            this.setState( ({images: [...this.state.images,file]}) )

         }           
          // this function will display all the images selected

         this.preview_image(event.target.files[0],event.target.parentNode)

        } 
    }
       
      handleActivities =(newValue, actionMeta) => {
          if( actionMeta.action !== 'remove-value' ){
              console.log(newValue)
               newValue && this.setState(state => ({activities: [...state.activities,...newValue]}) )
          }else{
              
              this.setState(state => ({activities: [...state.activities].filter(e => e !== actionMeta.removedValue)}) )
          }
      }

    preview_image = (file,parent) =>{
       
        const img = document.createElement('img')
        img.classList.add("previewImg")
        img.name=file.name
        const  reader = new FileReader();
        const divImage = document.createElement("div")
        divImage.classList.add("newImage")
        const spanX= document.createElement("span")
        const icon = document.createElement("i")
        icon.classList.add("fa")
        icon.classList.add("fa-trash")
        spanX.classList.add("deleteImage")
        spanX.append("Delete image ")
        spanX.appendChild(icon)
        
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
            parent.parentNode.remove() 

            //remove the file from the array of images
            this.setState( state => state.images = [...state.images].filter(e => e !== file) , () => console.log(this.state.images))
            const inputs = document.querySelectorAll(`input[type="file"]`)
           inputs.forEach(e => {
                if ( e.value.includes(file.name) ){
                    console.log(e)
                    e.value = ""
                }
            })

          })
          parent.appendChild(divImage)

    }
    handlePolicy = (event) => {
        this.setState({ policy: event.target.name }) 
       const policies =  [document.querySelector("#cancelFlex"),document.querySelector("#cancelModerate"),document.querySelector("#cancelStrict")]
       policies.forEach(e => {
           if(e && e.name !== event.target.name){
                e.checked = false
           }
       })
    }

    handleAmen = (event) => {
        console.log(event)
        if(!this.state.amenities.includes(event.target.name) && event.target.value === "on" ){
            this.setState({amenities: [...this.state.amenities,event.target.name]} ,() => console.log(this.state.amenities))
        }else{
            this.setState({amenities: [...this.state.amenities].filter(x => x !== event.target.name)},() => console.log(this.state.amenities ))
        }

        console.log(this.state.amenities)

    }


    handleSubmit = (event) => {
        console.log(this.state)
        this.props.send_place_info(this.state)
    }

    onTimeChange = time => this.setState({ time })

    add_input = () => {
        const div = document.querySelector("div.images")

        const first_div = document.querySelector("div.inputImg")
        // first_div.classList.add("inputImg")

        const second_div = document.createElement("div")
        second_div.classList.add("imgContainer")

        const direct_div = document.createElement("div")
        direct_div.classList.add("imgInput")
        
        const input  =  document.createElement('input')
        input.type = 'file'
        input.name = 'images'
        input.style.height = "0px" 
        input.style.width = "0px"        
        input.accept = "image/x-png,image/gif,image/jpeg"

        input.addEventListener ('change',event =>{
            this.handleFileChange(event)

        })

        const btn_upload = document.createElement('button')
        console.log(btn_upload)
        btn_upload.classList.add("UploadFile")   
        // Clicking on this button will click on the input file.
        btn_upload.addEventListener("click",e => input.click() )
        const icons = document.createElement("i")
        icons.classList.add("fa")
        icons.classList.add("fa-image")
        btn_upload.append("Select image ")
        btn_upload.appendChild(icons)

        direct_div.appendChild(input)
        direct_div.appendChild(btn_upload)
        second_div.appendChild(direct_div)
        first_div.appendChild(second_div)
        div.appendChild(first_div)
    }
   

    render() {
        return (

            <div className="FirstDiv">
                <div className="PageConteneur">
                
                    <StepWizard nav={<ProgressBar {...this.state} />} state={this.state}>
                            <Step1 {...this.state} handleChange={this.handleChange} handleSelect={this.handleSelect} />
                            <Step2 {...this.state}  handleSelect={this.handleSelect}/>
                            <Step3 {...this.state}  handleChange={this.handleChange} handleActivities={this.handleActivities}/>  
                            <Step4  {...this.state}  handleAmen={this.handleAmen} />
                            <Step5  {...this.state}   handleFileChange={this.handleFileChange} add_input={this.add_input} />
                            <Step6  {...this.state}  handleChange={this.handleChange} />
                            <Step7   {...this.state}  handleChange={this.handleChange}/>
                            <Step8   {...this.state}  handlePolicy={this.handlePolicy}/>
                            <Step9   {...this.state}  handleChange={this.handleChange} handleSubmit={this.handleSubmit}/>
                    </StepWizard>
                </div>
            </div>
        )
    }
}

const mapToDispatch = dispatch  => ({
    send_place_info: place => dispatch(add_place(place))
})
export default connect(null, mapToDispatch)(New)