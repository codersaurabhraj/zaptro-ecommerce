import React from 'react'
import './Footer.css'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <>
<footer>

  <div className="quicklinks">
    <h3>Quick Links</h3>

    <div className="quicklinksp">
      <Link to="/shop">Shop</Link>
      <Link to="/about">About Us</Link>
      <Link to="/contact">Contact Us</Link>
    </div>
  </div>



  <div className="customerservice">
    <h3>Customer Service</h3>

    <div className="customerservicep">
      <p>Shipping Info</p>
      <p>Cancellation Policy</p>
      <p>Return Policy</p>
    </div>
  </div>



  <div className="followus">
    <h3>Follow Us</h3>

    <div className="social-links">
      <a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer">
        <i className="ri-facebook-fill"></i>
      </a>

      <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer">
        <i className="ri-instagram-line"></i>
      </a>

      <a href="https://x.com/" target="_blank" rel="noopener noreferrer">
        <i className="ri-twitter-x-line"></i>
      </a>

      <a href="https://web.telegram.org/" target="_blank" rel="noopener noreferrer">
        <i className="ri-telegram-line"></i>
      </a>
    </div>
  </div>



  <div className="social">
    <h3>Address</h3>

    <div className="socialaddress">
      <p>
        Zaptro Private Limited,
        Buildings Alyssa, Begonia & Clove Embassy Tech Village,
        Outer Ring Road,
        Bengaluru,
        Karnataka - 560103
      </p>
    </div>
  </div>

</footer>

<div className="copyright">
  <p>© 2026 Zaptro. All Rights Reserved.</p>
</div>
    </>
  )
}

export default Footer
