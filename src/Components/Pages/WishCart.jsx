import { useWish } from "../../Context/WishContext";
import { useCart } from "../../Context/CartContext";
export const WishCart = ({product})=>{
    const {dispatchs} = useWish();
    const {dispatch} = useCart();
  function RemoveCart (product){
  dispatchs({
    type:'remove',
    payload:{id:product.id}
  })
  }
  function AddCart(product){
     dispatch({
      type:'ADD',
      payload:{product}
     })
  }
    return(
        <>
        <div className="h-cont">
        <div className="h-container">
        <div className="img-container"> 
       <img
  src={
    product.images[0]?.includes("placeimg.com")
      ? fallbackImage
      : product.images[0]
  }
  alt={product.title}
  onError={(e) => (e.target.src = fallbackImage)}
  style={{ width: "200px", height: "auto" }}
/>

        </div>
        <div className="text-cont">
        <p style={{fontSize:"18px",fontWeight:"bold"}}>{product.title}</p>
        <p style={{fontSize:"18px",fontWeight:"bold"}}>{product.price}</p>
       <div style={{ width: "100%" }}>
  <button onClick={()=>RemoveCart(product)} style={{ background: "orange", width: "100%", display: "flex", alignItems: "center", justifyContent: "center", gap: "8px" }}>
  
    <span className="material-symbols-outlined">favorite </span>
    Remove from Wish
  </button>

  <button style={{ background: "red", width: "100%", marginTop: "10px" }}onClick={()=>{AddCart(product)}}>
      <span className="material-symbols-outlined">
      add_shopping_cart
    </span>
    Add to cart
  </button>
</div>

        </div>
        </div>
        </div>
        </>
    )
}