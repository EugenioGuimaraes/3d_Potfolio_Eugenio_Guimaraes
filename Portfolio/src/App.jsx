import { useState } from 'react'
import './App.css'
import { BrowserRouter } from 'react-router-dom';
import {
  About, Contact, Experience, FeedBacks,
  Hero, Navbar, Tech, Works, StarsCanvas
} from './components';


const App = () => {
  return (
    <BrowserRouter>
      <div className='relative z-0 bg-primary'>
        <div className='bg-hero-pattern bg-cover
        bg-no-repeat bg-center'>
          <Navbar/>
          <Hero/>
        </div>
        <About/>
        <Experience/>
        <Tech/>
        <Works/>
        <FeedBacks/>
        <div className='relative z-0'>
          <Contact/>
          <StarsCanvas/>
        </div>
      </div>
    </BrowserRouter>
  )
}

export default App
