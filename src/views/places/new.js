import React, { Component } from 'react'
import {connect} from 'react-redux'
import add_place from '../../actions/add_place'

 class New extends Component {
    constructor(){
        super()
        this.state = {
            name: '',
            address: '',
            capacity: '',
            price: '',
            images: []

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
            <div>
                <h1>This is to add a place</h1>
                <form onSubmit={this.handleSubmit} enctype="multipart/form-data">
                    <div>
                        <label>Name</label>
                        <input type= 'text' name='name' placeholder='name' onChange={this.handleChange}/>
                    </div>

                    <div>
                        <label>Address</label>
                        <input type= 'text' name='address' placeholder='address' onChange={this.handleChange}/>
                    </div>

                    <div>
                        <label>Capacity</label>
                        <input type= 'number' name='capacity' placeholder='500 people...' onChange={this.handleChange}/>
                    </div>

                    <div>
                        <label>Price</label>
                        <input type= 'number' name='price' placeholder='0.00' onChange={this.handleChange} />
                    </div>


                    <div class='images' ref={this.div_ref}>
                        <label>Images</label>
                        {/**This button will add another field for file input */}
                        <span onClick={this.add_input}>Add more images</span>
                        <input type= 'file'  name='images' onChange={this.handleFileChange} accept="image/x-png,image/gif,image/jpeg" />
                    </div>


                    <button>Add Place </button>
                </form>

            </div>
        )
    }
}

const mapToDispatch = dispatch  => ({
    send_place_info: place => dispatch(add_place(place))
})
export default connect(null, mapToDispatch)(New)
