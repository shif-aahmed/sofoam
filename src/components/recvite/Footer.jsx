import React from 'react'

const Footer = () => {
  return (
    <footer className="main-footer">
      <div className="footer-top" style={{ backgroundImage: 'url(assets/images/background/footer-1.jpg)' }}>
        <div className="auto-container">
          <div className="footer-info clearfix">
            <div className="single-item">
              <div className="inner">
                <div className="icon-box"><i className="flaticon-mail"></i></div>
                <h6>Email</h6>
                <p><a href="mailto:needhelp@example.com">needhelp@example.com</a></p>
              </div>
            </div>
            <div className="single-item">
              <div className="inner">
                <div className="icon-box"><i className="flaticon-phone"></i></div>
                <h6>Call</h6>
                <p><a href="tel:928886660000">+ 92 888 666 0000</a></p>
              </div>
            </div>
            <div className="single-item">
              <div className="inner">
                <div className="icon-box"><i className="flaticon-address"></i></div>
                <h6>Address</h6>
                <p>Suite 20 Golden Street USA</p>
              </div>
            </div>
          </div>
          <div className="widget-section">
            <div className="row clearfix">
              <div className="col-lg-4 col-md-6 col-sm-12 footer-column">
                <div className="footer-widget logo-widget">
                  <figure className="footer-logo"><a href="/"><img src="assets/images/footer-logo.png" alt="" /></a></figure>
                  <p>Join our newsletter and get latest updates</p>
                  <form action="/" method="post">
                    <div className="form-group">
                      <input type="email" name="email" placeholder="Email Address" required="" />
                      <button><i className="fas fa-check"></i></button>
                    </div>
                  </form>
                  <ul className="social-links clearfix">
                    <li><h6>Connect:</h6></li>
                    <li><a href="/"><i className="fab fa-twitter"></i></a></li>
                    <li><a href="/"><i className="fab fa-facebook-square"></i></a></li>
                    <li><a href="/"><i className="fab fa-pinterest-p"></i></a></li>
                    <li><a href="/"><i className="fab fa-instagram"></i></a></li>
                  </ul>
                </div>
              </div>
              <div className="col-lg-2 col-md-6 col-sm-12 footer-column">
                <div className="footer-widget links-widget">
                  <div className="widget-title">
                    <h4>Explore</h4>
                  </div>
                  <div className="widget-content">
                    <ul className="links-list clearfix">
                      <li><a href="/">About</a></li>
                      <li><a href="/">Our Solutions</a></li>
                      <li><a href="/">Team Members</a></li>
                      <li><a href="/">News & Articles</a></li>
                      <li><a href="/">Contact Us</a></li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="col-lg-2 col-md-6 col-sm-12 footer-column">
                <div className="footer-widget links-widget ml-30">
                  <div className="widget-title">
                    <h4>Links</h4>
                  </div>
                  <div className="widget-content">
                    <ul className="links-list clearfix">
                      <li><a href="/">Employers</a></li>
                      <li><a href="/">Job Seekers</a></li>
                      <li><a href="/">How It Works</a></li>
                      <li><a href="/">Pricing & Plans</a></li>
                      <li><a href="/">Our Departments</a></li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-6 col-sm-12 footer-column">
                <div className="footer-widget post-widget ml-50">
                  <div className="widget-title">
                    <h4>News</h4>
                  </div>
                  <div className="post-inner">
                    <div className="post">
                      <figure className="post-thumb"><a href="/"><img src="assets/images/resource/footer-post-1.jpg" alt="" /></a></figure>
                      <h6><a href="/">How to guide to HR adviser and clients lessening</a></h6>
                      <span className="post-date">20 Aug, 2020</span>
                    </div>
                    <div className="post">
                      <figure className="post-thumb"><a href="/"><img src="assets/images/resource/footer-post-2.jpg" alt="" /></a></figure>
                      <h6><a href="/">Providing the best stuffing solutions</a></h6>
                      <span className="post-date">19 Aug, 2020</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <div className="auto-container">
          <div className="inner-box clearfix">
            <div className="copyright pull-left">
              <p>&copy; Copyright 2020 by <a href="/">Recvite</a></p>
            </div>
            <ul className="footer-nav pull-right">
              <li><a href="/">Privacy Policy</a></li>
              <li><a href="/">Terms & Conditions</a></li>
              <li><a href="/">Site Map</a></li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer

