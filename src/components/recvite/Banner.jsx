import React from 'react'

const Banner = () => {
  return (
    <section className="banner-section">
      <div className="banner-carousel owl-theme owl-carousel owl-dots-none">
        <div className="slide-item">
          <div className="image-layer" style={{ backgroundImage: 'url(assets/images/banner/banner-1.jpg)' }}></div>
          <div className="auto-container">
            <div className="content-box">
              <h1>The Right Candidate for your Business</h1>
              <p>There are many of passages of lorem Ipsum, but the majori have suffered alteration in some form.</p>
              <div className="btn-box">
                <a href="/" className="theme-btn-one">Discover More</a>
              </div>
            </div>
          </div>
        </div>
        <div className="slide-item">
          <div className="image-layer" style={{ backgroundImage: 'url(assets/images/banner/banner-2.jpg)' }}></div>
          <div className="auto-container">
            <div className="content-box">
              <h1>The Right Candidate for your Business</h1>
              <p>There are many of passages of lorem Ipsum, but the majori have suffered alteration in some form.</p>
              <div className="btn-box">
                <a href="/" className="theme-btn-one">Discover More</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Banner

