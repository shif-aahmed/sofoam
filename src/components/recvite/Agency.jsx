import React from 'react'

const Agency = () => {
  return (
    <section className="agency-section" style={{ backgroundImage: 'url(assets/images/background/agency-1.jpg)' }}>
      <div className="auto-container">
        <div className="row align-items-center clearfix">
          <div className="col-lg-6 col-md-12 col-sm-12 content-column">
            <div className="content_block_2">
              <div className="content-box">
                <div className="sec-title light">
                  <p>Learn About Agency</p>
                  <h2>We’re Reliable & Cost Efficiant Recruitment Agency</h2>
                </div>
                <div className="btn-box"><a href="/" className="theme-btn-one">Discover More</a></div>
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
                        <figure className="image-box"><img src="assets/images/resource/agency-1.jpg" alt="" /></figure>
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
                        <figure className="image-box"><img src="assets/images/resource/agency-1.jpg" alt="" /></figure>
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
  )
}

export default Agency

