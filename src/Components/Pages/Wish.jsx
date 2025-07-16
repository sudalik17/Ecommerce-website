import { useWish } from "../../Context/WishContext"
import { Navbar } from "../Navbar";
import { WishCart } from "./WishCart";
export const Wish=()=>{
    const {wish} = useWish();
    return(
        <>         <Navbar/>
                   <h1>My Wishlist</h1>
                   <main style={{display:"flex",alignItems:"center",flexDirection:"row",gap:"30px",width:"100%"}}>
                   <div style={{display:"flex",alignItems:"center",flexDirection:"column",width:"100%"}}>
                   {
                       wish.length>0?wish.map((p)=><WishCart product={p}/>):<p>Wishlist is Empty</p>
                   }
                   </div>
                   </main>
                   </>
    )
}