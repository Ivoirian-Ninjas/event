import React, { Component } from 'react'
import '../../assets/authentication.css'
import { connect } from 'react-redux';
import SignUpUser from '../../actions/SignUpUser'
import '../../assets/fontawesome-free-5.11.2-web/css/all.css'
import Errors from '../../components/errors'
import display_errors from '../../helper/display_errors'
import Login from './Login'

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
    justifyContent: "center",
    alignItems: "center",
    boxShadow: "0 1px 1.5rem rgba(0, 0, 0, 0.5)"
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
    color: "#fff"
}
 class SignUp extends Component {
    state = {
        name: '',
        email: '',
        password_digest: '',
        password_confirm: '',
        admin: false,
        isOpen:false,
        isOpen1:false
    }
    handleChange = event =>{
        this.setState({[event.target.name]: event.target.value })
    }
    handleSubmit = event => {
        event.preventDefault()
        if(this.state.password_digest === this.state.password_confirm){
            this.props.SignUpUser(this.state)
        }else{
            console.log('The passwords do not match')
            display_errors(['The passwords do not match'])
        }
    }
    render() {
        let dialog1 = (
            <div style={dialogStyles}>
                <button style={dialogCloseButtonStyle} onClick={this.props.onClose1}> Close</button>
                {this.props.children}
            </div>
        )
        if (!this.props.isOpen1) {
            dialog1 = null;
        }
        return (<div>{dialog1}</div>)
    }
}
const mapDispatchToProps = dispatch =>  ({
    SignUpUser: (user)=> dispatch(SignUpUser(user))
})
export default connect(null,mapDispatchToProps)(SignUp)