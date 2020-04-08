import React, { Component } from 'react'
import '../../assets/login.css'
import { connect } from 'react-redux';
import SignInUser from '../../actions/SignInUser'
import img1 from '../../assets/svg/1.svg'
import img4 from '../../assets/svg/4.svg'
import img5 from '../../assets/svg/5.svg'
import img6 from '../../assets/svg/6.svg'
import img7 from '../../assets/svg/7.svg'
import profile from '../../assets/svg/profile.svg'
import slider from '../../components/slider'
import bimg from "../../assets/img/Last/Backgroun-large1.png"

let dialogStyles = {
    width: "90%",
    maxWidth: "100%",
    margin: "0 auto",
    position: "fixed",
    left: "50%",
    top: "50%",
    transform: "translate(-50%, -50%)",
    zIndex: "29999",
    backgroundColor: "#fff",
    padding: "10px 20px 40px",
    borderRadius: "8px",
    display: "flex",
    flexDirection: "column",
    boxShadow: "0 1px 1.5rem rgba(0, 0, 0, 0.5)",
    backgroundImage: "url("+bimg+")"
}
let dialogCloseButtonStyle = {
    marginBottom: "15px",
    padding: "3px 8px",
    cursor: "pointer",
    borderRadius: "10%",
    border: "none",
    width: "50px",
    height: "30px",
    fontWeight: "bold",
    alignSelf: "flex-end",
    outline: "none",
    backgroundColor: "#dc143c",
    color: "#fff",
}
export default class Login extends Component {
    
    render() {
        let dialog = (
            <div style={dialogStyles}>
                <button style={dialogCloseButtonStyle}
                 onClick={() => {this.handleClick()
                     this.props.onClose()} }className="Arrete"> Close </button>
                <div>{this.props.children}</div>
            </div>
        )
        if (!this.props.isOpen) {
            dialog = null;
        }
        return (<div>{dialog}</div>)
    }
}