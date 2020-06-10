import React, { Component } from 'react'
import "../../assets/profile.css"
import defaults from '../../assets/img/Last/instagram-profile-photo-png-2.png'
import Footer from '../../components/footer'
import current_user from '../../helper/current_user'
import {API_ROOT} from '../../constants.js'
import PayoutModal from './PayoutModal'
import {Elements} from '@stripe/react-stripe-js';
import {loadStripe} from '@stripe/stripe-js';


export default class Profile extends Component {
   state = {
       file: "",
       email: current_user().email,
       name: current_user().name,
       ProfOpen:false,
       Position:"fixed"
   }

   handleChange = (event) => this.setState( {[event.target.name]: event.target.value})
   handleSubmit = () => {
    
   if( document.querySelector("span.deleteImage") ) {
    document.querySelector("span.deleteImage").remove()
   }
    const fd = new FormData()
    for(const e in this.state){
        if (e != "ProfOpen"){
            fd.append(`user[${e}]`, this.state[e])
        }
    }
    const params = {
        method: 'PATCH', 
       body: fd
    }
    fetch(`${API_ROOT}/users/${current_user().id}`,params)
    .then(resp => resp.json())
    .then(json => {
        if(json.errors){
            json.errors.forEach(e => {
                console.log(e)
            })
        }else{
        
             JSON.stringify(json.user)  && localStorage.setItem("user", JSON.stringify(json.user) )
             if( current_user() ){
                const small_image = document.querySelector("img.profile_file")
                small_image.src = current_user().profile_pic

            }

        }
    })
  
   
   }
   
    preview_image = (file,parent) =>{
        const divImage = document.querySelector("div.pictures")
        const image = document.querySelector("img.files")
         const  reader = new FileReader();
         const spanX= document.createElement("span")
         const icon = document.createElement("i")
         icon.classList.add("fa", "fa-trash")
         spanX.classList.add("deleteImage")
         spanX.append("Delete image")
         spanX.appendChild(icon)
         //read the file
         reader.readAsDataURL(file);
 
         reader.addEventListener("load", function() {
             image.src = reader.result;
             image.height = 100
             image.width = 100
           }, false);
 
           divImage.appendChild(spanX)
           spanX.addEventListener("click", () => {
             image.src = defaults 
             spanX.remove()
 
             //remove the file from the image
             this.setState({file:  "" } )
             const inputs = document.querySelectorAll(`input[type="file"]`)
            inputs.forEach(e => {
                 console.log(e.value)
                 if ( e.value.includes(file.name) ){
                     console.log(e)
                     e.value = ""
                 }
             })
 
           })
           
 
     }
     handleFileChange = event => {
        event.persist()   
        if (event.target.files[0]) {
            this.setState( {file: event.target.files[0]} )
            // this function will display all the images selected
            this.preview_image(event.target.files[0],event.target.parentNode)
        } 
    }
    handleClick = () => {
        this.setState({
            ProfOpen: true
        })
    }
    close_modal = () => {
        this.setState({
            ProfOpen: false
        })
    }

    // prof_modal_styles = {
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
    componentDidMount() {
        window.addEventListener('scroll', this.handleScroll, true);
    }
    componentWillUnmount() {
        window.removeEventListener('scroll', this.handleScroll);
    }
    handleScroll = () => {
        var pageHeight = this.refs.myContainer
        var scrollHeight = window.scrollY;

        if (scrollHeight > (pageHeight.clientHeight-500)) {
            console.log(scrollHeight, pageHeight.clientHeight)
                this.setState({Position: "absolute"});
        }
        else{
                this.setState({
                    Position: "fixed"
                });

        }
    }
    render() {
        let prof_modal = <PayoutModal close_modal={this.close_modal}/>
        if (!this.state.ProfOpen) {
            prof_modal = null;
        }
        const stripePromise = loadStripe('pk_test_JJ1eMdKN0Hp4UFJ6kWXWO4ix00jtXzq5XG');

        return (
            <Elements stripe={stripePromise}>
           <div className="PageConteneur">
           <div ref="myModal">{prof_modal}</div>
            <div className="profile_information">
                <div className="user_details" ref="myContainer">
                    <p className="title_part">Basic information</p>
                    <div className="info">
                        <div className="name_surname">
                            <label className="label_title">Name</label>
                            <input type="text" className="names" placeholder="e.g. John" name="name" onChange={this.handleChange} value={this.state.name}/>
                            <label className="label_title">Description</label>
                            <textarea className="textarea_profile" placeholder="Say something about you..." name="sur_name"/>
                            <div className="save_info">
                                <button className="btn_save" onClick={this.handleSubmit}>Save</button>
                                <button className="btn_cancel">Cancel</button>
                            </div>
                        </div>
                        <div className="pictures">
                            <div className="file_comp"> <img src={current_user().profile_pic} className="files"/> </div>
                            <div className="file_comp">
                                <label htmlFor="photo_edit" className="label_edit">
                                     Upload  <i className="fa fa-upload"></i>
                                </label>
                            <input onChange={this.handleFileChange} style={{height: "0px", width:"0px"}} type="file" id="photo_edit" className="photo_edit" name="profile_pic" accept="image/x-png,image/gif,image/jpeg"/>
                            </div>
                        </div>
                    </div>
                    <p className="title_part">Contact</p>
                    <div className="info">
                        <div className="more_info">
                            <label className="label_title">Email</label>
                            <input type="mail" className="input_more" placeholder="peterXXX@yahoo.xyz" name="mail" value={current_user().email}/>
                            <label className="label_title">Phone number</label>
                            <input type="tel" className="input_more" placeholder="+12 XXX XXX XXX" name="contact" />
                            <div className="save_info">
                                <button className="btn_save" onClick={this.handleSubmit}>Save</button>
                                <button className="btn_cancel">Cancel</button>
                            </div>
                        </div>
                    </div>

                    <p className="title_part">Credentials</p>
                    <div className="info">
                        <div className="more_info">
                            <label className="label_title">Current password</label>
                            <input type="password" className="input_more" placeholder="Current password" name="cur_password" />
                            <label className="label_title">New password</label>
                            <input type="password" className="input_more" placeholder="New password" name="new_password" />
                            <label className="label_title">Confirm password</label>
                            <input type="password" className="input_more" placeholder="Confirm password" name="conf_password" />
                            <div className="save_info">
                                <button className="btn_save">Save</button>
                                <button className="btn_cancel">Cancel</button>
                            </div>
                        </div>
                    </div>
                   
                    <p className="title_part">Social network</p>
                    <div className="info">
                        <div className="more_info">
                            <label className="label_title">Social network</label>
                            <button className="btn_connection">Connected</button>
                        </div>
                    </div>
                    <p className="title_part">Payment & Payout</p>
                    <div className="payment">

                        <button onClick={this.handleClick}className="btn_payment">

                            Add payment method <i className="fa fa-plus-circle payment_icon"></i>
                        </button>
                    </div>
                    <p className="title_part">Email subscription</p>
                    <div className="email_sub">
                        <div className="radio_sub_div">
                            <label className="label_title">Newsletter</label>
                            <div className="radio_div">
                                <input type="radio" className="radio_sub" id="radio1" name="radio_select"/>
                                <label htmlFor="radio1" className="label_radio">Daily</label>
                            </div>
                            <div className="radio_div">
                                <input type="radio" className="radio_sub" id="radio2" name="radio_select"/>
                                <label htmlFor="radio2" className="label_radio">Weekly</label>
                            </div>
                            <div className="radio_div">
                                <input type="radio" className="radio_sub" id="radio3" name="radio_select"/>
                                <label htmlFor="radio3" className="label_radio">Monthly</label>
                            </div>
                            <div className="radio_div">
                                <input type="radio" className="radio_sub" id="radio4" name="radio_select"/>
                                <label htmlFor="radio4" className="label_radio">Never</label>
                            </div>
                        </div>
                    </div>
                    <div className="info infoMobile">
                        <div className="radio_sub_div">
                            <label className="label_title">I would like to receive booking assist reminders</label>
                            <div className="check_div">
                                <input type="checkbox" className="check_sub" id="check1" name="check1"/>
                                <label htmlFor="check1" className="label_check"></label>
                            </div>
                        </div>
                    </div>
                    <div className="info">
                        <div className="radio_sub_div">
                            <label className="label_title">I would like to receive emails about Event promotions</label>
                            <div className="check_div">
                                <input type="checkbox" className="check_sub" id="check2" name="check2" />
                                <label htmlFor="check2" className="label_check"></label>
                            </div>
                        </div>
                    </div>
                    <div className="footerIllusion">
                    </div>
                </div>
            </div>
            <div className="profile_title" style={{position: ""+this.state.Position+""}}>
                <p className="profile_link">
                    <a href="#" className="link_menu">
                        <i className="far fa-smile icone_profile"></i> Profiles
                    </a>
                </p>
                <p className="profile_link">
                    <a href="/bookings" className="link_menu">
                        <i className="far fa-calendar-check icone_profile"></i> Bookings
                    </a>
                </p>
                <p className="profile_link">
                    <a href="/inbox" className="link_menu">
                        <i className="far fa-paper-plane icone_profile"></i> Inbox
                    </a>
                </p>
                <p className="profile_link">
                    <a href="/reviews" className="link_menu">
                        <i className="far fa-star icone_profile"></i> Reviews
                    </a>
                </p>
                <p className="profile_link">
                    <a href="#" className="link_menu">
                        <i className="fa fa-medal icone_profile"></i> EventVIP
                    </a>
                </p>
                <p className="profile_link">
                    <a href="#" className="link_menu">
                        <i className="far fa-credit-card icone_profile"></i> Cash
                    </a>
                </p>
                <p className="profile_link">
                    <a href="#" className="link_menu">
                        <i className="fa fa-gifts icone_profile"></i> Bonus
                    </a> 
                </p>

            </div>
            <div className="profileMobile">
            <a href="#" className="menuMobile">
                <i className="far fa-smile iconeMobile"></i> <br/>Profiles
            </a>
            <a href="/bookings" className="menuMobile">
                <i className="far fa-calendar-check iconeMobile"></i> <br/> Bookings
            </a>
            <a href="/inbox" className="menuMobile">
                <i className="far fa-paper-plane iconeMobile"></i> <br/> Inbox
            </a>
            <a href="#" className="menuMobile">
                <i className="far fa-credit-card iconeMobile"></i> <br/> Cash
            </a>
            </div>
            <footer className="footer searchPlace">
                <Footer/>
            </footer>
        </div>
 </Elements>
        )
    }
}
