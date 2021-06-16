import React, {useState} from 'react';
import Header from './components/Layout/Header';
import  Meals from '../src/components/Meals/Meals'
import Cart from '../src/components/Cart/Cart';
import CartProvider from './store/CartProvider';
import './App.css';

function App() {
  const [openCart , setOpenCart ] = useState(false);
  const CartOpenHAndler = () =>
  {
    setOpenCart(true);
  }
  const CartCloseHandler = () =>
  {
    setOpenCart(false);
  }
  return (
    <CartProvider >
      {openCart && <Cart closeCart = {CartCloseHandler} />}
     <Header openCart = {CartOpenHAndler} />
      <Meals/>
     </CartProvider>

  );
}

export default App;
