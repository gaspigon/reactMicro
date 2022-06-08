
import '../CartWidget/CartWidget.css'
import { useContext } from 'react'
import { Context } from '../../App'

const CartWidget = () => {

    const {getQuantity} = useContext(Context)

    const quantity= getQuantity()

    return (
        <p to='/cart' className="cart-box">
            {quantity}
            {console.log(quantity)}
        </p>
    )
}

export default CartWidget