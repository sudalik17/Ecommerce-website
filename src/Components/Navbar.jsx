import { useState } from "react";
import { useNavigate } from "react-router-dom"
import { useLogin } from "../Context/LoginContext";
export const Navbar =()=>{
    const navigate = useNavigate();
    const[islogin,setislogin] = useState(false);
    const {token,logindispatch} = useLogin();
    function log(){
        if(!token.access_token){
             navigate('/login');
        }
        else{
                 logindispatch({
                    type:'LOGOUT'
                 })
                 navigate('/login');
        }
    }
    return(
        <>
        <header style={{display:"flex",alignItems:"center",marginBottom:"110px",justifyContent: "space-between",
        padding: "16px 24px",
        backgroundColor: "#4B0082",
        boxShadow: "0 2px 4px rgba(0,0,0,0.1)"}}>
           <div style={{ fontSize: "20px", fontWeight: "bold", color:"white"}}> shop it</div>
           <nav style={{ display: "flex", gap: "16px",marginLeft:"600px", fontSize: "24px",color:"white" }}>
            <span className="material-symbols-outlined" onClick={()=>navigate('/cart')} style={{cursor:"pointer"}}>
            add_shopping_cart
            </span>
            <span className="material-symbols-outlined" onClick={()=>navigate('/wish')} style={{cursor:"pointer"}}>
            favorite
            </span>
            <span className="material-symbols-outlined" onClick={()=>setislogin(!islogin)}>
            account_circle
            </span>
             <div>
               {islogin && <button style={{padding:"7px",background:"white",fontWeight:"normal",fontSize:"15px",textAlign:"center"}} onClick={log}>{token?.access_token ? 'LOGOUT' :'LOGIN'}</button>} 
            </div>
            </nav>
            
        </header>
        </>
    )
}