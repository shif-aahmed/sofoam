import React from 'react'

const Recvite = () => {
  return (
    <div className="boxed_wrapper">
      {/* preloader */}
      <div className="preloader"></div>

      {/* main header */}
      <header className="main-header style-one">
        {/* header-top */}
        <div className="header-top">
          <div className="top-inner clearfix">
            <ul className="info-list pull-left clearfix">
              <li>
                <i className="flaticon-email"></i>
                <a href="mailto:needhelp@example.com">needhelp@example.com</a>
              </li>
              <li>
                <i className="flaticon-telephone"></i>
                <a href="tel:928886660000">92 888 666 0000</a>
              </li>
              <li>
                <i className="flaticon-pin"></i>Suite 20 Golden Street USA
              </li>
            </ul>
            <div className="right-column pull-right clearfix">
              <ul className="social-links clearfix">
                <li>
                  <a href="#"><i className="fab fa-facebook-square"></i></a>
                </li>
                <li>
                  <a href="#"><i className="fab fa-twitter"></i></a>
                </li>
                <li>
                  <a href="#"><i className="fab fa-pinterest-p"></i></a>
                </li>
                <li>
                  <a href="#"><i className="fab fa-instagram"></i></a>
                </li>
              </ul>
              <div className="language-box">
                <img src="https://placehold.co/24x16/png" alt="flag" />
                <a href="#" className="text">English</a>
                <ul className="language-list">
                  <li><a href="#">English</a></li>
                  <li><a href="#">Spanish</a></li>
                  <li><a href="#">Turky</a></li>
                  <li><a href="#">Chiness</a></li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* header-lower */}
        <div className="header-lower">
          <div className="outer-box">
            <div className="logo-box">
              <figure className="logo">
                <a href="#">
                  <img src="https://placehold.co/160x40/png?text=Logo" alt="logo" />
                </a>
              </figure>
            </div>
            <div className="menu-area">
              {/*Mobile Navigation Toggler*/}
              <div className="mobile-nav-toggler">
                <i className="icon-bar"></i>
                <i className="icon-bar"></i>
                <i className="icon-bar"></i>
              </div>
              <nav className="main-menu navbar-expand-md navbar-light">
                <div className="collapse navbar-collapse show clearfix" id="navbarSupportedContent">
                  <ul className="navigation clearfix">
                    <li className="current dropdown"><a href="#">Home</a>
                      <ul>
                        <li><a href="#">Home Page 01</a></li>
                        <li><a href="#">Home Page 02</a></li>
                        <li><a href="#">OnePage Home</a></li>
                        <li><a href="#">RTL Home</a></li>
                        <li className="dropdown"><a href="#">Header Style</a>
                          <ul>
                            <li><a href="#">Header Style 01</a></li>
                            <li><a href="#">Header Style 02</a></li>
                          </ul>
                        </li>
                      </ul>
                    </li>
                    <li className="dropdown"><a href="#">Pages</a>
                      <ul>
                        <li><a href="#">About Us</a></li>
                        <li><a href="#">Latest Projects</a></li>
                        <li><a href="#">Project Details</a></li>
                        <li><a href="#">404</a></li>
                      </ul>
                    </li>
                    <li className="dropdown"><a href="#">Our Solutions</a>
                      <ul>
                        <li><a href="#">Our Solutions</a></li>
                        <li><a href="#">HR Consulting</a></li>
                        <li><a href="#">Technology Resource</a></li>
                        <li><a href="#">Staffing Solutions</a></li>
                        <li><a href="#">Corporate Program</a></li>
                        <li><a href="#">Leadership Training</a></li>
                        <li><a href="#">Staff Management</a></li>
                      </ul>
                    </li>
                    <li className="dropdown"><a href="#">Elements</a>
                      <div className="megamenu">
                        <div className="row clearfix">
                          <div className="col-lg-4 column">
                            <ul>
                              <li><h4>Elements 1</h4></li>
                              <li><a href="#">About Block 01</a></li>
                              <li><a href="#">About Block 02</a></li>
                              <li><a href="#">Service Block 01</a></li>
                              <li><a href="#">Service Block 02</a></li>
                              <li><a href="#">Feature Block 01</a></li>
                              <li><a href="#">Feature Block 02</a></li>
                              <li><a href="#">News Block 01</a></li>
                              <li><a href="#">News Block 02</a></li>
                            </ul>
                          </div>
                          <div className="col-lg-4 column">
                            <ul>
                              <li><h4>Elements 2</h4></li>
                              <li><a href="#">Team Block 01</a></li>
                              <li><a href="#">Team Block 02</a></li>
                              <li><a href="#">Counter Block 01</a></li>
                              <li><a href="#">Counter Block 02</a></li>
                              <li><a href="#">Process Block 01</a></li>
                              <li><a href="#">Process Block 02</a></li>
                              <li><a href="#">Agency Block</a></li>
                              <li><a href="#">Skills Block</a></li>
                            </ul>
                          </div>
                          <div className="col-lg-4 column">
                            <ul>
                              <li><h4>Elements 3</h4></li>
                              <li><a href="#">Testimonial Block</a></li>
                              <li><a href="#">Clients Block</a></li>
                              <li><a href="#">CTA Block</a></li>
                              <li><a href="#">Video Block</a></li>
                              <li><a href="#">Feature Block 03</a></li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </li>
                    <li className="dropdown"><a href="#">Blog</a>
                      <ul>
                        <li><a href="#">Blog Grid</a></li>
                        <li><a href="#">Blog Standard</a></li>
                        <li><a href="#">Blog Details</a></li>
                      </ul>
                    </li>
                    <li><a href="#">Contact</a></li>
                  </ul>
                </div>
              </nav>
            </div>
            <div className="menu-right-content clearfix">
              <div className="search-box-outer">
                <div className="dropdown">
                  <button className="search-box-btn" type="button" id="dropdownMenu3" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"><i className="flaticon-magnifying-glass"></i></button>
                  <div className="dropdown-menu search-panel" aria-labelledby="dropdownMenu3">
                    <div className="form-container">
                      <form method="post" action="#">
                        <div className="form-group">
                          <input type="search" name="search-field" defaultValue="" placeholder="Search...." required />
                          <button type="submit" className="search-btn"><span className="fas fa-search"></span></button>
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
              <div className="btn-box">
                <a href="#" className="theme-btn-one">Book appointment</a>
              </div>
            </div>
          </div>
        </div>

        {/*sticky Header*/}
        <div className="sticky-header">
          <div className="outer-box">
            <div className="logo-box">
              <figure className="logo"><a href="#"><img src="https://placehold.co/140x36/png?text=Logo" alt="logo" /></a></figure>
            </div>
            <div className="menu-area">
              <nav className="main-menu clearfix">
                {/*Keep This Empty / Menu will come through Javascript*/}
              </nav>
            </div>
            <div className="menu-right-content clearfix">
              <div className="search-box-outer">
                <div className="dropdown">
                  <button className="search-box-btn" type="button" id="dropdownMenu4" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"><i className="flaticon-magnifying-glass"></i></button>
                  <div className="dropdown-menu search-panel" aria-labelledby="dropdownMenu3">
                    <div className="form-container">
                      <form method="post" action="#">
                        <div className="form-group">
                          <input type="search" name="search-field" defaultValue="" placeholder="Search...." required />
                          <button type="submit" className="search-btn"><span className="fas fa-search"></span></button>
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
              <div className="btn-box">
                <a href="#" className="theme-btn-one">Book appointment</a>
              </div>
            </div>
          </div>
        </div>
      </header>
      {/* main-header end */}

      {/* Mobile Menu */}
      <div className="mobile-menu">
        <div className="menu-backdrop"></div>
        <div className="close-btn"><i className="fas fa-times"></i></div>

        <nav className="menu-box">
          <div className="nav-logo"><a href="#"><img src="https://placehold.co/140x36/png?text=Logo" alt="logo" title="" /></a></div>
          <div className="menu-outer"></div>
          <div className="contact-info">
            <h4>Contact Info</h4>
            <ul>
              <li>Chicago 12, Melborne City, USA</li>
              <li><a href="tel:+8801682648101">+88 01682648101</a></li>
              <li><a href="mailto:info@example.com">info@example.com</a></li>
            </ul>
          </div>
          <div className="social-links">
            <ul className="clearfix">
              <li><a href="#"><span className="fab fa-twitter"></span></a></li>
              <li><a href="#"><span className="fab fa-facebook-square"></span></a></li>
              <li><a href="#"><span className="fab fa-pinterest-p"></span></a></li>
              <li><a href="#"><span className="fab fa-instagram"></span></a></li>
              <li><a href="#"><span className="fab fa-youtube"></span></a></li>
            </ul>
          </div>
        </nav>
      </div>
      {/* End Mobile Menu */}

      {/* banner-section */}
      <section className="banner-section">
        <div className="banner-carousel owl-theme owl-carousel owl-dots-none">
          <div className="slide-item">
            <div className="image-layer" style={{ backgroundImage: "url('https://placehold.co/1600x700')" }}></div>
            <div className="auto-container">
              <div className="content-box">
                <h1>The Right Candidate for your Business</h1>
                <p>There are many of passages of lorem Ipsum, but the majori have suffered alteration in some form.</p>
                <div className="btn-box">
                  <a href="#" className="theme-btn-one">Discover More</a>
                </div>
              </div>
            </div>
          </div>
          <div className="slide-item">
            <div className="image-layer" style={{ backgroundImage: "url('https://placehold.co/1600x700')" }}></div>
            <div className="auto-container">
              <div className="content-box">
                <h1>The Right Candidate for your Business</h1>
                <p>There are many of passages of lorem Ipsum, but the majori have suffered alteration in some form.</p>
                <div className="btn-box">
                  <a href="#" className="theme-btn-one">Discover More</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* banner-section end */}

      {/* feature-section */}
      <section className="feature-section bg-color-1 centred">
        <div className="auto-container">
          <div className="row clearfix">
            <div className="col-lg-4 col-md-6 col-sm-12 feature-block">
              <div className="feature-block-one">
                <div className="inner-box">
                  <div className="icon-box"><i className="flaticon-mission"></i></div>
                  <h2>Leadership <br />Training</h2>
                  <figure className="image-box">
                    <img src="https://placehold.co/600x400" alt="feature" />
                    <a href="#" className="theme-btn-one">Read more</a>
                  </figure>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-12 feature-block">
              <div className="feature-block-one">
                <div className="inner-box">
                  <div className="icon-box"><i className="flaticon-creative-idea"></i></div>
                  <h2>Improving <br />Resources</h2>
                  <figure className="image-box">
                    <img src="https://placehold.co/600x400" alt="feature" />
                    <a href="#" className="theme-btn-one">Read more</a>
                  </figure>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-12 feature-block">
              <div className="feature-block-one">
                <div className="inner-box">
                  <div className="icon-box"><i className="flaticon-solution"></i></div>
                  <h2>Recruitement <br />Solutions</h2>
                  <figure className="image-box">
                    <img src="https://placehold.co/600x400" alt="feature" />
                    <a href="#" className="theme-btn-one">Read more</a>
                  </figure>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* feature-section end */}

      <div className="quote-box">
        <div className="auto-container">
          <div className="inner-box">
            <div className="icon-box">"</div>
            <p>Train people quickly well with quality business. So they highly efficient manufactured products. We can help you build.</p>
          </div>
        </div>
      </div>

      {/* about-section */}
      <section className="about-section">
        <div className="auto-container">
          <div className="row clearfix">
            <div className="col-lg-6 col-md-12 col-sm-12 image-column">
              <div className="image_block_1">
                <div className="image-box">
                  <figure className="image image-1"><img src="https://placehold.co/540x480" alt="about 1" /></figure>
                  <figure className="image image-2"><img src="https://placehold.co/360x360" alt="about 2" /></figure>
                  <div className="image-content">
                    <div className="icon-box"><i className="flaticon-recruitment"></i></div>
                    <h5>Find Perfect Candidate</h5>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-6 col-md-12 col-sm-12 content-column">
              <div className="content_block_1">
                <div className="content-box">
                  <div className="sec-title">
                    <p>Welcome to Agency</p>
                    <h2>Best Quality Recruitment Staffing Agency</h2>
                  </div>
                  <div className="text">
                    <p>Lorem ipsum is simply free text dolor sit amet, consectetur notted adipisicing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua lonm andhn.</p>
                  </div>
                  <div className="inner-box clearfix">
                    <div className="single-item">
                      <h5><span>01</span>Strategic Partners</h5>
                      <p>Lorem ipsum dolor sited is amet consectetur notted.</p>
                    </div>
                    <div className="single-item">
                      <h5><span>02</span>Sourcing the Best</h5>
                      <p>Lorem ipsum dolor sited is amet consectetur notted.</p>
                    </div>
                  </div>
                  <div className="lower-box">
                    <div className="author-box">
                      <figure className="author-thumb"><img src="https://placehold.co/60x60" alt="author" /></figure>
                      <figure className="signature-box"><img src="https://placehold.co/140x40?text=Sign" alt="signature" /></figure>
                      <span className="designation">CEO & CO Founder</span>
                    </div>
                    <div className="experienct-box">
                      <div className="inner">
                        <h2>38</h2>
                        <p>Years of Experience</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* about-section end */}

      {/* service-section */}
      <section className="service-section sec-pad bg-color-1">
        <div className="auto-container">
          <div className="sec-title centred">
            <p>Our All Services List</p>
            <h2>Outsourced HR Services</h2>
          </div>
          <div className="row clearfix">
            <div className="col-lg-4 col-md-6 col-sm-12 service-block">
              <div className="service-block-one wow fadeInUp animated" data-wow-delay="00ms" data-wow-duration="1500ms">
                <div className="inner-box">
                  <figure className="image-box">
                    <img src="https://placehold.co/600x400" alt="service" />
                    <span className="category">Management</span>
                    <i className="flaticon-consulting"></i>
                  </figure>
                  <div className="lower-content">
                    <h3><a href="#">HR Consulting</a></h3>
                    <p>Lorem ipsum dolor sit amet, consectetur notted adipisicing elit sed do eiusmod.</p>
                    <div className="link"><a href="#">Read More</a></div>
                    <div className="light-icon"><i className="flaticon-consulting"></i></div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-12 service-block">
              <div className="service-block-one wow fadeInUp animated" data-wow-delay="300ms" data-wow-duration="1500ms">
                <div className="inner-box">
                  <figure className="image-box">
                    <img src="https://placehold.co/600x400" alt="service" />
                    <span className="category">Resources</span>
                    <i className="flaticon-controller"></i>
                  </figure>
                  <div className="lower-content">
                    <h3><a href="#">Technology Resource</a></h3>
                    <p>Lorem ipsum dolor sit amet, consectetur notted adipisicing elit sed do eiusmod.</p>
                    <div className="link"><a href="#">Read More</a></div>
                    <div className="light-icon"><i className="flaticon-controller"></i></div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-12 service-block">
              <div className="service-block-one wow fadeInUp animated" data-wow-delay="600ms" data-wow-duration="1500ms">
                <div className="inner-box">
                  <figure className="image-box">
                    <img src="https://placehold.co/600x400" alt="service" />
                    <span className="category">Solutions</span>
                    <i className="flaticon-policy"></i>
                  </figure>
                  <div className="lower-content">
                    <h3><a href="#">Staffing Solutions</a></h3>
                    <p>Lorem ipsum dolor sit amet, consectetur notted adipisicing elit sed do eiusmod.</p>
                    <div className="link"><a href="#">Read More</a></div>
                    <div className="light-icon"><i className="flaticon-policy"></i></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* service-section end */}

      {/* agency-section */}
      <section className="agency-section" style={{ backgroundImage: "url('https://placehold.co/1600x700')" }}>
        <div className="auto-container">
          <div className="row align-items-center clearfix">
            <div className="col-lg-6 col-md-12 col-sm-12 content-column">
              <div className="content_block_2">
                <div className="content-box">
                  <div className="sec-title light">
                    <p>Learn About Agency</p>
                    <h2>We’re Reliable & Cost Efficiant Recruitment Agency</h2>
                  </div>
                  <div className="btn-box"><a href="#" className="theme-btn-one">Discover More</a></div>
                </div>
              </div>
            </div>
            <div className="col-lg-6 col-md-12 col-sm-12 content-column">
              <div className="content_block_3">
                <div className="content-box">
                  <div className="tabs-box">
                    <div className="tab-btn-box">
                      <ul className="tab-btns tab-buttons clearfix">
                        <li className="tab-btn active-btn" data-tab="#tab-1">For Employers</li>
                        <li className="tab-btn" data-tab="#tab-2">For Employees</li>
                      </ul>
                    </div>
                    <div className="tabs-content">
                      <div className="tab active-tab" id="tab-1">
                        <div className="inner-box">
                          <figure className="image-box"><img src="https://placehold.co/540x360" alt="agency" /></figure>
                          <div className="text">
                            <p>There are many simply free text available variations of passages of but the majority have in some.</p>
                            <ul className="list clearfix">
                              <li>Support on hiring employeers</li>
                              <li>Get rxceptional service for growth</li>
                              <li>Outsourced consulting business</li>
                            </ul>
                          </div>
                        </div>
                      </div>
                      <div className="tab" id="tab-2">
                        <div className="inner-box">
                          <figure className="image-box"><img src="https://placehold.co/540x360" alt="agency" /></figure>
                          <div className="text">
                            <p>There are many simply free text available variations of passages of but the majority have in some.</p>
                            <ul className="list clearfix">
                              <li>Support on hiring employeers</li>
                              <li>Get rxceptional service for growth</li>
                              <li>Outsourced consulting business</li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* agency-section end */}

      {/* funfact-section */}
      <section className="funfact-section centred">
        <div className="auto-container">
          <div className="inner-container">
            <div className="row clearfix">
              <div className="col-lg-3 col-md-6 col-sm-12 counter-block">
                <div className="counter-block-one">
                  <div className="inner-box">
                    <div className="icon-box"><i className="flaticon-scrum"></i></div>
                    <div className="count-outer count-box">
                      <span className="count-text" data-speed="1500" data-stop="8080">0</span>
                    </div>
                    <p>Project Completed</p>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-md-6 col-sm-12 counter-block">
                <div className="counter-block-one">
                  <div className="inner-box">
                    <div className="icon-box"><i className="flaticon-business-idea"></i></div>
                    <div className="count-outer count-box">
                      <span className="count-text" data-speed="1500" data-stop="697">0</span>
                    </div>
                    <p>Employer Solutions</p>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-md-6 col-sm-12 counter-block">
                <div className="counter-block-one">
                  <div className="inner-box">
                    <div className="icon-box"><i className="flaticon-recruit"></i></div>
                    <div className="count-outer count-box">
                      <span className="count-text" data-speed="1500" data-stop="440">0</span>
                    </div>
                    <p>Job Seekers</p>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-md-6 col-sm-12 counter-block">
                <div className="counter-block-one">
                  <div className="inner-box">
                    <div className="icon-box"><i className="flaticon-customer-review"></i></div>
                    <div className="count-outer count-box">
                      <span className="count-text" data-speed="1500" data-stop="2887">0</span>
                    </div>
                    <p>Happy Customers</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* funfact-section end */}

      {/* project-section */}
      <section className="project-section">
        <div className="auto-container">
          <div className="sec-title">
            <p>Staffing Recent Closed Projects</p>
            <h2>Latest From Our Project</h2>
          </div>
        </div>
        <div className="outer-container">
          <div className="gallery-carousel owl-carousel owl-theme owl-dots-none nav-style-one">
            {[1,2,3,4,5].map((n) => (
              <div className="project-block-one" key={n}>
                <div className="inner-box">
                  <figure className="image-box"><img src="https://placehold.co/480x360" alt={`project-${n}`} /></figure>
                  <div className="link">
                    <a href="https://placehold.co/1200x900" className="lightbox-image" data-fancybox="gallery"><i className="flaticon-plus"></i></a>
                  </div>
                  <div className="text">
                    <p>Business</p>
                    <h3><a href="#">Staffing Solutions</a></h3>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* project-section end */}

      {/* working-process */}
      <section className="working-process centred">
        <div className="auto-container">
          <div className="sec-title centred">
            <p>Staffing Recent Closed Projects</p>
            <h2>We Choose a Recvite</h2>
          </div>
          <div className="row clearfix">
            <div className="col-lg-4 col-md-6 col-sm-12 process-block">
              <div className="process-block-one wow fadeInUp animated" data-wow-delay="00ms" data-wow-duration="1500ms">
                <div className="inner-box">
                  <div className="icon-box">
                    <i className="flaticon-investment"></i>
                    <span>01</span>
                    <div className="icon-shape" style={{ backgroundImage: "url('https://placehold.co/120x120/EEE/DDD')" }}></div>
                  </div>
                  <h3>Consult with Team</h3>
                  <p>Lorem ipsum dolor sit amet, consectetur notted adipisicing elit sed do eiusmod.</p>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-12 process-block">
              <div className="process-block-one wow fadeInUp animated" data-wow-delay="300ms" data-wow-duration="1500ms">
                <div className="inner-box">
                  <div className="icon-box">
                    <i className="flaticon-checklist"></i>
                    <span>02</span>
                    <div className="icon-shape" style={{ backgroundImage: "url('https://placehold.co/120x120/EEE/DDD')" }}></div>
                  </div>
                  <h3>Make a Schedule</h3>
                  <p>Lorem ipsum dolor sit amet, consectetur notted adipisicing elit sed do eiusmod.</p>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-12 process-block">
              <div className="process-block-one wow fadeInUp animated" data-wow-delay="500ms" data-wow-duration="1500ms">
                <div className="inner-box">
                  <div className="icon-box">
                    <i className="flaticon-outsourcing"></i>
                    <span>03</span>
                    <div className="icon-shape" style={{ backgroundImage: "url('https://placehold.co/120x120/EEE/DDD')" }}></div>
                  </div>
                  <h3>Hire & Enjoy</h3>
                  <p>Lorem ipsum dolor sit amet, consectetur notted adipisicing elit sed do eiusmod.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* working-process end */}

      {/* cta-section */}
      <section className="cta-section bg-color-2">
        <div className="auto-container">
          <div className="inner-box clearfix">
            <div className="text pull-left">
              <h2>Hire Your Next Candidate On Recvite</h2>
            </div>
            <div className="btn-box pull-right">
              <a href="#" className="theme-btn-one">Discover More</a>
            </div>
          </div>
        </div>
      </section>
      {/* cta-section end */}

      {/* progress-section */}
      <section className="progress-section" style={{ backgroundImage: "url('https://placehold.co/1600x700')" }}>
        <div className="auto-container">
          <div className="row clearfix">
            <div className="col-lg-5 col-md-12 col-sm-12 title-column">
              <div className="sec-title light">
                <p>Staffing Partners</p>
                <h2>We’re Here to Solve Recruitment Using Technology</h2>
              </div>
            </div>
            <div className="col-lg-7 col-md-12 col-sm-12 content-column">
              <div className="content_block_4">
                <div className="content-box">
                  <div className="counter-inner">
                    <div className="inner-box">
                      <div className="icon-box"><i className="flaticon-customer-review"></i></div>
                      <div className="count-outer count-box">
                        <span className="count-text" data-speed="1500" data-stop="2887">0</span>
                      </div>
                      <p>Happy Customers</p>
                    </div>
                  </div>
                  <div className="progress-inner">
                    <div className="text">
                      <p>There are many variations passages of lorem ipsum but the maj alteration in some form, by rando mis words is noted.</p>
                    </div>
                    <div className="progress-content">
                      <div className="progress-box">
                        <h5>Stuffing</h5>
                        <div className="bar">
                          <div className="bar-inner count-bar" data-percent="80%"><div className="count-text">80%</div></div>
                        </div>
                      </div>
                      <div className="progress-box">
                        <h5>Recruitment</h5>
                        <div className="bar">
                          <div className="bar-inner count-bar" data-percent="60%"><div className="count-text">60%</div></div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* progress-section end */}

      {/* testimonial-section */}
      <section className="testimonial-section centred">
        <div className="auto-container">
          <div className="inner-container">
            <div className="three-item-carousel owl-carousel owl-theme owl-dots-none owl-nav-none">
              {[1,2,3].map((n) => (
                <div className="testimonial-block-one" key={n}>
                  <div className="inner-box">
                    <div className="icon-box">"</div>
                    <p>This is due to their excellent service, competitive pricing and customer support. It’s throughly refresing to get such a personal touch.</p>
                    <h5>{n === 1 ? 'Mike Hardson' : 'Christine Eve'}</h5>
                    <figure className="image-box"><img src="https://placehold.co/80x80" alt="testimonial" /></figure>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
      {/* testimonial-section end */}

      {/* clients-section */}
      <section className="clients-section">
        <div className="auto-container">
          <div className="clients-carousel owl-carousel owl-theme owl-nav-none owl-dots-none">
            {[1,2,3,4,5].map((n) => (
              <figure className="clients-logo-box" key={n}><a href="#"><img src="https://placehold.co/160x60?text=Logo" alt="client logo" /></a></figure>
            ))}
          </div>
        </div>
      </section>
      {/* clients-section end */}

      {/* news-section */}
      <section className="news-section sec-pad bg-color-1">
        <div className="auto-container">
          <div className="row clearfix">
            <div className="col-lg-4 col-md-12 col-sm-12 title-column">
              <div className="title-box">
                <div className="sec-title">
                  <p>Our Blog Posts</p>
                  <h2>Latest News & Articles</h2>
                </div>
                <div className="text">
                  <p>Lorem ipsum onts perspicia unde omnis iste natus errluptatem acc usan- tium demque laudantium totam.</p>
                </div>
              </div>
            </div>
            <div className="col-lg-8 col-md-12 col-sm-12 inner-column">
              <div className="carousel-block">
                <div className="three-item-carousel owl-carousel owl-theme owl-dots-none nav-style-one">
                  {[1,2,3].map((n) => (
                    <div className="news-block-one" key={n}>
                      <div className="inner-box">
                        <figure className="image-box">
                          <a href="#"><img src="https://placehold.co/480x320" alt="news" /></a>
                          <div className="post-date">
                            <h4>{25 - (n - 1)}</h4>
                            <p>AUG</p>
                          </div>
                        </figure>
                        <div className="lower-content">
                          <ul className="post-info clearfix">
                            <li><i className="far fa-folder-open"></i>Human Resource</li>
                            <li><i className="far fa-comments"></i><a href="#">0{n + 1} Comments</a></li>
                          </ul>
                          <h3><a href="#">{n === 2 ? 'We’re building a new business world' : (n === 3 ? 'Hire easily HR candidates in few seconds' : 'Get few solutions to hire a best candidate')}</a></h3>
                          <div className="admin">
                            <figure className="admin-thumb"><img src="https://placehold.co/32x32" alt="admin" /></figure>
                            <p>by {n === 2 ? 'John Mike' : (n === 3 ? 'Haris Gulati' : 'Christine Eve')}</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* news-section end */}

      {/* main-footer */}
      <footer className="main-footer">
        <div className="footer-top" style={{ backgroundImage: "url('https://placehold.co/1600x600')" }}>
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
                    <figure className="footer-logo"><a href="#"><img src="https://placehold.co/180x60?text=Footer+Logo" alt="footer logo" /></a></figure>
                    <p>Join our newsletter and get latest updates</p>
                    <form action="#" method="post">
                      <div className="form-group">
                        <input type="email" name="email" placeholder="Email Address" required />
                        <button><i className="fas fa-check"></i></button>
                      </div>
                    </form>
                    <ul className="social-links clearfix">
                      <li><h6>Connect:</h6></li>
                      <li><a href="#"><i className="fab fa-twitter"></i></a></li>
                      <li><a href="#"><i className="fab fa-facebook-square"></i></a></li>
                      <li><a href="#"><i className="fab fa-pinterest-p"></i></a></li>
                      <li><a href="#"><i className="fab fa-instagram"></i></a></li>
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
                        <li><a href="#">About</a></li>
                        <li><a href="#">Our Solutions</a></li>
                        <li><a href="#">Team Members</a></li>
                        <li><a href="#">News & Articles</a></li>
                        <li><a href="#">Contact Us</a></li>
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
                        <li><a href="#">Employers</a></li>
                        <li><a href="#">Job Seekers</a></li>
                        <li><a href="#">How It Works</a></li>
                        <li><a href="#">Pricing & Plans</a></li>
                        <li><a href="#">Our Departments</a></li>
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
                        <figure className="post-thumb"><a href="#"><img src="https://placehold.co/88x72" alt="post" /></a></figure>
                        <h6><a href="#">How to guide to HR adviser and clients lessening</a></h6>
                        <span className="post-date">20 Aug, 2020</span>
                      </div>
                      <div className="post">
                        <figure className="post-thumb"><a href="#"><img src="https://placehold.co/88x72" alt="post" /></a></figure>
                        <h6><a href="#">Providing the best stuffing solutions</a></h6>
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
                <p>&copy; Copyright 2020 by <a href="#">Recvite</a></p>
              </div>
              <ul className="footer-nav pull-right">
                <li><a href="#">Privacy Policy</a></li>
                <li><a href="#">Terms & Conditions</a></li>
                <li><a href="#">Site Map</a></li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
      {/* main-footer end */}

      {/*Scroll to top*/}
      <button className="scroll-top scroll-to-target" data-target="html">
        <span className="fa fa-arrow-up"></span>
      </button>
    </div>
  )
}

export default Recvite

