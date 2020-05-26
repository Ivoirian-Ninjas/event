import React, {Component} from 'react'
import is_logged_in from '../helper/is_logged_in'
import is_admin from '../helper/is_admin'
import current_user from '../helper/current_user'
import Login from '../views/user/Login'
import SignUp from '../views/user/SignUp'
import '../assets/login.css'
import img1 from '../assets/svg/1.svg'
import img4 from '../assets/svg/4.svg'
import img5 from '../assets/svg/5.svg'
import img6 from '../assets/svg/6.svg'
import img7 from '../assets/svg/7.svg'
import profile from '../assets/svg/profile.svg'
import '../assets/authentication.css'
import Errors from './errors'
import slider from './slider'
import display_errors from '../helper/display_errors'
import { connect } from 'react-redux';
import SignInUser from '../actions/SignInUser'
import SignUpUser from '../actions/SignUpUser'
import img_profil from '../assets/img/Better/ganapathy-kumar-yaiy4mCbzw0-unsplash.jpg'
import { ROOT, API_ROOT } from '../constants';

 class Navbar extends Component {
  logout = () =>{
    localStorage.clear()
    window.location.href = ROOT
  }
  redirect = () => window.location.href = ROOT
  
  state = {
    email: '',
    password: '',
    password_confirm: '',
    name:'',
    isOpen: false,
    isOpen1: false,
    admin: false

  }

  handleClick = () => {
    slider();
    this.setState({
      isOpen: true
    })
  }
  handleSubmit = event => {
    event.preventDefault()
    if (this.state.isOpen1 ){
      if(this.state.password === this.state.password_confirm) {
            const user = { email: this.state.email,
                          password: this.state.password,
                          name: this.state.name,
                          admin: this.state.admin

                        }
              this.props.SignUpUser(user) 
            } else{console.log("The passwords do not match") }
    }
    else if(this.state.isOpen){
      this.props.SignInUser(this.state)
    }
    else{
      console.log('The passwords do not match')
      display_errors(['The passwords do not match'])
    }
  }
handleChange = event => this.setState({[event.target.name]: event.target.value })

  display_activities = () => {
    let result 
      if(this.props.activities.activities){
        result = this.props.activities.activities.map(e =><li key={e}><a href={`/places?activities.title=${e}`}>{e}</a></li>)
      }
      return result
    }

   componentDidMount(){
      fetch(`${API_ROOT}/activities`)
      .then(resp => resp.json())
      .then(json =>{ 
          this.props.add_activities(json)                  
    })
   } 

  render() {
    return (
     <div className="EnTetes">
             <input type="checkbox" id="check" />
              <label htmlFor="check" className="checkbtn">
                <i className="fas fa-bars"></i>
              </label>
            <a className="LogoEvent" onClick={this.redirect}>Event</a>
            <ul className="menu-first">
              <li className="ProfilesLink lien-menu-first">
                <a className={document.location.href.includes('activities')  ? 'active' : null}>
                  Activities
                </a>
                <ul className="sous-menu">
                  {this.display_activities()}
                </ul>
              </li>
              {is_admin() ?
             ( <React.Fragment>
               <li className="lien-menu-first">
                <a href = '/new_places' className={document.location.href.includes('new_places')  ? 'active' : null}>
                  Add a place
                </a>
              </li>
              <li className="lien-menu-first">
                <a>
                  Analitycs
                </a>
              </li> 
              </React.Fragment>
              ) : null}
             { is_logged_in() ? 
             <li className="ProfilesLink lien-menu-first"> 
             <div className="img_profile" > <img src={current_user().profile_pic} className="profile_file"/> </div>
                <ul className="sous-menu">
                  <li><a href={`/users/${current_user().id}`}> <i className="fas fa-user-circle"></i> Profile</a></li>
                  <li><a href="/inbox"> <i className="far fa-paper-plane"></i> Inbox </a> </li>
                  <li><a href="/bookings"> <i className="far fa-calendar-check"></i> Bookings</a> </li>
                  <li><a>Listings</a> </li>
                  <li><a>Blog</a> </li>
                  <li>
                    <a onClick={this.logout}> 
                      <button onClick={this.logout} className="logout"> 
                        <i className="fa fa-minus-circle"></i> 
                      </button> Log out 
                    </a>
                  </li>
                </ul>
              </li> : 
              <li className="ProfilesLink lien-menu-first">
                  <a href="#" onClick={this.handleClick} className="PlaySlide">Login</a>
                  <a href="#" onClick={(e) => this.setState({isOpen1 : true})}>Sign up</a>
              </li> 
              }
            </ul>
            <Login isOpen={this.state.isOpen} onClose={(e) => this.setState({ isOpen: false })}>
              <div className="img">
                    <div className="imgSlide marche"><img src={img1} alt=""/></div>
                    <div className="imgSlide"><img src={img4} alt=""/></div>
                    <div className="imgSlide"><img src={img5} alt=""/></div>
                    <div className="imgSlide"><img src={img6} alt=""/></div>
                    <div className="imgSlide"><img src={img7} alt=""/></div>
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
                            <input type='password' placeholder="Password..." name='password' id='password' onChange={this.handleChange}/>
                            <span className="bar"></span>
                        </div>
                        
                        <div className="ChampsDiv">
                            <button>
                                <i className="fab fa-telegram-plane"></i>
                            </button>
                        </div>

                        <div className="Changement">
                            <a href="#" onClick={(e) => this.setState({isOpen1 : true, isOpen:false})}> Don't have a account ? <span>Register here</span> </a>
                        </div>
                    </form>
                </div>
            </Login>
            <SignUp isOpen1={this.state.isOpen1} onClose1={(e) => this.setState({ isOpen1: false })}>
              <div className="ConteneurForm">
                <span className="TeteConteneur">Sign Up</span>
                    <form onSubmit={this.handleSubmit} className="FormSign">
                        <div className="ChampsGroup">
                            <i className="fas fa-user"></i>
                            <input type='text' placeholder="John Doe" name='name' id='name' onChange={this.handleChange}/>
                            <span className="bar"></span>
                        </div>

                        <div className="ChampsGroup">
                            <i className="fas fa-envelope"></i>
                            <input type='email' placeholder="Email..." name='email' id='email' onChange={this.handleChange}/>
                            <span className="bar"></span>
                        </div>
                        <Errors />
                        <div className="ChampsGroup">
                            <i className="fas fa-lock"></i>
                            <input type='password' placeholder="Password..." name='password' id='password' onChange={this.handleChange}/>
                            <span className="bar"></span>
                        </div>

                        <div className="ChampsGroup">
                            <i className="fas fa-lock"></i>
                            <input type='password' placeholder="Confirm password" name='password_confirm' id='password_confirm' onChange={this.handleChange}/>
                            <span className="bar"></span>
                        </div>

                        <div className="DivStepOne">
                            <input type='checkbox' name='admin' id='admin' onChange={this.handleChange}/>
                            <label htmlFor="admin" className="InfoStepFour">Start Hosting?</label>
                        </div>
                               
                        <div className="ChampsGroup">
                            <button>
                                <i className="fab fa-telegram-plane"></i>
                            </button>
                        </div>
                            
                        <div className="Changement">
                            <a href="#" onClick={(e) => this.setState({isOpen : true, isOpen1:false})}>Already have an account ? <span>Login</span> </a>
                        </div>
                       
                    </form>
                </div>
            </SignUp>
            </div>
    )
  }
}
const mapDispatchToProps = dispatch =>  ({   
   add_activities: activities =>  dispatch({type: 'ADD_ACTIVITIES', activities: activities}),
  SignInUser: (user)=> dispatch(SignInUser(user)),
  SignUpUser: (user)=> dispatch(SignUpUser(user))
})

const mapStateToProps = state => {
  console.log(state)
 return {activities: state.activities}
}

export default connect(mapStateToProps,mapDispatchToProps)(Navbar)