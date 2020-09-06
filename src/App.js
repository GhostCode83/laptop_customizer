import React from 'react';
import Header from './Header/Header';
import Cart from './Cart/Cart';

const { default: Main } = require("./Main/Main")
const USCurrencyFormat = new Intl.NumberFormat('en-US', {
  style: 'currency',
  currency: 'USD'
});


class App extends React.Component {
  constructor(props){
    super(props)
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
      features: {
        Processor: [
          {
            name: '17th Generation Intel Core HB (7 Core with donut spare)',
            cost: 700
          },
          {
            name: 'Professor X AMD Fire Breather with sidewinder technology',
            cost: 1200
          }
        ],
        "Operating System": [
          {
            name: 'Ubuntu Linux 16.04',
            cost: 200
          },
          {
            name: 'Bodhi Linux',
            cost: 300
          }
        ],
        "Video Card": [
          {
            name: 'Toyota Corolla 1.5v',
            cost: 1150.98
          },
          {
            name: 'Mind mild breeze 2000',
            cost: 1345
          }
        ],
        Display: [
          {
            name: '15.6" UHD (3840 x 2160) 60Hz Bright Lights and Knobs',
            cost: 1500
          },
          {
            name: '15.3" HGTV (3840 x 2160) Home makeover edition',
            cost: 1400
          },
        ]
      }
    };
  }
      
  updateFeature = (feature, newValue) => {
    console.log(feature, newValue)
    const selected = Object.assign({}, this.state.selected); //clones the this.state.selected object
    selected[feature] = newValue; // takes the item value from onChange event handler and passes that value to the cloned object of this.state.selected
    console.log(selected )
    this.setState({
      selected
    });
  };

  render() {
    return (
      <div className="App">
        <Header />
        <Main state={this.state}
          currency={USCurrencyFormat}
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