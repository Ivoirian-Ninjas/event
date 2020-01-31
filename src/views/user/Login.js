import React, { Component } from 'react'
import '../../assets/login.css'
import { connect } from 'react-redux';
import SignInUser from '../../actions/SignInUser'
import festive from '../../assets/svg/festive.svg'
import profile from '../../assets/svg/profile.svg'

class Login extends Component {
    state = {
        email: '',
        password_digest: ''

    }

    handleChange = event =>{
        this.setState({[event.target.name]: event.target.value })
    }
    handleSubmit = event => {
        event.preventDefault()
        this.props.SignInUser(this.state)
    }
    render() {
        return (
            <div className="conteneur col-12" >
                <div className="img">
                    <img src={festive} className="imgs"/>
                </div>
                <div className="conteneurLog">
                    <form onSubmit={this.handleSubmit} className="FormLog">
                        <img className="avatar" src={profile}/>
                        <h2>WELCOME</h2>
                        <div className="ChampsDiv">
                            <i className="fas fa-envelope"></i>
                            <input type='email' name='email' placeholder="Email..." id='email' onChange={this.handleChange}/>
                            <span className="bar"></span>
                        </div>

                        <div className="ChampsDiv">
                            <i className="fas fa-lock"></i>
                            <input type='password' placeholder="Password..." name='password_digest' id='password_digest' onChange={this.handleChange}/>
                            <span className="bar"></span>
                        </div>
                        
                        <div className="ChampsDiv">
                            <button>
                                <i className="fab fa-telegram-plane"></i>
                            </button>
                        </div>

                        <div className="Changement">
                            <a href="/signup"> Don't have a account ? <span>Register here</span> </a>
                        </div>
                    </form>
                </div>

            </div>
        )
    }
}
const mapDispatchToProps = dispatch =>  ({
    SignInUser: (user)=> dispatch(SignInUser(user))
})
export default connect(null,mapDispatchToProps)(Login)