import React, { useState,useEffect } from 'react'
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
import Home from './pages/Home'
import Shop from './pages/Shop'
import Newarrival from './pages/Newarrival'
import Bestseller from './pages/Bestseller'
import About from './pages/About'
import Contact from './pages/Contact'
import Nav from './components/Nav'
import Footer from './components/Footer'
import ScrollToTop from './components/ScrollToTop'
import Cart from './pages/Cart'


const App = () => {
  const [cart, setCart] = useState([])

  useEffect(() => {
    const savedCart = localStorage.getItem("cart")
    if (savedCart) {
      const parsedCart = JSON.parse(savedCart)
      setCart(parsedCart)
    }
    
  },[])


  useEffect(() => {
    localStorage.setItem("cart",JSON.stringify(cart))
    
  },[cart])

  return (
    <div>
      <BrowserRouter>
        <ScrollToTop />

        <Nav cart={cart.length} />

        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/shop' element={<Shop cart={cart} setCart={setCart} />} />
          <Route path='/newarrival' element={<Newarrival cart={cart} setCart={setCart} />} />
          <Route path='/bestseller' element={<Bestseller cart={cart} setCart={setCart} />} />
          <Route path='/about' element={<About />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/cart' element={<Cart cart={cart} setCart={setCart}/>} />

        </Routes>

        <Footer />
      </BrowserRouter>
    </div>
  )
}

export default App
