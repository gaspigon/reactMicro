
import '../CartWidget/CartWidget.css'
import { useContext } from 'react'
import { CartContext } from '../../context/CartContext'

const CartWidget = () => {

    const {getQuantity} = useContext(CartContext)

    const quantity= getQuantity()

    return (
        <button to='/cart' className="cart-box">
            <img className='cart-img' src='/images/carttt.svg'/>
            <p className='cart-p'>{quantity}</p>

        </button>
    )
}

export default CartWidget