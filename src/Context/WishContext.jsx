import { createContext, useContext, useReducer } from "react";
import {WishlistReducer} from '../Reducer/WishlistReducer'
const WishContext = createContext();
const WishProvider = ({children})=>{
const initialState={
   wish:[]
}
const [{wish},dispatchs] = useReducer(WishlistReducer,initialState);
return(
    <WishContext.Provider value={{wish,dispatchs}}>
        {children}
    </WishContext.Provider>
)
}
const useWish =()=> useContext(WishContext);
export {useWish,WishProvider}