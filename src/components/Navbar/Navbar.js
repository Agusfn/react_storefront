import React, { Component } from 'react';
import { Link } from "react-router-dom";

class Navbar extends Component {
    render() {
      return (
        <ul>
          <li><Link to="/">Lista de productos</Link></li>
          <li><Link to="/product">Detalles de producto</Link></li>
        </ul>
      );
    }
}


export default Navbar;