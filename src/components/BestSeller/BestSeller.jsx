import React, { useRef } from 'react';
import './BestSeller.css';
import { FaHeart, FaEye, FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import product1 from '../../assets/product1.webp';
import product2 from '../../assets/product2.webp';
import product3 from '../../assets/product3.webp';

const BestSeller = () => {
  const sliderRef = useRef(null);

  const products = [
    { id: 1, name: 'Obsidian Embrace: The Swans of Golden Light', price: '$45', img: product1 },
    { id: 2, name: 'Sleek Black Horse and Foal Sculpture', price: '$30', img: product2 },
    { id: 3, name: 'Creative Fawn Ash Holder', price: '$60', img: product3 },
    { id: 4, name: 'Obsidian Embrace: The Swans of Golden Light', price: '$25', img: product1 },
    { id: 5, name: 'Sleek Black Horse and Foal Sculpture', price: '$15', img: product2 },
    { id: 6, name: 'Creative Fawn Ash Holder', price: '$45', img: product3 },
    { id: 7, name: 'Obsidian Embrace: The Swans of Golden Light', price: '$30', img: product1 },
    { id: 8, name: 'Sleek Black Horse and Foal Sculpture', price: '$60', img: product2 },
    { id: 9, name: 'Creative Fawn Ash Holder', price: '$25', img: product3 },
    { id: 10, name: 'Obsidian Embrace: The Swans of Golden Light', price: '$15', img: product1 },
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
        <p className="explore-text">Most Loved Home Decor Picks</p>
        <h2 className="arrival-heading">Best Sellers</h2>
        <p className="arrival-subtext">
            Elevate your space effortlessly with the mostcoveted pieces, celebrated for their style and functionality at ALFA DECOR
        </p>
        <button className="shop-btn">Shop Best Sellers</button>
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

export default BestSeller;
