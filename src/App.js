import React from 'react';
import './assets/App.css';
import './views/user/SignUp'
import SignUp from './views/user/SignUp';
import Login from './views/user/Login'
import Home from './views/Home'
import { connect } from 'react-redux';
import {
  BrowserRouter as Router,
  Route,
  Redirect
} from "react-router-dom";

import Index from './views/places/index'
import Add_Place from './views/places/new'
import Place_Show from './views/places/show'

import Profile from './views/user/Profile'

import current_user from './helper/current_user'
import is_logged_in from './helper/is_logged_in'
import is_admin from './helper/is_admin'
function App() {
  const logout = () =>{
    localStorage.clear()
    window.location.reload()
  }
  return (
    <Router>
       <div className='ui container'>

         {/* This button is to loggout */}
         {is_logged_in() ?
          <div className="EnTetes">
           <input type="checkbox" id="check" />
            <label for="check" className="checkbtn">
              <i class="fas fa-bars"></i>
            </label>
          <label className="LogoEvent">Event</label>
          <ul className="menu-first">
            <li className="lien-menu-first"><a href="./App.js" className="active">Home</a></li>
            <li className="lien-menu-first"><a href="#">Activities</a></li>
            {is_admin() ? <li className="lien-menu-first">
            <a href = '/new_places' className="addPlaces">Add a place</a></li> : null}
            <li className="ProfilesLink lien-menu-first"><a href="#">Account</a>
              <ul className="sous-menu">
                <li><a href="#"> <i className="fas fa-user-circle"></i>  Profile</a></li>
                <li>
                  <a onClick={logout}> 
                    <button onClick={logout} className="logout"> 
                      <i className="fa fa-times"></i> 
                    </button> Log out 
                  </a>
                </li>
              </ul>
            </li>
          </ul>
          </div>
          : null}

        
         {/* If the user is not logged in he/she will be redirected to the login page */}
        { !window.location.href.includes('Signup')  && !is_logged_in() ? <Redirect to={{ pathname: "/login"}} /> : null}

        {/* This logic will redirect the user to the home page after the login or signup step */}
        { (window.location.href.includes('Signup') || window.location.href.includes('login')) && is_logged_in() ? <Redirect to={{pathname: '/'}} /> : null}

          {/*These are the routes for the authentication process*/}
          <Route path='/signup' render={renderProps => <SignUp /> }/>
          <Route path='/login' render={renderProps => <Login />} />
      

          {/*Home page */}
          <Route exact path='/' render={renderProps => <Home /> }/>

          {/*These routes are the routes for the place */}
          <Route  exact path='/places' render={renderProps => <Index {...renderProps}/>} />
          <Route   exact path='/new_places' render={renderProps => <Add_Place />} />
          <Route  path='/places/:id' render={renderProps => <Place_Show/>} />

          {/* user profile */}
          <Route path='/users/:id' render={renderProps => <Profile/>} />

          
      </div>
    </Router>
   
  );
}
const mapStateToProp = (state) => ({
  user: state.user
})
export default connect(mapStateToProp)(App);
