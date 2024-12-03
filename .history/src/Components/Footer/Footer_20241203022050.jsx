import React from 'react'
import './Footer.css'
import footer_logo from '../Assets/logo_big.png'
import instaragram_icon from '../Assets/instagram_icon.png'
import pinterster_icon from '../Assets/pintester_icon.png'
import whatsapp_icon from '../Assets/whatsapp_icon.png'

const Footer = () => {
  return (
    <div className='footer'>
      <div className="footer-logo">
        <img src={footer_logo} alt="" />
        <p>SHOPPER</p>
      </div>
      <ul className="footerlinks">
        <li>Company</li>
        <li>Products</li>
        <li>Offices</li>
        <li>About</li>
        <li>Contact</li>
      </ul>
      <div className="footer-social-icon">
        <div className="footer-icons-container">
            <img src={instaragram_icon} alt="" />
        </div>
        <div className="footer-icons-container">
            <img src={instaragram_icon} alt="" />
        </div>
        <div className="footer-icons-container">
            <img src={instaragram_icon} alt="" />
        </div>
      </div>
    </div>
  )
}

export default Footer
