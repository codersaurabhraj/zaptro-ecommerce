import React from 'react'
import './Category.css'
import { Link } from 'react-router-dom'

const Category = () => {
    return (
        <>
            <div className='category'>
                <div className='cate-card card1'>
                    <h3>New Arrivals</h3>
                    <button> <Link to='/newarrival' style={{textDecoration:'none', color:'white'}}>Browse Now</Link></button>
                </div>

                <div className='cate-card card2'>
                    
                    <h3>Best Seller</h3>
                    <button><Link to='/bestseller' style={{textDecoration:'none', color:'white'}}>Browse Now</Link></button>
                </div>
            </div>


        </>
    )
}

export default Category
