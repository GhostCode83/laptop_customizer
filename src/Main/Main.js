
import React, { Component } from 'react';
import Cart from './../Cart/Cart'
import Features from './../Features/Features.js'
import './../App.css'
// Normalizes string as a slug - a string that is safe to use
// in both URLs and html attributes
import slugify from 'slugify';

import { render } from 'react-dom';

// This object will allow us to
// easily convert numbers into US dollar values
const USCurrencyFormat = new Intl.NumberFormat('en-US', {
  style: 'currency',
  currency: 'USD'
});

class Main extends Component {
  constructor() {
    super()
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
      }
    };
  }

  /* Customize your Laptop section, updates state, so it needs to be here with state*/
  updateFeature = (feature, newValue) => {
    const selected = Object.assign({}, this.state.selected); //clones the this.state.selected object
    selected[feature] = newValue; // takes the item value from onChange event handler and passes that value to the cloned object of this.state.selected
    this.setState({
      selected
    });
  };

  /* this section uses state, can you pass checked like this,  {checked={this.props.checked}}? */
  render() {
    const features /* not in state, so don't need "this" to access it*/ = Object.keys(this.props.features).map((feature /* each iteration of features */, idx) => { //a method that returns an array of each key in order
      const featureHash = feature + '-' + idx; //stores the value of individual key a dash and the key's index
      const options = this.props.features[feature].map(item => {//accesses features prop at the feature level and maps over each item. why isn't it picking up the cost as well?  (how) does it know the difference?
        const itemHash = slugify(JSON.stringify(item));  //creates a string with dashes of each item
        return (
          <div key={itemHash} className="feature__item">
            <input
              type="radio"
              id={itemHash}
              className="feature__option"
              name={slugify(feature)}
              checked={item.name === this.state.selected[feature].name}
              onChange={() => this.updateFeature(feature, item)}
            />
            <label htmlFor={itemHash} className="feature__label">
              {item.name} ({USCurrencyFormat.format(item.cost)})
            </label>
          </div>
        );
      });

      return (
        <fieldset className="feature" key={featureHash}>
          <legend className="feature__name">
            <h3>{feature}</h3>
          </legend>
          {options}
        </fieldset>
      );
    });



    const total = Object.keys(this.state.selected).reduce(
      (acc, curr) => acc + this.state.selected[curr].cost,
      0
    ); //adding up the total amount of the array that was created with Object.keys()
    console.log(this.state)
    return (
      <main>
        <Features
          features={features}
          status={this.state} />
        <section className="main__summary">
          <Cart
            currency={USCurrencyFormat.format(total)}
            state={this.state} />
        </section>
      </main>
    );
  }
}







export default Main;