import React, { Component } from 'react'
import '../../assets/login.css'
import slider from '../../components/slider'
import { connect } from 'react-redux';
import SignInUser from '../../actions/SignInUser'
import img1 from '../../assets/svg/1.svg'
import img4 from '../../assets/svg/4.svg'
import img5 from '../../assets/svg/5.svg'
import img6 from '../../assets/svg/6.svg'
import img7 from '../../assets/svg/7.svg'
import profile from '../../assets/svg/profile.svg'

class Login extends Component {
    state = {
        email: '',
        password_digest: '',
    }
    componentDidMount(){
        slider()
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
            <div className="conteneur" >
                <div className="img">
                    <div className="imgs marche"><img src={img1} alt=""/></div>
                    <div className="imgs"><img src={img4} alt=""/></div>
                    <div className="imgs"><img src={img5} alt=""/></div>
                    <div className="imgs"><img src={img6} alt=""/></div>
                    <div className="imgs"><img src={img7} alt=""/></div>
                </div>
                <div className="conteneurLog">
                    <form onSubmit={this.handleSubmit} className="FormLog">
                        <img className="avatar" src={profile} alt=""/>
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