import Filter from './Filter'
import React, { Component } from 'react'
import Place from './place'

import Place_Show from './show'
import {

    Route,

  } from "react-router-dom";
import { connect } from 'react-redux';

 class Index extends Component {
     componentDidMount(){
         fetch('http://localhost:3000/places')
         .then(resp => resp.json())
         .then(json =>{ 
             console.log(json.places)
            const places =  json.places.map(e=>e.data.attributes)

                          this.props.get_places(places) 
                     })
     } 

    display_places = () => {
        console.log(this.props.places)
        if (this.props.places && Array.isArray(this.props.places)){
            console.log(this.props)
             console.log(this.props.places)
            return this.props.places.map(e => <Place key={e.id}  place={e}/>)
           
        }
      
    }
    render() {
        return (
            <div>
                <h1>This is the Index page</h1>
                {/* {emplement a search feature} */}
                <Filter/>

                {this.display_places()}
            
            </div>
        )
    }
}

const mapStateToProps = state => {
    console.log(state)
   return {places: state.places}
}
const mapDispatchToProps  = dispatch => ({
    get_places: places =>  dispatch({type: 'ADD_PLACE', places: places})
})
export default connect(mapStateToProps,mapDispatchToProps)(Index)