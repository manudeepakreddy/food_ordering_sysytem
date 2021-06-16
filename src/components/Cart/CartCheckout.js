import classes from './CartCheckout.module.css';
import {useRef , useState} from 'react';
const valid = (value) => value.trim() !== "";
// const is5 = (val) => val.trim().lenght === 5;
const CartCheckout= (props) =>
{
   
  const [attributes , setAttributes] = useState({
    name : true,
    street : true,
    postal : true ,
    city : true
  });
    const nameInput = useRef();
    const streetInput = useRef();
    const postalInput = useRef();
    const cityInput = useRef();
    const CartCheckoutHandler = (event) =>
    {
        event.preventDefault();
        const nameinpt = nameInput.current.value;
        const streetinpt = streetInput.current.value;
        const postalinpt = postalInput.current.value;
        const cityinpt = cityInput.current.value;
        const namei = valid(nameinpt);
        const streeti = valid(streetinpt);
        const postali = valid(postalinpt);
        const cityi = valid(cityinpt);
        setAttributes({name : namei , street : streeti , postal : postali , city : cityi});
        const details = {
          name : nameinpt,
          city : cityinpt,
          street : streetinpt,
          postal : postalinpt
        }
        if(namei && streeti && postali && cityi)
        {

          props.onCheck(details);
        }
    }
    return(
        <form className={classes.form} onSubmit={CartCheckoutHandler}>
      <div className={`${classes.control} ${!attributes.name ? classes.invalid : ""}  `}>
        <label htmlFor='name'>Your Name</label>
        <input ref = {nameInput} type='text' id='name' />
        {!attributes.name && <p>please enter valid name</p>}
      </div>
      <div className={`${classes.control} ${!attributes.street ? classes.invalid : ""}  `}>
        <label htmlFor='street'>Street</label>
        <input ref = {streetInput} type='text' id='street' />
        {!attributes.street && <p>please enter valid street</p>}
      </div>
      <div className={`${classes.control} ${!attributes.postal ? classes.invalid : ""}  `}>
        <label htmlFor='postal'>Postal Code</label>
        <input ref = {postalInput} type='text' id='postal' />
        {!attributes.postal && <p>please enter valid postal id</p>}
      </div>
      <div className={`${classes.control} ${!attributes.city ? classes.invalid : ""}  `}>
        <label htmlFor='city'>City</label>
        <input ref = {cityInput} type='text' id='city' />
        {!attributes.city && <p>please enter valid city</p>}
      </div>
      <div className={classes.actions}>
        <button type='button' onClick={props.closeCrt}>
          Cancel
        </button>
        <button className={classes.submit}>Confirm</button>
      </div>
    </form>
    );
}
export default CartCheckout;
