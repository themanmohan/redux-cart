import {CLEAR,INCREASE,DECREASE,REMOVE, GET_TOTAL} from './Action'
// import CartItem from './components/CartItem';
function reducer(state,action){
    if(action.type===CLEAR){
        return{...state,cart:[]}
    }
    if(action.type===INCREASE){
       let tempItem=state.cart.map((cartItem)=>{
           if(cartItem.id ===action.payload.id){
            cartItem = {...cartItem,amount:cartItem.amount + 1 } 
           }
           return cartItem;
       });
       return {...state,cart:tempItem}
    }
  
    if(action.type===DECREASE){
        let tempItem=[];
        if(action.payload.amount===1){
            tempItem = state.cart.filter(tempItem=>tempItem.id !==action.payload.id)
           
        }else{
            tempItem=state.cart.map((cartItem)=>{
                if(cartItem.id ===action.payload.id){
                 cartItem = {...cartItem,amount:cartItem.amount - 1 } 
                }
                return cartItem;
            });
        }
        return {...state , cart:tempItem}
    }
    if(action.type===REMOVE){
       return{
           ...state,cart:state.cart.filter(CartItem=>CartItem.id !==action.payload.id)
       }
    }
    if(action.type===GET_TOTAL){
        let{total,amount}=state.cart.reduce(
            (cartTotal,cartItem)=>{
               
               const {price,amount}=cartItem;
                const itemTotal=price * amount;
               cartTotal.total +=itemTotal;
   
                 cartTotal.amount +=amount;
                return cartTotal;
            },
            {
                total:0,
                amount:0
            }
        );
        total=parseFloat(total.toFixed(2));
        return {...state,total,amount}
    }

    return state;
  
  }
  export default reducer;