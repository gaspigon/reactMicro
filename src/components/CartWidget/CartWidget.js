
import '../CartWidget/CartWidget.css'
import { useContext } from 'react'
import { CartContext } from '../../context/CartContext'
import { Link } from 'react-router-dom'

const CartWidget = () => {

    const {getQuantity} = useContext(CartContext)

    const quantity= getQuantity()

    return (
        <Link to='/cart' className="cart-box">
            <img className='cart-img' src='/images/carttt.svg'/>
            <p className='cart-p'>{quantity}</p>

        </Link>
    )
}

export default CartWidget