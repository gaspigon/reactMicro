import React from 'react'
import '../ItemDetail/ItemDetail.css'



const ItemDetail = ({name,img,description}) =>{
    return(
        <div className='box'>
             
            <div className="boxCard">
                <h2>{name}</h2>
                <p className='boxText'>{description}</p>
            </div>
            <div className='box-img'>
                <img className='img' src={img} />
            </div>
           
         
        </div>
  
    )
}





export default ItemDetail