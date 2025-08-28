import React from 'react'

const FunFacts = () => {
  return (
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
  )
}

export default FunFacts

