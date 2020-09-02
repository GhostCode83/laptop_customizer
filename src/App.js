import React from 'react';
import Header from './Header/Header';

const { default: Main } = require("./Main/Main")

class App extends React.Component {
  constructor(props){
    super(props)
  }
      
  render() {
    return (
      <div className="App">
        <Header />
        <Main features={this.props.features}/>
      </div>
    );
  }
}





export default App;