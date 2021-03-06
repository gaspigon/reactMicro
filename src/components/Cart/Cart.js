import {useState, useContext } from "react"
import { CartContext } from "../../context/CartContext"
import '../Cart/Cart.css'
import { addDoc, collection, getDocs, query, where, documentId, writeBatch} from 'firebase/firestore'
import { db} from '../../services/firebase'
import { useNotification} from '../../notification/Notification'
import FormData from "../Form/Form"
import { NavLink } from "react-router-dom"
import { TailSpin} from  'react-loader-spinner'



const Cart = () => {
    const [loading, setLoading] = useState(false)
    const [buyerData, setBuyerData] =useState({})
    const [showForm, setShowForm] = useState(false)
    const [disable, setDisable] = useState(true)
  
   



    const { cart, removeItem, getQuantity, clearCart,getTotal} = useContext(CartContext)


    const {setNotification } = useNotification()



    const createOrder = () =>{
      setLoading(true)

        const objOrder = {
            buyer: buyerData,
            items: cart,
            total: getTotal()
        }


        const ids = cart.map(prod => prod.id)
        
        const batch = writeBatch(db)

        const outOfStock = []

        const collectionRef = collection(db, 'products')

        getDocs(query(collectionRef, where(documentId(), 'in', ids)))
            .then(response => {
                response.docs.forEach(doc => {
                    const dataDoc = doc.data()

                    const prodQuantity = cart.find(prod => prod.id === doc.id)?.count

                    if(dataDoc.stock >= prodQuantity){
                        batch.update(doc.ref, {stock: dataDoc.stock - prodQuantity})
                    } else{
                        outOfStock.push({ id: doc.id, ...dataDoc})
                    }
                })
            }).then(() => {
                if(outOfStock.length === 0 ){
                    const collectionRef = collection(db, 'orders')

                    return addDoc(collectionRef, objOrder)
                }else {
                  return Promise.reject({type: 'out_of_stock', products: outOfStock})  
                }
            }).then(({id}) => {
                batch.commit()
                setNotification('success',`el id de la orden es: ${id}`)
                clearCart()
            }).catch(error => {
                console.log(error)
                setNotification('error','Algunos productos no tienen stock')
            }).finally(() =>{
                setLoading(false)
            })



    }

    if (loading) {
        return (
        <div className='loader'>
            <TailSpin width={1200}   color="#00BFFF" />
       </div>
        )
    }

    if(getQuantity() === 0) {
        return (
            <div className="box-empty">
               <h1 >Carrito Vacio!</h1> 
               <NavLink to={'/'} className="btn-products">Ver Productos</NavLink>
            </div>
            
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
                  <button id="button-fin" onClick={() => setShowForm(true) } className="btn-confirm">Finalizar Compra</button>
                  <button disabled={disable} className="btn-crear" onClick={createOrder}> Crear Orden</button>
                  
                    {showForm  && <FormData setShowForm={setShowForm} setBuyerData={setBuyerData} setDisable={setDisable} />} 
            
                 

          
        </div>
     )
}

export default Cart