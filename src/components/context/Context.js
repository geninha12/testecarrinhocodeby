import React, { useContext, useReducer } from "react";
import { cartReducer } from "./Reducer";
import productList from '../../realjson.json'

export const CardContext = React.createContext({});

const CardTest = ({ children }) => {
    const products = productList.items.map((item) => ({
      id: item.id,
      photo: item.imageUrl,
      name: item.name,
      realPrice: item.price,
      sellingPrice: item.sellingPrice,    
  }))

    const [ state, dispatch ] = useReducer(cartReducer, {
      products: products,
      cart:[]
    })
    return (
      
        <CardContext.Provider value={{ state, dispatch}}>
          {children}
        </CardContext.Provider>
    )
    
  }
  
  export default CardTest;

  export const CartState=()=>{
    return useContext(CardContext);
  }