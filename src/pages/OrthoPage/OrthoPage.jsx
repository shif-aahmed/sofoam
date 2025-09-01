import React, { useState } from "react";
import "./OrthoPage.css";
import { FaHeart, FaEye } from "react-icons/fa";
import OrthoData from "./Ortho.js";

const OrthoPage = () => {
  const [selectedPillow, setSelectedPillow] = useState(null);

  return (
    <section className="pillows-container">
      {/* Page Header */}
      <div className="pillows-header">
        <h1>SOFOAM Ortho Collection</h1>
        <p>Discover our orthopedic mattresses designed for superior support and comfort.</p>
      </div>

      {/* Ortho Grid */}
      <div className="pillows-grid">
        {OrthoData.map((item) => (
          <div
            key={item.id}
            className="pillow-card"
            onClick={() => setSelectedPillow(item)}
          >
            <img src={item.img} alt={item.name} className="pillow-image" />
            <div className="pillow-details">
              <p className="pillow-name">{item.name}</p>
              <p className="pillow-price">{item.price}</p>
            </div>
            <div className="pillow-icons">
              <FaHeart className="wishlist-icon" />
              <FaEye className="view-icon" />
            </div>
          </div>
        ))}
      </div>

      {/* Item Modal */}
      {selectedPillow && (
        <div className="pillow-modal">
          <div className="pillow-modal-content">
            <img src={selectedPillow.img} alt={selectedPillow.name} />
            <h2>{selectedPillow.name}</h2>
            <p>{selectedPillow.description}</p>
            <p className="pillow-price">{selectedPillow.price}</p>
            <button onClick={() => setSelectedPillow(null)}>Close</button>
          </div>
        </div>
      )}
    </section>
  );
};

export default OrthoPage;
