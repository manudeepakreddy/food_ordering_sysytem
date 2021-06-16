import classes from './MealItem.module.css';
import MealItemForm from './MealItemForm';
import {useContext} from 'react';
import CartContext from '../../../store/CartContext';
const MealItem = (props) =>
{
    const cartCtx = useContext(CartContext);
    const cost = `$${props.cost.toFixed(2)}`;
    const addToCart = amount =>
    {
        // console.log(props.price,"-----------");
        cartCtx.addItam({
            id : props.id,
            name : props.name,
            amount : amount,
            price : props.cost
        })
    }
    return(
        <li className = {classes.meal}>
            <div >
                <h3>{props.name}</h3>
                <div className = {classes.description}>
                    {props.description}
                </div>
                <div className = {classes.price}>
                    {cost} 
                </div>
            </div> 
            <div>
                <MealItemForm onAddCart = {addToCart}/>
            </div>
        </li>
    );
}
export default MealItem; 