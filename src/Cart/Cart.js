import React from 'react';
import CartItems from '../CartItems/CartItems';
import CartTotal from '../CartTotal/CartTotal';

class Cart extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <section className="main__summary">
        <h2>Your cart</h2>
        <CartItems state={this.props.state}/>
        <CartTotal 
          currency={this.props.currency}
          state={this.props.state}/>
     </section>
    )
  }
}

export default Cart