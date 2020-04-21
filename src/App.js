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
import Booking_index from './views/places/booking/index'
import Index from './views/places/index'
import Add_Place from './views/places/new'
import Place_Show from './views/places/show'
import Profile from './views/user/Profile'
import is_logged_in from './helper/is_logged_in'

import Navbar from './components/navbar'
import Booking_show from './views/places/booking/booking_show';
import { GoogleApiWrapper} from 'google-maps-react';
import Inbox from './views/messages/inbox';
import Footer from "./components/footer"




function App() {
  return (

    <Router>
       <div className='ui container'>

         {/* This the navbar */}
         <Navbar />
         
         {/* The user will only be allowed to view the home/login/signup page if he/she is not logged in */}
        { (!window.location.href.includes('#') && !is_logged_in() ) ? <Redirect to={{ pathname: "/"}} /> : null}

          {/*Home page */}
          <Route exact path='/' render={renderProps => <Home {...renderProps} /> } />

          {/*These routes are the routes for the place */}
          <Route  exact path='/places' render={renderProps => <Index {...renderProps}/>} />
          <Route   exact path='/new_places' render={renderProps => <Add_Place />} />
          <Route  path='/places/:id' render={renderProps => <Place_Show {...renderProps}/>} />

          {/* user profile */}
          <Route path='/users/:id' render={renderProps => <Profile/>} />

          {/*These routes are the routes for the booking process */}
          <Route path='/bookings/:id' render={renderProps => <Booking_show {...renderProps}/>}  />
          <Route path='/bookings/' render={renderProps => <Booking_index {...renderProps}/>}  />

          {/*These routes are for messages */}
          <Route path='/inbox/' render={renderProps => <Inbox {...renderProps}/>}  />

          
      </div>
    </Router>
   
  );
}
const mapStateToProp = (state) => ({
  user: state.user
})
export default GoogleApiWrapper({
  apiKey: ("AIzaSyCdKNMjsiDMW07_NEEBlzhRlArElUUFRXQ")
})(connect(mapStateToProp)(App))