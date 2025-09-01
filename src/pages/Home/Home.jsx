import React from 'react'
// import { Link } from 'react-router-dom'
import NavBar from '../../components/NavBar/NavBar'
import HeroSection from '../../components/HeroSection/HeroSection'
import Arrival from '../../components/Arrival/Arrival'
import BestSeller from '../../components/BestSeller/BestSeller'
import LimitedTimeOffers from '../../components/LimitedTimeOffers/LimitedTimeOffers'
import Footer from '../../components/Footer/Footer'
import Support from '../../components/Support/Support'

const Home = () => {
  return (
    <div>
      <HeroSection/>
      <Arrival/>
      <LimitedTimeOffers/>
      <BestSeller/>
      <Support/>
    </div>
  )
}

export default Home
