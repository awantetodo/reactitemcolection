import React, { useContext } from 'react'
import logo from '../../../src/logo.png'
import { FaShoppingCart } from 'react-icons/fa';
import { Link, NavLink } from 'react-router-dom';
import CartWidget from '../CartWidget/CartWidget';
import { GlobalContext } from '../CartContext/CartContext';




const NavBar = () => {

    const {itemCount,carrito} = useContext(GlobalContext)

  return (
      
    <nav className="navbar navbar-expand-lg navbar-light bg-white">
        <div className="container-fluid">

                <Link to="/">

                    <img src={logo} alt="" width="250" height="75"/>
                </Link>
{/*             </a> */}
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNavDropdown">
                <ul className="navbar-nav">
                    <li className="nav-item">
                        {/* <a className="nav-link" href="#">FACIAL</a> */}
                        <Link className="nav-link" to="/category/Comidas">Comidas</Link>
                    </li>
                    <li className="nav-item">
                        {/* <a className="nav-link" href="#">CAPILAR</a> */}
                        <Link className="nav-link" to="/category/Bebidas">Bebidas</Link>
                    </li>
                    <li className="nav-item">
                        {/* <a className="nav-link" href="#">CORPORAL</a> */}
                        <Link className="nav-link" to="/category/Combos">Combos</Link>
                    </li>
                    <li className="nav-item">
                        {/* <a className="nav-link" href="#">MAQUILLAJE</a> */}
                        <Link className="nav-link" to="/category/Promos">Promos</Link>
                    </li>
                </ul>
                <div className='p-2 d-flex align-items-center justify-items-center' style={{width:"auto", fontSize:"40px",backgroundColor:"rgb(211,211,211)"}}>
                    <FaShoppingCart />
                    <p className='p-2' style={{marginBottom:'0',fontSize:"25px"}}>{carrito.map((cw)=>cw.cantidad).reduce((prev, curr) => prev + curr, 0)}</p>
                </div>
            </div>
        </div>

    </nav>



  )
}

export default NavBar