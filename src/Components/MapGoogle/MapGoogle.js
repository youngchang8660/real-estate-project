import React from "react";
import { Map, InfoWindow, Marker, GoogleApiWrapper } from "google-maps-react";
import './MapGoogle.css'


const MapGoogle = (props) => {

  console.log(props)
  return (
    <div className='map-body'>
      <Map 
        google={props.google} 
        zoom={14} 
        initialCenter={{
          lat: props.house.lat,
          lng: props.house.lng
        }}
      >
        <Marker onClick={props.onMarkerClick} name={"Current location"} />

        <InfoWindow onClose={props.onInfoWindowClose}>
        </InfoWindow>
      </Map>
    </div>
  );
};

export default GoogleApiWrapper({
    apiKey: ("AIzaSyCdMBNLfEOfAxljFF61_VMobO1rafB4J84")
  })(MapGoogle)

