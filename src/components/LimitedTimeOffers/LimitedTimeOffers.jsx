import React from 'react';
import './LimitedTimeOffers.css';
import product1 from '../../assets/product1.webp';
import product2 from '../../assets/product2.webp';
import product3 from '../../assets/product3.webp';

const LimitedTimeOffers = () => {
  const offerProducts = [
    { id: 1, name: 'Obsidian Embrace', price: '$45', img: product1 },
    { id: 2, name: 'Sleek Black Horse', price: '$30', img: product2 },
    { id: 3, name: 'Creative Fawn Ash Holder', price: '$60', img: product3 },
    { id: 4, name: 'Obsidian Embrace', price: '$25', img: product1 },
    { id: 5, name: 'Sleek Black Horse', price: '$15', img: product2 },
    { id: 6, name: 'Creative Fawn Ash Holder', price: '$45', img: product3 },
  ];

  return (
    <section className="limited-offers-container">
      {/* Top texts */}
      <p className="offers-alert">Don't miss out — These deals won't last!</p>
      <h2 className="offers-heading">Limited Time Offers</h2>
      <p className="offers-subtext">Explore exclusive decor picks at special prices</p>

      <div className="offers-content">
        {/* Left side: dark brown info panel */}
        <div className="offers-left">
          <h3 className="offers-left-heading">Handpicked, Time Limited, Designed to elevate</h3>
          <p className="offers-left-subtext">
             your space — grab your favorites before they are gone!
          </p>
          <button className="offers-left-btn">Click to Shop</button>
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
