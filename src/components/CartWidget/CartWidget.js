import React from 'react'
import '../CartWidget/CartWidget.css'

const CartWidget = () =>{
    return (
        <div className="cart-box">
            <img className="cart-img" src='./images/cart.png' alt='cart-widget' />
            <p className="cart-p">6</p>
        </div>
    )
}

export default CartWidget