import React, { Component } from 'react'
import '../../assets/authentication.css'
import { connect } from 'react-redux';
import SignUpUser from '../../actions/SignUpUser'
import '../../assets/fontawesome-free-5.11.2-web/css/all.css'
import Errors from '../../components/errors'
import display_errors from '../../helper/display_errors'
 class SignUp extends Component {
    state = {
        name: '',
        email: '',
        password_digest: '',
        password_confirm: '',
        admin: false
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
        return (
            <div id="wrapper">
                <Errors />
                <div className="ConteneurForm">
                <span className="TeteConteneur">Sign Up</span>
                    <form onSubmit={this.handleSubmit}>
                        <div className="ChampsGroup">
                            <i className="fas fa-user"></i>
                            <input type='text' placeholder="Username..." name='name' id='name' onChange={this.handleChange}/>
                            <span className="bar"></span>
                        </div>

                        <div className="ChampsGroup">
                            <i className="fas fa-envelope"></i>
                            <input type='email' placeholder="Email..." name='email' id='email' onChange={this.handleChange}/>
                            <span className="bar"></span>
                        </div>

                        <div className="ChampsGroup">
                            <i className="fas fa-lock"></i>
                            <input type='password' placeholder="Password..." name='password_digest' id='password_digest' onChange={this.handleChange}/>
                            <span className="bar"></span>
                        </div>

                        <div className="ChampsGroup">
                            <i className="fas fa-lock"></i>
                            <input type='password' placeholder="Confirm password" name='password_confirm' id='password_confirm' onChange={this.handleChange}/>
                            <span className="bar"></span>
                        </div>

                        <div className="ChampsGroup">
                            <label>Admin?</label>
                            <input type='checkbox' name='admin' id='admin' onChange={this.handleChange}/>
                        </div>

                        <div className="ChampsGroup">
                            <button>
                                <i className="fab fa-telegram-plane"></i>
                            </button>
                        </div>

                        <div className="Changement">
                            <a href="/login">Already have an account ? <span>Login</span> </a>
                        </div>
                        
                    </form>
                </div>
            </div>
         )
    }
}
const mapDispatchToProps = dispatch =>  ({
    SignUpUser: (user)=> dispatch(SignUpUser(user))
})
export default connect(null,mapDispatchToProps)(SignUp)