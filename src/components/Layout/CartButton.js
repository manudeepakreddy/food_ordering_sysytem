import {useContext , useEffect , useState} from 'react';
import CartIcon from '../Cart/CartIcon';
import classes from './CartButton.module.css';
import CartContext from '../../store/CartContext';
const CartButton = (props) =>
{
    const[btnHigh , setBtnHigh] = useState(false);
    const cartCtx  = useContext(CartContext);
    const {item} = cartCtx;
    const numberItemsCart = cartCtx.item.reduce((currentNum,itm) =>  currentNum + itm.amount,0)
    const btnClass = `${classes.button} ${(btnHigh)? classes.bump : ''}`;
    useEffect(()=>{
        // if(cartCtx.item.length === 0)
        // {
        //     return;
        // } 
        setBtnHigh(true);
        const timmer = setTimeout(()=>
        {
            setBtnHigh(false);
        },300);
        return ()=>
        {
            clearTimeout(timmer);
        }
    },[item])

    return(
        <button className = {btnClass} onClick = {props.onClick}>
        <span className = {classes.icon}><CartIcon/></span>
        <span>Cart Items</span>
        <span className = {classes.badge}>{numberItemsCart}</span>
        </button>
    );
}
export default CartButton;