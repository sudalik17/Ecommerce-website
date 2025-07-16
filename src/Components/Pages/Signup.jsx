import { useState } from "react"
import { Navbar } from "../Navbar";
import { UserAuth } from "../../api/user";
import { useNavigate } from "react-router-dom";
export const Signup = ()=>{
    const navigate = useNavigate();
    const [name,setName] = useState('');
    const [email,setEmail] = useState('');
    const [password,setPassword] = useState('');
    async function submitForm(e){
        e.preventDefault();
        const data = await UserAuth(name,email,password);
        console.log(data);
        console.log("inside auth");
        if(data.request.status==201){
            alert('Account created Successfully');
            setName('');
            setEmail('');
            setPassword('');
            navigate('/login');
        }
    }
    return(
        <>
        <Navbar/>
        <form style={{display:"flex",alignItems:"center",justifyContent:"center",padding:"10px",border:"1px solid black",
        flexDirection:"column",width:"300px",height:"280px",marginLeft:"280px",backgroundColor:"palevioletred"
        }} onSubmit={(e)=>{submitForm(e)}}>
            <label style={{padding:"5px",marginTop:"4px",color:"black",fontWeight:"bold"}}>Enter Your Name</label>
            <input style={{padding:"5px"}} placeholder="Enter name" value={name} onChange={(e)=>{setName(e.target.value)}}/>
            <label style={{padding:"5px",marginTop:"4px",color:"black",fontWeight:"bold"}}>Enter Your Email</label>
            <input style={{padding:"5px"}} placeholder="Enter email" value={email} onChange={(e)=>{setEmail(e.target.value)}}/>
            <label style={{padding:"5px",marginTop:"4px",color:"black",fontWeight:"bold"}}>Enter Password</label>
            <input style={{padding:"5px"}} placeholder="Enter password" value={password} onChange={(e)=>{setPassword(e.target.value)}}/>
            <button style={{padding:"5px",marginTop:"14px",backgroundColor:"orangered"}}>Create Account</button>
        </form>
        </>
    )
}