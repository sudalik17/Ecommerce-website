import { useNavigate } from "react-router-dom";
import { useLogin } from "../../Context/LoginContext";
import { LoginAuth } from "../../api/auth";
import { Signup } from "./Signup";
export const Login = ()=>{
    const navigate = useNavigate();
    const {email,password,token,logindispatch} = useLogin();
   async function onformsubmit(e){
     e.preventDefault();
     const data = await LoginAuth(email,password);
     console.log(data);
     logindispatch({
        type:'TOKEN',
        payload:{
            token:data
        }
     })
     if(data && data.access_token){
       navigate('/');
     }
     else{
        alert('Invalid credentials');
     }
    }
    function onEmail(e){
        logindispatch({
            type:'EMAIL',
            payload:e.target.value
        })
    }
    function onPassword(e){
        logindispatch({
            type:'PASSWORD',
            payload:e.target.value
        })
    }
    return(
        <>
        <form onSubmit={(e)=>{onformsubmit(e)}} style={{display:"flex",alignItems:"center",flexDirection:"column",justifyContent:"center",
            width:"300px",height:"320px",padding:"15px",border:"1px solid black",borderRadius:"6px",gap:"10px",marginLeft:"200px",
            backgroundColor:"darkviolet"
        }}>
            <label style={{color:"white",fontWeight:"bold"}}>Email</label>
            <input style={{padding:"10px",marginTop:"5px",color:"white",fontWeight:"bold"}} onChange={(e)=>{onEmail(e)}} type="email" value={email} placeholder="Enter email"/>
            <label style={{color:"white",fontWeight:"bold"}}>Password</label>
            <input style={{padding:"10px",marginTop:"5px",color:"white",fontWeight:"bold"}} onChange={(e)=>{onPassword(e)}} type="text" value={password}  placeholder="Enter password"/>
            <button style={{backgroundColor:"darkorange",width:"50%"}}>Login</button>
            <p style={{color:"white"}} onClick={()=>navigate('/signup')}>Don't have an Account ? Signin</p>
        </form>
        </>
    )
}