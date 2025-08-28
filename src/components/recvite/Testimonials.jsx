import React from 'react'

const Testimonials = () => {
  return (
    <section className="testimonial-section centred">
      <div className="auto-container">
        <div className="inner-container">
          <div className="three-item-carousel owl-carousel owl-theme owl-dots-none owl-nav-none">
            {[
              { text: 'This is due to their excellent service, competitive pricing and customer support. It’s throughly refresing to get such a personal touch.', name: 'Mike Hardson', img: 'assets/images/resource/testimonial-1.png' },
              { text: 'This is due to their excellent service, competitive pricing and customer support. It’s throughly refresing to get such a personal touch.', name: 'Christine Eve', img: 'assets/images/resource/testimonial-2.png' },
              { text: 'This is due to their excellent service, competitive pricing and customer support. It’s throughly refresing to get such a personal touch.', name: 'Christine Eve', img: 'assets/images/resource/testimonial-3.png' }
            ].map((t, i) => (
              <div className="testimonial-block-one" key={i}>
                <div className="inner-box">
                  <div className="icon-box">"</div>
                  <p>{t.text}</p>
                  <h5>{t.name}</h5>
                  <figure className="image-box"><img src={t.img} alt="" /></figure>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Testimonials

