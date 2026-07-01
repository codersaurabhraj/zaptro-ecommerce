import React from 'react'
import './Card.css'

const Card = ({ product, cart, setCart }) => {

    const addTOCart = () => {

        const existingProduct = cart.find((item) => item.id === product.id)
    
        if (existingProduct) {
            setCart(
                cart.map((item) => {
                    if (item.id === product.id) {
                        return {
                            ...item,
                            quantity:item.quantity+1
                        }
                    }
                    return item
                })
            )
        } else {
            setCart([
                ...cart,
                {
                    ...product,
                    quantity: 1
                }
            ])
        }
    }


    return (
        <div className="product-card">
            <div className="top">
                <img src={product.image} alt={product.name} />
            </div>

            <div className="bottom">
                <h5>{product.name}</h5>
                <p>{product.specs}</p>
                <p className='price'>${product.price}</p>
                <button onClick={addTOCart}>
                    Add to Cart
                </button>
            </div>
        </div>
    )
}

export default Card

