import React, { Component } from 'react'
import current_user from '../helper/current_user'
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import Slider from "react-slick"
import "jquery"
import '../assets/Home.css'
import img1 from '../assets/img/Taille 1400 x 600/img/image1.jpg'
import img2 from '../assets/img/Taille 1400 x 600/img/image2.jpg'
import img3 from '../assets/img/Taille 1400 x 600/img/image3.jpg'
import img4 from '../assets/img/Taille 1400 x 600/img/image4.jpg'
import img5 from '../assets/img/Taille 1400 x 600/img/image5.jpg'
import img6 from '../assets/img/Taille 1400 x 600/img/image6.jpg'
import img7 from '../assets/img/Taille 1400 x 600/img/image7.jpg'
import img8 from '../assets/img/Taille 1400 x 600/img/image8.jpg'
import card from '../assets/img/Better/emmanuel-JB7dRB6gUmY-unsplash.jpg'
import card2 from '../assets/img/Better/sarah-gotze-ODua_Pc7VQY-unsplash.jpg'
import card3 from '../assets/img/Better/thomas-william-OAVqa8hQvWI-unsplash.jpg'
import img_premium from '../assets/img/Better/ibrahim-boran-1VEVJrBF94U-unsplash.jpg'
import img_search_today from '../assets/img/Better/ian-schneider-PAykYb-8Er8-unsplash.jpg'
import img_subscribe from '../assets/img/Better/alex-holyoake-UEqblh5QQOY-unsplash.jpg'
import img_some1 from '../assets/img/Better/austin-distel-wawEfYdpkag-unsplash.jpg'
import img_some2 from '../assets/img/Better/ibrahim-boran-m8YjB0noWiY-unsplash.jpg'
import img_some3 from '../assets/img/Better/kyle-glenn-cqvy_cag4gI-unsplash.jpg'
import img_some4 from '../assets/img/Better/aranxa-esteve-S5DEUg2yUVU-unsplash.jpg'
import img_kind1 from '../assets/img/Better/shardayyy-photography-fJzmPe-a0eU-unsplash.jpg'
import img_kind2 from '../assets/img/Better/k-i-l-i-a-n-Nle65lXSY-I-unsplash.jpg'
import img_kind3 from '../assets/img/Better/ibrahim-boran-dmOFwtOIhJA-unsplash.jpg'
import img_kind4 from '../assets/img/Better/mo-tj86_D4rK2Q-unsplash.jpg'
import img_kind5 from '../assets/img/Better/teemu-paananen-bzdhc5b3Bxs-unsplash.jpg'
import img_kind6 from '../assets/img/Better/chuttersnap-aEnH4hJ_Mrs-unsplash.jpg'
class Home extends Component {
    constructor(){
        super()
        this.state = {
            isActive:false
        }
    }
     state = {
         email: '',
         password_digest: '',
         isOpen: false,
         isOpen1: false
     }
     handleChange = event => {
         this.setState({
             [event.target.name]: event.target.value
         })
     }
     handleSubmit = event => {
         event.preventDefault()
         this.props.SignInUser(this.state)
     }
    // componentWillMount(){
    //     Modal.setAppElement("body")
    // }
    toggleModal = () =>{
        this.setState({
            isActive:!this.state.isActive
        })
    }
    componentDidMount(){
        // slider()
        let user = current_user()
        console.log(user)
    }
    render() {
        const settings = {
            dots: true,
            fade: true,
            infinite: true,
            speed: 6000,
            slidesToShow: 1,
            arrows: true,
            slidesToScroll: 1,
            autoplay:true,
            autoPlaySpeed:100,
            className: "SlideControl"
        }
        return (
            <div>
                <div className="PageConteneur">
                    <div className="partieSearch">
                        <div className="searchContenu">
                            <h1 className="h1Home">Find your place <br/>  anywhere</h1>
                            <h3 className="h3Home">A very easy platform to search some locals to do your <br/> event</h3>
                            <input type='text' placeholder="What are your planing" className="TypeEvent"/>
                            <input type='text' placeholder="Where?" className="LocateEvent"/>
                            <input type='date' placeholder="When?" className="LocateEvent"/>
                            <input type='time' placeholder="Time start" className="TimeEvent"/>
                            <input type='time' placeholder="Time end" className="TimeEvent"/>
                            <input type='number' placeholder="Numbers of people" className="NumberEvent"/>
                            <button className="searchEvent">Search <i className="fas fa-search"></i></button>
                        </div>
                    </div>
                    <Slider {...settings}>
                    <div className="imageHome">
                        <img src={img1}/>
                    </div>
                    <div className="imageHome">
                        <img src={img2}/>
                    </div>
                    <div className="imageHome">
                        <img src={img3}/>
                    </div>
                    <div className="imageHome">
                        <img src={img4}/>
                    </div>
                    <div className="imageHome">
                        <img src={img5}/>
                    </div>
                    <div className="imageHome">
                        <img src={img6}/>
                    </div>
                    <div className="imageHome">
                        <img src={img7}/>
                    </div>
                    <div className="imageHome">
                        <img src={img8}/>
                    </div>
                     </Slider>
                </div>

                <div className="premium">
                    <p className="text_premium">Premium Place</p>
                    <p className="little_text_premium"> 
                        The selection of premium' places to rent with a the best service's quality.
                    </p>
                    <div className="img_premium">
                    <img src={img_premium} className="premium_img"  alt="Large Image" />
                    <button className="more_premium">EXPLORE PREMIUM <i className="fa fa-angle-right"></i> </button>
                    </div>
                
                </div>
                <div className="premium">
                    <p className="text_premium">Most popular search </p>
                    <p className="little_text_premium"> 
                        The selection of place which are more searched on the website.
                    </p>
                    <div className="TypeCategorie">
                        <div className="Categorie1">
                            <img src={card} className="img_most"/>
                            <button className="most_search_btn">Place for party with some friends</button>
                        </div>

                        <div className="Categorie1">
                            <img src={card2} className="img_most"/>
                            <button className="most_search_btn">Place for a company cocktail</button>
                        </div>

                        <div className="Categorie1">
                            <img src={card3} className="img_most"/>
                            <button className="most_search_btn">Place for a big or important event</button>
                        </div>
                    </div>
                </div>
                <div className="premium">
                    <div className="subscribe">
                        <div className="subscribe_text">
                            <p className="little_text_premium">Find a place for today near you.</p>
                            <p className="text_premium_sub">Place for today.</p>
                            <button className="subscribe_btn">Search place</button>
                        </div>
                        <div className="subscribe_img">
                            <img className="img_subscribe" src={img_search_today}/>
                        </div>
                        
                    </div>
                    <div className="subscribe">
                        <div className="subscribe_text">
                            <p className="little_text_premium">
                                Sign up to access to more gifts.
                            </p>
                            <p className="text_premium_sub">Subscribe to get bonus.</p>
                            <button className="subscribe_btn">Subscribe now</button>
                        </div>
                        <div className="subscribe_img">
                            <img className="img_subscribe" src={img_subscribe}/>
                        </div>
                    </div>
                </div>
                <div className="premium">
                    <p className="text_premium">Some place where you can go </p>
                    <p className="little_text_premium"> 
                        There are some place what you can see the information and reserve today.
                    </p>
                    <div className="some_place">
                        <div className="places">
                            <div className="places_img">
                                <img src={img_some1} className="img_places"/>
                            </div>
                            <div className="places_info">
                                <p className="country_places">New York</p>
                                <p className="rate_places"><i className="fa fa-star etoiles"></i> 4.23 </p>
                                <p className="name_places">The Saloon of Peter & Co</p>
                                <p className="price_places"> <b>52$</b> / hour</p>
                            </div>
                        </div>
                        <div className="places">
                            <div className="places_img">
                                <img src={img_some2} className="img_places"/>
                            </div>
                            <div className="places_info">
                                <p className="country_places">Miami</p>
                                <p className="rate_places"><i className="fa fa-star etoiles"></i> 4.73 </p>
                                <p className="name_places">The lounge place</p>
                                <p className="price_places"> <b>100$</b> / hour</p>
                            </div>
                        </div>
                        <div className="places">
                            <div className="places_img">
                                <img src={img_some3} className="img_places"/>
                            </div>
                            <div className="places_info">
                                <p className="country_places">Queens</p>
                                <p className="rate_places"><i className="fa fa-star etoiles"></i> 4.19 </p>
                                <p className="name_places">Little space</p>
                                <p className="price_places"> <b>41$</b> / hour</p>
                            </div>
                        </div>
                        <div className="places">
                            <div className="places_img">
                                <img src={img_some4} className="img_places"/>
                            </div>
                            <div className="places_info">
                                <p className="country_places">San Francisco</p>
                                <p className="rate_places"><i className="fa fa-star etoiles"></i> 4.10 </p>
                                <p className="name_places">Main place event</p>
                                <p className="price_places"> <b>45$</b> / hour</p>
                            </div>
                        </div>
                    </div>
                    <button className="show_more_places">Show more <i className="fa fa-plus icon_plus"></i></button>
                </div>
                <div className="premium">
                    <p className="text_premium">Kind of event more ask on event.com </p>
                    <div className="first_kind">
                        <div className="big_one">
                            <img src={img_kind1} className="big_one_picture" />
                            <p className="big_one_text">Weeding</p>
                        </div>
                        <div className="small_one">
                            <div class="top_one">
                            <img src={img_kind2} className="big_one_picture" />
                            <p className="big_one_text">Concert</p>
                            </div>
                            <div class="down_one">
                            <img src={img_kind3} className="big_one_picture" />
                            <p className="big_one_text">Friend's party</p>
                            </div>
                        </div>
                    </div>
                    <div className="second_kind">
                        <div className="small_ones">
                            <div class="top_one">
                            <img src={img_kind4} className="big_one_picture" />
                            <p className="big_one_text">Festival</p>
                            </div>
                            <div class="down_one">
                            <img src={img_kind5} className="big_one_picture" />
                            <p className="big_one_text">Conference</p>
                            </div>
                        </div>
                        <div className="big_ones">
                            <img src={img_kind6} className="big_one_picture" />
                            <p className="big_one_text">Diner</p>
                        </div>
                    </div>
                    <button className="show_more_kind">Show more kinds <i className="fa fa-plus icon_plus"></i></button>
                </div>
            </div>
        )
    }
}
export default Home