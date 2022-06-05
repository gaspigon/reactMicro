import React from 'react'
import '../ItemDetail/ItemDetail.css'
import ItemCount from '../ItemCount/ItemCount'



const ItemDetail = ({name,img,description,stock}) =>{
    return(
        <div className='box'>
             
            <div className="boxCard">
                <h2>{name}</h2>
                <p className='boxText'>{description}</p>
                <p>Stock Disponible:  {stock}</p> 
                <ItemCount stock={stock} />
                {/* <Itemcount stock={stock}/> */}
            </div>
            <div className='box-img'>
                <img className='img' src={img} />
            </div>
           
         
        </div>
  
    )
}





export default ItemDetail