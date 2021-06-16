import React from 'react';
const CartContext = React.createContext({
    item : [],
    totalAmt : 0,
    addItam : (item) =>{},
    removeItem : (id) => {},
    cartClear : () =>{}
})
export default CartContext;