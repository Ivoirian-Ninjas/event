import React from 'react'
import {Map, InfoWindow, Marker, GoogleApiWrapper} from 'google-maps-react';


 function MyMap(props) {
    return (
            <Map {...props}/>                       
            
    )
}
export default GoogleApiWrapper({
    apiKey: ("AIzaSyCdKNMjsiDMW07_NEEBlzhRlArElUUFRXQ")
  })(MyMap)