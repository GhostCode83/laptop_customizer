import React from 'react';
import Cart from './../Cart/Cart'
import Customize from '../Customize/Customize';

class Main extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <main>
        <Customize 
          features={this.props.features}/>
        
        <Cart 
          summary={this.props.summary}
          currency={this.props.currency}/>
      </main>

    )
  }
}

export default Main