import { useContext } from "react"
import { CartContext } from "../../context/CartContext"


const Cart = () => {

    const { cart} = useContext(CartContext)
    return(
        <div>
            <h1>Cart</h1>
            <div>
                {cart.map(prod => <div key={prod.id}>{prod.name}</div>)}
            </div>
        </div>
    )
}

export default Cart