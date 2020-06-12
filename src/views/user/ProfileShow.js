import React, { Component } from 'react'
import "../../assets/profileShow.css"
import img_places from '../../assets/img/Better/noiseporn-JNuKyKXLh8U-unsplash.jpg'
import img_space from '../../assets/img/Better/geert-pieters-AfgJpWQH4lw-unsplash.jpg'
import img_user from '../../assets/img/Better/hello-i-m-nik-73_kRzs9sqo-unsplash.jpg'
import img_profile from '../../assets/img/Better/campaign-creators-gMsnXqILjp4-unsplash.jpg'
import Carousel, {
  Dots
} from '@brainhubeu/react-carousel';
import '@brainhubeu/react-carousel/lib/style.css'
import Footer from '../../components/footer'
export class ProfileShow extends Component {
  render() {
    return (
      <div className='PageConteneur'>
          <div className="contain_profile">
            <div className="left_profile">
              <div className="inside_left">
                <p className="text_insideL">
                  <h2 className="title_insideL">Hi, I’m Zirizirignon Ziri Gaston</h2>
                  <small className="smallT_insideL">Joined in 2018</small>
                </p>
                <p className="text_insideLI">
                  <i className="fa fa-home icon_home_insideL"></i> Lives in Paris, France
                </p>
              </div>
              <div className="inside_left">
                <h2 className="h2_insideL"> Zirizirignon Ziri Gaston’s listings </h2>
                <div className="show_places_created">
                  <Carousel slidesPerPage={2} arrows 
                            breakpoints = {
                                {
                                    600: {
                                        slidesPerPage: 1,
                                        arrows: false,
                                        keepDirectionWhenDragging: true
                                    },
                                    950: {
                                        slidesPerPage: 1,
                                        arrows: false,
                                        keepDirectionWhenDragging: true
                                    },
                                    1024: {
                                        slidesPerPage: 2,
                                        arrows: true
                                    }
                                }
                            }>
                    <div className="placesP">
                      <div className="places_img">
                        <img src={img_places} className="img_places"/>
                      </div>
                      <div className="places_info">
                          <p className="country_places">San Francisco</p>
                          <p className="rate_places"><i className="fa fa-star etoiles"></i> 4.10 </p>
                          <p className="name_placesP">Main place event</p>
                      </div>
                    </div>
                    <div className="placesP">
                      <div className="places_img">
                        <img src={img_places} className="img_places"/>
                      </div>
                      <div className="places_info">
                          <p className="country_places">San Francisco</p>
                          <p className="rate_places"><i className="fa fa-star etoiles"></i> 4.10 </p>
                          <p className="name_placesP">Main place event</p>
                      </div>
                    </div>
                    </Carousel>
                </div>
                <button className='btn_insideL'>View all 5 listings</button>
              </div>
              <div className="inside_left">
                <h2 className="h2_insideL">5 Reviews</h2>
                <div className="reviews_part">
                  <div className="places_stayed">
                    <div className="space_stayed">
                      <p className="name_space">
                        Stayed at Amazing 2 BR - Bibliothèque François Mitterrand
                      </p>
                      <p className="date_space">
                        Mars 2020
                      </p>
                    </div>
                    <div className="div_img_stayed">
                      <img src={img_space} alt='' className="img_stayed" />
                    </div>
                  </div>
                  <p className="review_message">
                    Quiet and clean place close to subway all good
                  </p>
                  <div className="reviews_imgP">
                    <img src={img_user} className="img_reviewsP" alt="" />
                    <p className="info_reviewsP">
                        <b>John</b> <br />
                        Joined in 2020
                    </p>
                  </div>
                  <div className="response_host">
                      <h3 className="response_title"> Response from Zirizirignon Ziri Gaston </h3>
                      <p className="response_contain">
                        Merci pour votre commentaire et vos recommandations Mathieu, au plaisir de vous revoir
                      </p>
                  </div>
                </div>
                <button className='btn_insideL'>Show more reviews</button>
              </div>
            </div>
            <div className="right_profile">
              <div className="inside_right_img">
                <img src={img_profile} alt="" className="img_insideR" />
              </div>
              <div className="inside_right_RI">
                <p className="p_IR_Wi">
                  <i className="fa fa-star icon_reviews"></i> 412 Reviews
                </p>
                <p className="p_IR_Wi">
                  <i className="fa fa-check icon_check"></i> Identity verified
                </p>
              </div>
              <div className="inside_right_info">
                <h2 className="h2_insideR"> Zirizirignon Ziri Gaston confirmed </h2>
                <p className="p_IR_Wi">
                  <i className="far fa-check-circle check_icon"></i> Identity
                </p>
                <p className="p_IR_Wi">
                  <i className="far fa-check-circle check_icon"></i> Address email
                </p>
                <p className="p_IR_Wi">
                  <i className="far fa-check-circle check_icon"></i> Phone number
                </p>
                <p className="p_IR_WOI">
                  <a href="#" className="learn_more">Learn more</a> about how confirming account info helps keep the Airbnb community secure.
                </p>
              </div>
            </div>
          </div>
          <footer className="footer searchPlace">
            <Footer/>
          </footer>
      </div>
    )
  }
}

export default ProfileShow
