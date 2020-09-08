import React from 'react';
import FeatureOptions from '../FeatureOptions/FeatureOptions';
import store from './../STORE'
import slugify from 'slugify';


class Features extends React.Component {
  constructor(props) {
    super(props)

  }

  render() {
    console.log(this.props.status, 'hello')
    const features = Object.keys(store).map((feature, idx) => {
      const featureHash = feature + '-' + idx; //stores the value of individual key a dash and the key's index
      const options = store[feature].map(item => {//accesses features prop at the feature level and maps over each item. why isn't it picking up the cost as well?  (how) does it know the difference?
        const itemHash = slugify(JSON.stringify(item));  //creates a string with dashes of each item
        return (
          <div key={itemHash} className="feature__item">
            <input
              type="radio"
              id={itemHash}
              className="feature__option"
              name={slugify(feature)}
              checked={item.name === this.props.status.selected[feature].name}
              onChange={() => this.props.updateFeature(feature, item)} />
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

    return (
      <form className="main__form">
        <h2>Customize your laptop</h2>
        <FeatureOptions
          features={features}
          status={this.props.status}
          currency={this.props.currency}/>
      </form>
    )
  }
}

export default Features