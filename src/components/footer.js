import React, { Component } from 'react'
import "../assets/footer.css"

export class footer extends Component {
    render() {
        return (
            <div className="footer_div">
                <div className="top_div_footer">
                    <div className="top_div">
                        <p className="title_div">ABOUT</p>
                        <p className="link_div">Diversity & Belonging</p>
                        <p className="link_div">Accessibility</p>
                        <p className="link_div">Trust & Safety</p>
                        <p className="link_div">Event Citizen</p>
                        <p className="link_div">Newsroom</p>
                    </div>
                    <div className="top_div">
                        <p className="title_div">CONTACT</p>
                        <p className="link_div">Help/FAQ</p>
                        <p className="link_div">Press</p>
                        <p className="link_div">Affiliates</p>
                        <p className="link_div">Place owners</p>
                        <p className="link_div">Partners</p>
                        
                    </div>
                    <div className="top_div">
                        <p className="title_div">HOST</p>
                        <p className="link_div">Host your home</p>
                        <p className="link_div">Host an experience</p>
                        <p className="link_div">Responsible hosting</p>
                        <p className="link_div">Open Homes</p>
                        <p className="link_div">Olympics</p>
                        <p className="link_div">Resource Center</p>
                    </div>
                    <div className="top_div">
                        <p className="title_div">SUPPORT</p>
                        <p className="link_div">Help Center</p>
                        <p className="link_div">Neighborhood Support</p>
                    </div>
                </div>
                <div className="down_div_footer">
                    <a href="./" className="link_down">Privacy </a>
                    <a href="./" className="link_down">Terms & Conditions </a>
                    <a href="./" className="link_down">Imprint </a>
                    <div className="div_icon">
                        <p className="follow_us">Follow us on : </p>
                        <p className="icon_p">
                            <a href="./" className="icone"><i className="fab fa-facebook-f"></i></a>
                            <a href="./" className="icone"><i className="fab fa-twitter"></i></a>
                            <a href="./" className="icone"><i className="fab fa-instagram"></i></a>
                        </p>
                        <p className="all_right">Copyright 2020 event | All rights reserved.</p>
                    </div>
                </div>
            </div>
        )
    }
}

export default footer
