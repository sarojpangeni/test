import { useState } from 'react'
// import './App.css'
import Navbar from './component/navbar'
import {BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import About from './Pages/About'
import Blog from './Pages/Blog'
import Testimonials from './Pages/Testimonials'
import Services from './Pages/Services'
import Our_Team from './Pages/Our_Team'
import Portfolio from './Pages/Portfolio'
import Contact_Us from './Pages/Contact_Us'
import layout from './HOC/layout'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Router >
      <Navbar />
      <Routes>
        <Route path='/about' element={<About/>} />
        <Route path='/portfolio' element={<Portfolio />} />
        <Route path='/testimonials' element={<Testimonials />} />
        <Route path='/services' element={<Services />} />
        <Route path='/blog' element={<Blog />} />
        <Route path='/our-team' element={<Our_Team />} />
        <Route path='/contact-us' element={<Contact_Us />} />
      </Routes>
      </Router>
    </>
  )
}

export default App
