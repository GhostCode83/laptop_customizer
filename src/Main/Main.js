
import React, { Component } from 'react';
import Features from './../Features/Features.js'
import './../App.css'
// Normalizes string as a slug - a string that is safe to use
// in both URLs and html attributes
import slugify from 'slugify';

import { render } from 'react-dom';

// This object will allow us to
// easily convert numbers into US dollar values


class Main extends Component {
  constructor(props) {
    super(props)
  }

  /* this section uses state, can you pass checked like this,  {checked={this.props.checked}}? */
  render() {
    const features = Object.keys(this.props.state.features).map((feature, idx) => {
      const featureHash = feature + '-' + idx; //stores the value of individual key a dash and the key's index
      const options = this.props.state.features[feature].map(item => {//accesses features prop at the feature level and maps over each item. why isn't it picking up the cost as well?  (how) does it know the difference?
        const itemHash = slugify(JSON.stringify(item));  //creates a string with dashes of each item
        return (
          <div key={itemHash} className="feature__item">
            <input
              type="radio"
              id={itemHash}
              className="feature__option"
              name={slugify(feature)}
              checked={item.name === this.props.state.selected[feature].name}
              onChange={() => this.props.updateFeature(feature, item)}/>
            <label 
              htmlFor={itemHash} 
              className="feature__label">
              {item.name} 
              ({this.props.currency.format(item.cost)})
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

    //adding up the total amount of the array that was created with Object.keys()
    console.log(this.props.state)
    return (
      <main>
        <Features
          features={features}
          status={this.props.state} />

      </main>
    );
  }
}

export default Main;