import { createContext, useReducer } from 'react';

export const CartContext = createContext();

const initialState = {
  cartItems: []
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
        cartItems: [...state.cartItems, newItem]
      }
    default:
      break;
  }
};


export const CartContextProvider = ({children}) => {

  const [state, dispatch] = useReducer(reducer, initialState);

  const value = {
    cartItems: state.cartItems,
    addToCart: (productId, colorCode, storageCode) => {
      dispatch({ type: 'add_to_cart', productId, colorCode, storageCode });
    }
  };

  return (
    <CartContext.Provider value={value}>
      {children}
    </CartContext.Provider>
  );
}