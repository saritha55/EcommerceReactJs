import React from 'react'
import './Navbar.css'
import logo from '../Assets/logo.png'

const Navbar = () => {
  return (
    <div className='navbar'>
      <div className="nav-logo">
        <img src={logo} alt="" />
        <p>SHOPPER</p>
      </div>
      <ul className="nav-menu">
        <li>Shop</li>
        <li>Women</li>
        <li>Men</li>
        <li>Kid</li>
      </ul>
      <div className="nav-cart">
        <button>Login</button>
        <img src={cart_icon} alt="" />
      </div>
    </div>
  )
}

export default Navbar
