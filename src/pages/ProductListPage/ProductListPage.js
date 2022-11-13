import React, { useState, useEffect, useMemo } from 'react';
import { productsApiService } from "../../services"
import { ProductItem } from "../../components"

export function ProductListPage() {

  const [areProductsLoading, setAreProductsLoading] = useState(true);
  const [allProducts, setAllProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);


  useEffect(() => {
    document.title = "Lista de productos";

    productsApiService.getAllProducts().then(products => {
      console.log("products", products);
      setAllProducts(products);
      setFilteredProducts(products);
    }).finally(() => {
      setAreProductsLoading(false);
    });
  }, []);


  const onSearchbarChange = (event) => {
    const term = event.target.value;
    console.log("searchTerm", term)

    if(term) {
      // Reload filtered results array
      const termLower = term.toLowerCase();
      const filteredItems = allProducts.filter(product => 
        ((product.brand && product.brand.toLowerCase().includes(termLower)) || 
          (product.model && product.model.toLowerCase().includes(termLower))) ? true : false
      );
      console.log("filteredItems", filteredItems)
      
      // Set new array
      setFilteredProducts(filteredItems);
    } else {
      setFilteredProducts(allProducts);
    }
  }

  const productsComponents = useMemo(() => {
    return filteredProducts.map(product => {
      return (
      <div key={product.id} className='product-container col-lg-3 col-md-4 col-sm-6 mb-4'>
        <ProductItem product={product} />
      </div>);
    });
  }, [filteredProducts]);


  return (
    <div className='mt-4'>

      <div className='d-flex justify-content-end'>
        <div className='input-group' style={{maxWidth: "300px"}}>
          <input type="text" className='form-control' onChange={onSearchbarChange}></input>
          <button className='btn btn-primary' onClick={() => {}}>Buscar</button>
        </div>
      </div>

      {!areProductsLoading && (
        <div className='row mt-4'>
          {productsComponents}
        </div>
      )}
      {areProductsLoading && (
        <div className='text-center mt-5'>
          <i className="fa fa-circle-o-notch fa-spin fa-3x"></i>
        </div>
      )}
    </div>
  );
}