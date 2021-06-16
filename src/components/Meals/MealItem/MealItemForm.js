import classes from './MealItemForm.module.css';
import Input from '../../UI/Input';
import { useRef,useState } from 'react';

const MealItemForm = (props) =>
{
    const [amountValid,setAmountValid]= useState(true);
    const amountInputRef = useRef();
    const submitHandler = event =>
    {
        event.preventDefault();
        const EnteredAmount = amountInputRef.current.value;
        const updatedEnteredAmount = +EnteredAmount;
        if(updatedEnteredAmount < 0 || EnteredAmount.trim().lenght === 0 || updatedEnteredAmount >5)
        {
            setAmountValid(false);
            return;
        }
        console.log(updatedEnteredAmount);
        props.onAddCart(updatedEnteredAmount);
    }
    return(
        <form className = {classes.form} onSubmit = {submitHandler}>
            <Input ref = {amountInputRef}  label = "cost" input = {
                {
                    id : "amount", 
                    type : "number",
                    min : "1",
                    max : "5",
                    step : "1",
                    defaultValue : "1"
                }
            } />
            <button>+Add</button>
            {!amountValid && <p>please enter valid amount</p>}
        </form>
    );
}
export default MealItemForm;