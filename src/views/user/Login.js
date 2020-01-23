import React, { Component } from 'react'
import '../../assets/authentication.css'
import { connect } from 'react-redux';
import SignInUser from '../../actions/SignInUser'

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
            
            <form onSubmit={this.handleSubmit}>
                    <div>
                        <label htmlFor='email' >Email</label>
                        <input type='email' name='email' id='email' onChange={this.handleChange}/>
                    </div>

                    <div>
                        <label htmlFor='password_digest'>Password</label>
                        <input type='password' name='password_digest' id='password_digest' onChange={this.handleChange}/>
                    </div>
                    
                    <button>Log In</button>
                
                <a href='/Signup'>Register here</a>
            </form>
        
        )
    }
}
const mapDispatchToProps = dispatch =>  ({
    SignInUser: (user)=> dispatch(SignInUser(user))
})
export default connect(null,mapDispatchToProps)(Login)