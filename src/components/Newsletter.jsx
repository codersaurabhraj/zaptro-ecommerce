import React from 'react'
import './Newsletter.css'
    
const Newsletter = () => {
    return (
        <>
            <div className='newsletter'>
                <div className='newsletter-content'>
                    <h3>Join Our NewsLetter</h3>
                    <p>Get the latest deals & updates</p>
                </div>
                <div className='newsletter-in'>
                    <input type="text" placeholder='Enter your email'/>
                    <button>Subscribe</button>
                </div>
            </div>
        </>
    )
}

export default Newsletter
