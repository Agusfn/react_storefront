import React, { Component } from 'react';
import { Link } from "react-router-dom";
import logo from '../../assets/test.png';


export default function ProductItem(props) {

  const product = props.product;

  return (
    <Link onClick={props.click}>
      <div className='product-item'>
        <img src={product?.imgUrl ? product.imgUrl : logo} />
      </div>
    </Link>
  );


}