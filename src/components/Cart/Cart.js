import { useContext } from "react"
import { CartContext } from "../../context/CartContext"
import '../Cart/Cart.css'
import { addDoc, collection} from 'firebase/firestore'
import { db} from '../../services/firebase'



const Cart = () => {

    const { cart, removeItem, getQuantity, clearCart,getTotal} = useContext(CartContext)

    const createOrder = () =>{
        const objOrder = {
            buyer: {
                name: 'Gaspar Gonzalez',
                email: 'gaspi-gonzalez@hotmail.com',
                phone: '123456'
            },
            items: cart,
            total: getTotal()
        }

        console.log(objOrder)

        const collectionRef = collection(db, 'orders')

        addDoc(collectionRef,objOrder).then(({id}) => {
            console.log(`se creo la orden con el id: ${id}`)
        })
    }

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
                 <h3>Total: ${getTotal()}</h3>
                  <button onClick={() => clearCart()} className="btn-cart">Limpiar carrito</button>
                  <button onClick={createOrder} >Generar Orden</button>

          
        </div>
     )
}

export default Cart