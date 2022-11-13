import React, { Component } from 'react';
import { Link } from "react-router-dom";
import logo from '../../assets/test.png';


export default function ProductItem(props) {

  const product = props.product;
  const productUrl = "/product/" + product.id;
  const price = Number.parseFloat(product.price);

  return (

      <div className='product-item'>
        <Link to={productUrl}>
          <div className='text-center'>
            <img src={product?.imgUrl ? product.imgUrl : logo} style={{maxHeight: "200px", objectFit: "contain"}} />
          </div>
        </Link>
        <div className='row mt-2'>
          <div className='col-8'>
            <Link to={productUrl}>{product.brand + ' ' + product.model}</Link>
          </div>
          <div className='col-4'>€ {price}</div>
        </div>

      </div>
  );


}