import React from 'react';

class FeatureOptions extends React.Component {
  constructor(props){
    super(props)
  }

  render() {
    return( 
      this.props.features
    )
  }
}

export default FeatureOptions