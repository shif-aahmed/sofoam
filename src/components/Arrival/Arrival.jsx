import React, { useRef } from 'react';
import './Arrival.css';
import { FaHeart, FaEye, FaChevronLeft, FaChevronRight } from 'react-icons/fa';

// Import your existing data files
import accessoriesData from '../../pages/AccessoriesPage/AccessoriesData';
import pillowsData from '../../pages/PillowsPage/PillowsData';
import orthoData from '../../pages/OrthoPage/Ortho.js';

const Arrival = () => {
  const sliderRef = useRef(null);

  // Helper: Get unique random items from an array
  const getUniqueRandomItems = (arr, count) => {
    const uniqueItems = Array.from(new Set(arr.map(item => item.id)))
      .map(id => arr.find(item => item.id === id)); // ensure uniqueness by id
    return [...uniqueItems].sort(() => 0.5 - Math.random()).slice(0, count);
  };

  // Fetch unique random items from each dataset
  const randomAccessories = getUniqueRandomItems(accessoriesData, 4);
  const randomPillows = getUniqueRandomItems(pillowsData, 3);
  const randomOrtho = getUniqueRandomItems(orthoData, 3);

  // Merge all and remove duplicates across datasets
  const allProducts = [...randomAccessories, ...randomPillows, ...randomOrtho];
  const uniqueMergedProducts = Array.from(new Map(allProducts.map(item => [item.id, item])).values());

  // Shuffle the final unique list
  const products = uniqueMergedProducts.sort(() => 0.5 - Math.random());

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
      <div className="arrival-texts">
        <p className="explore-text">Discover SOFOAM’s Sleep Innovations</p>
        <h2 className="arrival-heading">New Arrivals</h2>
        <p className="arrival-subtext">
          Experience ultimate comfort with SOFOAM’s premium mattresses, pillows, and bedding essentials—designed for perfect sleep and lasting support.
        </p>
        <button className="shop-btn">SOFOAM New Arrivals</button>
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
