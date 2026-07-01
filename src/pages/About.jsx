import React from 'react'
import './About.css'

const About = () => {
  return (

    <>
      <div className='about-container'>

        <div className="one">
          <div className="one-one">
            <h3>About Us</h3>
          </div>
        </div>



        <div className='twos'>
          <div className='twos-left'>
            <h2>Featured</h2>
            <h4>The Perfection</h4>
          </div>

          <div className="twos-right">
            <div className="sub-twos-right">
              <i className="ri-truck-line"></i>
              <p>Free Shiping</p>
            </div>

            <div className="sub-twos-right">
              <i className="ri-customer-service-line"></i>
              <p>24/7 Support</p>
            </div>
          </div>
        </div>


        <div className='three'>
          <div className="sub-three">
            <h2>1+</h2>
            <p>Years Experience</p>
          </div>
          <div className="sub-three">
            <h2>150+</h2>
            <p>Products</p>
          </div>
          <div className="sub-three">
            <h2>100+</h2>
            <p>Happy Customers</p>
          </div>
        </div>


        <div className='four-perks'>
          <h2>Benefit</h2>
        <h4>Perks & Benefit</h4>
        </div>

        <div className='fifth'>
          <div className="sub-fifth">
            <i className="ri-wallet-3-fill"></i>
            <p>Quick Payment</p>
          </div>
          <div className="sub-fifth">
            <i className="ri-hand-coin-line"></i>
            <p>Affordable Price</p>
          </div>
          <div className="sub-fifth">
            <i className="ri-percent-line"></i>
            <p>Big Deals</p>
          </div>
        </div>

        




      </div>

    </>
  )
}

export default About
