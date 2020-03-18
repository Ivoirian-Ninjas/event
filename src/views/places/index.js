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

 class Index extends Component {
    //  componentDidMount(){
    //      fetch('http://localhost:3000/places')
    //      .then(resp => resp.json())
    //      .then(json =>{ 
    //          console.log(json)
    //         const places =  json.places.map(e=>e.data.attributes)

    //                       this.props.get_places(places) 
    //                  })
    //  } 

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

                        <div className="display_places">
                            <div className="display_imgs">
                            <div className="likeIcon"> <i className="far fa-heart IconHeart"></i></div>
                                <Sliders {...styleImg}>
                                    <div className="display_img">
                                        <img src={imgreturn1} className="img_display"/>
                                    </div>
                                    <div className="display_img">
                                        <img src={imgreturn2} className="img_display"/>
                                    </div>
                                </Sliders>
                            </div>
                            <div className="display_info">
                                <p className="p_head_kind">Entire house</p>
                                <p className="p_head_rate"> <i className="fa fa-star starclass"></i> 4.52 (6589)</p>
                                <p className="p_head_title">Nice Place Event</p>
                                <p className="p_head_info"> 32 guests . 2 rooms . 1 dj <br/> Wifi . Bar . Kitchen </p>
                                <p className="p_head_price"> <b>$1000</b> / days</p>
                            </div>
                        </div>
                        <div className="display_places">
                            <div className="display_imgs">
                            <div className="likeIcon"> <i className="far fa-heart IconHeart"></i></div>
                                <Sliders {...styleImg}>
                                    <div className="display_img">
                                        <img src={imgreturn1} className="img_display"/>
                                    </div>
                                    <div className="display_img">
                                        <img src={imgreturn2} className="img_display"/>
                                    </div>
                                </Sliders>
                            </div>
                            <div className="display_info">
                                <p className="p_head_kind">Entire house</p>
                                <p className="p_head_rate"> <i className="fa fa-star starclass"></i> 4.52 (6589)</p>
                                <p className="p_head_title">Nice Place Event</p>
                                <p className="p_head_info"> 32 guests . 2 rooms . 1 dj <br/> Wifi . Bar . Kitchen </p>
                                <p className="p_head_price"> <b>$1000</b> / days</p>
                            </div>
                        </div>
                    </div>
                    <div className="DivRightB">
                        <img src={mapcarte} className="imgMap"/>
                    </div>
                </div>
                {/* {emplement a search feature} */}
                

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