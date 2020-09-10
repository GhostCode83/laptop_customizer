import React from 'react';
import './CartTotal.css';

function CartTotal( props ){

    const total = Object.keys(props.state.selected).reduce(
      (acc, curr) => acc + props.state.selected[curr].cost,
      0
    );
    return (<div>
      <div className="summary__total" />
      <div className="summary__total__label">Total</div>
      <div className="summary__total__value">
        {props.currency.format(total)}
      </div>
    </div>
    )

}

export default CartTotal