import React from 'react'
import './Hero.css'
import { Link } from 'react-router-dom'

const Hero = () => {
    return (
        <>
            <section className='hero-section'>
                <div className='hero-content'>
                    <h1>Top Tech Gear For Your LifeStyle</h1>
                    <p>Discover the latest gadgets, electronics, and accessories at unbeatable prices..</p>
                    <Link to="/shop">
                        <button>Shop Now</button>
                    </Link>

                </div>
            </section>

            <div className='hero-tc'>
                <div className='policy'>
                    <i className="ri-shopping-bag-4-line"></i>
                    <p>Free shiping on Orders over $50</p>
                </div>
                <div className='policy'>
                    <i className="ri-loop-left-line"></i>
                    <p>7 Days Replacement</p>
                </div>
                <div className='policy'>
                    <i className="ri-customer-service-fill"></i>
                    <p>24/7 Customer Support</p>
                </div>
            </div>
        </>
    )
}

export default Hero
