import React from 'react'
import Header from '../../components/recvite/Header'
import MobileMenu from '../../components/recvite/MobileMenu'
import Banner from '../../components/recvite/Banner'
import Feature from '../../components/recvite/Feature'
import Quote from '../../components/recvite/Quote'
import About from '../../components/recvite/About'
import Services from '../../components/recvite/Services'
import Agency from '../../components/recvite/Agency'
import FunFacts from '../../components/recvite/FunFacts'
import Projects from '../../components/recvite/Projects'
import Process from '../../components/recvite/Process'
import CTA from '../../components/recvite/CTA'
import Progress from '../../components/recvite/Progress'
import Testimonials from '../../components/recvite/Testimonials'
import Clients from '../../components/recvite/Clients'
import News from '../../components/recvite/News'
import Footer from '../../components/recvite/Footer'
import ScrollTop from '../../components/recvite/ScrollTop'
import Preloader from '../../components/recvite/Preloader'

const RecviteHome = () => {
  return (
    <div className="boxed_wrapper">
      <Preloader />
      <Header />
      <MobileMenu />
      <Banner />
      <Feature />
      <Quote />
      <About />
      <Services />
      <Agency />
      <FunFacts />
      <Projects />
      <Process />
      <CTA />
      <Progress />
      <Testimonials />
      <Clients />
      <News />
      <Footer />
      <ScrollTop />
    </div>
  )
}

export default RecviteHome

