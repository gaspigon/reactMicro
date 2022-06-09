
import '../ItemDetail/ItemDetail.css'
import ItemCount from '../ItemCount/ItemCount'
import { useState , useContext} from 'react'
import { Link } from 'react-router-dom'
import { CartContext } from '../../context/CartContext'


const ItemDetail = ({id,price,name,img,description,stock}) =>{

    const [cantidad, setCantidad] = useState(0)

    const {cart, addItem} = useContext(CartContext) 
  
    
    const handleOnAdd = (count) => {
        console.log('agregue al carrito')
        console.log(count)
        setCantidad(count)
        addItem({id,name,price,count})

    }
    return(
        <div className='box'>
             
            <div className="boxCard">
                <h2>{name}</h2>
                <p className='boxText'>{description}</p>
                <p>Stock Disponible:  {stock}</p> 
            <div className='box-itemCount'>
                {cantidad > 0 ? <Link to='/cart'>Finalizar la compra</Link> : <ItemCount stock={stock} onConfirm={handleOnAdd} />}
            </div>
               
            </div>
            <div className='box-img'>
                <img className='img' src={img} />
            </div>
           
         
        </div>
  
    )
}





export default ItemDetail