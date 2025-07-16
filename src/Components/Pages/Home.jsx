import { Navbar } from "../Navbar"
import { getallproducts } from "../../api/getallproducts"
import {getallcategories} from "../../api/getallcategories"
import { useEffect, useState } from "react"
import { AddProduct } from "../AddProduct";
export const Home = ()=>{
    const [product,setProduct] = useState([]);
    const [cat,setCat] = useState([]);
    const [active,setActive] = useState(null);
    const [filterproduct,setfilterproduct] = useState([]);
    useEffect(()=>{
       async function demo(){
        const data = await getallproducts();
        const cat = await getallcategories();
        setProduct(data);
        setfilterproduct(data);
        setCat(cat);
       }
       demo();
    },[]);
    function oncatClick(catid){
        const filtercat = product.length>0 ? product.filter((p)=>p.category && p.category.id===catid):[]
        setfilterproduct(filtercat);
        setActive(catid);
    }
    function reset(){
      setfilterproduct(product);
      setActive(-1);
    }
    return(
        <>
        <Navbar/>
        <main>
            <div style={{display:"flex",alignItems:"center",justifyContent:"center",flexDirection:"row",flexWrap:"wrap",background:"cadetblue",gap:"20px",padding:"10px",marginBottom:"50px"}}>
                {cat.length>0?cat.map((p)=><div style={{fontSize:"20px",fontWeight:"bold",backgroundColor:active===p.id?"orange":"palevioletred",borderRadius:"5px",padding:"10px"}} onClick={()=>{oncatClick(p.id)}} key={p.id}>{p.name}</div>):<div></div>}
                <div style={{fontSize:"20px",fontWeight:"bold",backgroundColor:active===-1?"orange":"palevioletred",borderRadius:"5px",padding:"10px"}} onClick={reset}>All</div>
            </div>
        {
            filterproduct.map((product)=><AddProduct key={product.id} product={product}/>)
        }
        </main>
        </>
    )
}