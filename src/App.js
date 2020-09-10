import React from 'react';
import Header from './Header/Header';
import Cart from './Cart/Cart';

const { default: Main } = require("./Main/Main")
const USCurrencyFormat = new Intl.NumberFormat('en-US', {
  style: 'currency',
  currency: 'USD'
});

class App extends React.Component {
  constructor( props ){
    super( props )
    this.state = {
      selected: {
        Processor: {
          name: '17th Generation Intel Core HB (7 Core with donut spare)',
          cost: 700
        },
        'Operating System': {
          name: 'Ubuntu Linux 16.04',
          cost: 200
        },
        'Video Card': {
          name: 'Toyota Corolla 1.5v',
          cost: 1150.98
        },
        Display: {
          name: '15.6" UHD (3840 x 2160) 60Hz Bright Lights and Knobs',
          cost: 1500
        }
      },
    };
  }
      
  updateFeature = ( feature, newValue ) => {
    const selected = Object.assign({}, this.state.selected); 
    selected[feature] = newValue; 
    this.setState({
      selected
    });
  };

  render() {

    return (
      <div className="App">
        <Header />
        <Main 
          selected={this.state.selected}
          updateFeature={this.updateFeature}/>
        <section className="main__summary">
          <Cart
            state={this.state} 
            currency={USCurrencyFormat}/>
        </section>
      </div>
    );

  }
}

export default App;