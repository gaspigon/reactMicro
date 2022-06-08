import React from 'react'
import { Link } from 'react-router-dom'
import '../ItemCard/ItemCard.css'


const ItemCard = ({id, name, img}) => {
    
    return(
       <div className='box-card'>
                    <img className='img-card' alt='imagen' src={img}/>
                     <p>{name}</p>
                     <Link className='btn-detalle' to={`/detail/${id}`} >Ver Detalle</Link>
        </div>
    
)
}

export default ItemCard