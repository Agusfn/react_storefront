import React from 'react';
import { createContext, useReducer } from 'react';

export const StorefrontContext = createContext();

const initialState = {
  cartItems: [],
  existingProducts: [],
  lastProductsSetUnix: 0
};

const reducer = (state, action) => {
  switch(action.type) {
    case "add_to_cart":
      const newItem = {
        productId: action.productId,
        colorCode: action.colorCode,
        storageCode: action.storageCode
      };
      return {
        cartItems: [...state.cartItems, newItem],
        existingProducts: state.existingProducts,
        lastProductsSetUnix: state.lastProductsSetUnix
      }
    case "set_products":
      return {
        cartItems: state.cartItems,
        existingProducts: action.productList, // set new products array
        lastProductsSetUnix: Date.now()
      }
    default:
      break;
  }
};


export const StorefrontContextProvider = ({children}) => {

  const [state, dispatch] = useReducer(reducer, initialState);

  const value = {
    cartItems: state.cartItems,
    existingProducts: state.existingProducts,
    lastProductsSetUnix: state.lastProductsSetUnix,
    addToCart: (productId, colorCode, storageCode) => {
      dispatch({ type: 'add_to_cart', productId, colorCode, storageCode });
    },
    setExistingProducts: (productList) => {
      dispatch({ type: 'set_products', productList })
    }
  };

  return (
    <StorefrontContext.Provider value={value}>
      {children}
    </StorefrontContext.Provider>
  );
}