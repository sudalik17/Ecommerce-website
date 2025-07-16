export const LoginReducer =(state,action)=>{
    switch(action.type){
        case 'EMAIL': return{
            ...state,email:action.payload
        }
        case 'PASSWORD' : return{
            ...state,password:action.payload
        }
        case 'TOKEN' : return{
            ...state,token:action.payload.token
        }
        case 'LOGOUT' : return{
            ...state,email:'',password:'',token:''
        }
        default: return state
    }
}