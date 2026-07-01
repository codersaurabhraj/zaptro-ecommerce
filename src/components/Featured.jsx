import React from 'react'
import './Featured.css'
import Card from './Card'
import products from '../data/Products'

const Featured = () => {
    return (
        <>
            <div className='featured'>
                <h2>Featured Products</h2>
            </div>

            <div className="card-container">

                {products.map((product) => (
                    <div className="card" key={product.id}>

                        <div className='card-img'>
                            <img src={product.image} alt={product.name} />
                        </div>

                        <div className='card-spec'>
                            <h6>{product.name}</h6>
                            <p>{product.specs}</p>
                            <p className='Price'>
                                Price: ${product.price}
                            </p>

                            <button>Add to Cart</button>
                        </div>


                    </div>
                ))}

            </div>

        </>
    )
}

export default Featured
