import { useCart } from "../../Context/CartContext"
import './PriceCart.css'
import { getCartAmount } from "../../utuils/getCartAmount";
export const PriceCart = ()=>{
    const {cart} = useCart();
    const total = getCartAmount(cart);
    const del = 50;
    return(
        <>
        {
            cart.length>0?( <>
        <div className="price-container">
        <p>Price Details</p>
            <div>
            <p>Price ({cart.length}) items</p><p>price Rs {total}</p>
            </div>
            <div>
                <p>Delivery charge</p><p>Rs.50</p>
            </div>
            <div><p>Total Amount</p><p>{total+del}</p></div>
            <button>Place Order</button>
        </div>
          
        </>):<p></p>
        }
       </>
    )
}