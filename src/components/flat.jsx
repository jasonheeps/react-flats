import React from "react";

export default function Flat({ flat, setSelectedFlatId, selectedFlatId }) {
  const {
    id,
    name,
    imageUrl,
    price,
    priceCurrency
  } = flat;

  const handleClick = () => {
    setSelectedFlatId(id);
  };

  const isActive = () => {
    return id === selectedFlatId ? 'active' : '';
  };

  return (
    <div className={`card ${isActive()}`} style={{ backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.2)), url(${imageUrl})` }}>
      <div className="card-category">{`${price} ${priceCurrency}`}</div>
      <div className="card-description">
        <h2>{name}</h2>
      </div>
      <a className="card-link" href="#" onClick={handleClick}></a>
    </div>
  );
}
