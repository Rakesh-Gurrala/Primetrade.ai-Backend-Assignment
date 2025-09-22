import React from 'react'
import './Footer.css'
import { assets } from '../../assets/assets'
const Footer = () => {
  return (
    <div className='footer' id='footer'>
      <div className='footer-content'>
        <div className='footer-content-left'>
            <img src={assets.sweets_logo} alt='' height={150}/>
            <p>© 2025 Sweet Treats. All rights reserved.</p>
            <div className='footer-social-icons'>
                <img src={assets.facebook_icon} alt="" />
                <img src={assets.twitter_icon} alt="" />
                <img src={assets.linkedin_icon} alt="" />
            </div>
        </div>
        <div className='footer-content-center'>
            <h2>COMPANY</h2>
            <ul>
                <li>Home</li>
                <li>About</li>
                <li>Delivery</li>
                <li>Privacy policy</li>
            </ul>
        </div>
        <div className='footer-content-right'>
            <h2>GET IN TOUCH</h2>
            <p>123 Sweet St, Candy City, CA 12345</p>
            <ul>
                <li>+1-212-456-7890</li>
                <li>contact@sweets.com</li>
                <li>Mon - Fri: 9:00 AM - 6:00 PM</li>
                <li>Sat - Sun: 10:00 AM - 4:00 PM</li>
            </ul>
        </div>
      </div>
      <hr />
      <p className='footer-copyright'>Copyright 2025 Sweets.com - All Right Reserved.</p>
    </div>
  )
}

export default Footer
