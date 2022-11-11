import React, { Component } from 'react';
import { Link } from "react-router-dom";

class Navbar extends Component {
    render() {
      return (
        <div className='navbar navbar-expand navbar-light bg-light'>
          <div className='container-fluid'>
            <a className='navbar-brand ms-3' href=''>Marca</a>
            <ul className='navbar-nav ms-4 me-auto'>
              <li className='nav-item'><Link className='nav-link' to="/">Lista de productos</Link></li>
              <li className='nav-item'><Link className='nav-link' to="/product">Detalles de producto</Link></li>
            </ul>
            <div className='me-3'>
              Carrito: 0
            </div>
          </div>
        </div>
      );
    }
}


export default Navbar;