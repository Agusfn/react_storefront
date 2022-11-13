import React, { useContext, useEffect, useState } from 'react';
import { cartApiService, productsApiService } from "../../services";
import { useParams } from "react-router-dom";
import { ProductSpecsTableCard, ProductPurchaseOptionsCard } from "../../components";
import { CartContext } from "../../contexts/CartContext"


export function ProductDetailsPage() {
  
  const [isProductLoading, setIsProductLoading] = useState(true);
  const [product, setProduct] = useState(false);
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
  }, [productId]);


  const addProductVariationToCart = (colorCode, storageCode) => {
    setIsAddingToCart(true);

    // Call for cart API service
    cartApiService.addProduct(product.id, colorCode, storageCode).then(response => {
      console.log("add to cart response", response);
      // Add to local storage cart
      addToCart(product.id, colorCode, storageCode);
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
            <ProductPurchaseOptionsCard 
              product={product} 
              onProductAddToCart={addProductVariationToCart}
              isAddingToCart={isAddingToCart} 
            />
            <ProductSpecsTableCard product={product} />
          </div>
        </div>
      )}

    </div>
  );
}