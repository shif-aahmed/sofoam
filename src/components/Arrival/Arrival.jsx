import React, { useRef } from 'react';
import './Arrival.css';
import { FaHeart, FaEye, FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import product1 from '../../assets/product1.webp';
import product2 from '../../assets/product2.webp';
import product3 from '../../assets/product3.webp';

const Arrival = () => {
  const sliderRef = useRef(null);

  const products = [
    { id: 1, name: 'SOFOAM Signature Swans – Golden Serenity', price: '$45', img: product1 },
    { id: 2, name: 'SOFOAM Majestic Black Horse & Foal', price: '$30', img: product2 },
    { id: 3, name: 'SOFOAM Artisan Fawn Ash Holder', price: '$60', img: product3 },
    { id: 4, name: 'SOFOAM Signature Swans – Golden Serenity', price: '$25', img: product1 },
    { id: 5, name: 'SOFOAM Majestic Black Horse & Foal', price: '$15', img: product2 },
    { id: 6, name: 'SOFOAM Artisan Fawn Ash Holder', price: '$45', img: product3 },
    { id: 7, name: 'SOFOAM Signature Swans – Golden Serenity', price: '$30', img: product1 },
    { id: 8, name: 'SOFOAM Majestic Black Horse & Foal', price: '$60', img: product2 },
    { id: 9, name: 'SOFOAM Artisan Fawn Ash Holder', price: '$25', img: product3 },
    { id: 10, name: 'SOFOAM Signature Swans – Golden Serenity', price: '$15', img: product1 },
  ];

  const scrollLeft = () => {
    const cardWidth = sliderRef.current.querySelector('.arrival-card').offsetWidth + 16; // 16px gap
    sliderRef.current.scrollBy({ left: -cardWidth, behavior: 'smooth' });
  };

  const scrollRight = () => {
    const cardWidth = sliderRef.current.querySelector('.arrival-card').offsetWidth + 16; // 16px gap
    sliderRef.current.scrollBy({ left: cardWidth, behavior: 'smooth' });
  };

  return (
    <section className="arrival-container">
      {/* Texts */}
      <div className="arrival-texts">
        <p className="explore-text">Explore SOFOAM’s Latest Creations</p>
        <h2 className="arrival-heading">New Arrivals</h2>
        <p className="arrival-subtext">
          Elevate your living space with SOFOAM’s exquisite range of premium home décor accents.
        </p>
        <button className="shop-btn">Shop SOFOAM New Arrivals</button>
      </div>

      {/* Slider */}
      <div className="arrival-slider" ref={sliderRef}>
        {products.map((product) => (
          <div key={product.id} className="arrival-card">
            <div className="card-image-container">
              <img src={product.img} alt={product.name} className="card-image" />
              <div className="card-icons">
                <FaHeart className="wishlist-icon" />
                <FaEye className="quickview-icon" />
              </div>
            </div>
            <div className="card-details">
              <p className="product-name">{product.name}</p>
              <p className="product-price">{product.price}</p>
              <button className="quick-add-btn">Quick Add</button>
            </div>
          </div>
        ))}
      </div>

      {/* Slider buttons */}
      <div className="slider-buttons">
        <button className="slider-btn" onClick={scrollLeft}>
          <FaChevronLeft />
        </button>
        <button className="slider-btn" onClick={scrollRight}>
          <FaChevronRight />
        </button>
      </div>
    </section>
  );
};

export default Arrival;
