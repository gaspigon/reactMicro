import { useContext } from "react"
import { Context } from "../../App"


const Cart = () => {

    const { cart} = useContext(Context)
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