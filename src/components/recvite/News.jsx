import React from 'react'

const News = () => {
  return (
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
                        <a href="/"><img src={`assets/images/news/news-${n}.jpg`} alt="" /></a>
                        <div className="post-date">
                          <h4>{25 - (n - 1)}</h4>
                          <p>AUG</p>
                        </div>
                      </figure>
                      <div className="lower-content">
                        <ul className="post-info clearfix">
                          <li><i className="far fa-folder-open"></i>Human Resource</li>
                          <li><i className="far fa-comments"></i><a href="/">0{n} Comments</a></li>
                        </ul>
                        <h3><a href="/">{n === 1 ? 'Get few solutions to hire a best candidate' : n === 2 ? 'We’re building a new business world' : 'Hire easily HR candidates in few seconds'}</a></h3>
                        <div className="admin">
                          <figure className="admin-thumb"><img src={`assets/images/news/admin-${n}.png`} alt="" /></figure>
                          <p>{n === 1 ? 'by Christine Eve' : n === 2 ? 'by John Mike' : 'by Haris Gulati'}</p>
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
  )
}

export default News

