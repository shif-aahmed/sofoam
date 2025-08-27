import React from 'react';
import './HeroSection.css';
import heroImg from '../../assets/hero-section.webp';
import card1 from '../../assets/card1.svg';
import card2 from '../../assets/card2.svg';
import card3 from '../../assets/card3.svg';
import "./HeroSection.css";
const HeroSection = () => {
  const cards = [
    { title: 'Festive Lights', image: card1 },
    { title: 'Fox Plants', image: card2 },
    { title: 'Candle Stands', image: card3 }
  ];

  return (
    <section className="hero-section">
      {/* Hero Image */}
      <div className="hero-image">
        <img src={heroImg} alt="Hero Section" />
      </div>

      {/* Scrolling text */}
<div className="hero-scroller">
  <div 
    className="scrolling-text" 
  >
    <span>#NewBeginnings</span>
    <span>By Any Product</span>
    <span>Transform Your Space With Ease</span>
    <span>#NewBeginnings</span>
    <span>By Any Product</span>
    <span>Transform Your Space With Ease</span>
  </div>
</div>


      {/* Red cards section */}
      <div className="hero-cards">
        {cards.map((card, idx) => (
          <div key={idx} className="hero-card">
            <p>{card.title}</p>
            <img src={card.image} alt={card.title} />
          </div>
        ))}
      </div>
    </section>
  );
};

export default HeroSection;
