import React from 'react';
import Navbar from './components/Navbar/Navbar';
import Hero from './components/hero/hero'
import About from './components/About/About'
import Projects from './components/Projects/Projects'
import Contact from './components/contact/contact'


import styles from './App.module.css';


const App = () => {
  return (
    <div className={styles.App}>
      <Navbar />
      <Hero />
      <About />
     <Projects />
     <Contact />
    </div>
  )
}

export default App
