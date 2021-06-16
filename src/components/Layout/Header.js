import React , {Fragment } from 'react';
import mealsImage from '../../Images/meals.jpg';
import classes from './Header.module.css';
import CartButton from './CartButton';
// import CartContext from '../../store/CartContext';
const Header = (props) =>
{
    
    return (
        <Fragment>
            <header className = {classes.header}>
                <h1>ReactMeals</h1>
                <p>.</p>
                <CartButton onClick = {props.openCart}/>
                <p>.</p>
               
            </header>
            <div>
            <img className = {classes['main-image']} src = {mealsImage} alt = "bg-meal"></img>
            </div>
        </Fragment>
    );
}
export default Header;