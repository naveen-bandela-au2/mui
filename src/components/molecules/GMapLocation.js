
import React from "react";
import {
  withGoogleMap,
  withScriptjs,
  GoogleMap,
  Marker,
  InfoWindow
} from "react-google-maps";

var API_Key = "AIzaSyB5OAichThExGAtEtQOIJ0ds6Af2AWpaps";


function Map(prop) {
  let props={}
props.lat=12.9089771
props.lng=77.6286664
props.centerName="klay schools"
  return (
    <GoogleMap defaultZoom={12} defaultCenter={{ lat:props.lat, lng: props.lng }}>
      <Marker
        position={{
          lat: props.lat,
          lng: props.lng
        }}
      />

      <InfoWindow
        defaultVisible={true}
        position={{
          lat: props.lat,
          lng: props.lng
        }}
      >
        <div>
          <h4>{props.centerName}</h4>
        </div>
      </InfoWindow>
    </GoogleMap>
  );
}

const MapWrapped = withScriptjs(withGoogleMap(Map));

export const GMapLocation=()=> {
  return (
    <div style={{ width: "30vw", height: "50vh" }}>
      <MapWrapped
        googleMapURL={`https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places&key=${API_Key}`}
        loadingElement={<div style={{ height: `100%` }} />}
        containerElement={<div style={{ height: `100%` }} />}
        mapElement={<div style={{ height: `100%` }} />}
      />
    </div>
  );
}




