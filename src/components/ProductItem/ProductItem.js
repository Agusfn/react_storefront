import React from 'react';
import { Link } from "react-router-dom";
import logo from '../../assets/test.png';


export function ProductItem(props) {

  const product = props.product;
  const productUrl = "/product/" + product.id;
  const price = Number.parseFloat(product.price);

  const productName = (product.brand ? product.brand : '') + (product.model ? ' '+product.model : '');

  return (
    <div className='product-item'>
      <Link to={productUrl}>
        <div className='text-center'>
          <img 
            src={product?.imgUrl ? product.imgUrl : logo} 
            alt={productName}
            style={{maxHeight: "200px", objectFit: "contain"}} 
          />
        </div>
      </Link>
      <div className='row mt-2'>
        <div className='col-8'>
          <Link to={productUrl}>{productName}</Link>
        </div>
        <div className='col-4'>{price} €</div>
      </div>
    </div>
  );


}