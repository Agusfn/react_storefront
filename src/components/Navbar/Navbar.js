import React, { useContext } from 'react';
import { Link, useLocation } from "react-router-dom";
import { CartContext } from "../../contexts/CartContext"

export function Navbar() {

  const { cartItems } = useContext(CartContext);
  const location = useLocation();

  console.log("current location", location);

  return (
    <div className='navbar navbar-expand-md navbar-light bg-light'>
      
      <div className='container-fluid'>

        <Link className='navbar-brand ms-3' to='/'>MyEcommerce</Link>

        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className='navbar-nav ms-md-4 me-auto'>
            <li className='nav-item'>
              <Link className={'nav-link' + (location.pathname == "/" ? " active" : "")} to="/">Lista de productos</Link>
            </li>
            {location.pathname.startsWith("/product") && (<>
              <li className='nav-item nav-link d-none d-md-block'>/</li>
              <li className='nav-item'><Link className='nav-link active' to="/product">Detalles de producto</Link></li>
            </>)}
          </ul>
          <div className='me-3'>
            Carrito: {cartItems.length}
          </div>
        </div>

      </div>
    </div>
  );
}