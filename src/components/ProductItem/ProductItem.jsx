import React from 'react';
import { Link } from "react-router-dom";
import logo from '../../assets/test.png';
import { formatPrice } from '../../utils/numbers';


export function ProductItem(props) {

  const product = props.product;
  const productUrl = "/product/" + product.id;

  const productName = (product.brand ? product.brand : '') + (product.model ? ' '+product.model : '');

  return (
    <div className='product-item h-100'>
      <div className='product-item-inner'>
        <Link to={productUrl}>
          <div className='text-center'>
            <img 
              src={product?.imgUrl ? product.imgUrl : logo} 
              alt={productName}
              style={{maxHeight: "200px", objectFit: "contain"}}
              aria-label={"productImage"}
            />
          </div>
        </Link>
        <div className='row mt-3 fs-5'>
          <div className='col-8'>
            <Link className='product-link' to={productUrl}>{productName}</Link>
          </div>
          {product.price && (
            <div className='col-4'>
              <span className='price'>{formatPrice(product.price, 2)}</span>
            </div>
          )}
        </div>
      </div>
    </div>
  );


}