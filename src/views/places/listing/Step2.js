import React, { Component } from 'react'
import Autocomplete from 'react-google-autocomplete';
import {Map, InfoWindow, Marker, GoogleApiWrapper} from 'google-maps-react';
import Geocode from "react-geocode";
import MyMap from '../../../helper/MyMap'

// let register_step_two_styles = {
//     width: "60%",
//     maxWidth: "100%",
//     margin: "0 auto",
//     position: "fixed",
//     left: "50%",
//     top: "50%",
//     transform: "translate(-50%, -50%)",
//     zIndex: "29999",
//     backgroundColor: "#fff",
//     display: "flex",
//     flexDirection: "column",
//     boxShadow: "0px 0px 0px 400px rgba(0, 0, 0, 0.40)",
// }
export default class Step2 extends Component {
  
    state = {
        country: '',
        region: "",
        state: "", 
        city: "",
        longitude: 0,
        latitude: 0,
        zipCode: 0,
        street: "",
        aptNumber: "", 
        marker: {
            name: "Current position",
            position: { lat: 37.77,lng: -122.42}
        },
        zoom: 12,
        RegOpen:false,
        
      
    }
    componentDidMount(){
        this.myRefMap = React.createRef();
        this.myRefMarker = React.createRef();
    }
    
    get_location = (pos) => {
        Geocode.setApiKey("AIzaSyCdKNMjsiDMW07_NEEBlzhRlArElUUFRXQ")
        console.log(pos)
        Geocode.fromLatLng(pos.lat,pos.lng).then(
         response => {
             const place = response.results[0]
             console.log(response.results)
             if( place.address_components.length >= 6){               
               this.setState({
                   country: place.address_components[5].long_name,
                   state: place.address_components[4].long_name, 
                   city: place.address_components[2].long_name,
                   longitude: place.geometry.location.lng,
                   latitude: place.geometry.location.lat,
                   zipCode: place.address_components[6].long_name,
                   street: `${place.address_components[0].long_name} ${place.address_components[1].long_name} ${place.address_components[2].long_name} ${place.address_components[4].long_name}`,
                   marker: {position: {lng: place.geometry.location.lng, lat: place.geometry.location.lat}},
                   zoom: 16
                   })
              }
          })
    }

    handleChange = (event) => { 
        event.persist()
        this.setState({ [event.target.name]: event.target.value }) 
    }

    handleSelect = (place,name) => {
        console.log(place)
        console.log( place.address_components.length)
        if(name != "street"){
            this.setState({[name]: place.address_components[0].long_name})
        }else if(name === 'street' && place.address_components.length >= 6){
            const pos = {
                lat: place.geometry.location.lat(),
                lng: place.geometry.location.lng(),
              }
              this.get_location(pos)
    
        }

        
        this.props.handleSelect(place,name)
    }

    handleDrag =  (t, map, coord) =>{
           const pos = {
            lat: coord.latLng.lat(),
            lng:  coord.latLng.lng()
          }
          
         this.get_location(pos)
    }
 
    getLocation = () => {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition( position => {
                console.log(position)
                const pos = {
                    lat: position.coords.latitude,
                    lng: position.coords.longitude
                }
                this.get_location(pos)
            })
        }         
    }
    handleClick = () => {
        this.setState({
            RegOpen: true
        })
    }
    close_modal = () => {
        this.setState({
            RegOpen: false
        })
    }

    render() {
        let register_step_two = (
            <div className="div_modal">
                <button onClick={this.close_modal} className="close_modal">
                    <i className="far fa-times-circle"></i> 
                </button>
                <div RegOpen={this.state.RegOpen} className="modal_container_two">
                    <MyMap google={this.props.google} zoom={this.state.zoom}  ref={this.myRefMap} center={this.state.marker.position}>
                            <Marker  
                            position={this.state.marker.position}
                            name={this.state.marker.name}
                            onClick={this.onMarkerClick}
                            name={'Current location'} 
                            draggable={true}
                            onDragend={this.handleDrag}

                                ref={this.myRefMarker}
                        />
                        
                    </MyMap>
                </div>
            </div>
        )
        if (!this.state.RegOpen) {
            register_step_two = null;
        }
        return (
            <div className="ConteneurStepOne">
            {/*<div style={{...this.props.setting}}>
                <div style={{...this.props.parameters, width: "22%", background:"#A007D8"}}></div>
        </div>*/}
            <h1 className = "hOneStepOne"> Where are you located ? </h1>
           {/*<h2 className = "hTwoStepOne" > Step 2 </h2> */}
            <div className="ContenuStepTwo">
                <div className="DivStepOne">
                    <p className="TextStepOne">
                        Guests will only get your exact address once they've booked a reservation.
                    </p>
                    <button className="ButtonLocal" onClick={() => {this.getLocation();this.handleClick()} }> <i className="fas fa-map-marked"></i> Current location </button>
                    <small className="SmallText"> or enter your address.</small>
                </div>
            
                <div className="DivStepOne">
                     <label className = "LabelStepOne"> Country / Region</label>
                     <Autocomplete
                                className="InputStepOne"
                                name="country"
                                onPlaceSelected={(place) => {
                                    this.handleSelect(place,"country")

                                }}
                                onChange={this.handleChange}
                                types={['geocode']}
                               value={this.state.country}
                            />
                
                </div>
                <div className="DivStepOne">
                    <label className = "LabelStepOne">Street address</label>
                    <Autocomplete
                                className="InputStepOne"
                                name="street"
                                placeholder="e.g. 158 Main Street"
                                onPlaceSelected={(place) => {
                                    this.handleSelect(place,"street")
                                    this.handleClick()

                                }}
                                onChange={this.handleChange}

                                types={['address']}
                                value={this.state.street}

                               
                            />
                </div>
                <div className="DivStepOne">
                    <label className = "LabelStepOne">Apt, suite. (optional)</label>
                    <input name="aptNumber" className="InputStepOne pac-input" placeholder="e.g. Apt #8" onChange={this.props.handleChange}/>
                </div>
                <div className="DivStepOne">
                    <label className = "LabelStepOne">City</label>
                    <Autocomplete
                                className="InputStepOne"
                                name="city"
                                placeholder="e.g. New York"
                                onPlaceSelected={(place) => {
                                    this.handleSelect(place,"city")

                                }}
                                onChange={this.handleChange}

                                types={['(cities)']}
                                value={this.state.city}

                            />
                    
                </div>
                <div className="DivStepOne">
                    <label className = "LabelStepOne">State</label>
                    <Autocomplete
                                className="InputStepOne"
                                name="state"
                                placeholder="e.g. MI"
                                onPlaceSelected={(place) => {
                                    this.handleSelect(place,"state")

                                }}
                                onChange={this.handleChange}

                                types={['(regions)']}
                                value={this.state.state}

                            />
                </div>
                <div className="DivStepOne">
                    <label className = "LabelStepOne">Zip code</label>
                    <Autocomplete
                                className="InputStepOne"
                                name="zipCode"
                                placeholder="e.g. 94256"
                                onPlaceSelected={(place) => {
                                    this.handleSelect(place,"zipCode")
                                }}
                                onChange={this.handleChange}

                                types={ ['(cities)']}
                                value={this.state.zipCode}

                            />
                </div>
                <p className="ButtonStepOne">
                <button onClick={this.props.previousStep} className="PrevOne"> <i className="fa fa-angle-left"></i> Back </button>
                <button onClick={this.props.nextStep} className="NextOne">Next <i className="fa fa-angle-right"></i> </button>
                </p>  
                <div>{register_step_two}</div>
            </div>
            
            </div>
        )
    }
}

