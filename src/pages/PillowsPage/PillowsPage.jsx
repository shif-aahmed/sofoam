import React, { useState } from "react";
import "./PillowsPage.css";
import { FaHeart, FaEye } from "react-icons/fa";
import pillowsData from "./pillowsData";

const PillowsPage = () => {
  const [selectedPillow, setSelectedPillow] = useState(null);

  return (
    <section className="pillows-container">
      {/* Page Header */}
      <div className="pillows-header">
        <h1>SOFOAM Premium Pillows</h1>
        <p>Discover our collection designed for ultimate comfort and better sleep.</p>
      </div>

      {/* Pillows Grid */}
      <div className="pillows-grid">
        {pillowsData.map((pillow) => (
          <div
            key={pillow.id}
            className="pillow-card"
            onClick={() => setSelectedPillow(pillow)}
          >
            <img src={pillow.img} alt={pillow.name} className="pillow-image" />
            <div className="pillow-details">
              <p className="pillow-name">{pillow.name}</p>
              <p className="pillow-price">{pillow.price}</p>
            </div>
            <div className="pillow-icons">
              <FaHeart className="wishlist-icon" />
              <FaEye className="view-icon" />
            </div>
          </div>
        ))}
      </div>

      {/* Pillow Modal */}
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

export default PillowsPage;
