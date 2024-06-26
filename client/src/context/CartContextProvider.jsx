import { createContext, useContext, useReducer } from "react";
import { reducer } from "../reducers/CartReducers";

const CartStateContext = createContext();
const CartDispatchContext = createContext();

const CartContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, []);

  return (
    <CartStateContext.Provider value={state}>
      <CartDispatchContext.Provider value={dispatch}>
        {children}
      </CartDispatchContext.Provider>
    </CartStateContext.Provider>
  );
};
export default CartContextProvider;

export const useCartState = () => {
  return useContext(CartStateContext);
};

export const useCartDispatch = () => {
  return useContext(CartDispatchContext);
};
