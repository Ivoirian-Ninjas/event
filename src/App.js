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
import navbar from './components/navbar'
function App() {
 
  return (

    <Router>
       <div className='ui container'>

         {/* This the navbar */}
         {!window.location.href.includes('login') && !window.location.href.includes('signup') ? navbar(): null}
         

        
         {/* The user will only be allowed to view the home/login/signup page if he/she is not logged in */}
        { (!window.location.href.includes('login') && !window.location.href.includes('signup')) && !is_logged_in() ? <Redirect to={{ pathname: "/"}} /> : null}

        {/* This logic will redirect the user to the home page after the login or signup step */}
        { (window.location.href.includes('signup') || window.location.href.includes('login')) && is_logged_in() ? <Redirect to={{pathname: '/'}} /> : null}

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
