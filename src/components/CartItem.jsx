import React from 'react'

const CartItem = ({ product, cart, setCart }) => {

    const removeFromCart = (id) => {
        const updatedCart = cart.filter((item) => item.id !== id)
        setCart(updatedCart)

    }

    const increaseQuantity = () => {
        setCart(
            cart.map((item) => {
                if (item.id === product.id) {
                    return {
                        ...item,
                        quantity: item.quantity + 1
                    }
                } return item
            })
        )
    }


    const decreaseQuantity = () => {


        if (product.quantity === 1) {
            setCart(
                cart.filter((item) => item.id !== product.id)
            )
        } else {
            setCart(
                cart.map((item) => {
                    if (item.id === product.id) {
                        return {
                            ...item,
                            quantity: item.quantity-1
                        }
                    }return item
                })
            )

        }
    }

    return (
        <div className='cart-item'>
            <div className='cart-top'>
                <img src={product.image} alt={product.name} />
            </div>

            <div className='cart-bottom'>
                <h5>{product.name}</h5>
                <p>{product.specs}</p>
                <p className='price'>${product.price}</p>
                <div className="quantity-box">
                    <button onClick={decreaseQuantity}>-</button>
                    <span>{product.quantity}</span>
                    <button onClick={increaseQuantity}>+</button>
                </div>
                <button className='rmv-btn' onClick={() => removeFromCart(product.id)}>
                    <i className="ri-delete-bin-2-line"></i>
                    Remove
                </button>
            </div>

        </div>
    )
}

export default CartItem