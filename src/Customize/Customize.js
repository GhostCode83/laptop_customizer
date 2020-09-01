import React from 'react';
import Item from '../Item/Item';

class Customize extends React.Component {
  constructor(props){
    super(props)

  }

  render() {
    return(
      <form className="main__form">
        <h2>Customize your laptop</h2>
        {this.props.features}
        <Item features={this.props.features}/>
      </form>)
  }
}

export default Customize