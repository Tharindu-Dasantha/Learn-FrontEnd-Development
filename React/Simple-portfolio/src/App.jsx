import React from 'react'

// importing the files
import Navbar from './Sections/Navbar/Navbar'
import Hero from './Sections/Hero/Hero'
import About from './Sections/About/About'
import Services from './Sections/Services/Services'
import Blog from './Sections/Blog/Blog'
import Contact from './Sections/Contact/Contact'
import Footer from './Sections/Footer/Footer'

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Services />
      <Blog />
      <Contact />
      <Footer />
    </>
  )
}

export default App