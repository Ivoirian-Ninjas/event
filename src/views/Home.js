import React, { Component } from 'react'
import current_user from '../helper/current_user'
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import Slider from "react-slick"
import "jquery"
import '../assets/Home.css'
import Login from './user/Login'
import SignUp from './user/SignUp'
import { connect } from 'react-redux';
import imgs1 from '../assets/svg/1.svg'
import imgs4 from '../assets/svg/4.svg'
import imgs5 from '../assets/svg/5.svg'
import imgs6 from '../assets/svg/6.svg'
import imgs7 from '../assets/svg/7.svg'
import profile from '../assets/svg/profile.svg'
import img1 from '../assets/img/Taille 1400 x 600/img/image1.jpg'
import img2 from '../assets/img/Taille 1400 x 600/img/image2.jpg'
import img3 from '../assets/img/Taille 1400 x 600/img/image3.jpg'
import img4 from '../assets/img/Taille 1400 x 600/img/image4.jpg'
import img5 from '../assets/img/Taille 1400 x 600/img/image5.jpg'
import img6 from '../assets/img/Taille 1400 x 600/img/image6.jpg'
import img7 from '../assets/img/Taille 1400 x 600/img/image7.jpg'
import img8 from '../assets/img/Taille 1400 x 600/img/image8.jpg'
import card from '../assets/img/Taille 400 x 300/img/card1.jpg'
import card2 from '../assets/img/Taille 400 x 300/img/card7.jpg'
import card3 from '../assets/img/Taille 400 x 300/img/card3.jpg'
import card4 from '../assets/img/Taille 400 x 300/img/card4.jpg'
import card5 from '../assets/img/Taille 400 x 300/img/card5.jpg'
import card6 from '../assets/img/Taille 400 x 300/img/card6.jpg'
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
            speed: 10000,
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
                    <Login isOpen={this.state.isOpen} onClose={(e) => this.setState({ isOpen: false })}></Login>
                    <SignUp isOpen1={this.state.isOpen1} onClose1={(e) => this.setState({ isOpen1: false })}></SignUp>
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
                <div className="CategorieEvent">
                    <h1 className="H1Categorie">Most Popular </h1>
                    <div className="TypeCategorie">

                        <div className="Categorie1">
                            <img src={card}/>
                            <legend>Categorie 1</legend>
                        </div>

                        <div className="Categorie1">
                            <img src={card2}/>
                            <legend>Categorie 2</legend>
                        </div>

                        <div className="Categorie1">
                            <img src={card3}/>
                            <legend>Categorie 3</legend>
                        </div>

                        <div className="Categorie1">
                            <img src={card4}/>
                            < legend > Categorie 4</legend>
                        </div>

                        <div className="Categorie1">
                            <img src={card5}/>
                            < legend > Categorie 5 </legend>
                        </div>

                        <div className="Categorie1">
                            <img src={card6}/>
                            <legend>Categorie 6</legend>
                        </div>
                        
                    </div>
                    <button className="ButtonCategorie">More Kinds <i className="fas fa-plus"></i></button>
                </div>
            </div>
        )
    }
}
export default Home