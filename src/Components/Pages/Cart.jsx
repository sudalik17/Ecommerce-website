import { Navbar } from "../Navbar"
import { HorizontalCart } from "./HorizontalCart"
import { useCart } from "../../Context/CartContext"
import { PriceCart } from "./PriceCart"
export const Cart =()=>{
    const {cart} = useCart();
    return(
        <>
        <Navbar/>
        <h1>My cart</h1>
        <main style={{display:"flex",alignItems:"center",flexDirection:"row",gap:"30px",width:"100%"}}>
        <div style={{display:"flex",alignItems:"center",flexDirection:"column",width:"100%"}}>
        {
            cart.length>0?cart.map((p)=><HorizontalCart product={p}/>):<p>Cart is Empty</p>
        }
        </div>
       <div style={{display:"flex",alignItems:"center",marginBottom:"620px"}} >  <PriceCart/> </div>
        </main>
        </>
    )
}