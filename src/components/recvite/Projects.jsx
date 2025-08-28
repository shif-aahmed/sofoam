import React from 'react'

const Projects = () => {
  return (
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
                <figure className="image-box"><img src={`assets/images/gallery/project-${n}.jpg`} alt="" /></figure>
                <div className="link">
                  <a href={`assets/images/gallery/project-${n}.jpg`} className="lightbox-image" data-fancybox="gallery"><i className="flaticon-plus"></i></a>
                </div>
                <div className="text">
                  <p>Business</p>
                  <h3><a href="/">Staffing Solutions</a></h3>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects

