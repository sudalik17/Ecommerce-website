export const cartReducer =(state,action)=>{
        switch(action.type){
            case 'ADD':
                return{
                    ...state,
                    cart:[...state.cart,action.payload.product]
                }
                case 'REMOVE':
                    return{
                        ...state,
                        cart:state.cart.filter((p)=>p.id!==action.payload.id)
                    }
                default:
                    return state
        }
}