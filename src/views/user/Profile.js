import React from 'react'
import "../../assets/profile.css"
import defaults from '../../assets/img/Last/instagram-profile-photo-png-2.png'

export default function Profile() {
    return (
        <div className="PageConteneur">
            <div className="profile_information">
                <div className="user_details">
                    <p className="title_part">User informations</p>
                    <div className="info">
                        <div className="name_surname">
                            <label className="label_title">Name</label>
                            <input type="text" className="names" placeholder="e.g. John" name="name"/>
                            <label className="label_title">Surname</label>
                            <input type="text" className="names" placeholder="e.g. McCormith" name="sur_name"/>
                            <div className="save_info">
                                <button className="btn_save">Save</button>
                                <button className="btn_cancel">Cancel</button>
                            </div>
                        </div>
                        <div className="pictures">
                            <div className="file_comp"> <img src={defaults} className="files"/> </div>
                            <div className="file_comp">
                                <label htmlFor="photo_edit" className="label_edit">
                                    Select file <i className="fa fa-upload"></i>
                                </label>
                                <input type="file" id="photo_edit" className="photo_edit" name="file_edit"/>
                            </div>
                        </div>
                    </div>
                    <div className="info">
                        <div className="more_info">
                            <label className="label_title">Email</label>
                            <input type="mail" className="input_more" placeholder="peterXXX@yahoo.xyz" name="mail" />
                            <div className="save_info">
                                <button className="btn_save">Save</button>
                                <button className="btn_cancel">Cancel</button>
                            </div>
                        </div>
                    </div>
                    <div className="info">
                        <div className="more_info">
                            <label className="label_title">Contact</label>
                            <input type="text" className="input_more" placeholder="+12 XXX XXX XXX" name="contact" />
                            <div className="save_info">
                                <button className="btn_save">Save</button>
                                <button className="btn_cancel">Cancel</button>
                            </div>
                        </div>
                    </div>
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
                    <p className="title_part">Payment method</p>
                    <div className="payment">
                        <button className="btn_payment">
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
                            <label className="label_title">I would like to receive emails about Agoda promotions</label>
                            <div className="check_div">
                                <input type="checkbox" className="check_sub" id="check2" name="check2"/>
                                <label htmlFor="check2" className="label_check"></label>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="profile_title">
                <p className="profile_link">
                    <a href="./" className="link_menu">
                        <i className="far fa-smile icone_profile"></i> Profiles
                    </a>
                </p>
                <p className="profile_link">
                    <a href="./" className="link_menu">
                        <i className="far fa-calendar-check icone_profile"></i> My Bookings
                    </a>
                </p>
                <p className="profile_link">
                    <a href="./" className="link_menu">
                        <i className="far fa-paper-plane icone_profile"></i> Inbox
                    </a>
                </p>
                <p className="profile_link">
                    <a href="./" className="link_menu">
                        <i className="far fa-star icone_profile"></i> Reviews
                    </a>
                </p>
                <p className="profile_link">
                    <a href="./" className="link_menu">
                        <i className="fa fa-medal icone_profile"></i> EventVIP
                    </a>
                </p>
                <p className="profile_link">
                    <a href="./" className="link_menu">
                        <i className="far fa-credit-card icone_profile"></i> Cash
                    </a>
                </p>
                <p className="profile_link">
                    <a href="./" className="link_menu">
                        <i className="fa fa-gifts icone_profile"></i> Bonus
                    </a> 
                </p>

            </div>
        </div>
    )
}
