import React from "react";
import GoogleMapReact from 'google-map-react';
import Marker from './marker';

export default function Map({ center, zoom, selectedFlatCoords }) {
  const { lat, lng } = selectedFlatCoords;

  return (
    <div className="map-container">
      <GoogleMapReact
        // bootstrapURLKeys={{ key: /* YOUR KEY HERE */ }}
        defaultCenter={center}
        defaultZoom={zoom}
      >
        <Marker lat={lat} lng={lng} />
      </GoogleMapReact>
    </div>
  );
}
