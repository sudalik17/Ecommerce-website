export const WishlistReducer =(state,action)=>{
    switch(action.type){
        case 'Add':{
          return{
            ...state,
            wish:[...state.wish,action.payload.product]
          }
        }
        case 'remove':
            return{
                ...state,
                wish : state.wish.filter((p)=>p.id!==action.payload.id)
            }
            default:
                return state;
    }
}