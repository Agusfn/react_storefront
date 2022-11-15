import React, { useContext } from 'react';
import { Link, useLocation } from "react-router-dom";
import { StorefrontContext } from "../../contexts/StorefrontContext"

export function Navbar() {

  const { cartItems } = useContext(StorefrontContext);
  const location = useLocation();

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
              <Link className={'nav-link' + (location.pathname === "/" ? " active" : "")} to="/">Lista de productos</Link>
            </li>
            {location.pathname.startsWith("/product") && (<>
              <li className='nav-item nav-link d-none d-md-block'>/</li>
              <li className='nav-item'><Link className='nav-link active'>Detalles de producto</Link></li>
            </>)}
          </ul>

          <button type="button" className="btn btn-light">
            Carrito <span className="badge bg-secondary" id="cartCount">{cartItems.length}</span>
          </button>

        </div>

      </div>
    </div>
  );
}