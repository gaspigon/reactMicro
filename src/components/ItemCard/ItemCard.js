import React from 'react'
import '../ItemCard/ItemCard.css'


const ItemCard = ({id, name, price,img,stock}) => {
    
    return(
       <div className='box-card'>
                    <img className='img-card' alt='imagen' src={img}/>
                     <p>{name}</p>
                     <button className='btn-detalle'>Ver Detalle</button>
                     {/* <p>Stock Disponible:  {stock}</p> */}
                     {/* <Itemcount stock={stock}/> */}
                     {/* <button className='btn-cart'>Agregar a carrito</button> */}
        </div>
    
)
}

export default ItemCard