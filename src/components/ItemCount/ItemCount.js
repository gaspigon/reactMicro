
import {useState} from 'react'
import '../ItemCount/ItemCount.css'
import ButtonCount from '../ButtonCount/ButtonCount'




const Itemcount = ({stock,onConfirm,initial=1}) => {

    const [count, setCount] = useState(initial)


    const decrement = () => {
        if (count > 1){
            setCount(count - 1)
        }
    }

    const increment = () => {
        if (count < stock)setCount(count + 1)
    }


    return(
        <div >
            <div className='box-count'>
                <ButtonCount handleClick={decrement} label='-' color='red'/>  
                <p className='number'>{count}</p>
              
                 <ButtonCount handleClick={increment} label='+' color='green' />  
             </div>
            <div>
                <button className='btn-agregar' onClick={() => onConfirm(count)}>Agregar a carrito</button>
            </div>
        </div>
    )
}

export default Itemcount