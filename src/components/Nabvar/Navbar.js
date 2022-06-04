
import '../Nabvar/Navbar.css'
import CartWidget from '../CartWidget/CartWidget'
import { Link } from 'react-router-dom'



const Navbar = () => {
    return (
        <nav className="nav">
            
            <div className= "box-nav" >
                <img className="img-nav" src={process.env.PUBLIC_URL + '/logo3.png'} alt="logo"/>
               
                <ul className="box-links">
                    <li className="links">
                    
                        <Link className='btn' to='/'>Inicio</Link>
                    </li>
                    <li className="links">
                       
                        <Link className='btn' to='/category/3d'>Accesorios</Link>
                    </li>
                    <li className="links">
     
                        <Link className='btn' to='/category/impresoras'>Impresoras</Link>
                    </li>
                    <li className="links">
  
                        <Link className='btn' to='/category/robotica'>Robotica</Link>
                    </li>
                    <li className="links"> 
                        <CartWidget />
                    </li>
                </ul>
            </div>
        </nav>
    )
}

export default Navbar