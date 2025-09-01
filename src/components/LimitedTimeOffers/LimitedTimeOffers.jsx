import React from 'react';
import './LimitedTimeOffers.css';
import product1 from '../../assets/product1.webp';
import product2 from '../../assets/product2.webp';
import product3 from '../../assets/product3.webp';

const LimitedTimeOffers = () => {
  const offerProducts = [
    { id: 1, name: 'SOFOAM Luxe Comfort Pillow', price: '$45', img: product1 },
    { id: 2, name: 'SOFOAM Orthopedic Mattress', price: '$30', img: product2 },
    { id: 3, name: 'SOFOAM Premium Neck Rest', price: '$60', img: product3 },
    { id: 4, name: 'SOFOAM Luxe Comfort Pillow', price: '$25', img: product1 },
    { id: 5, name: 'SOFOAM Orthopedic Mattress', price: '$15', img: product2 },
    { id: 6, name: 'SOFOAM Premium Neck Rest', price: '$45', img: product3 },
    
  ];

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
