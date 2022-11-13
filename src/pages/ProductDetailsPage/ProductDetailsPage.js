import React, { useContext, useEffect, useState } from 'react';
import { cartApiService, productsApiService } from "../../services";
import { useParams } from "react-router-dom";
import { ProductSpecsTable, ProductOptionsSelector } from "../../components";
import { CartContext } from "../../contexts/CartContext"
import { formatPrice } from '../../utils/numbers';


export function ProductDetailsPage() {
  
  const [isProductLoading, setIsProductLoading] = useState(true);
  const [product, setProduct] = useState(false);
  const [selectedColorCode, setSelectedColorCode] = useState(null);
  const [selectedStorageCode, setSelectedStorageCode] = useState(null);
  const [isAddingToCart, setIsAddingToCart] = useState(false);

  const { addToCart } = useContext(CartContext);
  const params = useParams();
  const productId = params.productId;

  const productName = (product.brand ? product.brand+' ' : '') + (product.model ? product.model : '');

  useEffect(() => {
    if(productId) {
      productsApiService.getProduct(productId).then(product => {
        console.log("product", product)
        setProduct(product);
        const productName = (product.brand ? product.brand+' ' : '') + (product.model ? product.model : '');
        document.title = productName;
      }).catch(error => {
        console.log("error", error.message);
      }).finally(() => {
        setIsProductLoading(false);
      })
    } else {
      setIsProductLoading(false);
    }
  }, []);


  useEffect(() => {
    const productName = (product.brand ? product.brand+' ' : '') + (product.model ? product.model : '');

    document.title = product ? productName : "";
  }, [product]);


  const optionsSelected = (product && ((product.options?.storages && selectedStorageCode) || !product.options?.storages) && 
    ((product.options?.colors && selectedColorCode) || !product.options?.colors)) ? true : false;


  const onAddToCartClick = () => {
    setIsAddingToCart(true);

    cartApiService.addProduct(product.id, selectedColorCode, selectedStorageCode).then(response => {
      addToCart(product.id, selectedColorCode, selectedStorageCode);
    }).finally(() => {
      setIsAddingToCart(false);
    })
  };   


  return (
    <div className='mt-4'>

      {isProductLoading && 
        <div className='not-found-title'><i className="fa fa-circle-o-notch fa-spin fa-3x"></i></div>
      }

      {!isProductLoading && !product && 
        <div className='not-found-title'><h3>No se ha encontrado el producto.</h3></div>
      }

      {product && !isProductLoading && (
        <div className='row'>
          <div className='col-md-5 p-4'>
            <img src={product.imgUrl} style={{width: "100%"}} alt={productName} />
          </div>

          <div className='col-md-7 p-4'>

            <div className='card mb-3'>
              <div className='card-body p-4'>

                <h3 className='mb-4'>{productName}</h3>

                <div className='mb-4 product-price'>
                  Precio:
                  {product.price && (
                    <span className='price-val'>{formatPrice(product.price, 2)}</span>
                  )}
                  {!product.price && (
                    <span>&nbsp;No disponible</span>
                  )}
                </div>

                <div className='row'>
                  <div className='col-lg-6'>
                    {product?.options?.storages && (
                      <ProductOptionsSelector 
                        title="Almacenamiento" 
                        existingOptions={product.options.storages}
                        selectedOptionCode={selectedStorageCode}
                        onOptionCodeSelect={setSelectedStorageCode}
                      />
                    )}
                  </div>
                  <div className='col-lg-6'>
                  {product?.options?.colors && (
                    <ProductOptionsSelector 
                      title="Color" 
                      existingOptions={product.options.colors}
                      selectedOptionCode={selectedColorCode}
                      onOptionCodeSelect={setSelectedColorCode}
                    />
                    )}
                  </div>
                </div>

                <div className='text-center mt-3'>
                  <button 
                    className='btn btn-primary w-75' 
                    disabled={!optionsSelected || isAddingToCart || !product.price}
                    onClick={onAddToCartClick}>
                    Añadir al carrito
                    {isAddingToCart && <i className="fa fa-circle-o-notch fa-spin ms-2"></i>}
                  </button>
                  {!optionsSelected && ( 
                    <div style={{fontSize: "13px"}}>Selecciona las opciones para añadir al carro</div>
                  )}
                </div>

              </div>
            </div>


            <div className='card mb-3'>
              <div className='card-body p-4'>
                <h4 className='mb-3'>Especificaciones</h4>
                <ProductSpecsTable product={product} />
              </div>
            </div>

          </div>
        </div>
      )}

    </div>
  );
}