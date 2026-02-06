import React from 'react'
import "./App.css"
import Header from './components/header/Header'
import Home from './components/home/Home'
import About from './components/about/About'
import Experience from './components/experience/Experience'
import TechStack from './components/skills/TechStack'
import Portfolio from './components/portfolio/Portfolio'
import Contact from './components/contact/Contact'
import Footer from './components/footer/Footer'

function App() {
  return (
    <>
      <Header />

      <main className='main'>
        <Home />
        <About />
        <Experience />
        <TechStack />
        <Portfolio />
        <Contact />
      </main>

      <Footer />
    </>
  )
}

export default App
