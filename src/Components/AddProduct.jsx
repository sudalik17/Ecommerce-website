import './AddProduct.css'
import { useCart } from '../Context/CartContext'
import { useWish } from '../Context/WishContext';
import { FindproductinCart } from '../utuils/FindproductinCart';
import { useNavigate } from 'react-router-dom';
export const AddProduct = ({product})=>{
  const navigate = useNavigate();
  const {cart,dispatch} = useCart();
  const {dispatchs}  = useWish();
  const isproductincart = FindproductinCart(cart,product.id);
  function addCart(product){
    !isproductincart?
     dispatch({
      type:'ADD',
      payload:{product}
     }):navigate('/cart');
  }
  function addtoWish(product){
    dispatchs({
      type:'Add',
      payload:{product}
    })
  }
  const fallbackImage = 'https://picsum.photos/200/300';
    return(
        <>
        <div className='cont'>
        <div className="container">
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
  <button onClick={()=>addCart(product)} style={{ background: "orange", width: "100%", display: "flex", alignItems: "center", justifyContent: "center", gap: "8px" }}>
    <span className="material-symbols-outlined">
     
      add_shopping_cart
    </span>
    
      {
        isproductincart?'Go To Cart':'Add To cart'
      }
  </button>

  <button style={{ background: "red", width: "100%", marginTop: "10px" }} onClick={()=>addtoWish(product)}>
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