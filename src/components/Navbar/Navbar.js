import React, { useContext } from 'react';
import { Link } from "react-router-dom";
import { CartContext } from "../../contexts/CartContext"

export function Navbar() {

  const { cartItems } = useContext(CartContext);

  console.log("cart items updated: ", cartItems);

  return (
    <div className='navbar navbar-expand navbar-light bg-light'>
      <div className='container-fluid'>
        <Link className='navbar-brand ms-3' to='/'>MyEcommerce</Link>
        <ul className='navbar-nav ms-4 me-auto'>
          <li className='nav-item'><Link className='nav-link' to="/">Lista de productos</Link></li>
          <li className='nav-item'><Link className='nav-link' to="/product">Detalles de producto</Link></li>
        </ul>
        <div className='me-3'>
          Carrito: {cartItems.length}
        </div>
      </div>
    </div>
  );
}