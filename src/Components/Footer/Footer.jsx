import React from 'react'
import './Footer.css'
import { assets } from '../../assets/assets'

function Footer() {
  return (
    <div className='footer' id='footer'>
        <div className="footer-content">
            <div className="footer-content-left">
              <h1>Durais </h1>
                {/* <img src={assets.navlogo} alt="" /> */}
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt, reiciendis, aperiam id inventore totam vero</p>
                <div className="footer-social-icon">
                    <img src={assets.facebook} alt="" />
                    <img src={assets.instgram} alt="" />    
                    <img src={assets.whatsapp} alt="" />    

                </div>           
            </div>
            <div className="footer-content-center">
              <h2>COMPANY</h2>
              <ul>
                  <li>Home</li>
                  <li>About us</li>
                  <li>Delivery</li>
                  <li>Privacy policy</li>
              </ul>
            </div>
            <div className="footer-content-right">
              <h2> GET IN TOUCH</h2>
              <ul>
                <li>+91-98765-43210</li>
                <li>company@gmail.com</li>
              </ul>
            </div>

        </div>
        <hr />
        <p className='footer-copyright'>Copyright 2024 © -All Right-Reserved</p>
    </div>
  )
}

export default Footer