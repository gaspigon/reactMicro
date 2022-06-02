import React from 'react'
import '../Nabvar/Navbar.css'
import CartWidget from '../CartWidget/CartWidget'



const Navbar = () => {
    return (
        <nav className="nav">
            
            <div className= "box-nav" >
                <img className="img-nav" src={process.env.PUBLIC_URL + '/logo3.png'} alt="logo"/>
               
                <ul className="box-links">
                    <li className="links">
                        <button className="btn">Inicio</button>
                    </li>
                    <li className="links">
                        <button className="btn">Accesorios</button>
                    </li>
                    <li className="links">
                        <button className="btn">Impresoras</button>
                    </li>
                    <li className="links">
                        <button className="btn">Robotica</button>
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