import React from 'react';
import { useState } from 'react';
import { ProductOptionsSelector } from "../ProductOptionsSelector/ProductOptionsSelector";
import { formatPrice } from '../../utils/numbers';


export const ProductPurchaseOptionsCard = ({product, onProductAddToCart, isAddingToCart}) => {

  const productName = (product.brand ? product.brand+' ' : '') + (product.model ? product.model : '');

  const [selectedColorCode, setSelectedColorCode] = useState(null);
  const [selectedStorageCode, setSelectedStorageCode] = useState(null);

  const areOptionsSelected = (product && ((product.options?.storages && selectedStorageCode) || !product.options?.storages) && 
    ((product.options?.colors && selectedColorCode) || !product.options?.colors)) ? true : false;

  
  const onAddToCartClick = () => {
    onProductAddToCart(selectedColorCode, selectedStorageCode);
  };

  return (
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
            disabled={!areOptionsSelected || isAddingToCart || !product.price}
            onClick={onAddToCartClick}>
            Añadir al carrito
            {isAddingToCart && <i className="fa fa-circle-o-notch fa-spin ms-2"></i>}
          </button>
          {!areOptionsSelected && ( 
            <div style={{fontSize: "13px"}}>Selecciona las opciones para añadir al carro</div>
          )}
        </div>

      </div>
    </div>
  );

}