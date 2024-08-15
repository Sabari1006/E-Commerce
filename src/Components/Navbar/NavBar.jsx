import React, { useContext, useState } from 'react'
import './Navbar.css'
import { assets } from '../../assets/assets'
import { Link } from 'react-router-dom'
import { StoreContext } from '../../Context/StoreContext'

function NavBar({setShowLogin}) {

  const [menu,setmenu] =useState("home")

  const {getTotalCartAmount} =useContext(StoreContext)
 
  return (
    <>
    <nav className='navbar'>
    <Link to='/'><img src={assets.navlogo} alt="" className='nav-img'/></Link>
<ul className='navbar-menu' > 
    <Link to='/' onClick={()=>setmenu("home")} className={menu==="home"?"active":""}>Home</Link>
    <a href='#explore-menu' onClick={()=>setmenu("category")} className={menu==="categories"?"active":""}>Category</a>
    <a href='#product_display' onClick={()=>setmenu("deals")}  className={menu==="deals"?"active":""}>Deals</a>
    <a href='#footer' onClick={()=>setmenu("about")}  className={menu==="about"?"active":""}>About</a>

</ul>
<div className='nav-search'>
<img src={assets.search} alt="" />
<div className='nav-cart'>
<Link to='/cart'><img src={assets.cart} alt="" /></Link>
<div className={getTotalCartAmount()===0?"":"dot"}></div>
</div>
<button onClick={()=>setShowLogin(true)}>Sign in</button>
</div>
    </nav>

    </>
  )
}

export default NavBar