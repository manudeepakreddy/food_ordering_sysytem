import classes from './Cart.module.css';
import Model from '../UI/Model';
import React, {useContext , useState} from 'react';
import CartContext from'../../store/CartContext';
import CartItem from './CartItem';
import CartCheckout from './CartCheckout';
// import { json } from 'express';
const Cart = (props) =>
{
    const cartCtx = useContext(CartContext);
    const [isorder,setIsorder] = useState(false);
    const [loading , setLoading] = useState(false);
    const[submitted , setSubmitted] = useState(false);
    const totalAmount = `$${cartCtx.totalAmt.toFixed(2)}`;
    const cartItemHandler =(item) =>
    {
        
        cartCtx.addItam({...item,amount : 1});
    }
    const orderclickHandler = () =>
    {
        setIsorder(true);
    }
    const cartItemRemoveHandler = (id) =>
    {
        cartCtx.removeItem(id);
    }
    const CartCheckOutHandler = async (value) =>
    {
        setLoading(true);
        const response = await fetch("https://react-5-default-rtdb.firebaseio.com/coustemerDetails.json",{
            method : 'POST',
            body : JSON.stringify({
                user : value,
                ordered : cartCtx.item
            })
        });
        setLoading(false);
        setSubmitted(true);
        cartCtx.cartClear();
    };
    const CartItems = <ul className = {classes['cart-items']}>{ cartCtx.item.map((item) => <CartItem key = {item.id} id = {item.id} name = {item.name} price = {item.price} amount = {item.amount} onRemove = {cartItemRemoveHandler.bind(null,item.id)} onAdd = {cartItemHandler.bind(null,item)} />) }</ul>
    const cartItemss = <React.Fragment>
        {CartItems }
            <div className = {classes.total}>
                <span> Total cost </span>
                <span> {totalAmount}</span>
            </div>
            {isorder ? <CartCheckout onCheck = {CartCheckOutHandler} closeCrt = {props.closeCart} /> :
            <div className = {classes['actions']}>
                <button className = {classes['button--alt']} onClick = {props.closeCart}> Close </button>
                {cartCtx.item.length > 0 && <button className = {classes.button} onClick = {orderclickHandler}  > Order </button>}
            </div>}
    </React.Fragment>


    return(
        <Model byClick = {props.closeCart}>
            {!submitted && !loading && cartItemss}
            {loading && !submitted && <p>Loading...</p>}
            {!loading && submitted && <React.Fragment>
                <p>Data is submitted sucessfully...</p>
                <div className = {classes['actions']}>
                <button className = {classes['button']} onClick = {props.closeCart}> Close </button>
            </div>
                </React.Fragment>}
            

        </Model>
    );
}
export default Cart;