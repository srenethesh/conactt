import React from 'react'
import HeroSection from './HeroSection'
import Services from './Services'
import Portfolio from './Portfolio'
import FAQ from './FAQ'
import Testimonials from './Testimonials'
import Footer from './Footer'

const Home = () => {
  return (
    <div>
        <HeroSection/>
        <Services/>
        <Portfolio/>
        <Testimonials/>
        <FAQ/>
        <Footer/>
    </div>
  )
}

export default Home