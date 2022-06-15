import { useContext } from "react"
import { CartContext } from "../../context/CartContext"
import '../Cart/Cart.css'


const Cart = () => {

    const { cart, removeItem, getQuantity, clearCart} = useContext(CartContext)

    if(getQuantity() === 0) {
        return (
            <h1>Carrito Vacio!</h1>
        )
    }

    return(
        <div className="cart-view">
           
            <div className="box-cart">
                {cart.map(prod => {
                    return(
                        <div key={prod.id} className="item-cart">
                                <p> {prod.name} </p>
                                <p> Cantidad: {prod.count} </p>
                                <p>Precio: ${prod.price}</p>
                                <p>Subtotal: ${prod.price * prod.count}</p>
                                <button className="btn-remove" onClick={() => removeItem(prod.id)}>X</button>
                             
                        </div>
                            )})
                }
                
            </div> 

                  <button onClick={() => clearCart()} className="btn-cart">Limpiar carrito</button>

          
        </div>
     )
}

export default Cart