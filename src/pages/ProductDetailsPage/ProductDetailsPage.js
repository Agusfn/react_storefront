import React, { Component, useEffect, useState } from 'react';
import productsApiService from "../../services/productApiService";
import img from '../../assets/test.png';
import { useLocation, useParams } from "react-router-dom";
import ProductSpecsTable from "../../components/ProductSpecsTable/ProductSpecsTable"
import ProductOptionsSelector from '../../components/ProductOptionsSelector/ProductOptionsSelector';

export default function ProductDetailsPage() {

  const [isProductLoading, setIsProductLoading] = useState(true);
  const [product, setProduct] = useState(false);

  const params = useParams();
  const productId = params.productId;

  useEffect(() => {
    if(productId) {
      console.log("AA");
      productsApiService.getProduct(productId).then(product => {
        console.log("product", product);
        setProduct(product);
      }).catch(error => {
        console.log("error", error.message);
      }).finally(() => {
        setIsProductLoading(false);
      })
    } else {
      setIsProductLoading(false);
    }
  }, []);


  if(product.options)


  return (
    <div className='mt-4'>

        {product && (
          <div className='row'>
            <div className='col-md-5 p-4'>
              <img src={product.imgUrl} style={{width: "100%"}}></img>
            </div>

            <div className='col-md-7 p-4'>

              <div className='card mb-3'>
                <div className='card-body p-4'>
                  <h4 className='mb-3'>Especificaciones</h4>
                  <ProductSpecsTable product={product} />
                </div>
              </div>

              <div className='card'>
                <div className='card-body p-4'>

                  {product?.options?.storages &&
                    <ProductOptionsSelector title="Almacenamiento" options={product.options.storages} />
                  }

                  {product?.options?.colors && 
                    <ProductOptionsSelector title="Color" options={product.options.colors} />
                  }

                  <div className='text-center'>
                    <button className='btn btn-primary mt-3 w-75'>Añadir a la cesta</button>
                  </div>

                </div>
              </div>

            </div>
          </div>
        )}

    </div>
  );
}