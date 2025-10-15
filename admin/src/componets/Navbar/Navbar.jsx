import React from 'react'
import './Navbar.css'
import { assets } from '../../assets/assets'

const Navbar = () => {
  return (
    <div className='navbar'>
      <p><img src={assets.sweets_logo} alt="" className="logo" />Admin Panel</p>
      <img src={assets.profile_icon} alt="" className="profile" />
    </div>
  )
}

export default Navbar
