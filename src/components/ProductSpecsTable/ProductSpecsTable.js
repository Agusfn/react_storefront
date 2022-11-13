import React from 'react';


export function ProductSpecsTable(props) {

  const product = props.product;

  const primaryCamSpecs = Array.isArray(product.primaryCamera) ? product.primaryCamera.join(" ") : 
    product.primaryCamera;

  return (
    <table className='table specs-table'>
    <tbody>
      <tr>
        <td>Marca: </td>
        <td>{product.brand}</td>
      </tr>
      <tr>
        <td>Modelo: </td>
        <td>{product.model}</td>
      </tr>
      <tr>
        <td>CPU: </td>
        <td>{product.cpu}</td>
      </tr>
      <tr>
        <td>RAM: </td>
        <td>{product.ram}</td>
      </tr>
      <tr>
        <td>Sistema Operativo: </td>
        <td>{product.os}</td>
      </tr>
      <tr>
        <td>Resolución de pantalla: </td>
        <td>{product.displayResolution}</td>
      </tr>
      <tr>
        <td>Batería: </td>
        <td>{product.battery}</td>
      </tr>
      <tr>
        <td>Cámaras: </td>
        <td>
          <ul>
            {primaryCamSpecs && (
              <li>Primaria: {primaryCamSpecs}</li>
            )}
            {product.secondaryCmera && (
              <li>Secundaria: {product.secondaryCmera}</li>
            )}
          </ul>
        </td>
      </tr>
      <tr>
        <td>Dimensiones: </td>
        <td>{product.dimentions}</td>
      </tr>

      {product.weight && 
        <tr>
          <td>Peso: </td>
          <td>{product.weight} g</td>
        </tr>
      }

    </tbody>
  </table>
  );


}