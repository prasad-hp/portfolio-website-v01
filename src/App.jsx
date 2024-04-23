import React from 'react'
import Home from './pages/Home'
import About from './pages/About'
import MyWork from './pages/Mywork'
import Contact from './pages/Contact'

import { BrowserRouter, Route, Routes } from 'react-router-dom'


function App() {
  return (
    <BrowserRouter>
      <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/work" element={<MyWork />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;