import React from 'react';
import './assets/App.css';
import './views/user/SignUp'
import SignUp from './views/user/SignUp';
import Login from './views/user/Login'
import { connect } from 'react-redux';
import {
  BrowserRouter as Router,
  Route,
  Redirect
} from "react-router-dom";

function App() {
  return (
    <Router>
       <div className='ui container'>
        { !window.location.href.includes('Signup')  && !localStorage.getItem('user_id') ? <Redirect to={{ pathname: "/login"}} /> : null}
          <Route path='/signup' render={renderProps => <SignUp /> }/>
          <Route path='/login' render={renderProps => <Login />} />

      </div>
    </Router>
   
  );
}
const mapStateToProp = (state) => ({
  user: state.user
})
export default connect(mapStateToProp)(App);
