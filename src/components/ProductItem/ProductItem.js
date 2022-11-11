import React, { Component } from 'react';
import { Link } from "react-router-dom";
import logo from '../../assets/test.png';

class ProductItem extends Component {
    render() {
      return (
        <div className='col-lg-3 col-md-4 col-sm-6 mb-3'>
          <div className='product-item'>
            <img src={logo}></img>
          </div>
        </div>
      );
    }
}


export default ProductItem;