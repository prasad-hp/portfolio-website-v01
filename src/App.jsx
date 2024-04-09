import React,{ useState } from 'react'
import './App.css'
import Home from './home'
import About from './about'
// import MyWork from './mywork'
import Contact from './Contact'
import Footer from './components/Footer'


function App() {
  return(
  <>  
    <Home />
    <About />
    {/* <MyWork /> */}
    <Contact />
    <Footer />
  </>
  )
}

export default App
