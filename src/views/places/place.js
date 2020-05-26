import React from 'react'
import Sliders from "react-slick"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import {ROOT} from '../../constants'

export default function place(props) {
    const display_images = () => {
        if(props.place.images[0]){console.log(props.place.images[0].url)}
        console.log(props.place)
        return props.place.images.map(e => <div className={props.ImgB_div2}>
        <img alt=""  key={e.id} src={e.url}  className={props.img_div}/></div>)
    } 

    const space_features = () => {
        let result = ""
        const amen_titles = props.place.amenities.map(e => e.title).sort()
        amen_titles.unshift( `${props.place.capacity} guests`)
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
        <div className={props.Places_div}>
        {console.log(props)}
                <div className = {props.ImgB_div} >
                <div className="likeIcon"> <i className="far fa-heart IconHeart"></i></div>
                    <Sliders {...styleImg}>
                    {display_images()}
                    </Sliders>
                </div>
                <div className={props.Info_div} onClick={() => {
                window.location.href = `${ROOT}/places/${props.place.id}`
                console.log("clicked")
                }}>
                    <p className={props.kind_div}>{props.place.category.title}</p>
                    <p className={props.rate_div}> <i className="fa fa-star starclass"></i> 4.52</p>
                    <p className={props.title_div}>{props.place.name}</p>
                    {/*this.props.Style ? (// ) : null*/}
                    {props.Style &&  
                        <div>  
                            <p className="p_head_info">{space_features()}</p>
                         
                        </div>
                    }
                    {/*<p className="p_head_info">{space_features()}</p>
                    <p className="p_head_kind">
                        <a href={`/places/${place.id}`} className="place_more">More info</a>
                    </p>*/}
                    
                    <p className={props.price_div}> <b>${props.place.price}</b> / hour</p>
                </div>            
        </div>           
        

    )
}
