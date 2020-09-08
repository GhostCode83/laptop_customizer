
import React, { Component } from 'react';
import Features from './../Features/Features.js'
import './../App.css'

// Normalizes string as a slug - a string that is safe to use
// in both URLs and html attributes
import store from './../STORE'

import { render } from 'react-dom';

// This object will allow us to
// easily convert numbers into US dollar values


class Main extends Component {
  constructor(props) {
    super(props)
  }
  /* this section uses state, can you pass checked like this,  {checked={this.props.checked}}? */
  render() {
 

    //adding up the total amount of the array that was created with Object.keys()
    console.log(this.props.state)
    return (
      <main>
        <Features
          status={this.props.state} 
          currency={this.props.currency}
          updateFeature={this.props.updateFeature}
          />
      </main>
    );
  }
}

export default Main;