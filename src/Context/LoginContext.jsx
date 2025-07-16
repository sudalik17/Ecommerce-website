import { createContext, useContext,useReducer } from "react";
import { LoginReducer } from "../Reducer/LoginReducer";
const LoginContext = createContext();
const LoginProvider =({children})=>{
const initialState={
    email:'',
    password:'',
    token:""
}
const [state,logindispatch] = useReducer(LoginReducer,initialState);
return(
    <>
<LoginContext.Provider value={{...state,logindispatch}}>
    {children}
</LoginContext.Provider>
</>
)
}
const useLogin =()=> useContext(LoginContext);
export {useLogin,LoginProvider};