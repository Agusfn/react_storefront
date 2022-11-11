import React, { Component } from 'react';
import productsApiService from "../../services/productApiService";
import img from '../../assets/test.png';

export default function ProductDetailsPage() {

  const func = () => {
    productsApiService.getProduct("ZmGrkLRPXOTpxsU4jjAcv").then(products => {
      console.log("products", products)
    })
  }

  return (
    <div className='mt-4'>
      <div className='row'>

        <div className='col-md-5 p-4'>
          <img src={img} style={{width: "100%"}}></img>
        </div>

        <div className='col-md-7 p-4'>

          <div className='card mb-3'>
            <div className='card-body p-4'>
              
              <h4 className='mb-3'>Especificaciones</h4>

              <table className='table specs-table'>
                <tbody>
                  <tr>
                    <td>Marca: </td>
                    <td>AAAA</td>
                  </tr>
                  <tr>
                    <td>Modelo: </td>
                    <td>AAAA</td>
                  </tr>
                  <tr>
                    <td>Precio: </td>
                    <td>AAAA</td>
                  </tr>
                  <tr>
                    <td>CPU: </td>
                    <td>AAAA</td>
                  </tr>
                  <tr>
                    <td>RAM: </td>
                    <td>AAAA</td>
                  </tr>
                  <tr>
                    <td>Sistema Operativo: </td>
                    <td>AAAA</td>
                  </tr>
                  <tr>
                    <td>Resolución de pantalla: </td>
                    <td>AAAA</td>
                  </tr>
                  <tr>
                    <td>Batería: </td>
                    <td>AAAA</td>
                  </tr>
                  <tr>
                    <td>Cámaras: </td>
                    <td>AAAA</td>
                  </tr>
                  <tr>
                    <td>Dimensiones: </td>
                    <td>AAAA</td>
                  </tr>
                  <tr>
                    <td>Peso: </td>
                    <td>AAAA</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          <div className='card'>
            <div className='card-body p-4'>
              
              <div className='row'>
                <div className='col-xl-6'>
                  <div className='product-option-container'>
                    <h5 className='mb-3'>Almacenamiento</h5>
                    <div className='d-flex flex-wrap'>
                      <div className='product-option'>Hola</div>
                      <div className='product-option'>Hola</div>
                      <div className='product-option'>Hola</div>
                    </div>
                  </div>
                </div>

                <div className='col-xl-6'>
                  <div className='product-option-container'>
                    <h5 className='mb-3'>Color</h5>
                    <div className='d-flex flex-wrap'>
                      <div className='product-option'>Hola</div>
                      <div className='product-option'>Hola</div>
                      <div className='product-option'>Hola</div>
                    </div>
                  </div>
                </div>
              </div>

              <div className='text-center'>
                <button className='btn btn-primary mt-3 w-75'>Añadir a la cesta</button>
              </div>

            </div>
          </div>

        </div>
      </div>
    </div>
  );
}