import {useState, useContext } from "react"
import { CartContext } from "../../context/CartContext"
import '../Cart/Cart.css'
import { addDoc, collection, getDocs, query, where, documentId, writeBatch} from 'firebase/firestore'
<<<<<<< HEAD
import { db, collectionsName} from '../../services/firebase'
import { deepCopy } from "@firebase/util"
=======
import { db} from '../../services/firebase'
import { useNotification} from '../../notification/Notification'
>>>>>>> firebaseII



const Cart = () => {
    const [loading, setLoading] = useState(false)
    const { cart, removeItem, getQuantity, clearCart,getTotal} = useContext(CartContext)

<<<<<<< HEAD
    // const [buyer, setBuyer] = useState({
    //     name: '',
    //     emai: '',
    //     phone: '',
    //     addres: '',
    //     comment: ''

    // })
=======
    const {setNotification } = useNotification()
>>>>>>> firebaseII

    const createOrder = () =>{
        setLoading(true)

        const objOrder = {
            buyer: {
                name: 'gaspar',
                email:'gg@gg',
                phone: '123456',
                address: 'coperni'
            },
            items: cart,
            total: getTotal()
        }

        const ids = cart.map(prod => prod.id)
<<<<<<< HEAD
        console.log(ids)
=======
        
        const batch = writeBatch(db)
>>>>>>> firebaseII

        const outOfStock = []

        const collectionRef = collection(db, 'products')

        getDocs(query(collectionRef, where(documentId(), 'in', ids)))
            .then(response => {
                response.docs.forEach(doc => {
                    const dataDoc = doc.data()

                    const prodQuantity = cart.find(prod => prod.id === doc.id)?.count

                    if(dataDoc.stock >= prodQuantity){
<<<<<<< HEAD

=======
                        batch.update(doc.ref, {stock: dataDoc.stock - prodQuantity})
>>>>>>> firebaseII
                    } else{
                        outOfStock.push({ id: doc.id, ...dataDoc})
                    }
                })
<<<<<<< HEAD
=======
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
>>>>>>> firebaseII
            })


        // console.log(objOrder)

        // const collectionRef = collection(db, collectionsName.orders)

        // addDoc(collectionRef,objOrder).then(({id}) => {
        //     console.log(`se creo la orden con el id: ${id}`)
        // })
<<<<<<< HEAD
=======
    }

    if (loading) {
        <h1>Generando orden..</h1>
>>>>>>> firebaseII
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
                  {/* <ContactForm buyer={buyer} setBuyer={setBuyer} /> */}
                  {/* <input value={buyer.name} onChange={(e) => setBuyer({...buyer, name: e.target.value})} /> */} 

          
        </div>
     )
}

export default Cart