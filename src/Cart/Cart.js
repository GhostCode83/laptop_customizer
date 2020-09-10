import React from 'react';
import CartItems from '../CartItems/CartItems';
import CartTotal from '../CartTotal/CartTotal';
import './Cart.css'

function Cart( props ){
 
    return (
      <section className="main__summary">
        <h2>Your cart</h2>
        <CartItems state={props.state}/>
        <CartTotal 
          currency={props.currency}
          state={props.state}/>
     </section>
    )
  
}

export default Cart