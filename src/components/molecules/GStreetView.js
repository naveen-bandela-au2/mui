import React from 'react';
import ReactStreetview from 'react-streetview';
const googleMapsApiKey = 'AIzaSyB5OAichThExGAtEtQOIJ0ds6Af2AWpaps';

const GStreetView = (props) => {

		const streetViewPanoramaOptions = {
			position: {lat: props.lat, lng: props.lng},
			pov: {heading: 100, pitch: 0},
			zoom: 1
		};
       
		return (
			<div style={{
				width: '100%',
				height: '400px'
			}}>
				<ReactStreetview
					apiKey={googleMapsApiKey}
					streetViewPanoramaOptions={streetViewPanoramaOptions}
				/>
			</div>
		);
	
}
export {GStreetView};
