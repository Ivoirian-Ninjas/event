import React, { Component } from 'react'
import '../../assets/authentication.css'
import { connect } from 'react-redux';
import SignUpUser from '../../actions/SignUpUser'
import '../../assets/fontawesome-free-5.11.2-web/css/all.css'




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
        this.props.SignUpUser(this.state)
    }
    render() {
        return (
            <div id="wrapper">
                <div className="form-container">
                <span className="form-heading">Sign Up</span>
                    <form onSubmit={this.handleSubmit}>
                        <div className="input-group">
                            <i className="fas fa-user"></i>
                            <input type='text' placeholder="Username..." name='name' id='name' onChange={this.handleChange}/>
                            <span className="bar"></span>
                        </div>

                        <div className="input-group">
                            <i className="fas fa-envelope"></i>
                            <input type='email' placeholder="Email..." name='email' id='email' onChange={this.handleChange}/>
                            <span className="bar"></span>
                        </div>

                        <div className="input-group">
                            <i className="fas fa-lock"></i>
                            <input type='password' placeholder="Password..." name='password_digest' id='password_digest' onChange={this.handleChange}/>
                            <span className="bar"></span>
                        </div>

                        <div className="input-group">
                            <i className="fas fa-lock"></i>
                            <input type='password' placeholder="Confirm password" name='password_confirm' id='password_confirm' onChange={this.handleChange}/>
                            <span className="bar"></span>
                        </div>

                        <div className="input-group">
                            <label>Admin?</label>
                            <input type='checkbox' name='admin' id='admin' onChange={this.handleChange}/>
                        </div>

                        <div className="input-group">
                            <button>
                                <i className="fab fa-telegram-plane"></i>
                            </button>
                        </div>

                        <div className="switch-login">
                            <a href="#">Already have an account ? <span>Login</span> </a>
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