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
import {API_ROOT} from '../../constants'
import Footer from '../../components/footer'

 class Index extends Component {
     //for tomorrow find a way to display the places without fetching everytime


    componentDidMount(){
        window.addEventListener('scroll', this.handleScroll, true)
        this.setState({Position:"absolute"})
        if(window.innerWidth<=858){
            this.setState({
                Style: !this.state.Style,
                Places_div: "mapHide_place",
                ImgB_div: "mapHide_placeImg",
                ImgB_div2: "mapHide_placeImg",
                img_div: "img_places",
                Info_div: "mapHide_placeInfo",
                kind_div: "country_places",
                rate_div: "rate_places",
                title_div: "name_places",
                price_div: "price_places"
            }, () => console.log(this.state.pos.lng))
        }
        const url = API_ROOT + window.location.pathname + window.location.search
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
                console.log("this is what you want")
                console.log(places)
                places.length != 0 &&  this.setState( {pos: { lng: places[0].address.longitude, lat: places[0].address.latitude}} )
            }
    
            this.props.get_places(places)
        })
    }
    // openShow = () => window.location.href = `/places/${this.props.place.id}` onClick={window.location.href=`/places/${e.id}`}
    display_places = () => {
        console.log(this.props.places)
        if (this.props.places && Array.isArray(this.props.places)){
            console.log(this.props)
             console.log(this.props.places)
            return this.props.places.map(e => <Place {...this.state} key={e.id}  place={e}/>)
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
          pos:{lng:0,lat:0},
            selectedPlace: "",
            activeMarker: "",
            showingInfoWindow: false,
            show_map: true,
            Position:"absolute",
            Style:true,
            Places_div : "display_places",
            ImgB_div : "display_imgs",
            ImgB_div2 : "display_img",
            img_div : "img_display",
            Info_div : "display_info",
            kind_div : "p_head_kind",
            rate_div : "p_head_rate",
            title_div : "p_head_title",
            price_div : "p_head_price",
            MapOpen:false,
            Display:"flex",
            Display2:"none"
      }
         componentWillUnmount() {
            window.removeEventListener('scroll', this.handleScroll)
        }
                handleScroll = () => {
                    var pageHeight = this.refs.myContainer
                    var scrollHeight = window.scrollY
                    console.log(scrollHeight, pageHeight.clientHeight)
                    if (scrollHeight > (pageHeight.clientHeight-440)) {
                        console.log(scrollHeight, pageHeight.clientHeight)
                        this.setState({
                            Position: "absolute",
                            Display:"none"
                        })
                    } else {
                        this.setState({
                            Position: "fixed",
                            Display:"flex"
                        })
                    }
                }
                handleClick = () => {
                    this.setState({
                        MapOpen: true
                    })
                }
                close_modal = () => {
                    this.setState({
                        MapOpen: false
                    })
                }
    show_hide_map = () =>{
        if(this.state.Style){
            this.setState(
            {show_map: !this.state.show_map, 
                Style: !this.state.Style,
                Places_div: "mapHide_place",
                ImgB_div: "mapHide_placeImg",
                ImgB_div2: "mapHide_placeImg",
                img_div : "img_places",
                Info_div: "mapHide_placeInfo",
                kind_div : "country_places",
                rate_div : "rate_places",
                title_div : "name_places",
                price_div : "price_places",
                Display:"none",
                Display2:"block"
        },() => console.log(this.state.pos.lng)
        )
        }
        else{
            this.setState({
                show_map: !this.state.show_map,
                Style: !this.state.Style,
                Places_div : "display_places",
                ImgB_div : "display_imgs",
                ImgB_div2 : "display_img",
                img_div : "img_display",
                Info_div : "display_info",
                kind_div : "p_head_kind",
                rate_div : "p_head_rate",
                title_div : "p_head_title",
                price_div : "p_head_price",
                Display:"flex",
                Display2:"none"
            }, () => console.log(this.state.pos.lng))
        }
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
        let Big_div = "DivLeftB"
        if (!this.state.Style) {
            Big_div = "mapHide_contain"
        }
        else{
            Big_div = "DivLeftB"
        }
        let map_modal = (
            <div className="div_modal_map">
                <button onClick={this.close_modal} className="close_modal_map">
                   X
                </button>
                <div MapOpen={this.state.MapOpen} className="modal_container_map">
                    <MyMap  google={this.props.google} zoom={10} 
                            center={{lng: this.state.pos.lng,lat: this.state.pos.lat}}
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
        )
        if (!this.state.MapOpen) {
            map_modal = null;
        }
        return (
            <div className="PageConteneur">
            <div>{map_modal}</div>
                <div className="DivTop">
                    <div className="DivLeft">
                        <Filter/>
                    </div>
                    <div className="DivRight">
                    {/*<label className="labelCheck" htmlFor="checkMap">Show map</label>
                            <input type="checkbox" onChange={this.show_hide_map} className='checkIndex' id="checkMap"/>
                            <label className="spanCheck" htmlFor="checkMap"></label>
                    */}
                    <button className="mapShow" onClick={this.show_hide_map} style={{display: ""+this.state.Display2+""}}> 
                        <i className="far fa-map"></i> Show Map 
                    </button>
                    </div>
                </div>
                <div className="DivBottom" ref="myContainer">
                    <div className={Big_div}>
                        <button className="mapShowMobile" onClick={this.handleClick}> <i className="far fa-map"></i> Map </button>
                        <div className="info_top">
                            <div className="DivHead">
                                <p className="pImg"><img src={troph} className="tropHead"/></p>
                                <p className="pHead">
                                    More than 1, 000, 000 guests have stayed in New York.
                                    On average they rated their stays 4.7 out of 5 stars.
                                </p>
                            </div>
                            <p className="pHead">300+ places to stay</p>
                        </div>
                        
                        {this.display_places()}
                    </div>                
                {this.state.show_map ? ( <div className="DivRightB" style={{position: ""+this.state.Position+""}}>
                                <button onClick={this.show_hide_map} className="close_map" 
                                        style={{display: ""+this.state.Display+""}}>
                                    Hide map
                                </button>
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
                    </div>) :  null}
                </div>
                <footer className="footer searchPlace">
                    <Footer/>
                </footer>          
            </div>
        )
    }
}

const mapStateToProps = state => {
    console.log(state.places)
   return {places: state.places}
}
const mapDispatchToProps  = dispatch => ({
    get_places: places =>  dispatch({type: 'ADD_PLACE', places: places}),
})
export default connect(mapStateToProps,mapDispatchToProps)(Index)