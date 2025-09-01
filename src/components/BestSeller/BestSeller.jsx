import React, { useRef } from 'react';
import './BestSeller.css';
import { FaHeart, FaEye, FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import bestsellers1 from './../../assets/bestsellers/bs1.webp';
import bestsellers2 from './../../assets/bestsellers/bs2.webp';
import bestsellers3 from './../../assets/bestsellers/bs3.webp';
import bestsellers4 from './../../assets/bestsellers/bs4.webp';
import bestsellers5 from './../../assets/bestsellers/bs5.webp';
import bestsellers6 from './../../assets/bestsellers/bs6.webp';
import bestsellers7 from './../../assets/bestsellers/bs7.webp';
import bestsellers8 from './../../assets/bestsellers/bs8.webp';
import bestsellers9 from './../../assets/bestsellers/bs9.webp';
import bestsellers10 from './../../assets/bestsellers/bs10.webp';

const BestSeller = () => {
  const sliderRef = useRef(null);

const products = [
  { id: 1, name: 'SoFoam Coccyx Cushion', price: 'Rs.4,320', img: bestsellers1 },
  { id: 2, name: 'SoFoam Ortho Back Care Cushion', price: 'Rs.3,870', img: bestsellers2 },
  { id: 3, name: 'SoFoam Gold Pillow', price: 'Rs.1,800', img: bestsellers3 },
  { id: 4, name: 'SoFoam Contour Pillow', price: 'Rs.4,230', img: bestsellers4 },
  { id: 5, name: 'SoFoam Lumbar Support Cushion', price: 'Rs.7,155', img: bestsellers5 },
  { id: 6, name: 'SoFoam Ultra Waterproof Protector', price: 'Rs.7,100', img: bestsellers6 },
  { id: 7, name: 'SoFoam Ring Cushion', price: 'Rs.4,320', img: bestsellers7 },
  { id: 8, name: 'SoFoam Ortho Knee Pillow', price: 'Rs.1,935', img: bestsellers8 },
  { id: 9, name: 'SoFoam Deluxe Jai Namaz', price: 'Rs.5,000', img: bestsellers9 },
  { id: 10, name: 'SoFoam Baby Nursing Pillow', price: 'Rs.4,500', img: bestsellers10 },
];;

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
  <p className="explore-text">Experience SOFOAM’s Comfort Essentials</p>
  <h2 className="arrival-heading">Best Sellers</h2>
  <p className="arrival-subtext">
    Upgrade your sleep and relaxation with SOFOAM’s most-loved pillows, mattresses, and bedding—crafted for lasting comfort and support.
  </p>
  <button className="shop-btn">SOFOAM Best Sellers</button>
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
