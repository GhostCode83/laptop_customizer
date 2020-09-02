import React from 'react';
import CartItems from '../CartItems/CartItems';

class Cart extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
     

    return (
      <section className="main__summary">
        <h2>Your cart</h2>
        <CartItems state={this.props.state}/>

        
        <div className="summary__total" />
        <div className="summary__total__label">Total</div>
        <div className="summary__total__value">
        {this.props.currency}
          </div>

      </section>

    )
  }
}

export default Cart