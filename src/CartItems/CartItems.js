import React from 'react';

class CartItems extends React.Component {
  constructor(props) {
    super(props)
  }
  render() {

    return     Object.keys(this.props.state.selected).map((feature, idx) => { //mapping over the keys of this.state.selected. (Processor, Operating System ...) to find each key and its index (Processor 0, Operating System 1, Video Card 2, Display 3)
      const featureHash = feature + '-' + idx; //stores the name, a dash and the index of each key
      const selectedOption = this.props.state.selected[feature]; //stores new object items for each feature based on which is selected, see state for default values
      return (
        <div className="summary__option" key={featureHash}>
          <div className="summary__option__label">{feature} </div>
          <div className="summary__option__value">{selectedOption.name}</div>
          <div className="summary__option__cost">
            {this.prop}
          </div>
        </div>
      );
    })
  }
}

export default CartItems