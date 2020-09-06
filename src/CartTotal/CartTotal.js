import React from 'react';

class CartTotal extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    const total = Object.keys(this.props.state.selected).reduce(
      (acc, curr) => acc + this.props.state.selected[curr].cost,
      0
    );
    return (<div>
      <div className="summary__total" />
      <div className="summary__total__label">Total</div>
      <div className="summary__total__value">
        {this.props.currency.format(total)}
      </div>
    </div>
    )
  }
}

export default CartTotal