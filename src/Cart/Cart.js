import React from 'react';
import CartOptions from '../CartOptions/CartOptions';


class Cart extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <section className="main__summary">
        <h2>Your cart</h2>
        {this.props.summary}
        <div className="summary__total" />
        <div className="summary__total__label">Total</div>
        <div className="summary__total__value" />
        {this.props.currency}
        <CartOptions />
      </section>

    )
  }
}

export default Cart