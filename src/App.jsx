import React from 'react'
import Navbar from './Components/Navbar'
import Home from './Pages/Home'
import About from './Pages/About'
import Projects from './Pages/Projects'
import Contact from './Pages/Contact'
import Footer from './Components/Footer'
import Skills from './Pages/Skills'
import Experience from './Pages/Experience'

function App() {
  return (
    <>
      <Navbar />

      <main>
        <Home />
        <About />
        <Skills />
        <Experience />
        <Projects />
        <Contact />
      </main>

      <Footer />
    </>
  )
}

export default App