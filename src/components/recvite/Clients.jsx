import React from 'react'

const Clients = () => {
  return (
    <section className="clients-section">
      <div className="auto-container">
        <div className="clients-carousel owl-carousel owl-theme owl-nav-none owl-dots-none">
          {[1,2,3,4,5].map((n) => (
            <figure className="clients-logo-box" key={n}><a href="/"><img src={`assets/images/clients/clients-logo-${n}.png`} alt="" /></a></figure>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Clients

