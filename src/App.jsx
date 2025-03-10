import React, { useState } from 'react'
import NavBar from './Components/Navbar/NavBar'
import { Route, Routes } from 'react-router-dom'
import Home from './Pages/Home/Home'
import PlaceOrder from './Pages/PlaceOrder/PlaceOrder'
import Footer from './Components/Footer/Footer'
import LoginPopup from './Components/LoginPopup/LoginPopup'
import Cart from './Pages/Cart/Cart'

function App() {

  const[showLogin,setShowLogin]= useState(false)
  return (
    <>
    {showLogin?<LoginPopup setShowLogin={setShowLogin}/>:<></>}
    <div className='app'> 
      <NavBar setShowLogin={setShowLogin}/>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/cart' element={<Cart/>} />
        <Route path='/order' element={<PlaceOrder/>} />
      </Routes>
    </div>
    <Footer />

  
    </>
  )
}

export default App