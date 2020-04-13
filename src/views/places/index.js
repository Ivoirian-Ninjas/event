import Filter from './Filter'
import React, { Component } from 'react'
import Place from './place'
import "../../assets/index.css"

import { connect } from 'react-redux';
import mapcarte from "../../assets/img/Last/Capture.PNG"
import troph from "../../assets/img/Last/icon-uc-trophy.9ee78aa1.gif"
import imgreturn1 from "../../assets/img/Better/ibrahim-boran-m8YjB0noWiY-unsplash.jpg"
import imgreturn2 from "../../assets/img/Better/thomas-william-OAVqa8hQvWI-unsplash.jpg"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import Sliders from "react-slick"
import { Search } from 'semantic-ui-react';
import {Map, InfoWindow, Marker, GoogleApiWrapper} from 'google-maps-react';
import MyMap from '../../helper/MyMap';
import Geocode from "react-geocode";



 class Index extends Component {
     //for tomorrow find a way to display the places without fetching everytime


    componentDidMount(){
        const url = "http://localhost:3000"+ window.location.pathname + window.location.search
        console.log(url)
        const params = {
            method: 'GET',
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json"
            },
        }
        fetch(url,params)
        .then(resp => resp.json())
        .then(json =>  { 
            const places =  json.places ? json.places.map(e=>e.data.attributes) : []
            if(json.city){
                Geocode.setApiKey("AIzaSyCdKNMjsiDMW07_NEEBlzhRlArElUUFRXQ")
                Geocode.fromAddress(json.city).then(
                    response => {
                      const { lat, lng } = response.results[0].geometry.location;
                      this.setState({pos:{lat: lat, lng: lng}})
                    },
                    error => {
                      console.error(error);
                    }
                  );
            }else{
              this.setState( {pos: { lng: places[0].address.longitude, lat: places[0].address.latitude}} )
            }
    
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

    displayMarkers = () => {
        return this.props.places.map(e => {
            console.log(e.address)
          return <Marker key={e.id} id={e.id} position={{
           lat: e.address.latitude,
           lng: e.address.longitude
         }}
         onClick = {(props, marker, e) =>{
            this.setState({
            selectedPlace: this.props.places.find(e => e.id === props.id),
            activeMarker: marker,
            showingInfoWindow: true }) 

            console.log(this.props.places.find(e => e.id === props.id))
         }
            
       } 
    />
        })
      }
      state={
          pos:{lat:0,lat:0},
            selectedPlace: "",
            activeMarker: "",
            showingInfoWindow: false
      }
    render() {
        const styleImg = {
            dots: true,
            fade: false,
            infinite: true,
            speed: 1000,
            slidesToShow: 1,
            arrows: true,
            slidesToScroll: 1,
            autoplay: true,
            autoPlaySpeed: 100,
            className: "ImgSlides"
        }
        return (
            <div className="PageConteneur">
                <div className="DivTop">
                    <div className="DivLeft">
                        <Filter/>
                    </div>
                    <div className="DivRight">
                    <label className="labelCheck" htmlFor="checkMap">Show map</label>
                            <input type="checkbox" className='checkIndex' id="checkMap"/>
                            <label className="spanCheck" htmlFor="checkMap"></label>
                    </div>
                </div>
                <div className="DivBottom">
                    <div className="DivLeftB">
                        <div className="DivHead">
                            <p className="pImg"><img src={troph} className="tropHead"/></p>
                            <p className="pHead">
                                More than 1, 000, 000 guests have stayed in New York.
                                On average they rated their stays 4.7 out of 5 stars.
                            </p>
                        </div>
                        <p className="p300">300+ places to stay</p>
                        {this.display_places()}
                    </div>                

                    <div className="DivRightB">
                        <MyMap google={this.props.google} zoom={10} center={{lng: this.state.pos.lng,lat: this.state.pos.lat}}
                        onClick={ (props) => {
                                    if (this.state.showingInfoWindow) {
                                    this.setState({
                                        showingInfoWindow: false,
                                        activeMarker: null
                                    })
                                    }
                                }}>
                            {this.displayMarkers()}
        
                            <InfoWindow  marker={this.state.activeMarker} visible={this.state.showingInfoWindow}>
                                
                                <div>
                                <h1>{this.state.selectedPlace.name}</h1>
                                <div style={{height: "50%", width: "90%"}}>
                                 {this.state.selectedPlace ? <img className="img_display" src={this.state.selectedPlace.images[0].url} /> : null}
                                
                                </div>
                                <div className="address"> 
                                {this.state.selectedPlace ? <p>{this.state.selectedPlace.address.city}, {this.state.selectedPlace.address.state} </p> : null}
                                </div>
                                </div>
                            </InfoWindow>
                    </MyMap>
                        
                    </div>
                </div>
                {/* {emplement a search feature} */}
                

            
            </div>
        )
    }
}

const mapStateToProps = state => {
    console.log(state)
   return {places: state.places}
}
const mapDispatchToProps  = dispatch => ({
    get_places: places =>  dispatch({type: 'ADD_PLACE', places: places}),
})
export default connect(mapStateToProps,mapDispatchToProps)(Index)