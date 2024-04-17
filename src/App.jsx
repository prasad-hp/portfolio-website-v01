import React,{ useState } from 'react'
import Home from './home'
import About from './about'
// import MyWork from './mywork'
import Contact from './Contact'
import Footer from './components/Footer'


function App() {
  return(
  <div className='bg-[url("./images/Background.png")]'>  
    <Home />
    <About />
    {/* <MyWork /> */}
    <Contact />
    <Footer />
  </div>
  )
}

export default App
