import React from 'react'

const Services = () => {
  return (
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
                  <img src="assets/images/service/service-1.jpg" alt="" />
                  <span className="category">Management</span>
                  <i className="flaticon-consulting"></i>
                </figure>
                <div className="lower-content">
                  <h3><a href="/">HR Consulting</a></h3>
                  <p>Lorem ipsum dolor sit amet, consectetur notted adipisicing elit sed do eiusmod.</p>
                  <div className="link"><a href="/">Read More</a></div>
                  <div className="light-icon"><i className="flaticon-consulting"></i></div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 col-sm-12 service-block">
            <div className="service-block-one wow fadeInUp animated" data-wow-delay="300ms" data-wow-duration="1500ms">
              <div className="inner-box">
                <figure className="image-box">
                  <img src="assets/images/service/service-2.jpg" alt="" />
                  <span className="category">Resources</span>
                  <i className="flaticon-controller"></i>
                </figure>
                <div className="lower-content">
                  <h3><a href="/">Technology Resource</a></h3>
                  <p>Lorem ipsum dolor sit amet, consectetur notted adipisicing elit sed do eiusmod.</p>
                  <div className="link"><a href="/">Read More</a></div>
                  <div className="light-icon"><i className="flaticon-controller"></i></div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 col-sm-12 service-block">
            <div className="service-block-one wow fadeInUp animated" data-wow-delay="600ms" data-wow-duration="1500ms">
              <div className="inner-box">
                <figure className="image-box">
                  <img src="assets/images/service/service-3.jpg" alt="" />
                  <span className="category">Solutions</span>
                  <i className="flaticon-policy"></i>
                </figure>
                <div className="lower-content">
                  <h3><a href="/">Staffing Solutions</a></h3>
                  <p>Lorem ipsum dolor sit amet, consectetur notted adipisicing elit sed do eiusmod.</p>
                  <div className="link"><a href="/">Read More</a></div>
                  <div className="light-icon"><i className="flaticon-policy"></i></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Services

