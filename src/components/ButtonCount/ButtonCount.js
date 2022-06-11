import React from 'react'
import '../ButtonCount/ButtonCount.css'

const ButtonCount = (props) => {
    return (
            <div className='box-count'>
                  <button className='btn-card' style={{color:props.color}} onClick={props.handleClick}>{props.label}</button>
            </div>
           
      
       
    )
}

export default ButtonCount