import React from 'react'
import is_logged_in from '../helper/is_logged_in'
import is_admin from '../helper/is_admin'
import current_user from '../helper/current_user'

export default function navbar() {
    const logout = () =>{
        localStorage.clear()
        window.location.reload()
      }
    return (
         <div className="EnTetes">
             
           <input type="checkbox" id="check" />
            <label className="checkbtn">
              <i className="fas fa-bars"></i>
            </label>
          <label className="LogoEvent">Event</label>
          <ul className="menu-first">
            <li className="lien-menu-first"><a href="/" className="active">Home</a></li>
            <li className="lien-menu-first"><a href="#">Activities</a></li>
            {is_admin() ? <li className="lien-menu-first">
            <a href = '/new_places' className="addPlaces">Add a place</a></li> : null}
           { is_logged_in() ? 
           <li className="ProfilesLink lien-menu-first"><a href="#">Account</a>
              <ul className="sous-menu">
                <li><a href={`users/${current_user().id}`}> <i className="fas fa-user-circle"></i>  Profile</a></li>
                <li>
                  <a onClick={logout}> 
                    <button onClick={logout} className="logout"> 
                      <i className="fa fa-times"></i> 
                    </button> Log out 
                  </a>
                </li>
              </ul>
            </li> : 
            <li className="ProfilesLink lien-menu-first">
                <a href="/login">Login</a>
                <a href="/signup">Sign up</a>
            </li> 
            
            
            }
          </ul>
          </div>
    )
}
