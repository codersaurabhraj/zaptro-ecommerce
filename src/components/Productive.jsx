import React from 'react'
import './Productive.css'
import { Link } from 'react-router-dom'

const Productive = () => {
    return (
        <>
            <div className='productive'>
                <div className='productive-content'>
                    <h1>Boost Your Productivity</h1>
                    <p>Essential Accessories for Work and Play.</p>
                    <button><Link to='/shop' style={{textDecoration:'none', color:'white'}}>Browse Now</Link></button>
                </div>
                
            </div>
        </>
    )
}

export default Productive
