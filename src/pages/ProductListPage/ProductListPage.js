import React, { useState, useEffect } from 'react';
import { productsApiService } from "../../services"
import { useNavigate } from "react-router-dom";
import { ProductItem } from "../../components"

export function ProductListPage() {

  const navigate = useNavigate();
  const [products, setProducts] = useState([]);


  useEffect(() => {
    productsApiService.getAllProducts().then(products => {
      console.log("products", products);
      setProducts(products);
    });
  }, []);


  const productElements = products.map(product => {
    return (
    <div key={product.id} className='col-lg-3 col-md-4 col-sm-6 mb-3'>
      <ProductItem product={product} />
    </div>);
  });

  return (
    <div className='mt-4'>

      <div className='d-flex justify-content-end'>
        <div className='input-group' style={{maxWidth: "300px"}}>
          <input type="text" className='form-control'></input>
          <button className='btn btn-primary' onClick={() => {}}>Buscar</button>
        </div>
      </div>

      <div className='row mt-4'>
        {productElements}
      </div>

    </div>
  );
}