
import '../ItemDetail/ItemDetail.css'
import ItemCount from '../ItemCount/ItemCount'
import { useState , useContext} from 'react'
import { Link } from 'react-router-dom'
import { CartContext } from '../../context/CartContext'
import { useNotification } from '../../notification/Notification'


const ItemDetail = ({id,price,name,img,description,stock}) =>{

    const [cantidad, setCantidad] = useState(0)

    const {setNotification} = useNotification()

    const {addItem, getProductQuantity} = useContext(CartContext) 
  
    
    const handleOnAdd = (count) => {
        setCantidad(count)
        setNotification('success', 'Se agrego correctamente al carrito ')
        addItem({id,name,price,count})

    }
    return(
        <section className='box' >
        
        <div className='card'>
                <div className="boxCard">
                <h2>{name}</h2>
                <p className='boxText'>{description}</p>
                <p>Stock Disponible:  {stock}</p> 
             <div className='box-itemCount'>
                {cantidad > 0 
                ? <Link to='/cart'>Finalizar la compra</Link> 
                : <ItemCount stock={stock} onConfirm={handleOnAdd} initial={getProductQuantity(id)?.count} />}
            </div>
               
            </div>
             <div className='box-img'>
                <img className='img' src={img} alt={"Imagen Producto"} />
            </div>
        </div> 

           
         
        </section>
  
    )
}





export default ItemDetail