import { React, useRef } from 'react'
import './App.css'
import Header from './components/Header'
import Banner from './components/Banner'
import About from './components/About'
import Services from './components/Services'
import Expertise from './components/Expertise'
import Footer from './components/Footer'

function App() {
  const homeRef = useRef(null)
  const aboutRef = useRef(null)
  const servicesRef = useRef(null)
  const expertiseRef = useRef(null)
  const footerRef = useRef(null)

  return (
    <>
      {/* <h1>Welcome to my personal website!!!</h1> */}
      <Header 
      scrollToSection={(section) => {
        section.current.scrollIntoView({ behavior: 'smooth' })
      }}
      sections={{ homeRef, aboutRef, servicesRef, expertiseRef, footerRef }} />
      <section ref={homeRef}><Banner /></section>
      <section ref={aboutRef}><About /></section>
      <section ref={servicesRef}><Services /></section>
      <section ref={expertiseRef}><Expertise /></section>
      <section ref={footerRef}><Footer /></section>
    </>
  )
}

export default App
