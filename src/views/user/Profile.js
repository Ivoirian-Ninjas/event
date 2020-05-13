import React, { Component } from 'react'
import "../../assets/profile.css"
import defaults from '../../assets/img/Last/instagram-profile-photo-png-2.png'
import card_default from '../../assets/img/Last/pngtree-vector-credit-card-icon-png-image_925424.jpg'
import card_1 from '../../assets/img/Last/6744618_preview.png'
import card_2 from '../../assets/img/Last/bank-of-america-icon-png-7.png'
import card_3 from '../../assets/img/Last/mastercard-credit-card-business-debit-card-logo-png-favpng-xAry6ChN7vpf53S2rA2aNP7KA.jpg'
import card_4 from '../../assets/img/Last/JCB_logo.svg.png'
import Footer from '../../components/footer'
import current_user from '../../helper/current_user'

// let scrollHeight = 0;
let stylish
if(window.scrollY>100){
    stylish = {
        position: 'absolute',
    }
}
else{
    stylish = {
        position: 'fixed',
    }
}

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
    fetch(`http://localhost:3000/users/${current_user().id}`,params)
    .then(resp => resp.json())
    .then(json => {
        if(json.errors){
            json.errors.forEach(e => {
                console.log(e)
            })
        }else{
            localStorage.removeItem("user")
            localStorage.setItem("user", JSON.stringify(json.user) )

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
             this.setState( state => state.profile_pic = "" , () => console.log(this.state.images))
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

    prof_modal_styles = {
        width: "60%",
        maxWidth: "100%",
        margin: "0 auto",
        position: "fixed",
        left: "50%",
        top: "50%",
        transform: "translate(-50%, -50%)",
        zIndex: "29999",
        backgroundColor: "#fff",
        display: "flex",
        flexDirection: "column",
        boxShadow: "0px 0px 0px 400px rgba(0, 0, 0, 0.40)",
    }
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
        let prof_modal = (
            <div style={this.prof_modal_styles} className="div_modal">
                <button onClick={this.close_modal} className="close_modal_prof">
                    <i className="far fa-times-circle"></i> 

                </button>
                <div ProfOpen={this.state.ProfOpen} className="modal_container_prof">
                    <p className="p_add_new">Add a new credit card</p>
                    <div className="contain_modal">
                        <div className="div_contain_modal">
                            <div className="div_input_modal">
                                <label className="label_modal_prof">Credit/debit card number</label>
                                <input type="text" className="input_modal_prof" name="credit_numb"/>
                            </div>
                            <div className="div_input_modal">
                                <label className="label_modal_prof">Card holder name</label>
                                <input type="text" className="input_modal_prof" name="card_name"/>
                            </div>
                            <div className="div_input_modal">
                                <label className="label_modal_prof">Expiry date (Example: 04/20)</label>
                                <input type="text" className="input_modal_prof" name="expiry_card"/>
                            </div>
                            <div className="div_input_modal">
                                <label className="label_modal_prof">Issuing bank</label>
                                <input type="text" className="input_modal_prof" name="issue_bank"/>
                            </div>
                        </div>
                        <div className="div_contain_modal">
                            <div className="display_card">
                                <img src={card_default} className="image_card"/>
                            </div>
                            <div className="example_card">
                                <p className="p_exemple_card">Available payment methods:</p>
                                <div className="some_images">
                                <img src={card_1} className="image_card_small"/>
                                <img src={card_2} className="image_card_small"/>
                                <img src={card_3} className="image_card_small"/>
                                <img src={card_4} className="image_card_small"/>
                                </div>
                            </div>
                            <div className="div_btn_modal">
                                <button className="btn_save">Save</button>
                                <button className="btn_cancel">Cancel</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
        if (!this.state.ProfOpen) {
            prof_modal = null;
        }
        return (
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
                                    Select file <i className="fa fa-upload"></i>
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
                    <div className="info">
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

                        <i className="far fa-calendar-check icone_profile"></i> My Bookings
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
            <footer className="footer">
                <Footer/>
            </footer>
        </div>
 
        )
    }
}
