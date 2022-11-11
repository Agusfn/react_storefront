import React, { Component, useState, useEffect } from 'react';
import ProductItem from "../../components/ProductItem/ProductItem";

export default function ProductListPage() {

    useEffect(() => {
        console.log("product list page loaded")
        console.log(process.env.REACT_APP_MY_VARIABLE)
    });

    return (
      <div className='mt-4'>

        <div className='d-flex justify-content-end'>
          <div className=''>
            <input type="text" className='form-control'></input>
          </div>
        </div>

        <div className='row mt-4'>
          <ProductItem></ProductItem>
          <ProductItem></ProductItem>
          <ProductItem></ProductItem>
          <ProductItem></ProductItem>

          <ProductItem></ProductItem>
          <ProductItem></ProductItem>
          <ProductItem></ProductItem>
          <ProductItem></ProductItem>

          <ProductItem></ProductItem>
          <ProductItem></ProductItem>
          <ProductItem></ProductItem>
          <ProductItem></ProductItem>
        </div>

      </div>
    );
}