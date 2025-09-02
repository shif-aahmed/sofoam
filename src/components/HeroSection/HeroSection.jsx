import React from 'react';
import './HeroSection.css';
import heroImg from '../../assets/hero-section.png';
import card1 from '../../assets/card1.png';
import card2 from '../../assets/card2.png';
import card3 from '../../assets/card3.png';
import "./HeroSection.css";

const HeroSection = () => {
  const cards = [
    { title: 'Premium Mattresses', image: card1 },
    { title: 'High-Density Foam', image: card2 },
    { title: 'Sleep Accessories', image: card3 }
  ];

  return (
    <section className="hero-section">
      {/* Hero Image */}
      <div className="hero-image">
        <img src={heroImg} alt="Hero Section" />
      </div>

      {/* Scrolling text */}
      <div className="hero-scroller">
        <div className="scrolling-text">
          <span>#SOFOAMComfort</span>
          <span>Experience Perfect Sleep</span>
          <span>Quality Foam for Every Home</span>
          <span>#SOFOAMComfort</span>
          <span>Experience Perfect Sleep</span>
          <span>Quality Foam for Every Home</span>
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
