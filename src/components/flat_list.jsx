import React from "react";
import Flat from './flat';

export default function FlatList({ flats, setSelectedFlatId, selectedFlatId }) {
  const renderList = () => {
    return flats.map(
      flat => (
        <Flat
          key={flat.id}
          flat={flat}
          setSelectedFlatId={setSelectedFlatId}
          selectedFlatId={selectedFlatId}
        />
      )
    );
  };

  return (
    <div className="flat-list">
      { renderList() }
    </div>
  );
}
