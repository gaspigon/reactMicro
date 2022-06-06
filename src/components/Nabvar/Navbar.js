
import '../Nabvar/Navbar.css'
import CartWidget from '../CartWidget/CartWidget'
import { NavLink } from 'react-router-dom'



const Navbar = () => {
    return (
        <nav className="nav">
            
            <div className= "box-nav" >
                <img className="img-nav" src={process.env.PUBLIC_URL + '/logo3.png'} alt="logo"/>
               
                <ul className="box-links">
                    <li className="links">
                        <NavLink to={'/'} className={({isActive}) => isActive ? 'madeClick' : 'btn'}>Inicio</NavLink>
                        
                    </li>
                    <li className="links">
                        <NavLink to={'/category/3d'} className={({isActive}) => isActive ? 'madeClick' : 'btn'}>Accesorios</NavLink>
                    </li>
                    <li className="links">
                        <NavLink to={'/category/impresoras'} className={({isActive}) => isActive ? 'madeClick' : 'btn'}>Impresoras</NavLink>
                    </li>
                    <li className="links">
                        <NavLink to={'/category/robotica'} className={({isActive}) => isActive ? 'madeClick' : 'btn'}>Robotica</NavLink>

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