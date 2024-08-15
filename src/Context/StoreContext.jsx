import { createContext, useState } from "react";
import { product_list } from "../assets/assets";

export const StoreContext =createContext(null)

const StoreContextProvider =(props)=>{

const [cartItem,setCartItem] =useState({});

const addToCart = (itemId) =>{
    if(!cartItem[itemId]){
        setCartItem((prev)=>({...prev,[itemId]:1}))
    }
    else{
        setCartItem((prev)=>({...prev,[itemId]:prev[itemId]+1}))
    }
}
const removeFromCart =(itemId) =>{
    setCartItem((prev)=>({...prev,[itemId]:prev[itemId]-1}))
}

 const getTotalCartAmount = () =>{
    let totalamount =0;
    for(const item in cartItem)
    {  if (cartItem[item]>0) {
         let itemInfo = product_list.find((product)=>product.id===item);
        totalamount += itemInfo.price * cartItem[item] 
    }
    }
    return totalamount;
 }



    const contextValue={
product_list,
cartItem,
setCartItem,
addToCart,
removeFromCart,
getTotalCartAmount
    }
    return(
        <StoreContext.Provider value={contextValue}>
            {props.children}
        </StoreContext.Provider>
    )
}
export default  StoreContextProvider;