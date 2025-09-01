import React from 'react';
import './LimitedTimeOffers.css';

// Import your existing datasets
import accessoriesData from '../../pages/AccessoriesPage/AccessoriesData';
import pillowsData from '../../pages/PillowsPage/PillowsData';
import orthoData from '../../pages/OrthoPage/Ortho.js';

const LimitedTimeOffers = () => {
  // Combine all products into one array
  const allProducts = [
    ...accessoriesData,
    ...pillowsData,
    ...orthoData,
  ];

  // Shuffle and select random items (6 in this case)
  const offerProducts = [...allProducts]
    .sort(() => Math.random() - 0.5) // Randomize order
    .slice(0, 6); // Pick 6 random products

  return (
    <section className="limited-offers-container">
      {/* Top texts */}
      <p className="offers-alert">Exclusive SOFOAM Sleep Deals — Limited Time Only!</p>
      <h2 className="offers-heading">Limited Time Offers</h2>
      <p className="offers-subtext">Premium mattresses and pillows at irresistible prices</p>

      <div className="offers-content">
        {/* Left side: dark brown info panel */}
        <div className="offers-left">
          <h3 className="offers-left-heading">Handpicked SOFOAM Comfort</h3>
          <p className="offers-left-subtext">
            Upgrade your sleep experience — grab your favorites before they're gone!
          </p>
          <button className="offers-left-btn">Shop</button>
        </div>

        {/* Right side: scrollable product grid */}
        <div className="offers-right">
          {offerProducts.map((product) => (
            <div key={product.id} className="offer-card">
              <div className="offer-card-image-container">
                <img src={product.img} alt={product.name} className="offer-card-image" />
              </div>
              <div className="offer-card-details">
                {/* Wrap name and price in a div */}
                <div>
                  <p className="offer-product-name">{product.name}</p>
                  <p className="offer-product-price">{product.price}</p>
                </div>
                {/* Quick Add button outside the inner div */}
                <button className="offer-quick-add-btn">Quick Add</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LimitedTimeOffers;
