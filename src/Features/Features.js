import React from 'react';
import Item from '../CartItems/CartItems';
import FeatureOptions from '../FeatureOptions/FeatureOptions';

class Features extends React.Component {
  constructor(props){
    super(props)

  }
  
  render(){
    return(
      <form className="main__form">
          <h2>Customize your laptop</h2>
          <FeatureOptions features={this.props.features}/>
        </form>
    )
  }
}

export default Features