import './HorizontalCart.css'
import { useCart } from '../../Context/CartContext'
export const HorizontalCart = ({product})=>{
  const {dispatch} = useCart();
  function removeCart (product){
  dispatch({
    type:'REMOVE',
    payload:{id:product.id}
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
  <button onClick={()=>removeCart(product)} style={{ background: "orange", width: "100%", display: "flex", alignItems: "center", justifyContent: "center", gap: "8px" }}>
    <span className="material-symbols-outlined">
     
      add_shopping_cart
    </span>
    Remove from cart
  </button>

  <button style={{ background: "red", width: "100%", marginTop: "10px" }}>
    <span className="material-symbols-outlined">favorite </span>
    Favourite
  </button>
</div>

        </div>
        </div>
        </div>
        </>
    )
}