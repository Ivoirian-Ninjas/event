import React, { Component } from 'react'
import "../../../assets/newplace.css"
import {Progress} from "semantic-ui-react";
import Autocomplete from 'react-google-autocomplete';
import { connect } from 'react-redux';

class Step1 extends Component {

    display_categories = () => {
        let result 
        if(this.props.categories.categories){
            result = this.props.categories.categories.map(e =><option value={e} key={e}/>)
        }
        return result
    }

    componentDidMount(){
        fetch('http://localhost:3000/categories')
       .then(resp => resp.json())
       .then(json =>{ 
           this.props.add_categories(json)                  
      })
    }
    
    render() {
        return (
            <div className="ConteneurStepOne">
                <div style={{...this.props.setting}}>
                    <div style={{...this.props.parameters, width: "11%", background:"#BF54E6"}}></div>
                </div>
                <h1 className="hOneStepOne">Let's get you started.</h1>
                <h2 className = "hTwoStepOne" > Step 1 </h2> 
                <div className="ContenuStepOne">                
                
                    <div className="DivStepOne">
                    <label className = "LabelStepOne" > What type of space do you have ? </label>
                        <input type= 'text' name='typeOfSpace' className="InputStepOne" placeholder="Enter a type of space" list="typeOfSpace" onChange={this.props.handleChange}/>
                        <datalist id="typeOfSpace">
                            {this.display_categories()}
                        </datalist>
                    </div>

 

                    <div className="DivStepOne">
                        <label className="LabelStepOne">How many guests can you receice ? </label><br/>
                        <input type= 'number' name='capacity' className="InputStepOne" placeholder='e.g : 30 guests' onChange={this.props.handleChange}/>
                    </div> 

                    <div className="DivStepOne" >
                        <label className="LabelStepOne">Enter your region? </label><br/>
                        <Autocomplete
                                className="InputStepOne"
                                placeholder="Enter the region"
                                name="region"
                                onPlaceSelected={(place) => {
                                    this.props.handleSelect(place,"region")
                                }}
                                value={this.props.state.region}
                                types={['(regions)']}
                               
                            />
                    </div> 
                    {/**Later on let's add info based on the region that the user entered, e.g: how many customer a day a user can get. */}
                    <p className="ButtonStepOne"><button onClick={this.props.nextStep} className="NextOne">Next <i className="fa fa-angle-right"></i> </button></p>
                   
                </div>
                


            </div>
        )
    }
}
const mapDispatchToProps  = dispatch => ({
    add_categories: categories =>  dispatch({type: 'ADD_CATEGORIES', categories: categories})
})
const mapStateToProps = state => {
   return {categories: state.categories}
  }
  export default connect(mapStateToProps,mapDispatchToProps)(Step1)