import React from 'react'
import { Link } from "react-router-dom";
import './Cart.css'
import CartItem from '../components/CartItem'


const Cart = ({ cart, setCart }) => {

  const totalPrice = cart.reduce((total, item) => {
    return total + item.price * item.quantity
  }, 0)


  return (
    <>
      {
        cart.length === 0 ? (

          // 🛒 Empty Cart UI yaha aayega

          <>
            <div className="empty-cart">

              <i className="ri-shopping-cart-line"></i>

              <h2>Your Cart is Empty</h2>

              <p>
                Looks like you haven't added any products yet.
              </p>

              <Link to="/shop">
                <button>
                  Continue Shopping
                </button>
              </Link>

            </div>
          </>

        ) : (
          <>
            <h1 style={{ textAlign: 'center', marginTop: '10px', color:'#00BAD2' }}>Your Cart</h1>
            <div className="cart-container">
              {
                cart.map((product) => (
                  <CartItem
                    key={product.id}
                    product={product}
                    cart={cart}
                    setCart={setCart}
                  />
                ))}
            </div>

            <div className="cart-total">
              <h2>Order Summary</h2>
              <div className="summary-row">
                <p>Subtotal</p>
                <p>${totalPrice}</p>
              </div>

              <div className="summary-row">
                <p>Shipping</p>
                <p className="free">Free</p>
              </div>

              <div className="summary-row">
                <p>Tax</p>
                <p>$0</p>
              </div>

              <div className="subcart-total">
                <div className='sct1'><p>Total :</p></div>
                <div className='sct2'><p>${totalPrice}</p></div>
              </div>
              <p className='ptc'>Proceed to Checkout</p>
            </div>
          </>
        )
      }
    </>
  )
}

export default Cart
