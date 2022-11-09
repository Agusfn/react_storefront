import React, { Component } from 'react';
import productsApiService from "../../services/productApiService";

export default function ProductDetailsPage() {

  const func = () => {
    productsApiService.getProduct("ZmGrkLRPXOTpxsU4jjAcv").then(products => {
      console.log("products", products)
    })
  }

  return (
    <div>
        Contenido pagina product details.
        <button onClick={func}>Obtener productos</button>
    </div>
  );
}