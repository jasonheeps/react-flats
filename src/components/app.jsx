import React, { useState } from "react";
import FlatList from './flat_list';
import Map from './map';

import flats from '../../data/flats';

export default function App() {
  const [selectedFlatId, setSelectedFlatId] = useState(flats[0].id);
  const center = {
    lat: 48.885707,
    lng: 2.343543
  };
  const zoom = 12;
  const coords = () => {
    return { lat: flats[selectedFlatId].lat, lng: flats[selectedFlatId].lng };
  };

  return (
    <div className="page-container">
      <FlatList
        flats={flats}
        setSelectedFlatId={setSelectedFlatId}
        selectedFlatId={selectedFlatId}
      />

      <Map center={center} zoom={zoom} selectedFlatCoords={coords()} />
    </div>
  );
}
