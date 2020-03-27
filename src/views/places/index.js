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
            console.log(json)
            const places =  json.places.map(e=>e.data.attributes)
            console.log(places)
            this.props.filter_places(places) 

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
                        <MyMap google={this.props.google} zoom={12} initialCenter={{ lat: 32.7763, lng: -96.7969}}>
                        <Marker  title={'The marker`s title will appear as a tooltip.'}
                    name={'SOMA'}onClick={this.onMarkerClick}
                name={'Current location'} />
 
                <InfoWindow onClose={this.onInfoWindowClose}>
                    <div>
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
    filter_places: places => dispatch({type: 'FILTER_PLACE',places: places })
})
export default connect(mapStateToProps,mapDispatchToProps)(Index)