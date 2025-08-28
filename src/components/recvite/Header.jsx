import React from 'react'

const Header = () => {
  return (
    <header className="main-header style-one">
      <div className="header-top">
        <div className="top-inner clearfix">
          <ul className="info-list pull-left clearfix">
            <li><i className="flaticon-email"></i><a href="mailto:needhelp@example.com">needhelp@example.com</a></li>
            <li><i className="flaticon-telephone"></i><a href="tel:928886660000">92 888 666 0000</a></li>
            <li><i className="flaticon-pin"></i>Suite 20 Golden Street USA</li>
          </ul>
          <div className="right-column pull-right clearfix">
            <ul className="social-links clearfix">
              <li><a href="/"><i className="fab fa-facebook-square"></i></a></li>
              <li><a href="/"><i className="fab fa-twitter"></i></a></li>
              <li><a href="/"><i className="fab fa-pinterest-p"></i></a></li>
              <li><a href="/"><i className="fab fa-instagram"></i></a></li>
            </ul>
            <div className="language-box">
              <img src="assets/images/icons/flag-1.png" alt="" />
              <a href="/" className="text">English</a>
              <ul className="language-list">
                <li><a href="/">English</a></li>
                <li><a href="/">Spanish</a></li>
                <li><a href="/">Turky</a></li>
                <li><a href="/">Chiness</a></li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div className="header-lower">
        <div className="outer-box">
          <div className="logo-box">
            <figure className="logo"><a href="/"><img src="assets/images/logo.png" alt="" /></a></figure>
          </div>
          <div className="menu-area">
            <div className="mobile-nav-toggler">
              <i className="icon-bar"></i>
              <i className="icon-bar"></i>
              <i className="icon-bar"></i>
            </div>
            <nav className="main-menu navbar-expand-md navbar-light">
              <div className="collapse navbar-collapse show clearfix" id="navbarSupportedContent">
                <ul className="navigation clearfix">
                  <li className="current dropdown"><a href="/">Home</a>
                    <ul>
                      <li><a href="/">Home Page 01</a></li>
                      <li><a href="/">Home Page 02</a></li>
                      <li><a href="/">OnePage Home</a></li>
                      <li><a href="/">RTL Home</a></li>
                      <li className="dropdown"><a href="/">Header Style</a>
                        <ul>
                          <li><a href="/">Header Style 01</a></li>
                          <li><a href="/">Header Style 02</a></li>
                        </ul>
                      </li>
                    </ul>
                  </li>
                  <li className="dropdown"><a href="/">Pages</a>
                    <ul>
                      <li><a href="/">About Us</a></li>
                      <li><a href="/">Latest Projects</a></li>
                      <li><a href="/">Project Details</a></li>
                      <li><a href="/">404</a></li>
                    </ul>
                  </li>
                  <li className="dropdown"><a href="/">Our Solutions</a>
                    <ul>
                      <li><a href="/">Our Solutions</a></li>
                      <li><a href="/">HR Consulting</a></li>
                      <li><a href="/">Technology Resource</a></li>
                      <li><a href="/">Staffing Solutions</a></li>
                      <li><a href="/">Corporate Program</a></li>
                      <li><a href="/">Leadership Training</a></li>
                      <li><a href="/">Staff Management</a></li>
                    </ul>
                  </li>
                  <li className="dropdown"><a href="/">Elements</a>
                    <div className="megamenu">
                      <div className="row clearfix">
                        <div className="col-lg-4 column">
                          <ul>
                            <li><h4>Elements 1</h4></li>
                            <li><a href="/">About Block 01</a></li>
                            <li><a href="/">About Block 02</a></li>
                            <li><a href="/">Service Block 01</a></li>
                            <li><a href="/">Service Block 02</a></li>
                            <li><a href="/">Feature Block 01</a></li>
                            <li><a href="/">Feature Block 02</a></li>
                            <li><a href="/">News Block 01</a></li>
                            <li><a href="/">News Block 02</a></li>
                          </ul>
                        </div>
                        <div className="col-lg-4 column">
                          <ul>
                            <li><h4>Elements 2</h4></li>
                            <li><a href="/">Team Block 01</a></li>
                            <li><a href="/">Team Block 02</a></li>
                            <li><a href="/">Counter Block 01</a></li>
                            <li><a href="/">Counter Block 02</a></li>
                            <li><a href="/">Process Block 01</a></li>
                            <li><a href="/">Process Block 02</a></li>
                            <li><a href="/">Agency Block</a></li>
                            <li><a href="/">Skills Block</a></li>
                          </ul>
                        </div>
                        <div className="col-lg-4 column">
                          <ul>
                            <li><h4>Elements 3</h4></li>
                            <li><a href="/">Testimonial Block</a></li>
                            <li><a href="/">Clients Block</a></li>
                            <li><a href="/">CTA Block</a></li>
                            <li><a href="/">Video Block</a></li>
                            <li><a href="/">Feature Block 03</a></li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </li>
                  <li className="dropdown"><a href="/">Blog</a>
                    <ul>
                      <li><a href="/">Blog Grid</a></li>
                      <li><a href="/">Blog Standard</a></li>
                      <li><a href="/">Blog Details</a></li>
                    </ul>
                  </li>
                  <li><a href="/">Contact</a></li>
                </ul>
              </div>
            </nav>
          </div>
          <div className="menu-right-content clearfix">
            <div className="search-box-outer">
              <div className="dropdown">
                <button className="search-box-btn" type="button" id="dropdownMenu3" aria-haspopup="true" aria-expanded="false"><i className="flaticon-magnifying-glass"></i></button>
                <div className="dropdown-menu search-panel" aria-labelledby="dropdownMenu3">
                  <div className="form-container">
                    <form method="post" action="/">
                      <div className="form-group">
                        <input type="search" name="search-field" placeholder="Search...." required="" />
                        <button type="submit" className="search-btn"><span className="fas fa-search"></span></button>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
            <div className="btn-box">
              <a href="/" className="theme-btn-one">Book appointment</a>
            </div>
          </div>
        </div>
      </div>

      <div className="sticky-header">
        <div className="outer-box">
          <div className="logo-box">
            <figure className="logo"><a href="/"><img src="assets/images/logo.png" alt="" /></a></figure>
          </div>
          <div className="menu-area">
            <nav className="main-menu clearfix"></nav>
          </div>
          <div className="menu-right-content clearfix">
            <div className="search-box-outer">
              <div className="dropdown">
                <button className="search-box-btn" type="button" id="dropdownMenu4" aria-haspopup="true" aria-expanded="false"><i className="flaticon-magnifying-glass"></i></button>
                <div className="dropdown-menu search-panel" aria-labelledby="dropdownMenu3">
                  <div className="form-container">
                    <form method="post" action="/">
                      <div className="form-group">
                        <input type="search" name="search-field" placeholder="Search...." required="" />
                        <button type="submit" className="search-btn"><span className="fas fa-search"></span></button>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
            <div className="btn-box">
              <a href="/" className="theme-btn-one">Book appointment</a>
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header

