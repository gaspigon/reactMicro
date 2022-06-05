import React from 'react'
import {useState} from 'react'
import ButtonCount from '../ButtonCount/ButtonCount'
import '../ItemCount/ItemCount.css'




const Itemcount = ({stock}) => {
    const [count, setCount] = useState(1)

    const decrement = () => {
        if (count > 1) setCount((count) => count -1)
    }

    const increment = () => {
        if (count < stock)setCount(count + 1)
    }


    return(
        <div >
            <div style={{display:'flex',justifyContent:'center',marginTop:45}}>
                <ButtonCount handleClick ={decrement} label='-' color='red'/>
                <p className='number'>{count}</p>
                <ButtonCount handleClick={increment} label='+' color='green' />
            </div>

        <div className='box-btn'>
                <button className='btn-agregar'>Agregar a carrito</button>
        </div>
            
        </div>
    )
}

export default Itemcount