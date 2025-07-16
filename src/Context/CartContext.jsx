import { createContext,useContext,useReducer} from "react";
import { cartReducer } from "../Reducer/CartReducer";
const CartContext = createContext();
const CartProvider =({children})=>{
        const initialState = {
            cart:[],
        }
        const[{cart},dispatch]=useReducer(cartReducer,initialState);
    return(

        <>
           < CartContext.Provider value={{cart,dispatch}}>
           {children}
           </CartContext.Provider>
        </>
    )
}
const useCart =()=> useContext(CartContext);
export {useCart,CartProvider};
