import CartContext from './CartContext';
import {useReducer} from 'react';
const DefaultCartState = 
{
    items : [],
    toatlAmount : 0
}
const CartReducer = (state,action) =>
{
    if(action.type === 'add')
    {
        const UpdateTotalAmt = state.toatlAmount + action.item.price * action.item.amount;
        // console.log(UpdateTotalAmt);
        const ItemIsInCart = state.items.findIndex(item => item.id === action.item.id);
        // console.log(ItemIsInCart,"--------");
        const ExistingCartItem = state.items[ItemIsInCart];
        // console.log(ExistingCartItem,"======");
        // let updatedItem;
        let updatedItemss;
        if(ExistingCartItem)
        {
            // console.log(ExistingCartItem,";;;;;;;;;;;");
            const updatedItem = {
                ...ExistingCartItem,amount : ExistingCartItem.amount+action.item.amount
            };

            updatedItemss = [...state.items];
            updatedItemss[ItemIsInCart] = updatedItem;

        }
        else{
            // updatedItem = {...action.item};
            updatedItemss = state.items.concat(action.item);
        }
        // const updatedItems = state.items.concat(action.item);
        return{
            items : updatedItemss,
            toatlAmount : UpdateTotalAmt
        }

    }
    if(action.type === "remove")
    {
        const ItemIsInCart = state.items.findIndex((item) => item.id === action.id);
        const ExistingCartItem = state.items[ItemIsInCart];
        const updatedAmt = state.toatlAmount - ExistingCartItem.price;
        let updatedItemss
        if(ExistingCartItem.amount === 1)
        {
            updatedItemss = state.items.filter(item => item.id !== action.id)
        }
        else{
            const updatedAmount = {...ExistingCartItem ,amount : ExistingCartItem.amount - 1};
            updatedItemss = [...state.items];
            updatedItemss[ItemIsInCart] = updatedAmount;
            
        }
        return {
            items : updatedItemss,
            toatlAmount : updatedAmt
        };
    }
    if(action.type = "clear")
    {
        return DefaultCartState;
    }
    return DefaultCartState;
}
const CartProvider =(props) =>
{
    const [CartState , dispatchedCartAction] = useReducer(CartReducer,DefaultCartState);
    const AddItemHandler = (item) =>
    {
        dispatchedCartAction({type : 'add' , item : item})
    }
    const RemoveItemHandler = (id) =>
    {
        dispatchedCartAction({type : 'remove' , id : id})
    }
    const cartClearHandler = ()=>
    {
        dispatchedCartAction({type : 'clear'})
    }
    const cartContext =
    {
    item : CartState.items,
    totalAmt : CartState.toatlAmount,
    addItam : AddItemHandler ,
    removeItem : RemoveItemHandler,
    cartClear : cartClearHandler
    } 
    return <CartContext.Provider value = {cartContext}>
        {props.children}
    </CartContext.Provider>
}
export default CartProvider;