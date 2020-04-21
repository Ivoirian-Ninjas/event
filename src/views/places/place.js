import React from 'react'
import Sliders from "react-slick"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import {ROOT} from '../../constants'

export default function place({place}) {
    const display_images = () => {
        if(place.images[0]){console.log(place.images[0].url)}
        console.log(place)
        return place.images.map(e => <div className="display_img"><img alt=""  key={e.id} src={e.url}  className="img_display"/></div>)
    } 

    const space_features = () => {
        let result = ""
        const amen_titles = place.amenities.map(e => e.title).sort()
        amen_titles.unshift( `${place.capacity} guests`)
        amen_titles.map( (e, index) => {
           result += `${e}`
        if( (index/4) % 1 === 0 ){
            result += "\n"
        }
           if(index !== amen_titles.length - 1){
               result += " . "
           }
       })
      
       return result
    }
    const styleImg = {
        dots: true,
        fade: false,
        infinite: true,
        speed: 1000,
        slidesToShow: 1,
        arrows: true,
        slidesToScroll: 1,
        autoplay: false,
        className: "ImgSlides"
    }

    return (
        <div className="display_places"  >
                <div className="display_imgs">
                <div className="likeIcon"> <i className="far fa-heart IconHeart"></i></div>
                    <Sliders {...styleImg}>
                    {display_images()}
                    </Sliders>
                </div>
                <div className="display_info" onClick={() => {
                window.location.href = `${ROOT}/places/${place.id}`
                console.log("clicked")
                }}>
                    <p className="p_head_kind">{place.category.title}</p>
                    <p className="p_head_rate"> <i className="fa fa-star starclass"></i> 4.52 (6589)</p>
                    <p className="p_head_title">{place.name}</p>
                    <p className="p_head_info"> {space_features()}</p>
                    <p className="p_head_kind"><a href={`/places/${place.id}`} className="place_more">More info</a></p>
                    <p className="p_head_price"> <b>${place.price}</b> / hour</p>
                </div>            
        </div>           
        

    )
}
